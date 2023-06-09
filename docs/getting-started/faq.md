---
sidebar_position: 8 
description: FAQ
---

# Frequently Asked Questions (FAQ)

## What is Nevermined?

Nevermined brings together Data and AI to develop next generation services for developers. 
One of the standout features of Nevermined is the full data & AI provenance tracking. This grants users full transparency over the sources AI is accessing when replying to prompts and sets the infrastructure for rewarding the data publishers.

## What is Nevermined App?

The Nevermined App allows Data & AI developers to create tokenized subscriptions that allow them to monetize their data assets or web services. The Nevermined App simply creates NFTs according to the time and price conditions set by the publisher. This smart contract then tokengates your assets for a set period of time to wallets that own the NFTs. No NFT = No Access.

## Who can use Nevermined App?

### Publishers

AI Owners can use Nevermined to tokenize the Web Service of their AI model or agent by defining access conditions and making it available to app developers who want to integrate AI services into their product, but don’t want to build it from scratch.

Data Owners can use Nevermined to tokenize data sets or services, set pricing and access control conditions and then make it available to AI builders to train their models.

### Consumers

AI developers can use Nevermined to purchase access to datasets that are relevant to their model. 

App developers can purchase access to a broad range of AI Services and integrate them into their product, so they don’t need to build AI services from scratch.  

Researchers or data consumers who require access to specific or specialized data that is not readily accessible to the public, can purchase access to datasets, in order to advance their research.


## How does Nevermined App work?

* AI service publishers can tokenize their API endpoint and embed time and price access conditions. Data publishers will simply go through an upload flow.
* Once the subscription terms are created, a DID associated with the publisher’s wallet is issued and it can be then linked to a specific subscription.
* At the end of the process, the App will automatically create a widget containing the subscription information and display it on the marketplace, but publishers also have the option to embed this widget on their own point-of-sale, i.e. website or channel.
* Purchasing access means the asset's smart contract sends the buyer a non-fungible Subscription token, using ERC-standards, that can be simply copied into the Buyer’s application.
* This Subscription NFT proves ownership of a unique JWT access token, which allows the user to send HTTP requests to the AI's web service

## What are NFTs

NFTs, or non-fungible tokens, are unique digital items stored on a blockchain. NFTs can represent any asset and serve as a digital record of ownership.

## What are Subscription NFTs

Subscription NFTs are a new concept that provide much greater utility and flexibility for NFTs. Traditionally, the relationship between token and asset for an NFT has been 1-to-1. For example, a Bored Ape NFT has one JPEG for each token.

While the 1-to-1 nature of NFTs works well for things like static digital art, event tickets, etc., it doesn’t work well when a use case requires access to multiple assets. 
In the case of AI, a workflow might require access to dozens of assets (i.e. data and services). If each dataset and analysis service was represented by an NFT, this would correspond to dozens of onchain confirmations, performed via your wallet, to orchestrate the end-to-end process. The result? Horrendous UX.

Instead, Subscription NFTs facilitate the creation of buckets of assets under one token in a 1-to-many relationship. In the case of AI, now one NFT can represent multiple datasets, analysis services, models, etc., to be orchestrated in an AI service pipeline that produces an inference. In addition, Nevermined has added the ability to tokengate access to a Subscription NFTs assets based on time, so now you can tokengate access for 1 hour, 1 day, 1 month, 1 year…the sky’s the limit!

The result? Much greater usability and a big step change in overall utility.

## What are web services?

Web services allow applications to interact with each other over the internet, enabling data exchange, communication, and functionality.

## What do I need to get started as an AI Services Publisher?

* A Metamask wallet;
* If you publish your assets on Polygon, you need MATIC tokens to pay for the gas fees on that network;
* If you publish your assets on Gnosis, you need xDAI to pay for the gas fees on that network;
* Your assets: Server link and authentication token.
* Standard Contract for Marketplace (SCMP) agreement that will govern the usage of your asset. You have the option to utilize the default Nevermined Standard Contract but we strongly encourage Publishers to apply their own SCMP.

## What do I need to get started as a Data Publisher?

* A Metamask wallet;
* If you publish your assets on Polygon, you need MATIC tokens to pay for the gas fees on that network;
* If you publish your assets on Gnosis, you need xDAI to pay for the gas fees on that network;
* Your data assets. All file formats are supported. Max file size: 50 MB;
* End user license agreement (EULA) that will govern the usage of your asset. You have the option to utilize the default Nevermined Standard Contract but we strongly encourage Publishers to apply their own EULA.

## What do I need to get started as a consumer?

* A wallet;
* If you’re buying an asset on [Polygon Network](https://nevermined.app/), you need USDC tokens to pay for the assets you want to purchase and a small amount of MATIC for the network gas fees.
* If you’re buying an asset on [Gnosis Network](https://gnosis.nevermined.app/), you need USDC tokens to pay for the assets you want to purchase and a small amount of xDAI for the network gas fees.

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

At the moment, the Nevermined App is deployed on the Polygon and Gnosis networks, allowing our users to benefit from the smallest network fees available. Since Nevermined is a chain agnostic product, we plan to deploy the app on several other networks in the future.

## How do I create a wallet and add cryptocurrency to it?

Nevermined App is compatible with the MetaMask wallet. We have created a full tutorial explaining [how to configure a MetaMask wallet and add funds to it](../tutorials/02-metamask.md).

## How do I claim back my locked tokens if a transaction fails during processing?

In order to claim payment tokens that get locked during a failed transaction, you need the agreementID for the transaction. This agreementID is displayed in the Nevermined App with a failure message in the case that the transaction fails. In the event of a transaction failure, please record the agreementID and then contact Nevermined App Support via the [Nevermined Discord](https://discord.com/invite/GZju2qScKq) Support channel.

## What is a Data Schema?

A database schema is the skeleton structure that represents the logical view of the entire database. It defines how the data is organized and how the relations among them are associated. It formulates all the constraints that are to be applied on the data.

## Will assets be published on both Polygon and Gnosis?

No. As a publisher you choose the network you want to register your assets in. To widen your audience, it might be a good idea to publish on more than one network.

## I want to publish assets. How do I choose between Polygon and Gnosis?

As a publisher, you choose on which network you register your assets. This can depend on which network your buyers are more likely to use. It might be a good strategy to publish on both networks initially and use the insights to finetune your strategy as you publish more assets.

To publish on Polygon, go directly to https://polygon.nevermined.app/ and connect your Metamask wallet to Polygon (instructions [here](../tutorials/02-metamask.md)).

To publish on Gnosis, go directly to https://gnosis.nevermined.app/ and connect your Metamask wallet to Gnosis (instructions [here](../tutorials/02-metamask.md)).

## I want to buy assets. How do I choose between Polygon and Gnosis?

It’s good to get an idea which network is preferred by publishers who have relevant assets for you. You can do this by browsing each marketplace, both on https://polygon.nevermined.app/ and on https://gnosis.nevermined.app/.

If the asset you want to buy is available on both networks, you can use the one you’re most familiar with or for which you have gas and USDC tokens.

To buy assets on Polygon, go directly to the [Polygon Network version](https://polygon.nevermined.app/) and connect your Metamask wallet to Polygon (instructions [here](../tutorials/02-metamask.md)).

To buy assets on Gnosis, go directly to the [Gnosis Network version](https://gnosis.nevermined.app/) and connect your Metamask wallet to Gnosis (instructions [here](../tutorials/02-metamask.md)).

