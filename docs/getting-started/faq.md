---
sidebar_position: 8 
description: FAQ
---

# Frequently Asked Questions (FAQ)

## What is Nevermined?

Nevermined is the AI payments protocol delivering the Web3 standard for AI-to-AI transactions. At Nevermined, we AI payments are a protocol, not a feature, and we're building the Open Source software to power AI's future.

## What is Nevermined App?

The Nevermined App allows AI builders to monetize their AI agents and associated assets, like context data, etc. You do this by creating a Smart Subscription in which you specify the access parameters to your AI agent, such as price, time limit, and/or number of requests that can be made to use your AI agent. You then add your AI agent API to the subscription, and make the AI available to your users.

## Who can use Nevermined App?

### AI Builders

AI Owners can use Nevermined to tokenize the Web Service of their AI model or agent by defining access conditions and making it available to app developers who want to integrate AI services into their product, but don’t want to build it from scratch.

You can use Nevermined to tokenize datasets or services, set pricing and access control conditions and then make it available to AI builders to train their models.

### AI Users

AI users can use Nevermined to purchase access to datasets that are relevant to their model. 

App developers can purchase access to a broad range of AI Services and integrate them into their product, so they don’t need to build AI services from scratch.  

## How does Nevermined App work?

* AI agent / service builders can monetize their API endpoint and embed time and price access conditions. 
* Once the subscription terms are created, a DID associated with the builder’s wallet is issued and it can be then linked to a specific subscription.
* At the end of the process, the App will automatically create a widget containing the subscription information and display it on the marketplace, but builders also have the option to embed this widget on their own point-of-sale, i.e. website or channel.
* Purchasing access means the asset's smart contract sends the buyer a non-fungible Subscription token, using ERC-standards, that can be simply copied into the users' application.
* This Smart Subscription proves ownership of a unique JWT access token, which allows the user to send HTTP requests to the AI's web service

## What are Smart Subscriptions

*Smart Contracts + Subscription Logic = Smart Subscriptions!*

Smart Subscriptions is a new concept that builds on blockchain smart contract and NFT technology, but provides much greater utility and flexibility than current NFTs. Traditionally, NFT technology has been applied to represent a unique asset, in a 1-to-1 relationship. For example, a Bored Ape NFT has one JPEG for each token. While the 1-to-1 nature of NFT technology works well for things like static digital art, event tickets, etc., it doesn’t work well when a use case requires access to multiple assets. 

In the case of AI, a workflow might require access to dozens of assets (i.e. data, models and analysis services). If each dataset. model, or analysis service was represented by an NFT, this would correspond to dozens of onchain confirmations, performed via your wallet, to orchestrate the end-to-end process. The result? Horrendous UX.

Instead, Smart Subscriptions facilitate the creation of buckets of assets under one token in a 1-to-many relationship. In the case of AI, now one Smart Subscription can represent multiple datasets, analysis services, models, etc., to be orchestrated in an AI service pipeline that produces an inference or output. 

In addition, Nevermined has added the ability to add a time-related access parameter to the Smart Subscriptions and its related assets. This means you can tokengate access for 1 hour, 1 day, 1 month, 1 year…The sky’s the limit!

The result? Much greater usability and a big step change in overall utility.

## What are web services?

Web services allow applications to interact with each other over the internet, enabling data exchange, communication, and functionality.

## What do I need to get started as an AI Agent Builder?

* A Metamask wallet;
* If you publish your assets on Polygon, you need MATIC tokens to pay for the gas fees on that network;
* If you publish your assets on Gnosis, you need xDAI to pay for the gas fees on that network;
* If you publish your assets on Arbitrum, you need Arbitrum ETH to pay for the gas fees on that network;
* Your assets: Server link and authentication token.
* Standard Contract for Marketplace (SCMP) agreement that will govern the usage of your asset. You have the option to utilize the default Nevermined Standard Contract but we strongly encourage Builders to apply their own SCMP.

## What do I need to get started as a user?

* An account which is linked to a wallet (don't worry, Nevermined can handle the wallet part);
* If you’re buying an asset on [Polygon Network](https://matic.nevermined.app/), you need USDC tokens to pay for the assets you want to purchase and a small amount of MATIC for the network gas fees.
* If you’re buying an asset on [Gnosis Network](https://gnosis.nevermined.app/), you need USDC tokens to pay for the assets you want to purchase and a small amount of xDAI for the network gas fees.
* If you’re buying an asset on [Arbitrum](https://nevermined.app/), you need USDC tokens to pay for the assets you want to purchase and a small amount of MATIC for the network gas fees.


## What is the publishing flow?

* Create a Subscription plan for your asset(s)
* Register your asset or your web service and attach it to the Subscription
* Publish it to our Marketplace. (Soon you will also be able to create a widget to embed it in your own website.)

You can find more detailed tutorials for each step [here](../tutorials/).

## What is the buying flow?

* Find the asset you’re interested in on the Marketplace;
* Purchase a subscription to that asset, with your USDC.
* If you buy access to an AI: integrate the AI API with JWT token into your software.
* If you buy access to data: integrate the data into your AI workflow.

You can find more detailed tutorials for each step [here](../tutorials/).

## What files can I monetize using the Nevermined App?

* For AIs and WebServices, we support any open API endpoint that you control the web token to.
* For Data, we support any and all data files

## What is the price for using Nevermined App?

Using Nevermined to create subscriptions is free. It’s only when you sell subscriptions that you will pay a small 1% fee to Nevermined.

## What type of plans are available for the subscription configuration?

Nevermined App offers 3 pre-defined plans, as well as a customized option:

* Free Plan - Optimal for creating open ended exclusive access that boosts community loyalty and engagement.
* One month Plan - Great for creating time-critical gated assets that follow the latest trends.
* One year Plan - Perfect for creating valuable gated assets with long-term access.
* Custom Plan - Creates a bespoke subscription configuration with your desired duration & price.

## What blockchain network does the Nevermined App use?

At the moment, the Nevermined App is deployed on the Polygon, Gnosis and Arbitrum networks, allowing our users to benefit from the smallest network fees available. Since Nevermined is a chain agnostic product, we plan to deploy the app on several other networks in the future.

## How do I claim back my locked tokens if a transaction fails during processing?

In order to claim payment tokens that get locked during a failed transaction, you need the agreementID for the transaction. This agreementID is displayed in the Nevermined App with a failure message in the case that the transaction fails. In the event of a transaction failure, please record the agreementID and then contact Nevermined App Support via the [Nevermined Discord](https://discord.com/invite/GZju2qScKq) Support channel.
