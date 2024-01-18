---
sidebar_position: 4
description: Steps to publish a Smart Subscription
---


# How to create a Subscription

Publishers can use Nevermined to create Smart Subscriptions and receive payments from their subscribers. These function as access tokens and help AI or Data Publishers to control the access to their AI or Data Services.  

Creating a Smart Subscription is the first of two steps:

* First, you create a subscription.
* Then, you register your asset (an AI web service, a Data set,...) and you link it to your subscription. This is explained in the [web service tutorial](register-webservice) and [data tutorial](register-file-asset).

When you’ve completed those 2 steps, the Smart Subscription becomes an access control mechanism to your asset.

:::info

Remember that you need to have your account configured to accept payments. You can find more information about how to do it [here](configure-account).

:::

## How to create a Smart Subscription

You can use the [Nevermined Payments App](https://nevermined.app/) to create a new subscription, as a way to protect the access to your digital asset. The steps to create a subscription are:

### 1. Login to the App

Login into the app as we show [here](../first-steps/02-loggin.md).

<p align="center"><img src="/images/tutorials/00_Connect_Wallet.png" width="300" /></p>

### 2. Configure your account

Complete some basic account information and the prefered payments method as we saw [here](configure-account).



### 3. Open the New Asset page

- Click on the New button in the top right to go the New Asset page. 
- Then click 'Create Plan'

<p align="center"><img src="/images/tutorials/04_01_New_Subscription.png" /></p>


### 4. Add some metadata to your Subscription

#### Provide a description

We recommend you to explain what your Subscription gives access to and for how long.
This can be long. You will add a (short) title in the next step.

Some examples:
* Monthly pass to our OpenAI copilot that summarizes 35 Elvis songs. 
* 1-Year subscription to our Defi Data web service, which indexes from 5 major DeFi platforms. 
* Free & forever access to my Discord server about best AI Coding practices. 

#### Add an image

You can add an image to highlight your Plan. Pro tip: use your company's logo. 

#### Add tags

Tags are optional but can make it easier to find your Subscription in our Marketplace. Click '+' to add a tag. 

<p align="center"><img src="/images/tutorials/04_02_Subscription_Description.png" /></p>

### 5. Configure the Subscription

Nevermined allows to configure 2 types of subscriptions:

* Limited by usage (credits). Every time a user accesses any resouce associated to the subscription, the usage consumes credits. When the user consumes all the credits, the subscription is automatically expired and the user needs to top up.
* Time limited. You can specify the duration of the subscription (1 month, 1 year, etc.). When the time is over, the subscription is automatically expired and the user needs to renew it.

:::tip

Credit subscriptions are specilly useful for AI services if you want to protect your AI service against overuse.

:::

Depending on the type of subscription you want to create, you will need to configure different parameters.

If the subscription is **Limitted by credits**, you will need to configure:

* The title of the plan
* The price of the plan (in USD / USDC)
* The number of credits the user gets when they purchase the subscription

<p align="center"><img src="/images/tutorials/04_03_credit_options.png" width="600"/></p>


If the subscription is **Limitted by time**, you will need to configure:

* The title of the plan
* The price of the plan (in USD / USDC)
* The duration of the subscription (1 month, 1 year, forever, etc.) 

Click on “Next” when you’re happy with the configuration.

<p align="center"><img src="/images/tutorials/04_03_Subscription_Pricing.png" /></p>

### 5. Review everything is okay

Before creating the subscription, you can review the description, duration and price. Click on “Create” if everything is okay or click on “Back” if you want to modify anything.

<p align="center"><img src="/images/tutorials/04_04_Subscription_Review.png" /></p>

### 6. Register the subscription

The Nevermined App will register your new subscription. This will take just a few seconds and once it's done, you will see a success message.  

![Finish the subscription creation](/images/tutorials/05_New_Subscription_04.png)

### 7. Add an asset to your Subscription

Now, you can move on the next step: append an asset to your Smart Subscription, either an [AI Service](05-register-webservice.md) or a [file Asset](06-register-file-asset.md).
Alternatively, you can go to your dashboard to see the new subscription you created. 

<p align="center"><img src="/images/tutorials/04_05_Subscription_AddAsset.png" /></p>
