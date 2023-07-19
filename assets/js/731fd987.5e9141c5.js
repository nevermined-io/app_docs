"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6664],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>u});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=c(r),u=n,m=h["".concat(l,".").concat(u)]||h[u]||d[u]||i;return r?a.createElement(m,o(o({ref:t},p),{},{components:r})):a.createElement(m,o({ref:t},p))}));function u(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},6773:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:2,description:"High Level architecture of Nevermined App",title:"Overview"},o="High Level Architecture",s={unversionedId:"architecture/high-level-architecture",id:"architecture/high-level-architecture",title:"Overview",description:"High Level architecture of Nevermined App",source:"@site/docs/architecture/02-high-level-architecture.mdx",sourceDirName:"architecture",slug:"/architecture/high-level-architecture",permalink:"/docs/architecture/high-level-architecture",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/architecture/02-high-level-architecture.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"High Level architecture of Nevermined App",title:"Overview"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/"},next:{title:"Nevermined Assets",permalink:"/docs/architecture/assets"}},l={},c=[{value:"Nevermined App",id:"nevermined-app",level:2},{value:"Core Protocol",id:"core-protocol",level:2},{value:"Smart Contracts",id:"smart-contracts",level:3},{value:"Nevermined Node",id:"nevermined-node",level:3},{value:"Proxy",id:"proxy",level:3},{value:"Marketplace API",id:"marketplace-api",level:3},{value:"Network &amp; Storage",id:"network--storage",level:2}],p={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"high-level-architecture"},"High Level Architecture"),(0,n.kt)("p",null,"The Nevermined App is composed by different applications separated in different layers.\nIn each of them resides different responsibilities of the application, from the core business logic placed in the Smart Contract to the frontend applications."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"High Level Architecture",src:r(40653).Z,width:"1631",height:"879"})),(0,n.kt)("p",null,"Taking into account the above image, the architecture can be explained from top to bottom:"),(0,n.kt)("h2",{id:"nevermined-app"},"Nevermined App"),(0,n.kt)("p",null,"The frontend applications bringing utility to the users. They are built on top of the Core Protocol and interact with the micro-services to provide all the functionality."),(0,n.kt)("p",null,"The Nevermined App is separated into 2 applications, the web site and the widgets. The web site is the main contact point with the application, is the one users can use to register, search & discover stuff. And the widgets are small HTML applications that can be embedded into users personal websites."),(0,n.kt)("p",null,'The Nevermined App uses the Marketplace API is "database" of all the assets registered into the network. There is also a default deployment of a Node and a Proxy, making data and web services available. But that doesn\'t mean users need to use them. In further phases we want to incentivize users and/or organizations run their own Nevermined Nodes and Proxies in such a way the network is not centralized on Nevermined organization.'),(0,n.kt)("h2",{id:"core-protocol"},"Core Protocol"),(0,n.kt)("h3",{id:"smart-contracts"},"Smart Contracts"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/contracts/"},"Nevermined Smart Contracts")," implement the main business logic of all the Nevermined use cases that allow the trustless interaction between users for building digital assets ecosystems."),(0,n.kt)("admonition",{title:"Open Source",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"The Smart Contracts are Open Source software built in Solidity, allowing to be deployed in any EVM compatible network.")),(0,n.kt)("p",null,"The Smart Contracts provide the following functionality:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"DID Registry")," - Nevermined uses W3C Decentralized Identifiers (DID) to identify and register assets in the platform. The DID Registry allows the registering and resolving capabilities of assets across multiple Metadata providers."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"NFT Factories")," - Nevermined allows the management of different kind of ERC-721 and ERC-1155 based NFTs"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Service Execution Agreements (SEAs)")," - The core engine of the platform. They allow us to define on-chain condition pipelines enabling the users to define complex use cases. The SEAs orchestrate the execution of the Data Access and Data Computation use cases of Nevermined."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Conditions")," - Small modules that can be plugged into the SEAs allowing to add validations logic"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Contract Templates")," - Pre-defined contract templates implementing some basic use cases"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ERC20 Token")," - Utility token used within the platform allowing to build all the payment mechanisms used across the system."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Configuration interface")," - Allowing to configure dynamically some of the internal parameters of Nevermined (for example via a DAO)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Dispenser")," - Contract that allows to dispense token under request"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Libraries")," - Utility libraries used across the contracts")),(0,n.kt)("p",null,"All the previous contracts are Open Source software and provide the core of the Nevermined network."),(0,n.kt)("h3",{id:"nevermined-node"},"Nevermined Node"),(0,n.kt)("p",null,"In the Nevermined ecosystem, the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/node"},"Nevermined Node")," is the technical component executed by the Publishers allowing them to provide extended data services (e.g. storage and compute)."),(0,n.kt)("p",null,"Nevermined Node, as part of the Publisher ecosystem, includes the credentials to interact with the infrastructure (initially cloud, but could be on-premise)."),(0,n.kt)("p",null,"Typically the Node works in the frontier between off-chain data and services and the rest of the world, and facilitate the delivery of data or services to the consumers that go through the service agreements."),(0,n.kt)("h3",{id:"proxy"},"Proxy"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/proxy"},"Nevermined Proxy")," allows the access to private HTTP web services for users holding a valid Nevermined access token. This access token is generated by Nevermined platform when users demonstrate they are NFT holders. The proxy is a web2 component that protect access to web2 web services using subscription NFTs as access control mechanism."),(0,n.kt)("h3",{id:"marketplace-api"},"Marketplace API"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/marketplace-api"},"Nevermined Marketplace API")," is an Open Source micro-service that allows to manage all the typical metadata required to build a marketplace or application requiring to store data about assets, their users and some of their interactions."),(0,n.kt)("p",null,"The Marketplace API is an off-chain repository having the main responsibility of manage digital assets Metadata."),(0,n.kt)("p",null,"The Marketplace API stores all the data in ElasticSearch. And exposes the functionality for searching any data stored via a HTTP REST API using multiple filters and parameters."),(0,n.kt)("p",null,"The Metadata API is typically the backend used for Data Marketplaces for storing all the Metadata of a specific Marketplace."),(0,n.kt)("h2",{id:"network--storage"},"Network & Storage"),(0,n.kt)("p",null,"Nevermined core business logic is implemented on the Smart Contracts. They are Solidity based and can be deployed on any Ethereum compatible network (EVM compatible).\nThe main environment of the Nevermined App is using Polygon network, but is part of our plans to have a fully functional Nevermined App deployment in different networks."),(0,n.kt)("p",null,"In addition to that Nevermined facilitates the sharing of data assets between users. The platform is agnostic of the storage so we use centralized or decentralized storage depending on the necessity.\nFor the Nevermined App the content of assets of the users are stored on Google Cloud and IPFS."))}d.isMDXComponent=!0},40653:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/Nevermined_Stack-fc2333f45de0e8ae682ebf8d3e2075c4.png"}}]);