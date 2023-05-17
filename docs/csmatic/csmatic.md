# csMATIC

csMATIC is currently available on Ethereum and Polygon. Its price is determined by the sum of MATIC deposits and rewards and the exchange rate can be verified through the [ClayMatic](/csmatic/overview) contract.

[Audit Report](https://chainsecurity.com/security-audit/claystack-matic/)

#### getExchangeRate()

Returns the current exchange rate accounting for any slashing or donations and a boolean value indicating whether a slashing event has occurred (Note: Slashing is not currently enabled on Polygon's POS staking protocol).

```solidity
function getExchangeRate() returns (uint256, bool)
```

### csMATIC on Ethereum
View on [Etherscan](https://etherscan.io/token/0x38b7bf4eecf3eb530b1529c9401fc37d2a71a912).

```
0x38b7Bf4eeCF3EB530b1529c9401FC37d2a71a912
```


### csMATIC on Polygon v1
ClayStack Staked MATIC (PoS) is the csMATIC mapped token. Anytime you interact with csMATIC tokens, verify that the addresses correspond. This token is supported by the Polygon bridge.

View on [Polygonscan](https://polygonscan.com/token/0x7ed6390f38d554B8518eF30B925b46972E768AF8) and [Token Mapper](https://mapper.polygon.technology/).
```
0x7ed6390f38d554B8518eF30B925b46972E768AF8
```

### csMATIC on Polygon v2
ClayStack Staked MATIC v2 supports unlimited staking and unstaking natively on Polygon. As staking takes places on Ethereum, ClayStack achieves this through running a decentralized and permissionless bridge between Polygon and Ethereum. 

View on [Polygonscan](https://polygonscan.com/token/0xFcBB00dF1d663eeE58123946A30AB2138bF9eb2A) 
```
0xFcBB00dF1d663eeE58123946A30AB2138bF9eb2A
```

