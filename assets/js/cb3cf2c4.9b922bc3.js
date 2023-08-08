"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8006],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),d=r,g=u["".concat(c,".").concat(d)]||u[d]||h[d]||i;return n?a.createElement(g,o(o({ref:t},p),{},{components:n})):a.createElement(g,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=n[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},57330:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},o="How to integrate a web service in an application",s={unversionedId:"tutorials/advanced/webservice-integration",id:"tutorials/advanced/webservice-integration",title:"How to integrate a web service in an application",description:"How to generate the JWT access token that gives access to a web service",source:"@site/docs/tutorials/advanced/08-webservice-integration.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/webservice-integration",permalink:"/docs/tutorials/advanced/webservice-integration",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/advanced/08-webservice-integration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},sidebar:"tutorialSidebar",previous:{title:"Tutorials for Nevermined App Advanced used",permalink:"/docs/tutorials/advanced/"},next:{title:"How to integrate a widget in your website",permalink:"/docs/tutorials/advanced/widgets-integration"}},c={},l=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to integrate a web service",id:"how-to-integrate-a-web-service",level:2},{value:"1. Open your Dashboard page",id:"1-open-your-dashboard-page",level:3},{value:"2. Get information about the Service",id:"2-get-information-about-the-service",level:3},{value:"3. Get the JWT access token",id:"3-get-the-jwt-access-token",level:3},{value:"4. Use the JWT to call the service",id:"4-use-the-jwt-to-call-the-service",level:3},{value:"4.a Using curl to integrate the web service",id:"4a-using-curl-to-integrate-the-web-service",level:4},{value:"4.b Using typescript to integrate the web service",id:"4b-using-typescript-to-integrate-the-web-service",level:4}],p={toc:l};function h(e){let{components:t,...i}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-integrate-a-web-service-in-an-application"},"How to integrate a web service in an application"),(0,r.kt)("p",null,"In this tutorial we show how you can integrate a web service in an application, after you bought a subscription."),(0,r.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,r.kt)("p",null,"If you got this far, we assume you know that you need to connect your MetaMask wallet."),(0,r.kt)("p",null,"You also need to own a Smart Subscription for the web service. If you haven't done that yet, first purchase a subscription for the AI you want to integrate (",(0,r.kt)("a",{parentName:"p",href:"../first-steps/search-and-purchase"},"tutorial here"),")."),(0,r.kt)("h2",{id:"how-to-integrate-a-web-service"},"How to integrate a web service"),(0,r.kt)("p",null,"The steps to integrate are the following:"),(0,r.kt)("h3",{id:"1-open-your-dashboard-page"},"1. Open your Dashboard page"),(0,r.kt)("p",null,'Click on the "My Assets" link on the header of the application. Select the "My Assets" option in the menu, and click on the "Purchased" tab.'),(0,r.kt)("p",null,"You will see a list of all the assets you can access. Use the filters in the Search Bar to see only the Services."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"My Assets",src:n(97795).Z,width:"1080",height:"615"})),(0,r.kt)("h3",{id:"2-get-information-about-the-service"},"2. Get information about the Service"),(0,r.kt)("p",null,"You can access to detailed information about the service clicking the icons on the right hand side. "),(0,r.kt)("p",null,'The fist tab, "Service Information", shows a link to an OpenAPI endpoint, if it was provided by the publisher, and a "How to Integrate" guide.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Service Information",src:n(71858).Z,width:"1047",height:"730"})),(0,r.kt)("p",null,'In the tab "Endpoints" you\'ll see detailed information about the endpoints this service exposes, where you can find information about the parameters and the responses.\nThis tab is only showed if the publisher provided an OpenAPI definition.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Service Information",src:n(70080).Z,width:"1081",height:"969"})),(0,r.kt)("h3",{id:"3-get-the-jwt-access-token"},"3. Get the JWT access token"),(0,r.kt)("p",null,'In the last tab, "Integration Details" you will find see the web service\'s JWT access token, along with the Proxy URL and an example of how to call the service.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Service Information",src:n(5406).Z,width:"1070",height:"610"})),(0,r.kt)("p",null,"The JWT token is the access key identifying you as a subscriber. It allows you to make HTTP requests to the web service. Once you have it, you can make requests to all the endpoints that are included in the web service that you subscribed to."),(0,r.kt)("p",null,"Copy both the JWT token and the Proxy url for the network you're using (e.g. ",(0,r.kt)("a",{parentName:"p",href:"https://proxy.goerli.nevermined.app/"},"https://proxy.goerli.nevermined.app/"),"). You need these to enable your app to send HTTP requests."),(0,r.kt)("h3",{id:"4-use-the-jwt-to-call-the-service"},"4. Use the JWT to call the service"),(0,r.kt)("p",null,"Next we will show how you can integrate the web service into your app using Command Line."),(0,r.kt)("h4",{id:"4a-using-curl-to-integrate-the-web-service"},"4.a Using curl to integrate the web service"),(0,r.kt)("p",null,"Here we will use ",(0,r.kt)("strong",{parentName:"p"},"curl")," but the same works for any HTTP client application or library."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'# Here we export the JWT token pasted from the NVM App\nexport $JWT_TOKEN=\u201d\u201d\n\n# In our example we are sending a body message via HTTP POST. \n# For sake of clarity, here we export the message we are gonna send to the web service\nexport REQUEST_DATA=\'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\n# With curl we make a POST request and we add the $JWT_TOKEN as Bearer token in the Authorization header\n# The url where we send the request is the host name of the proxy: "https://proxy.goerli.nevermined.app" plus the endpoint of the service \n# we are calling, int this case "/ask"\ncurl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $JWT_TOKEN" -d "$REQUEST_DATA" https://proxy.goerli.nevermined.app/ask\n\n{"response":"\\nThe song is about a person who is in love with someone who is not perfect, but they cannot live without them. Despite knowing that loving this person will bring heartache, they are willing to take the risk and accept the consequences. The song also compares the relationship to the story of Adam and Eve, with the person in the song being like Adam and their love interest being like Eve.","source_nodes":[{"node":{"text":"...","doc_id":"8e748293-f8d2-41b8-a225-7479455b1899","embedding":null,"doc_hash":"451d68b33de1e8034e48c6a98865364e52edd02837f06c34c662ba6d6d462c76","extra_info":null,"node_info":{"start":0,"end":1030},"relationships":{"1":"did:nv:3e0a13a6dba0ab20e83bf25c3e820af8b71c94cea0ab0763b4f822a6998009e6"}},"score":0.7585169416635178}],"extra_info":null}\n')),(0,r.kt)("h4",{id:"4b-using-typescript-to-integrate-the-web-service"},"4.b Using typescript to integrate the web service"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'const proxyEndpoint = `https://proxy.goerli.nevermined.app/ask`\nconst requestData = \'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\nopts.headers = {\n    // The proxy expects the `HTTP Authorization` header with the JWT\n    authorization: `Bearer ${JWT_TOKEN}`,\n    \'content-type\': \'application/json\'\n}\n\nopts.method = \'POST\'\nopts.body = requestData\n\nconst result = await fetch(proxyEndpoint, opts)\n\nassert.isTrue(result.ok)\nassert.equal(result.status, 200)\n')))}h.isMDXComponent=!0},97795:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-01-Integration-Dashboard-226c8ab243f845b7f962828eafe6eff4.png"},71858:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-02-Service-Info-710395a1e2f13962d5274c34c78d84ef.png"},70080:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-03-Service-endpoints-21c33b1cf56112593c8c3f583915b5ee.png"},5406:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/08-04-Service-JWT-440ebd0cb99b5cf2395b5e33bf51b875.png"}}]);