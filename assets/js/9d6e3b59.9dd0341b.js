"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[9862],{7969:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>i,toc:()=>l});const i=JSON.parse('{"id":"tutorials/advanced/smart-contract-access","title":"How to use Pricing Plans to protect Smart Contracts?","description":"How to use Pricing Plans to protect Smart Contracts","source":"@site/docs/tutorials/advanced/15-smart-contract-access.md","sourceDirName":"tutorials/advanced","slug":"/tutorials/advanced/smart-contract-access","permalink":"/docs/tutorials/advanced/smart-contract-access","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":15,"frontMatter":{"sidebar_position":15,"description":"How to use Pricing Plans to protect Smart Contracts"},"sidebar":"tutorialSidebar","previous":{"title":"How to integrate a widget in your website","permalink":"/docs/tutorials/advanced/widgets-integration"},"next":{"title":"How an AI Agent or Service can charge credits dynamically","permalink":"/docs/tutorials/advanced/dynamic-charge-credits"}}');var r=n(4848),o=n(8453);const s={sidebar_position:15,description:"How to use Pricing Plans to protect Smart Contracts"},a="How to use Pricing Plans to protect Smart Contracts?",c={},l=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to integrate the Pricing Plan NFT in your Smart Contract",id:"how-to-integrate-the-pricing-plan-nft-in-your-smart-contract",level:2},{value:"1. Define which methods you want to protect",id:"1-define-which-methods-you-want-to-protect",level:3},{value:"2. Integrate with the Pricing Plan NFT",id:"2-integrate-with-the-pricing-plan-nft",level:3},{value:"3. Implement the access control to check if the caller is a subscriber",id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber",level:3},{value:"4. Testing the integration",id:"4-testing-the-integration",level:3},{value:"5. Users can subscribe to your Pricing Plan",id:"5-users-can-subscribe-to-your-pricing-plan",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-to-use-pricing-plans-to-protect-smart-contracts",children:"How to use Pricing Plans to protect Smart Contracts?"})}),"\n",(0,r.jsx)(t.p,{children:"In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Pricing Plans to limit the ability to execute certain Smart Contract functionalities to holders of a Pricing Plan NFT."}),"\n",(0,r.jsx)(t.admonition,{title:"Tutorial",type:"info",children:(0,r.jsxs)(t.p,{children:["All the code used in this tutorial is available in this ",(0,r.jsx)(t.strong,{children:(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access",children:"repository"})})]})}),"\n",(0,r.jsx)(t.h2,{id:"getting-ready",children:"Getting ready"}),"\n",(0,r.jsxs)(t.p,{children:["First you will need to create your own Pricing Plan NFT for your Smart Contract (instructions ",(0,r.jsx)(t.a,{href:"../builders/create-plan",children:"here"}),")."]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Registering a new Plan",src:n(3555).A+"",width:"2259",height:"1358"})}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["The Pricing Plan needs to be registered in the same network where your Smart Contracts are going to be deployed. Currently Nevermined is deployed on ",(0,r.jsx)(t.a,{href:"../../environments/",children:"multiple blockchain networks"}),"."]})}),"\n",(0,r.jsx)(t.h2,{id:"how-to-integrate-the-pricing-plan-nft-in-your-smart-contract",children:"How to integrate the Pricing Plan NFT in your Smart Contract"}),"\n",(0,r.jsx)(t.p,{children:"The steps to integrate are the following:"}),"\n",(0,r.jsx)(t.h3,{id:"1-define-which-methods-you-want-to-protect",children:"1. Define which methods you want to protect"}),"\n",(0,r.jsxs)(t.p,{children:["First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the ",(0,r.jsx)(t.code,{children:"claim"})," method. This method is used to claim a giveaway in an ERC20 token contract."]}),"\n",(0,r.jsx)(t.h3,{id:"2-integrate-with-the-pricing-plan-nft",children:"2. Integrate with the Pricing Plan NFT"}),"\n",(0,r.jsx)(t.p,{children:"Next, you need to link the Solidity code of your Smart Contract with the Pricing Plan NFT contract. Because the Nevermined contract uses the ERC1155 format, you can use the standard ERC1155 interfaces to interact with it."}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"IERC1155 subscriptionNFT = IERC1155(subscriptionNFTAddress);\n"})}),"\n",(0,r.jsx)(t.h3,{id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber",children:"3. Implement the access control to check if the caller is a subscriber"}),"\n",(0,r.jsxs)(t.p,{children:["In our example we are going to protect the ",(0,r.jsx)(t.code,{children:"claim"})," method. This method is used to claim a giveaway in an ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we create a modifier to check if the caller of the smart contract is a subscriber."]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"    modifier onlySubscribers(address _address) {\n        require(            \n            subscriptionNFT.balanceOf(_address, uint256(tokenId)) > 0,\n            'You are not a subscriber'\n        );\n        _;\n    }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"tokenId"})," is the id of the Pricing Plan NFT you want to use to protect your Smart Contract. In our example we purchased the following subscription:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{children:"https://testing.nevermined.app/en/subscription/did:nv:54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7\n"})}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.code,{children:"tokenId"})," is the last part of the URL (after ",(0,r.jsx)(t.code,{children:"did:nv:"}),"): ",(0,r.jsx)(t.code,{children:"54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7"}),"."]}),"\n",(0,r.jsxs)(t.p,{children:["Next, we use this modifier in the ",(0,r.jsx)(t.code,{children:"claim"})," method:"]}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-solidity",children:"    function claim() public onlySubscribers(msg.sender) {\n        // ...\n    }\n"})}),"\n",(0,r.jsxs)(t.p,{children:["You can see all the contract code ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"4-testing-the-integration",children:"4. Testing the integration"}),"\n",(0,r.jsxs)(t.p,{children:["You can see the complete test ",(0,r.jsx)(t.a,{href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts",children:"here"}),"."]}),"\n",(0,r.jsx)(t.h3,{id:"5-users-can-subscribe-to-your-pricing-plan",children:"5. Users can subscribe to your Pricing Plan"}),"\n",(0,r.jsx)(t.p,{children:"Once the Pricing Plan is deployed and the Smart Contract is connected to it, users can subscribe to the plan to claim the airdrop."}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.img,{alt:"Purchase the Plan",src:n(3283).A+"",width:"2163",height:"1359"})}),"\n",(0,r.jsx)(t.p,{children:"So any user that wants to claim the airdrop needs to subscribe to the plan first. When they make a call to your Smart Contract for claiming the AirDrop, you can validate they are subscribers to that plan and release the tokens."})]})}function h(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},3555:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/01_Registering_new_Plan-28f3d837822fb21b93306ee3a2dbc4b5.png"},3283:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/03_Plan_details-97ed1408d2000572babde09b62bfba97.png"},8453:(e,t,n)=>{n.d(t,{R:()=>s,x:()=>a});var i=n(6540);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);