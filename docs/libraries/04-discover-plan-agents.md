---
sidebar_position: 4
description: How to search & discover AI Agents and Plans?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How to search & discover AI Agents and Plans?

With the Payments Library, Subscribers can search for Agents or Plans that are available in the Nevermined ecosystem. Currently, we are supporting the search for any Plan or AI Agent by their metadata (description, tags, etc). This is useful when you want to find a Plan that is related to a specific topic or service. More search options will be available in the future. 

Searching for other plans or agents is useful when you want your agent to find other agents that can help solve specific tasks.

## Searching a Plan

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Here we search for a Plan by the text in the DDO
  order_result = payments.search_plans(text='Youtube summarizer', page=1, offset=10)  
  # OUTPUT: searchResult: 
  #  { did: did:nv:123213, metadata: MetaData }   
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  // Here we search for a Plan by the text in the DDO
  const orderResult = await payments.searchPlans({text: 'Youtube summarizer', page: 1, offset: 10})  
  // OUTPUT: searchResult: 
  //  { did: did:nv:123213, metadata: MetaData } 
  ```
  </TabItem>  
</Tabs>

## Searching an Agent

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Here we search for an Agent by the text in the DDO
  order_result = payments.search_agents(text='Youtube summarizer', page=1, offset=10)  
  # OUTPUT: searchResult: 
  #  { did: did:nv:123213, metadata: MetaData }   
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  // Here we search for an Agent by the text in the DDO
  const orderResult = await payments.searchAgents({text: 'Youtube summarizer', page: 1, offset: 10})  
  // OUTPUT: searchResult: 
  //  { did: did:nv:123213, metadata: MetaData } 
  ```
  </TabItem>
</Tabs>

