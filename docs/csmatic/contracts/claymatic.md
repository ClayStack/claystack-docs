# ClayMatic.sol

Main csMATIC contract for Ethereum staking.
 
### getExchangeRate()

Returns the current exchange rate accounting for any slashing or donations and a boolean value indicating whether a slashing event has occurred (Note: Slashing is not currently enabled on Polygon).

```sol
function getExchangeRate() returns (uint256, bool)
```


### getNodes()

Returns Information regarding nodes that protocol supports and respective staked amount on each node.

```sol
function getNodes() returns (StakingNode[], uint256[])
```
#### StakingNode Structure:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `id` | `uint256` | Validator node Id  |
| `validatorAddress` | `address` | Validator node address |
| `points` | `uint256` | Points allocated to validator |
| `staked` | `uint256` | Total amount of stake on validator |


### getLiquidityCsToken()

Returns total liquidity of csToken available for Flash Exit without considering external pools.

```sol
function getLiquidityCsToken() returns (uint256)
```


### getMaxWithdrawAmountCs()

Returns maximum amount of csToken that can be withdrawn in a given transaction.

```sol
function getMaxWithdrawAmountCs() returns (uint256)
```


### getEpoch()

Returns current epoch in Polygon's StakeManager contract & Withdrawal delay.

```sol
function getEpoch() returns (uint256, uint256)
```


### funds()

Returns all protocol's funds.

```sol
function funds() returns (Funds)
```
#### Funds Structure:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `currentDeposit` | `uint256` | Total number of tokens deposited by users |
| `stakedDeposit` | `uint256` | Total number of tokens currently staked on nodes |
| `accruedFees` | `uint256` | Total fees accrued by protocol |


### fees()

Returns all types protocol's fees. Protocol uses 2 point decimal precision(i.e base unit is 10000)

```sol
function fees() returns (Fees)
```


#### Fees Structure:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `depositFee` | `uint256` | Fee percent on deposit |
| `withdrawFee` | `uint256` | Fee percent on withdraw |
| `instantWithdrawFee` | `uint256` | Fee percentage on instant withdraw |
| `rewardFee` | `uint256` | Fee percent on accrued rewards |


### withdrawOrders()

Returns information regarding withdraw order for given user address and oderId.

```sol
function withdrawOrders(address, uint256) returns (WithdrawOrder)
```


#### WithdrawOrder Structure:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `amount` | `uint256` | Total amount of tokens unstaked from validators by user |
| `fee` | `uint256` | Fee percentage to be paid by the user |
| `orderIds` | `uint256[]` | List of order ids from the validators |
| `nodeIds` | `uint256[]` | List of corresponding nodeIds |


### deposit()

Sends underlying tokens to contract and mints csToken to `msg.sender`.

```sol
function deposit(uint256 amountToken) returns (bool)
```

> **Note:**
> Requirements:
> - `msg.sender` must have approved `amountToken` of Token to this contract.

#### Parameters:

| Name         | Type      | Description                                                       |
| ------------ | --------- |-------------------------------------------------------------------|
| `_amountToken` | `uint256` | Amount of underlying tokens sent from msg.sender to this contract |

#### Returns:

Bool confirmation of transaction.


### depositDelegate()

Sends Token to contract and mints csToken to `delegator`.

```sol
function deposit(uint256 amountToken, uint256 delegator) returns (bool)
```

> **Note:**
> Requirements:
> - `msg.sender` must have approved `amountToken` of Token to this contract.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `amountToken` | `uint256` | Amount of Token sent from msg.sender to this contract |
| `delegator` | `address` | Address of entity receiving csToken |

#### Returns:

Bool confirmation of transaction.


### withdraw()

Burns csToken from user, un-stake respective amounts of tokens from validator node(s) and creates a withdraw order.

```sol
function withdraw(uint256 amountCs) returns (uint256)
```

> **Note:**
> Requirements:
> - `msg.sender` must have approved `amountCs` of csToken to this contract.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `amountCs` | `uint256` | Amount of csToken to be withdrawn |

#### Returns:

Withdraw Order ID.


### claim()

Checks the validity of given `orderIds`, claims tokens from the corresponding validators nodes and transfers the amount to user.

```sol
function claim(uint256[] orderIds) returns (bool)
```

> **Note:**
> Requirements:
> - All orderIds must have fulfilled the un-bonding period.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `orderIds` | `uint256[]` | Array of withdraw order ids issued at withdraw() |

#### Returns:

Bool confirmation of transaction.


### instantWithdraw()

Burns csToken from user and instantly returns Token to user.

```sol
function instantWithdraw(uint256 amountCs) returns (bool)
```

> **Note:**
> Requirements:
> - `msg.sender` must have approved `amountCs` of csToken to this contract.
> - Contract must have sufficient liquidity.


#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `amountCs` | `uint256` | Amount of csToken to be withdrawn |

#### Returns:

Bool confirmation of transaction.

### autoBalance()

Claims rewards, transfers fees to vault and stakes into nodes

```sol
function autoBalance() returns (bool)
```

#### Returns:

Bool confirmation of transaction.

### Revert Codes

#### Deposit Codes (D)
- CD01: Deposit amount cannot be zero
- CD02: Deposit limit reached
- CD03: Minting csToken failed
- CD04: Delegator can not be zero address
- CD05: Token not supported for swap
- CD06: minOutputAmount cannot be zero
- CD07: clayExchange deposit failed
#### Withdraw Codes (W)
- CW01: Withdraw amount cannot be zero
- CW02: Insufficient csToken user balance
- CW03: Invalid token amount
- CW04: csToken burning failed
#### Claim Codes (C)
- CC01: Invalid order ID
- CC02: Insufficient balance of Token in contract
- CC03: Unbonding period ongoing, claim not available
#### Instant Withdraw (Flash Exit) Codes (I)
- CI01: Flash exit amount cannot be zero
- CI02: Flash exit is deactivated
- CI03: Insufficient csToken user balance
- CI04: Insufficient liquidity in contract
- CI05: csToken burning failed on Flash Exit
#### Migrations Codes (M)
- CM01: Amount to migrate cannot be zero
- CM02: Target validator is a foundation node
- CM03: Target validator is locked
- CM04: Migrated amount greater than staked amount
#### Staking Codes (S)
- CS01: Insufficient amount in contract for staking
- CS02: Token approval to stakeManager failed
- CS03: Transfer to ClayStaker failed
#### Balancing Codes (B)
- CB01: Unbalanced contract
- CB02: Change is exchange rate is above allowed limit
#### Operations Codes (O)
- CO00: Invalid Admin credentials
- CO01: csToken can not be zero address
- CO02: Token address cannot be zero address
- CO03: vaultManager cannot be zero address
- CO04: roleManager contract cannot be zero address
- CO05: stakeManager cannot be zero address
- CO06: Invalid percentage value
- CO07: Invalid fee type
- CO08: Validator list and points list are not consistent
- CO09: Validator address cannot be zero address
- CO10: Invalid validator
- CO11: Invalid array lengths updating nodes
- CO12: Deactivating a node with an active stake is not allowed
- CO13: Node not in active like, invalid deactivation
- CO14: Max nodes to withdraw can not be zero
- CO15: Over-staking threshold can't be higher than 20%
- CO16: Deposit fee above max limit
- CO17: Withdraw fee above max limit
- CO18: Instant Withdraw fee above max limit
- CO19: Reward fee above max limit
- CO20: Staking fee above max limit
- CO21: Node id list and amounts are not consistent
- CO22: clayExchange cannot be zero address
- C023: swapRouter cannot be zero address
- CO24: wrappedToken cannot be zero address
- CO25: deadlineDelay cannot be less than current timeStamp
- CO26: epochManager cannot be zero address
#### Token Transfer Codes (T)
- CT01: transferTo address cannot be zero
- CT02: amount cannot be zero
- CT03: Insufficient liquidity
- CT04: Token transfer failed
- CT05: Insufficient balance
- CT06: Insufficient allowance