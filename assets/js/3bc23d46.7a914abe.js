"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[2544],{7455:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>m,frontMatter:()=>p,metadata:()=>i,toc:()=>u});const i=JSON.parse('{"id":"tutorials/integration/nextjs-react-payments","title":"Tutorial on how to use the Nevermined Payments Protocol in a React app","description":"How to integrate the Nevermined Payments library in a react application","source":"@site/docs/tutorials/integration/15-nextjs-react-payments.mdx","sourceDirName":"tutorials/integration","slug":"/tutorials/integration/nextjs-react-payments","permalink":"/docs/tutorials/integration/nextjs-react-payments","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15,"description":"How to integrate the Nevermined Payments library in a react application"},"sidebar":"tutorialSidebar","previous":{"title":"Tutorial on how to use the Nevermined Payments Protocol in Python","permalink":"/docs/tutorials/integration/python-integration"},"next":{"title":"Using the Nvm App SDK for building web applications","permalink":"/docs/tutorials/integration/sdk-integration"}}');var r=t(4848),s=t(8453),o=t(9292),a=t(6540);function c(){const[e,n]=(0,a.useState)(!1),[t,i]=(0,a.useState)(!1),[s,c]=(0,a.useState)(""),p=(0,a.useRef)(new o.Payments({returnUrl:"https://docs.nevermined.app/docs/tutorials/integration/nextjs-react-payments#try-it-out",environment:"appTesting",appId:"app-docs",version:"v0.1.5"}));return(0,a.useEffect)((()=>{p.current.init()}),[]),(0,a.useEffect)((()=>{p.current.isLoggedIn&&n(!0)}),[p.current.isLoggedIn]),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{children:[!e&&(0,r.jsx)("button",{onClick:()=>{p.current.connect()},children:"Log in"}),e&&(0,r.jsx)("button",{onClick:()=>{p.current.logout(),n(p.current.isLoggedIn)},children:"Log out"}),(0,r.jsx)("button",{disabled:!e,onClick:async function(){if(p.current.isLoggedIn){i(!0);const{did:e}=await p.current.createSubscription({name:"test subscription",description:"test",price:10000000n,tokenAddress:"0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d",duration:30,tags:["test"]});i(!1),c(e)}},children:"Create Subscription"}),(0,r.jsx)("p",{children:t&&""===s?"Creating Subscription, please wait a few seconds...":(0,r.jsx)("a",{href:`https://testing.nevermined.app/subscription/${s}`,children:s})})]})})}const p={sidebar_position:15,description:"How to integrate the Nevermined Payments library in a react application"},d="Tutorial on how to use the Nevermined Payments Protocol in a React app",l={},u=[{value:"Initializing the project",id:"initializing-the-project",level:3},{value:"Initialize the payments library",id:"initialize-the-payments-library",level:3},{value:"Create a subscription",id:"create-a-subscription",level:3},{value:"Try it out",id:"try-it-out",level:3},{value:"Full code",id:"full-code",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h3:"h3",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.header,{children:(0,r.jsx)(n.h1,{id:"tutorial-on-how-to-use-the-nevermined-payments-protocol-in-a-react-app",children:"Tutorial on how to use the Nevermined Payments Protocol in a React app"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["To have full details about how to use the ",(0,r.jsx)(n.a,{href:"../../libraries/",children:"Payments Library"}),", please visit the ",(0,r.jsx)(n.a,{href:"../../libraries/",children:"documentation section"})]})}),"\n",(0,r.jsx)(n.h3,{id:"initializing-the-project",children:"Initializing the project"}),"\n",(0,r.jsxs)(n.p,{children:["For this tutorial we will be using ",(0,r.jsx)(n.a,{href:"https://nextjs.org/docs/getting-started/installation",children:"nextjs"}),"\ncreate our react application."]}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Initialize the react project"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"npx create-next-app@latest\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"2",children:["\n",(0,r.jsxs)(n.li,{children:["Install the Nevermined ",(0,r.jsx)(n.a,{href:"https://github.com/nevermined-io/payments",children:"payments library"})]}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yarn add @nevermined-io/payments\n"})}),"\n",(0,r.jsxs)(n.ol,{start:"3",children:["\n",(0,r.jsx)(n.li,{children:"Starting the development server"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{children:"yarn dev\n"})}),"\n",(0,r.jsx)(n.h3,{id:"initialize-the-payments-library",children:"Initialize the payments library"}),"\n",(0,r.jsxs)(n.p,{children:["In order to initialize the payments library we need to have the user login to Nevermined. This can\nbe achieved by calling the ",(0,r.jsx)(n.code,{children:"connect"})," method that will redirect the user to the Nevermined for Login\nand once the user is returned to the app calling the ",(0,r.jsx)(n.code,{children:"init"})," method to finalize the initialization of\nthe payments library."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="/app/page.tsx"',children:"'use client'\n\nimport { useEffect } from 'react'\nimport { Payments } from '@nevermined-io/payments'\n\nexport default function Home() {\n  const payments = new Payments({\n    returnUrl:\n      'https://docs.nevermined.app/docs/tutorials/integration/nextjs-react-payments#try-it-out',\n    environment: 'appTesting',\n    appId: 'app-docs',\n    version: 'v0.1.4',\n  })\n\n  const onLogin = () => {\n    payments.connect()\n  }\n\n  useEffect(() => {\n    payments.init()\n  }, [])\n\n  return (\n    <main>\n      <div>\n        <button onClick={onLogin}>Login</button>\n      </div>\n    </main>\n  )\n}\n"})}),"\n",(0,r.jsx)(n.h3,{id:"create-a-subscription",children:"Create a subscription"}),"\n",(0,r.jsx)(n.p,{children:"Once the app is initialized we can start interacting with the Nevermined Payments Protocol. Here is\na example for creating a subscription"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="/app/page.tsx"',children:"  ...\n\n  async function createSubscription() {\n    if (payments.isLoggedIn) {\n      const { did } = await payments.createSubscription({\n        name: 'test subscription',\n        description: 'test',\n        price: 10000000n,\n        tokenAddress: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',\n        duration: 30,\n        tags: ['test'],\n      })\n    }\n\n    return (\n    <main>\n      <div>\n        <button onClick={onLogin}>Login</button>\n        <button onClick={createSubscription}>Create Subscription</button>\n      </div>\n    </main>\n  )\n  }\n"})}),"\n",(0,r.jsx)(n.h3,{id:"try-it-out",children:"Try it out"}),"\n",(0,r.jsx)(c,{}),"\n",(0,r.jsx)(n.h3,{id:"full-code",children:"Full code"}),"\n",(0,r.jsxs)(n.p,{children:["For the full nextjs example please check\n",(0,r.jsx)(n.a,{href:"https://github.com/nevermined-io/tutorials/tree/main/payments-nextjs-example",children:"payments-nextjs-example"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-tsx",metastring:'title="app/page.tsx"',children:"import { useEffect, useState, useRef } from 'react'\nimport { Payments } from '@nevermined-io/payments'\n\nexport default function PaymentsTutorial() {\n  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)\n  const [creatingSubscription, setCreatingSubscription] = useState<boolean>(false)\n  const [did, setDid] = useState<string>('')\n\n  const payments = useRef(\n    new Payments({\n      returnUrl:\n        'https://docs.nevermined.app/docs/tutorials/integration/nextjs-react-payments#try-it-out',\n      environment: 'appTesting',\n      appId: 'app-docs',\n      version: 'v0.1.4',\n    }),\n  )\n\n  const onLogin = () => {\n    payments.current.connect()\n  }\n\n  const onLogout = () => {\n    payments.current.logout()\n    setIsUserLoggedIn(payments.current.isLoggedIn)\n  }\n\n  useEffect(() => {\n    payments.current.init()\n  }, [])\n\n  useEffect(() => {\n    if (payments.current.isLoggedIn) {\n      setIsUserLoggedIn(true)\n    }\n  }, [payments.current.isLoggedIn])\n\n  async function createSubscription() {\n    if (payments.current.isLoggedIn) {\n      setCreatingSubscription(true)\n      const { did } = await payments.current.createSubscription({\n        name: 'test subscription',\n        description: 'test',\n        price: 10000000n,\n        tokenAddress: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',\n        duration: 30,\n        tags: ['test'],\n      })\n      setCreatingSubscription(false)\n      setDid(did)\n    }\n  }\n\n  return (\n    <main>\n      <div>\n        {!isUserLoggedIn && <button onClick={onLogin}>{'Log in'}</button>}\n        {isUserLoggedIn && <button onClick={onLogout}>{'Log out'}</button>}\n\n        <button onClick={createSubscription}>Create Subscription</button>\n        <p>\n          {creatingSubscription && did === '' ? (\n            'Creating Subscription, please wait a few seconds...'\n          ) : (\n            <a href={`https://testing.nevermined.app/subscription/${did}`}>{did}</a>\n          )}\n        </p>\n      </div>\n    </main>\n  )\n}\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In the following link you can find the complete documentation of the library: ",(0,r.jsx)(n.a,{href:"https://nevermined-io.github.io/payments/",children:"payments"}),"."]})]})}function m(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8860:(e,n)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Environments=void 0,n.Environments={local:{frontend:"http://localhost:3000",backend:"http://localhost:3200"},appStaging:{frontend:"https://staging.nevermined.app",backend:"https://one-backend.staging.nevermined.app"},appTesting:{frontend:"https://testing.nevermined.app",backend:"https://one-backend.testing.nevermined.app"},appArbitrum:{frontend:"https://nevermined.app",backend:"https://one-backend.arbitrum.nevermined.app"},appGnosis:{frontend:"https://gnosis.nevermined.app",backend:"https://one-backend.gnosis.nevermined.app"},appMatic:{frontend:"https://matic.nevermined.app",backend:"https://one-backend.matic.nevermined.app"}}},9292:function(e,n,t){var i=this&&this.__createBinding||(Object.create?function(e,n,t,i){void 0===i&&(i=t);var r=Object.getOwnPropertyDescriptor(n,t);r&&!("get"in r?!n.__esModule:r.writable||r.configurable)||(r={enumerable:!0,get:function(){return n[t]}}),Object.defineProperty(e,i,r)}:function(e,n,t,i){void 0===i&&(i=t),e[i]=n[t]}),r=this&&this.__exportStar||function(e,n){for(var t in e)"default"===t||Object.prototype.hasOwnProperty.call(n,t)||i(n,e,t)};Object.defineProperty(n,"__esModule",{value:!0}),r(t(9773),n),r(t(8860),n)},9773:(e,n,t)=>{Object.defineProperty(n,"__esModule",{value:!0}),n.Payments=void 0;const i=t(8860);n.Payments=class{constructor(e){this.returnUrl=e.returnUrl,this.environment=i.Environments[e.environment],this.appId=e.appId,this.version=e.version}connect(){const e=new URL(`/en/login?nvm-export=nvm-api-key&returnUrl=${this.returnUrl}`,this.environment.frontend);window.location.href=e.toString()}init(){const e=new URL(window.location.href),n=e.searchParams.get("nvmApiKey");n&&(this.nvmApiKey=n,e.searchParams.delete("nvmApiKey"));const t=e.searchParams.get("accountAddress");t&&(this.accountAddress=t,e.searchParams.delete("accountAddress")),history.replaceState(history.state,"",e.toString())}logout(){this.nvmApiKey=void 0}get isLoggedIn(){return!!this.nvmApiKey}async createSubscription({name:e,description:n,price:t,tokenAddress:i,amountOfCredits:r,duration:s,tags:o,nvmApiKey:a}){const c={name:e,description:n,price:t.toString(),tokenAddress:i,amountOfCredits:r,duration:s,tags:o},p={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${a||this.nvmApiKey}`},body:JSON.stringify(c)},d=new URL("/api/v1/payments/subscription",this.environment.backend),l=await fetch(d,p);if(!l.ok)throw Error(l.statusText);return l.json()}async createService({subscriptionDid:e,name:n,description:t,price:i,tokenAddress:r,amountOfCredits:s,duration:o,tags:a,serviceChargeType:c,minCreditsToCharge:p,maxCreditsToCharge:d,authType:l,username:u,password:h,token:m,endpoints:g,openEndpoints:f,openApiUrl:y,integration:b,sampleLink:v,apiDescription:x,curation:j,nvmApiKey:w}){const k={name:n,description:t,price:i.toString(),tokenAddress:r,amountOfCredits:s,duration:o,tags:a,subscriptionDid:e,serviceChargeType:c,minCreditsToCharge:p,maxCreditsToCharge:d,authType:l,username:u,password:h,token:m,endpoints:g,openEndpoints:f,openApiUrl:y,integration:b,sampleLink:v,apiDescription:x,curation:j},S={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${w||this.nvmApiKey}`},body:JSON.stringify(k)},C=new URL("/api/v1/payments/service",this.environment.backend),A=await fetch(C,S);if(!A.ok)throw Error(A.statusText);return A.json()}async createFile({subscriptionDid:e,assetType:n,name:t,description:i,files:r,price:s,tokenAddress:o,amountOfCredits:a,duration:c,tags:p,dataSchema:d,sampleCode:l,filesFormat:u,usageExample:h,programmingLanguage:m,framework:g,task:f,trainingDetails:y,variations:b,fineTunable:v,minCreditsToCharge:x,maxCreditsToCharge:j,curation:w,nvmApiKey:k}){const S={assetType:n,name:t,description:i,files:r,price:s.toString(),tokenAddress:o,amountOfCredits:a,duration:c,tags:p,subscriptionDid:e,dataSchema:d,sampleCode:l,filesFormat:u,usageExample:h,programmingLanguage:m,framework:g,task:f,trainingDetails:y,variations:b,fineTunable:v,minCreditsToCharge:x,maxCreditsToCharge:j,curation:w},C={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${k||this.nvmApiKey}`},body:JSON.stringify(S)},A=new URL("/api/v1/payments/file",this.environment.backend),T=await fetch(A,C);if(!T.ok)throw Error(T.statusText);return T.json()}async getAssetDDO(e){const n=new URL(`/api/v1/payments/asset/ddo/${e}`,this.environment.backend),t=await fetch(n);if(!t.ok)throw Error(t.statusText);return t.json()}async getSubscriptionAssociatedServices(e){const n=new URL(`/api/v1/payments/subscription/services/${e}`,this.environment.backend),t=await fetch(n);if(!t.ok)throw Error(t.statusText);return t.json()}async getSubscriptionAssociatedFiles(e){const n=new URL(`/api/v1/payments/subscription/files/${e}`,this.environment.backend),t=await fetch(n);if(!t.ok)throw Error(t.statusText);return t.json()}async getSubscriptionBalance(e,n,t){const i={subscriptionDid:e,accountAddress:n},r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${t||this.nvmApiKey}`},body:JSON.stringify(i)},s=new URL("/api/v1/payments/subscription/balance",this.environment.backend),o=await fetch(s,r);if(!o.ok)throw Error(o.statusText);return o.json()}async getServiceToken(e,n){const t={method:"GET",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${n||this.nvmApiKey}`}},i=new URL(`/api/v1/payments/service/token/${e}`,this.environment.backend),r=await fetch(i,t);if(!r.ok)throw Error(r.statusText);return r.json()}async orderSubscription(e,n,t){const i={subscriptionDid:e,agreementId:n},r={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${t||this.nvmApiKey}`},body:JSON.stringify(i)},s=new URL("/api/v1/payments/subscription/order",this.environment.backend),o=await fetch(s,r);if(!o.ok)throw Error(o.statusText);return o.json()}async downloadFiles(e,n){const t={did:e},i={method:"POST",headers:{Accept:"application/json","Content-Type":"application/json",Authorization:`Bearer ${n||this.nvmApiKey}`},body:JSON.stringify(t)},r=new URL("/api/v1/payments/file/download",this.environment.backend),s=await fetch(r,i);if(!s.ok)throw Error(s.statusText);return s.json()}getSubscriptionDetails(e){const n=new URL(`/en/subscription/${e}`,this.environment.frontend);window.location.href=n.toString()}getServiceDetails(e){const n=new URL(`/en/webservice/${e}`,this.environment.frontend);window.location.href=n.toString()}getFileDetails(e){const n=new URL(`/en/file/${e}`,this.environment.frontend);window.location.href=n.toString()}checkoutSubscription(e){const n=new URL(`/en/subscription/checkout/${e}`,this.environment.frontend);window.location.href=n.toString()}}},8453:(e,n,t)=>{t.d(n,{R:()=>o,x:()=>a});var i=t(6540);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);