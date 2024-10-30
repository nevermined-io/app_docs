"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[9781],{9972:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>l,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=r(5893),a=r(1151);const i={sidebar_position:20,description:"How to charge credits dynamically"},s="How an AI Agent or Service can charge credits dynamically",c={id:"tutorials/advanced/dynamic-charge-credits",title:"How an AI Agent or Service can charge credits dynamically",description:"How to charge credits dynamically",source:"@site/docs/tutorials/advanced/20-dynamic-charge-credits.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/dynamic-charge-credits",permalink:"/docs/tutorials/advanced/dynamic-charge-credits",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/advanced/20-dynamic-charge-credits.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{sidebar_position:20,description:"How to charge credits dynamically"},sidebar:"tutorialSidebar",previous:{title:"How to use Payment Plans to protect Smart Contracts?",permalink:"/docs/tutorials/advanced/smart-contract-access"},next:{title:"For Web3 users",permalink:"/docs/tutorials/web3/"}},o={},d=[{value:"Why dynamic charging is important?",id:"why-dynamic-charging-is-important",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-an-ai-agent-or-service-can-charge-credits-dynamically",children:"How an AI Agent or Service can charge credits dynamically"})}),"\n",(0,n.jsxs)(t.p,{children:["When a builder is registering a new AI Agent or service (see ",(0,n.jsx)(t.a,{href:"../builders/register-agent",children:"tutorial"}),") it's possible to specify the cost of each request to the service. This cost can be fixed or dynamic, depending on the service logic."]}),"\n",(0,n.jsxs)(t.p,{children:["If the cost is fixed (for example 3 credits) each successful request to the service will cost 3 credits to the user ending the request. Easy.\nBut if the cost is dynamic, the service can report back to Nevermined how many credits need to be charged. To do that the AI service/agent needs to return a HTTP header ",(0,n.jsx)(t.code,{children:"NVMCreditsConsumed"})," with the number of credits to be charged."]}),"\n",(0,n.jsxs)(t.p,{children:["The number of credits returned in the ",(0,n.jsx)(t.code,{children:"NVMCreditsConsumed"})," HTTP header must be in the range of the credits cost defined in the service/agent during the registration. It means if the publisher said the cost in credits is between 1 and 10, the service/agent can return any number between 5 and 10. If the service/agent returns a number outside this range, the credits charged will be the minimum of that range (in our example 5 credits)."]}),"\n",(0,n.jsx)(t.h2,{id:"why-dynamic-charging-is-important",children:"Why dynamic charging is important?"}),"\n",(0,n.jsx)(t.p,{children:"It allows AI builders to adapt the cost of the service to the complexity of the request. For example, a service that needs to process a large dataset can charge more credits than a service that processes a small dataset."})]})}function l(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,t,r)=>{r.d(t,{Z:()=>c,a:()=>s});var n=r(7294);const a={},i=n.createContext(a);function s(e){const t=n.useContext(i);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),n.createElement(i.Provider,{value:t},e.children)}}}]);