---
sidebar_position: 4
description: How discover agents or plans?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How discover agents or plans?

With the Payments Library, Subscribers can search for Agents or Plans that are available in the Nevermined ecosystem.

## Searching a Plan

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'Typescript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Here we search for a Plan by the text in the DDO
  order_result = payments.search_plans(text='Youtube summarizer')  
  # OUTPUT: searchResult: 
  #  { did: did:nv:123213, metadata: MetaData }   
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  // Here we search for a Plan by the text in the DDO
  const orderResult = await payments.searchPlans({text: 'Youtube summarizer'})  
  // OUTPUT: searchResult: 
  //  { did: did:nv:123213, metadata: MetaData } 

  ```
  </TabItem>  
</Tabs>
