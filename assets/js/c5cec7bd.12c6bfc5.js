"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6746],{3905:(t,e,r)=>{r.d(e,{Zo:()=>u,kt:()=>d});var o=r(7294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,o,n=function(t,e){if(null==t)return{};var r,o,n={},a=Object.keys(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(o=0;o<a.length;o++)r=a[o],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=o.createContext({}),l=function(t){var e=o.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},u=function(t){var e=l(t.components);return o.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return o.createElement(o.Fragment,{},e)}},m=o.forwardRef((function(t,e){var r=t.components,n=t.mdxType,a=t.originalType,c=t.parentName,u=s(t,["components","mdxType","originalType","parentName"]),m=l(r),d=n,h=m["".concat(c,".").concat(d)]||m[d]||p[d]||a;return r?o.createElement(h,i(i({ref:e},u),{},{components:r})):o.createElement(h,i({ref:e},u))}));function d(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2007:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var o=r(7462),n=(r(7294),r(3905));const a={sidebar_position:15,description:"How to use Smart Subscriptions to protect Smart Contracts"},i="How to use Smart Subscriptions to protect Smart Contracts?",s={unversionedId:"tutorials/smart-contract-access",id:"tutorials/smart-contract-access",title:"How to use Smart Subscriptions to protect Smart Contracts?",description:"How to use Smart Subscriptions to protect Smart Contracts",source:"@site/docs/tutorials/15-smart-contract-access.md",sourceDirName:"tutorials",slug:"/tutorials/smart-contract-access",permalink:"/docs/tutorials/smart-contract-access",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/15-smart-contract-access.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"How to use Smart Subscriptions to protect Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"How to integrate an AI web service in an application",permalink:"/docs/tutorials/webservice-integration"},next:{title:"Getting tokens for testnets",permalink:"/docs/tutorials/faucets"}},c={},l=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to integrate the Smart Subscription NFT in your Smart Contract",id:"how-to-integrate-the-smart-subscription-nft-in-your-smart-contract",level:2},{value:"1. Define which methods you want to protect",id:"1-define-which-methods-you-want-to-protect",level:3},{value:"2. Integrate with the Smart Subscription NFT",id:"2-integrate-with-the-smart-subscription-nft",level:3},{value:"3. Implement the access control to check if the caller is a subscriber",id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber",level:3},{value:"4. Testing the integration",id:"4-testing-the-integration",level:3}],u={toc:l};function p(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-use-smart-subscriptions-to-protect-smart-contracts"},"How to use Smart Subscriptions to protect Smart Contracts?"),(0,n.kt)("p",null,"In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Smart Subscription to limit the ability to execute certain Smart Contract functionalities to holders of a Smart Subscription NFT."),(0,n.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,n.kt)("p",null,"First you will need to create your own Smart Subscription NFT for your Smart Contract (instructions ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/create-subscription"},"here"),")."),(0,n.kt)("admonition",{title:"Tutorial",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"All the code used in this tutorial is available in this ",(0,n.kt)("strong",{parentName:"p"},(0,n.kt)("a",{parentName:"strong",href:"https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access"},"repository")))),(0,n.kt)("h2",{id:"how-to-integrate-the-smart-subscription-nft-in-your-smart-contract"},"How to integrate the Smart Subscription NFT in your Smart Contract"),(0,n.kt)("p",null,"The steps to integrate are the following:"),(0,n.kt)("h3",{id:"1-define-which-methods-you-want-to-protect"},"1. Define which methods you want to protect"),(0,n.kt)("p",null,"First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the ",(0,n.kt)("inlineCode",{parentName:"p"},"claim")," method. This method is used to claim a giveaway in an ERC20 token contract."),(0,n.kt)("h3",{id:"2-integrate-with-the-smart-subscription-nft"},"2. Integrate with the Smart Subscription NFT"),(0,n.kt)("p",null,"Next, you need to link the Solidity code of your Smart Contract with the Smart Subscription NFT contract. Because the Nevermined contract uses the ERC721 format, you can use the standard ERC721 interfaces to interact with it."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"IERC721 subscriptionNFT = IERC721(subscriptionNFTAddress);\n")),(0,n.kt)("h3",{id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber"},"3. Implement the access control to check if the caller is a subscriber"),(0,n.kt)("p",null,"In our example we are going to protect the ",(0,n.kt)("inlineCode",{parentName:"p"},"claim")," method. This method is used to claim a giveaway in an ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we create a modifier to check if the caller of the smart contract is a subscriber."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"    modifier onlySubscribers(address _address) {\n        require(\n            subscriptionNFT.balanceOf(_address) > 0,\n            'You are not a subscriber'\n        );\n        _;\n    }\n")),(0,n.kt)("p",null,"Next, we use this modifier in the ",(0,n.kt)("inlineCode",{parentName:"p"},"claim")," method:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-solidity"},"    function claim() public onlySubscribers(msg.sender) {\n        // ...\n    }\n")),(0,n.kt)("p",null,"You can see all the contract code ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol"},"here"),"."),(0,n.kt)("h3",{id:"4-testing-the-integration"},"4. Testing the integration"),(0,n.kt)("p",null,"You can the complete the test ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts"},"here"),"."))}p.isMDXComponent=!0}}]);