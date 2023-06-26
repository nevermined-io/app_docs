"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8243],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=l(r),h=a,m=d["".concat(c,".").concat(h)]||d[h]||p[h]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},5508:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905));const o={sidebar_position:7,description:"How to find an asset and purchase the Smart Subscription"},i="Searching assets and buying subscriptions",s={unversionedId:"tutorials/search-and-purchase",id:"tutorials/search-and-purchase",title:"Searching assets and buying subscriptions",description:"How to find an asset and purchase the Smart Subscription",source:"@site/docs/tutorials/07-search-and-purchase.md",sourceDirName:"tutorials",slug:"/tutorials/search-and-purchase",permalink:"/docs/tutorials/search-and-purchase",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/07-search-and-purchase.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"How to find an asset and purchase the Smart Subscription"},sidebar:"tutorialSidebar",previous:{title:"How to register your dataset and link to a Smart Subscription",permalink:"/docs/tutorials/register-dataset"},next:{title:"How to integrate an AI web service in an application",permalink:"/docs/tutorials/webservice-integration"}},c={},l=[{value:"Before you start",id:"before-you-start",level:2},{value:"How to buy a Smart Subscription for the asset you want",id:"how-to-buy-a-smart-subscription-for-the-asset-you-want",level:2},{value:"1. Find the asset you&#39;re interested in",id:"1-find-the-asset-youre-interested-in",level:3},{value:"2. Get more detailed information",id:"2-get-more-detailed-information",level:3},{value:"3. Review and confirm",id:"3-review-and-confirm",level:3},{value:"4. Sign the transactions",id:"4-sign-the-transactions",level:3}],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"searching-assets-and-buying-subscriptions"},"Searching assets and buying subscriptions"),(0,a.kt)("p",null,"The Nevermined marketplace allows you to browse, search and purchase access to any of the assets that have been registered. "),(0,a.kt)("h2",{id:"before-you-start"},"Before you start"),(0,a.kt)("p",null,"Currently, the Nevermined App works on the Polygon, Gnosis and Arbitrum networks.\nIn order to purchase assets on that network you need to:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Connect your Metamask wallet to network that the asset has been registered on (instructions ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/metamask"},"here"),")."),(0,a.kt)("li",{parentName:"ol"},"Get some tokens to pay for the network transactions fees on that network. You can find instructions ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/metamask-tokens"},"here"),"."),(0,a.kt)("li",{parentName:"ol"},"You will need USDC to pay for the subscription. Again, check the ",(0,a.kt)("a",{parentName:"li",href:"/docs/tutorials/metamask-tokens"},"How to get tokens tutorial"),". ")),(0,a.kt)("h2",{id:"how-to-buy-a-smart-subscription-for-the-asset-you-want"},"How to buy a Smart Subscription for the asset you want"),(0,a.kt)("p",null,"The Marketplace is where you find and purchase the asset you're interested in.\nNavigate to the marketplace via Home or by clicking Marketplace in the footer. "),(0,a.kt)("h3",{id:"1-find-the-asset-youre-interested-in"},"1. Find the asset you're interested in"),(0,a.kt)("p",null,"The marketplace has different ways to find assets."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the search field to type in keywords related to the title of the asset."),(0,a.kt)("li",{parentName:"ul"},"Use the filter function to restrict your search to certain assets types, subscription durations, tags,...")),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/07-01-Buying-Filter.png"})),(0,a.kt)("h3",{id:"2-get-more-detailed-information"},"2. Get more detailed information"),(0,a.kt)("p",null,"Click on 'Learn More' to go to an overview page of the asset, including: "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"the description provided by the publisher"),(0,a.kt)("li",{parentName:"ul"},"the price and duration of the subscription you can purchase"),(0,a.kt)("li",{parentName:"ul"},"some on-chain meta-data")),(0,a.kt)("p",null,"If this is the asset you want, simply click the Buy button. "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/05-07-Webservice-AssetPage.png"})),(0,a.kt)("h3",{id:"3-review-and-confirm"},"3. Review and confirm"),(0,a.kt)("p",null,"Check the box to confirm you agree with the Nevermined T&C and click 'Complete Purchase'. "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/07-02-Buying-Checkout.png"})),(0,a.kt)("h3",{id:"4-sign-the-transactions"},"4. Sign the transactions"),(0,a.kt)("p",null,"First, it is possible that your MetaMask wallet asks you to approve a spending cap for USDC.  "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/07-03-Buying-Cap.png"})),(0,a.kt)("p",null,"After that, you have to confirm your purchase (and the network transaction fee).  "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/07-04-Buying-Confirm.png"})),(0,a.kt)("p",null,"After a short wait you will see a confirmation message. Click on 'Dashboard' to manage the asset you've now bought access to. "),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/07-05-Buying-Confirmation.png"})))}p.isMDXComponent=!0}}]);