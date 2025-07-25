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
  # This is the USDC ERC20 address in the test network (sandbox)
  USDC_ERC20_TESTING = "0x036CbD53842c5426634e7929541eC2318f3dCF7e"

  # Plan metadata
  plan_metadata = PlanMetadata(
      name="My Credits Plan",
      tags=["test"]
  )

  # The price is 20 USDC (20_000_000) in the sandbox network
  price_config = get_erc20_price_config(20_000_000, USDC_ERC20_TESTING, builder_address)
  # The subscriber receives 100 credits upon purchasing the plan
  credits_config = get_fixed_credits_config(100)

  # Register the plan
  response = payments_builder.plans.register_credits_plan(
      plan_metadata,
      price_config,
      credits_config
  )
  plan_id = response.get("planId")
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
  # The price is 5 USDC (5_000_000) in the sandbox network
  price_config = get_erc20_price_config(5_000_000, ERC20_ADDRESS, builder_address)
  # The plan is valid for 1 day
  one_day_plan_config = get_expirable_duration_config(ONE_DAY_DURATION)
  # Register the plan
  response = payments_builder.plans.register_time_plan(
      plan_metadata,
      price_config,
      one_day_plan_config
  )
  plan_id = response.get("planId")
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
  # Plan metadata for the trial plan
  trial_plan_metadata = PlanMetadata(
      name="Try it for one day before you buy it"
  )

  # The price is free
  free_config = get_free_price_config()
  # The plan is valid for 1 day
  one_day_plan_config = get_expirable_duration_config(ONE_DAY_DURATION)
  # Register the trial plan
  response = payments_builder.plans.register_time_trial_plan(
      trial_plan_metadata,
      free_config,
      one_day_plan_config
  )
  plan_id = response.get("planId")
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
  # When you create an agent, you need to provide the endpoints that the agent exposes and are protected by the Payment Plan
  # You must specify the HTTP method and the URL pattern that the agent exposes
  # You can use wildcards (like :agentId in the example) to match any string
  # See more information about the wildcards supported here: https://github.com/pillarjs/path-to-regexp

  from datetime import datetime

  agent_metadata = {
      "name": "E2E Payments Agent",
      "tags": ["test"],
      "dateCreated": datetime.now().isoformat(),
      "description": "Description for the E2E Payments Agent"
  }
  agent_api = {
      "endpoints": [
          {"POST": "https://example.com/api/v1/agents/:agentId/tasks"},
          {"GET": "https://example.com/api/v1/agents/:agentId/tasks/invoke"}
      ],
      "openEndpoints": ["https://example.com/api/v1/rest/docs-json"]
  }
  payment_plans = [credits_plan_id, expirable_plan_id]

  response = payments_builder.agents.register_agent(
      agent_metadata,
      agent_api,
      payment_plans
  )
  agent_id = response.get("agentId")
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
    dateCreated: new Date(),
    description: 'Description for the E2E Payments Agent'
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
  # Agent metadata and API definition
  agent_metadata = {
      "name": "My AI Payments Agent",
      "tags": ["test2"],
      "description": "Description for my AI Payments Agent"
  }
  agent_api = {
      "endpoints": [
          {"POST": "http://example.com/test/:agentId/tasks"}
      ]
  }

  # The price is 500 native tokens
  crypto_price_config = get_native_token_price_config(500, builder_address)
  # Non expirable payment plan
  non_expirable_config = get_non_expirable_duration_config()

  response = payments_builder.agents.register_agent_and_plan(
      agent_metadata,
      agent_api,
      plan_metadata,
      crypto_price_config,
      non_expirable_config
  )
  agent_id = response.get("agentId")
  plan_id = response.get("planId")
  print('Plan created', response.planDID)
  print('Agent attached', response.agentDID)
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const agentMetadata = { 
    name: 'My AI Payments Agent', 
    tags: ['test2'], 
    description: 'Description for my AI Payments Agent' 
  }
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