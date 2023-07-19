"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[9761],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>h});var s=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=s.createContext({}),p=function(e){var t=s.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=p(e.components);return s.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},d=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(r),h=n,b=d["".concat(c,".").concat(h)]||d[h]||u[h]||a;return r?s.createElement(b,i(i({ref:t},l),{},{components:r})):s.createElement(b,i({ref:t},l))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var p=2;p<a;p++)i[p]=r[p];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}d.displayName="MDXCreateElement"},94784:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>o,toc:()=>p});var s=r(87462),n=(r(67294),r(3905));const a={sidebar_position:3,description:"What are the Nevermined Assets? and Why are important?",title:"Nevermined Assets"},i="Nevermined Assets",o={unversionedId:"architecture/assets",id:"architecture/assets",title:"Nevermined Assets",description:"What are the Nevermined Assets? and Why are important?",source:"@site/docs/architecture/03-assets.mdx",sourceDirName:"architecture",slug:"/architecture/assets",permalink:"/docs/architecture/assets",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/architecture/03-assets.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"What are the Nevermined Assets? and Why are important?",title:"Nevermined Assets"},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/architecture/high-level-architecture"},next:{title:"How everything works",permalink:"/docs/architecture/how-works"}},c={},p=[{value:"Subscriptions",id:"subscriptions",level:2},{value:"Web Services",id:"web-services",level:2},{value:"Data",id:"data",level:2}],l={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,s.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"nevermined-assets"},"Nevermined Assets"),(0,n.kt)("p",null,"An asset in Nevermined is the representation of some digital content.",(0,n.kt)("br",{parentName:"p"}),"\n","It is registered by the origital publisher who make it available to others through the applcaition. "),(0,n.kt)("p",null,"The typical assets that can be found on Nevermined are:"),(0,n.kt)("h2",{id:"subscriptions"},"Subscriptions"),(0,n.kt)("p",null,"They are assets on Nevermined App that represent a subscription available to others. These subscriptions have a price (or are for free) and typically have a duration.\nIn Nevermined the subscriptions are backed by a NFT Smart Contract owned by the Publisher of the subscription. When a user purchases a subscription receives a token on that NFT contract identifying the user as a subscriber.\nThe subscriptions are associated to other assets (like web services or datasets) in such a wayt the holders of these subscriptions can get access to the web services or the files of the data published."),(0,n.kt)("h2",{id:"web-services"},"Web Services"),(0,n.kt)("p",null,"They describe a HTTP Web service that can be accessible by users who are subscribers. The description of these web services includes their endpoints and the metadata required to make use of the API."),(0,n.kt)("h2",{id:"data"},"Data"),(0,n.kt)("p",null,"They describe files grouped together. When a user owns the subscription associated to a data asset they can download the files associated to them."))}u.isMDXComponent=!0}}]);