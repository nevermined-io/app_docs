"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6046],{1397:(e,t,n)=>{n.d(t,{A:()=>v});n(6540);var r=n(4164),o=n(6971),i=n(8957),s=n(538),a=n(3091),c=n(5122),l=n(8673);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function p(e){let{href:t,children:n}=e;return(0,u.jsx)(i.A,{href:t,className:(0,r.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:o,description:i}=e;return(0,u.jsxs)(p,{href:t,children:[(0,u.jsxs)(l.A,{as:"h2",className:(0,r.A)("text--truncate",d.cardTitle),title:o,children:[n," ",o]}),i&&(0,u.jsx)("p",{className:(0,r.A)("text--truncate",d.cardDescription),title:i,children:i})]})}function h(e){let{item:t}=e;const n=(0,o.Nr)(t),r=function(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,c.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,o.$S)();return(0,u.jsx)(v,{items:n.items,className:t})}function v(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(x,{...e});const i=(0,o.d1)(t);return(0,u.jsx)("section",{className:(0,r.A)("row",n),children:i.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(g,{item:e})},t)))})}},538:(e,t,n)=>{n.d(t,{W:()=>l});var r=n(6540),o=n(2777);const i=["zero","one","two","few","many","other"];function s(e){return i.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function c(){const{i18n:{currentLocale:e}}=(0,o.A)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function l(){const e=c();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),i=n.pluralForms.indexOf(o);return r[Math.min(i,r.length-1)]}(n,t,e)}}},5871:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>p,frontMatter:()=>a,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"tutorials/advanced/index","title":"Tutorials for Nevermined App Advanced used","description":"Nevermined App Advanced tutorials","source":"@site/docs/tutorials/advanced/index.mdx","sourceDirName":"tutorials/advanced","slug":"/tutorials/advanced/","permalink":"/docs/tutorials/advanced/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2,"description":"Nevermined App Advanced tutorials"},"sidebar":"tutorialSidebar","previous":{"title":"Using the Nvm App SDK for building web applications","permalink":"/docs/tutorials/integration/sdk-integration"},"next":{"title":"How to integrate a widget in your website","permalink":"/docs/tutorials/advanced/widgets-integration"}}');var o=n(4848),i=n(8453),s=n(1397);const a={sidebar_position:2,description:"Nevermined App Advanced tutorials"},c="Tutorials for Nevermined App Advanced used",l={},d=[];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"tutorials-for-nevermined-app-advanced-used",children:"Tutorials for Nevermined App Advanced used"})}),"\n",(0,o.jsx)(t.p,{children:"Once you know how to interact with the Nevermined App, this tutorials will guide you through how to be a PRO and get more value of your assets."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["If you need further help or you miss a tutorial, feel free to let us know via ",(0,o.jsx)(t.a,{href:"https://discord.gg/GZju2qScKq",children:"Discord"})]})}),"\n","\n",(0,o.jsx)(s.A,{})]})}function p(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var r=n(6540);const o={},i=r.createContext(o);function s(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);