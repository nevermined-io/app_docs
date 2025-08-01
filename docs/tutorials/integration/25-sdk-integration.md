---
sidebar_position: 25
description:
  How to build sophisticated web applications on top of the Nevermined network with the Nevermined
  SDK
---

# Using the Nevermined App SDK for building web applications

The Nevermined App provides a TypeScript library (aka
[Nevermined SDK](https://github.com/nevermined-io/sdk-js)) which allows you to build web
applications on top of the Nevermined ecosystem. This library provides a set of functions to
interact with the Nevermined network, including the ability to register subscriptions, subscribe to
web services, and get the JWT access token to call them.

:::warning Don't confuse the [Nevermined SDK](https://github.com/nevermined-io/sdk-js) with the
[Nevermined Payment Libraries](../../integration/). The SDK is oriented toward building complex web
applications on top of the Nevermined network (like Marketplaces), while the Payment Libraries are
oriented to facilitate monetization of AI Agents and interaction with other Agents. :::

## Install the Nevermined App SDK

The Nevermined App API is included as part of the
[Nevermined SDK](https://www.npmjs.com/package/@nevermined-io/sdk). Start by adding the package to
your dependencies:

```bash
npm i @nevermined-io/sdk
[or]
yarn add @nevermined-io/sdk
```

## How to integrate?

### Connect to a Nevermined environment

Once you've added the Nevermined App API to your project, you can connect to any of the existing
Nevermined environments. The following code snippet shows how to connect to the Testing environment:

```typescript
const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing)
```

:::info

You can connect to different environments by using any of the existing `NVMAppEnvironments`

:::

The default instance of the nvmApp will be connected to the Testing environment and allows using the
search API:

```typescript
const results = await nvmApp.search.query({})
```

If you want to connect to Nevermined not only for searching purposes but for blockchain interaction,
you can use the `connect` method and the following code:

```typescript
const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing, {
  contractsVersion: 'v3.5.6', // The version of the contracts to use. If you don't pass this, it will automatically fetch the latest version
})
```

Alternatively, you can pass the artifacts folder where you download the artifacts:

```typescript
const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing, {
  artifactsFolder: './artifacts', // The folder where the contracts artifacts are stored
})
```

:::info You can download the Smart Contracts artifacts using the
[download script](https://github.com/nevermined-io/sdk-js/blob/main/scripts/download-artifacts.sh).
For example, running `./download-artifacts.sh v3.5.8 arbitrum-sepolia` :::

You can connect with your account using the `connect` method:

```typescript
const accountSigner = makeWallet(process.env.SEED_WORDS)
await nvmApp.connect(accountSigner)
```

Regarding the wallet, you can use ethers/viem or other libraries to have the wallet connected.

:::warning You can pass a ZeroDev account to the `connect` method. The use of ZeroDev is optional.
:::

### Publishing subscriptions

Here you can see how to create a Credits Subscription that gives 50 credits to the subscribers when
they purchase the subscription for 1 USD/USDC:

```typescript
// Defining a price of 1 USDC for the subscription
const subscriptionPrice = new AssetPrice(publisherAddress, 1000000n).setTokenAddress(
  new AppDeploymentTesting().tokenAddress, // Using USDC token address
)

const subscriptionPriceWithFees = nvmApp.addNetworkFee(subscriptionPrice)

const creditsSubscriptionMetadata = NvmAppMetadata.getCreditsSubscriptionMetadataTemplate(
  'NVM App Credits Subscription test',
  'Nevermined',
)

const subscriptionDDO = await nvmAppPublisher.createCreditsSubscription(
  creditsSubscriptionMetadata,
  subscriptionPriceWithFees,
  50n, // number of credits given to the subscribers when they purchase the subscription
)
```

### Publishing an AI Agent

```typescript
const agentMetadata = NvmAppMetadata.getServiceMetadataTemplate(
  'Nevermined Agent', // The name of the agent
  'Nevermined', // The author of the agent
  [
    // The list of endpoints protected by Nevermined
    {
      GET: `${SERVICE_ENDPOINT}/(.*)`,
    },
  ],
  [OPEN_ENDPOINT], // Any endpoints we want to keep open
  OPEN_ENDPOINT, // The OpenAPI spec endpoint (if any)
  'RESTful',
  AUTHORIZATION_TYPE, // The type of authorization required to access the service: 'none', 'basic' or 'oauth'
  AUTHORIZATION_TOKEN, // The auth token required to access the service (if any)
  AUTHORIZATION_USER, // Or the user/password required to access the service (if any)
  AUTHORIZATION_PASSWORD,
)

const serviceDDO = await nvmApp.registerServiceAsset(
  agentMetadata,
  subscriptionDDO.id, // The unique identifier of the subscription
  // We are going to configure the agent usage costs in a dynamic manner:
  // The cost in credits for every successful query to the agent will be between 1 and 5 credits, with 2 credits being the default cost
  2n, // default cost in credits for every successful query to the agent
  1n, // min amount of credits to be consumed
  5n, // max amount of credits to be consumed
)
```

### Publishing a dataset

```typescript
const datasetMetadata = NvmAppMetadata.getFileMetadataTemplate(
  'NVM App Dataset test', // The name of the dataset
  'Nevermined', // The author of the dataset
)

datasetMetadata.main.files = [
  // The list of files that are part of the asset
  {
    // The different url attributes will be encrypted
    index: 0,
    contentType: 'application/json',
    name: 'ddo-example.json',
    url: 'https://storage.googleapis.com/nvm-static-assets/files/ci/ddo-example.json',
  },
  {
    index: 1,
    contentType: 'text/plain',
    name: 'README.md',
    url: 'https://storage.googleapis.com/nvm-static-assets/files/ci/README.md',
  },
]

const datasetDDO = await nvmApp.registerFileAsset(
  datasetMetadata,
  subscriptionDDO.id, // The unique identifier of the subscription
  1n, // every file download costs 1 credit to the subscriber
)
```

### Purchasing a subscription

Let's connect first with a different user:

```typescript
const nvmAppSubscriber = await NvmApp.getInstance(NVMAppEnvironments.Staging, {
  artifactsFolder: './artifacts',
})
const appConfig = nvmAppSubscriber.config
appConfig.accounts = makeAccounts(process.env.SEED_WORDS)

const subscriberAddress = await appConfig.accounts[0].getAddress()
await nvmAppSubscriber.connect(subscriberAddress, appConfig)
```

And now we order the previously created subscription with the new account:

```typescript
const orderResult = await nvmAppSubscriber.orderSubscription(subscriptionDDO.id)
const agreementId = orderResult.agreementId
await nvmApp.claimSubscription(agreementId, subscriptionDDO.id, subscriptionDDO.credits)
```

Now you should be able to check the balance of credits of the subscription ordered:

```typescript
const creditsBalance = await nvmApp.getBalance(subscriptionDDO.id)
```

### Using the subscription to get access to AI Agents

```typescript
const token = await nvmAppSubscriber.getServiceAccessToken(serviceDDO.id)

const opts: RequestInit = {}
opts.method = 'POST'
opts.body = JSON.stringify(JSON.parse('{"query": "{ hello }"}'))

opts.headers = {
  // The proxy expects the `HTTP Authorization` header with the JWT
  authorization: `Bearer ${token.accessToken}`,
  'content-type': 'application/json',
}

const result = await fetch(token.neverminedProxyUri, opts)
```

### Using the subscription to get access to download files associated with a dataset

```typescript
const results = await nvmAppSubscriber.downloadFiles(
  datasetDDO.id,
  1, // The index of the file to download
  agreementId, // Optional
  `/tmp`, // The folder where the file will be downloaded
)
```

You can find a full example of how to use the Nevermined SDK here:
[nvm-sdk-example](https://codesandbox.io/p/devbox/nvm-example-new-flcr8f)
