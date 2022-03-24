# Overview

### ClayMain
```
TODO
Edit content
```
ClayMain upgradable contract (aka ClayMatic for MATIC or ClayGraph for GRT) is the core contract that acts as a liquid staking pool aggregator. It is responsible for token deposits, minting and burning liquid staking tokens (csTokens), staking/unstaking funds to several nodes, and applying fees.

Deposits/Withdrawals come in and the contract keeps its own accounting records. On a regular basis (e.g. daily basis) an off-chain service will call the public method autobalance() thus triggering the staking of funds into the validating nodes. Anyone can call this method.

#### Exchange Rate
The exchange rate of Token to csToken (e.g. MATIC to csMATIC) is calculated as the total amount of Tokens (deposits + rewards + other additions) over the supply of csToken.

The value of csToken will increase over time with respect to the base Token. Some protocols may incur in slashing, thus the exchange rate can in turn decrease.

## MATIC

MATIC's staking uses [ValidatorShare](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/validatorShare/ValidatorShare.sol) contract for each validator node. ClayMain will stake across the nodes on a regular basis. When a withdrawal request comes in, the contract will immediately create an unstake order from a given validator, and create an order for the user to claim the funds past the unbonding period. This approach leverages MATIC's systems of order Ids to claim a given unstake request.