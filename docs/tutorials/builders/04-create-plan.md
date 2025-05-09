---
sidebar_position: 4
description: Steps to publish a Pricing Plan
---


# How to create a Pricing Plan

Publishers can use Nevermined to create Pricing Plans and receive payments from their users when they pay to subscribe. Pricing Plans enable the creation of credits that function as access tokens, and help AI Builders control the access to their AI Agents / services / apps.  

Creating a Pricing Plan is the first of two steps:

* First, you create a Pricing Plan.
* Then, you register your AI Agent / service and you link it to a Pricing Plan that you previously created. This is explained in the [web service tutorial](register-agent).

When you've completed those 2 steps, the Pricing Plan becomes an access control mechanism to your AI Agent or service.

:::info

Remember that you need to have your account configured to accept payments. You can find more information about how to do it [here](configure-account).

:::

If you don't want to read the whole tutorial, you can watch the video tutorial:

<p align="center">
<iframe width="840" height="470" src="https://www.youtube.com/embed/65rVHScjoGU?si=cTzuWo4UsJO_in9U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

## Creating a Pricing Plan

You can use the [Nevermined Payments App](https://nevermined.app/) to create a new plan, as a way to protect the access to your AI Agent or service.

### Step 1 - Login to the App

Login into the app as we show [here](../first-steps/02-login.md).

<p align="center"><img src="/images/tutorials/web2auth/login-modal.png" width="600" /></p>

### Step 2 - Configure your account

Enter some basic account information and the preferred payment method, as we saw [here](configure-account).

### Step 3 - Open the New Agent page

* Click on the New button in the top right to go to the New Agent page.
* Then click 'Create Plan'

<p align="center"><img src="/images/tutorials/04_01_New_Subscription.png" /></p>

### Step 4 - Add some metadata to your Pricing Plan

#### Provide a description

We recommend that you explain what your Pricing Plan gives access to, the access conditions like access duration, etc.

Some examples:

* A Monthly pass to our OpenAI copilot that summarizes 35 Elvis songs.
* 1-Year plan to our Defi Data web service, which indexes from 5 major DeFi platforms.
* 10,000 credits to access to my Discord server about best AI Coding practices.

#### Add an image (optional)

Optionally you can add an image to highlight your Plan. Pro tip: use your company's logo.

<p align="center"><img src="/images/tutorials/04_02_Subscription_Description.png" /></p>

### Step 5 - Configure Access

Nevermined lets Builders configure Pricing Plans with 2 types of controls / access management mechanisms:

* Limited by usage - Builders control the number of requests that can be made to a service. Every time a user accesses any resource associated with the Pricing Plan, the usage consumes from a capped amount of credits. When the user consumes all the credits, the plan automatically expires and the user needs to top up to continue using the service.
* Limited by time - Builders can specify the duration of the Pricing Plan (1 month, 1 year, etc.). When the time period is over, the plan automatically expires and the user needs to renew it.

:::tip

Credit Pricing Plans are especially useful for AI Agents/services if you want to protect your Agent against overuse.

:::

Depending on the type of Pricing Plan you want to create, you will need to configure different parameters.

If the plan is **Limited by usage**, you will need to configure:

* The title of the plan
* The price of the plan in either fiat (i.e. USD) or crypto (i.e. USDC)
* The number of credits the user gets when they purchase the Plan

<p align="center"><img src="/images/tutorials/04_03_credit_options.png"/></p>


If the plan is **Limited by time**, you will need to configure:

* The title of the plan
* The price of the plan in either fiat (i.e. USD) or crypto (i.e. USDC)
* The duration of the plan (1 month, 1 year, forever, etc.)

Click "Next" when you're happy with the configuration.

<p align="center"><img src="/images/tutorials/04_03_Subscription_Pricing.png" /></p>

### Step 6 - Review that everything is okay

Before creating the Plan, you can review the description, limit conditions and price. Click on "Create" if everything is okay or click on "Back" if you want to modify anything.

<p align="center"><img src="/images/tutorials/04_04_Subscription_Review.png" /></p>

### Step 7 - Finish the Plan creation

The Nevermined App will register your new plan. This will take just a few seconds and once it's done, you will see a success message.  

![Finish the plan creation](/images/tutorials/05_New_Subscription_04.png)

### Step 8 - Add an AI Agent to your Pricing Plan

Now, you can move on to the next step: adding an AI Agent to your Pricing Plan via the following flow: [AI Agent](register-agent).
Alternatively, you can go to your dashboard to see the new plan you created.
