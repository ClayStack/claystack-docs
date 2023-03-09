# ClayManager.sol

Main csMATIC contract for Polygon staking.

### getExchangeRate()

Returns the current exchange rate accounting for any slashing or donations and a boolean value indicating whether a slashing event has occurred (Note: Slashing is not currently enabled on Polygon).

```sol
function getExchangeRate() returns (uint256, bool)
```

### getLiquidityCsToken()

Returns total liquidity of csToken available for Flash Exit without considering external pools.

```sol
function getLiquidityCsToken() returns (uint256)
```

### fees()

Returns all types protocol's fees. Protocol uses 2 point decimal precision(i.e base unit is 10000)

```sol
function fees() returns (Fees)
```

#### Fees Structure:

| Name         | Type      | Description                        |
| ------------ | --------- |------------------------------------|
| `depositFee` | `uint256` | Fee percent on deposit             |
| `withdrawFee` | `uint256` | Fee percent on withdraw            |
| `earlyClaimFee` | `uint256` | Fee percentage on early claims     |
| `instantWithdrawFee` | `uint256` | Fee percentage on instant withdraw |

### bridgeFee()

Fee to manually trigger the bridge by user

```sol
function bridgeFee() returns (uint256)
```

### getUserOrders()

Returns paginated list of user's withdraw orders in descending order of creation.

```sol
function getUserOrders(address user, uint256 page) returns (WithdrawOrder)
```

#### UserWithdrawOrder Structure:

| Name      | Type      | Description                                           |
|-----------|-----------|-------------------------------------------------------|
| `orderId` | `uint256` | Unique order Id                                       |
| `amount`  | `uint256` | Total amount unstaked from from ethereum.             |
| `fee`     | `uint256` | Fee percentage to be paid by the user at claim time.  |
| `batchId` | `uint256` | Id of the batch process to be sent to ethereum.       |
| `claimableAt` | `uint256` | timestamp when batch claims can be processed.         |
| `isClaimable` | `bool`    | If order can be claimed standard method.              |
| `isEarlyClaimable` | `uint256` | If order can be claimed early before standard period. |

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

### depositETH()

Sends native to chain tokens `msg.value` to contract and mints csToken to `msg.sender`.

```sol
function depositETH() returns (bool)
```

### withdraw()

Burns csToken from user and creates a withdraw order.

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

Checks the validity of given `orderIds`, claims tokens and transfers the amount to user.

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

### earlyClaim()

Checks the validity of given `orderId`, claims tokens and transfers the amount to user.

```sol
function earlyClaim(uint256 orderId) returns (bool)
```

> **Note:**
> Requirements:
> - Order must be early claimable eligible and no slashing occurred within batch.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `orderIds` | `uint256[]` | Array of withdraw order ids issued at withdraw() |

#### Returns:

Bool confirmation of transaction.

### autoBalance()

Initiates transfer process to Ethereum while sends a message on expected tokens. A minimum amount or time is required for it to execute unless paid fee by the caller `msg.value` must exceed the bridge fee.

```sol
function autoBalance() returns (bool)
```

#### Returns:

Bool confirmation of transaction.