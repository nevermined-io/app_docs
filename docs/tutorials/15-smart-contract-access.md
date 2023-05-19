---
sidebar_position: 15
description: How to use NFT Subscriptions to protect Smart Contracts
---

# How to use NFT Subscriptions to protect Smart Contracts?

In this tutorial we show how a Smart Contracts developer can protect external users to call some contract logic. We will show how with subscription NFTs is possible to allow only subscribers of a specific NFT to call some Smart Contract methods.

## Getting ready

If you are a Smart Contract developer first you will need to create your own NFT subscription (instructions [here](04-create-subscription.md)).

:::info Tutorial

All the code used in this tutorial is available in this **[repository](https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access)**

:::


## How to integrate the NFT subscription in your Smart Contract

The steps to integrate are the following:

### 1. Define which methods you want to protect

First you need to decide what you need to protect. This is totally dependant on your Smart Contract logic. In our example we are gonna protect the `claim` method. This method is used to claim a give away in a ERC20 token contract.

### 2. Integrate with the NFT subscription

In your solidity code you need to connect with the NFT Subscription contract. Because the NFT Subscription contract is an ERC721, you can use the standard ERC721 interfaces to interact with it.

```solidity
IERC721 subscriptionNFT = IERC721(subscriptionNFTAddress);
```

### 3. Check if the caller is a subscriber

In our example we are gonna protect the `claim` method. This method is used to claim a give away in a ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we are gonna create a modifier to check if the caller is a subscriber.

```solidity
    modifier onlySubscribers(address _address) {
        require(
            subscriptionNFT.balanceOf(_address) > 0,
            'You are not a subscriber'
        );
        _;
    }
```

And after of that we are gonna use this modifier in the `claim` method:

```solidity
    function claim() public onlySubscribers(msg.sender) {
        // ...
    }
```

You can see all the contract code [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol).



### 4. Testing the integration

You can the complete test [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts).
