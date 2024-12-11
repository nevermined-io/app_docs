---
sidebar_position: 20
description: How to charge credits dynamically
---

# How an AI Agent or Service can charge credits dynamically

When a builder is registering a new AI Agent or service (see [tutorial](../builders/register-agent)) it's possible to specify the cost in credits of each request to the agent. This cost can be fixed or dynamic, depending on the service logic.

<p align="center"><img src="/images/tutorials/select_dynamic_cost_credits.png" width="600"/></p>

If the cost is **Fixed** (for example 3 credits) each successful request to the service will cost 3 credits to the user ending the request. Easy.
But if the cost is **Dynamic**, the agent/service can report back to Nevermined how many credits need to be charged. 

To do that the AI agent/service needs to return a HTTP header `NVMCreditsConsumed` with the number of credits to be charged.

The number of credits returned in the `NVMCreditsConsumed` HTTP header must be in the range of the credits cost defined in the service/agent during the registration. It means if the publisher/build said the cost in credits is between 1 and 10, the service/agent can return any number between 5 and 10. If the service/agent returns a number outside this range, the credits charged will be the minimum of that range (in our example 5 credits).

## How can the users know what's the cost in credits of using an AI Agent or Service?

Before purchasing any AI Agent or Service, the user can see the cost in credits of each request. That helps to understand better the cost of the agent and in a high level how many requests can send before needing to top up.

In the details page of the agent/service, the user can see the cost in credits per request:
<p align="center"><img src="/images/tutorials/agent_details_page_dynamic_credits_cost.png" width="600"/></p>

## Why dynamic charging is important?

It allows AI builders to adapt the cost of the service to the complexity of the request. For example:

* An Agent that needs to decompose a complex prompt into several prompts integrate with more expensive models can charge more credits than an agent that uses a simple model.
* A Service that needs to process a large dataset can charge more credits than a service that processes a small dataset.
