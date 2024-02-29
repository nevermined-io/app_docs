"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[8006],{6179:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>o,metadata:()=>a,toc:()=>h});var i=n(5893),s=n(1151);const o={sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},r="How to integrate an AI service in an application",a={id:"tutorials/advanced/webservice-integration",title:"How to integrate an AI service in an application",description:"How to generate the JWT access token that gives access to a web service",source:"@site/docs/tutorials/advanced/08-webservice-integration.md",sourceDirName:"tutorials/advanced",slug:"/tutorials/advanced/webservice-integration",permalink:"/docs/tutorials/advanced/webservice-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/advanced/08-webservice-integration.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"How to generate the JWT access token that gives access to a web service"},sidebar:"tutorialSidebar",previous:{title:"Tutorials for Nevermined App Advanced used",permalink:"/docs/tutorials/advanced/"},next:{title:"How to integrate a widget in your website",permalink:"/docs/tutorials/advanced/widgets-integration"}},c={},h=[{value:"How to integrate a web service",id:"how-to-integrate-a-web-service",level:2},{value:"1. Open your Dashboard page",id:"1-open-your-dashboard-page",level:3},{value:"2. Get information about the Service",id:"2-get-information-about-the-service",level:3},{value:"3. Testing the service from the App",id:"3-testing-the-service-from-the-app",level:3},{value:"4. Get the JWT access token",id:"4-get-the-jwt-access-token",level:3},{value:"4. Use the JWT to call the service",id:"4-use-the-jwt-to-call-the-service",level:3},{value:"4.a Using curl to integrate the web service",id:"4a-using-curl-to-integrate-the-web-service",level:4},{value:"4.b Using typescript to integrate the web service",id:"4b-using-typescript-to-integrate-the-web-service",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"how-to-integrate-an-ai-service-in-an-application",children:"How to integrate an AI service in an application"}),"\n",(0,i.jsx)(t.p,{children:"In this tutorial we show how you can integrate an AI service in an application, after you bought a subscription."}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsx)(t.p,{children:"You can test AI services from the App even before you start any integration of the service in your application."})}),"\n",(0,i.jsx)(t.h2,{id:"how-to-integrate-a-web-service",children:"How to integrate a web service"}),"\n",(0,i.jsx)(t.p,{children:"The steps to integrate are the following:"}),"\n",(0,i.jsx)(t.h3,{id:"1-open-your-dashboard-page",children:"1. Open your Dashboard page"}),"\n",(0,i.jsx)(t.p,{children:'Click on the "My Assets" link on the header of the application. Select the "My Assets" option in the menu, and click on the "Purchased" tab.'}),"\n",(0,i.jsx)(t.p,{children:"You will see a list of all the assets you can access. Use the filters in the Search Bar to see only the Services."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/08-01-Integration-Dashboard.png",width:"600"})}),"\n",(0,i.jsx)(t.h3,{id:"2-get-information-about-the-service",children:"2. Get information about the Service"}),"\n",(0,i.jsx)(t.p,{children:"You can access to detailed information about the service clicking the icons on the right hand side."}),"\n",(0,i.jsxs)(t.p,{children:["The fist tab, ",(0,i.jsx)(t.strong,{children:'"Service Information"'}),", shows some information about the service, like the description and the information provided by the publisher about how to integrate it."]}),"\n",(0,i.jsxs)(t.p,{children:["In the tab ",(0,i.jsx)(t.strong,{children:'"Endpoints"'})," you'll see detailed information about the endpoints this service exposes, where you can find information about the parameters and the responses."]}),"\n",(0,i.jsx)(t.admonition,{type:"warning",children:(0,i.jsx)(t.p,{children:"This Endpoints tab is only showed if the publisher provided an OpenAPI definition."})}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/08-03-Service-endpoints.png",width:"600"})}),"\n",(0,i.jsxs)(t.p,{children:["In the tab ",(0,i.jsx)(t.strong,{children:'"Integration Details"'})," you'll find the details about how to make HTTP requests to the AI service. ou will find see the web service's JWT access token, along with the Proxy URL and an example of how to call the service:"]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/08-02-Service-Info.png",width:"600"})}),"\n",(0,i.jsx)(t.h3,{id:"3-testing-the-service-from-the-app",children:"3. Testing the service from the App"}),"\n",(0,i.jsxs)(t.p,{children:["If you are the publisher of the service OR a subscriber, you can test the service directly from the App. Go to the ",(0,i.jsx)(t.strong,{children:'"Endpoints"'})," tab and select the endpoint of the list you want to test. Then click on the ",(0,i.jsx)(t.strong,{children:'"Try out"'})," button.\nProvide the parameters, body, etc. required by the service and click on the ",(0,i.jsx)(t.strong,{children:'"Execute"'})," button."]}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/webservice_try_endpoint.png",width:"600"})}),"\n",(0,i.jsx)(t.p,{children:"At this point the Nevermined App will send a HTTP request to the upstream service via the Proxy (including the JWT token). The Proxy will validate the user is a subscriber and if that's the case will forward the request to the upstream service and return the result."}),"\n",(0,i.jsx)("p",{align:"center",children:(0,i.jsx)("img",{src:"/images/tutorials/webservice_tryout_response.png",width:"600"})}),"\n",(0,i.jsx)(t.p,{children:"You can see a detailed view of the complete request and HTTP parameters. All this information is very valuable because shows how to make the request to the service using standard HTTP."}),"\n",(0,i.jsx)(t.h3,{id:"4-get-the-jwt-access-token",children:"4. Get the JWT access token"}),"\n",(0,i.jsx)(t.p,{children:"The JWT token is the access key identifying you as a subscriber. It allows you to make HTTP requests to the AI service. Once you have it, you can make requests to all the endpoints that are included in the web service that you subscribed to."}),"\n",(0,i.jsxs)(t.p,{children:["Copy both the JWT token and the Proxy url for the network you're using (e.g. ",(0,i.jsx)(t.a,{href:"https://proxy.testing.nevermined.app/",children:"https://proxy.testing.nevermined.app/"}),"). You need these to enable your app to send HTTP requests."]}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you want to know more about how everything works under the hood, please check the ",(0,i.jsx)(t.a,{href:"/docs/architecture/how-works",children:"How everything works"})," section of the documentation."]})}),"\n",(0,i.jsx)(t.h3,{id:"4-use-the-jwt-to-call-the-service",children:"4. Use the JWT to call the service"}),"\n",(0,i.jsx)(t.p,{children:"Next we will show how you can integrate the web service into your app using Command Line."}),"\n",(0,i.jsx)(t.h4,{id:"4a-using-curl-to-integrate-the-web-service",children:"4.a Using curl to integrate the web service"}),"\n",(0,i.jsxs)(t.p,{children:["Here we will use ",(0,i.jsx)(t.strong,{children:"curl"})," but the same works for any HTTP client application or library."]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-bash",children:'# Here we export the JWT token pasted from the NVM App\nexport $JWT_TOKEN=\u201d\u201d\n\n# In our example we are sending a body message via HTTP POST. \n# For sake of clarity, here we export the message we are gonna send to the web service\nexport REQUEST_DATA=\'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\n# With curl we make a POST request and we add the $JWT_TOKEN as Bearer token in the Authorization header\n# The url where we send the request is the host name of the proxy: "https://proxy.testing.nevermined.app" plus the endpoint of the service \n# we are calling, int this case "/ask"\ncurl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $JWT_TOKEN" -d "$REQUEST_DATA" https://proxy.testing.nevermined.app/ask\n\n{"response":"\\nThe song is about a person who is in love with someone who is not perfect, but they cannot live without them. Despite knowing that loving this person will bring heartache, they are willing to take the risk and accept the consequences. The song also compares the relationship to the story of Adam and Eve, with the person in the song being like Adam and their love interest being like Eve.","source_nodes":[{"node":{"text":"...","doc_id":"8e748293-f8d2-41b8-a225-7479455b1899","embedding":null,"doc_hash":"451d68b33de1e8034e48c6a98865364e52edd02837f06c34c662ba6d6d462c76","extra_info":null,"node_info":{"start":0,"end":1030},"relationships":{"1":"did:nv:3e0a13a6dba0ab20e83bf25c3e820af8b71c94cea0ab0763b4f822a6998009e6"}},"score":0.7585169416635178}],"extra_info":null}\n'})}),"\n",(0,i.jsx)(t.h4,{id:"4b-using-typescript-to-integrate-the-web-service",children:"4.b Using typescript to integrate the web service"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:'const proxyEndpoint = `https://proxy.testing.nevermined.app/ask`\nconst requestData = \'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\nopts.headers = {\n    // The proxy expects the `HTTP Authorization` header with the JWT\n    authorization: `Bearer ${JWT_TOKEN}`,\n    \'content-type\': \'application/json\'\n}\n\nopts.method = \'POST\'\nopts.body = requestData\n\nconst result = await fetch(proxyEndpoint, opts)\n\nassert.isTrue(result.ok)\nassert.equal(result.status, 200)\n'})})]})}function l(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var i=n(7294);const s={},o=i.createContext(s);function r(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);