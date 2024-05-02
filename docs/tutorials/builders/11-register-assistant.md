---
sidebar_position: 11
description: How to register your OpenAI assistant and link to a Smart Subscription
---

# How to register your OpenAI assistant

In a previous tutorial we showed [how to create a Smart Subscription](create-subscription). Here we go through the required steps of registering a new OpenAI assistant and linking it to your Smart Subscription. User who purchase a subscription will get access to the assistant that is included in the subscription plan.

:::note
You can't register an OpenAI assistant without first configuring a Smart Subscription. So if you skipped that part, please go to the tutorial about [How to create a Smart Subscription](04-create-subscription.md) first.
:::

If you don't want to read the whole tutorial, you can watch the video tutorial:

<p align="center">
<iframe width="840" height="470" src="https://www.youtube.com/embed/65rVHScjoGU?si=UkrpJK7tjtoXGlWE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

## How to register an OpenAI assistant

These are the steps to make your assistant accessible to Users that buy your Smart Subscription.

### 1. Open the New Asset page

- Click on the New button in the top right to go the New Asset page.
- Click on the “Create Asset” button of the "OpenAI Assistants" box.

<p align="center"><img src="/images/tutorials/builders/new-assistant-tile.png"/></p>

### 2. Describe the OpenAI assistant with metadata

#### Provide a short title

#### Add a description

Use the description box to explain to potential users what your assistant is about. Some examples:

- _An OpenAI assistant that helps you solve math problems..._

#### Include tags (optional)

Add tags to help search for your OpenAI assistant.
Click the '+' symbol to add new tags.

![OpenAI Assistant Details](/images/tutorials/11-01-OpenAI-Assistant-Description.png)

### 3. Define the attributes of the OpenAI assistant

In this second step you need to provide the **required** assistant ID and the access token of your OpenAI agent. Please follow these steps on [How to create an OpenAI agent](10-openai-assistant.md)

:::info

PLEASE NOTE: Your authentication information is encrypted and will always be kept private. Nevermined, nor anyone else, will never have access to this information.

:::

![OpenAI Assistant Details](/images/tutorials/11-02-OpenAI-Assistant-Details.png)

### 4. Add integration instructions

Give specific info about how other Builders can integrate your OpenAI assistant. This information is **optional**. For example:

- How to write queries
- Format

![OpenAI Assistant Integration](/images/tutorials/11-03-OpenAI-Assistant-Integration.png)

### 5. Choose a Smart Subscription plan

Next, you need to specify which Smart Subscription a user needs to purchase to get access to the OpenAI assistant.

![Assistant Plan](/images/tutorials/11-06-OpenAI-Assistant-Plan.png)

If the subscription is **Limited by usage**, you will need to specify how many credits are consumed every time a user accesses the OpenAI assistant. This is very useful to **protect** your OpenAI assistant against **overuse**.

:::tip
If you want your assistant to be available via different plans, you can go through this process once more.
Register the OpenAI assistant again and add it to another Smart Subscription plan. For now ;-)
:::

### 6. Review that everything is okay

Finally, review your assistant subscription. Click on “Create” if everything looks good. Or go “Back” if you want to modify anything.
![Assistant Review](/images/tutorials/11-04-OpenAI-Assistant-Review.png)

### 7. Assistant registration

The Nevermined App will register the new OpenAI assistant. This will take just a few seconds and once it's done, you will see a success message.

![Registered Assistant page](/images/tutorials/11-05-OpenAI-Assistant-Result.png)

---

**You’re done!**

If you are interested on promoting your new OpenAI assistant and make some money, please to the tutorial about [How to distribute your AI services and files and make some money](09-distribute.md).
