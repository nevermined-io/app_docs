"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[3121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var i=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function n(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,i,o=function(e,t){if(null==e)return{};var r,i,o={},a=Object.keys(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)r=a[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=i.createContext({}),l=function(e){var t=i.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):n(n({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=l(r),d=o,b=h["".concat(c,".").concat(d)]||h[d]||p[d]||a;return r?i.createElement(b,n(n({ref:t},u),{},{components:r})):i.createElement(b,n({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,n=new Array(a);n[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,n[1]=s;for(var l=2;l<a;l++)n[l]=r[l];return i.createElement.apply(null,n)}return i.createElement.apply(null,r)}h.displayName="MDXCreateElement"},3094:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var i=r(7462),o=(r(7294),r(3905));const a={sidebar_position:4,description:"Steps to publish a Smart Subscription"},n="How to create a Smart Subscription",s={unversionedId:"tutorials/create-subscription",id:"tutorials/create-subscription",title:"How to create a Smart Subscription",description:"Steps to publish a Smart Subscription",source:"@site/docs/tutorials/04-create-subscription.md",sourceDirName:"tutorials",slug:"/tutorials/create-subscription",permalink:"/docs/tutorials/create-subscription",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/04-create-subscription.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,description:"Steps to publish a Smart Subscription"},sidebar:"tutorialSidebar",previous:{title:"How to add networks to MetaMask",permalink:"/docs/tutorials/metamask-networks"},next:{title:"How to register your web service",permalink:"/docs/tutorials/register-webservice"}},c={},l=[{value:"Before you start",id:"before-you-start",level:2},{value:"How to create a Smart Subscription",id:"how-to-create-a-smart-subscription-1",level:2},{value:"1. Open the New Asset page",id:"1-open-the-new-asset-page",level:3},{value:"2. Fill in the Subscription metadata",id:"2-fill-in-the-subscription-metadata",level:3},{value:"3. Configure the type of plan you want to create",id:"3-configure-the-type-of-plan-you-want-to-create",level:3},{value:"4. Review everything is okay",id:"4-review-everything-is-okay",level:3},{value:"5. Register the subscription",id:"5-register-the-subscription",level:3},{value:"6. See the subscription you just published",id:"6-see-the-subscription-you-just-published",level:3}],u={toc:l};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"how-to-create-a-smart-subscription"},"How to create a Smart Subscription"),(0,o.kt)("p",null,"Publishers can use Nevermined to create Smart Subscriptions. These function as access tokens and help AI or Data Publishers to control the access to their AI or Data Services.  "),(0,o.kt)("p",null,"Creating a Smart Subscription is the first of two steps:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"First, you create a subscription. "),(0,o.kt)("li",{parentName:"ul"},"Then, you register your asset (an AI web service, Data,...) and you link it to your subscription. This is explained in the ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/register-webservice"},"web service tutorial")," and ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/register-dataset"},"data tutorial"),".")),(0,o.kt)("p",null,"When you\u2019ve completed those 2 steps, the Smart Subscription becomes an access control mechanism to your asset."),(0,o.kt)("p",null,"How does it work? "),(0,o.kt)("p",null,"Under the hood, a Smart Subscription is an NFT smart contract, created and owned by the Publisher. The users or subscribers can purchase a token giving them access to the services provided by the Publisher. "),(0,o.kt)("h2",{id:"before-you-start"},"Before you start"),(0,o.kt)("p",null,"The Smart Subscription will be deployed in a blockchain network. Currently, the Nevermined App is deployed on the Polygon and Gnosis networks (plus on their respective testnets). "),(0,o.kt)("p",null,"In order to interact with that network you need to:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Connect your MetaMask wallet to the relevant network (instructions ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/metamask"},"here"),")."),(0,o.kt)("li",{parentName:"ol"},"Get the right tokens to pay for the gas fees on that network (instructions ",(0,o.kt)("a",{parentName:"li",href:"/docs/tutorials/metamask"},"here"),")")),(0,o.kt)("h2",{id:"how-to-create-a-smart-subscription-1"},"How to create a Smart Subscription"),(0,o.kt)("p",null,"You can use the ",(0,o.kt)("a",{parentName:"p",href:"https://mumbai.nevermined.app/"},"Nevermined App")," to create a new subscription, as a way to protect the access to your digital asset. The steps to create a subscription are:"),(0,o.kt)("h3",{id:"1-open-the-new-asset-page"},"1. Open the New Asset page"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Click on the New button in the top right to go the New Asset page. "),(0,o.kt)("li",{parentName:"ul"},"Then click 'Create Plan'")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Assets page",src:r(3805).Z,width:"2295",height:"1262"})),(0,o.kt)("h3",{id:"2-fill-in-the-subscription-metadata"},"2. Fill in the Subscription metadata"),(0,o.kt)("p",null,"Provide a description to explain to potential users what your Subscription is about. Some examples:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Monthly pass to my OpenAI copilot"),(0,o.kt)("li",{parentName:"ul"},"1-Year subscription to our Defi Data web service"),(0,o.kt)("li",{parentName:"ul"},"Free & forever access to my Discord server")),(0,o.kt)("p",null,"Provide tags to make it easier to find in our Marketplace."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add subscription metadata page",src:r(2089).Z,width:"2295",height:"1262"})),(0,o.kt)("h3",{id:"3-configure-the-type-of-plan-you-want-to-create"},"3. Configure the type of plan you want to create"),(0,o.kt)("p",null,"We have pre-configured a few common options (Free and forever plan, one month subscription, one year subscription).\nIf you want to have more flexibility, clicking on the \u201cCustom\u201d button allows you to:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"specify the duration of the subscription"),(0,o.kt)("li",{parentName:"ul"},"specify the price (in USDC)")),(0,o.kt)("p",null,"Click on \u201cNext\u201d when you\u2019re happy with the configuration."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Configure subscription plan",src:r(7936).Z,width:"2295",height:"1262"})),(0,o.kt)("h3",{id:"4-review-everything-is-okay"},"4. Review everything is okay"),(0,o.kt)("p",null,"Before creating the subscription, you can review the description, duration and price. Click on \u201cCreate\u201d if everything is okay or click on \u201cBack\u201d if you want to modify anything."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Review subscription is fine",src:r(8888).Z,width:"2295",height:"1262"})),(0,o.kt)("h3",{id:"5-register-the-subscription"},"5. Register the subscription"),(0,o.kt)("p",null,"The Nevermined App will register your new subscription on the blockchain. This will require you to sign 2 transactions in your MetaMask wallet. As explained in \u2018Getting Ready\u2019, this requires a little bit of tokens (depending on the network you're using) to pay for the network transaction fees.  "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Finish the subscription creation",src:r(6744).Z,width:"2295",height:"1262"})),(0,o.kt)("h3",{id:"6-see-the-subscription-you-just-published"},"6. See the subscription you just published"),(0,o.kt)("p",null,"Go to your dashboard to see the new subscription you created. Now, you can move on the next tutorial and associate your asset (a ",(0,o.kt)("a",{parentName:"p",href:"/docs/tutorials/register-webservice"},"Web Service"),", Dataset) to this subscription."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Publisher dashboard",src:r(135).Z,width:"2120",height:"1194"})))}p.isMDXComponent=!0},3805:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/01_New_Subscription-cabb5683a756c73eb6f76726bd5e0653.png"},2089:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/02_New_Subscription_01-7488ba88beb2f2a22cd2fa76cddb536e.png"},7936:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/03_New_Subscription_02-08c32d23755536f17cd7e0b769114d61.png"},8888:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/04_New_Subscription_03-5a88a77d2098ceec1d9ad42c7e2396ba.png"},6744:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/05_New_Subscription_04-80f52de594391d3a14ebe35c9f679676.png"},135:(e,t,r)=>{r.d(t,{Z:()=>i});const i=r.p+"assets/images/17_Publisher_Dashboard_with_balance-05170b428c7d3c008b639e03daa96dd6.png"}}]);