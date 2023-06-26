"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[3258],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(r),h=i,m=d["".concat(p,".").concat(h)]||d[h]||l[h]||s;return r?n.createElement(m,a(a({ref:t},u),{},{components:r})):n.createElement(m,a({ref:t},u))}));function h(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6808:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>l,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=r(7462),i=(r(7294),r(3905));const s={sidebar_position:2,description:"What can you do with Nevermined App?"},a="What can you do with Nevermined App?",o={unversionedId:"getting-started/what-we-do",id:"getting-started/what-we-do",title:"What can you do with Nevermined App?",description:"What can you do with Nevermined App?",source:"@site/docs/getting-started/what-we-do.mdx",sourceDirName:"getting-started",slug:"/getting-started/what-we-do",permalink:"/docs/getting-started/what-we-do",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/getting-started/what-we-do.mdx",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"What can you do with Nevermined App?"},sidebar:"tutorialSidebar",previous:{title:"Welcome to Nevermined App",permalink:"/docs/getting-started/"},next:{title:"Nevermined's Smart Subscriptions",permalink:"/docs/getting-started/smart-subscriptions"}},p={},c=[{value:"Create Smart Subscriptions",id:"create-smart-subscriptions",level:2},{value:"Register Assets",id:"register-assets",level:2},{value:"Selling and Buying Smart Subscriptions",id:"selling-and-buying-smart-subscriptions",level:2},{value:"Smart Subscriptions give AI Agents Superpowers!",id:"smart-subscriptions-give-ai-agents-superpowers",level:2}],u={toc:c};function l(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"what-can-you-do-with-nevermined-app"},"What can you do with Nevermined App?"),(0,i.kt)("h2",{id:"create-smart-subscriptions"},"Create Smart Subscriptions"),(0,i.kt)("p",null,"Features of Smart Subscriptions include "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"the ability to create a time-locked access token for your assets"),(0,i.kt)("li",{parentName:"ul"},"price setting (right now in USDC but can support any ERC20)"),(0,i.kt)("li",{parentName:"ul"},"the ability to append registered assets, either your web services (i.e. APIs for AI agents and services) and/or your data sets. ")),(0,i.kt)("h2",{id:"register-assets"},"Register Assets"),(0,i.kt)("p",null,"You can register AI web services or data sets. For both asset types, the app provides a simple registration flow. "),(0,i.kt)("p",null,"To register an AI you need your web services's endpoint plus JWT. The Nevermined app then encrypts that information."),(0,i.kt)("p",null,"To register data sets, you simply need to follow the upload flow."),(0,i.kt)("p",null,"In both cases, the outcome of the registration process are DIDs associated with the Publisher\u2019s wallet. These assets can then be linked to your Smart Subscription(s)."),(0,i.kt)("h2",{id:"selling-and-buying-smart-subscriptions"},"Selling and Buying Smart Subscriptions"),(0,i.kt)("p",null,"Discovering and purchasing the Smart Subscription for an asset happens in our basic marketplace. Alternatively, we've created a Smart Subscription widget that Publishers can embed in their own websites or platforms, so users can purchase the Subscription from there. "),(0,i.kt)("p",null,"People that buy from such a widget, will be routed to the NVM app after purchase. This is where they can redeem access to the web service's end point and/or the dataset(s) that are included in the Smart Subscription."),(0,i.kt)("h2",{id:"smart-subscriptions-give-ai-agents-superpowers"},"Smart Subscriptions give AI Agents Superpowers!"),(0,i.kt)("p",null,"Now AI agents have a means to monetize and to transact with external services without the need for a PoS or credit card. In other words, we've given agents (and associated services) a payment gateway and tokengating superpowers."),(0,i.kt)("p",null,"Request-lock subscriptions will be released soon after the time-lock version so instead of having a subscription for a period of time, you can limit the number of requests to the service."),(0,i.kt)("p",null,"Given that AI agents won't have bank accounts, we think this approach is super powerful and will provide the basis for a future of AI Agent-to-Agent transactions."))}l.isMDXComponent=!0}}]);