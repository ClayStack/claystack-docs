# Getting Started with Sonic

This is a starter guide for Sonic. It will help you understand the basic concepts of Sonic and how interact with the contracts to create limit orders and fulfill them. For the purpose of this guide, we will assume you have familiarity with Javascript and ethers.js.

Few things you may need along the way:

- [Sonic ABI](../contracts/sonic)
- [Deployed Contracts](../deployed-contracts)

For this guide we will use csMATIC on Mumbai Testnet. You can get csMATIC from the [ClayStack Victoria](https://victoria.claystack.com/).

#### csMATIC Mumbai
```
0x2eD77c504bF34D1d38fd9556D3982dF604f9c3f7
```

#### Sonic Mumbai
```
0x9B8aad2746e94b66f18CF68b4b0E9EA19b9C86eF
```

### Ethers & ABI set-up

For the full guide we will be using several parts and functions. Here we are setting the ABI so that we can interact with the contract.

```js
// Contract set-up
const Status = {
    0: 'Staked',
    1: 'Unbonding',
    2: 'Claimable',
    3: 'Claimed'
}
const csMaticAddress = "0x2eD77c504bF34D1d38fd9556D3982dF604f9c3f7";
const SonicAddress = "0x9B8aad2746e94b66f18CF68b4b0E9EA19b9C86eF";
const UserWithdrawOrderInfo = `
    tuple(
        address token,
        uint256 orderId,
        uint256 amount,
        uint256 amountOriginal,
        uint256 amountValue,
        uint256 amountToFulfill,
        uint256 discount,
        uint256 splitFee,
        uint256 fee,
        uint256 deadline,
        uint256 startTime,
        uint256 createdAt,
        uint256 exchangeRate,
        bool allowPartial,
        uint8 status,
        address owner,
    )`
const SonicAbi = [
    "function getExchangeRate(address _token) view returns (uint256)",
    "function withdraw(address _token,uint256 _amount,uint256 _fee,uint256 _deadline,bool _allowPartial,bool _startUnstaking) returns (uint256)",
    "function fulfill(uint256 _orderId, uint256 _amount, bool _start) payable returns (uint256)",
    `function getUserOrders(address _user,uint256 _page) view returns (${UserWithdrawOrderInfo}[], uint256, uint256)`,
    'function orderAmounts(uint256 _orderId, uint256 _amount) public view returns (uint256, uint256, uint256)',
];
const csMaticAbi = ["function approve(address _spender, uint256 _value) returns (bool success)"];
const SonicContract = new ethers.Contract(SonicAddress, SonicAbi, signer);
const csMaticContract = new ethers.Contract(csMaticAddress, csMaticAbi, signer);
```

### Getting Exchange Rate

In this first example, we will get the current rate for csMATIC from Sonic

```js
// Get the exchange rate of CS-MATIC with token base 1e18
SonicContract.getExchangeRate(csMaticAddress).then((rate) => {
    console.log("Exchange rate of CS-MATIC is", rate.toString() / 1e18);
});
```

### Creating a Limit Order

Before you can create a limit order, you need to have already in your sender's address the liquid token. 

#### Approving the transfer

When an order is created, the liquid token is kept in the order as it will be either swapped for the base token, or it will right away send to the staking contract to start the withdrawal process, therefore we need to approve the transfer from the sender's wallet to Sonic.

```js
// Approve the Sonic contract to spend your CS-MATIC
const amount = ethers.utils.parseEther('1')
csMaticContract.approve(SonicAddress, amount).then((tx) => {
    // Wait for the transaction to be mined
    tx.wait().then((receipt) => {
        console.log("tx", receipt.transactionHash);
    })
})
```

#### Sending the order  

To create an order we need to specify the conditions we would like to offer. To get familiar with the options checkout the app on Victoria or read the docs on the options available. In our example we will:

- Create a limit order to sell 1 csMATIC, 
- Offering 0.3% discount if fulfilled within the next 12 hours.
- We will start unstaking right away 
- And we will allow for anyone to fulfill partial amounts of the order.

```js
const discount = 30 // 0.3% base 10,000
const deadline = 12 * 60 * 60 // 12 hours in seconds
const allowPartial = true;
const startUnstaking = true;
SonicContract.withdraw(csMaticAddress, amount, discount, deadline, allowPartial, startUnstaking).then((tx) => {
    // Wait for the transaction to be mined
    tx.wait().then((receipt) => {
        console.log("withdrawal tx", receipt.transactionHash);
    });
});
```

### Getting your orders

We can check our order was successfully created by getting the list of orders for our address directly from the contract. The first order we get in the list will be the last order we just created.

```js
// Get the user's orders, in this case we are only getting the first page
const page = 0;
SonicContract.getUserOrders(signer.address, page).then((output) => {
    const [orders, time, maxPages] = output
    console.log("Total Pages", maxPages.toString())
    orders.forEach((order) => {
        console.log("Order", order.orderId.toString(), order.amount.toString() / 1e18, Status[order.status])
    })
});
```

### Finding an order to fulfill

There will be several ways to get orders from other users and then compare which ones provide the best ROI. One method to do that is through the _**getOrders**_ function and scanning through different order id ranges (You can get the full range with _**orderNonce**_). Another alternative is through scanning the events emitted by the contract at different stages e.g. **LogWithdraw**, **LogFulfill**, **LogCancel**.

In order to keep this guide simple, we will pick an order from the list of orders we just got from the contract.

### Fulfilling an order

Using the same order we created before, we will fulfill only 50% of it. To fulfill the order, we could use MATIC or WMATIC. To make the example more complete, we will use MATIC, where we first have to calculate how much MATIC is the order worth including the discount and DAO fees.

```js
const orderId = 1000 // YOUR ORDER HERE
async function fulfillOrder () {
    const amountLiquidTokenToFulfill = ethers.utils.parseEther("0.5");

    // calculate the amount of MATIC at current exchange rate including discount and DAO fees
    const [totalValue,toOwner,toDAO] = await SonicContract.orderAmounts(orderId, amountLiquidTokenToFulfill)

    console.log("Fulfilling for", toOwner.add(toDAO).toString() / 1e18, "MATIC")
    console.log("Discount gained", totalValue.sub(toOwner).sub(toDAO) / 1e18, "MATIC")
    const tx = await SonicContract.fulfill(orderId, amountLiquidTokenToFulfill, startUnstaking, {
        value: toOwner.add(toDAO)
    });
    tx.wait().then((receipt) => {
        console.log("fulfill tx", receipt.transactionHash);
    });
}
fulfillOrder().then()
```