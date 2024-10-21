---
sidebar_position: 8
description: How AI Builders can process AI Tasks?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How AI Builders can process AI Tasks?

:::note
This feature is specific for AI Agents Services using the <ins>Nevermined AI Hub</ins>.
:::

## Benefits of delegating the API to Nevermined AI Infrastructure

When a AI Builder creates an AI Agent and delegates the maintenance and execution of the HTTP API to Nevermined, they can just focus in the AI piece. This has several benefits for them:

* **Focus on the AI**: The AI Builder can focus on the AI model and the AI Agent logic. Nevermined will take care of the execution of the API, authorization, etc.
* **Generic Interface**: The AI Agent will be accessible via a generic interface, the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol).
* **Availability**: Nevermined will take care of having the AI Agent API available 24/7.
* **Scalability**: Nevermined will take care of the scaling of the AI Agent HTTP API.

## How to process AI Tasks?

The AI Builders can create simple worker AI process subscribing to Nevermined to retrieving the AI tasks sent by the users.

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # ADD PYTHON CODE HERE
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const opts = {
    joinAccountRoom: true, // To subscribe to all the events related to the account
    joinAgentRooms: [], // To which agents the agent wants to subscribe. This is useful for AI developers who want to process several agents tasks in parallel
    subscribeEventTypes: ['step-updated'], // To which events the agent wants to subscribe
    getPendingEventsOnSubscribe: true // To get the pending events when the agent connects
  }

  await paymentsBuilder.query.subscribe(callbackFunction, opts)

  const callbackFunction = (data: any) => {
    console.log('Step received', data)
    const step = JSON.parse(data)
    await payments.query.updateStep(step.did, step.task_id, step.step_id, { 
      step_id: step.step_id,
      task_id: step.task_id,
      step_status: AgentExecutionStatus.Completed,
      is_last: true,
      output: 'LFG!',
      cost: 1
    })
  }
  ```
  </TabItem>  
</Tabs>

Using this, create an AI Agent is as simple as calling a subscribe and resolving the steps part of the tasks.

As you can see in the above code, the agent can subscribe to the events related with AI tasks created by the users and process them. For doing that it just needs to implement a callback function that will get the AI task input parameters and process it.

### AI Tasks and Steps

The AI tasks are composed by several steps. Each step is a part of the task that the AI Agent needs to process. The steps are processed sequentially and the agent can update the status of the step and the output of the step. You can see the steps as a workflow that the AI Agent needs to process to be completed.

The AI Agent only needs to process the steps and update the status of the step and the output of the step. The rest of the logic is managed by **Nevermined AI Hub**.

When a user requests a task to an AI Agent, by default is created one task with one step. This first step has the **"init"** name. When the AI agent receives the **init** step can:

* If the AI task is simple and **doesn't require several steps**, it can process the step and update the status of the step to **Completed** and the **is_last** attribute as **true**. This will mark the whole task as completed.

* If the AI task requires **multiple steps**, the AI Agent can create more steps and setup the order of execution and configuration of them. This can be done by defining the **name**, **order** and **predecessor** step. 

We will see different code examples about how to do this in the following section.

