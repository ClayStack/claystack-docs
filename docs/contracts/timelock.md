# TimeLock.sol


MATIC's staking uses [ValidatorShare](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/validatorShare/ValidatorShare.sol) contract for each validator node. ClayMain will stake across the nodes on a regular basis. When a withdrawal request comes in, the contract will immediately create an unstake order from a given validator, and create an order for the user to claim the funds past the unbonding period. This approach leverages MATIC's systems of order Ids to claim a given unstake request.

## View Methods

### name()

Returns the name of the token

```solidity
function name() returns (string)
```

### symbol()

Returns the symbol of the token, usually a shorter version of the name

```solidity
function symbol() returns (string)
```

## Methods

### transfer()

Moves `_amount` tokens from the caller's account to the `_recipient` account.

```sol
function transfer(address _recipient, uint256 _amount) returns (bool)
```

> **Note:**
> Requirements:
> - `_recipient` cannot be the zero address.
> - the caller must have a balance of at least `_amount`.
> - the contract must not be paused.

#### Parameters:

| Name         | Type      | Description                  |
| ------------ | --------- | ---------------------------- |
| `_recipient` | `address` | Address of tokens recipient  |
| `_amount`    | `uint256` | Amount of tokens to transfer |

#### Returns:

A boolean value indicating whether the operation succeeded.
