Logs 
```solidity
    /// @notice Event for new withdraw request.
    /// @param user : Address of user withdrawing.
    /// @param token : Address liquid token.
    /// @param orderId : Withdraw order id.
    /// @param amount : Amount of liquid token withdrawn.
    /// @param fee : Fee percentage to be paid by the user.
    /// @param startTime : Unstake start time.
    /// @param createdAt - Order created time
    /// @param deadline : Seconds from execution the order is valid for fulfillment.
    /// @param allowPartial : Whether order allows partial fulfillment.
    event LogWithdraw(
        address indexed user,
        address indexed token,
        uint256 indexed orderId,
        uint256 amount,
        uint256 fee,
        uint256 startTime,
        uint256 createdAt,
        uint256 deadline,
        bool allowPartial
    );

    /// @notice Event for withdraw request update.
    /// @param user : Address of user withdrawing.
    /// @param orderId : Withdraw order id.
    /// @param fee : Updated fee percentage to be paid by the user.
    /// @param deadline : Seconds from execution the order is valid for fulfillment.
    /// @param allowPartial : Updated partial fulfillment flag.
    /// @param unstake : bool flag to  manually start unstaking process for existing order.
    event LogUpdateWithdraw(
        address indexed user,
        uint256 indexed orderId,
        uint256 fee,
        uint256 deadline,
        bool allowPartial,
        bool unstake
    );

    /// @notice Event for cancelled withdraw request.
    /// @param user : Address of user withdrawing.
    /// @param orderId : Withdraw order id.
    event LogCancelWithdraw(address indexed user, uint256 indexed orderId);

    /// @notice Event for update on order to start unstaking.
    /// @param orderId : Withdraw order id.
    /// @param id : Unique id at strategy to be used at claim.
    /// @param amount : Unstaked amount of liquid tokens.
    /// @param startTime : Timestamp when unbonding has started.
    event LogStartUnstake(uint256 indexed orderId, uint256 id, uint256 amount, uint256 startTime);

    /// @notice Event for claim a withdraw order.
    /// @param user : Address of user.
    /// @param orderId : Claiming order id.
    /// @param amount : Amount of liquid tokens received.
    /// @param amountBase : Amount of base tokens received.
    event LogClaim(address indexed user, uint256 indexed orderId, uint256 amount, uint256 amountBase);

    /// @notice Event for fulfillment of withdraw order.
    /// @param user : Address of user.
    /// @param orderId : Fulfilling withdraw order id.
    /// @param newOrderId : New orderId for liquid tokens claim after fulfillment.
    /// @param amount : Amount of liquid tokens fulfilled.
    /// @param amountBase : Amount of base tokens provided.
    event LogFulfill(
        address indexed user,
        uint256 indexed orderId,
        uint256 indexed newOrderId,
        uint256 amount,
        uint256 amountBase
    );

    /// @notice Event for fee update.
    /// @param updatedBy : Address of Updating entity.
    /// @param feeType : Fee type being updated.
    /// @param oldFee : Existing fee percent for given fee type.
    /// @param newFee : New fee percent for given fee type.
    event LogFeeUpdate(address indexed updatedBy, SetFee feeType, uint256 oldFee, uint256 newFee);

    /// @notice WithdrawOrder struct
    /// @param token - Address liquid token
    /// @param owner - Address owner of the order and tokens
    /// @param orderId - Unique id on the underlying protocol
    /// @param amountOriginal - original amount of liquid token
    /// @param amount - Total amount of liquid token owned by owner - split possible
    /// @param amountUnstaked - Total amount of liquid token unstaked on the strategy order
    /// @param fee - Percentage fee to be paid for early claim.
    /// @param deadline - Seconds from execution the order is valid for fulfillment.
    /// @param startTime - Timestamp when unbonding has started
    /// @param createdAt - Timestamp when order was created
    /// @param allowPartial - Allows partial fulfillment or not
    /// @param isClaimed - already claimed from owner
    struct WithdrawOrder {
        address token;
        address owner;
        uint256 id;
        uint256 amountUnstaked;
        uint256 amountOriginal;
        uint256 amount;
        uint256 fee;
        uint256 deadline;
        uint256 startTime;
        uint256 createdAt;
        bool allowPartial;
        bool isClaimed;
    }

    /// @notice Struct used on when returning user withdraw order
    struct UserWithdrawOrderInfo {
        address token;
        uint256 orderId;
        uint256 amount;
        uint256 amountOriginal;
        uint256 amountValue;
        uint256 amountToFulfill;
        uint256 fee;
        uint256 deadline;
        uint256 startTime;
        uint256 createdAt;
        bool allowPartial;
        Status status;
        address owner;
    }
```

Function ABIS:

```solidity
function getOrders(uint256[] calldata _orderIds) public view returns (UserWithdrawOrderInfo[] memory orders);

/// @notice Returns the given page of the withdraw orders in descending order
/// @dev Max 10 results starting at page 0
/// @param _user  - Address of user.
/// @param _page  - Page to query.
/// @return info Array for struct of user withdraw orders
/// @return timeStamp current time of current chain
/// @return totalPages supported for given user.
    function getUserOrders(address _user, uint256 _page) external view returns (UserWithdrawOrderInfo[] memory, uint256, uint256);

/// @notice Starts withdraw order of liquid token triggering strategy and best path
/// @dev Emits an {LogWithdraw} event.
/// @param _token - Liquid token to be withdrawn.
/// @param _amount - Amount of liquid token to be withdrawn.
/// @param _fee - Percentage fee to be paid.
/// @param _deadline - Seconds from execution the order is valid for fulfillment.
/// @param _allowPartial : Whether order allows partial fulfillment.
/// @param _startUnstaking - Whether to start unstaking tokens.
/// @return Returns withdraw id.
    function withdraw(address _token, uint256 _amount, uint256 _fee, uint256 _deadline, bool _allowPartial, bool _startUnstaking) external whenNotPaused nonReentrant returns (uint256);


/// @notice Fulfills orders by providing Wtoken and sends amount to order owner
/// @dev Orders that have not started unstaking are allowed to be fulfilled without deadline enforcement
/// @param _orderId to fulfill
/// @param _amount of token to be fulfilled
/// @param _start will trigger unstaking process for the new order
/// @return orderId of liquid tokens to be claimed
    function fulfill(uint256 _orderId, uint256 _amount, bool _start) external payable whenNotPaused nonReentrant returns (uint256);

/// @notice Allows the user to claim several orders at once.
/// @param _orderIds - array of number of ids issued at withdraw()
/// @return Bool confirmation of transaction
    function claim(uint256[] calldata _orderIds) external whenNotPaused nonReentrant returns (bool);

/// @notice Cancels withdraw order which is not unstaked and refunds the amount to user
/// @dev Emits an {LogCancelWithdraw} event.
/// @param _orderId - Order Id of order to be updated.
/// @return @return Bool confirmation of transaction.
    function cancelWithdrawOrder(uint256 _orderId) external whenNotPaused nonReentrant returns (bool);

/// @notice Modifies withdraw order conditions.
/// @dev Emits an {LogWithdrawUpdate} event.
/// @param _orderId - Order Id of order to be updated.
/// @param _fee - Percentage fee to be paid.
/// @param _deadline - Seconds from execution the order is valid for fulfillment.
/// @param _allowPartial - Whether order allows partial fulfillment.
/// @param _unstake - bool flag to initiate unstake
/// @return Bool confirmation of transaction.
    function updateWithdrawOrder(uint256 _orderId, uint256 _fee, uint256 _deadline, bool _allowPartial, bool _unstake) external whenNotPaused nonReentrant returns (bool);

```
