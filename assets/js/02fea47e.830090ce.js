"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8320],{5493:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>a,toc:()=>d});var s=i(5893),n=i(1151);const r={sidebar_position:6,description:"How to register your AI web service and link to a Smart Subscription"},o="How to register your AI web service and link to a Smart Subscription",a={id:"tutorials/builders/register-webservice",title:"How to register your AI web service and link to a Smart Subscription",description:"How to register your AI web service and link to a Smart Subscription",source:"@site/docs/tutorials/builders/05-register-webservice.md",sourceDirName:"tutorials/builders",slug:"/tutorials/builders/register-webservice",permalink:"/docs/tutorials/builders/register-webservice",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/builders/05-register-webservice.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How to register your AI web service and link to a Smart Subscription"},sidebar:"tutorialSidebar",previous:{title:"How to create a Smart Subscription",permalink:"/docs/tutorials/builders/create-subscription"},next:{title:"How to register your file assets and link to a Smart Subscription",permalink:"/docs/tutorials/builders/register-file-asset"}},c={},d=[{value:"How to register an AI web service",id:"how-to-register-an-ai-web-service",level:2},{value:"1. Open the New Asset page",id:"1-open-the-new-asset-page",level:3},{value:"2. Describe the AI service with metadata",id:"2-describe-the-ai-service-with-metadata",level:3},{value:"Provide a short title",id:"provide-a-short-title",level:4},{value:"Add a description",id:"add-a-description",level:4},{value:"Include tags (optional)",id:"include-tags-optional",level:4},{value:"3. Define the attributes of the AI service",id:"3-define-the-attributes-of-the-ai-service",level:3},{value:"Include OpenAPI document",id:"include-openapi-document",level:4},{value:"Include the endpoint URL",id:"include-the-endpoint-url",level:4},{value:"Add the access token",id:"add-the-access-token",level:4},{value:"4. Add integration instructions",id:"4-add-integration-instructions",level:3},{value:"5. Choose a Smart Subscription plan",id:"5-choose-a-smart-subscription-plan",level:3},{value:"6. Review that everything is okay",id:"6-review-that-everything-is-okay",level:3},{value:"7. Web service registration",id:"7-web-service-registration",level:3}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"how-to-register-your-ai-web-service-and-link-to-a-smart-subscription",children:"How to register your AI web service and link to a Smart Subscription"}),"\n",(0,s.jsxs)(t.p,{children:["In a previous tutorial we showed ",(0,s.jsx)(t.a,{href:"create-subscription",children:"how to create a Smart Subscription"}),". Here we go through the required steps of registering a new AI web service and linking it to your Smart Subscription. User who purchase a subscription will get access to the AI web service that is included in the subscription plan."]}),"\n",(0,s.jsx)(t.admonition,{type:"note",children:(0,s.jsxs)(t.p,{children:["You can't register an AI Service without first configuring a Smart Subscription. So if you skipped that part, please go to the tutorial about ",(0,s.jsx)(t.a,{href:"/docs/tutorials/builders/create-subscription",children:"How to create a Smart Subscription"})," first."]})}),"\n",(0,s.jsx)(t.p,{children:"If you don't want to read the whole tutorial, you can watch the video tutorial:"}),"\n",(0,s.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/65rVHScjoGU?si=UkrpJK7tjtoXGlWE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,s.jsx)(t.h2,{id:"how-to-register-an-ai-web-service",children:"How to register an AI web service"}),"\n",(0,s.jsx)(t.p,{children:"These are the steps to make your web service accessible to Users that buy your Smart Subscription."}),"\n",(0,s.jsx)(t.h3,{id:"1-open-the-new-asset-page",children:"1. Open the New Asset page"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Click on the New button in the top right to go the New Asset page."}),"\n",(0,s.jsx)(t.li,{children:'Click on the \u201cCreate Asset\u201d button of the "AI Apps/Agents" box.'}),"\n"]}),"\n",(0,s.jsx)("p",{align:"center",children:(0,s.jsx)("img",{src:"/images/tutorials/builders/new-agent-tile.png"})}),"\n",(0,s.jsx)(t.h3,{id:"2-describe-the-ai-service-with-metadata",children:"2. Describe the AI service with metadata"}),"\n",(0,s.jsx)(t.h4,{id:"provide-a-short-title",children:"Provide a short title"}),"\n",(0,s.jsx)(t.h4,{id:"add-a-description",children:"Add a description"}),"\n",(0,s.jsx)(t.p,{children:"Use the description box to explain to potential users what your web service is about. Some examples:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:"An open source summarizer specialised in scientific research"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.em,{children:"A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Llama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..."})}),"\n"]}),"\n",(0,s.jsx)(t.h4,{id:"include-tags-optional",children:"Include tags (optional)"}),"\n",(0,s.jsx)(t.p,{children:"Add tags to help search for your AI Web Service.\nClick the '+' symbol to add new tags."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AI Agent Description",src:i(9466).Z+"",width:"1000",height:"612"})}),"\n",(0,s.jsx)(t.h3,{id:"3-define-the-attributes-of-the-ai-service",children:"3. Define the attributes of the AI service"}),"\n",(0,s.jsx)(t.p,{children:"In this second step you need to provide the endpoint URLs of your AI Web Service and the authentication credentials to access the service."}),"\n",(0,s.jsx)(t.h4,{id:"include-openapi-document",children:"Include OpenAPI document"}),"\n",(0,s.jsx)(t.p,{children:"You can use OpenAPI integration to import the information about the endpoints automatically. Make sure that when you are developing the service that the technology or framework you are using enables the generation of documentation for your API's endpoints according to the OpenAPI specifications."}),"\n",(0,s.jsxs)(t.p,{children:["Add the Url of the OpenAPI document, and when you click on the  ",(0,s.jsx)(t.strong,{children:"\u201c+\u201d"})," button, the App will import the information of the endpoints. Use the  ",(0,s.jsx)(t.strong,{children:"\u201c-\u201d"})," button if you want to remove some of endpoints imported."]}),"\n",(0,s.jsx)(t.h4,{id:"include-the-endpoint-url",children:"Include the endpoint URL"}),"\n",(0,s.jsxs)(t.p,{children:["If your service does not provide an OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint API of your AI service or agent (e.g. ",(0,s.jsx)(t.code,{children:"https://myapi.example.com/v1"}),") using the ",(0,s.jsx)(t.strong,{children:"\u201c+\u201d"})," button."]}),"\n",(0,s.jsxs)(t.p,{children:["Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example:\n",(0,s.jsx)(t.code,{children:"https://myapi.example.com/(.*)"})," will expose all the endpoints under the same domain.\nAlso you can write URLs with tokens like ",(0,s.jsx)(t.code,{children:"https://myapi.example.com/user/{userId}"})," or ",(0,s.jsx)(t.code,{children:"https://myapi.example.com/user/:userId"}),", however it will be transformed to wildcard like this example ",(0,s.jsx)(t.code,{children:"https://myapi.example.com/user/(.*)"})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AI Agent Endpoints",src:i(9950).Z+"",width:"1776",height:"613"})}),"\n",(0,s.jsx)(t.h4,{id:"add-the-access-token",children:"Add the access token"}),"\n",(0,s.jsx)(t.p,{children:"In case the endpoints of your AI Service are protected with an authentication token or a user/password mechanism, you need to add this information."}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsx)(t.p,{children:"PLEASE NOTE: Your authentication information is encrypted and will always be kept private. Nevermined, nor anyone else, will never have access to this information."})}),"\n",(0,s.jsx)(t.p,{children:"Nevermined can protect the access to a web service that uses a HTTP Bearer token or user/password mechanism for authentication."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"AI Agent Authentication",src:i(614).Z+"",width:"1269",height:"374"})}),"\n",(0,s.jsx)(t.h3,{id:"4-add-integration-instructions",children:"4. Add integration instructions"}),"\n",(0,s.jsxs)(t.p,{children:["Give specific info about how other Builders can integrate your AI Service. This information is ",(0,s.jsx)(t.strong,{children:"optional"}),". For example:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Tech Spec"}),"\n",(0,s.jsx)(t.li,{children:"API Calls"}),"\n",(0,s.jsx)(t.li,{children:"Supported formats"}),"\n",(0,s.jsx)(t.li,{children:"Response info (error messages etc)"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Service Integration",src:i(2345).Z+"",width:"875",height:"790"})}),"\n",(0,s.jsx)(t.h3,{id:"5-choose-a-smart-subscription-plan",children:"5. Choose a Smart Subscription plan"}),"\n",(0,s.jsx)(t.p,{children:"Next, you need to specify which Smart Subscription a user needs to purchase to get access to the AI service."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Service Plan",src:i(1749).Z+"",width:"1207",height:"715"})}),"\n",(0,s.jsxs)(t.p,{children:["If the subscription is ",(0,s.jsx)(t.strong,{children:"Limitted by usage"}),", you will need to specify how many credits are consumed every time a user accesses the AI service. This is very useful to ",(0,s.jsx)(t.strong,{children:"protect"})," your AI service against ",(0,s.jsx)(t.strong,{children:"overuse"}),"."]}),"\n",(0,s.jsx)(t.admonition,{type:"tip",children:(0,s.jsx)(t.p,{children:"If you want your web service to be available via different plans, you can go through this process once more.\nRegister the AI Web Service again and add it to another Smart Subscription plan. For now ;-)"})}),"\n",(0,s.jsx)(t.h3,{id:"6-review-that-everything-is-okay",children:"6. Review that everything is okay"}),"\n",(0,s.jsxs)(t.p,{children:["Finally, review your web service subscription. Click on \u201cCreate\u201d if everything looks good. Or go \u201cBack\u201d if you want to modify anything.\n",(0,s.jsx)(t.img,{alt:"Service Review",src:i(4540).Z+"",width:"2117",height:"1354"})]}),"\n",(0,s.jsx)(t.h3,{id:"7-web-service-registration",children:"7. Web service registration"}),"\n",(0,s.jsx)(t.p,{children:"The Nevermined App will register the new AI service or agent. This will take just a few seconds and once it's done, you will see a success message."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Register Web Service page",src:i(3360).Z+"",width:"1073",height:"709"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.strong,{children:"You\u2019re done!"})}),"\n",(0,s.jsxs)(t.p,{children:["If you are interested on promoting your new AI Service and make some money, please to the tutorial about ",(0,s.jsx)(t.a,{href:"/docs/tutorials/builders/distribute",children:"How to distribute your AI services and files and make some money"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,n.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},9466:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/05-01-Webservice-Describe-886d6b522c556ccb815288eb71ad95c6.png"},4540:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/05-05-Webservice-Review-400da037263dd73b9d2a86f150a11c32.png"},3360:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/10_New_Service_05-2250933607eacef752b9c5b7741b2569.png"},2345:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ai-agent-additional-info-0df4ee13cc9dabdadf01fbbf5b405aaa.png"},614:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ai-agent-authentication-331114853f46a2de7e8a418752b4bdb7.png"},9950:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ai-agent-endpoints-070908dd373beb3b88e4b381e6a10e5c.png"},1749:(e,t,i)=>{i.d(t,{Z:()=>s});const s=i.p+"assets/images/ai-agent-subscription-credits-0a6243948b626e7ea63b1a65f206d0cf.png"},1151:(e,t,i)=>{i.d(t,{Z:()=>a,a:()=>o});var s=i(7294);const n={},r=s.createContext(n);function o(e){const t=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),s.createElement(r.Provider,{value:t},e.children)}}}]);