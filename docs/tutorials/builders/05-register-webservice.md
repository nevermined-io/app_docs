---
sidebar_position: 6
description: How to register your web service and link to a Smart Subscription
---

# How to register your AI web service and link to a Smart Subscription

In a previous tutorial we showed how to create a Smart Subscription. Here we go through the required steps of registering a new AI web service and link it to your Smart Subscription. Owners who purchase that subscription will get access to the AI web service that is included in the plan. 

:::note
You can't register an asset without first configuring a Smart Subscription. So if you skipped that part, please go to the tutorial about [How to create a Smart Subscription](04-create-subscription.md) first.
:::

## How to register an AI web service

These are the steps to make your web service accessible to holders of your Smart Subscription.

### 1. Open the New Asset page

- Click on the New button in the top right to go the New Asset page.
- Click on the “Create Asset” button of the Web Service box.

![New Service](/images/tutorials/04_01_New_Subscription.png)

### 2. Describe the web service with metadata

#### Provide a short title

#### Add a description
Use the description box to explain to potential users what your web service is about. Some examples:
- _An open source summarizer specialised in scientific research_
- _A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Lllama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..._

#### Include tags
Add tags to help buyers find your AI Web Service in the Nevermined marketplace. 
Click the '+' symbol to add new tags. 

![Service Description](/images/tutorials/05-01-Webservice-Describe.png)

### 3. Define the attributes of the web service

In this second step you need to provide the endpoints URLs of your AI Web Service and the authentication credentials to access the service.

#### Include OpenAPI document

 You can use OpenAPI integration to import the information about the endpoints automatically. Make sure when you are developing the service that the technology or framework you are using allows to generate the documentation of the endpoints according to the OpenAPI specifications.

 Add the Url of the OpenAPI document, and when you click on the  **“+”** button, Nevermined App will import the information of the endpoints. Use the  **“-”** button if you want to remove some of endpoints imported.

#### Include the endpoint URL

If you service does not provide an OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint APIs of your AI agent or model (e.g. `https://myapi.example.com/v1`) using the **“+”** button.

Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example: 
`https://myapi.example.com/(.*)` will expose all the endpoints under the same domain.
Also you can write urls with tokens like `https://myapi.example.com/user/{userId}` or `https://myapi.example.com/user/:userId` however it will be transformed to wildcard like this example `https://myapi.example.com/user/(.*)`

#### Add the access token

In case the endpoints of your AI Service are protected with an authentication token or a user/password mechanism, you need to facilitate it. 

Nevermined can protect the access to a web service that uses a HTTP Bearer token or user/password mechanism for authentication. Your authentication information is encrypted and will always be kept private.

![Service Endpoints](/images/tutorials/05-02-Webservice-Details.png)


### 4. Add integration instructions

Give specific info about how developers can integrate your Web Service. For example:
- Tech Spec
- API Calls 
- Supported formats
- Response info (error messages etc)

You can also add a visual that gives more info about your Al Web Service. Example: an image of Elvis.

![Service Integration](/images/tutorials/05-03-Webservice-Integration.png)


### 5. Choose a subscription plan 

Next, you need to specify which subscription a user needs to purchase to get access to your web service. 

![Service Plan](/images/tutorials/05-04-Webservice-Plan.png)

:::tip
If you want your web service to be available via different plans, you can go through this process once more. 
Register the asset again and add it to another Smart Subscription plan. For now ;-)
:::

### 6. Review everything is okay

Finally, review your web service subscription. 
Click on “Create” if everything looks good. Or go “Back” if you want to modify anything.
![Service Review](/images/tutorials/05-05-Webservice-Review.png)


### 7. Web service registration

The Nevermined App will register the new web service on the blockchain. This will require you to sign one transaction in your MetaMask wallet. As explained in ‘Getting Ready’, this requires a little bit of gas tokens to pay for the transaction fees. 
![Register Web Service page](/images/tutorials/10_New_Service_05.png)

---

### 8. Distribute and make some money

You’re done! 
Go to the "Published" tab of the "My Assets" view to get an overview of your web service(s). Use the filter on the "Search" tab if you need it.

![My Assets](/images/tutorials/05-06-My-services.png)

Click on the web service to go the Asset Detail page. 

Share this URL with potential buyers. They can use the 'Buy Now' button to purchase directly from you. 
In addition, people can also automatically discover your AI web service in the Nevermined Marketplace.  

![Asset Details](/images/tutorials/05-07-Webservice-AssetPage.png)
