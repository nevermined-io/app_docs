"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[320],{664:(e,s,t)=>{t.r(s),t.d(s,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>n,toc:()=>l});const n=JSON.parse('{"id":"tutorials/builders/openai-assistant","title":"Monetize your Open AI Assistant","description":"Monetize your Open AI Assistant with Nevermined","source":"@site/docs/tutorials/builders/10-openai-assistant.md","sourceDirName":"tutorials/builders","slug":"/tutorials/builders/openai-assistant","permalink":"/docs/tutorials/builders/openai-assistant","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"Monetize your Open AI Assistant with Nevermined"},"sidebar":"tutorialSidebar","previous":{"title":"Distribute your AI agents and make some money","permalink":"/docs/tutorials/builders/distribute"},"next":{"title":"For Subscribers","permalink":"/docs/tutorials/subscribers/"}}');var i=t(4848),a=t(8453);const o={sidebar_position:10,description:"Monetize your Open AI Assistant with Nevermined"},r="Monetize your Open AI Assistant",d={},l=[{value:"Before you start",id:"before-you-start",level:2},{value:"From where can I get the Assistant ID?",id:"from-where-can-i-get-the-assistant-id",level:3},{value:"From where can I copy Open AI access token?",id:"from-where-can-i-copy-open-ai-access-token",level:3},{value:"How to register an OpenAI assistant",id:"how-to-register-an-openai-assistant",level:2},{value:"1. Open the New Asset page",id:"1-open-the-new-asset-page",level:3},{value:"2. Describe the OpenAI assistant with metadata",id:"2-describe-the-openai-assistant-with-metadata",level:3},{value:"Provide a short title",id:"provide-a-short-title",level:4},{value:"Add a description",id:"add-a-description",level:4},{value:"Include tags (optional)",id:"include-tags-optional",level:4},{value:"3. Define the attributes of the OpenAI assistant",id:"3-define-the-attributes-of-the-openai-assistant",level:3},{value:"4. Add integration instructions",id:"4-add-integration-instructions",level:3},{value:"5. Choose a Payment Plan",id:"5-choose-a-payment-plan",level:3},{value:"6. Review that everything is okay",id:"6-review-that-everything-is-okay",level:3},{value:"7. Assistant registration",id:"7-assistant-registration",level:3}];function h(e){const s={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"monetize-your-open-ai-assistant",children:"Monetize your Open AI Assistant"})}),"\n",(0,i.jsxs)(s.p,{children:["With Nevermined is possible to monetize any assistant you created via ",(0,i.jsx)(s.a,{href:"https://platform.openai.com/assistants",children:"OpenAI"}),". In previous tutorials we showed ",(0,i.jsx)(s.a,{href:"register-agent",children:"how to register an AI agent"}),". Now it's time to distribute and monetize a different type of an AI Agent, in this case an OpenAI assistant."]}),"\n",(0,i.jsx)(s.admonition,{type:"note",children:(0,i.jsxs)(s.p,{children:["You can't register an OpenAI assistant without first configuring a Payment Plan. So if you skipped that part, please go to the tutorial about ",(0,i.jsx)(s.a,{href:"/docs/tutorials/builders/create-plan",children:"How to create a Payment Plan"})," first."]})}),"\n",(0,i.jsx)(s.h2,{id:"before-you-start",children:"Before you start"}),"\n",(0,i.jsx)(s.p,{children:"Before you start, you need to have the Open AI Assistant ID and the Open AI access token. If you don't have them yet, please follow the steps:"}),"\n",(0,i.jsx)(s.h3,{id:"from-where-can-i-get-the-assistant-id",children:"From where can I get the Assistant ID?"}),"\n",(0,i.jsxs)(s.p,{children:["The Assistant ID is a unique identifier for your assistant. You can find it in the ",(0,i.jsx)(s.a,{href:"https://platform.openai.com/assistants",children:"Assistant dashboard of OpenAI"}),". The Assistant ID is the value starting by ",(0,i.jsx)(s.code,{children:"asst_"})," in the ID column. For example: ",(0,i.jsx)(s.code,{children:"asst_m3hDiBSEScF4vTyeGGJ8JI8T"}),"."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/builders/assistants/assistant_id_openai.png",width:"600"})}),"\n",(0,i.jsx)(s.h3,{id:"from-where-can-i-copy-open-ai-access-token",children:"From where can I copy Open AI access token?"}),"\n",(0,i.jsxs)(s.p,{children:["The Open AI access token or  secret API Key is the token that allows to use your assistant remotely. We recommend to create a new one from the ",(0,i.jsx)(s.a,{href:"https://platform.openai.com/api-keys",children:"OpenAI API Keys"})," page."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/builders/assistants/access_toke_openai.png",width:"600"})}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"The OpenAI access token is private and encrypted. It will never be shared with anyone."})}),"\n",(0,i.jsx)(s.h2,{id:"how-to-register-an-openai-assistant",children:"How to register an OpenAI assistant"}),"\n",(0,i.jsx)(s.p,{children:"These are the steps to make your assistant accessible to Users that buy your Payment Plan."}),"\n",(0,i.jsx)(s.h3,{id:"1-open-the-new-asset-page",children:"1. Open the New Asset page"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"Click on the New button in the top right to go the New Asset page."}),"\n",(0,i.jsx)(s.li,{children:'Click on the \u201cCreate Asset\u201d button of the "OpenAI Assistants" box.'}),"\n"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/builders/new-assistant-tile.png"})}),"\n",(0,i.jsx)(s.h3,{id:"2-describe-the-openai-assistant-with-metadata",children:"2. Describe the OpenAI assistant with metadata"}),"\n",(0,i.jsx)(s.h4,{id:"provide-a-short-title",children:"Provide a short title"}),"\n",(0,i.jsx)(s.h4,{id:"add-a-description",children:"Add a description"}),"\n",(0,i.jsx)(s.p,{children:"Use the description box to explain to potential users what your assistant is about. Some examples:"}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:(0,i.jsx)(s.em,{children:"An OpenAI assistant that helps you solve math problems..."})}),"\n"]}),"\n",(0,i.jsx)(s.h4,{id:"include-tags-optional",children:"Include tags (optional)"}),"\n",(0,i.jsx)(s.p,{children:"Add tags to help search for your OpenAI assistant.\nClick the '+' symbol to add new tags."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"OpenAI Assistant Details",src:t(9881).A+"",width:"1518",height:"1205"})}),"\n",(0,i.jsx)(s.h3,{id:"3-define-the-attributes-of-the-openai-assistant",children:"3. Define the attributes of the OpenAI assistant"}),"\n",(0,i.jsxs)(s.p,{children:["In this second step you need to provide the ",(0,i.jsx)(s.strong,{children:"required"})," assistant ID and the access token of your OpenAI agent. Please follow these steps on ",(0,i.jsx)(s.a,{href:"/docs/tutorials/builders/openai-assistant",children:"How to create an OpenAI agent"})]}),"\n",(0,i.jsx)(s.admonition,{type:"info",children:(0,i.jsx)(s.p,{children:"PLEASE NOTE: Your authentication information is encrypted and will always be kept private. Nevermined, nor anyone else, will never have access to this information."})}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"OpenAI Assistant Details",src:t(3856).A+"",width:"1558",height:"741"})}),"\n",(0,i.jsx)(s.h3,{id:"4-add-integration-instructions",children:"4. Add integration instructions"}),"\n",(0,i.jsxs)(s.p,{children:["Give specific info about how other Builders can integrate your OpenAI assistant. This information is ",(0,i.jsx)(s.strong,{children:"optional"}),". For example:"]}),"\n",(0,i.jsxs)(s.ul,{children:["\n",(0,i.jsx)(s.li,{children:"How to write queries"}),"\n",(0,i.jsx)(s.li,{children:"Format"}),"\n"]}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"OpenAI Assistant Integration",src:t(607).A+"",width:"661",height:"700"})}),"\n",(0,i.jsx)(s.h3,{id:"5-choose-a-payment-plan",children:"5. Choose a Payment Plan"}),"\n",(0,i.jsx)(s.p,{children:"Next, you need to specify which Payment Plan a user needs to purchase to get access to the OpenAI assistant."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Assistant Plan",src:t(9517).A+"",width:"1000",height:"474"})}),"\n",(0,i.jsxs)(s.p,{children:["If the subscription is ",(0,i.jsx)(s.strong,{children:"Limited by usage"}),", you will need to specify how many credits are consumed every time a user accesses the OpenAI assistant. This is very useful to ",(0,i.jsx)(s.strong,{children:"protect"})," your OpenAI assistant against ",(0,i.jsx)(s.strong,{children:"overuse"}),"."]}),"\n",(0,i.jsx)(s.admonition,{type:"tip",children:(0,i.jsx)(s.p,{children:"If you want your assistant to be available via different plans, you can go through this process once more.\nRegister the OpenAI assistant again and add it to another Payment Plan. For now ;-)"})}),"\n",(0,i.jsx)(s.h3,{id:"6-review-that-everything-is-okay",children:"6. Review that everything is okay"}),"\n",(0,i.jsxs)(s.p,{children:["Finally, review your assistant subscription. Click on \u201cCreate\u201d if everything looks good. Or go \u201cBack\u201d if you want to modify anything.\n",(0,i.jsx)(s.img,{alt:"Assistant Review",src:t(686).A+"",width:"2107",height:"1686"})]}),"\n",(0,i.jsx)(s.h3,{id:"7-assistant-registration",children:"7. Assistant registration"}),"\n",(0,i.jsx)(s.p,{children:"The Nevermined App will register the new OpenAI assistant. This will take just a few seconds and once it's done, you will see a success message."}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.img,{alt:"Registered Assistant page",src:t(5472).A+"",width:"1026",height:"820"})}),"\n",(0,i.jsx)(s.hr,{}),"\n",(0,i.jsx)(s.p,{children:(0,i.jsx)(s.strong,{children:"You\u2019re done!"})}),"\n",(0,i.jsxs)(s.p,{children:["If you are interested on promoting your new OpenAI assistant and make some money, please go to the tutorial about ",(0,i.jsx)(s.a,{href:"/docs/tutorials/builders/distribute",children:"How to distribute your AI services and files and make some money?"}),"."]})]})}function c(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},9881:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-01-OpenAI-Assistant-Description-834946e0e2fef6e2c8d3fb29c8649137.png"},3856:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-02-OpenAI-Assistant-Details-6bf7bebc52350f154e77e269f071807d.png"},607:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-03-OpenAI-Assistant-Integration-7f5fbadc5c17d0a1493fdb2c5b4202cf.png"},686:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-04-OpenAI-Assistant-Review-d45f63e3493566068748837de867f88c.png"},5472:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-05-OpenAI-Assistant-Result-f038aea0887748f3b35a54f5f5a5dedb.png"},9517:(e,s,t)=>{t.d(s,{A:()=>n});const n=t.p+"assets/images/11-06-OpenAI-Assistant-Plan-faac99bab26a3b89b84ce3172f816dbf.png"},8453:(e,s,t)=>{t.d(s,{R:()=>o,x:()=>r});var n=t(6540);const i={},a=n.createContext(i);function o(e){const s=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function r(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),n.createElement(a.Provider,{value:s},e.children)}}}]);