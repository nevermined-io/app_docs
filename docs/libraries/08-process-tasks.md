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

:::info
Builders using the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol) can process AI tasks in a simple way and generic way. No need to define a way to interact with the agents, just start to integrate.
:::

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
  import asyncio

  asyncio.create_task(builder.query.subscribe(callback_function, join_account_room=True, join_agent_rooms=[], subscribe_event_types=['step-updated'], get_pending_events_on_subscribe=True))
  
  callback_function = (step) => {
    print('Step received', step)
    await payments.query.update_step(did=step['did'], 
      task_id=step['task_id'], 
      step_id=step['step_id'], 
      step={'step_id': step['step_id'],
        'task_id': step['task_id'], 
        'step_status': AgentExecutionStatus.Completed.value,
        'output': 'success',
        'is_last': True,
        'cost': 1
      })
  }
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
    await paymentsBuilder.query.updateStep(step.did, {
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

:::info

Once a remote task in an AI Agent is completed, the user can query the results of the task using the `get_task_with_steps` (Python) or `getTaskWithSteps` (Typescript) methods <u> **[described here](query-agents#getting-the-results-of-the-execution-of-a-task-via-query-protocol)** </u>.

:::

As you can see in the above code, the agent can subscribe to the events related with AI tasks created by the users and process them. For doing that it just needs to implement a callback function that will get the AI task input parameters and process it.

### AI Tasks and Steps

The AI tasks are composed by several steps. Each step is a part of the task that the AI Agent needs to process. The steps are processed sequentially and the agent can update the status of the step and the output of the step. You can see the steps as a workflow that the AI Agent needs to process to be completed.

The AI Agent only needs to process the steps and update the status of the step and the output of the step. The rest of the logic is managed by **Nevermined AI Hub**.

When a user requests a task to an AI Agent, by default is created one task with one step. This first step has the **"init"** name. When the AI agent receives the **init** step can:

* If the AI task is simple and **doesn't require several steps**, it can process the step and update the status of the step to **Completed** and the **is_last** attribute as **true**. This will mark the whole task as completed.

* If the AI task requires **multiple steps**, the AI Agent can create more steps and setup the order of execution and configuration of them. This can be done by defining the **name**, **order** and **predecessor** step. 

We will see different code examples about how to do this in the following section.

### Sending task logs dynamically

The execution of an AI task can be long and the user can want to know the status of the task. The AI Agent can send logs to the user about the status and some other relevant output of the task. This can be done using the `log_task (python)` or `logTask (typescript)` methods. 

:::tip
When your task finishes with a `Completed` or `Failed` status, you can send a log message witht that status. That will allow the user (or agent) to know the final status of the task in real-time.
:::

Let's see an example:

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  await self.payment.query.log_task(
    TaskLog(
      task_id=step['task_id'], 
      message='Summary ready.', 
      level='info', 
      task_status=AgentExecutionStatus.Completed.value
    )
  )

  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const logMessage: TaskLogMessage = {
      task_id: step.task_id,
      level: 'info',
      task_status: AgentExecutionStatus.Completed,
      message: `Step ${step.name} : ${step.step_id} completed!`,
  }
  await payments.query.logTask(logMessage)
  
  ```
  </TabItem>  
</Tabs>

These logs will be send via websocket and the user who sent the task can see them in real time.

