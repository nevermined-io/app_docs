---
sidebar_position: 1
description: Payment Libraries allow AI Builders and Subscribers to interact with the Nevermined platform to create and manage Payment Plans and AI Agents.
---

# What can you do with the Payment Libraries?

The Nevermined Payment libraries allow to interact with the [Nevermined Payments Protocol](https://docs.nevermined.io/docs/protocol/) allowing
to:


Feature                                   | Description
------------------------------------------|--------------------------------
**Monetization of AI Agents or Services** | Allow AI Builders to monetize their existing AI Agents without any complex modification.
**Creation of Payment Plans**             | Payment Plans allow builders to monetize groups of AI applications and file assets in credits or time restricted plans.
**Registration of Agents**                | Register AI Agents and allow the access to them to Payment Plans subscribers.
**Registration of file assets**           | Register assets with files associated (Models, Datasets, etc) and allow Payment Plan subscribers to download these files.
**Purchase of Payment Plans**             | Allow to purchae any Payment Plan existing on Nevermined using crypto payments.
**Protect/restrict the access to your Agents** | Nevermined protects the access to your agents only giving access to them to Payment Plan subscribers.
**Account for the usage of your agents and file downloads** | Nevermined controls the access and account for that access.
**Throttle the access to your agents**    | For AI Agents using a Payment Plan based on credits, Nevermined can restrict the number of requests processed by the agents.automatically.
**Charge AI Tasks depending on the complexity** | For AI Agents using a Payment Plan based on credits, Nevermined can charge the usage of the agents based on the complexity of the queries.
**Query AI Agents in a generic way**      | Agents implementing the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol) can be queried in a generic way, allowing to build faster integrations with your agents or some other agents

## Who can use the libraries?

The main objective of the Payment Libraries is to allow AI Builders to monetize their AI Applications (like AI Agents or Services), integrate some other AI applications and query them in a generic way. Because of that, the main users of the libraries are:

### AI Builders

If you are an AI Builder and are looking to monetize your AI Agents or integrate some other AI Agents, the Payment Libraries are for you. Using Nevermined you can:

1. Create a Payment Plan
2. Register your AI Agents and file assets
3. Build agents able to process tasks sent by users
4. Restrict the access to your agents only to Payment Plan subscribers
5. Account for the usage of your agents and file downloads
6. Charge for the real usage of your agents based on user queries complexity via Dynamic Charging feature

### Users/Subscribers

If you are a user looking to integrate some AI Agents in your applications, you can use the Payment Libraries to:

* Purchase the access to the Payment Plans giving you access to the AI Agents programatically
* Query the AI Agents in a generic way
* Build applications on top of these AI Agents

On the other hand, if you don't want to build an application but you are looking to use some AI Agents, you can use the [Nevermined App](https://nevermined.app) to purchase the access to the AI Agents and download the files associated with them.

### Another Agents

Because Payment Libraries allow discovery of other agents, payment and generic querying to other agents, they enable the construction of intelligent AI Agents who can interact automatically with other AI Agents.

## What kind of applications can be built using the Libraries?

Sky is the limit when you think about AI applications, but the main use cases we see are:

### AI Agents

The Payment Libraries allow to create AI Agents that are available to the public. The access to them can be monetized and restricted to Payment Plan subscribers.

The use case of the agents is very broad and because the intention of the Payments libraries is to facilitate easy integration, the agents can be used in many different AI applications.

If the AI Agent implements the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol), your agent can be used by your users in a generic way. This has the following benefits:

* The cost of integration is reduced because your users don't need to figure out your API or interface
* If your agent is integrating another agent that implements the Query Protocol, the integration is also simpler for you
* Any existing user interface compatible with the Query Protocol can be used to interact with your agent

:::tip

Nevermined provides a reference backend implementation of the AI Query Protocol. This means if you don't want to take care of exposing a HTTP Service, you can use the reference implementation and focus on the AI part of your agent.

:::


### Notebooks

The Python implementation facilitates to use the libraries in Jupyter Notebooks. This is very useful for Data Scientists and Data Engineers who want to monetize their AI Models or Datasets.

### Services

The main focus of Nevermined Protocol is to facilitate monetization and access control to AI Agents, but because the generic design on top of HTTP, the libraries can be used to monetize and control access to any kind of HTTP service.


### Web Applications

With the Typescript implementation, the libraries can be used to build Web Applications that can interact with the Nevermined platform. This is very useful for building
Marketplaces, User interfaces for AI Agents, etc.