"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[63],{1353:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var r=n(5893),i=n(1151),s=n(7922);const o={sidebar_position:1,description:"Get Started with the Tutorials"},a="Getting Started with the Tutorials",c={id:"tutorials/index",title:"Getting Started with the Tutorials",description:"Get Started with the Tutorials",source:"@site/docs/tutorials/index.mdx",sourceDirName:"tutorials",slug:"/tutorials/",permalink:"/docs/tutorials/",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/index.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Get Started with the Tutorials"},sidebar:"tutorialSidebar",previous:{title:"Frequently Asked Questions (FAQ)",permalink:"/docs/getting-started/faq"},next:{title:"Getting started with the payments app",permalink:"/docs/tutorials/first-steps/"}},l={},u=[];function d(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"getting-started-with-the-tutorials",children:"Getting Started with the Tutorials"})}),"\n",(0,r.jsx)(t.p,{children:"Nevermined payments infrastructure enables the registration, subscription and monetization of AI agents."}),"\n",(0,r.jsx)(t.p,{children:"In the following tutorials, we explain how the Nevermined App can be used."}),"\n",(0,r.jsx)(t.p,{children:"These tutorials are a detailed guide for each of the different steps."}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["If you need further help or you miss a tutorial, feel free to let us know via ",(0,r.jsx)(t.a,{href:"https://discord.gg/GZju2qScKq",children:"Discord"})]})}),"\n","\n",(0,r.jsx)(s.Z,{})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},7922:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(512),i=n(9690),s=n(3692),o=n(8824),a=n(3919),c=n(5999),l=n(1498);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:s,children:s})]})}function m(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,c.I)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(7294),i=n(2263);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);