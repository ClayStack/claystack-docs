# RoleManager.sol

Implements [@openzeppelin/contracts/access/AccessControl.sol](https://github.com/OpenZeppelin/openzeppelin-contracts/blob/release-v4.4/contracts/access/AccessControl.sol)

## Roles

```sol
bytes32 public constant TIMELOCK_ROLE = keccak256("TIMELOCK_ROLE");
bytes32 public constant TIMELOCK_UPGRADES_ROLE = keccak256("TIMELOCK_UPGRADES_ROLE");
bytes32 public constant CS_SERVICE_ROLE = keccak256("CS_SERVICE_ROLE");
```

## View Methods

### checkRole()

Returns a boolean value indicating whether `_account` has role `_role` or not.

```sol
function checkRole(bytes32 _role, address _account) returns (bool)
```

#### Parameters:

| Name        | Type      | Description                  |
| ----------- | --------- | ---------------------------- |
| `_role` | `bytes32` | bytes32 hash of role.  |
| `_account`   | `address` |  Address of entity to be checked. |
