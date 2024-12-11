"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[4031],{9234:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>l,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"tutorials/advanced/dynamic-charge-credits","title":"How an AI Agent or Service can charge credits dynamically","description":"How to charge credits dynamically","source":"@site/docs/tutorials/advanced/20-dynamic-charge-credits.md","sourceDirName":"tutorials/advanced","slug":"/tutorials/advanced/dynamic-charge-credits","permalink":"/docs/tutorials/advanced/dynamic-charge-credits","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":20,"frontMatter":{"sidebar_position":20,"description":"How to charge credits dynamically"},"sidebar":"tutorialSidebar","previous":{"title":"How to use Payment Plans to protect Smart Contracts?","permalink":"/docs/tutorials/advanced/smart-contract-access"},"next":{"title":"What is the DID and for what is useful?","permalink":"/docs/tutorials/advanced/what-is-did"}}');var r=n(4848),i=n(8453);const a={sidebar_position:20,description:"How to charge credits dynamically"},c="How an AI Agent or Service can charge credits dynamically",o={},d=[{value:"How can the users know what&#39;s the cost in credits of using an AI Agent or Service?",id:"how-can-the-users-know-whats-the-cost-in-credits-of-using-an-ai-agent-or-service",level:2},{value:"Why dynamic charging is important?",id:"why-dynamic-charging-is-important",level:2}];function h(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-an-ai-agent-or-service-can-charge-credits-dynamically",children:"How an AI Agent or Service can charge credits dynamically"})}),"\n",(0,r.jsxs)(t.p,{children:["When a builder is registering a new AI Agent or service (see ",(0,r.jsx)(t.a,{href:"../builders/register-agent",children:"tutorial"}),") it's possible to specify the cost in credits of each request to the agent. This cost can be fixed or dynamic, depending on the service logic."]}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/images/tutorials/select_dynamic_cost_credits.png",width:"600"})}),"\n",(0,r.jsxs)(t.p,{children:["If the cost is ",(0,r.jsx)(t.strong,{children:"Fixed"})," (for example 3 credits) each successful request to the service will cost 3 credits to the user ending the request. Easy.\nBut if the cost is ",(0,r.jsx)(t.strong,{children:"Dynamic"}),", the agent/service can report back to Nevermined how many credits need to be charged."]}),"\n",(0,r.jsxs)(t.p,{children:["To do that the AI agent/service needs to return a HTTP header ",(0,r.jsx)(t.code,{children:"NVMCreditsConsumed"})," with the number of credits to be charged."]}),"\n",(0,r.jsxs)(t.p,{children:["The number of credits returned in the ",(0,r.jsx)(t.code,{children:"NVMCreditsConsumed"})," HTTP header must be in the range of the credits cost defined in the service/agent during the registration. It means if the publisher/build said the cost in credits is between 1 and 10, the service/agent can return any number between 5 and 10. If the service/agent returns a number outside this range, the credits charged will be the minimum of that range (in our example 5 credits)."]}),"\n",(0,r.jsx)(t.h2,{id:"how-can-the-users-know-whats-the-cost-in-credits-of-using-an-ai-agent-or-service",children:"How can the users know what's the cost in credits of using an AI Agent or Service?"}),"\n",(0,r.jsx)(t.p,{children:"Before purchasing any AI Agent or Service, the user can see the cost in credits of each request. That helps to understand better the cost of the agent and in a high level how many requests can send before needing to top up."}),"\n",(0,r.jsx)(t.p,{children:"In the details page of the agent/service, the user can see the cost in credits per request:"}),"\n",(0,r.jsx)("p",{align:"center",children:(0,r.jsx)("img",{src:"/images/tutorials/agent_details_page_dynamic_credits_cost.png",width:"600"})}),"\n",(0,r.jsx)(t.h2,{id:"why-dynamic-charging-is-important",children:"Why dynamic charging is important?"}),"\n",(0,r.jsx)(t.p,{children:"It allows AI builders to adapt the cost of the service to the complexity of the request. For example:"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"An Agent that needs to decompose a complex prompt into several prompts integrate with more expensive models can charge more credits than an agent that uses a simple model."}),"\n",(0,r.jsx)(t.li,{children:"A Service that needs to process a large dataset can charge more credits than a service that processes a small dataset."}),"\n"]})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>c});var s=n(6540);const r={},i=s.createContext(r);function a(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);