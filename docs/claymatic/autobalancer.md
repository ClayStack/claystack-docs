# Autobalancer
```
TODO
Adapt
Add links on monitoring last time it ran
```
1. Updates **funds.stakedDeposit** from validators
2. The contract will check for any extra tokens outside the regular flow (see [Donations](#donation-accounting))
3. For each node with an active stake, [withdrawRewards](https://github.com/maticnetwork/contracts/blob/main/contracts/staking/validatorShare/ValidatorShare.sol#L161)
4. Transfer any accrued fees to the vault
5. Resets precision accuracy for balancing (see [Precision Protections & Balancing](#precision-protections--balancing))
6. Given current deposits, calculate desired liquidity pool
7. Sequentially stake new deposits to all the active nodes