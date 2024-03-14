# Architecture

### ClayMain

ClayMain upgradable contract (aka ClayMatic for MATIC or ClayGraph for GRT) is the core contract that acts as a liquid staking pool aggregator. It is responsible for token deposits, minting and burning liquid staking tokens (csTokens), staking/unstaking funds to the validating nodes and applying fees.

On a regular basis an off-chain service calls the public method [**autobalance**](https://github.com/ClayStack/claystack-docs/blob/main/docs/csmatic/contracts/claymatic/README.md#autobalance) triggering the staking of funds into the validating nodes. Any contract or user can call this method.

#### Exchange Rate

The exchange rate of the underlying token to csToken (e.g. MATIC to csMATIC) is calculated as the total amount of tokens (deposits + rewards) divided by the supply of csTokens. The value of the csToken will increase over time with respect to the base token.

On some chains, where slashing is enabled, a particular validator may be penalized due to missing validation checkpoints or misbehaviour, and thus a portion of the staked funds on that given validator is slashed. This will in turn cause the exchange rate to decrease.

#### Rewards

As the staking rewards are distributed to the validators, ClayMain will account for such rewards, while a percentage will be transferred to the ClayStack treasury in accordance to the current fees.

#### Flash Exit & Liquidity Pool

As part of the staking process, the contract will reserve a portion of the funds to act as a liquidity pool, thus enabling the feature "Flash Exit". During a Flash Exit transaction, no unstaking from the validating nodes takes place, instead funds come directly from the contract's token balance.

#### Nodes

Nodes are pre-approved by ClayStack as trusted validators. Their selection is based on their performance record validating transactions, their fees and their SLA.

### csToken

csToken is a standard non-upgradable ERC20 token. At deployment time, ownership is set to ClayMain, and thus ClayMain is the only contract or entity allowed to mint and burn csTokens.

### RoleManager

The protocol implements Openzeppelin's AccessControl contract to determine roles and limit access on methods to ClayMain. The roles implemented are:

* _TIMELOCK\_UPGRADES\_ROLE_: Role to upgrade ClayMain through a TimeLock contract
* _TIMELOCK\_ROLE_: Role to execute ClayMain operations functions through a TimeLock contract
* _CS\_SERVICE\_ROLE_: Role to execute daily operations on ClayMain without the need of TimeLock

### TimeLock

Implements Openzeppelin's TimelockController to introduce time delay on some given functions in ClayMain.
