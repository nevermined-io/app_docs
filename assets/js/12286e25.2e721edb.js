"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[5504],{1045:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"tutorials/builders/register-agent","title":"How to register your AI Agent and link to a Pricing Plan","description":"How to register your AI Agent and link to a Pricing Plan","source":"@site/docs/tutorials/builders/05-register-agent.md","sourceDirName":"tutorials/builders","slug":"/tutorials/builders/register-agent","permalink":"/docs/tutorials/builders/register-agent","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6,"description":"How to register your AI Agent and link to a Pricing Plan"},"sidebar":"tutorialSidebar","previous":{"title":"How to create a Pricing Plan","permalink":"/docs/tutorials/builders/create-plan"},"next":{"title":"How to register your file Agents and link to a Pricing Plan","permalink":"/docs/tutorials/builders/register-file-asset"}}');var o=n(4848),s=n(8453);const r={sidebar_position:6,description:"How to register your AI Agent and link to a Pricing Plan"},a="How to register your AI Agent and link to a Pricing Plan",d={},c=[{value:"How to register an AI Agent",id:"how-to-register-an-ai-agent",level:2},{value:"1. Open the New Agent page",id:"1-open-the-new-agent-page",level:3},{value:"2. Describe the AI Agent with metadata",id:"2-describe-the-ai-agent-with-metadata",level:3},{value:"Provide a short title",id:"provide-a-short-title",level:4},{value:"Add a description",id:"add-a-description",level:4},{value:"Include a cover image and/or tags (optional)",id:"include-a-cover-image-andor-tags-optional",level:4},{value:"3. Define the attributes of the AI Agent",id:"3-define-the-attributes-of-the-ai-agent",level:3},{value:"Do you want to use the Nevermined AI Hub?",id:"do-you-want-to-use-the-nevermined-ai-hub",level:4},{value:"Include OpenAPI document",id:"include-openapi-document",level:4},{value:"Include the endpoint URL",id:"include-the-endpoint-url",level:4},{value:"Add the access token",id:"add-the-access-token",level:4},{value:"4. Choose a Pricing Plan",id:"4-choose-a-pricing-plan",level:3},{value:"5. Review that everything is okay",id:"5-review-that-everything-is-okay",level:3},{value:"6. Agent registration",id:"6-agent-registration",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"how-to-register-your-ai-agent-and-link-to-a-pricing-plan",children:"How to register your AI Agent and link to a Pricing Plan"})}),"\n",(0,o.jsxs)(t.p,{children:["In a previous tutorial we showed ",(0,o.jsx)(t.a,{href:"create-plan",children:"how to create a Pricing Plan"}),". Here we go through the required steps of registering a new AI Agent or service and linking it to your Pricing Plan. Users who purchase a plan will get access to the AI Agents or services that are included in the plan."]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.p,{children:["You can't register an AI Agent without first configuring a Pricing Plan. So if you skipped that part, please go to the tutorial about ",(0,o.jsx)(t.a,{href:"create-plan",children:"How to create a Pricing Plan"})," first."]})}),"\n",(0,o.jsx)(t.p,{children:"If you don't want to read the whole tutorial, you can watch the video tutorial:"}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("iframe",{width:"840",height:"470",src:"https://www.youtube.com/embed/65rVHScjoGU?si=UkrpJK7tjtoXGlWE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0})}),"\n",(0,o.jsx)(t.h2,{id:"how-to-register-an-ai-agent",children:"How to register an AI Agent"}),"\n",(0,o.jsx)(t.p,{children:"These are the necessary steps to make your Agent or service accessible to Users that buy your Pricing Plan."}),"\n",(0,o.jsx)(t.h3,{id:"1-open-the-new-agent-page",children:"1. Open the New Agent page"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Click on the New button in the top right to go to the New Agent page."}),"\n",(0,o.jsx)(t.li,{children:'Click on the "Create Agent" button of the "AI Apps/Agents" box.'}),"\n"]}),"\n",(0,o.jsx)("p",{align:"center",children:(0,o.jsx)("img",{src:"/images/tutorials/builders/new-agent-tile.png"})}),"\n",(0,o.jsx)(t.h3,{id:"2-describe-the-ai-agent-with-metadata",children:"2. Describe the AI Agent with metadata"}),"\n",(0,o.jsx)(t.h4,{id:"provide-a-short-title",children:"Provide a short title"}),"\n",(0,o.jsx)(t.h4,{id:"add-a-description",children:"Add a description"}),"\n",(0,o.jsx)(t.p,{children:"Use the description box to explain to potential users what your Agent is about. Some examples:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"An open source summarizer specialized in scientific research"})}),"\n",(0,o.jsx)(t.li,{children:(0,o.jsx)(t.em,{children:"A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Llama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..."})}),"\n"]}),"\n",(0,o.jsx)(t.h4,{id:"include-a-cover-image-andor-tags-optional",children:"Include a cover image and/or tags (optional)"}),"\n",(0,o.jsx)(t.p,{children:"Add tags or a cover image that helps make your Agent look better for users.\nClick the '+' symbol to add new tags or the upload button to add a cover image."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AI Agent Description",src:n(7133).A+"",width:"2085",height:"1209"})}),"\n",(0,o.jsx)(t.h3,{id:"3-define-the-attributes-of-the-ai-agent",children:"3. Define the attributes of the AI Agent"}),"\n",(0,o.jsx)(t.p,{children:"In this second step you need to provide some information about how your Agent works."}),"\n",(0,o.jsx)(t.h4,{id:"do-you-want-to-use-the-nevermined-ai-hub",children:"Do you want to use the Nevermined AI Hub?"}),"\n",(0,o.jsxs)(t.p,{children:["If ",(0,o.jsx)(t.strong,{children:"No"}),", you can benefit from Nevermined infrastructure to host the interface of your AI Agent. If you choose ",(0,o.jsx)(t.strong,{children:"Yes"}),", you will need to provide the URLs of your Agent and the authentication credentials to access the service."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Please read more about the ",(0,o.jsx)(t.a,{href:"../../environments/ai-hub",children:"Nevermined AI Hub"})," to understand the benefits of using it."]})}),"\n",(0,o.jsxs)(t.p,{children:["If you choose ",(0,o.jsx)(t.strong,{children:"No"}),', you will need to answer the following question: "Is the Agent going to use the Nevermined Query Protocol?"']}),"\n",(0,o.jsxs)(t.p,{children:["If you choose ",(0,o.jsx)(t.strong,{children:"Yes"}),", that means your Agent is compatible with the ",(0,o.jsx)(t.a,{href:"https://docs.nevermined.io/docs/protocol/query-protocol",children:"Nevermined Query Protocol"}),". This protocol is a standard way to query AI Agents and services. That helps to make your Agent more discoverable and usable by other users and facilitates the integration with your Agent.\nIf you choose ",(0,o.jsx)(t.strong,{children:"No"}),", you will need to provide the URL of the Open API definition of the API and the authentication credentials to access the service."]}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsxs)(t.p,{children:["Please read more about the ",(0,o.jsx)(t.a,{href:"https://docs.nevermined.io/docs/protocol/query-protocol",children:"Nevermined Query Protocol"})," to understand the benefits of using it."]})}),"\n",(0,o.jsx)(t.h4,{id:"include-openapi-document",children:"Include OpenAPI document"}),"\n",(0,o.jsx)(t.p,{children:"You can use OpenAPI integration to import the information about the endpoints automatically. Make sure that when you are developing the service, the technology or framework you are using enables the generation of documentation for your API's endpoints according to the OpenAPI specifications."}),"\n",(0,o.jsxs)(t.p,{children:["Add the URL of the OpenAPI document, and when you click on the ",(0,o.jsx)(t.strong,{children:'"+"'})," button, the App will import the information of the endpoints. Use the ",(0,o.jsx)(t.strong,{children:'"-"'})," button if you want to remove some of the endpoints imported."]}),"\n",(0,o.jsx)(t.h4,{id:"include-the-endpoint-url",children:"Include the endpoint URL"}),"\n",(0,o.jsxs)(t.p,{children:["If your service does not provide OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint APIs of your AI service or Agent (e.g. ",(0,o.jsx)(t.code,{children:"https://myapi.example.com/v1"}),") using the ",(0,o.jsx)(t.strong,{children:'"+"'})," button."]}),"\n",(0,o.jsxs)(t.p,{children:["Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example:\n",(0,o.jsx)(t.code,{children:"https://myapi.example.com/(.*)"})," will expose all the endpoints under the same domain.\nAlso you can write URLs with tokens like ",(0,o.jsx)(t.code,{children:"https://myapi.example.com/user/{userId}"})," or ",(0,o.jsx)(t.code,{children:"https://myapi.example.com/user/:userId"}),", however it will be transformed to a wildcard like this example ",(0,o.jsx)(t.code,{children:"https://myapi.example.com/user/(.*)"})]}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AI Agent Endpoints",src:n(4378).A+"",width:"1626",height:"799"})}),"\n",(0,o.jsx)(t.h4,{id:"add-the-access-token",children:"Add the access token"}),"\n",(0,o.jsx)(t.p,{children:"In case the endpoints of your AI Agent or service are protected with an authentication token or a user/password mechanism, you need to add this information."}),"\n",(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"PLEASE NOTE: Your authentication information is encrypted and will always be kept private. Nevermined, nor anyone else, will never have access to this information."})}),"\n",(0,o.jsx)(t.p,{children:"Nevermined can protect the access to an Agent that uses an HTTP Bearer token or user/password mechanism for authentication."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"AI Agent Authentication",src:n(9170).A+"",width:"1269",height:"374"})}),"\n",(0,o.jsx)(t.h3,{id:"4-choose-a-pricing-plan",children:"4. Choose a Pricing Plan"}),"\n",(0,o.jsx)(t.p,{children:"Next, you need to specify which Pricing Plan a user needs to purchase to get access to the AI Agent."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Agent Plan",src:n(8948).A+"",width:"1626",height:"584"})}),"\n",(0,o.jsxs)(t.p,{children:["If the subscription is ",(0,o.jsx)(t.strong,{children:"Limited by usage"}),", you will need to specify how many credits are consumed every time a user accesses the AI Agent. This is very useful to ",(0,o.jsx)(t.strong,{children:"protect"})," your AI service against ",(0,o.jsx)(t.strong,{children:"overuse"}),"."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"If you want your Agent to be available via different plans, you can go through this process once more.\nRegister the AI Agent again and add it to another Pricing Plan. For now ;-)"})}),"\n",(0,o.jsx)(t.h3,{id:"5-review-that-everything-is-okay",children:"5. Review that everything is okay"}),"\n",(0,o.jsxs)(t.p,{children:['Finally, review your web service subscription. Click on "Create" if everything looks good. Or go "Back" if you want to modify anything.\n',(0,o.jsx)(t.img,{alt:"Agent Review",src:n(1834).A+"",width:"3441",height:"1271"})]}),"\n",(0,o.jsx)(t.h3,{id:"6-agent-registration",children:"6. Agent registration"}),"\n",(0,o.jsx)(t.p,{children:"The Nevermined App will register the new AI service or Agent. This will take just a few seconds and once it's done, you will see a success message."}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"Register Agent page",src:n(7586).A+"",width:"935",height:"576"})}),"\n",(0,o.jsx)(t.hr,{}),"\n",(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"You're done!"})}),"\n",(0,o.jsxs)(t.p,{children:["If you are interested in promoting your new AI Agent or Service and making some money, please go to the tutorial about ",(0,o.jsx)(t.a,{href:"/docs/tutorials/builders/distribute",children:"How to distribute your AI Agents or services and files and make some money"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}},7133:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/05-01-Webservice-Describe-c8fadedf6b17f9cf77b086950ad887e8.png"},1834:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/05-05-Webservice-Review-3640f0b6f637f17f4d2a25994b734113.png"},7586:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/added_asset_plan-056cb4547ad44eedc653ebfcc2f7dc56.png"},9170:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ai-agent-authentication-331114853f46a2de7e8a418752b4bdb7.png"},4378:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ai-agent-endpoints-c970adee7039afce83043513c36e7424.png"},8948:(e,t,n)=>{n.d(t,{A:()=>i});const i=n.p+"assets/images/ai-agent-subscription-credits-2ca507dac538876e9a09a5fe69cca5ba.png"},8453:(e,t,n)=>{n.d(t,{R:()=>r,x:()=>a});var i=n(6540);const o={},s=i.createContext(o);function r(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:t},e.children)}}}]);