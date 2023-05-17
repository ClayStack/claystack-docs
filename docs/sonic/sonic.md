# Sonic.sol

### withdraw()

Starts withdraw order of liquid token triggering strategy and best path.

```sol
function withdraw(
    address _token,
    uint256 _amount,
    uint256 _fee,
    uint256 _deadline,
    bool _allowPartial,
    bool _startUnstaking
) returns (uint256)
```

#### Parameters:

| Name      | Description                  |
| --------- | ---------------------------- |
| `_token` | Liquid token to be withdrawn. |
| `_amount` | Amount of liquid token to be withdrawn. |
| `_fee` | Percentage fee to be paid by owner as discount. |
| `_deadline` | Seconds from execution the order is valid for fulfillment. |
| `_allowPartial` | Whether order allows partial fulfillment. |
| `_startUnstaking` | Whether to start unstaking tokens. |

> **Note:**
> Requirements:
> - `msg.sender` must have approved `_amount` of Token to this contract and must have a balance more than `_amount`.
> - returns uint256 `_orderId` of withdraw order created

#### LogWithdraw
```sol
event LogWithdraw(
    address indexed user,
    address indexed token,
    uint256 orderId,
    uint256 amount,
    uint256 fee,
    uint256 startTime,
    uint256 createdAt,
    uint256 deadline,
    bool allowPartial
);
```

### updateWithdrawOrder()

Modifies withdraw order conditions.

```sol
function updateWithdrawOrder(
    uint256 _orderId,
    uint256 _fee,
    uint256 _deadline,
    bool _allowPartial,
    bool startUnstaking
) returns (bool)
```

#### Parameters:

| Name      | Description                  |
| --------- | ---------------------------- |
| `_orderId` | Order Id of order to be updated. |
| `_fee` | Percentage fee to be paid by owner as discount. |
| `_deadline` | Seconds from execution the order is valid for fulfillment. |
| `_allowPartial` | Whether order allows partial fulfillment. |
| `_startUnstaking` | Whether to start unstaking tokens. |

> **Note:**
> - Orders that have already started unstaking will remain so

#### LogUpdateWithdraw
```sol
event LogUpdateWithdraw(
    address user,
    uint256 orderId,
    uint256 fee,
    uint256 deadline,
    bool allowPartial,
    bool unstake
);
```

### cancelWithdrawOrder()

Cancels withdraw order which is not unstaked and refunds the amount to user

```sol
 function cancelWithdrawOrder(uint256 _orderId) returns (bool)
```

#### Parameters:

| Name      | Description                  |
| --------- | ---------------------------- |
| `_orderId` | Order Id of order to be updated. |

> **Note:**
> - Orders that have already started unstaking can't be cancelled, only claimed

#### LogCancelWithdraw
```sol
event LogCancelWithdraw(address user, uint256 orderId);
```

### claim()

Allows the user to claim several orders at once.

```sol
function claim(uint256[] _orderIds) returns (bool)
```

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `orderIds` | `uint256[]` | Array of withdraw order ids issued at withdraw() |

#### LogClaim
```sol
event LogClaim(address user, uint256 orderId, uint256 amount, uint256 amountBase);
```

### fulfill()

Fulfills order by providing base token and sends amount to order owner. If amount is partial and the order started unstaking, user will receive a new order for the corresponding claim. This order can in effect be offered again in the market at a discount.

Fulfill as a payable function allows for two modalities, either sending the fulfillable amount as native token (e.g. ETH) or pre-approving the wrapped amount of the base token (e.g. WETH). When sending the native token, the amount sent must be at least the amount to be fulfilled of liquid token. To simplify the calculation see orderAmounts().

```sol
function fulfill(
    uint256 _orderId,
    uint256 _amount,
    bool _start
) payable returns (uint256)
```

#### Parameters:

| Name     | Description                        |
| -------- |------------------------------------|
| `_orderId` | Order Id of order to be updated.   |
| `_amount` | Liquid tokens to be fulfilled.     |
| `_startUnstaking` | Whether to start unstaking tokens. |

> **Note:**
> - Orders that have already started unstaking will remain so
> - User must approve and provide wrapped base token in case base token is a native chain token

#### LogFulfill
```sol
event LogFulfill(
    address user,
    uint256 orderId,
    uint256 newOrderId,
    uint256 amount,
    uint256 amountBase
);
```

### orderAmounts()

Calculates the amount to fulfill order including treasury fee. To fulfill an order, the order taker must paid the amount to owner (already includes the discount) and the treasury fee.

- Total amount at current exchange rate (accounts for slashing)
- Amount to be paid to order owner
- Amount to be paid to DAO

```sol
function orderAmounts(uint256 _orderId, uint256 _amount) public view returns (uint256, uint256, uint256)
```

#### Parameters:

| Name     | Description                        |
| -------- |------------------------------------|
| `_orderId` | Order Id of order to be updated.   |
| `_amount` | Liquid tokens to be fulfilled.     |

### getOrder()

Returns order info with calculated values.

```sol
function getOrder(uint256 _orderId) view returns (UserWithdrawOrderInfo)
```

#### UserWithdrawOrderInfo Structure:

```sol
struct UserWithdrawOrderInfo {
    address token;
    uint256 orderId;
    uint256 amount;
    uint256 amountOriginal;
    uint256 amountValue;
    uint256 amountToFulfill;
    uint256 discount;
    uint256 splitFee;
    uint256 fee;
    uint256 deadline;
    uint256 startTime;
    uint256 createdAt;
    uint256 exchangeRate;
    bool allowPartial;
    Status status;
    address owner;
}
```

| Name    | Description                                                  |
| ------- |--------------------------------------------------------------|
| `token` | Address liquid token.                                        |
| `orderId` | Order Id                                                     |
| `amount` | Liquid tokens amount.                                        |
| `amountOriginal` | Total amount from original order.                            |
| `amountValue` | Amount in base tokens at valid exchange rate.                |
| `amountToFulfill` | Total amount to be provided by order taker to fully fulfill. |
| `discount` | Percentage discount offered by order owner.                  |
| `splitFee` | Percentage of the discount towards order taker.              |
| `fee` | Net offered discount to order taker.                         |
| `deadline` | Seconds from execution the order is valid for fulfillment.   |
| `startTime` | Timestamp when unbonding has started.                        |
| `createdAt` | Timestamp when order was created.                            |
| `status` | 0-Staked, 1-Unbonding, 2-Claimable, 3-Claimed                |
| `owner` | Address owner of the order                                   |

### getOrders()

Returns array of several user orders at once

```sol
function getOrders(uint256[] _orderIds) view returns (UserWithdrawOrderInfo[] orders)
```

### getUserOrders()

Returns paginated list of user's withdraw orders in descending order of creation, in addition it reruns the current block timestamp and total number of pages for the user.

```sol
function getUserOrders(
    address _user,
    uint256 _page
) view returns (UserWithdrawOrderInfo[], uint256, uint256)
```

### orderNonce()

Linear incremental order nonce. Increases by one after each withdraw request.

```sol
function orderNonce() view returns (uint256)
```

### getExchangeRate()

Returns the current exchange rate from strategy.

```sol
function getExchangeRate(address _token) view returns (uint256) 
```