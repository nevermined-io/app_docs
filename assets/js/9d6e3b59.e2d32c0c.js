"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[7520],{3998:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151);const s={sidebar_position:15,description:"How to use Smart Subscriptions to protect Smart Contracts"},o="How to use Smart Subscriptions to protect Smart Contracts?",a={id:"tutorials/advanced/smart-contract-access",title:"How to use Smart Subscriptions to protect Smart Contracts?",description:"How to use Smart Subscriptions to protect Smart Contracts",source:"@site/docs/tutorials/advanced/15-smart-contract-access.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/smart-contract-access",permalink:"/docs/tutorials/advanced/smart-contract-access",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/advanced/15-smart-contract-access.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{sidebar_position:15,description:"How to use Smart Subscriptions to protect Smart Contracts"},sidebar:"tutorialSidebar",previous:{title:"How to integrate a widget in your website",permalink:"/docs/tutorials/advanced/widgets-integration"},next:{title:"How a AI Service/Agent can charge credits dynamically",permalink:"/docs/tutorials/advanced/dynamic-charge-credits"}},c={},d=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to integrate the Smart Subscription NFT in your Smart Contract",id:"how-to-integrate-the-smart-subscription-nft-in-your-smart-contract",level:2},{value:"1. Define which methods you want to protect",id:"1-define-which-methods-you-want-to-protect",level:3},{value:"2. Integrate with the Smart Subscription NFT",id:"2-integrate-with-the-smart-subscription-nft",level:3},{value:"3. Implement the access control to check if the caller is a subscriber",id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber",level:3},{value:"4. Testing the integration",id:"4-testing-the-integration",level:3},{value:"5. Users can subscribe to your Smart Subscription",id:"5-users-can-subscribe-to-your-smart-subscription",level:3}];function l(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(e.h1,{id:"how-to-use-smart-subscriptions-to-protect-smart-contracts",children:"How to use Smart Subscriptions to protect Smart Contracts?"}),"\n",(0,r.jsx)(e.p,{children:"In this tutorial we show how a Smart Contract developer can control which external users can call the contract logic. We explain how you can use Smart Subscription to limit the ability to execute certain Smart Contract functionalities to holders of a Smart Subscription NFT."}),"\n",(0,r.jsx)(e.admonition,{title:"Tutorial",type:"info",children:(0,r.jsxs)(e.p,{children:["All the code used in this tutorial is available in this ",(0,r.jsx)(e.strong,{children:(0,r.jsx)(e.a,{href:"https://github.com/nevermined-io/tutorials/tree/main/subscriptions/001-Smart_Contract_Access",children:"repository"})})]})}),"\n",(0,r.jsx)(e.h2,{id:"getting-ready",children:"Getting ready"}),"\n",(0,r.jsxs)(e.p,{children:["First you will need to create your own Smart Subscription NFT for your Smart Contract (instructions ",(0,r.jsx)(e.a,{href:"../builders/create-subscription",children:"here"}),")."]}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Registering a new Plan",src:n(4555).Z+"",width:"2259",height:"1358"})}),"\n",(0,r.jsx)(e.admonition,{type:"info",children:(0,r.jsxs)(e.p,{children:["The Smart Subscription needs to be registered in the same network where your Smart Contracts are gonna be deployed. Currently Nevermined is deployed on ",(0,r.jsx)(e.a,{href:"../../environments/",children:"multiple blockchain networks"}),"."]})}),"\n",(0,r.jsx)(e.h2,{id:"how-to-integrate-the-smart-subscription-nft-in-your-smart-contract",children:"How to integrate the Smart Subscription NFT in your Smart Contract"}),"\n",(0,r.jsx)(e.p,{children:"The steps to integrate are the following:"}),"\n",(0,r.jsx)(e.h3,{id:"1-define-which-methods-you-want-to-protect",children:"1. Define which methods you want to protect"}),"\n",(0,r.jsxs)(e.p,{children:["First you need to decide what you need to protect. This is totally dependent on your Smart Contract logic. In our example we are going to protect the ",(0,r.jsx)(e.code,{children:"claim"})," method. This method is used to claim a giveaway in an ERC20 token contract."]}),"\n",(0,r.jsx)(e.h3,{id:"2-integrate-with-the-smart-subscription-nft",children:"2. Integrate with the Smart Subscription NFT"}),"\n",(0,r.jsx)(e.p,{children:"Next, you need to link the Solidity code of your Smart Contract with the Smart Subscription NFT contract. Because the Nevermined contract uses the ERC1155 format, you can use the standard ERC1155 interfaces to interact with it."}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"IERC1155 subscriptionNFT = IERC1155(subscriptionNFTAddress);\n"})}),"\n",(0,r.jsx)(e.h3,{id:"3-implement-the-access-control-to-check-if-the-caller-is-a-subscriber",children:"3. Implement the access control to check if the caller is a subscriber"}),"\n",(0,r.jsxs)(e.p,{children:["In our example we are going to protect the ",(0,r.jsx)(e.code,{children:"claim"})," method. This method is used to claim a giveaway in an ERC20 token contract. We want to protect this method so only subscribers of our NFT can call it. First we create a modifier to check if the caller of the smart contract is a subscriber."]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"    modifier onlySubscribers(address _address) {\n        require(            \n            subscriptionNFT.balanceOf(_address, uint256(tokenId)) > 0,\n            'You are not a subscriber'\n        );\n        _;\n    }\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"tokenId"})," is the id of the Smart Subscription NFT you want to use to protect your Smart Contract. In our example we purchased the following subscription:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{children:"https://testing.nevermined.app/en/subscription/did:nv:54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7\n"})}),"\n",(0,r.jsxs)(e.p,{children:["The ",(0,r.jsx)(e.code,{children:"tokenId"})," is the last part of the URL (after ",(0,r.jsx)(e.code,{children:"did:nv:"}),"): ",(0,r.jsx)(e.code,{children:"54c76f49dcfde63b1ce75412a3105bfb702b3e123a7e61320937f0ca792736e7"}),"."]}),"\n",(0,r.jsxs)(e.p,{children:["Next, we use this modifier in the ",(0,r.jsx)(e.code,{children:"claim"})," method:"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-solidity",children:"    function claim() public onlySubscribers(msg.sender) {\n        // ...\n    }\n"})}),"\n",(0,r.jsxs)(e.p,{children:["You can see all the contract code ",(0,r.jsx)(e.a,{href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/contracts/MyToken.sol",children:"here"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"4-testing-the-integration",children:"4. Testing the integration"}),"\n",(0,r.jsxs)(e.p,{children:["You can the complete the test ",(0,r.jsx)(e.a,{href:"https://github.com/nevermined-io/tutorials/blob/main/subscriptions/001-Smart_Contract_Access/test/MyToken.ts",children:"here"}),"."]}),"\n",(0,r.jsx)(e.h3,{id:"5-users-can-subscribe-to-your-smart-subscription",children:"5. Users can subscribe to your Smart Subscription"}),"\n",(0,r.jsx)(e.p,{children:"Once the Smart Subscription is deployed and the Smart Contract is connected to it, users can subscribe to the plan to claim the airdrop."}),"\n",(0,r.jsx)(e.p,{children:(0,r.jsx)(e.img,{alt:"Purchase the Plan",src:n(7482).Z+"",width:"2163",height:"1359"})}),"\n",(0,r.jsx)(e.p,{children:"So any user that wants to claim the airdrop needs to subscribe to the plan first. So when they make a call to your Smart Contract for claiming the AirDrop, you can validate they are subscribers to that plan and release the tokens."})]})}function h(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(l,{...t})}):l(t)}},4555:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/01_Registering_new_Plan-28f3d837822fb21b93306ee3a2dbc4b5.png"},7482:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/images/03_Plan_details-97ed1408d2000572babde09b62bfba97.png"},1151:(t,e,n)=>{n.d(e,{Z:()=>a,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(t){const e=r.useContext(s);return r.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function a(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),r.createElement(s.Provider,{value:e},t.children)}}}]);