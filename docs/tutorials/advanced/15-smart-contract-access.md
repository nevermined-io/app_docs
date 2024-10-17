---
sidebar_position: 15
description: How to use Payment Plans to protect Smart Contracts
---

# How to use Payment Plans to protect Smart Contracts?

In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Payment Plan to limit the ability to execute certain Smart Contract functionalities to holders of a Payment Plan NFT.

:::info Tutorial

All the code used in this tutorial is available in this **[repository](https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access)**

:::

## Getting ready

First you will need to create your own Payment Plan NFT for your Smart Contract (instructions [here](../builders/create-plan)).

![Registering a new Plan](/images/tutorials/plans/01_Registering_new_Plan.png)

:::info

The Payment Plan needs to be registered in the same network where your Smart Contracts are gonna be deployed. Currently Nevermined is deployed on [multiple blockchain networks](../../environments/).

:::

## How to integrate the Payment Plan NFT in your Smart Contract

The steps to integrate are the following:

### 1. Define which methods you want to protect

First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the `claim` method. This method is used to claim a giveaway in an ERC20 token contract.

### 2. Integrate with the Payment Plan NFT

Next, you need to link the Solidity code of your Smart Contract with the Payment Plan NFT contract. Because the Nevermined contract uses the ERC1155 format, you can use the standard ERC1155 interfaces to interact with it.

```solidity
IERC1155 subscriptionNFT = IERC1155(subscriptionNFTAddress);
```

### 3. Implement the access control to check if the caller is a subscriber

In our example we are going to protect the `claim` method. This method is used to claim a giveaway in an ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we create a modifier to check if the caller of the smart contract is a subscriber.

```solidity
    modifier onlySubscribers(address _address) {
        require(            
            subscriptionNFT.balanceOf(_address, uint256(tokenId)) > 0,
            'You are not a subscriber'
        );
        _;
    }
```

The `tokenId` is the id of the Payment Plan NFT you want to use to protect your Smart Contract. In our example we purchased the following subscription:
```
https://testing.nevermined.app/en/subscription/did:nv:54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7
```

The `tokenId` is the last part of the URL (after `did:nv:`): `54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7`. 

Next, we use this modifier in the `claim` method:

```solidity
    function claim() public onlySubscribers(msg.sender) {
        // ...
    }
```

You can see all the contract code [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol).

### 4. Testing the integration

You can the complete the test [here](https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts).

### 5. Users can subscribe to your Payment Plan

Once the Payment Plan is deployed and the Smart Contract is connected to it, users can subscribe to the plan to claim the airdrop.

![Purchase the Plan](/images/tutorials/plans/03_Plan_details.png)

So any user that wants to claim the airdrop needs to subscribe to the plan first. So when they make a call to your Smart Contract for claiming the AirDrop, you can validate they are subscribers to that plan and release the tokens.
