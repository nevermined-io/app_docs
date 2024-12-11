---
sidebar_position: 20
description: What is the Decentralized Identifier (aka DID) and for what is useful?
---

# What is the DID and for what is useful?

DID stands for Decentralized Identifier. It's a W3C standard for creating unique identifiers for digital assets.

In Nevermined all the different assets (agents, payment plans, datasets, etc) are identified by a DID. This DID is unique and can be resolved to get more information about the asset.

:::info

You can find further information about the DID standard in the [W3C DID specification](https://www.w3.org/TR/did-core/) and how this is used on the Nevermined Protocol [here](https://docs.nevermined.io/docs/architecture/specs/Spec-DID).

:::

The DID in Nevermined has the following format:

```text
did:nv:{identifier_of_the_asset}
```

For example:

```text
did:nv:dbf7a307b11eb5b29ef4564b6eb6b199ee5e724fa4e24622ed143b549d41b5e6
```

## Where can I find the DID?

You can find the DID of each asset in the Nevermined App. For example, in the Agent details page: 

a. In the **Additional information** tab of the asset details page
b. In the URL of the asset details page
<p align="center"><img src="/images/tutorials/did_asset_details.png" /></p>

## If I'm a Builder why this is important?

The DID is the way to identify your asset in the Nevermined network. When you want to interact with Nevermined programatically via the [Payment Libraries](../../libraries/), knowing the DID of your asset is important to be able to interact with it.
