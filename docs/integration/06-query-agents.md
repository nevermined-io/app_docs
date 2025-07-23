---
sidebar_position: 6
description: How can users query AI Agents they purchased?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How can users query AI Agents they purchased?

Once a user (or agent) purchases a Payment Plan, if this Plan has some AI Agents or Services attached to it, the user can query these AI Agents or Services.

For identifying the user as a valid subscriber, they need to send HTTP requests to the AI Agent via a Nevermined Proxy instance and include a valid **Access Token**. This is sent using the standard **HTTP Authorization header**.

:::info
Nevermined Proxy instances are **standard HTTP Proxies** in charge of **authorizing users** trying to access AI Agents or Services.
:::

Once a user is a subscriber, sending a request is quite simple.

## Get the AI Agent or Service Access Token

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  access_config = payments.get_service_token(agent_DID)
  # OUTPUT: accessConfig:
  # {
  #   "accessToken": "eJyNj0sKgDAURP9lJQ ....",
  #   "neverminedProxyUri": "https://proxy.testing.nevermined.app"
  # }    
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const credentials = await payments.agents.getAgentAccessToken(planId, agentId)
  // OUTPUT: credentials:
  // {
  //   accessToken: 'eJyNj0sKgDAURP9lJQ ....',
  //   proxies: [ 'https://proxy.nevermined.app' ]
  // }  
  ```  
  </TabItem>  
</Tabs>


## Sending a query to the AI Agent

If the response of the `getAgentAccessToken` method contains a valid `accessToken`, the user can query the AI Agent making a standard HTTP request.
This request must be sent directly to the Agent (the description of the Agent API is in the Agent Metadata) or if the `agentAccessParams` includes an entry in the `proxies` array, through one of the Nevermined Proxy instances listed in the `proxies` array of the response.

:::info
Because Nevermined authorizes standard HTTP requests, they can be used to protect any kind of AI Agent or Service exposing an HTTP API.
:::

```bash
export AGENT_ACCESS_TOKEN="eJyNj0sKgDAURP9lJQ..."

curl -k -X POST -H "Content-Type: application/json" -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" -d '{"query": "hey there"}' https://my.agent.io/prompt```
```


Of course you can use all this information to send a request to the agent in Python or Typescript:

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Add code here
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const agentHTTPOptions = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${credentials.accessToken}`,
    }
  }

  const response = await fetch(new URL('https://my.agent.io/prompt'), agentHTTPOptions) 
  ```  
  </TabItem>  
</Tabs>


