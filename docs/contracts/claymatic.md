# ClayMatic.sol

## View Methods

### getExchangeRate()

Returns the current exchange rate accounting for any slashing or donations and a boolean value indicating whether a slashing event has occurred (Note: Slashing is not currently enabled on Polygon).

```solidity
function getExchangeRate() returns (uint256, bool)
```

## Methods

### deposit()

Sends base tokens to contract and mints csToken to `msg.sender`.

```sol
function deposit(uint256 amountToken) returns (bool)
```

> **Note:**
> Requirements:
> - `msg.sender` must have approved `amountToken` of Token to this contract.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `_amountToken` | `uint256` | Amount of base tokens sent from msg.sender to this contract  |

#### Returns:

Bool confirmation of transaction.
