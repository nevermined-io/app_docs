"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[4851],{1381:(e,t,n)=>{n.d(t,{A:()=>g});n(6540);var i=n(4164),r=n(7936),s=n(7634),o=n(4365),a=n(5242),l=n(9979),c=n(1170);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(4848);function h(e){let{href:t,children:n}=e;return(0,u.jsx)(s.A,{href:t,className:(0,i.A)("card padding--lg",d.cardContainer),children:n})}function m(e){let{href:t,icon:n,title:r,description:s}=e;return(0,u.jsxs)(h,{href:t,children:[(0,u.jsxs)(c.A,{as:"h2",className:(0,i.A)("text--truncate",d.cardTitle),title:r,children:[n," ",r]}),s&&(0,u.jsx)("p",{className:(0,i.A)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,r.Nr)(t),i=function(){const{selectMessage:e}=(0,o.W)();return t=>e(t,(0,l.T)({message:"1 item|{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(m,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??i(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,a.A)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,r.cC)(t.docId??void 0);return(0,u.jsx)(m,{href:t.href,icon:n,title:t.label,description:t.description??i?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,r.$S)();return(0,u.jsx)(g,{items:n.items,className:t})}function g(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(y,{...e});const s=(0,r.d1)(t);return(0,u.jsx)("section",{className:(0,i.A)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},4365:(e,t,n)=>{n.d(t,{W:()=>c});var i=n(6540),r=n(502);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const a={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,r.A)();return(0,i.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),a}}),[e])}function c(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const i=e.split("|");if(1===i.length)return i[0];i.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${i.length}: ${e}`);const r=n.select(t),s=n.pluralForms.indexOf(r);return i[Math.min(s,i.length-1)]}(n,t,e)}}},7828:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"libraries/index","title":"Payment Libraries","description":"Payment Libraries","source":"@site/docs/libraries/index.mdx","sourceDirName":"libraries","slug":"/libraries/","permalink":"/docs/libraries/","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":5,"frontMatter":{"sidebar_position":5,"description":"Payment Libraries"},"sidebar":"tutorialSidebar","previous":{"title":"Frequently Asked Questions (FAQ)","permalink":"/docs/getting-started/faq"},"next":{"title":"What can you do with the Payment Libraries?","permalink":"/docs/libraries/what-can-you-do"}}');var r=n(4848),s=n(8453),o=n(1381);const a={sidebar_position:5,description:"Payment Libraries"},l="Payment Libraries",c={},d=[{value:"Introduction",id:"introduction",level:2},{value:"Main features",id:"main-features",level:2},{value:"Let us know if you have any question",id:"let-us-know-if-you-have-any-question",level:2},{value:"How to use the Payment Libraries",id:"how-to-use-the-payment-libraries",level:2}];function u(e){const t={a:"a",admonition:"admonition",h1:"h1",h2:"h2",header:"header",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"payment-libraries",children:"Payment Libraries"})}),"\n",(0,r.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,r.jsx)(t.p,{children:"The Nevermined Payment Libraries are software components that can be used to augment AI applications."}),"\n",(0,r.jsx)(t.p,{children:"Payment Libraries allow AI Builders to monetize their AI Applications (like AI Agents or Services), integrate some other AI applications and query them in a generic way."}),"\n",(0,r.jsxs)(t.admonition,{type:"info",children:[(0,r.jsx)(t.mdxAdmonitionTitle,{}),(0,r.jsxs)(t.p,{children:["The Payment libraries are ",(0,r.jsx)("ins",{children:"Open Source"})," (",(0,r.jsx)(t.a,{href:"https://www.apache.org/licenses/LICENSE-2.0",children:"Apache v2"}),")."]})]}),"\n",(0,r.jsxs)(t.p,{children:["The libraries are provided in ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/payments-py",children:"Python"})," and\n",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/payments",children:"Typescript"}),"."]}),"\n",(0,r.jsx)(t.p,{children:"Both language implementations provide the same API but the Python one is more suited for AI\nBuilders, Data Scientists and/or Data engineers."}),"\n",(0,r.jsx)(t.p,{children:"From the other side, the Typescript implementation can be used for building AI agents/services too\nand for be integrated in frontend applications."}),"\n",(0,r.jsx)(t.h2,{id:"main-features",children:"Main features"}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"Create Payment Plans"}),"\n",(0,r.jsx)(t.li,{children:"Register AI Agents and Services"}),"\n",(0,r.jsx)(t.li,{children:"Register assets with files associated (Models, Datasets, etc)"}),"\n",(0,r.jsx)(t.li,{children:"Discover Payment Plans and AI Agents"}),"\n",(0,r.jsx)(t.li,{children:"Order Payment plans giving access to AI Agents, files, etc"}),"\n",(0,r.jsx)(t.li,{children:"Query AI Agents programatically"}),"\n",(0,r.jsx)(t.li,{children:"Build AI Agents able to process tasks sent by users"}),"\n"]}),"\n",(0,r.jsx)(t.h2,{id:"let-us-know-if-you-have-any-question",children:"Let us know if you have any question"}),"\n",(0,r.jsxs)(t.p,{children:["If you have questions about anything related to Nevermined Payment Libraries, you're always welcome to ask our community on ",(0,r.jsx)(t.a,{href:"https://discord.gg/GZju2qScKq",children:"Discord"})," or ",(0,r.jsx)(t.a,{href:"https://twitter.com/nevermined_io",children:"Twitter"}),"."]}),"\n",(0,r.jsx)(t.h2,{id:"how-to-use-the-payment-libraries",children:"How to use the Payment Libraries"}),"\n",(0,r.jsx)(t.p,{children:"In the following sections you will find the documentation about how to integrate and use the Libraries in your applications."}),"\n","\n",(0,r.jsx)(o.A,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>a});var i=n(6540);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);