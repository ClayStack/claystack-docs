## Overview:

ClayExchange is a specialized decentralized exchange protocol that focuses on unstaking liquid tokens, understanding the unstaking/unbonding process and maximizes yield for liquidity providers while minimizing slippage and fees of liquid tokens holders.

ClayExchange allows users to get in or out of the Liquid Staked Derivatives(LSD) market quickly by providing discounts to users for fulfilling their trades early hence not having to wait the unbonding period. This also allows users to get into the LSD market for cheaper benefiting both liquidity suppliers and LSD holders

To better understand ClayExchange, head to the docs on ClayExchange.

The aim of the hackathon is to  encourage developers to build solutions or tools to help elevate ClayExchange for its users.

For our Hackathon, there are two tracks users can participate in. 

### Analytics Track

####Problem:
DeFi has revolutionized finance by offering a more inclusive way to invest, borrow, and earn money. However, the space is still new and complex, and many users make the mistake of chasing high yields without understanding the true costs. To address this, your task is to build solutions that help users interpret the real yield of their assets, empowering them to make informed decisions and avoid misleading yields. Our goal is to maximize value and minimize risks in DeFi.

Some project examples include but not limited to…

- analysis of most profits made on trades, tooling which scans the marketplace and identifies the best APY trades to make
- Personalised Dashboards to track users profits over time automatically from transactions
- Build oracles to monitor trades and exchange rates to be integrated with ClayExchange


### DeFi Track

####Problem:
Capital inefficiency is a common problem that many investors face. It occurs when users do not use their financial resources effectively, which can lead to lower returns on investment or higher costs of capital. In order to avoid such inefficiencies, it is important to carefully manage your capital and make sure you are investing in opportunities that will provide the highest returns.

Given users limited funds, it becomes even more important to extract the most value for both liquidity providers and LSD holders. Your task is to find new and innovative ways to use ClayExchange to maximise utility for its users. This can be by complementing ClayExchange or introducing additional use cases for users on ClayExchange that will alleviate this problem

Some potential solutions include but not limited to

- Create a complementary LP pool which buys and sells active orders for the most profit then distributes the yield to the LP providers.
- Building bots to automate trades and maximise profit yield with a users idle assets in their wallets
- Integrate additional technology such as IPFS or zkRollups and compress multiple transactions into one to increase efficiency on chains like ETH where gas is very costly.
    - e.g Reordering transactions off chain to obtain MEV


## Judging Criteria:

### Value Proposition

- The primary criterion for any project should be how much value it adds to both the protocol and its users.
- As projects should be built around ClayExchange, the goal should be to enable users to extract the most value and for liquidity providers to make the best use of their capital. This should be at the heart of any solution.
- Additionally, it would be a bonus if your solution helps with contribute to the decentralisation of the protocol


### Innovation/Creativity

- As the web3 space is rapidly evolving with many new technologies and solutions, your solution's ability to capitalize on these newer technologies can greatly contribute to your team's project score.


### Security

- Claystack has always prioritized secure solutions and has not experienced any hacks to date. Therefore, any solution built should also prioritize security in its development, as we consider users' funds to be of utmost importance.


## Deliverables:

- Short writeup of your solution and how it aims to solve the chosen problem
- Link to implementation repositories(Github, GitLab etc)
- **Working** POC of project


# Resources

- ABIs for ClayExchange and logs emitted [here](docs/hackathon/functionAbis_logs.md)
- Docs on public/external functions in ClayExchange [here](docs/clayExchange.md)
- Sample code on how users can get started on retrieving logs of orders and fulfillments [here](docs/hackathon/sample_getLogs.md)
- Sample code on how users can interact with our contracts [here](docs/hackathon/sample_orders.md)
- tesnet/alpha deployment addresses [here](docs/hackathon/deployments.json)
- Any open sourced libraries - e.g EthersJs/Web3py
- Workshops with our devs on ClayExchange, walkthrough on how the product works as well as what resources we are able to provide
- QnAs answered through discord by our devs 
