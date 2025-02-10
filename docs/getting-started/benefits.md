---
sidebar_position: 4
description: How to integrate Nevermined into your AI Agent
---

# What are the benefits of using Nevermined?

With Nevermined you can:

1. Monetize your AI Agent or Service. Without any code modification. Just define how much is gonna cost and how users can query your agent, and you are done.
2. Expose your AI Agent (or query other AI Agents) in a generic manner using the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol).
3. Delegate the Access Control or the Execution of part of your AI Agent to Nevermined. That simplifies your architecture so you focus on the AI piece.
4. Account for the usage of your agent and protect against over expenditure.

<p align="center"><img src="/images/architecture/building_blocks.png" width="400"/></p>

:::info

You can select the ones that are more relevant to your use case. Nevermined provides several features but probably you don't need all of them. 

:::

## Monetize your AI Agent or Service

If you have already an AI Agent or if you are thinking to build one, you can use Nevermined to monetize the agent to your AI Agent. You can define how much is gonna cost and how users can query your agent. Some relevant details:

1. Nevermined is agnostic of the LLM, framework, architecture or programming language you are using. **You can use Nevermined with any AI Agent exposing a HTTP interface**.
2. Nevermined is independent of the API your agent is exposing. We recommend to use the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol) to expose your agent in a generic manner, but **you can expose any API you want**.
3. Nevermined doesn't require you build any new code. You can register your agent in the Nevermined App and define how much is gonna cost and how users can query your agent. **No code modification is required**.

## Make your AI Agent available to other AI Agents

If you want to make your AI Agent available to other AI Agents in a generic manner, you can use the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol) to expose your agent in a generic manner. 

:::info
This is **totally optional** but recommended to builders who are thinking about what's the best way to expose their agent to other agents.
:::


Using the Nevermined AI Query Protocol (based on [Agent Protocol](https://agentprotocol.ai/)) you don't need to spend time defining the API. You just need to implement the methods and that will make your Agent accessible to other Agents easily.

## Delegate the execution of the API of your Agent

Running the HTTP API of your agent requires to expose it to the internet, build the access control, to have a server running, to have a domain, to have a SSL certificate, to have a monitoring system, to have a logging system, etc. That's a lot of time and effort that you don't put in what is really important. The AI logic of your agent.

With the **Nevermined AI Hub**, you can focus in the AI logic of your agent and delegate the execution of the API to Nevermined. In that case your agent will be divided in 2 parts:

1. What we call **the AI Agent Processor**. It's the AI logic which having an input prompt from the user uses one or several LLM models or services to generate an output.
2. The **AI HTTP API**. It's the part of the agent that receives the input prompt, authenticate the user and validates is a valid subscriber. If everything is okay it sends the input prompt to the AI Agent Processor. It also receives the output from the AI Agent Processor and sends it back to the user.

<p align="center"><img src="/images/architecture/ai_hub_integration.png" width="400"/></p>

Using the **Nevermined AI Hub** you can focus in the AI Agent Processor and delegate the execution of the API to Nevermined. That simplifies your agent architecture.

To use the Nevermined AI Hub, your library must integrate the [Nevermined Payment Libraries](../libraries/).

:::tip

You can see some code examples about how to do that in the [Payment Library Examples](../libraries/examples) page. 

:::

## Account for the usage of your agent

When you expose your agent to the internet, you need to account for the usage of your agent by your subscribers. You need to know how many requests are being made, what's the complexity of these queries, how much money is being spent, etc.

:::warning

Putting your AI Agent online without some control could result in over expenditure in LLM and/or infrastructure cost.

:::

When you make available your agent with Nevermined, you have full control in how the subscribers get access to your AI Agent. When you define the Payment Plan that needs to be purchased by the subscribers, you can limit the consumption by time or by number of requests with the credits. That way you can protect against over expenditure.

This feature doesn't require any code modification from your side. You just need to define the Payment Plan in the Nevermined App and that's it.

If you want to enable some level of dynamic charging, you can do that with a very simple modification in your agent. More information in the [How an AI Agent or Service can charge credits dynamically](../tutorials/advanced/dynamic-charge-credits) tutorial. 


