"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6804],{3905:(e,t,i)=>{i.d(t,{Zo:()=>p,kt:()=>h});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function a(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)i=o[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):a(a({},t),e)),i},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(i),h=n,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||o;return i?r.createElement(m,a(a({ref:t},p),{},{components:i})):r.createElement(m,a({ref:t},p))}));function h(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=i.length,a=new Array(o);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var c=2;c<o;c++)a[c]=i[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43276:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=i(87462),n=(i(67294),i(3905));const o={sidebar_position:6,description:"How to register your web service and link to a Smart Subscription"},a="How to register your AI web service and link to a Smart Subscription",s={unversionedId:"tutorials/first-steps/register-webservice",id:"tutorials/first-steps/register-webservice",title:"How to register your AI web service and link to a Smart Subscription",description:"How to register your web service and link to a Smart Subscription",source:"@site/docs/tutorials/first-steps/05-register-webservice.md",sourceDirName:"tutorials/first-steps",slug:"/tutorials/first-steps/register-webservice",permalink:"/docs/tutorials/first-steps/register-webservice",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/first-steps/05-register-webservice.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How to register your web service and link to a Smart Subscription"},sidebar:"tutorialSidebar",previous:{title:"How to create a Smart Subscription",permalink:"/docs/tutorials/first-steps/create-subscription"},next:{title:"How to register your dataset and link to a Smart Subscription",permalink:"/docs/tutorials/first-steps/register-dataset"}},l={},c=[{value:"Before you start",id:"before-you-start",level:2},{value:"How to register an AI web service",id:"how-to-register-an-ai-web-service",level:2},{value:"1. Open the New Asset page",id:"1-open-the-new-asset-page",level:3},{value:"2. Describe the web service with metadata",id:"2-describe-the-web-service-with-metadata",level:3},{value:"Provide a short title",id:"provide-a-short-title",level:4},{value:"Add a description",id:"add-a-description",level:4},{value:"Include tags",id:"include-tags",level:4},{value:"3. Define the attributes of the web service",id:"3-define-the-attributes-of-the-web-service",level:3},{value:"Include OpenAPI document",id:"include-openapi-document",level:4},{value:"Include the endpoint URL",id:"include-the-endpoint-url",level:4},{value:"Add the access token",id:"add-the-access-token",level:4},{value:"4. Add integration instructions",id:"4-add-integration-instructions",level:3},{value:"5. Choose a subscription plan",id:"5-choose-a-subscription-plan",level:3},{value:"6. Review everything is okay",id:"6-review-everything-is-okay",level:3},{value:"7. Web service registration",id:"7-web-service-registration",level:3},{value:"8. Distribute and make some money",id:"8-distribute-and-make-some-money",level:3}],p={toc:c};function u(e){let{components:t,...o}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"how-to-register-your-ai-web-service-and-link-to-a-smart-subscription"},"How to register your AI web service and link to a Smart Subscription"),(0,n.kt)("p",null,"In a previous tutorial we showed how to create a Smart Subscription. Here we go through the required steps of registering a new AI web service and link it to your Smart Subscription. Owners who purchase that subscription will get access to the AI web service that is included in the plan. "),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can't register an asset without first configuring a Smart Subscription. So if you skipped that part, please go to the tutorial about ",(0,n.kt)("a",{parentName:"p",href:"/docs/tutorials/first-steps/create-subscription"},"How to create a Smart Subscription")," first.")),(0,n.kt)("h2",{id:"before-you-start"},"Before you start"),(0,n.kt)("p",null,"Currently, the Nevermined App is deployed on the ",(0,n.kt)("a",{parentName:"p",href:"https://matic.nevermined.app"},"Polygon"),", ",(0,n.kt)("a",{parentName:"p",href:"https://gnosis.nevermined.app"},"Gnosis")," and ",(0,n.kt)("a",{parentName:"p",href:"https://nevermined.app"},"Arbitrum")," networks (plus on their respective ",(0,n.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/metamask-networks/"},"testnets"),"). "),(0,n.kt)("p",null,"In order to interact with that network you need to:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Connect your MetaMask wallet to the relevant network (instructions ",(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/first-steps/metamask-networks"},"here"),")."),(0,n.kt)("li",{parentName:"ol"},"Get the right tokens to pay for the transaction fees on that network (instructions ",(0,n.kt)("a",{parentName:"li",href:"/docs/tutorials/first-steps/metamask-tokens"},"here"),")")),(0,n.kt)("h2",{id:"how-to-register-an-ai-web-service"},"How to register an AI web service"),(0,n.kt)("p",null,"These are the steps to make your web service accessible to holders of your Smart Subscription."),(0,n.kt)("h3",{id:"1-open-the-new-asset-page"},"1. Open the New Asset page"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click on the New button in the top right to go the New Asset page."),(0,n.kt)("li",{parentName:"ul"},"Click on the \u201cCreate Asset\u201d button of the Web Service box.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"New Service",src:i(35929).Z,width:"1000",height:"616"})),(0,n.kt)("h3",{id:"2-describe-the-web-service-with-metadata"},"2. Describe the web service with metadata"),(0,n.kt)("h4",{id:"provide-a-short-title"},"Provide a short title"),(0,n.kt)("h4",{id:"add-a-description"},"Add a description"),(0,n.kt)("p",null,"Use the description box to explain to potential users what your web service is about. Some examples:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"An open source summarizer specialised in scientific research")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("em",{parentName:"li"},"A chatbot-style AI Agent that generates quotes based on Elvis lyrics. Built using Lllama Index and an open source LLM. Good for devs who want to have some fun, build a Discord bot,..."))),(0,n.kt)("h4",{id:"include-tags"},"Include tags"),(0,n.kt)("p",null,"Add tags to help buyers find your AI Web Service in the Nevermined marketplace.\nClick the '+' symbol to add new tags. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service Description",src:i(89466).Z,width:"1000",height:"612"})),(0,n.kt)("h3",{id:"3-define-the-attributes-of-the-web-service"},"3. Define the attributes of the web service"),(0,n.kt)("p",null,"In this second step you need to provide the endpoints URLs of your AI Web Service and the authentication credentials to access the service."),(0,n.kt)("h4",{id:"include-openapi-document"},"Include OpenAPI document"),(0,n.kt)("p",null," You can use OpenAPI integration to import the information about the endpoints automatically. Make sure when you are developing the service that the technology or framework you are using allows to generate the documentation of the endpoints according to the OpenAPI specifications."),(0,n.kt)("p",null," Add the Url of the OpenAPI document, and when you click on the  ",(0,n.kt)("strong",{parentName:"p"},"\u201c+\u201d")," button, Nevermined App will import the information of the endpoints. Use the  ",(0,n.kt)("strong",{parentName:"p"},"\u201c-\u201d")," button if you want to remove some of endpoints imported."),(0,n.kt)("h4",{id:"include-the-endpoint-url"},"Include the endpoint URL"),(0,n.kt)("p",null,"If you service does not provide an OpenAPI documentation, you can add the endpoints manually. Just add one or more endpoint APIs of your AI agent or model (e.g. ",(0,n.kt)("a",{parentName:"p",href:"https://myapi.example.com/v1"},"https://myapi.example.com/v1"),") using the ",(0,n.kt)("strong",{parentName:"p"},"\u201c+\u201d")," button."),(0,n.kt)("p",null,"Note that you can use this URL field to specify regular expressions. This can be useful when you want to expose multiple links at once. For example:\n",(0,n.kt)("a",{parentName:"p",href:"https://myapi.example.com/(.*)"},"https://myapi.example.com/(.*)")," will expose all the endpoints under the same domain."),(0,n.kt)("h4",{id:"add-the-access-token"},"Add the access token"),(0,n.kt)("p",null,"In case the endpoints of your AI Service are protected with an authentication token or a user/password mechanism, you need to facilitate it. "),(0,n.kt)("p",null,"Nevermined can protect the access to a web service that uses a HTTP Bearer token or user/password mechanism for authentication. Your authentication information is encrypted and will always be kept private."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service Endpoints",src:i(0).Z,width:"1197",height:"885"})),(0,n.kt)("h3",{id:"4-add-integration-instructions"},"4. Add integration instructions"),(0,n.kt)("p",null,"Give specific info about how developers can integrate your Web Service. For example:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Tech Spec"),(0,n.kt)("li",{parentName:"ul"},"API Calls "),(0,n.kt)("li",{parentName:"ul"},"Supported formats"),(0,n.kt)("li",{parentName:"ul"},"Response info (error messages etc)")),(0,n.kt)("p",null,"You can also add a visual that gives more info about your Al Web Service. Example: an image of Elvis."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service Integration",src:i(59082).Z,width:"1000",height:"631"})),(0,n.kt)("h3",{id:"5-choose-a-subscription-plan"},"5. Choose a subscription plan"),(0,n.kt)("p",null,"Next, you need to specify which subscription a user needs to purchase to get access to your web service. "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Service Plan",src:i(78302).Z,width:"1000",height:"580"})),(0,n.kt)("admonition",{type:"tip"},(0,n.kt)("p",{parentName:"admonition"},"If you want your web service to be available via different plans, you can go through this process once more.\nRegister the asset again and add it to another Smart Subscription plan. For now ;-)")),(0,n.kt)("h3",{id:"6-review-everything-is-okay"},"6. Review everything is okay"),(0,n.kt)("p",null,"Finally, review your web service subscription.\nClick on \u201cCreate\u201d if everything looks good. Or go \u201cBack\u201d if you want to modify anything.\n",(0,n.kt)("img",{alt:"Service Review",src:i(34540).Z,width:"1000",height:"690"})),(0,n.kt)("h3",{id:"7-web-service-registration"},"7. Web service registration"),(0,n.kt)("p",null,"The Nevermined App will register the new web service on the blockchain. This will require you to sign one transaction in your MetaMask wallet. As explained in \u2018Getting Ready\u2019, this requires a little bit of gas tokens to pay for the transaction fees.\n",(0,n.kt)("img",{alt:"Register Web Service page",src:i(13360).Z,width:"1968",height:"1272"})),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"8-distribute-and-make-some-money"},"8. Distribute and make some money"),(0,n.kt)("p",null,'You\u2019re done!\nGo to the "Published" tab of the "My Assets" view to get an overview of your web service(s). Use the filter on the "Search" tab if you need it.'),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"My Assets",src:i(74303).Z,width:"1309",height:"356"})),(0,n.kt)("p",null,"Click on the web service to go the Asset Detail page. "),(0,n.kt)("p",null,"Share this URL with potential buyers. They can use the 'Buy Now' button to purchase directly from you.\nIn addition, people can also automatically discover your AI web service in the Nevermined Marketplace.  "),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Asset Details",src:i(3184).Z,width:"1153",height:"733"})))}u.isMDXComponent=!0},35929:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/04_01_New_Subscription-6d5e2392d6434fa34a7ff3ce974f0b85.png"},89466:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-01-Webservice-Describe-886d6b522c556ccb815288eb71ad95c6.png"},0:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-02-Webservice-Details-d5fd389a609a57703e134c3736335fad.png"},59082:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-03-Webservice-Integration-a6070f6b7b45b6d54b70852b31d29ffe.png"},78302:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-04-Webservice-Plan-b48ccf4cd3ec572bc2b7354e8d9d2515.png"},34540:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-05-Webservice-Review-f5b6402b12ea333330f0e83fbbd3ef16.png"},74303:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-06-My-services-7e43622f2bfa56be0cf93b06f552261c.png"},3184:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/05-07-Webservice-AssetPage-c94d84b8981bee9f26c95841ca03a4a4.png"},13360:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/10_New_Service_05-12f38216bf0288250cc480f4e4348370.png"}}]);