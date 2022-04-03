# ClayMatic.sol

## View Methods

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

Returns total liquidity of csToken currently available in the contract.

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



## Methods

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