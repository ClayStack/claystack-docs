# ClayStack Organization

```
TODO
Write about the origanization & governance
```
The ClayStack DAO is a Decentralized Autonomous Organization that manages the liquid staking protocol by deciding on key parameters (e.g., setting fees, assigning node operators and oracles, etc.) through the voting power of governance token (DPG) holders.

Also, the DAO will accumulate service fees and spend them on insurance, research, development, and protocol upgrades. Initial DAO members will take part in the threshold signature for Ethereum 2.0 by making BLS threshold signatures.

Since WithdrawalsManagerStub contract has been deployed, new validators withdrawal credentials point to WithdrawalsManagerStub contract controlled by ClayStack DAO.
Validators before that deployment have withdrawal credentials pointing to mulsig wallet.

## CLAY Token
```
TODO
Describe token and not LIVE yet
```
CLAY is a [MiniMeToken](https://github.com/Giveth/minime) granting governance rights in the ClayStack DAO. By holding the CLAY token, one is granted voting rights within the ClayStack DAO. The more CLAY locked in a user’s voting contract, the greater the decision-making power the voter gets.
