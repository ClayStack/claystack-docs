###Create and get orders

```js

const main = async () => {
    const providerPolygon = new providers.JsonRpcProvider(RPC_1);
    const signerUnstake = new ethers.Wallet(PRIVATE_KEY_1, providerPolygon);
    const signerFulfill = new ethers.Wallet(PRIVATE_KEY_2, providerPolygon);

    
    const WMATIC = new Contract(wMaticAddress, wMaticABI, signerFulfill);
    const clayExchange = new Contract(exchangeAddress,clayExchangeABI, signerUnstake );
    const csToken = new Contract(csTokenAddress,csTokenABI, signerUnstake );


    // create unstake order
    //update variables accordingly
    let _amount = ethers.utils.parseUnits("100", 18);
    let _start = false;
    let _partial = false;
    let transaction = await exchangeWithdraw(clayExchange, clayExchange.address, csToken, csToken.address, _amount, _partial, _start);
    
    //get unstake orders for your wallet(or any wallet)
    let orderIds = await getUserOrders(clayExchange, EOA_1);
    
    // create fulfill orders
    let tx = await clayExchange.fulfill(orderIds[0], _amount, _start);
    
}

// helper function to create unstake orders in clay exchange
const exchangeWithdraw = async (clayexchange, exchangeAddress, csToken, csTokenAddress, _amount, _start, _partial) => {

    await csToken.approve(exchangeAddress, _amount );
    const fee = ethers.BigNumber.from('5000');
    const deadline = ethers.BigNumber.from('172800');
    const tx = await (await clayexchange).withdraw(csTokenAddress , _amount, fee,deadline, _partial, _start);
    const transaction = await tx.wait();
    return tx
}

// helper function to get orderIds for specified eoa
const getUserOrders = async (clayExchange, eoa) => {
    let orderIds = []
    const page = ethers.BigNumber.from('0');
    const orders = await clayExchange.getUserOrders(eoa, page);
    for (let i=0; i<orders[0].length;i++){
        orderIds.push(orders[0][i]['orderId'].toNumber());
    }
    
    return orderIds
}


```  
