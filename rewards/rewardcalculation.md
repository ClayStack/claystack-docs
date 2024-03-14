# CLAY & EigenLayer Points

## CLAY Points

<figure><img src="../.gitbook/assets/Screenshot 2024-02-21 at 3.43.03 PM.png" alt=""><figcaption></figcaption></figure>

Clay Points function as reward points within the ClayStack ecosystem and can be seamlessly converted into CLAY tokens following the Token Generation Event (TGE). This conversion occurs at a 1:1 ratio, establishing a direct correlation between Clay Points and CLAY tokens.

### Calculation

The distribution of Clay Points is calculated on a weekly basis, aggregating several rewards to determine the total Clay Points earned by users per week. The calculation is as follows:

Total CLAY reward = Base Rewards (R1) + Referral Reward (R2) + Leaderboard RewardCLAY/Week (R3)

Where,

### Base Rewards

R1 = D× baseRate, where

D = Amount of ETH deposited by User

Note: Currently, baseRate is 20CLAY/ETH/Week.

### Referral Reward

R2 = (Z × baseRate) × 10%, where

Z = Amount of ETH referred in a week

### Leaderboard Reward

R3 = (PR (PI) × PC)× D

PR = Reward based on position

PC = Cycles for which position on leaderboard is maintained (Position cycle is 48 hours)

PI = Position on leaderboard

NOTE : PR = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 }

Therefore,

Total Rewards= (D × baseRate) + ((X × 0.1) × D) + ((Y × 0.01) × D)+((Z × baseRate) × 10%) +((PR(PI) × PC) × D)



## EigenLayer Restaked Points

Restaked points quantify your role in enhancing EigenLayer's security, reflecting staking involvement based on the accumulated stake duration.

For instance, a user staking 1 ETH for 1 hour earns 1 restaked point. ClayStack fully distributes all restaking points obtained through its users' deposits.

_Note: EigenLayer Restaked points have an approximate 24-hour delay to accommodate the setup and provisioning of Ethereum nodes._



## Where will the points be displayed?

They show on the the ClayStack Dapp once you connect your wallet. These points will accrue in real time per block.

<figure><img src="../.gitbook/assets/Screenshot 2024-02-21 at 3.27.15 PM (1).png" alt=""><figcaption></figcaption></figure>
