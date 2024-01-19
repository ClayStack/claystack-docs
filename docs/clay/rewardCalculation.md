
# CLAY Points 
Clay Points function as reward points within the ClayStack ecosystem and can be seamlessly converted into CLAY tokens following the Token Generation Event (TGE). This conversion occurs at a 1:1 ratio, establishing a direct correlation between Clay Points and CLAY tokens.

## Calculation
The distribution of Clay Points is calculated on a weekly basis, aggregating several rewards to determine the total Clay Points earned by a user per week. The calculation is as follows:

Total CLAY reward=Base Rewards+Weekly Staker Reward+Weekly Deposit Reward+Referral Reward+Leaderboard RewardCLAY/Week

Where, 

#### Base Rewards
D=Amount of ETH deposited by User
R1=D×baseRate
Note:  Currently, baseRate is 20CLAY/ETH/Week

#### Weekly Staker Reward
X = Weekly Stakers
R2=(X×0.1)×D
Note: The maximum reward is 10CLAY/ETH/WEEK,i.e., for 1000ETH Weekly Total Deposit.

#### Weekly Deposit Reward
Y=Weekly Total Deposit
R3=(Y×0.01)×D
Note: Max rewards is 10 CLAY/ETH/WEEK i.e, 1000 ETH Weekly total Deposit

#### Referral Reward
Z=Amount of ETH referred in a week
R4=(Z×baseRate)×10%

#### Leaderboard Reward
PR=Reward based on position
PC=Cycles for which position on leaderboard is maintained (Position cycle is 48hours)
PI=Position on leaderboard
R5=(PR(PI)×PC)×D

NOTE : PR = { 1: 25, 2: 18, 3: 15, 4: 12, 5: 10, 6: 8, 7: 6, 8: 4, 9: 2, 10: 1 }

Therefore,
Total Rewards=(D×baseRate)+((X×0.1)×D)+((Y×0.01)×D)+((Z×baseRate)×10%)+((PR(PI)×PC)×D)



