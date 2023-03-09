# Architecture

### ClayExchange

This is the main entry point contract that coordinates the unstaking flow and allows other users to fulfil withdraw orders at a discount. In this contract the user starts an unstaking request by providing the parameters for the order to inform other users of their request to exit and the discount they are willing to give in order for their order to be fulfilled as soon as possible. These orders can then be viewed and fulfilled by other users who wish to buy the derivative tokens at the discount specified by the initial order's owner.

### Strategies

A strategy is a tested contract that handles the logic for a specific chain. It is responsible for the staking and unstaking of funds while also ensuring the correct exchange rate of the underlying token to the derivative token. A strategy must implement the following methods:

```solidity
/// @notice Returns id of the withdraw order processed
function withdraw(uint256 amount) external returns (uint256);
```

```solidity
/// @notice After unbonding period user can claim base tokens
function claim(uint256 id) external returns (uint256);
```

```solidity
/// @notice Refunds liquid tokens after a unbonding order expires
function refund(uint256 id) external returns (uint256);
```
```solidity
/// @notice Returns the amount of base tokens on a given order
function getAmountTokenOrder(uint256 id) external view returns (uint256);
```

```solidity
/// @notice Exchanges amount of liquid tokens to base tokens at current exchange rate
function exchangeLiquidTokens(uint256 amount) external view returns (uint256);
```

```solidity
/// @notice Exchanges amount of liquid tokens to base tokens at current exchange rate
function getStatus(uint256 id) external view returns (OrderStatus);
```