# csMATIC

csMATIC is currently available on Ethereum and Polygon. Its price is determined by the total of MATIC deposits and rewards and the exchange rate can be verified through the [ClayMatic](/claymatic/overview) contract

#### getExchangeRate()

Returns the current exchange rate accounting for any slashing or donations and a boolean value indicating whether a slashing event has occurred (Note: Slashing is not currently enabled in Polygon).

```solidity
function getExchangeRate() returns (uint256, bool)
```

### Ethereum
See on [Etherscan](https://etherscan.io/token/0x38b7bf4eecf3eb530b1529c9401fc37d2a71a912)

```
0x38b7Bf4eeCF3EB530b1529c9401FC37d2a71a912
```


### Polygon
ClayStack Staked MATIC (PoS) is the csMATIC mapped token. Anytime you interact with csMATIC tokens, verify the addresses correspond.

See on [Polygonscan](https://polygonscan.com/address/0x7ed6390f38d554B8518eF30B925b46972E768AF8) and [Token Mapper](https://mapper.polygon.technology/)
```
0x7ed6390f38d554B8518eF30B925b46972E768AF8
```

