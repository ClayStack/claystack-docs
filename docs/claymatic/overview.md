# Overview

ClayMatic is the staking protocol implementation for the Polygon PoS. A user stakes and receives csMATIC which accrues staking rewards without the need of claiming or re-staking.

Polygon's staking protocol lives on Ethereum, where ClayMatic pools MATIC from deposits. The ERC-20 token is then staked across trusted validating nodes and ClayMatic will claim and re-stake rewards on a regular basis.

### Staking Rewards
Polygon has allocated 12% of its total supply of 10 billion tokens to fund the staking rewards. These rewards are to be distributed over 5 years across participating validating nodes and delegators. Through ClayStack, the user delegates MATIC across several trusted validators.

Rewards APR can range depending on the percentage of MATIC staked across the network. Try the [Reward Calculator](https://wallet.polygon.technology/staking/rewards-calculator/)

To read more about [Staking on Polygon PoS](https://polygon.technology/staking/)

### Unstaking Conditions
ClayStack Standard Unstake feature will use Polygon's checkpoint system to unstake, which currently requires the user to wait for a period of 80 checkpoints before the locked MATIC can be released. Lately this translates into a period of 3-5 days, but highly depends on network conditions.

To track Polygon's checkpoints, [continue here](https://wallet.polygon.technology/staking/)

### Polygon's Staking Contracts
ClayMatic interacts directly with Polygon's staking contracts, and not with any validating node. This delegated staking structure ensures maximum safety of the users as funds staked are protected by Polygon's contracts and are at no point in custody by the validating node.

To understand more about the contract inner workings, see [StakeManager.sol](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/stakeManager/StakeManager.sol) and [ValidatorShare.sol](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/validatorShare/ValidatorShare.sol)

### Ethereum
See on [Etherscan](https://etherscan.io/address/0x91730940DCE63a7C0501cEDfc31D9C28bcF5F905)
```
0x91730940DCE63a7C0501cEDfc31D9C28bcF5F905
```