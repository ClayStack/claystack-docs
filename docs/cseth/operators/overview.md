# Overview

ClayStack offers the opportunity for anyone, whether an individual or a professional node operator organization, to register as a node operator and start earning rewards for providing services to the network. There are different pools and client requirements, and thus the conditions for becoming a node operator vary. The following sections will provide an overview of the mechanisms through which operators can register and be compensated for participating in the network.

## Registration

Under the current plan, ClayStack supports SSV, Obol, and direct staking validators. For each type, the operator must register an account and a specific node so that it can be included in the network and ETH can be delegated. Not all registrations immediately lead to delegation; this depends heavily on network demand as the network actively balances between node types, institution types, locations, and other factors in order to provide a robust and decentralized network.

## Bond Requirements

ClayStack uses a dynamic bond requirement system to ensure incentives are aligned and an expected performance level from the operators is maintained. It aims to create a capital-efficient model to reward validators with a good track record, minimizing capital requirements and enabling them to increase the number of nodes without increasing the capital requirements. Thus, the bond requirements will depend on the node type, the number of nodes, and the performance of the operator as a whole across nodes.

At registration, the supplied bond is converted to csETH, earning yield for the node operator and can be withdrawn at any time (subject to Exit conditions, if nodes are active).

### SSV Initial Bond Requirement

ClayStack's implementation of SSV brings 5 nodes for each validator. The initial bond requirement to run the first node is 1 ETH.


## Operator Performance Score

We introduce an account-level performance score, a verifiable score that will be used to determine the bond requirements for the operator as well as any further integrations, i.e., with VPF. The score will reflect the ability of the node operator to run nodes effectively and their level of experience.


## Exit

To provide liquidity for withdrawals, the protocol will continuously balance and exit validators. Similar to activations of nodes after registration, the network balances the types of nodes to provide a robust and decentralized network. Given this, there may occur three types of exits:



### Voluntary Exit

A given node operator wants to exit a node. The operator will place a request to exit to the protocol, and the exit slot will be given. Until the exit is confirmed, the operator must commit to continue running the node. There will be an opportunity for a node operator to fast-track their exits.



### Requested Exit
Nodes may be requested to exit the network in order for it to remain balanced. Operators should be aware of this and in turn exit the node within the given published guidelines. Operators that may not comply may be subject to penalties within the epoch rewards, or potentially penalties to their bond deposit, while subject to a penalization on their performance score. Timely exits will be reflected in an improved performance score for the operator.


### Forced Exit

A forced exit may occur when a validator, where the node is part of, is forced exited by the beacon chain. This can happen in slashing events. Similar to non-compliant requested exits, the node operator may be subject to penalties.


## Rewards

### Rewards Distribution

A predetermined percentage of the rewards from the validation process are distributed to the node operators. Each operator will receive a determined amount of the rewards based on the number of nodes and/or validators run, the time running it since the last epoch when rewards were paid, and it will include any further adjustments based on node-specific conditions.

With a regular cadence, initially aimed at once a week, there will be an epoch where each node in the system will be evaluated, and rewards will be accounted for. Once the Node Manager & Operator Registry system has been updated by the decentralized system verifying the node's performance and verified as a Merkle Tree transaction, the operator will be able to claim the rewards for the epoch.

### Rewards Formula

The rewards distribution formula is as follows:

```text

R = (T * F * N / A) - P + O

```

Where

- R = Rewards per node
- T = Total rewards for the epoch
- N = Number of attestations of the node per epoch
- F = Factor of rewards for node type
- A = Total attestations for the epoch
- P = Penalty for the node
- O = Other adjustments

### Penalties

#### Performance Penalties

Penalties are applied to nodes that have not performed as expected given the published percentage of the attestations. These ranges include a range of tolerances for the node to be considered in good standing. Penalties also include any slashing events where the validator may be involved. In those cases, the penalty, once all the slashing and exit conditions from the beacon chain are known, e.g., in an inactivity leak event, will be applied.

#### Exit Penalties

Penalties from non-compliant requested exits or forced exits.


### Other Adjustments

Specific node types may have extra adjustments. Namely, SSV operators receive SSV tokens for their validation services. ClayStack will publish the pre-agreed SSV prices, and thus any variation from this will be adjusted in the final rewards calculation for the epoch.


## Notifications

ClayStack publishes an active list of notifications for the node operators to follow for each of their nodes. This can be consumed on the website, as well as through an API and can also be run by anyone and the data verified from the open-source code of the notifications systems. Node operators should be fully aware of their requirements to monitor notifications, and particularly comply with requests to exit.




