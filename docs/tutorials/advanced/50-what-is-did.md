---
sidebar_position: 20
description: What is the Decentralized Identifier (aka DID) and what is it useful for?
---

# What is the DID and what is it useful for?

DID stands for Decentralized Identifier. It's a W3C standard for creating unique identifiers for digital assets.

In Nevermined, all the different Agents are identified by a DID. This DID is unique and can be resolved to get more information about the Agent.

:::info

You can find further information about the DID standard in the [W3C DID specification](https://www.w3.org/TR/did-core/) and how this is used on the Nevermined Protocol [here](https://docs.nevermined.io/docs/architecture/specs/Spec-DID).

:::

The DID in Nevermined has the following format:

```text
did:nv:<unique-identifier-of-the-agent>
```

For example:

```text
did:nv:dbf7a307b11eb5b29ef4564b6eb6b199ee5e724fa4e24622ed143b549d41b5e6
```

## Where can I find the DID?

You can find the DID of each Agent in the Nevermined App. For example, in the Agent details page: 

a. In the **Additional information** tab of the Agent details page
b. In the URL of the Agent details page
<p align="center"><img src="/images/tutorials/did_asset_details.png" /></p>

## If I'm a Builder, why is this important?

The DID is the way to identify your Agent in the Nevermined network. When you want to interact with Nevermined programmatically via the [Payment Libraries](../../libraries/), knowing the DID of your Agent is important to be able to interact with it.
