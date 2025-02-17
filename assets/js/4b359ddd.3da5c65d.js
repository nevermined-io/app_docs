"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8502],{3069:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"protocol/high-level-architecture","title":"High Level Architecture","description":"High Level architecture of Nevermined App","source":"@site/docs/protocol/10-high-level-architecture.mdx","sourceDirName":"protocol","slug":"/protocol/high-level-architecture","permalink":"/docs/protocol/high-level-architecture","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"High Level architecture of Nevermined App"},"sidebar":"tutorialSidebar","previous":{"title":"AI Agents integration","permalink":"/docs/protocol/agents-integration"},"next":{"title":"Credits Redemption","permalink":"/docs/protocol/credits-redemption"}}');var r=n(4848),s=n(8453);const o={sidebar_position:10,description:"High Level architecture of Nevermined App"},a="High Level Architecture",c={},l=[{value:"Nevermined App",id:"nevermined-app",level:2},{value:"Core Protocol",id:"core-protocol",level:2},{value:"Smart Contracts",id:"smart-contracts",level:3},{value:"Nevermined Node",id:"nevermined-node",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Marketplace API",id:"marketplace-api",level:3},{value:"Network &amp; Storage",id:"network--storage",level:2}];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"high-level-architecture",children:"High Level Architecture"})}),"\n",(0,r.jsx)(t.p,{children:"The Nevermined App is composed by different applications separated in different layers. In each of\nthem resides different responsibilities of the application, from the core business logic placed in\nthe Smart Contract to the frontend applications."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"High Level Architecture",src:n(6136).A+"",width:"1631",height:"879"})}),"\n",(0,r.jsx)(t.p,{children:"Taking into account the above image, the architecture can be explained from top to bottom:"}),"\n",(0,r.jsx)(t.h2,{id:"nevermined-app",children:"Nevermined App"}),"\n",(0,r.jsx)(t.p,{children:"The frontend applications bringing utility to the users. They are built on top of the Core Protocol\nand interact with the micro-services to provide all the functionality."}),"\n",(0,r.jsx)(t.p,{children:"The Nevermined App is separated into 2 applications, the web site and the widgets. The web site is\nthe main contact point with the application, is the one users can use to register, search & discover\nstuff. And the widgets are small HTML applications that can be embedded into users personal\nwebsites."}),"\n",(0,r.jsx)(t.p,{children:'The Nevermined App uses the Marketplace API is "database" of all the assets registered into the\nnetwork. There is also a default deployment of a Node and a Proxy, making data and web services\navailable. But that doesn\'t mean users need to use them. In further phases we want to incentivize\nusers and/or organizations run their own Nevermined Nodes and Proxies in such a way the network is\nnot centralized on Nevermined organization.'}),"\n",(0,r.jsx)(t.h2,{id:"core-protocol",children:"Core Protocol"}),"\n",(0,r.jsx)(t.h3,{id:"smart-contracts",children:"Smart Contracts"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/contracts/",children:"Nevermined Smart Contracts"})," implement the main\nbusiness logic of all the Nevermined use cases that allow the trustless interaction between users\nfor building digital assets ecosystems."]}),"\n",(0,r.jsx)(t.admonition,{title:"Open Source",type:"info",children:(0,r.jsx)(t.p,{children:"The Smart Contracts are Open Source software built in Solidity, allowing to be deployed in any EVM\ncompatible network."})}),"\n",(0,r.jsx)(t.p,{children:"The Smart Contracts provide the following functionality:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"DID Registry"})," - Nevermined uses W3C Decentralized Identifiers (DID) to identify and register\nassets in the platform. The DID Registry allows the registering and resolving capabilities of\nassets across multiple Metadata providers."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"NFT Factories"})," - Nevermined allows the management of different kind of ERC-721 and ERC-1155\nbased NFTs"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Service Execution Agreements (SEAs)"})," - The core engine of the platform. They allow us to define\non-chain condition pipelines enabling the users to define complex use cases. The SEAs orchestrate\nthe execution of the Data Access and Data Computation use cases of Nevermined."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Conditions"})," - Small modules that can be plugged into the SEAs allowing to add validations logic"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Contract Templates"})," - Pre-defined contract templates implementing some basic use cases"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"ERC20 Token"})," - Utility token used within the platform allowing to build all the payment\nmechanisms used across the system."]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Configuration interface"})," - Allowing to configure dynamically some of the internal parameters of\nNevermined (for example via a DAO)"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Dispenser"})," - Contract that allows to dispense token under request"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.strong,{children:"Libraries"})," - Utility libraries used across the contracts"]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"All the previous contracts are Open Source software and provide the core of the Nevermined network."}),"\n",(0,r.jsx)(t.h3,{id:"nevermined-node",children:"Nevermined Node"}),"\n",(0,r.jsxs)(t.p,{children:["In the Nevermined ecosystem, the ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/node",children:"Nevermined Node"})," is the\ntechnical component executed by the Publishers allowing them to provide extended data services (e.g.\nstorage and compute)."]}),"\n",(0,r.jsx)(t.p,{children:"Nevermined Node, as part of the Publisher ecosystem, includes the credentials to interact with the\ninfrastructure (initially cloud, but could be on-premise)."}),"\n",(0,r.jsx)(t.p,{children:"Typically the Node works in the frontier between off-chain data and services and the rest of the\nworld, and facilitate the delivery of data or services to the consumers that go through the service\nagreements."}),"\n",(0,r.jsx)(t.h3,{id:"proxy",children:"Proxy"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/proxy",children:"Nevermined Proxy"})," allows the access to private HTTP web\nservices for users holding a valid Nevermined access token. This access token is generated by\nNevermined platform when users demonstrate they are NFT holders. The proxy is a web2 component that\nprotect access to web2 web services using subscription NFTs as access control mechanism."]}),"\n",(0,r.jsx)(t.h3,{id:"marketplace-api",children:"Marketplace API"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/marketplace-api",children:"Nevermined Marketplace API"})," is an Open Source\nmicro-service that allows to manage all the typical metadata required to build a marketplace or\napplication requiring to store data about assets, their users and some of their interactions."]}),"\n",(0,r.jsx)(t.p,{children:"The Marketplace API is an off-chain repository having the main responsibility of manage digital\nassets Metadata."}),"\n",(0,r.jsx)(t.p,{children:"The Marketplace API stores all the data in ElasticSearch. And exposes the functionality for\nsearching any data stored via a HTTP REST API using multiple filters and parameters."}),"\n",(0,r.jsx)(t.p,{children:"The Metadata API is typically the backend used for Data Marketplaces for storing all the Metadata of\na specific Marketplace."}),"\n",(0,r.jsx)(t.h2,{id:"network--storage",children:"Network & Storage"}),"\n",(0,r.jsx)(t.p,{children:"Nevermined core business logic is implemented on the Smart Contracts. They are Solidity based and\ncan be deployed on any Ethereum compatible network (EVM compatible). The main environment of the\nNevermined App is using Polygon network, but is part of our plans to have a fully functional\nNevermined App deployment in different networks."}),"\n",(0,r.jsx)(t.p,{children:"In addition to that Nevermined facilitates the sharing of data assets between users. The platform is\nagnostic of the storage so we use centralized or decentralized storage depending on the necessity.\nFor the Nevermined App the content of assets of the users are stored on Google Cloud and IPFS."})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},6136:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/Nevermined_Stack-fc2333f45de0e8ae682ebf8d3e2075c4.png"},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);