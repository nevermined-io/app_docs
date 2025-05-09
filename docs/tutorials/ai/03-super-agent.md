---
sidebar_position: 3
description: How to integrate a Super Agent AI into Nevermined
---

import BrowserOnly from '@docusaurus/BrowserOnly';
import { SuperAgentWidget } from '@site/src/components/one';

# How to accept payments in your Super Agent AI application

Here's a short video of how a [Super Agent AI Agent](https://www.superagent.sh/) can be used by a subscriber and monetized:

<p align="center">
<iframe width="840" height="470" src="https://www.youtube.com/embed/JgpUeb45tEk?si=YGgqWr-5H5wy68kT" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

---

:::info

If you want to see how an AI Publisher can monetize their Super Agent AI services, please take a look at the rest of the tutorial.

:::



## Step 1 - Set up your Builder Account in Nevermined and a Pricing Plan

In a previous tutorial we showed how to [setup your Nevermined account](../builders/configure-account) and [how to create a Pricing Plan](../builders/create-plan). Here we go through the required steps of registering a new AI Agent existing on Super Agent and linking it to your Pricing Plan. Users who purchase a plan will get access to the Super Agent AI service that is included in the Pricing Plan.

:::note
You can't register an AI Service without first configuring a Pricing Plan. So if you skipped that part, please go to the tutorial about [How to create a Pricing Plan](../builders/create-plan) first.
:::

## Step 2 - Register your Super Agent AI service

- Next, you need to register the Super Agent AI service and link to your Pricing Plan. To do this, click in the "New +" button of the header.

- You will see a page where you can select the type of Agent you want to create. Select the "AI Apps/Agents" option.

![Create AI Agent](/images/tutorials/builders/registration-asset-types.png)

- You start by describing the AI Agent you want to register. To do this, provide a Title,
  Description and cover image for the AI service.

<p align="center"><img src="/images/tutorials/ai/Agent_Publication_001.png" width="600" /></p>

- Next, add your specific AI service information via your AI's API information. It's highly recommended to provide the OpenAPI document of your AI service. This will automatically import the information about the endpoints of your AI service. If your service does not provide an OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint API of your AI service or Agent (e.g. `https://myapi.example.com/v1`) using the **"+"** button.

  In this case, Super Agent provides the OpenAPI document of the AI service, which makes it nicer to import and use. You can find the Super Agent OpenAPI here: [Super Agent OpenAPI](https://api.beta.superagent.sh/openapi.json).

- Now add what type of security mechanism you'd like to enforce for User Authentication to your AI
  app. The options include:

  - No authentication
  - Basic Authentication with a username and password
  - Bearer Token authentication with designated access token.

<p align="center"><img src="/images/tutorials/ai/Agent_Publication_002.png" width="600" /></p>

:::note
Please note that Nevermined fully encrypts the Bearer Token information that you submit so that
this information is never disclosed to anyone but yourself.
:::

- Now select the Pricing Plan that you created earlier and attach your AI service to this plan.
  This will enable the controls you've set for your AI app using this service. In this step you can
  also set the number of credits needed for each user to make one request for this AI service.

<p align="center"><img src="/images/tutorials/ai/Agent_Publication_004.png" width="600" /></p>

- Lastly, review your AI Agent setup and click "Create".

<p align="center"><img src="/images/tutorials/ai/Agent_Publication_005.png" width="600" /></p>

- Once you've successfully created the AI service, you can see its widget by clicking the "See the
  Agent" button.

## Step 3 - Get your Super Agent Embeddable Widget

- To create your embeddable widget of your Super Agent AI, you just need to go to your personal area and generate one.
- You can find all the details in the [How to integrate a widget in your website tutorial](../advanced/widgets-integration).




## Embedding the Super Agent Widget into your Website

Here is an example of a code generated:

```html
<div class="nvm-one-widget" nvm-did="did:nv:017a98cc62944d4dccb15168bfd2ec4ae2c7754a1d4927112e21cc946adefdc9" nvm-wid="wid-28df8bed-5792-4c18-bd1d-bce81b3cb266" nvm-theme="dark" nvm-layout="horizontal"></div>
<script defer src="https://widgets.testing.nevermined.app/nvm-one-widget-loader.js"></script>
```

And here is how the widget looks like once integrated in a website:

<BrowserOnly fallback={<div>Loading widget...</div>}>
  {()=> <SuperAgentWidget/>}
</BrowserOnly>

---

:::info
Send us via Discord your integration! We will be happy to share it with the community.
:::
