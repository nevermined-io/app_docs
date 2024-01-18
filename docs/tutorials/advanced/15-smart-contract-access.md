---
sidebar_position: 15
description: How to use Smart Subscriptions to protect Smart Contracts
---

# How to use Smart Subscriptions to protect Smart Contracts?

In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Smart Subscription to limit the ability to execute certain Smart Contract functionalities to holders of a Smart Subscription NFT.

:::info Tutorial

All the code used in this tutorial is available in this **[repository](https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access)**

:::

## Getting ready

First you will need to create your own Smart Subscription NFT for your Smart Contract (instructions [here](../builders/create-subscription)).

![Registering a new Plan](/images/tutorials/plans/01_Registering_new_Plan.png)

:::info

The Smart Subscription needs to be registered in the same network where your Smart Contracts are gonna be deployed. Currently Nevermined is deployed on [multiple blockchain networks](../../environments/).

:::

## How to integrate the Smart Subscription NFT in your Smart Contract

The steps to integrate are the following:

### 1. Define which methods you want to protect

First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the `claim` method. This method is used to claim a giveaway in an ERC20 token contract.

### 2. Integrate with the Smart Subscription NFT

Next, you need to link the Solidity code of your Smart Contract with the Smart Subscription NFT contract. Because the Nevermined contract uses the ERC1155 format, you can use the standard ERC1155 interfaces to interact with it.

```solidity
IERC1155 subscriptionNFT = IERC1155(subscriptionNFTAddress);
```

### 3. Implement the access control to check if the caller is a subscriber

In our example we are going to protect the `claim` method. This method is used to claim a giveaway in an ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we create a modifier to check if the caller of the smart contract is a subscriber.

```solidity
    modifier onlySubscribers(address _address) {
        require(
            subscriptionNFT.balanceOf(_address) > 0,
            'You are not a subscriber'
        );
        _;
    }
```

Next, we use this modifier in the `claim` method:

```solidity
    function claim() public onlySubscribers(msg.sender) {
        // ...
    }
```

You can see all the contract code [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol).


### 4. Testing the integration

You can the complete the test [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts).

### 5. Users can subscribe to your Smart Subscription

Once the Smart Subscription is deployed and the Smart Contract is connected to it, users can subscribe to the plan to claim the airdrop. 

![Purchase the Plan](/images/tutorials/plans/03_Plan_details.png)

So any user that wants to claim the airdrop needs to subscribe to the plan first. So when they make a call to your Smart Contract for claiming the AirDrop, you can validate they are subscribers to that plan and release the tokens.