"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[9716],{1175:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>m,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"protocol/index","title":"Overview","description":"Deep dive in Nevermined AI protocol","source":"@site/docs/protocol/index.mdx","sourceDirName":"protocol","slug":"/protocol/","permalink":"/docs/protocol/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"Deep dive in Nevermined AI protocol","title":"Overview"},"sidebar":"tutorialSidebar","previous":{"title":"How to create and integrate a Hugging Face Inference Endpoint","permalink":"/docs/tutorials/ai/huggingface"},"next":{"title":"AI Ecosystem","permalink":"/docs/protocol/ai-ecosystem"}}');var o=n(4848),i=n(8453),s=n(9230);const c={sidebar_position:1,description:"Deep dive in Nevermined AI protocol",title:"Overview"},a="Intro to Nevermined AI Protocol",l={},d=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",img:"img",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"intro-to-nevermined-ai-protocol",children:"Intro to Nevermined AI Protocol"})}),"\n",(0,o.jsx)(t.p,{children:"Nevermined protocol offers AI builders, and ultimately agents, the ability to monetize, discover and\ninteract each other. This is complemented with a system of unit accounting that unifies the agent\u2019s\nservice metering with a settlement system that accurately charges users for services rendered."}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:["You can read the ",(0,o.jsx)("u",{children:(0,o.jsx)(t.a,{href:"../getting-started/benefits",children:"list of benefits"})})," of using Nevermined Protocol\nin the ",(0,o.jsx)("u",{children:(0,o.jsx)(t.a,{href:"../getting-started",children:"Getting Started"})})," section."]})}),"\n",(0,o.jsx)(t.p,{children:"Nevermined adopts a credits-based implementation. These credits, or tokens, allow the builder to set\ndynamic access parameters (i.e. price range, time period for access, number of requests, etc.) that\ncontrol access, determine usage, and settle payment for each sequence of interactions. The builder\ncan bundle multiple agents and services under a single discrete credits redemption criteria; the\nprotocol manages the authentication of the user, the usage unit accounting, and the settlement."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Protocol Building Blocks",src:n(2168).A+"",width:"960",height:"540"})}),"\n",(0,o.jsx)("br",{}),"\n","\n",(0,o.jsx)(s.A,{})]})}function m(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},9230:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var r=n(4164),o=n(3751),i=n(6289),s=n(1430),c=n(2887),a=n(539),l=n(4706);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:i}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},1430:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),o=n(797);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},2168:(e,t,n)=>{n.d(t,{A:()=>r});const r=n.p+"assets/images/protocol_building_blocks-6e692e30342a4c7ffffab206c7f4adca.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>c});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);