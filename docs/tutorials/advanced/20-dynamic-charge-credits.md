---
sidebar_position: 20
description: How to charge credits dynamically
---

# How an AI Agent or Service can charge credits dynamically

When a builder is registering a new AI Agent or service (see [tutorial](../builders/register-agent)) it's possible to specify the cost of each request to the service. This cost can be fixed or dynamic, depending on the service logic.

If the cost is fixed (for example 3 credits) each successful request to the service will cost 3 credits to the user ending the request. Easy.
But if the cost is dynamic, the service can report back to Nevermined how many credits need to be charged. To do that the AI service/agent needs to return a HTTP header `NVMCreditsConsumed` with the number of credits to be charged.

The number of credits returned in the `NVMCreditsConsumed` HTTP header must be in the range of the credits cost defined in the service/agent during the registration. It means if the publisher said the cost in credits is between 1 and 10, the service/agent can return any number between 5 and 10. If the service/agent returns a number outside this range, the credits charged will be the minimum of that range (in our example 5 credits).

## Why dynamic charging is important?

It allows AI builders to adapt the cost of the service to the complexity of the request. For example, a service that needs to process a large dataset can charge more credits than a service that processes a small dataset.
