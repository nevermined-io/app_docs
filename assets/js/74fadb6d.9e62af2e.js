"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[1615],{4620:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>n,metadata:()=>o,toc:()=>d});var i=s(5893),r=s(1151);const n={sidebar_position:2,description:"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?"},a="Payments for AI Agents and Apps",o={id:"getting-started/payments-for-ai",title:"Payments for AI Agents and Apps",description:"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?",source:"@site/docs/getting-started/payments-for-ai.mdx",sourceDirName:"getting-started",slug:"/getting-started/payments-for-ai",permalink:"/docs/getting-started/payments-for-ai",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/getting-started/payments-for-ai.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Payments for AI Agents and Apps. What can you do with Nevermined Payments App?"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Nevermined Payments App",permalink:"/docs/getting-started/"},next:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting-started/faq"}},c={},d=[{value:"Create Smart Subscriptions",id:"create-smart-subscriptions",level:2},{value:"Time-Based vs. Request-Based Access to AIs",id:"time-based-vs-request-based-access-to-ais",level:2},{value:"AI Credits",id:"ai-credits",level:2},{value:"Registering an AI Agent / App",id:"registering-an-ai-agent--app",level:2},{value:"Type of Payment",id:"type-of-payment",level:2},{value:"Stripe Subscription",id:"stripe-subscription",level:2},{value:"Buying Smart Subscriptions with User Checkout Flow",id:"buying-smart-subscriptions-with-user-checkout-flow",level:2},{value:"Smart Subscriptions give AI Agents Superpowers!",id:"smart-subscriptions-give-ai-agents-superpowers",level:2}];function h(e){const t={h1:"h1",h2:"h2",li:"li",p:"p",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"payments-for-ai-agents-and-apps",children:"Payments for AI Agents and Apps"}),"\n",(0,i.jsx)(t.p,{children:"What can you do with the Nevermined Payments App?"}),"\n",(0,i.jsx)(t.p,{children:"AI payments are hard. Price your AI agent too low and you may be stuck with a hefty Open AI bill. Price your AI agent too high and you won\u2019t be competitive. Nevermined allows you to take control over your pricing and connect it to actual app usage."}),"\n",(0,i.jsx)(t.h2,{id:"create-smart-subscriptions",children:"Create Smart Subscriptions"}),"\n",(0,i.jsx)(t.p,{children:"Smart Subscriptions give AI Builders the ability to control how and when users can use an AI agent or service. They are entirely controlled and managed by the AI Builder that creates them with no interference from Nevermined."}),"\n",(0,i.jsx)(t.p,{children:"As an AI Builder, you can create a Smart Subscription for your AI that give you the ability to:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Create a time-based or request-based access token, called Credits, for your AI"}),"\n",(0,i.jsx)(t.li,{children:"Set a price, starting from Free, to access your AI (supporting any type of currency)"}),"\n",(0,i.jsx)(t.li,{children:"Combine different AI services, like API web services for your AI, data sets for context, model weights for training, etc."}),"\n",(0,i.jsx)(t.li,{children:"Set the number of Credits required to access a particular AI service, giving the Builder even greater pricing flexibility for each unique AI service, dataset, etc."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"time-based-vs-request-based-access-to-ais",children:"Time-Based vs. Request-Based Access to AIs"}),"\n",(0,i.jsx)(t.p,{children:"Nevermined Smart Subscriptions enable the set up of time-based or request-based gating of a Builder's AI."}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Time-Based: Provisions User access with time-gating. Builders can set the time period that a User will be allowed access to the AI. For example, this could be 1 year, 1 month, 1 week, 1 day, 1 hour, etc. When a user makes a request, the corresponding access credit will be redeemed and grant that User access to the AI service for the period designated by the Builder. Once the time period has elapsed, the User will no longer have access, and will need to redeem another credit if additional access is required."}),"\n",(0,i.jsx)(t.li,{children:"Request-Based: Provisions User access with request-gating. In this case, Builders can manage the number of requests that a User can make to access their AI service. This is done by prompting the Builder to set the number of credits needed to make a request to the AI service / app when they add that service to a Smart Subscription package. Once set, each time a request is made by a User, Nevermined will redeem the specified number of credits needed to make the request. If the User does not have enough credits, they will be prompted to purchase more credits and denied access to the Builder's AI service / app."}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"ai-credits",children:"AI Credits"}),"\n",(0,i.jsx)(t.p,{children:'The Nevermined Credits system is a sophisticated backend "SaaS" component that gives AI Builders flexibility to monitor and manage usage of their AI agent and apps. Credits are sold to users and then redeemed for access to the AI service, dataset, etc. How these credits are redeemed is set by the AI Builder. Nevermined then manages the redemption on their behalf with no additional work required from the AI Builder.'}),"\n",(0,i.jsx)(t.h2,{id:"registering-an-ai-agent--app",children:"Registering an AI Agent / App"}),"\n",(0,i.jsx)(t.p,{children:"You can register AI web services in just a few easy steps through Nevermined's simple registration flow."}),"\n",(0,i.jsx)(t.p,{children:"To register an AI, you will need your AI's web services endpoint plus JWT. The Nevermined app then encrypts that information."}),"\n",(0,i.jsx)(t.p,{children:"The outcome of the registration process are AI identification numbers, called DIDs, that are associated with each Builder. These AI services can then be linked to your Smart Subscription(s)."}),"\n",(0,i.jsx)(t.h2,{id:"type-of-payment",children:"Type of Payment"}),"\n",(0,i.jsx)(t.p,{children:"Nevermined supports two major types of purchase: fiat / cash purchases, and crypto purchases. AI Builders are given the choice of the purchase type they want to support. This selection is done when setting up a Builder profile within the Nevermined app. Once selected, the purchase type(s) will be propogated through to each Smart Subscription that the AI Builder creates. Then, when a User subscribes, they will be presented with the default purchase types."}),"\n",(0,i.jsx)(t.h2,{id:"stripe-subscription",children:"Stripe Subscription"}),"\n",(0,i.jsx)(t.p,{children:"When an AI Builder selects Stripe as the purchase mechanism for their Smart Subscriptions, they will be asked to go through the Stripe onboarding flow. This flow is independent from the Nevermined app, and is required to open an account with Stripe. [To Do]"}),"\n",(0,i.jsx)(t.h2,{id:"buying-smart-subscriptions-with-user-checkout-flow",children:"Buying Smart Subscriptions with User Checkout Flow"}),"\n",(0,i.jsx)(t.p,{children:"We've created a Smart Subscription widget that AI Builders can embed in their own websites or platforms, so users can purchase the Subscription from there. The purchase flow operates like PayPal, routing the User through Nevermined's Checkout flow service. During this flow, Users will choose how they wish to make the purchase, depending on the payment options made available by the AI Builder. Once a purchase is made, the User's account will be updated with the new Credits and can then start using the corresponding AI service or agent."}),"\n",(0,i.jsx)(t.p,{children:"People that buy from a widget will be routed to the Nevermined access flow. This is where they can redeem access to the AI web service's end point that is included in the Smart Subscription."}),"\n",(0,i.jsx)(t.h2,{id:"smart-subscriptions-give-ai-agents-superpowers",children:"Smart Subscriptions give AI Agents Superpowers!"}),"\n",(0,i.jsx)(t.p,{children:"Now AI agents have a means to monetize and to transact with external services! In other words, we've given agents (and associated services) a payment superpowers!"})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>a});var i=s(7294);const r={},n=i.createContext(r);function a(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);