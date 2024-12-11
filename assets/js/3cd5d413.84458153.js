"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[4744],{1397:(e,t,r)=>{r.d(t,{A:()=>g});r(6540);var s=r(4164),n=r(6971),o=r(8957),i=r(538),c=r(3091),a=r(5122),l=r(8673);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=r(4848);function p(e){let{href:t,children:r}=e;return(0,d.jsx)(o.A,{href:t,className:(0,s.A)("card padding--lg",u.cardContainer),children:r})}function m(e){let{href:t,icon:r,title:n,description:o}=e;return(0,d.jsxs)(p,{href:t,children:[(0,d.jsxs)(l.A,{as:"h2",className:(0,s.A)("text--truncate",u.cardTitle),title:n,children:[r," ",n]}),o&&(0,d.jsx)("p",{className:(0,s.A)("text--truncate",u.cardDescription),title:o,children:o})]})}function h(e){let{item:t}=e;const r=(0,n.Nr)(t),s=function(){const{selectMessage:e}=(0,i.W)();return t=>e(t,(0,a.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return r?(0,d.jsx)(m,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??s(t.items.length)}):null}function f(e){let{item:t}=e;const r=(0,c.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",s=(0,n.cC)(t.docId??void 0);return(0,d.jsx)(m,{href:t.href,icon:r,title:t.label,description:t.description??s?.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(h,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const r=(0,n.$S)();return(0,d.jsx)(g,{items:r.items,className:t})}function g(e){const{items:t,className:r}=e;if(!t)return(0,d.jsx)(x,{...e});const o=(0,n.d1)(t);return(0,d.jsx)("section",{className:(0,s.A)("row",r),children:o.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(b,{item:e})},t)))})}},538:(e,t,r)=>{r.d(t,{W:()=>l});var s=r(6540),n=r(2777);const o=["zero","one","two","few","many","other"];function i(e){return o.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:i(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,n.A)();return(0,s.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:i(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,r)=>function(e,t,r){const s=e.split("|");if(1===s.length)return s[0];s.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${s.length}: ${e}`);const n=r.select(t),o=r.pluralForms.indexOf(n);return s[Math.min(o,s.length-1)]}(r,t,e)}}},7431:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>s,toc:()=>u});const s=JSON.parse('{"id":"tutorials/subscribers/index","title":"For Subscribers","description":"For Subscribers","source":"@site/docs/tutorials/subscribers/index.mdx","sourceDirName":"tutorials/subscribers","slug":"/tutorials/subscribers/","permalink":"/docs/tutorials/subscribers/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1,"description":"For Subscribers"},"sidebar":"tutorialSidebar","previous":{"title":"Monetize your Open AI Assistant","permalink":"/docs/tutorials/builders/openai-assistant"},"next":{"title":"Searching assets and buying plans","permalink":"/docs/tutorials/subscribers/search-and-purchase"}}');var n=r(4848),o=r(8453),i=r(1397);const c={sidebar_position:1,description:"For Subscribers"},a="For Subscribers",l={},u=[];function d(e){const t={h1:"h1",header:"header",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"for-subscribers",children:"For Subscribers"})}),"\n","\n",(0,n.jsx)(i.A,{})]})}function p(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8453:(e,t,r)=>{r.d(t,{R:()=>i,x:()=>c});var s=r(6540);const n={},o=s.createContext(n);function i(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);