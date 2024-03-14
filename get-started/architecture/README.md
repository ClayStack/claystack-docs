# Modular Architecture

A mental model to understand modularity in DeFi would be to picture a stack of logical layers on top of each. Within this structure, each layer embodies a distinct element or component of DeFi, serving a unique role and executing a specific function.

ClayStack offers a modular and composable design that combines a hybrid architecture. There are three primary modules that builds up the design of this architecture: DVT, MEV and Restaking. These modules are developed in order to provide flexibility, scalability, and customization for the end users.

The liquid tokens are supported by a network of validating node leveraging various technologies. A modular DVT technology allows ClayStack to combine SSV, Obol, KYC-ring-fenced and public pools of nodes. At the same time, the operators are combined from professional node operators to small operators. The diversity provides a layer of redundancy and censorship resistance, while at the same time allows for full scalability and decentralization.

<figure><img src="../../.gitbook/assets/Updated Architecture Diagram (1).png" alt=""><figcaption></figcaption></figure>

#### 1. DVT Modular Implementation

A modular DVT system is a novel approach to network security and decentralization, enabling distributed validation among multiple participants. ClayStack integrates SSV and Obol, enhancing security, fault tolerance, and large-scale decentralization. It also introduces private and public professional node pools, supporting scalability, fungibility, and DeFi integration while adhering to stringent institutional requirements.

#### 2. MEV Extraction

ClayStack validators utilize MEV extraction tools like MEV-Boost to maximize yields. These tools capitalize on the ability of validators to manage transaction order within their blocks, leading to additional profits. This proactive approach sets the standard for MEV utilization, benefiting all participants in the ClayStack ecosystem.

#### 3. Restaking

Claystack's csETH introduces re-staking functionality via EigenLayer, offering csETH holders the chance to earn EigenLayer points alongside CLAY points. It's essential to understand that Claystack employs EigenLayer's Native Re-staking for the restaking of ETH. For a comprehensive understanding of this process, users can refer to EigenLayer's [documentation](https://docs.eigenlayer.xyz/restaking-guides/restaking-user-guide/native-restaking), providing valuable insights into the EigenLayer protocol.

