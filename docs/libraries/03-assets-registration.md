---
sidebar_position: 3
description: How AI Builders can register Payment Plans and Agents?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to register Payment Plans and Agents?

Once you have a Payments instance, you can start registering Payment Plans and AI Agents.

## Creating a Payment Plan

Payment Plans give AI Builders the ability to control how and when users can use an AI agent or service. They are entirely controlled and managed by the AI Builder that creates them with no interference from Nevermined.

Nevermined Payment Plans enable the setup of time-based or request-based gating of a Builder's AI.

* **Request-Based or Credits-Based**: Provisions user access with request-gating. In this case, Builders can manage the number of requests that a user can make to access their AI service. This is done by prompting the Builder to set the number of credits needed to make a request to the AI service/app when they add that service to a Payment Plan package. Once set, each time a request is made by a user, Nevermined will redeem the specified number of credits needed to make the request. If the user does not have enough credits, they will be prompted to purchase more credits and denied access to the Builder's AI service/app.
* **Time-Based**: Provisions user access with time-gating. Builders can set the time period that a user will be allowed access to the AI. For example, this could be 1 year, 1 month, 1 week, 1 day, 1 hour, etc. When a user makes a request, the corresponding access credit will be redeemed and grant that user access to the AI service for the period designated by the Builder. Once the time period has elapsed, the user will no longer have access, and will need to redeem another credit if additional access is required.

### Creating a Credit-Based Payment Plan


<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' # This is the USDC ERC20 address in the testing network

  plan_DID = payments_builder.create_credits_plan(CreateCreditsPlanDto(
      name='E2E Payments Plan', 
      description='description', 
      price=15000000, # 15 USDC
      token_address=USDC_ERC20_TESTING,
      amount_of_credits=100 # It means when someone purchase this plan, they will get 100 credits
  ))
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript    
  const USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' // This is the USDC ERC20 address in the testing network

  const planDID = await paymentsBuilder.createCreditsPlan({
    name: 'E2E Payments Plan', 
    description: 'description', 
    price: 15000000n, // 15 USDC
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
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' # This is the USDC ERC20 address in the testing network

  plan_DID = payments.create_time_plan(CreateTimePlanDto(
      name="My 1 Month Plan",
      description="test",
      price=15000000, # 15 USDC
      token_address=USDC_ERC20_TESTING,
      duration=30, # 30 days
      tags=["test"]
  ))  
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript  
  const USDC_ERC20_TESTING = '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d' // This is the USDC ERC20 address in the testing network

  const planDID = await payments.createTimePlan({
    name: "My 1 Month Plan",
    description: "test",
    price: 15000000n, // 15 USDC
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
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  agent_DID = payments_builder.create_agent(CreateAgentDto(
      plan_DID, # The DID of the Payment Plan we created before
      name='My AI Assistant',
      description='description of the assistant',
      service_charge_type='fixed',
      auth_type='bearer',
      token='changeme',
      amount_of_credits=1,
      use_ai_hub=True,
  ))  
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
  
  const agentDID = await payments.createAgent({
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

  // If you want to use the AI Hub, you can create an agent with the following code
  // As you can see you don't need to pass the endpoint urls because the subscribers will be using the Nevermined Query Protocol endpoints
  const agentDIDwithAIHub = await payments.createAgent({
    planDID, // The DID of the Payment Plan we created before
    name: 'My AI Assistant',
    description: 'description of the assistant',
    serviceType: 'agent',
    serviceChargeType: 'fixed',
    amountOfCredits: 1,
    usesAIHub: true,
  })


  ```
  </TabItem>  
</Tabs>

### Creating a Credit-Based Payment Plan and an AI Agent in one step

:::note
This method allows you to create the plan and attach the agent to it in one step.
:::

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python 
  response = payments_builder.create_agent_and_plan(
      createCreditsPlanDto=CreateCreditsPlanDto(
          name="test-py",
          description="test",
          price=1000000,
          token_address="0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",
          amount_of_credits=100,
          tags=["test"]
      ),
      createAgentDto=CreateAgentDto(
          name="agent-py",
          description="test",
          amount_of_credits=1,
          service_charge_type="fixed",
          auth_type="none",
          use_ai_hub=True
      )
  )
  print('Plan created', response.planDID)
  print('Agent attached', response.agentDID)
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const { planDID, agentDID } = await payments.createAgentAndPlan(
    {
      name: 'Payments Agent plan',
      description: 'description',
      price: 0n,
      amountOfCredits: 100,
      tokenAddress: ERC20_ADDRESS,
    },
    {
      name: 'Agent e2e name',
      description: 'description',
      amountOfCredits: 1,
      usesAIHub: true,
      serviceChargeType: 'fixed',
    },
  )
  ```
  </TabItem>  
</Tabs>