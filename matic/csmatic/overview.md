# Overview

ClayMatic is the staking protocol implementation for Polygon PoS. A user stakes their MATIC and receives csMATIC, which accrues staking rewards without the need of claiming or re-staking.

Polygon's staking protocol lives on Ethereum, where ClayMatic pools MATIC from deposits. The ERC20 token is then staked across trusted validator nodes, and ClayMatic claims and re-stakes rewards on a regular basis.

\<img src={require('@site/static/ClayMatic.png').default} />

### Staking Rewards

Polygon has allocated 12% of its total supply of 10 billion tokens to fund the staking rewards. These rewards are to be distributed over 5 years across participating validating nodes and delegators. Through ClayStack, the user delegates MATIC across several trusted validators.

Rewards APY can range depending on the percentage of MATIC staked across the network.

To know more, read [Staking on Polygon PoS](https://polygon.technology/staking/).

### Unstaking Conditions

ClayStack Standard Unstake feature will use Polygon's checkpoint system to unstake, which currently requires the user to wait for a period of 80 checkpoints before the locked MATIC can be released. Currently this translates to a period of 3-5 days.

To track Polygon's checkpoints, [see here](https://staking.polygon.technology/).

### Polygon's Staking Contracts

ClayMatic interacts directly with Polygon's staking contracts, and not with any validating node. This delegated staking structure ensures maximum safety for the users as staked funds are protected by Polygon's contracts and are at no point in custody of the validating node.

To understand more about the contract inner workings, see [StakeManager.sol](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/stakeManager/StakeManager.sol) and [ValidatorShare.sol](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/validatorShare/ValidatorShare.sol).

### ClayMatic on Ethereum

View on [Etherscan](https://etherscan.io/address/0x91730940DCE63a7C0501cEDfc31D9C28bcF5F905).

```
0x91730940DCE63a7C0501cEDfc31D9C28bcF5F905
```
