"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[2085],{1360:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>l,frontMatter:()=>r,metadata:()=>s,toc:()=>c});const s=JSON.parse('{"id":"getting-started/payments-for-ai","title":"Payments for AI Agents and Apps","description":"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?","source":"@site/docs/getting-started/payments-for-ai.mdx","sourceDirName":"getting-started","slug":"/getting-started/payments-for-ai","permalink":"/docs/getting-started/payments-for-ai","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?"},"sidebar":"tutorialSidebar","previous":{"title":"Welcome to Nevermined Payments App","permalink":"/docs/getting-started/"},"next":{"title":"Frequently Asked Questions (FAQ)","permalink":"/docs/getting-started/faq"}}');var a=n(4848),i=n(8453);const r={sidebar_position:2,description:"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?"},o="Payments for AI Agents and Apps",d={},c=[{value:"Create Payment Plans",id:"create-payment-plans",level:2},{value:"Time-Based vs. Request-Based Access to AIs",id:"time-based-vs-request-based-access-to-ais",level:2},{value:"AI Credits",id:"ai-credits",level:2},{value:"Registering an AI Agent / App",id:"registering-an-ai-agent--app",level:2},{value:"Type of Payment",id:"type-of-payment",level:2},{value:"Stripe Subscription",id:"stripe-subscription",level:2},{value:"Buying Payment Plans with User Checkout Flow",id:"buying-payment-plans-with-user-checkout-flow",level:2},{value:"Payment Plans give AI Agents Superpowers!",id:"payment-plans-give-ai-agents-superpowers",level:2}];function h(e){const t={h1:"h1",h2:"h2",header:"header",li:"li",p:"p",ul:"ul",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"payments-for-ai-agents-and-apps",children:"Payments for AI Agents and Apps"})}),"\n",(0,a.jsx)(t.p,{children:"What can you do with the Nevermined Payments App?"}),"\n",(0,a.jsx)(t.p,{children:"AI payments are hard. Price your AI agent too low and you may be stuck with a hefty Open AI bill.\nPrice your AI agent too high and you won\u2019t be competitive. Nevermined allows you to take control\nover your pricing and connect it to actual app usage."}),"\n",(0,a.jsx)(t.h2,{id:"create-payment-plans",children:"Create Payment Plans"}),"\n",(0,a.jsx)(t.p,{children:"Payment Plans give AI Builders the ability to control how and when users can use an AI agent or\nservice. They are entirely controlled and managed by the AI Builder that creates them with no\ninterference from Nevermined."}),"\n",(0,a.jsx)(t.p,{children:"As an AI Builder, you can create a Payment Plan for your AI that gives you the ability to:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Create a time-based or request-based access token, called Credits, for your AI"}),"\n",(0,a.jsx)(t.li,{children:"Set a price, starting from Free, to access your AI (supporting any type of currency)"}),"\n",(0,a.jsx)(t.li,{children:"Combine different AI agent services, like API web services for your AI, data sets for context,\nmodel weights for training, etc."}),"\n",(0,a.jsx)(t.li,{children:"Set the number of Credits required to access a particular AI service, giving the Builder even\ngreater pricing flexibility for each unique AI service, dataset, etc."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"time-based-vs-request-based-access-to-ais",children:"Time-Based vs. Request-Based Access to AIs"}),"\n",(0,a.jsx)(t.p,{children:"Nevermined Payment Plans enable the set up of time-based or request-based gating of a Builder's AI."}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Time-Based: Provisions User access with time-gating. Builders can set the time period that a User\nwill be allowed access to the AI. For example, this could be 1 year, 1 month, 1 week, 1 day, 1\nhour, etc. When a user makes a request, the corresponding access credit will be redeemed and grant\nthat User access to the AI service for the period designated by the Builder. Once the time period\nhas elapsed, the User will no longer have access, and will need to redeem another credit if\nadditional access is required."}),"\n",(0,a.jsx)(t.li,{children:"Request-Based: Provisions User access with request-gating. In this case, Builders can manage the\nnumber of requests that a User can make to access their AI service. This is done by prompting the\nBuilder to set the number of credits needed to make a request to the AI service / app when they\nadd that service to a Payment Plan package. Once set, each time a request is made by a User,\nNevermined will redeem the specified number of credits needed to make the request. If the User\ndoes not have enough credits, they will be prompted to purchase more credits and denied access to\nthe Builder's AI service / app."}),"\n"]}),"\n",(0,a.jsx)(t.h2,{id:"ai-credits",children:"AI Credits"}),"\n",(0,a.jsx)(t.p,{children:'The Nevermined Credits system is a sophisticated backend "SaaS" component that gives AI Builders\nflexibility to monitor and manage usage of their AI agent and apps. Credits are sold to users and\nthen redeemed for access to the AI service, dataset, etc. How these credits are redeemed is set by\nthe AI Builder. Nevermined then manages the redemption on their behalf with no additional work\nrequired from the AI Builder.'}),"\n",(0,a.jsx)(t.h2,{id:"registering-an-ai-agent--app",children:"Registering an AI Agent / App"}),"\n",(0,a.jsx)(t.p,{children:"You can register AI web services in just a few easy steps through Nevermined's simple registration\nflow."}),"\n",(0,a.jsx)(t.p,{children:"To register an AI, you will need your AI's web services endpoint plus JWT. The Nevermined app then\nencrypts that information."}),"\n",(0,a.jsx)(t.p,{children:"The outcome of the registration process are AI identification numbers, called DIDs, that are\nassociated with each Builder. These AI services can then be linked to your Payment Plan(s)."}),"\n",(0,a.jsx)(t.h2,{id:"type-of-payment",children:"Type of Payment"}),"\n",(0,a.jsx)(t.p,{children:"Nevermined supports two major types of purchase: fiat / cash purchases, and crypto purchases. AI\nBuilders are given the choice of the purchase type they want to support. This selection is done when\nsetting up a Builder profile within the Nevermined app. Once selected, the purchase type(s) will be\npropogated through to each Payment Plan that the AI Builder creates. Then, when a User subscribes,\nthey will be presented with the default purchase types."}),"\n",(0,a.jsx)(t.h2,{id:"stripe-subscription",children:"Stripe Subscription"}),"\n",(0,a.jsx)(t.p,{children:"When an AI Builder selects Stripe as the purchase mechanism for their Payment Plans, they will be\nasked to go through the Stripe onboarding flow. This flow is independent from the Nevermined app,\nand is required to open an account with Stripe. [To Do]"}),"\n",(0,a.jsx)(t.h2,{id:"buying-payment-plans-with-user-checkout-flow",children:"Buying Payment Plans with User Checkout Flow"}),"\n",(0,a.jsx)(t.p,{children:"We've created a Payment Plan widget that AI Builders can embed in their own websites or platforms,\nso users can purchase the Plan from there. The purchase flow operates like PayPal, routing the User\nthrough Nevermined's Checkout flow service. During this flow, Users will choose how they wish to\nmake the purchase, depending on the payment options made available by the AI Builder. Once a\npurchase is made, the User's account will be updated with the new Credits and can then start using\nthe corresponding AI service or agent."}),"\n",(0,a.jsx)(t.p,{children:"People that buy from a widget will be routed to the Nevermined access flow. This is where they can\nredeem access to the AI web service's end point that is included in the Payment Plan."}),"\n",(0,a.jsx)(t.h2,{id:"payment-plans-give-ai-agents-superpowers",children:"Payment Plans give AI Agents Superpowers!"}),"\n",(0,a.jsx)(t.p,{children:"Now AI agents have a means to monetize and to transact with external services! In other words, we've\ngiven agents (and associated services) a payment superpowers!"})]})}function l(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>o});var s=n(6540);const a={},i=s.createContext(a);function r(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);