---
sidebar_position: 6
description: How to register your web service and link to a Smart Subscription
---

# How to register your AI web service and link to a Smart Subscription

In a previous tutorial we showed how to create a Smart Subscription. Here we go through the required steps of registering a new AI web service and link it to your Smart Subscription. Owners who purchase that subscription will get access to the AI web service that is included in the plan. 

:::note
You can't register an asset without first configuring a Smart Subscription. So if you skipped that part, please go to the tutorial about [How to create a Smart Subscription](04-create-subscription.md) first.
:::

## Before you start

Currently, the Nevermined App is deployed on the [Polygon](https://matic.nevermined.app), [Gnosis](https://gnosis.nevermined.app) and [Arbitrum](https://nevermined.app) networks (plus on their respective testnets). 

In order to interact with that network you need to:

1. Connect your MetaMask wallet to the relevant network (instructions [here](02-metamask-networks.md)).
2. Get the right tokens to pay for the gas fees on that network (instructions [here](02-metamask-tokens.md))

## How to register an AI web service

These are the steps to make your web service accessible to holders of your Smart Subscription.

### 1. Open the New Asset page

- Click on the New button in the top right to go the New Asset page.
- Click on the “Create Asset” button of the Web Service box.

<p align="center"><img src="/images/tutorials/04_01_New_Subscription.png" /></p>

### 2. Describe the web service with metadata

#### Provide a short title

#### Add a description
Use the description box to explain to potential users what your web service is about. Some examples:
- _An open source summarizer specialised in scientific research_
- _A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Lllama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..._

#### Include tags
Add tags to help buyers find your AI Web Service in the Nevermined marketplace. 
Click the '+' symbol to add new tags. 

<p align="center"><img src="/images/tutorials/05-01-Webservice-Describe.png" /></p>


### 3. Define the attributes of the web service

#### Include the endpoint URL
Add one or more endpoint APIs of your AI agent or model (e.g. <https://myapi.example.com/v1>). 
Paste the link and click on the **“+”** button

Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example: 
<https://myapi.example.com/(.*)> will expose all the endpoints under the same domain.

<p align="center"><img src="/images/tutorials/05-02-Webservice-Content.png" /></p>


#### Add the access token

Next, you add an access token to your web service. 
This is the password for that enables connection to your web service. You can get it from the web service config file.  Nevermined can protect the access to a web service that uses a HTTP Bearer token for authorization. Your access token is encrypted and will always be kept private.

#### Add a sample link

Give your potential buyers an idea of what they can expect. Add a test link showing what your AI is about.

#### More information about your web service

Give a broad description of the AI web service. 
This can include: 
- What can the web service be used for?
- Who will be interested in the web service?
- What kind of data does the web service require? What is the format of that data?
- How long can the web service be used for?

### 4. Add integration instructions

Give specific info about how developers can integrate your Web Service. For example:
- Tech Spec
- API Calls 
- Supported formats
- Response info (error messages etc)

<p align="center"><img src="/images/tutorials/05-03-Webservice-Integration.png" /></p>

You can also add a visual that gives more info about your Al Web Service. Example: an image of Elvis.


### 5. Choose a subscription plan 

Next, you need to specify which subscription a user needs to purchase to get access to your web service. 

<p align="center"><img src="/images/tutorials/05-04-Webservice-Plan.png" /></p>

:::Pro tip
If you want your web service to be available via different plans, you can go through this process once more. 
Register the asset again and add it to another Smart Subscription plan. For now ;-)
:::

### 6. Review everything is okay

Finally, review your web service subscription. 
Click on “Create” if everything looks good. Or go “Back” if you want to modify anything.
<p align="center"><img src="/images/tutorials/05-05-Webservice-Review.png" /></p>

### 7. Web service registration

The Nevermined App will register the new web service on the blockchain. This will require you to sign one transaction in your MetaMask wallet. As explained in ‘Getting Ready’, this requires a little bit of gas tokens to pay for the transaction fees. 
![Register Web Service page](/images/tutorials/10_New_Service_05.png)

---

### 8. Distribute and make some money

You’re done! 
Go to your dashboard to get an overview of your Smart Subscription(s) and the web service(s) associated with it.

<p align="center"><img src="/images/tutorials/05-06-Webservice-Dashboard.png" /></p>

Click on the web service to go the Asset Detail page. 

Share this URL with potential buyers. They can use the 'Buy Now' button to purchase directly from you. 
In addition, people can also automatically discover your AI web service in the Nevermined Marketplace.  

<p align="center"><img src="/images/tutorials/05-07-Webservice-AssetPage.png" /></p>
