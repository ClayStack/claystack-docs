###Create and get orders

```js
//update with wallet details
const EOA_UNSTAKE = 'EOA_1';
const EOA_FULFILL = 'EOA_2';
const PRIVATE_KEY_1 = 'PRIVATE_KEY_1';
const PRIVATE_KEY_2 = 'PRIVATE_KEY_2';

const main = async () => {
    const polygonRPC =  'https://matic-mainnet.chainstacklabs.com'

    const providerPolygon = new providers.JsonRpcProvider(polygonRPC);
    const signerUnstake = new ethers.Wallet(PRIVATE_KEY_1, providerPolygon);
    const signerFulfill = new ethers.Wallet(PRIVATE_KEY_2, providerPolygon);

    const WETH9 = new Contract(WETH9Address, WETH9ABI.abi, signerUnstake);
    const clayExchange = new Contract(exchangeAddress,clayExchangeABI.abi, signerUnstake );
    const clayExchangeFulfiller = new Contract(exchangeAddress, clayExchangeABI.abi, signerFulfill);
    const clayManager = new Contract(clayManagerAddress,clayManagerABI.abi,signerUnstake );
    const csToken = new Contract(csTokenAddress,csTokenABI.abi, signerUnstake );


    // create unstake order
    //update variables accordingly
    const amount = "100";
    let _start = false;
    let _partial = false;
    let transaction = await exchangeWithdraw(clayExchange, exchangeAddress, clayManager, csTokenAddress, amount, _partial, _start);


    //get unstake orders for your wallet(or any wallet)
    let orderIds = await getUserOrders(clayExchange, EOA_UNSTAKE);
    // create fulfill orders 
    await exchangeFulfill(clayExchange, orderIds[0]);


}

// helper function to create unstake orders in clay exchange
const exchangeWithdraw = async (clayexchange, exchangeAddress, clayManager, csTokenAddress, _amount, _start, _partial) => {
    const amount = ethers.utils.parseUnits(_amount, 18);
    await clayManager.approve(exchangeAddress, amount , {gasLimit: 1e6});
    console.log("approved");

    const fee = ethers.BigNumber.from('5000');
    const deadline = ethers.BigNumber.from('172800');
    const options = {
        gasLimit: 1e6
    }
    const tx = await (await clayexchange).withdraw( csTokenAddress , amount, fee,deadline, _partial, _start,options);
    const transaction = await tx.wait();
    console.log("transaction", transaction);
    return tx
}
// helper function to create fulfill orders in clay exchange
const exchangeFulfill = async (clayExchange, orderId) => {
    const WMATIC = new Contract(WETH9Address, WETH9ABI.abi, signerFulfill);
    // call deposit on WMATIC and allow use
    await WMATIC.deposit({value: amount});
    await WMATIC.approve(clayExchange.address, amount);
    


    const options = {
        gasLimit: 1e6
    }
    await clayExchange.fulfill(orderId,amount, false, options);

}

// helper function to get orderIds for specified eoa
const getUserOrders = async (clayExchange, eoa) => {
    let orderIds = []
    const page = ethers.BigNumber.from('0');
    const orders = await clayExchange.getUserOrders(eoa, page);
    for (let i=0; i<orders[0].length;i++){
        orderIds.push(orders[0][i]['orderId'].toNumber());
    }
    console.log("orders", orderIds);
    return orderIds
}


```  
