"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[3055],{4696:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>h,toc:()=>u});var a=n(5893),r=n(1151),o=n(599),i=n(2983);const s={sidebar_position:3,description:"How to generate the JWT access token that gives access to an AI Agent or service"},l="How to integrate an AI agent in another application",h={id:"tutorials/integration/agent-integration",title:"How to integrate an AI agent in another application",description:"How to generate the JWT access token that gives access to an AI Agent or service",source:"@site/docs/tutorials/integration/03-agent-integration.mdx",sourceDirName:"tutorials/integration",slug:"/tutorials/integration/agent-integration",permalink:"/docs/tutorials/integration/agent-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/integration/03-agent-integration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to generate the JWT access token that gives access to an AI Agent or service"},sidebar:"tutorialSidebar",previous:{title:"Tutorials for integrating the Nevermined App",permalink:"/docs/tutorials/integration/"},next:{title:"What is a Nvm Api Key? How to obtain it and how to use it",permalink:"/docs/tutorials/integration/nvm-api-keys"}},c={},u=[{value:"How to integrate an agent from the App",id:"how-to-integrate-an-agent-from-the-app",level:2},{value:"1. Open your Dashboard page",id:"1-open-your-dashboard-page",level:3},{value:"2. Get information about the Agent",id:"2-get-information-about-the-agent",level:3},{value:"3. Testing the agent from the App",id:"3-testing-the-agent-from-the-app",level:3},{value:"4. Get the JWT access token",id:"4-get-the-jwt-access-token",level:3},{value:"How to integrate an agent programatically",id:"how-to-integrate-an-agent-programatically",level:2},{value:"4.a Using raw HTTP requests to integrate the agent",id:"4a-using-raw-http-requests-to-integrate-the-agent",level:3},{value:"4.b Using the Nevermined Payment Libraries to integrate the agent",id:"4b-using-the-nevermined-payment-libraries-to-integrate-the-agent",level:4}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"how-to-integrate-an-ai-agent-in-another-application",children:"How to integrate an AI agent in another application"})}),"\n",(0,a.jsx)(t.p,{children:"In this tutorial we show how you can integrate an AI agent or service in a third-party application, after you bought a payment plan."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsx)(t.p,{children:"You can test AI agents from the App even before you start any integration of the agent in your application."})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-integrate-an-agent-from-the-app",children:"How to integrate an agent from the App"}),"\n",(0,a.jsx)(t.p,{children:"In this case we are going to use the Nevermined App to test the AI agent and get the access token that allows to query it. The steps to integrate are the following:"}),"\n",(0,a.jsx)(t.h3,{id:"1-open-your-dashboard-page",children:"1. Open your Dashboard page"}),"\n",(0,a.jsx)(t.p,{children:'Click on the "My Assets" link on the header of the application. Select the "My Assets" option in the menu, and click on the "Purchased" tab.'}),"\n",(0,a.jsx)(t.p,{children:"You will see a list of all the assets you can access. Use the filters in the Search Bar to see only the Agents or Services."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"/images/tutorials/integration/08-01-Integration-Dashboard.png"})}),"\n",(0,a.jsx)(t.h3,{id:"2-get-information-about-the-agent",children:"2. Get information about the Agent"}),"\n",(0,a.jsxs)(t.p,{children:["You can access to detailed information about the agent clicking the ",(0,a.jsx)(t.strong,{children:"eye icons"})," on the right hand side."]}),"\n",(0,a.jsxs)(t.p,{children:["The fist tab, ",(0,a.jsx)(t.strong,{children:'"Service Information"'}),", shows some information about the agent, like the description and the information provided by the publisher about how to integrate it."]}),"\n",(0,a.jsxs)(t.p,{children:["In the tab ",(0,a.jsx)(t.strong,{children:'"Endpoints"'})," you'll see detailed information about the endpoints this agent exposes, where you can find information about the parameters and the responses."]}),"\n",(0,a.jsx)(t.admonition,{type:"warning",children:(0,a.jsx)(t.p,{children:"This Endpoints tab is only showed if the publisher provided an OpenAPI definition."})}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"/images/tutorials/08-03-Service-endpoints.png",width:"600"})}),"\n",(0,a.jsxs)(t.p,{children:["In the tab ",(0,a.jsx)(t.strong,{children:'"Integration Details"'})," you'll find the details about how to make HTTP requests to the AI agent. There you will find the agent's JWT access token, along with the Proxy URL and an example of how to call the agent:"]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"/images/tutorials/integration/08-02-Service-Info.png",width:"600"})}),"\n",(0,a.jsx)(t.h3,{id:"3-testing-the-agent-from-the-app",children:"3. Testing the agent from the App"}),"\n",(0,a.jsxs)(t.p,{children:["If you are the publisher of the agent OR a subscriber, you can test the agent directly from the App. Go to the ",(0,a.jsx)(t.strong,{children:'"Endpoints"'})," tab and select the endpoint of the list you want to test. Then click on the ",(0,a.jsx)(t.strong,{children:'"Try out"'})," button.\nProvide the parameters, body, etc. required by the agent and click on the ",(0,a.jsx)(t.strong,{children:'"Execute"'})," button."]}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"/images/tutorials/webservice_try_endpoint.png",width:"600"})}),"\n",(0,a.jsx)(t.p,{children:"At this point the Nevermined App will send a HTTP request to the upstream agent via the Proxy (including the JWT access token). The Proxy will validate the user is a subscriber and if that's the case will forward the request to the upstream agent and return the result."}),"\n",(0,a.jsx)("p",{align:"center",children:(0,a.jsx)("img",{src:"/images/tutorials/webservice_tryout_response.png",width:"600"})}),"\n",(0,a.jsx)(t.p,{children:"You can see a detailed view of the complete request and HTTP parameters. All this information is very valuable because shows how to make the request to the agent using standard HTTP."}),"\n",(0,a.jsx)(t.h3,{id:"4-get-the-jwt-access-token",children:"4. Get the JWT access token"}),"\n",(0,a.jsx)(t.p,{children:"The JWT token is the access key identifying you as a subscriber. It allows you to make HTTP requests to the AI agent. Once you have it, you can make requests to all the endpoints that are included in the agent that you subscribed to."}),"\n",(0,a.jsxs)(t.p,{children:["Copy both the JWT token and the Proxy url for the network you're using (e.g. ",(0,a.jsx)(t.a,{href:"https://proxy.testing.nevermined.app/",children:"https://proxy.testing.nevermined.app/"}),"). You need these to enable your app to send HTTP requests."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If you want to know more about how everything works under the hood, please check the ",(0,a.jsx)(t.a,{href:"/docs/architecture/how-works",children:"How everything works"})," section of the documentation."]})}),"\n",(0,a.jsx)(t.h2,{id:"how-to-integrate-an-agent-programatically",children:"How to integrate an agent programatically"}),"\n",(0,a.jsx)(t.p,{children:"Next we will show how you can integrate the agent into your app (or another agent) programatically."}),"\n",(0,a.jsxs)(t.p,{children:["First you need to compose the ",(0,a.jsx)(t.strong,{children:"Proxy URL"}),". The Proxy URL is the full URL you are gonna call to interact with the agent. It is compose by the Proxy host + the endpoint of the agent you want to use (including parameters). For example if the proxy you are using is ",(0,a.jsx)(t.code,{children:"https://proxy.testing.nevermined.app/"})," and the URL (including parameters) of the agent you are integrating is ",(0,a.jsx)(t.code,{children:"/ask?param1=xxx"}),", the full proxy URL will be: ",(0,a.jsx)(t.code,{children:"https://proxy.testing.nevermined.app/ask?param1=xxx"}),"."]}),"\n",(0,a.jsx)(t.h3,{id:"4a-using-raw-http-requests-to-integrate-the-agent",children:"4.a Using raw HTTP requests to integrate the agent"}),"\n",(0,a.jsxs)(t.p,{children:["Here we will use ",(0,a.jsx)(t.strong,{children:"curl"})," but the same works for any HTTP client application or library. You just need to export the JWT access token and use it in the Authorization header sending the request through the Proxy."]}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["When you integrate an agent you can pass ",(0,a.jsx)(t.strong,{children:"any url paratemer"}),", ",(0,a.jsx)(t.strong,{children:"body message"})," or ",(0,a.jsx)(t.strong,{children:"additional headers"})," that the agent requires. After authorize your request the Proxy will forward all this information to the agent."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:'# Here we export the JWT token pasted from the NVM App\nexport $JWT_TOKEN=\u201d\u201d\n\n# In our example we are sending a body message via HTTP POST. \n# For sake of clarity, here we export the body message we are gonna send to the agent\nexport REQUEST_DATA=\'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\n# With curl we make a POST request and we add the $JWT_TOKEN as Bearer token in the Authorization header\n# The url where we send the request is the host name of the proxy: "https://proxy.testing.nevermined.app" plus the endpoint of the agent \n# we are calling, int this case "/ask"\ncurl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $JWT_TOKEN" -d "$REQUEST_DATA" https://proxy.testing.nevermined.app/ask\n\n{"response":"\\nThe song is about a person who is in love with someone who is not perfect, but they cannot live without them. Despite knowing that loving this person will bring heartache, they are willing to take the risk and accept the consequences. The song also compares the relationship to the story of Adam and Eve, with the person in the song being like Adam and their love interest being like Eve.","source_nodes":[{"node":{"text":"...","doc_id":"8e748293-f8d2-41b8-a225-7479455b1899","embedding":null,"doc_hash":"451d68b33de1e8034e48c6a98865364e52edd02837f06c34c662ba6d6d462c76","extra_info":null,"node_info":{"start":0,"end":1030},"relationships":{"1":"did:nv:3e0a13a6dba0ab20e83bf25c3e820af8b71c94cea0ab0763b4f822a6998009e6"}},"score":0.7585169416635178}],"extra_info":null}\n'})}),"\n",(0,a.jsx)(t.h4,{id:"4b-using-the-nevermined-payment-libraries-to-integrate-the-agent",children:"4.b Using the Nevermined Payment Libraries to integrate the agent"}),"\n",(0,a.jsxs)(t.p,{children:["Nevermined provides the ",(0,a.jsx)(t.a,{href:"../../libraries/",children:"Payments Libraries"})," which allow you to integrate the agent in your application. The libraries are available in different languages and provide a simple way to interact with the Nevermined ecosystem and another agents."]}),"\n",(0,a.jsx)(t.p,{children:"Here we assume you already ordered a plan. We are going to generate the JWT access token and send the request to the agent through the Proxy."}),"\n",(0,a.jsx)(t.admonition,{type:"info",children:(0,a.jsxs)(t.p,{children:["If you want to learn more about how order payment plans, please check the ",(0,a.jsx)(t.a,{href:"../../libraries/order-plans",children:"How Subscribers can order Plans?"})," section of the documentation."]})}),"\n",(0,a.jsxs)(o.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Typescript",value:"typescript"}],children:[(0,a.jsx)(i.Z,{value:"python",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'access_config = payments.get_service_token(agent_DID)\n# OUTPUT: accessConfig:\n# {\n#  accessToken: \'eJyNj0sKgDAURP9lJQ ....\',\n#  neverminedProxyUri: \'https://proxy.testing.nevermined.app\'\n# }\n\nproxy_endpoint = f"{subscriberQueryOpts.neverminedProxyUri}/ask"\n\nheaders = {\n  // The proxy expects the `HTTP Authorization` header with the JWT\n  "authorization": f"Bearer {subscriberQueryOpts.accessToken}",\n  "content-type": "application/json"\n}   \n\ndata = \'{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}\'\n\nrequests.post(proxy_endpoint, json=data, headers=headers)\n'})})}),(0,a.jsx)(i.Z,{value:"typescript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"\nconst subscriberQueryOpts = await payments.getServiceAccessConfig(agentDID)\n// OUTPUT: subscriberQueryOpts:\n// {\n//  accessToken: 'eJyNj0sKgDAURP9lJQ ....',\n//  neverminedProxyUri: 'https://proxy.testing.nevermined.app'\n// }  \n\nconst proxyEndpoint = `${subscriberQueryOpts.neverminedProxyUri}/ask`\n\nopts.headers = {\n  // The proxy expects the `HTTP Authorization` header with the JWT\n  authorization: `Bearer ${subscriberQueryOpts.accessToken}`,\n  'content-type': 'application/json'\n}   \n\nopts.method = 'POST'\nopts.body = '{\"queries\": [{\"query\": \"Adam And Evil\", \"filter\": {}, \"top_k\": 1 }]}'\n\nconst result = await fetch(proxyEndpoint, opts)\nassert.isTrue(result.ok)\nassert.equal(result.status, 200)\n"})})})]})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},2983:(e,t,n)=>{n.d(t,{Z:()=>i});n(7294);var a=n(512);const r={tabItem:"tabItem_Ymn6"};var o=n(5893);function i(e){let{children:t,hidden:n,className:i}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,i),hidden:n,children:t})}},599:(e,t,n)=>{n.d(t,{Z:()=>j});var a=n(7294),r=n(512),o=n(2466),i=n(6550),s=n(469),l=n(1980),h=n(7392),c=n(812);function u(e){return a.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function d(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:r}}=e;return{value:t,label:n,attributes:a,default:r}}))}(n);return function(e){const t=(0,h.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const r=(0,i.k6)(),o=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,l._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,o=d(e),[i,l]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[h,u]=g({queryString:n,groupId:r}),[m,y]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&o.set(e)}),[n,o])]}({groupId:r}),b=(()=>{const e=h??m;return p({value:e,tabValues:o})?e:null})();(0,s.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!p({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),y(e)}),[u,y,o]),tabValues:o}}var y=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=n(5893);function x(e){let{className:t,block:n,selectedValue:a,selectValue:i,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:h}=(0,o.o5)(),c=e=>{const t=e.currentTarget,n=l.indexOf(t),r=s[n].value;r!==a&&(h(t),i(r))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=l.indexOf(e.currentTarget)+1;t=l[n]??l[0];break}case"ArrowLeft":{const n=l.indexOf(e.currentTarget)-1;t=l[n]??l[l.length-1];break}}t?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t),children:s.map((e=>{let{value:t,label:n,attributes:o}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,r.Z)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":a===t}),children:n??t},t)}))})}function v(e){let{lazy:t,children:n,selectedValue:o}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===o));return e?(0,a.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function w(e){const t=m(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,f.jsx)(x,{...t,...e}),(0,f.jsx)(v,{...t,...e})]})}function j(e){const t=(0,y.Z)();return(0,f.jsx)(w,{...e,children:u(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(7294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);