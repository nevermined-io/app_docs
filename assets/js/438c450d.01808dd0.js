"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[2360],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=l(n),d=a,g=h["".concat(c,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},7373:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),a=(n(7294),n(3905));const o={sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},i="How to integrate an AI web service in an application",s={unversionedId:"tutorials/webservice-integration",id:"tutorials/webservice-integration",title:"How to integrate an AI web service in an application",description:"How to generate the JWT access token that gives access to a web service",source:"@site/docs/tutorials/08-webservice-integration.md",sourceDirName:"tutorials",slug:"/tutorials/webservice-integration",permalink:"/docs/tutorials/webservice-integration",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/08-webservice-integration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},sidebar:"tutorialSidebar",previous:{title:"Searching assets and buying subscriptions",permalink:"/docs/tutorials/search-and-purchase"},next:{title:"How to use Smart Subscriptions to protect Smart Contracts?",permalink:"/docs/tutorials/smart-contract-access"}},c={},l=[{value:"Getting ready",id:"getting-ready",level:2},{value:"How to integrate a web service",id:"how-to-integrate-a-web-service",level:2},{value:"1. Open your Dashboard page",id:"1-open-your-dashboard-page",level:3},{value:"2. Get the JWT access token",id:"2-get-the-jwt-access-token",level:3},{value:"3. Use the JWT to call the service",id:"3-use-the-jwt-to-call-the-service",level:3},{value:"3.a Using curl to integrate the web service",id:"3a-using-curl-to-integrate-the-web-service",level:4},{value:"3.b Using typescript to integrate the web service",id:"3b-using-typescript-to-integrate-the-web-service",level:4}],p={toc:l};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-integrate-an-ai-web-service-in-an-application"},"How to integrate an AI web service in an application"),(0,a.kt)("p",null,"In this tutorial we show how you can integrate a web service in an application, after you bought a subscription."),(0,a.kt)("h2",{id:"getting-ready"},"Getting ready"),(0,a.kt)("p",null,"If you got this far, we assume you know that you need to connect your MetaMask wallet. "),(0,a.kt)("p",null,"You also need to own a Smart Subscription for the web service. If you haven't done that yet, first purchase a subscription for the AI you want to integrate. ",(0,a.kt)("a",{parentName:"p",href:"/docs/tutorials/search-and-purchase"},"tutorial here")),(0,a.kt)("h2",{id:"how-to-integrate-a-web-service"},"How to integrate a web service"),(0,a.kt)("p",null,"The steps to integrate are the following:"),(0,a.kt)("h3",{id:"1-open-your-dashboard-page"},"1. Open your Dashboard page"),(0,a.kt)("p",null,'Click on the \u201cDashboard\u201d link on the header of the application. Click on the "Purchased" tab to display the subscriptions you own.'),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/08-01-Integration-Dashboard.png"})),(0,a.kt)("h3",{id:"2-get-the-jwt-access-token"},"2. Get the JWT access token"),(0,a.kt)("p",null,"Click on the arrow to list all the assets (datasets and webservices) that are part of the subscription."),(0,a.kt)("p",null,"Each web service will show a key icon at the right hand side. If you click on this, the application will require you to sign a message (no gas fees). After that, you will see the web service's JWT access token."),(0,a.kt)("p",{align:"center"},(0,a.kt)("img",{src:"/images/tutorials/08-02-Integration-Key.png"})),(0,a.kt)("p",null,"The JWT token is the access key identifying you as a subscriber. It allows you to make HTTP requests to the web service. Once you have it, you can make requests to all the endpoints that are included in the web service that you subscribed to."),(0,a.kt)("p",null,"Copy both the JWT token and the Proxy url for the network you're using (e.g. ",(0,a.kt)("a",{parentName:"p",href:"https://proxy.mumbai.nevermined.network/"},"https://proxy.mumbai.nevermined.network/"),"). You need these to enable your app to send HTTP requests."),(0,a.kt)("h3",{id:"3-use-the-jwt-to-call-the-service"},"3. Use the JWT to call the service"),(0,a.kt)("p",null,"Next we will show how you can integrate the web service into your app using Command Line. "),(0,a.kt)("h4",{id:"3a-using-curl-to-integrate-the-web-service"},"3.a Using curl to integrate the web service"),(0,a.kt)("p",null,"Here we will use ",(0,a.kt)("strong",{parentName:"p"},"curl")," but the same works for any HTTP client application or library."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'# Here we export the JWT token pasted from the NVM App\nexport $JWT_TOKEN=\u201d\u201d\n\n# In our example we are sending a body message via HTTP POST. \n# For sake of clarity, here we export the message we are gonna send to the web service\nexport REQUEST_DATA=\'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\n# With curl we make a POST request and we add the $JWT_TOKEN as Bearer token in the Authorization header\n# The url where we send the request is the host name of the proxy: "https://proxy.nevermined.network" plus the endpoint of the service \n# we are calling, int this case "/ask"\ncurl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $JWT_TOKEN" -d "$REQUEST_DATA" https://proxy.nevermined.network/ask\n\n{"response":"\\nThe song is about a person who is in love with someone who is not perfect, but they cannot live without them. Despite knowing that loving this person will bring heartache, they are willing to take the risk and accept the consequences. The song also compares the relationship to the story of Adam and Eve, with the person in the song being like Adam and their love interest being like Eve.","source_nodes":[{"node":{"text":"...","doc_id":"8e748293-f8d2-41b8-a225-7479455b1899","embedding":null,"doc_hash":"451d68b33de1e8034e48c6a98865364e52edd02837f06c34c662ba6d6d462c76","extra_info":null,"node_info":{"start":0,"end":1030},"relationships":{"1":"did:nv:3e0a13a6dba0ab20e83bf25c3e820af8b71c94cea0ab0763b4f822a6998009e6"}},"score":0.7585169416635178}],"extra_info":null}\n')),(0,a.kt)("h4",{id:"3b-using-typescript-to-integrate-the-web-service"},"3.b Using typescript to integrate the web service"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'const proxyEndpoint = `https://proxy.nevermined.network/ask`\nconst requestData = \'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\nopts.headers = {\n    // The proxy expects the `HTTP Authorization` header with the JWT\n    authorization: `Bearer ${JWT_TOKEN}`,\n    \'content-type\': \'application/json\'\n}\n\nopts.method = \'POST\'\nopts.body = requestData\n\nconst result = await fetch(proxyEndpoint, opts)\n\nassert.isTrue(result.ok)\nassert.equal(result.status, 200)\n')))}u.isMDXComponent=!0}}]);