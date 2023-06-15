---
sidebar_position: 15
description: How to use Smart Subscriptions to protect Smart Contracts
---

# How to use Smart Subscriptions to protect Smart Contracts?

In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Smart Subscription to limit the ability to execute certain Smart Contract functionalities to holders of a Smart Subscription NFT.

## Getting ready

First you will need to create your own Smart Subscription NFT for your Smart Contract (instructions [here](04-create-subscription.md)).

:::info Tutorial

All the code used in this tutorial is available in this **[repository](https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access)**

:::


## How to integrate the Smart Subscription NFT in your Smart Contract

The steps to integrate are the following:

### 1. Define which methods you want to protect

First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the `claim` method. This method is used to claim a giveaway in an ERC20 token contract.

### 2. Integrate with the Smart Subscription NFT

Next, you need to link the Solidity code of your Smart Contract with the Smart Subscription NFT contract. Because the Nevermined contract uses the ERC721 format, you can use the standard ERC721 interfaces to interact with it.

```solidity
IERC721 subscriptionNFT = IERC721(subscriptionNFTAddress);
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
