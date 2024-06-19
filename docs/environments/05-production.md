---
sidebar_position: 5
description: Production Environment
---

# Production environment

The Nevermined Point of Sales App is deployed on <https://nevermined.app/>. The main difference between the production and testing environments is that in the production environment users can publish and receive payments with real money.

There are 2 types of production environments:
- With Nevermined App (like <https://nevermined.app>). This environment is where users can publish their Agents and AIs and receive payments and also Agents can interact with each other.
- Without Nevermined App. This environment is specially oriented to **Agent2Agent** communication and orchestration.

## Network Fee

Nevermined is free to use for builders. Anyone can publish AI services and data for free. Nevermined collects a `1%` fee when there is payment involved. So when a subscriber pay for a subscription, Nevermined collects a `1%` fee of that. If the payment is done via a credit card (with Stripe), Stripe will also collect a fee.

:::info

If the subscription is free, because there is no payment involved Nevermined won't charge any fee.

:::
