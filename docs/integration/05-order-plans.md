---
sidebar_position: 5
description: How users can purchase Payment Plans?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How users can purchase Payment Plans?

With the Payments Library, users/subscribers can order Payment Plans by paying. The process is simple and secure. The Subscriber needs to have enough funds in their wallet to pay for the Plan in the token selected by the creator of the Plan. In Nevermined, the Payment Plan creators can request the payments in any valid ERC20 or Native token (depending on the network where the Plan is created).

When the Payment Plan requires a payment in Fiat, the payment can be initiated with the libraries, but the final step needs to be done in the Nevermined App. The App will handle the payment in Fiat (Stripe integration) and will return the user to the application with the Payment Plan ordered.

## Ordering a Plan

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  # Here we are ordering the Plan created in the previous steps
  order_result = payments.order_plan(plan_DID)  
  # OUTPUT: orderResult: 
  #  { success: True, agreementId: '0xaabbcc' }   
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  // Here we are ordering the plan created in the previous steps
  const orderResult = await payments.plans.orderPlan(planId)
  // OUTPUT: orderResult: 
  // {
  //   txHash: '0x5b95ebaec594b6d87e688faddf85eec3d708e6a06e61864699e5a366af1343f6',
  //   success: true
  // }
  ```
  </TabItem>  
</Tabs>

## Checking the Balance of a Payment Plan

After a user orders a plan, they can check their balance for that plan. The balance represents the number of credits the user has available to use within the plan.

:::note
Time-based plans provide a balance of 1 credit for subscribers. When the plan expires, this balance will be zero.
:::


<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  balance_result = payments.get_plan_balance(plan_DID)
  # OUTPUT: balanceResult:
  # {
  #   "planType": "credits",
  #   "isSubscriptor": True,
  #   "isOwner": False,
  #   "balance": 10000000
  # }  
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const balanceResult = await payments.plans.getPlanBalance(planId)
  // OUTPUT: balanceResult:
  // {
  //   planId: '84262690312400469275420649384078993542777341811308941725027729655403981619104',
  //   planType: 'credits',
  //   holderAddress: '0x8924803472bb453b7c27a3C982A08f7515D7aA72',
  //   creditsContract: '0x17FaFabF74312EdaBEB1DB9f0CaAccd44aAFDE39',
  //   balance: '100',
  //   isSubscriber: true
  // }
  ```  
  </TabItem>  
</Tabs>