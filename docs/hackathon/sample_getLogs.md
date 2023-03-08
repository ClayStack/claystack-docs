### getEvents 
Javascript functions to get logs for specified events e.g LogFulfill, LogWithdraw



```js 
const { providers, Contract } = require('ethers');

// change this RPC according to the network needed
const polygonRPC =  'https://matic-mainnet.chainstacklabs.com' 
const providerPolygon = new providers.JsonRpcProvider(polygonRPC);

// provider or signer can be used in contract instatiation depending on need
const clayExchange = new Contract(address, clayExchangeABI, providerPolygon);


async function getLogs({ contract, event, startBlock, endBlock, filters }) {
    const eventFilter = contract.filters[event](...filters);
    const results = await contract.queryFilter(eventFilter, startBlock, endBlock);
    return results.map((x) => {
        return {
            ...x.args,
            blockNumber: x.blockNumber,
            tx: x.transactionHash,
        };
    });
}

// faster method to get paginated logs 
async function getLogsPagination({ contract, event, startBlock, endBlock, filters, increment = 3499 }) {
    const events = [];
    let index = startBlock;
    const toBlock = endBlock ?? (await contract.provider.getBlock('latest'))?.number;
  
    while (index <= toBlock) {
        const end = index + increment;
        console.log('LOG PAGINATION', end);
        const newEvents = await getLogs({ contract, event, startBlock: index, endBlock: end, filters });
        if (newEvents) {
            events.push(...newEvents);
        }
        index = end;
    }
    return events;
}

```

