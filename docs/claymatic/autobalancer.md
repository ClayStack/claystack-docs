# Autobalancer

ClayMatic pools MATIC from different users and regularly stakes across trusted validators through an external call to the contract. Anyone is able to call such function, and ClayStack ensures its constant operation to maximize yield.

#### autoBalance()

Claims rewards, transfers fees to vault and stakes across trusted nodes

```solidity
function autoBalance() returns (bool)
```

#### Latest Calls
The latest runs of autobalancer can be identified on Etherscan with method [`0x53017afc`](https://etherscan.io/address/0x91730940DCE63a7C0501cEDfc31D9C28bcF5F905) or by tracking ClayStack's autobalancer [caller](https://etherscan.io/address/0x83e58c288059cbf489f606401dc4b7ca6167d2f2).
