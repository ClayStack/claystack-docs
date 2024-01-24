
# CLAY Points 
Clay Points function as reward points within the ClayStack ecosystem and can be seamlessly converted into CLAY tokens following the Token Generation Event (TGE). This conversion occurs at a 1:1 ratio, establishing a direct correlation between Clay Points and CLAY tokens.

## Calculation
The distribution of Clay Points is calculated on a weekly basis, aggregating several rewards to determine the total Clay Points earned by users per week. The calculation is as follows:

Total CLAY reward = Base Rewards (R1) + Weekly Staker Reward (R2) + Weekly Deposit Reward (R3) + Referral Reward (R4) + Leaderboard RewardCLAY/Week (R5) 

Where,

### Base Rewards

R1 = D× baseRate, where 

D = Amount of ETH deposited by User 

Note: Currently, baseRate is 20CLAY/ETH/Week.

### Weekly Staker Reward

R2 = (X × 0.1) × D, where 

X = Weekly Stakers 

Note: The maximum reward is 10 CLAY/ETH/Week. This is applicable when the total weekly deposit for that week is 1,000 ETH. 

### Weekly Deposit Reward

R3 = (Y × 0.01) × D, where 

Y = Weekly Total Deposit  

Note: Max rewards is 10 CLAY/ETH/Week. This is applicable when the total weekly deposit for that week is 1,000 ETH. 

### Referral Reward

R4 = (Z × baseRate) × 10%, where 

Z = Amount of ETH referred in a week 

### Leaderboard Reward

R5 = (PR (PI) × PC)× D

PR = Reward based on position 

PC = Cycles for which position on leaderboard is maintained (Position cycle is 48 hours) 

PI = Position on leaderboard 

NOTE : PR = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 }

Therefore, 

Total Rewards= (D × baseRate) + ((X × 0.1) × D) + ((Y × 0.01) × D)+((Z × baseRate) × 10%) +((PR(PI) × PC) × D)



