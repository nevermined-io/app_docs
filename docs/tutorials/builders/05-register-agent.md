---
sidebar_position: 6
description: How to register your AI agent and link to a Payment Plan
---

# How to register your AI agent and link to a Payment Plan

In a previous tutorial we showed [how to create a Payment Plan](create-plan). Here we go through the required steps of registering a new AI agent or service and linking it to your Payment Plan. User who purchase a plan will get access to the AI agents or services that are included in the plan.

:::note
You can't register an AI agent without first configuring a Payment Plan. So if you skipped that part, please go to the tutorial about [How to create a Payment Plan](create-plan) first.
:::

If you don't want to read the whole tutorial, you can watch the video tutorial:

<p align="center">
<iframe width="840" height="470" src="https://www.youtube.com/embed/65rVHScjoGU?si=UkrpJK7tjtoXGlWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

## How to register an AI agent

These are the steps to make your agent or service accessible to Users that buy your Payment Plan.

### 1. Open the New Asset page

- Click on the New button in the top right to go the New Asset page.
- Click on the “Create Asset” button of the "AI Apps/Agents" box.

<p align="center"><img src="/images/tutorials/builders/new-agent-tile.png"/></p>

### 2. Describe the AI agent with metadata

#### Provide a short title

#### Add a description

Use the description box to explain to potential users what your agent is about. Some examples:

- _An open source summarizer specialised in scientific research_
- _A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Llama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..._

#### Include a cover image and/or tags (optional)

Add tags or a cover image that helps look better your agent for users.
Click the '+' symbol to add new tags or the upload button to add a cover image.

![AI Agent Description](/images/tutorials/05-01-Webservice-Describe.png)

### 3. Define the attributes of the AI agent

In this second step you need to provide some information about how your Agent works.

#### Do you want to use the Nevermined AI Hub?

If **No** you can benefit of Nevermined infrastructure to host the interface of your AI agent. If you choose **Yes**, you will need to provide the URLs of your agent and the authentication credentials to access the service. 

:::info
Please read more about the [Nevermined AI Hub](../../environments/ai-hub) to understand the benefits of using it.
:::

If you choose **No**, you will need answer the following question: "Is the agent going to use the Nevermined Query Protocol?" 

If you choose **Yes**, that means your agent is compatible with the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol). This protocol is a standard way to query AI agents and services. That helps to make your agent more discoverable and usable by other users and facilitate the integration with your agent.
If you choose **No**, you will need to provide the URL of the Open API definition of the API of  and the authentication credentials to access the service.

:::info
Please read more about the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol) to understand the benefits of using it.
:::

#### Include OpenAPI document

You can use OpenAPI integration to import the information about the endpoints automatically. Make sure that when you are developing the service that the technology or framework you are using enables the generation of documentation for your API's endpoints according to the OpenAPI specifications.

Add the Url of the OpenAPI document, and when you click on the  **“+”** button, the App will import the information of the endpoints. Use the  **“-”** button if you want to remove some of endpoints imported.

#### Include the endpoint URL

If your service does not provide an OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint API of your AI service or agent (e.g. `https://myapi.example.com/v1`) using the **“+”** button.

Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example: 
`https://myapi.example.com/(.*)` will expose all the endpoints under the same domain.
Also you can write URLs with tokens like `https://myapi.example.com/user/{userId}` or `https://myapi.example.com/user/:userId`, however it will be transformed to wildcard like this example `https://myapi.example.com/user/(.*)`

![AI Agent Endpoints](/images/tutorials/builders/ai-agent-endpoints.png)


#### Add the access token

In case the endpoints of your AI Agent or service are protected with an authentication token or a user/password mechanism, you need to add this information.

:::info

PLEASE NOTE: Your authentication information is encrypted and will always be kept private. Nevermined, nor anyone else, will never have access to this information. 

:::

Nevermined can protect the access to an agent that uses a HTTP Bearer token or user/password mechanism for authentication.

![AI Agent Authentication](/images/tutorials/builders/ai-agent-authentication.png)

### 4. Choose a Payment Plan

Next, you need to specify which Payment Plan a user needs to purchase to get access to the AI agent.

![Agent Plan](/images/tutorials/builders/ai-agent-subscription-credits.png)

If the subscription is **Limitted by usage**, you will need to specify how many credits are consumed every time a user accesses the AI agent. This is very useful to **protect** your AI service against **overuse**.

:::tip
If you want your agent to be available via different plans, you can go through this process once more. 
Register the AI Agent again and add it to another Payment Plan. For now ;-)
:::

### 5. Review that everything is okay

Finally, review your web service subscription. Click on “Create” if everything looks good. Or go “Back” if you want to modify anything.
![Agent Review](/images/tutorials/05-05-Webservice-Review.png)

### 7. Agent registration

The Nevermined App will register the new AI service or agent. This will take just a few seconds and once it's done, you will see a success message.

![Register Agent page](/images/tutorials/builders/added_asset_plan.png)

---

**You’re done!**

If you are interested on promoting your new AI Agent or Service and make some money, please to the tutorial about [How to distribute your AI agents or services and files and make some money](09-distribute.md).

