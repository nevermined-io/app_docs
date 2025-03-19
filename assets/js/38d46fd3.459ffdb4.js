"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8145],{3217:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>a,contentTitle:()=>l,default:()=>p,frontMatter:()=>c,metadata:()=>n,toc:()=>u});const n=JSON.parse('{"id":"tutorials/builders/index","title":"For AI Builders","description":"Getting your first contact with the Nevermined App","source":"@site/docs/tutorials/builders/index.mdx","sourceDirName":"tutorials/builders","slug":"/tutorials/builders/","permalink":"/docs/tutorials/builders/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Getting your first contact with the Nevermined App"},"sidebar":"tutorialSidebar","previous":{"title":"Navigating the payments app","permalink":"/docs/tutorials/first-steps/navigate-app"},"next":{"title":"Configure your account to accept payments","permalink":"/docs/tutorials/builders/configure-account"}}');var i=r(4848),s=r(8453),o=r(9230);const c={sidebar_position:2,description:"Getting your first contact with the Nevermined App"},l="For AI Builders",a={},u=[];function d(e){const t={a:"a",h1:"h1",header:"header",hr:"hr",li:"li",ol:"ol",p:"p",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"for-ai-builders",children:"For AI Builders"})}),"\n",(0,i.jsx)(t.p,{children:"The Nevermined payments app gives AI builders the ability to receive payment for their AI Agents.\nIn this group of tutorials, we will show how to register your AI using the Nevermined app in order to get paid."}),"\n",(0,i.jsx)(t.p,{children:"If you are an AI Builder and you plan to get paid for your AI services using the app, you need to complete some simple steps:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"configure-account",children:"Configure your account"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"create-plan",children:"Create a Pricing Plan"})}),"\n",(0,i.jsx)(t.li,{children:(0,i.jsx)(t.a,{href:"register-agent",children:"Register your AI Agent or Service"})}),"\n",(0,i.jsx)(t.li,{children:"and get paid!"}),"\n"]}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"In the following tutorials we see how to do this in just a couple of minutes!"}),"\n","\n",(0,i.jsx)(o.A,{})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},9230:(e,t,r)=>{r.d(t,{A:()=>j});r(6540);var n=r(4164),i=r(3751),s=r(6289),o=r(1430),c=r(2887),l=r(539),a=r(4706);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(s.A,{href:t,className:(0,n.A)("card padding--lg",u.cardContainer),children:r})}function h(e){let{href:t,icon:r,title:i,description:s}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(a.A,{as:"h2",className:(0,n.A)("text--truncate",u.cardTitle),title:i,children:[r," ",i]}),s&&(0,d.jsx)("p",{className:(0,n.A)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const r=(0,i.Nr)(t),n=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(h,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??n(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,i.cC)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:r,title:t.label,description:t.description??n?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,i.$S)();return(0,d.jsx)(j,{items:r.items,className:t})}function j(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.d1)(t);return(0,d.jsx)("section",{className:(0,n.A)("row",r),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},1430:(e,t,r)=>{r.d(t,{W:()=>a});var n=r(6540),i=r(797);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,i.A)();return(0,n.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=l();return{selectMessage:(t,r)=>function(e,t,r){const n=e.split("|");if(1===n.length)return n[0];n.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${n.length}: ${e}`);const i=r.select(t),s=r.pluralForms.indexOf(i);return n[Math.min(s,n.length-1)]}(r,t,e)}}},8453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var n=r(6540);const i={},s=n.createContext(i);function o(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);