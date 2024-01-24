"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[3685],{6214:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>s,metadata:()=>a,toc:()=>d});var i=t(5893),o=t(1151);const s={sidebar_position:10,description:"How to monetize a ChatGPT plugin using Nevermined"},r="Monetizing a ChatGPT plugin using Nevermined",a={id:"tutorials/ai/chatgpt-plugin",title:"Monetizing a ChatGPT plugin using Nevermined",description:"How to monetize a ChatGPT plugin using Nevermined",source:"@site/docs/tutorials/ai/10-chatgpt-plugin.md",sourceDirName:"tutorials/ai",slug:"/tutorials/ai/chatgpt-plugin",permalink:"/docs/tutorials/ai/chatgpt-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/ai/10-chatgpt-plugin.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{sidebar_position:10,description:"How to monetize a ChatGPT plugin using Nevermined"},sidebar:"tutorialSidebar",previous:{title:"How to expose an AI agent and publish it into Nevermined",permalink:"/docs/tutorials/ai/ai-service"},next:{title:"How to create and integrate a Hugging Face Inference Endpoint",permalink:"/docs/tutorials/ai/huggingface"}},l={},d=[{value:"Create your own ChatGPT plugin",id:"create-your-own-chatgpt-plugin",level:2},{value:"Register your ChatGPT plugin in Nevermined",id:"register-your-chatgpt-plugin-in-nevermined",level:2},{value:"Before you register your Service",id:"before-you-register-your-service",level:3},{value:"Registering your AI Service",id:"registering-your-ai-service",level:3},{value:"Defining Endpoints URLs",id:"defining-endpoints-urls",level:4},{value:"Add some metadata and associate the Smart Subscription",id:"add-some-metadata-and-associate-the-smart-subscription",level:4},{value:"Integrating your ChatGPT plugin in OpenAI",id:"integrating-your-chatgpt-plugin-in-openai",level:3},{value:"Using your ChatGPT plugin",id:"using-your-chatgpt-plugin",level:3}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"monetizing-a-chatgpt-plugin-using-nevermined",children:"Monetizing a ChatGPT plugin using Nevermined"}),"\n",(0,i.jsx)(n.p,{children:"OpenAI created the ChatGPT plugins as an extension that allow users to interact with external services. OpenAI ChatGPT provides intelligent answers to users based on the internal data crawled by OpenAI from internet until moment in time (2022) when the model was trained. OpenAI is not connected to internet and therefore it cannot provide answers to questions that are not in the internal data."}),"\n",(0,i.jsx)(n.p,{children:"As an answer to that OpenAI created the ChatGPT plugins, that allow users to connect to external services and get answers from them. The ChatGPT plugins are a way to extend the capabilities of the OpenAI ChatGPT model."}),"\n",(0,i.jsx)(n.p,{children:"Since them several organizations have created their own ChatGPT plugins, and they are available in the OpenAI marketplace."}),"\n",(0,i.jsx)(n.p,{children:"In this tutorial we are gonna describe how to publish your OpenAI ChatGPT plugin in Nevermined, so you can monetize it and share it with a broader group of users."}),"\n",(0,i.jsx)(n.h2,{id:"create-your-own-chatgpt-plugin",children:"Create your own ChatGPT plugin"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsx)(n.p,{children:"If you already created your plugin you can skip this section"})}),"\n",(0,i.jsxs)(n.p,{children:["OpenAI created the ",(0,i.jsx)(n.a,{href:"https://github.com/openai/chatgpt-retrieval-plugin",children:"ChatGPT Plugin Retrieval"})," software template to facilitate the creation of ChatGPT plugins. It provides the scafolding to integrate into the ChatGPT marketplace.\nThis software template is ",(0,i.jsx)(n.a,{href:"https://github.com/openai/chatgpt-retrieval-plugin",children:"available on Github"})," so you can copy/fork that code and implement your stuff on top of that."]}),"\n",(0,i.jsxs)(n.p,{children:["There are multiple options when you create your plugin, like the ",(0,i.jsx)(n.a,{href:"https://github.com/openai/chatgpt-retrieval-plugin#choosing-a-vector-database",children:"vector database to use"}),", but here we are gonna focus and what needs to be done to integrate your plugin with ChatGPT."]}),"\n",(0,i.jsxs)(n.p,{children:["After you find the right Vector Database and implement the logic it's important you pay attention to the ",(0,i.jsx)(n.code,{children:".well-known"})," folder:"]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Edit the ",(0,i.jsx)(n.code,{children:".well-known/ai-plugin.json"})," file. It should contain the information about your plugin, like the name, description, version, etc."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.code,{children:"auth"})," section you need to configure the authentication mechanism that validates the requests via a bearer token. See the below example for more details."]}),"\n",(0,i.jsxs)(n.li,{children:["Overwrite with your logo the ",(0,i.jsx)(n.code,{children:".well-known/logo.png"})," file"]}),"\n",(0,i.jsx)(n.li,{children:"Add your contact email and link to your website"}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Example of the ",(0,i.jsx)(n.code,{children:".well-known/ai-plugin.json"})," file completed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "schema_version": "v1",\n  "name_for_model": "retrieval",\n  "name_for_human": "Elvis Songs Summarizer",\n  "description_for_model": "Plugin for summarizing Elvis songs. Giving an Elvis title song, it summarizes the lyrics of that song.",\n  "description_for_human": "Summarizes Elvis songs giving the title.",\n  "auth": {\n    "type": "user_http",\n    "authorization_type": "bearer"\n  },\n  "api": {\n    "type": "openapi",\n    "url": "https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app/.well-known/openapi.yaml",\n    "has_user_authentication": false\n  },\n  "logo_url": "https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app/.well-known/nvm-logo.png",\n  "contact_email": "info@nevermined.io", \n  "legal_info_url": "https://nevermined.io/"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Edit the ",(0,i.jsx)(n.code,{children:".well-known/openapi.yaml"})," file. It should contain the information about your API. It's very important each endpoint included here has good documentation that helps ChatGPT to identify if the method exposed can be useful depending on the user query. So if your method analyze the sentiment of a text, you should include in the documentation the keywords that ChatGPT can use to identify your plugin as the right one to analyze the sentiment given a user query."]}),"\n",(0,i.jsxs)(n.p,{children:["Extract example of the ",(0,i.jsx)(n.code,{children:".well-known/openapi.yaml"})," file completed:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-yaml",children:"openapi: 3.0.2\ninfo:\n  title: Elvis Songs Summarizer\n  description: Plugin for summarizing Elvis songs. Giving an Elvis title song, it summarizes the lyrics of that song\n  version: 0.0.6\n  servers:\n    - url: https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app\npaths:\n  /query:\n    post:\n      summary: Query\n      description: Accepts the title of a Elvis song as a search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.\n      operationId: query_query_post\n\n[...]\n\n  /ask:\n    post:\n      summary: Summarize\n      description: Given an Elvis song title it summarizes the lyrics of that song. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.\n      operationId: ask_query_post\n\n[...]      \n"})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["You can find a complete example in the Nevermined ",(0,i.jsx)(n.a,{href:"https://github.com/nevermined-io/chatgpt-elvis-plugin",children:"Elvis ChatGPT plugin"})]})}),"\n",(0,i.jsx)(n.p,{children:"At this point you should have your plugin ready to be deployed using your favorite cloud/on-premise solution."}),"\n",(0,i.jsx)(n.h2,{id:"register-your-chatgpt-plugin-in-nevermined",children:"Register your ChatGPT plugin in Nevermined"}),"\n",(0,i.jsx)(n.p,{children:"So at this point you should you have implemented your plugin and deploy it somewhere. Now you can share your plugin with the other ChatGPT users in a safety way, and even monetize it if you want, using a Nevermined Smart Subscription."}),"\n",(0,i.jsx)(n.p,{children:"In order to test and learn how you can use Nevermined App, we provide a testing environment where you can try the different features provided by Nevermined."}),"\n",(0,i.jsxs)(n.p,{children:["You can access to this test version of Nevermined App ",(0,i.jsx)(n.a,{href:"https://testing.nevermined.app/",children:"here"})]}),"\n",(0,i.jsx)(n.h3,{id:"before-you-register-your-service",children:"Before you register your Service"}),"\n",(0,i.jsxs)(n.p,{children:["We recommend you to take a look to the different ",(0,i.jsx)(n.a,{href:"https://docs.nevermined.app/docs/getting-started/",children:"guides and tutorials we have about Nevermined App"})]}),"\n",(0,i.jsxs)(n.p,{children:["The next step is to create a brand new ",(0,i.jsx)(n.a,{href:"https://docs.nevermined.app/docs/tutorials/builders/smart-subscriptions",children:"Smart Subscription"})]}),"\n",(0,i.jsxs)(n.p,{children:["You will register your AI Service associated with this Subscription you are about to create. The process to create a new Subscription is pretty straightforward, but ",(0,i.jsx)(n.a,{href:"https://docs.nevermined.app/docs/tutorials/create-subscription",children:"here"})," you can find some help to guide you."]}),"\n",(0,i.jsx)(n.h3,{id:"registering-your-ai-service",children:"Registering your AI Service"}),"\n",(0,i.jsx)(n.p,{children:"So now that you have all set up and you have created a Smart Subscription, you can create a Web Service Asset to register your AI Service in Nevermined App."}),"\n",(0,i.jsxs)(n.p,{children:["You can find a complete guide to register your service ",(0,i.jsx)(n.a,{href:"https://docs.nevermined.app/docs/tutorials/builders/register-webservice/",children:"here"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin Service Registration",src:t(3097).Z+"",width:"2273",height:"1361"})}),"\n",(0,i.jsx)(n.h4,{id:"defining-endpoints-urls",children:"Defining Endpoints URLs"}),"\n",(0,i.jsx)(n.p,{children:"In the second step of the process you'll see you need to provide the endpoints URLs of your ChatGPT Plugin Service, and in case you have protected them with a Bearer Token, you need to facilitate it."}),"\n",(0,i.jsx)(n.p,{children:"Instead of define the endpoints one by one manually, we can use the OpenAPI integration to do this automatically."}),"\n",(0,i.jsxs)(n.p,{children:["So in the ",(0,i.jsx)(n.code,{children:"OpenAPI URL"})," field you need to provide the URL of the ",(0,i.jsx)(n.code,{children:"openapi.json"})," file describing your API. If you used the ChatGPT Template plugin this should be generated automatically and exposed in the root of your service. In the example we are using the Elvis ChatGPT plugin, the URL is ",(0,i.jsx)(n.code,{children:"https://chatgpt-plugin.testing.nevermined.app/openapi.json"})]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin Endpoints",src:t(5809).Z+"",width:"2147",height:"1335"})}),"\n",(0,i.jsxs)(n.p,{children:["Once this is done, all the endpoints included as part of the definition will be registered automatically in the ",(0,i.jsx)(n.code,{children:"Protected Endpoints"})," section. Go through them and remove the ones you don't want to expose. For example we don't want to allow anyone to update/upsert/delete any document through the API, so we remove those endpoints clicking on the cross at right of each endpoint."]}),"\n",(0,i.jsxs)(n.p,{children:["Now this step is important, the ChatGPT plugins require to have full read access to the ",(0,i.jsx)(n.code,{children:".well-known"})," folder, so we need to add the following endpoint to the ",(0,i.jsx)(n.code,{children:"Open Endpoints"})," section:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.code,{children:"https://YOUR_SERVICE/.well-known/(.*)"})}),"\n",(0,i.jsxs)(n.p,{children:["The final ",(0,i.jsx)(n.code,{children:"(.*)"})," part is a wildcard that will allow the ChatGPT plugin to access to any file included in the ",(0,i.jsx)(n.code,{children:".well-known"})," folder. Use your own domain instead of ",(0,i.jsx)(n.code,{children:"YOUR_SERVICE"}),". For example using the previous Elvis ChatGPT plugin example, the URL will be ",(0,i.jsx)(n.code,{children:"https://chatgpt-plugin.nevermined.app/.well-known/(.*)"})]}),"\n",(0,i.jsx)(n.h4,{id:"add-some-metadata-and-associate-the-smart-subscription",children:"Add some metadata and associate the Smart Subscription"}),"\n",(0,i.jsx)(n.p,{children:"In the next 2 screens you just need to include some additional metadata that facilitates the integration by a third-party. And finally we just need to associate the Smart Subscription you created before. If you select any non-free Smart Subscription, the users who want to use your plugin will need to pay for it."}),"\n",(0,i.jsx)(n.p,{children:"When you finish the process you will see your new Web Service Asset registered in the Nevermined App."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Plugin Details Page",src:t(9417).Z+"",width:"2156",height:"1352"})}),"\n",(0,i.jsxs)(n.p,{children:["Now if you go to the ",(0,i.jsx)(n.code,{children:"Integration Details"})," tab of the service you will see the ",(0,i.jsx)(n.code,{children:"Proxy URL"})," and the ",(0,i.jsx)(n.code,{children:"JWT"})," token. The JWT token is only available to you or the users who have access to the Smart Subscription associated with the service. This token is used to authenticate the requests to the protected endpoints."]}),"\n",(0,i.jsx)(n.p,{children:"Remember them because you are gonna need it when you integrate your plugin in OpenAI."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"How to integrate details",src:t(1575).Z+"",width:"2126",height:"1359"})}),"\n",(0,i.jsxs)(n.p,{children:["Copy the ",(0,i.jsx)(n.code,{children:"Proxy URL"})," and paste it in all the references of the ",(0,i.jsx)(n.code,{children:".well-known/openapi.yaml"}),", ",(0,i.jsx)(n.code,{children:".well-known/ai-plugin.json"})," or ",(0,i.jsx)(n.code,{children:"server/main.py"})," files of your plugin. This is the URL that ChatGPT will use to access to your plugin and it's better not expose any public url on it."]}),"\n",(0,i.jsx)(n.p,{children:"Redeploy your plugin once this is done."}),"\n",(0,i.jsx)(n.h3,{id:"integrating-your-chatgpt-plugin-in-openai",children:"Integrating your ChatGPT plugin in OpenAI"}),"\n",(0,i.jsx)(n.p,{children:"Now our plugin is registered in Nevermined, we can integrate it in ChatGPT OpenAI:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://chat.openai.com/?model=gpt-4-plugins",children:"OpenAI ChatGPT page"})," and click on ",(0,i.jsx)(n.code,{children:"GPT-4"})," > ",(0,i.jsx)(n.code,{children:"Plugins"})," linkthe ",(0,i.jsx)(n.code,{children:"Add Plugin"})," button."]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Plugins Store"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Develop your own plugin"})]}),"\n",(0,i.jsxs)(n.li,{children:["Paste the domain of your plugin using the ",(0,i.jsx)(n.code,{children:"Proxy URL"})," we copied before: ",(0,i.jsx)(n.code,{children:"https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app"}),"\n",(0,i.jsx)(n.img,{alt:"How to integrate details",src:t(3321).Z+"",width:"909",height:"819"})]}),"\n",(0,i.jsxs)(n.li,{children:["OpenAI will fetch the ",(0,i.jsx)(n.code,{children:"ai-plugin.json"})," file and validate it. If everything is ok you will see the ",(0,i.jsx)(n.code,{children:"Install"})," button enabled. Click on it."]}),"\n",(0,i.jsxs)(n.li,{children:["The application will ask you to introduce the ",(0,i.jsx)(n.strong,{children:"Authentication Token"}),". Paste here the ",(0,i.jsx)(n.code,{children:"JWT"})," token copied before. ",(0,i.jsx)(n.img,{alt:"How to integrate details",src:t(8857).Z+"",width:"888",height:"566"})]}),"\n",(0,i.jsxs)(n.li,{children:["Click on ",(0,i.jsx)(n.code,{children:"Install"})," and the plugin will be ready to use"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"using-your-chatgpt-plugin",children:"Using your ChatGPT plugin"}),"\n",(0,i.jsx)(n.p,{children:"Now in the ChatGPT interface, when you click on GPT-4 > Plugins you will see your plugin available. Click on it and you will see the plugin enabled."}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Using the ChatGPT plugin",src:t(6564).Z+"",width:"1644",height:"801"})}),"\n",(0,i.jsx)(n.p,{children:"So if everything is ok, you can start using your plugin. In the ChatGPT input field introce a query that is related with your plugin, if ChatGPT identify your query as something your plugin can resolve ti will send a query to it (remember we said the description of your API was important)."}),"\n",(0,i.jsx)(n.p,{children:"ChatGPT will send a query to your plugin through the Nevermined Proxy and will use the JWT token provided. Without that JWT token the request wouldn't go through. Your plugin will return the response to ChatGPT and it will show it to you."})]})}function c(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},3097:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/001_Service_Registration_01-c61d29d5e2a29cbc7493ae2d54d93623.png"},5809:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/002_Service_Registration_02-966c86e4076bbf863a984869d92516b2.png"},9417:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/009_Service_Details_02-5ab0cabc8b80f11b25c816c549334b35.png"},1575:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/010_Service_Details_03-1381a574e0839a132708476cb0922dea.png"},3321:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/015-Install_Plugin_Validate_Manifest-e67053e7b7abb5ae77c21c17cfa3acc5.png"},8857:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/019-Install_Plugin_Validate_Credentials_05-cb7399708916ab0be83d499b527406e6.png"},6564:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/31_ChatGPT_Summarize_Song_02-214ea8b1d33fd9802dfaa33216287274.png"},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>r});var i=t(7294);const o={},s=i.createContext(o);function r(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);