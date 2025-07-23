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

* **Request-Based or Credits-Based**: Provides user access with request-gating. Builders can manage the number of requests a user can make to access their AI service. This is done by setting the number of credits required to make a request to the AI service/app when adding that service to a Payment Plan. Each time a request is made, Nevermined will redeem the specified number of credits. If the user does not have enough credits, they will be prompted to purchase more and denied access until they do.
* **Time-Based**: Provides user access with time-gating. Builders can set the time period that a user is allowed access to the AI (e.g., 1 year, 1 month, 1 week, 1 day, 1 hour, etc.). When a user makes a request, the corresponding access credit is redeemed, granting access for the designated period. Once the time period has elapsed, the user will no longer have access and will need to redeem another credit for continued access.

### Registering a Credit-Based Payment Plan


<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  USDC_ERC20_TESTING = '0x036CbD53842c5426634e7929541eC2318f3dCF7e' # This is the USDC ERC20 address in the test network (sandbox)

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
  const USDC_ERC20_TESTING = '0x036CbD53842c5426634e7929541eC2318f3dCF7e' // This is the USDC ERC20 address in the test network (sandbox)

  const planMetadata = {
    name: 'My Credits Plan',
    tags: ['test']
  }

  // The price is 20 USDC (20_000_000) in the sandbox network
  const priceConfig = getERC20PriceConfig(20_000_000n, USDC_ERC20_TESTING, builderAddress)
  // The subscriber receives 100 credits upon purchasing the plan
  const creditsConfig = getFixedCreditsConfig(100n)
  // Register the plan
  const { planId } = await payments.plans.registerCreditsPlan(
    planMetadata, 
    priceConfig, 
    creditsConfig
  )
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
  // The price is 5 USDC (5_000_000) in the sandbox network
  const priceConfig = getERC20PriceConfig(5_000_000n, ERC20_ADDRESS, builderAddress)
  // The plan is valid for 1 day
  const oneDayPlanConfig = getExpirableDurationConfig(ONE_DAY_DURATION)
  // Register the plan
  const { planId } = await payments.plans.registerTimePlan(
    planMetadata, 
    priceConfig, 
    oneDayPlanConfig
  )
  
  ```
  </TabItem>  
</Tabs>

### Registering a Trial Plan

A Trial Plan is a special type of Payment Plan that allows users to try out an AI Agent for a limited time (typically for free). A Trial Plan can only be obtained once by each user.

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Add the Trial Plan code registration here
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript  
  const trialPlanMetadata: PlanMetadata = {
    name: 'Try it for one day before you buy it',
  }
  // The price is free
  const freeConfig = getFreePriceConfig()
  // The plan is valid for 1 day
  const oneDayPlanConfig = getExpirableDurationConfig(ONE_DAY_DURATION)
  // Register the trial plan
  const { planId } = await payments.plans.registerTimeTrialPlan(
    trialPlanMetadata, 
    freeConfig, 
    oneDayPlanConfig
  )
  
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
  // You can use wildcards (like :agentId in the example) to match any string
  // See more information about the wildcards supported here: https://github.com/pillarjs/path-to-regexp

  const agentMetadata: AgentMetadata = {
    name: 'E2E Payments Agent',
    tags: ['test'],
    dateCreated: new Date()
  }
  const agentApi = {
    endpoints: [
      { 'POST': 'https://example.com/api/v1/agents/:agentId/tasks' },
      { 'GET': 'https://example.com/api/v1/agents/:agentId/tasks/invoke' }
    ],
    openEndpoints: ['https://example.com/api/v1/rest/docs-json']
  }
  const paymentPlans = [creditsPlanId, expirablePlanId]

  const { agentId } = await payments.agents.registerAgent(
    agentMetadata, 
    agentApi, 
    paymentPlans
  )

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
  const agentMetadata = { name: 'My AI Payments Agent', tags: ['test2'] }
  const agentApi = { endpoints: [{ 'POST': 'http://example.com/test/:agentId/tasks' }] }

  const cryptoPriceConfig = getNativeTokenPriceConfig(500n, builderAddress)
  // Non expirable payment plan
  const nonExpirableConfig = getNonExpirableDurationConfig()

  const { agentId, planId } = await paymentsBuilder.agents.registerAgentAndPlan(
    agentMetadata,
    agentApi,
    planMetadata,
    cryptoPriceConfig,
    nonExpirableConfig,
  )
  ```
  </TabItem>  
</Tabs>