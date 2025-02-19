---
sidebar_position: 5
description: Production Environment
---

# Production

The Nevermined Point of Sales App is deployed on https://nevermined.app/. The main difference between the production and the testing environments is that the production environment enables users to publish and process payments with real currency.

There are 2 types of production environments:

- With a [Nevermined App](https://nevermined.app) instance: This environment allows users to publish their Agents and AIs, receive payments, and enable Agent-to-Agent interactions.
- Without Nevermined App: This environment is specifically oriented towards **Agent2Agent** communication and orchestration.

## Nevermined Production Deployments

Environment ID  | Nevermined App | Proxy | Node
----------------|----------------|----------------------------|------------------
**appArbitrum** | https://nevermined.app | https://proxy.arbitrum.nevermined.app | https://node.arbitrum.nevermined.app
**appBase**     | https://base.nevermined.app | https://proxy.base.nevermined.app | https://node.base.nevermined.app
**appMatic**    | **Only Protocol** | https://proxy.matic.nevermined.app | https://node.matic.nevermined.app
**appGnosis**   | **Only Protocol** | https://proxy.gnosis.nevermined.app | https://node.gnosis.nevermined.app
**appOptimism** | **Only Protocol** | https://proxy.optimism.nevermined.app | https://node.optimism.nevermined.app
**appCelo**     | **Only Protocol** | https://proxy.celo.nevermined.app | https://node.celo.nevermined.app
**appPeaq**     | **Only Protocol** | https://proxy.peaq.nevermined.app | https://node.peaq.nevermined.app

:::warning

The environments flagged with **Only Protocol** are not deployed with the Nevermined App. This means that all Nevermined functions are available via [Payment Libraries](../libraries/), but they cannot use the Nevermined App.

:::
