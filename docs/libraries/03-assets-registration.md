---
sidebar_position: 3
description: How AI Builders can register Payment Plans and Agents?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to register Payment Plans and Agents?

Once you have a Payments instance, you can start registering Payment Plans and AI Agents.

## Creating a Payments Plan

Payment Plans give AI Builders the ability to control how and when users can use an AI agent or service. They are entirely controlled and managed by the AI Builder that creates them with no interference from Nevermined.

Nevermined Payment Plans enable the set up of time-based or request-based gating of a Builder's AI.

* **Request-Based or Credits-Based**: Provisions User access with request-gating. In this case, Builders can manage the number of requests that a User can make to access their AI service. This is done by prompting the Builder to set the number of credits needed to make a request to the AI service / app when they add that service to a Payment Plan package. Once set, each time a request is made by a User, Nevermined will redeem the specified number of credits needed to make the request. If the User does not have enough credits, they will be prompted to purchase more credits and denied access to the Builder's AI service / app.
* **Time-Based**: Provisions User access with time-gating. Builders can set the time period that a User will be allowed access to the AI. For example, this could be 1 year, 1 month, 1 week, 1 day, 1 hour, etc. When a user makes a request, the corresponding access credit will be redeemed and grant that User access to the AI service for the period designated by the Builder. Once the time period has elapsed, the User will no longer have access, and will need to redeem another credit if additional access is required.

### Creating a Credit-Based Payment Plan


<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' # This is the USDC ERC20 address in the testing network

  plan_DID = payments_builder.create_credits_plan({
    name: 'E2E Payments Plan', 
    description: 'description', 
    price:15000000n, # 15 USDC
    token_address: USDC_ERC20_TESTING,
    amount_of_credits: 100 # It means when someone purchase this plan, they will get 100 credits
  })
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript    
  const USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' // This is the USDC ERC20 address in the testing network

  const planDID = await paymentsBuilder.createCreditsPlan({
    name: 'E2E Payments Plan', 
    description: 'description', 
    price:15000000n, // 15 USDC
    tokenAddress: USDC_ERC20_TESTING,
    amountOfCredits: 100 // It means when someone purchase this plan, they will get 100 credits
  })
  ```
  </TabItem>  
</Tabs>


### Creating a Time-Based Payment Plan

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' # This is the USDC ERC20 address in the testing network

  plan_DID = payments.create_time_plan({
    name: "My 1 Month Plan",
    description: "test",
    price:15000000n, # 15 USDC
    token_address: USDC_ERC20_TESTING,
    duration: 30, # 30 days
    tags: ["test"]
  })  
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript  
  const USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' // This is the USDC ERC20 address in the testing network

  const planDID = await payments.createTimePlan({
    name: "My 1 Month Plan",
    description: "test",
    price:15000000n, // 15 USDC
    tokenAddress: USDC_ERC20_TESTING,
    duration: 30, // 30 days
    tags: ["test"]
  })
  
  ```
  </TabItem>  
</Tabs>

### Registering an AI Agent

:::note
Before registering an AI Agent, you need to have a Payment Plan created.
:::

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # When you create an agent, you need to provide the endpoints that the agent exposes and are protected by the Payment Plan
  # You must specify the HTTP method and the URL pattern that the agent exposes
  # You can use wildcards (.*) to match any string
  agent_endpoints = [
     { 'POST': 'https://example.com/api/v1/agents/(.*)/tasks' },
     { 'GET': 'https://example.com/api/v1/agents/(.*)/tasks/(.*)' }
  ]

  agent_DID = payments_builder.create_service({
    plan_DID, # The DID of the Payment Plan we created before
    name: 'My AI Assistant',
    description: 'description of the assistant',
    serviceType: 'agent',
    serviceChargeType: 'fixed',
    authType: 'bearer',
    token: 'changeme',
    amountOfCredits: 1,
    endpoints: agent_endpoints,
    openEndpoints: ['https://example.com/api/v1/rest/docs-json']
  })  
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  // When you create an agent, you need to provide the endpoints that the agent exposes and are protected by the Payment Plan
  // You must specify the HTTP method and the URL pattern that the agent exposes
  // You can use wildcards (.*) to match any string
  const agentEndpoints: Endpoint[] = [
     { 'POST': 'https://example.com/api/v1/agents/(.*)/tasks' },
     { 'GET': 'https://example.com/api/v1/agents/(.*)/tasks/(.*)' }
  ]

  const agentDID = await paymentsBuilder.createService({
    planDID, // The DID of the Payment Plan we created before
    name: 'My AI Assistant',
    description: 'description of the assistant',
    serviceType: 'agent',
    serviceChargeType: 'fixed',
    authType: 'bearer',
    token: 'changeme',
    amountOfCredits: 1,
    endpoints: ENDPOINTS,
    openEndpoints: ['https://example.com/api/v1/rest/docs-json']
  })
  
  ```
  </TabItem>  
</Tabs>