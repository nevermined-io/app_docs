"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6585],{7595:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>c,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var r=n(5893),s=n(1151),a=n(599),o=n(2983);const i={sidebar_position:6,description:"How Subscribers can query AI Agents?"},c="How Subscribers can query AI Agents?",l={id:"libraries/query-agents",title:"How Subscribers can query AI Agents?",description:"How Subscribers can query AI Agents?",source:"@site/docs/libraries/06-query-agents.md",sourceDirName:"libraries",slug:"/libraries/query-agents",permalink:"/docs/libraries/query-agents",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/libraries/06-query-agents.md",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How Subscribers can query AI Agents?"},sidebar:"tutorialSidebar",previous:{title:"How Subscribers can order Plans?",permalink:"/docs/libraries/order-plans"},next:{title:"How AI Builders can process AI Tasks?",permalink:"/docs/libraries/process-tasks"}},u={},d=[{value:"Get the AI Agent or Service Access Token",id:"get-the-ai-agent-or-service-access-token",level:2},{value:"Sending a task to the AI Agent implementing the Nevermined Query Protocol",id:"sending-a-task-to-the-ai-agent-implementing-the-nevermined-query-protocol",level:2},{value:"Sending a task to the AI Agent or Service",id:"sending-a-task-to-the-ai-agent-or-service",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"how-subscribers-can-query-ai-agents",children:"How Subscribers can query AI Agents?"})}),"\n",(0,r.jsx)(t.p,{children:"Once a user or agent is a subscriber of Payment Plan, if this Plan has some AI Agents or Services attached to it, the user can query these AI Agents or Services."}),"\n",(0,r.jsxs)(t.p,{children:["For identifying the user as a valid subscriber, they need to query the HTTP requests to AI Agent via a Nevermined Proxy instance and sending a valid ",(0,r.jsx)(t.strong,{children:"Access Token"}),". This is sent using the standard ",(0,r.jsx)(t.strong,{children:"HTTP Authorization header"}),"."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsxs)(t.p,{children:["Nevermined Proxy instances are ",(0,r.jsx)(t.strong,{children:"standard HTTP Proxies"})," in charge of ",(0,r.jsx)(t.strong,{children:"authorize users"})," trying to access AI Agents or Services."]})}),"\n",(0,r.jsx)(t.p,{children:"Once a user is a subscriber sending a request is quite simple."}),"\n",(0,r.jsx)(t.h2,{id:"get-the-ai-agent-or-service-access-token",children:"Get the AI Agent or Service Access Token"}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Typescript",value:"typescript"}],children:[(0,r.jsx)(o.Z,{value:"python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:"access_config = payments.get_service_token(agent_DID)\n# OUTPUT: accessConfig:\n# {\n#  accessToken: 'eJyNj0sKgDAURP9lJQ ....',\n#  neverminedProxyUri: 'https://proxy.testing.nevermined.app'\n# }    \n"})})}),(0,r.jsx)(o.Z,{value:"typescript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"\nconst subscriberQueryOpts = await payments.getServiceAccessConfig(agentDID)\n// OUTPUT: subscriberQueryOpts:\n// {\n//  accessToken: 'eJyNj0sKgDAURP9lJQ ....',\n//  neverminedProxyUri: 'https://proxy.testing.nevermined.app'\n// }  \n\n"})})})]}),"\n",(0,r.jsx)(t.h2,{id:"sending-a-task-to-the-ai-agent-implementing-the-nevermined-query-protocol",children:"Sending a task to the AI Agent implementing the Nevermined Query Protocol"}),"\n",(0,r.jsxs)(t.p,{children:["The ",(0,r.jsx)(t.a,{href:"https://docs.nevermined.io/docs/protocol/query-protocol",children:"Nevermined Query Protocol"})," standardizes the interface of AI Agents and Services. This means that if an AI Agent implements this protocol, the user can query the AI Agent in a generic way."]}),"\n",(0,r.jsxs)(a.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Typescript",value:"typescript"}],children:[(0,r.jsx)(o.Z,{value:"python",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-python",children:'# Here we are configuring the Task we are sending to the Agent. Please check the Query Protocol documentation for more information.\n# https://docs.nevermined.io/docs/protocol/query-protocol#tasks-attributes\nai_task = {\n  query: "https://www.youtube.com/watch?v=0tZFQs7qBfQ",\n  name: "transcribe",\n  "additional_params": [],\n  "artifacts": []\n}\n\ntask_result = payments.ai_protocol.create_task(agentDID, ai_task)\n\n'})})}),(0,r.jsx)(o.Z,{value:"typescript",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:'// Here we are configuring the Task we are sending to the Agent. Please check the Query Protocol documentation for more information.\n// https://docs.nevermined.io/docs/protocol/query-protocol#tasks-attributes\nconst aiTask = {\n  query: "https://www.youtube.com/watch?v=0tZFQs7qBfQ",\n  name: "transcribe",\n  "additional_params": [],\n  "artifacts": []\n}\n\n// the subscriberQueryOpts comes from the previous step the previous step\nconst taskResult = await payments.query.createTask(agentDID, aiTask, subscriberQueryOpts)\n// OUTPUT: taskResult:\n// {\n//  status: 201,\n//  data: { task_id: \'task-1234\' }\n// }  \n\n'})})})]}),"\n",(0,r.jsx)(t.h2,{id:"sending-a-task-to-the-ai-agent-or-service",children:"Sending a task to the AI Agent or Service"}),"\n",(0,r.jsxs)(t.p,{children:["Nevermined recommends to use the ",(0,r.jsx)(t.a,{href:"https://docs.nevermined.io/docs/protocol/query-protocol",children:"Nevermined Query Protocol"})," but doesn't enforce it."]}),"\n",(0,r.jsx)(t.admonition,{type:"info",children:(0,r.jsx)(t.p,{children:"Because Nevermined authorizes standard HTTP Requests can be used to protect any kind of AI Agent or Service exposing an HTTP API."})}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-bash",children:'export AGENT_ACCESS_TOKEN="eJyNj0sKgDAURP9lJQ..."\n\ncurl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $AGENT_ACCESS_TOKEN" -d "{\'query\': \'hey there\'}" https://proxy.testing.nevermined.app/ask\n\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},2983:(e,t,n)=>{n.d(t,{Z:()=>o});n(7294);var r=n(512);const s={tabItem:"tabItem_Ymn6"};var a=n(5893);function o(e){let{children:t,hidden:n,className:o}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,r.Z)(s.tabItem,o),hidden:n,children:t})}},599:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),s=n(512),a=n(2466),o=n(6550),i=n(469),c=n(1980),l=n(7392),u=n(812);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:s}}=e;return{value:t,label:n,attributes:r,default:s}}))}(n);return function(e){const t=(0,l.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const s=(0,o.k6)(),a=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,c._X)(a),(0,r.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function g(e){const{defaultValue:t,queryString:n=!1,groupId:s}=e,a=h(e),[o,c]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:a}))),[l,d]=m({queryString:n,groupId:s}),[g,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,u.Nk)(n);return[s,(0,r.useCallback)((e=>{n&&a.set(e)}),[n,a])]}({groupId:s}),v=(()=>{const e=l??g;return p({value:e,tabValues:a})?e:null})();(0,i.Z)((()=>{v&&c(v)}),[v]);return{selectedValue:o,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);c(e),d(e),b(e)}),[d,b,a]),tabValues:a}}var b=n(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=n(5893);function f(e){let{className:t,block:n,selectedValue:r,selectValue:o,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:l}=(0,a.o5)(),u=e=>{const t=e.currentTarget,n=c.indexOf(t),s=i[n].value;s!==r&&(l(t),o(s))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},t),children:i.map((e=>{let{value:t,label:n,attributes:a}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>c.push(e),onKeyDown:d,onClick:u,...a,className:(0,s.Z)("tabs__item",v.tabItem,a?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function x(e){let{lazy:t,children:n,selectedValue:a}=e;const o=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:(0,s.Z)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:o.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function A(e){const t=g(e);return(0,y.jsxs)("div",{className:(0,s.Z)("tabs-container",v.tabList),children:[(0,y.jsx)(f,{...t,...e}),(0,y.jsx)(x,{...t,...e})]})}function k(e){const t=(0,b.Z)();return(0,y.jsx)(A,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>o});var r=n(7294);const s={},a=r.createContext(s);function o(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);