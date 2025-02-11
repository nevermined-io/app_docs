---
sidebar_position: 5
description: How to integrate Nevermined into your AI Agent
---

# How to integrate Nevermined?

If you read the section about the [Benefits of using Nevermined](benefits) probably you figured that depending on the benefits you want to take advantage of, you are gonna need to integrate Nevermined in a different way.

Nevermined is flexible and can be used in different ways. Some of them don't require any effort or code modification, but some others could require using the [Nevermined Payment Libraries](../libraries/). Here we are gonna explain how to integrate Nevermined depending on what you want to achieve.

## Do you want to monetize your AI Agent?

If you are reading the Nevermined documentation most probably is because somehow you want to monetize your AI Agent. 

<p align="center"><img src="/images/architecture/integration_monetization.png" width="600"/></p>

In this case there is just one question you need to ask yourself. Do I need to use the Nevermined advanced features? 

- If the answer is no, you can just register your AI Agent in the [Nevermined App](https://nevermined.app/) and define how much is gonna cost and how users can query your agent.
- If the answer is yes, you need to integrate the [Nevermined Payment Libraries](../libraries/).

The advanced features requiring Library integration are:

* Discover other AI Agents via search queries.
* Purchase the access to other AI Agents registered on Nevermined
* Querying other AI Agents using the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol).

If you don't need any of the above, you don't need any code modification. Just register your AI Agent in the [Nevermined App](https://nevermined.app/).

## Do you want to make your agent easily used by others?

If you want to facilitate your agent to be discoverend, purchased and queried by other agents, we recommend to use the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol). The best way to expose your agent to other agents is integrating the [Nevermined Payments Library](../libraries/) in your agent code.

## Do you want to account for the usage of your agent?

If you just want to protect against over expenditure of your agent and account for the requests sent to it, in most of the cases you don't need any code modification and just registering the AI Agent in the [Nevermined App](https://nevermined.app/) is enough. In the App you can associate a Time-based or Credits-based plan that allows you to define how your agent is accessible. Nevermined will account for the usage of your agent automatically. There are different scenarios:

* If you just want to allow access to your agent for a limited time, you can use a **Time-based plan**. When the time is over, the access is revoked and the subscriber needs to purchase the Plan again.
* If you want to limit the number of requests that can be made to your agent, you can use a **Credits-based plan**. Every time your agent receives a request some credits are redemed. When the credits are over, the access is revoked and the subscriber needs to topup the Plan.

In a Credits-based plan the redemption criteria has 2 different options:

- **The number of credits redemed is fixed** for every request. The AI builder defines how many credits cost each request and the subscriber knows upfront the cost in credits of the request.
- **The number of credits redemed is dynamic** (within a range). The number of credits redemed is calculated by the AI Agent based on the complexity of the request and inform back to Nevermined. This is a more advanced feature and requires a simple code modification in the AI Agent. More information in the [How an AI Agent or Service can charge credits dynamically](../tutorials/advanced/dynamic-charge-credits) tutorial.

## Do I want to delegate the execution of the HTTP API of my Agent?

If you want to focus just in the AI logic of your agent and delegate the execution of the HTTP API to Nevermined, you can use the [Nevermined AI Hub](../environments/ai-hub). If that's the case you can connect to the Nevermined AI Hub using the [Payment Libraries](../libraries/) and start receiving AI tasks from your subscribers.
