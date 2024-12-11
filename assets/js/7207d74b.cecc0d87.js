"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8766],{2470:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"tutorials/integration/sdk-integration","title":"Using the Nvm App SDK for building web applications","description":"How to build sophisticated web applications on top of the Nevermined network with the Nevermined SDK","source":"@site/docs/tutorials/integration/25-sdk-integration.md","sourceDirName":"tutorials/integration","slug":"/tutorials/integration/sdk-integration","permalink":"/docs/tutorials/integration/sdk-integration","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":25,"frontMatter":{"sidebar_position":25,"description":"How to build sophisticated web applications on top of the Nevermined network with the Nevermined SDK"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial on how to use the Nevermined Payments Protocol in a React app","permalink":"/docs/tutorials/integration/nextjs-react-payments"},"next":{"title":"Tutorials for Nevermined App Advanced used","permalink":"/docs/tutorials/advanced/"}}');var s=t(4848),a=t(8453);const o={sidebar_position:25,description:"How to build sophisticated web applications on top of the Nevermined network with the Nevermined SDK"},r="Using the Nvm App SDK for building web applications",c={},d=[{value:"Install the NVM App SDK",id:"install-the-nvm-app-sdk",level:2},{value:"How to integrate?",id:"how-to-integrate",level:2},{value:"Connect to a Nevermined environment",id:"connect-to-a-nevermined-environment",level:3},{value:"Publishing subscriptions",id:"publishing-subscriptions",level:3},{value:"Publishing an AI Agent",id:"publishing-an-ai-agent",level:3},{value:"Publishing a dataset",id:"publishing-a-dataset",level:3},{value:"Purchasing a subscription",id:"purchasing-a-subscription",level:3},{value:"Using the subscription to get access to AI Agents",id:"using-the-subscription-to-get-access-to-ai-agents",level:3},{value:"Using the subscription to get access to download files associated with a dataset",id:"using-the-subscription-to-get-access-to-download-files-associated-with-a-dataset",level:3}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"using-the-nvm-app-sdk-for-building-web-applications",children:"Using the Nvm App SDK for building web applications"})}),"\n",(0,s.jsxs)(n.p,{children:["The Nevermined App provides a Typescript library (aka ",(0,s.jsx)(n.a,{href:"https://github.com/nevermined-io/sdk-js",children:"Nevermined SDK"}),") which allow you to build web applications on top of the Nevermined ecosystem. This library provides a set of functions to interact with the Nevermined network, including the ability to register subscriptions and subscribe to web services and get the JWT access token to call them."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["Don't confuse the ",(0,s.jsx)(n.a,{href:"https://github.com/nevermined-io/sdk-js",children:"Nevermined SDK"})," with the ",(0,s.jsx)(n.a,{href:"../../libraries/",children:"Nevermined Payment Libraries"}),". The SDK is oriented to build complex web applications on top of Nevermined network (like Marketplaces), while the Payment Libraries are oriented to facilitate monetization of AI agents and interaction with other agents."]})}),"\n",(0,s.jsx)(n.h2,{id:"install-the-nvm-app-sdk",children:"Install the NVM App SDK"}),"\n",(0,s.jsxs)(n.p,{children:["The NVM App API is included as part of the ",(0,s.jsx)(n.a,{href:"https://www.npmjs.com/package/@nevermined-io/sdk",children:"Nevermined SDK"}),". Start by adding the package to your dependencies:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"npm i @nevermined-io/sdk\n[or]\nyarn add @nevermined-io/sdk\n"})}),"\n",(0,s.jsx)(n.h2,{id:"how-to-integrate",children:"How to integrate?"}),"\n",(0,s.jsx)(n.h3,{id:"connect-to-a-nevermined-environment",children:"Connect to a Nevermined environment"}),"\n",(0,s.jsx)(n.p,{children:"Once you added the Nevermined App API to your project, you can connect to any of the existing Nevermined environments. The following code snippet shows how to connect to the Testing environment:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing)\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can connect to different environments by using any of the existing ",(0,s.jsx)(n.code,{children:"NVMAppEnvironments"})]})}),"\n",(0,s.jsx)(n.p,{children:"The default instance of the nvmApp will be connected to the Testing environment and allows using the search API:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const results = await nvmApp.search.query({})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["If you want to connect to Nevermined not only for searching purposes but for blockchain interaction, you can use the ",(0,s.jsx)(n.code,{children:"connect"})," method and the following code:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing, {\n    contractsVersion: 'v3.5.6', // The version of the contracts to use. If you don't pass will automatically fetch the latest version\n})\n"})}),"\n",(0,s.jsx)(n.p,{children:"Alternatively, you can pass the artifacts folder where you download the artifacts:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const nvmApp = await NvmApp.getInstance(NVMAppEnvironments.Testing, {\n        artifactsFolder: './artifacts', // The folder where the contracts artifacts are stored\n      })\n"})}),"\n",(0,s.jsx)(n.admonition,{type:"info",children:(0,s.jsxs)(n.p,{children:["You can download the Smart Contracts artifacts using the ",(0,s.jsx)(n.a,{href:"https://github.com/nevermined-io/sdk-js/blob/main/scripts/download-artifacts.sh",children:"download script"}),". For example running ",(0,s.jsx)(n.code,{children:"./download-artifacts.sh v3.5.8 arbitrum-sepolia"})]})}),"\n",(0,s.jsxs)(n.p,{children:["You can connect with your account using the ",(0,s.jsx)(n.code,{children:"connect"})," method:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const accountSigner = makeWallet(process.env.SEED_WORDS)\nawait nvmApp.connect(accountSigner)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Regarding the wallet, you can use ethers/viem or other libraries to have the wallet connected."}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["You can pass a ZeroDev account to the ",(0,s.jsx)(n.code,{children:"connect"})," method. The use of zeroDev is optional."]})}),"\n",(0,s.jsx)(n.h3,{id:"publishing-subscriptions",children:"Publishing subscriptions"}),"\n",(0,s.jsx)(n.p,{children:"Here you can see how to create a Credits Subscription that gives 50 credits to the subscribers when they purchase the subscription for 1 USD/USDC:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"\n// Defining a price of 1 USDC for the subscription\nconst subscriptionPrice = new AssetPrice(publisherAddress, 1000000n).setTokenAddress(\n    new AppDeploymentTesting().tokenAddress, // Using USDC token address\n)\n    \nconst subscriptionPriceWithFees = nvmApp.addNetworkFee(subscriptionPrice)\n\nconst creditsSubscriptionMetadata = NvmAppMetadata.getCreditsSubscriptionMetadataTemplate(\n    'NVM App Credits Subscription test',\n    'Nevermined',\n)\n    \nconst subscriptionDDO = await nvmAppPublisher.createCreditsSubscription(\n    creditsSubscriptionMetadata,\n    subscriptionPriceWithFees,\n    50n, // number of credits given to the subscribers when they purchase the subscription\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"publishing-an-ai-agent",children:"Publishing an AI Agent"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const agentMetadata = NvmAppMetadata.getServiceMetadataTemplate(\n    'Nevermined Ageeeent', // The name of the agent\n    'Nevermined', // The author of the agent\n    [ // The list of endpoints protected by Nevermined\n        {\n        GET: `${SERVICE_ENDPOINT}/(.*)`,\n        },\n    ],\n    [OPEN_ENDPOINT], // Any endpoints we want to keep open\n    OPEN_ENDPOINT, // The OpenAPI spec endpoint (if any)\n    'RESTful',\n    AUTHORIZATION_TYPE, // The type of authorization required to access the service: 'none', 'basic' or 'oauth'\n    AUTHORIZATION_TOKEN, // The auth token required to access the service (if any)\n    AUTHORIZATION_USER, // Or the user/password required to access the service (if any)\n    AUTHORIZATION_PASSWORD    \n)\n\nconst serviceDDO = await nvmApp.registerServiceAsset(\n    agentMetadata,\n    subscriptionDDO.id, // The unique identifier of the subscription\n    // We are gonna configure the agent usage costs in a dynamic manner:\n    // The cost in credits for every succesful query to the agent will be between 1 and 5 credits being 2 credits the default cost\n    2n, // default cost in credits for every succesful query to the agent\n    1n, // min amount of credits to be consumed\n    5n, // max amount of credits to be consumed\n)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"publishing-a-dataset",children:"Publishing a dataset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const datasetMetadata = NvmAppMetadata.getFileMetadataTemplate(\n    'NVM App Dataset test', // The name of the dataset\n    'Nevermined', // The author of the dataset\n    )\n\ndatasetMetadata.main.files = [ // The list of files that are part of the asset\n    { // The different url attributes will be encrypted\n        index: 0,\n        contentType: 'application/json',\n        name: 'ddo-example.json',\n        url: 'https://storage.googleapis.com/nvm-static-assets/files/ci/ddo-example.json',\n    },\n    {\n        index: 1,\n        contentType: 'text/plain',\n        name: 'README.md',\n        url: 'https://storage.googleapis.com/nvm-static-assets/files/ci/README.md',\n    },\n]\n\nconst datasetDDO = await nvmApp.registerFileAsset(\n    datasetMetadata,\n    subscriptionDDO.id, // The unique identifier of the subscription\n    1n, // every file download costs 1 credit to the subscriber\n)\n\n"})}),"\n",(0,s.jsx)(n.h3,{id:"purchasing-a-subscription",children:"Purchasing a subscription"}),"\n",(0,s.jsx)(n.p,{children:"Let's connect first with a different user:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const nvmAppSubscriber = await NvmApp.getInstance(NVMAppEnvironments.Staging, {\n        artifactsFolder: './artifacts',\n      })\nconst appConfig = nvmAppSubscriber.config\nappConfig.accounts = makeAccounts(process.env.SEED_WORDS)\n\nconst subscriberAddress = await appConfig.accounts[0].getAddress()\nawait nvmAppSubscriber.connect(subscriberAddress, appConfig)\n"})}),"\n",(0,s.jsx)(n.p,{children:"And now we order the previously created subscription with the new account:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const orderResult = await nvmAppSubscriber.orderSubscription(subscriptionDDO.id)\nconst agreementId = orderResult.agreementId\nawait nvmApp.claimSubscription(agreementId, subscriptionDDO.id, subscriptionDDO.credits)\n"})}),"\n",(0,s.jsx)(n.p,{children:"Now you should be able to check the balance of credits of the subscription ordered:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const creditsBalance = await nvmApp.getBalance(subscriptionDDO.id)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-the-subscription-to-get-access-to-ai-agents",children:"Using the subscription to get access to AI Agents"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const token = await nvmAppSubscriber.getServiceAccessToken(serviceDDO.id)\n\nconst opts: RequestInit = {}\nopts.method = 'POST'\nopts.body = JSON.stringify(JSON.parse('{\"query\": \"{ hello }\"}'))\n\nopts.headers = {\n    // The proxy expects the `HTTP Authorization` header with the JWT\n    authorization: `Bearer ${token.accessToken}`,\n    'content-type': 'application/json',\n}\n\nconst result = await fetch(token.neverminedProxyUri, opts)\n"})}),"\n",(0,s.jsx)(n.h3,{id:"using-the-subscription-to-get-access-to-download-files-associated-with-a-dataset",children:"Using the subscription to get access to download files associated with a dataset"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-typescript",children:"const results = await nvmAppSubscriber.downloadFiles(\n    datasetDDO.id,\n    1, // The index of the file to download\n    agreementId, // Optional\n    `/tmp`, // The folder where the file will be downloaded\n)\n\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You can find a full example of how to use the nvm sdk here: ",(0,s.jsx)(n.a,{href:"https://codesandbox.io/p/devbox/nvm-example-new-flcr8f",children:"nvm-sdk-example"})]})]})}function l(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>r});var i=t(6540);const s={},a=i.createContext(s);function o(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);