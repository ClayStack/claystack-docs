# Architecture

### ClayMain

ClayMain upgradable contract (aka ClayMatic for MATIC or ClayGraph for GRT) is the core contract that acts as a liquid staking pool aggregator. It is responsible for token deposits, minting and burning liquid staking tokens (csTokens), staking/unstaking funds to several nodes and applying fees.

Deposits/Withdrawals happen within the contract, and it keeps its own accounting records. On a regular basis (e.g., daily basis) an off-chain service calls the public method [**autobalance**](/contracts/claymatic#autobalance), thus triggering the staking of funds into the validating nodes. Anyone can call this method.

#### Exchange Rate
The exchange rate of base Token to csToken (e.g. MATIC to csMATIC) is calculated as the total amount of tokens (deposits + rewards + other additions) over the supply of csTokens.

The value of csToken will increase over time with respect to the base Token. Some protocols may incur in slashing, thus the exchange rate can in turn decrease.

#### Rewards
As the staking rewards accrue, the contract will regularly account for the rewards. A percentage of the rewards is transferred on a regular basis to the ClayStack vault.

#### Flash Exit & Liquidity Pool
The contract will stake a significant portion of the funds, about 95%, leaving a certain amount for liquidity in the contract. The liquidity pool is used to support the feature "Flash Exit" or instantWithdraw(). In Flash Exit, no unstaking from nodes takes place, instead the funds come directly from the contract. In exchange, a higher flash exit fee is incurred by the user. The fee is put back into the pool of tokens, thus improving the exchange rate for the other holders.

#### Nodes
Nodes are pre-approved by ClayStack as trusted parties to stake the desired funds. Their selection is based on strong track record of validating transaction, fees and SLAs.

### CsToken

csToken is a standard non-upgradable ERC20 token. At deployment time, ownership is set to ClayMain, and thus ClayMain is the only contract allowed to mint and burn csTokens.

### RoleManager

Implements Openzeppelin's AccessControl contract to determine roles and limit access on methods to ClayMain. The roles implemented are:

- _TIMELOCK_UPGRADES_ROLE_: Permission role through a TimeLock contract to upgrade ClayMain
- _TIMELOCK_ROLE_: Role to execute ClayMain operations functions through a TimeLock contract 
- _CS_SERVICE_ROLE_: Role to execute daily operations on ClayMain without the need of TimeLock

### TimeLock

Implements Openzeppelin's TimelockController to introduce time delay on some given functions in ClayMain.
