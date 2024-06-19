---
sidebar_position: 3
description: How to generate the JWT access token that gives access to a web service
---

# Using the Nvm App API

The Nevermined App provides a Typescript library which allow you to build web applications on top of the Nevermined ecosystem. This library provides a set of functions to interact with the Nevermined network, including the ability to register subscriptions and subscribe to web services and get the JWT access token to call them.

## Install the NVM App API

The NVM App API is included as part of the [Nevermined SDK](https://www.npmjs.com/package/@nevermined-io/sdk). Start by adding the package to your dependencies:

```bash
npm i @nevermined-io/sdk
[or]
yarn add @nevermined-io/sdk
```

## How to integrate?

### Connect to a Nevermined environment

Once you added the Nevermined App API to your project, you can connect to any of the existing Nevermined environments. The following code snippet shows how to connect to the Testing environment:

```typescript
const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing)
```

The default instance of the nvmApp will be connected to the Testing environment and allows using the search API:

```typescript
const results = await nvmApp.search.query({})
```

If you want to connect to Nevermined not only for searching purposes but for blockchain interaction, you can use the `connect` method and the following code:

```typescript
const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing, {
        artifactsFolder: './artifacts', // The folder where the contracts artifacts are stored
      })
```

:::info
You can download the Smart Contracts artifacts using the [download script](https://github.com/nevermined-io/sdk-js/blob/main/scripts/download-artifacts.sh). For example running `./download-artifacts.sh v3.5.6 arbitrum-sepolia`
:::

You can connect with your account using the `connect` method:

```typescript
const randomWallet = ethers.Wallet.createRandom()
const zerodevProvider = await ZeroDevEthersProvider.init('ECDSA', {
    projectId,
    owner: convertEthersV6SignerToAccountSigner(randomWallet),
})
const accountSigner = zerodevProvider.getAccountSigner()

await nvmApp.connect(accountSigner)
```

:::warning
The use of zeroDev is optional. And regarding the wallet, you can use ethers/viem or other libraries to have the wallet connected.
:::

### Publishing subscriptions

Here you can see how to create a Credits Subscription that gives 50 credits to the subscribers when they purchase the subscription for 1 USD/USDC:

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
    'Nevermined Ageeeent', // The name of the agent
    'Nevermined', // The author of the agent
    [ // The list of endpoints protected by Nevermined
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
    AUTHORIZATION_PASSWORD    
)

const serviceDDO = await nvmApp.registerServiceAsset(
    agentMetadata,
    subscriptionDDO.id, // The unique identifier of the subscription
    // We are gonna configure the agent usage costs in a dynamic manner:
    // The cost in credits for every succesful query to the agent will be between 1 and 5 credits being 2 credits the default cost
    2n, // default cost in credits for every succesful query to the agent
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

datasetMetadata.main.files = [ // The list of files that are part of the asset
    { // The different url attributes will be encrypted
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
const orderResult = await nvmAppSubscriber.orderSubscription(subscriptionDDO.id, subscriptionDDO.credits)
const agreementId = orderResult.agreementId
await nvmApp.claimSubscription(agreementId, subscriptionDDO.id, subscriptionDDO.credits)
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
