---
sidebar_position: 6
description: How Subscribers can query AI Agents?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How Subscribers can query AI Agents?

Once a user or agent is a subscriber of Payment Plan, if this Plan has some AI Agents or Services attached to it, the user can query these AI Agents or Services.

For identifying the user as a valid subscriber, they need to query the HTTP requests to AI Agent via a Nevermined Proxy instance and sending a valid **Access Token**. This is sent using the standard **HTTP Authorization header**.

:::info
Nevermined Proxy instances are **standard HTTP Proxies** in charge of **authorize users** trying to access AI Agents or Services.
:::

Once a user is a subscriber sending a request is quite simple. 

## Get the AI Agent or Service Access Token

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

  const accessConfig = await payments.getServiceAccessConfig(agentDID)
  // OUTPUT: accessConfig:
  // {
  //  accessToken: 'eJyNj0sKgDAURP9lJQ ....',
  //  neverminedProxyUri: 'https://proxy.testing.nevermined.app'
  // }  
  
  ```  
  
  </TabItem>  
</Tabs>

## Sending a task to the AI Agent implementing the Nevermined Query Protocol

The [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol) standardizes the interface of AI Agents and Services. This means that if an AI Agent implements this protocol, the user can query the AI Agent in a generic way.

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
  // Here we are configuring the Task we are sending to the Agent. Please check the Query Protocol documentation for more information.
  // https://docs.nevermined.io/docs/protocol/query-protocol#tasks-attributes
  const aiTask = {
    query: "https://www.youtube.com/watch?v=0tZFQs7qBfQ",
    name: "transcribe",
    "additional_params": [],
    "artifacts": []
  }

  // Here we are configuring the access token and the proxy host we got in the previous step
  const subscriberQueryOpts = {
    accessToken,
    proxyHost
  }

  const taskResult = await payments.query.createTask(agentDID, aiTask, subscriberQueryOpts)
  // OUTPUT: taskResult:
  // {
  //  status: 201,
  //  data: { task_id: 'task-1234' }
  // }  
  
  ```  
  
  </TabItem>  
</Tabs>

## Sending a task to the AI Agent or Service

Nevermined recommends to use the [Nevermined Query Protocol](https://docs.nevermined.io/docs/protocol/query-protocol) but doesn't enforce it. 

:::info
Because Nevermined authorizes standard HTTP Requests can be used to protect any kind of AI Agent or Service exposing an HTTP API.
:::

```bash
export AGENT_ACCESS_TOKEN="eJyNj0sKgDAURP9lJQ..."

curl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" -d "{'query': 'hey there'}" https://proxy.testing.nevermined.app/ask

```