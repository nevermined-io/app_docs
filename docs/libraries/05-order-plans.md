---
sidebar_position: 5
description: How Subscribers can order Plans?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How Subscribers can order Plans?

With the Payments Library, Subscribers can order Plans paying in Crypto. The process is simple and secure. The Subscriber needs to have enough funds in their wallet to pay for the Plan in the token selected by the creator of the Plan. In Nevermined the Payment Plan creators can request the payments in any valid ERC20 or Native token (depending on the network where the Plan is created).

## Ordering a Plan

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
  // Here we are ordering the Plan created in the previous steps
  const orderResult = await payments.orderPlan(planDID)  
  // OUTPUT: orderResult: 
  //  { success: true, agreementId: '0xaabbcc' }  

  ```
  </TabItem>  
</Tabs>

## Get balance in credits of the Payment Plan

Once a user orders a Plan, they can check the balance of the Plan. The balance is the amount of credits that the user has available to use in the Plan.

:::note
Time-based Plans have a balance of 1 credit for subscribers. When the plan expires this balance will be zero.
:::

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

  const balanceResult = await payments.getPlanBalance(planDID)
  // OUTPUT: balanceResult:
  // {
  //  subscriptionType: 'credits',
  //  isSubscriptor: true,
  //  isOwner: false,
  //  balance: 100n
  //}  
  
  ```  
  
  </TabItem>  
</Tabs>