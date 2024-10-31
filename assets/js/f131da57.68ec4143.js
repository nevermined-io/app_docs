"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[9721],{4780:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var n=s(5893),r=s(1151),a=s(599),i=s(2983);const o={sidebar_position:8,description:"How AI Builders can process AI Tasks?"},l="How AI Builders can process AI Tasks?",c={id:"libraries/process-tasks",title:"How AI Builders can process AI Tasks?",description:"How AI Builders can process AI Tasks?",source:"@site/docs/libraries/08-process-tasks.md",sourceDirName:"libraries",slug:"/libraries/process-tasks",permalink:"/docs/libraries/process-tasks",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/libraries/08-process-tasks.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{sidebar_position:8,description:"How AI Builders can process AI Tasks?"},sidebar:"tutorialSidebar",previous:{title:"How Subscribers can query AI Agents?",permalink:"/docs/libraries/query-agents"},next:{title:"Code Examples",permalink:"/docs/libraries/examples"}},u={},d=[{value:"Benefits of delegating the API to Nevermined AI Infrastructure",id:"benefits-of-delegating-the-api-to-nevermined-ai-infrastructure",level:2},{value:"How to process AI Tasks?",id:"how-to-process-ai-tasks",level:2},{value:"AI Tasks and Steps",id:"ai-tasks-and-steps",level:3}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"how-ai-builders-can-process-ai-tasks",children:"How AI Builders can process AI Tasks?"})}),"\n",(0,n.jsx)(t.admonition,{type:"note",children:(0,n.jsxs)(t.p,{children:["This feature is specific for AI Agents Services using the ",(0,n.jsx)("ins",{children:"Nevermined AI Hub"}),"."]})}),"\n",(0,n.jsx)(t.h2,{id:"benefits-of-delegating-the-api-to-nevermined-ai-infrastructure",children:"Benefits of delegating the API to Nevermined AI Infrastructure"}),"\n",(0,n.jsx)(t.p,{children:"When a AI Builder creates an AI Agent and delegates the maintenance and execution of the HTTP API to Nevermined, they can just focus in the AI piece. This has several benefits for them:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Focus on the AI"}),": The AI Builder can focus on the AI model and the AI Agent logic. Nevermined will take care of the execution of the API, authorization, etc."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Generic Interface"}),": The AI Agent will be accessible via a generic interface, the ",(0,n.jsx)(t.a,{href:"https://docs.nevermined.io/docs/protocol/query-protocol",children:"Nevermined Query Protocol"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Availability"}),": Nevermined will take care of having the AI Agent API available 24/7."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Scalability"}),": Nevermined will take care of the scaling of the AI Agent HTTP API."]}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"how-to-process-ai-tasks",children:"How to process AI Tasks?"}),"\n",(0,n.jsx)(t.p,{children:"The AI Builders can create simple worker AI process subscribing to Nevermined to retrieving the AI tasks sent by the users."}),"\n",(0,n.jsxs)(a.Z,{defaultValue:"python",values:[{label:"Python",value:"python"},{label:"Typescript",value:"typescript"}],children:[(0,n.jsx)(i.Z,{value:"python",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:"import asyncio\n\nasyncio.create_task(builder.ai_protocol.subscribe(callback_function, join_account_room=True, join_agent_rooms=[], subscribe_event_types=['step-updated'], get_pending_events_on_subscribe=True))\n\ncallback_function = (step) => {\n  print('Step received', step)\n  await payments.ai_protocol.update_step(did=step['did'], \n    task_id=step['task_id'], \n    step_id=step['step_id'], \n    step={'step_id': step['step_id'],\n      'task_id': step['task_id'], \n      'step_status': AgentExecutionStatus.Completed.value,\n      'output': 'success',\n      'is_last': True,\n      'cost': 1\n    })\n}\n"})})}),(0,n.jsx)(i.Z,{value:"typescript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"const opts = {\n  joinAccountRoom: true, // To subscribe to all the events related to the account\n  joinAgentRooms: [], // To which agents the agent wants to subscribe. This is useful for AI developers who want to process several agents tasks in parallel\n  subscribeEventTypes: ['step-updated'], // To which events the agent wants to subscribe\n  getPendingEventsOnSubscribe: true // To get the pending events when the agent connects\n}\n\nawait paymentsBuilder.query.subscribe(callbackFunction, opts)\n\nconst callbackFunction = (data: any) => {\n  console.log('Step received', data)\n  const step = JSON.parse(data)\n  await paymentsBuilder.query.updateStep(step.did, {\n    step_id: step.step_id,\n    task_id: step.task_id,\n    step_status: AgentExecutionStatus.Completed,\n    is_last: true,\n    output: 'LFG!',\n    cost: 1\n  })\n}\n"})})})]}),"\n",(0,n.jsx)(t.p,{children:"Using this, create an AI Agent is as simple as calling a subscribe and resolving the steps part of the tasks."}),"\n",(0,n.jsx)(t.p,{children:"As you can see in the above code, the agent can subscribe to the events related with AI tasks created by the users and process them. For doing that it just needs to implement a callback function that will get the AI task input parameters and process it."}),"\n",(0,n.jsx)(t.h3,{id:"ai-tasks-and-steps",children:"AI Tasks and Steps"}),"\n",(0,n.jsx)(t.p,{children:"The AI tasks are composed by several steps. Each step is a part of the task that the AI Agent needs to process. The steps are processed sequentially and the agent can update the status of the step and the output of the step. You can see the steps as a workflow that the AI Agent needs to process to be completed."}),"\n",(0,n.jsxs)(t.p,{children:["The AI Agent only needs to process the steps and update the status of the step and the output of the step. The rest of the logic is managed by ",(0,n.jsx)(t.strong,{children:"Nevermined AI Hub"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["When a user requests a task to an AI Agent, by default is created one task with one step. This first step has the ",(0,n.jsx)(t.strong,{children:'"init"'})," name. When the AI agent receives the ",(0,n.jsx)(t.strong,{children:"init"})," step can:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If the AI task is simple and ",(0,n.jsx)(t.strong,{children:"doesn't require several steps"}),", it can process the step and update the status of the step to ",(0,n.jsx)(t.strong,{children:"Completed"})," and the ",(0,n.jsx)(t.strong,{children:"is_last"})," attribute as ",(0,n.jsx)(t.strong,{children:"true"}),". This will mark the whole task as completed."]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsxs)(t.p,{children:["If the AI task requires ",(0,n.jsx)(t.strong,{children:"multiple steps"}),", the AI Agent can create more steps and setup the order of execution and configuration of them. This can be done by defining the ",(0,n.jsx)(t.strong,{children:"name"}),", ",(0,n.jsx)(t.strong,{children:"order"})," and ",(0,n.jsx)(t.strong,{children:"predecessor"})," step."]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"We will see different code examples about how to do this in the following section."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},2983:(e,t,s)=>{s.d(t,{Z:()=>i});s(7294);var n=s(512);const r={tabItem:"tabItem_Ymn6"};var a=s(5893);function i(e){let{children:t,hidden:s,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:s,children:t})}},599:(e,t,s)=>{s.d(t,{Z:()=>k});var n=s(7294),r=s(512),a=s(2466),i=s(6550),o=s(469),l=s(1980),c=s(7392),u=s(812);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function p(e){const{values:t,children:s}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:s,attributes:n,default:r}}=e;return{value:t,label:s,attributes:n,default:r}}))}(s);return function(e){const t=(0,c.lx)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,s])}function h(e){let{value:t,tabValues:s}=e;return s.some((e=>e.value===t))}function b(e){let{queryString:t=!1,groupId:s}=e;const r=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:s}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!s)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return s??null}({queryString:t,groupId:s});return[(0,l._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(r.location.search);t.set(a,e),r.replace({...r.location,search:t.toString()})}),[a,r])]}function f(e){const{defaultValue:t,queryString:s=!1,groupId:r}=e,a=p(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:s}=e;if(0===s.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:s}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${s.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=s.find((e=>e.default))??s[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[c,d]=b({queryString:s,groupId:r}),[f,m]=function(e){let{groupId:t}=e;const s=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,a]=(0,u.Nk)(s);return[r,(0,n.useCallback)((e=>{s&&a.set(e)}),[s,a])]}({groupId:r}),g=(()=>{const e=c??f;return h({value:e,tabValues:a})?e:null})();(0,o.Z)((()=>{g&&l(g)}),[g]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!h({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),m(e)}),[d,m,a]),tabValues:a}}var m=s(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=s(5893);function x(e){let{className:t,block:s,selectedValue:n,selectValue:i,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,a.o5)(),u=e=>{const t=e.currentTarget,s=l.indexOf(t),r=o[s].value;r!==n&&(c(t),i(r))},d=e=>{let t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const s=l.indexOf(e.currentTarget)+1;t=l[s]??l[0];break}case"ArrowLeft":{const s=l.indexOf(e.currentTarget)-1;t=l[s]??l[l.length-1];break}}t?.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":s},t),children:o.map((e=>{let{value:t,label:s,attributes:a}=e;return(0,v.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>l.push(e),onKeyDown:d,onClick:u,...a,className:(0,r.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":n===t}),children:s??t},t)}))})}function A(e){let{lazy:t,children:s,selectedValue:a}=e;const i=(Array.isArray(s)?s:[s]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:(0,r.Z)("margin-top--md",e.props.className)}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:i.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function I(e){const t=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,v.jsx)(x,{...t,...e}),(0,v.jsx)(A,{...t,...e})]})}function k(e){const t=(0,m.Z)();return(0,v.jsx)(I,{...e,children:d(e.children)},String(t))}},1151:(e,t,s)=>{s.d(t,{Z:()=>o,a:()=>i});var n=s(7294);const r={},a=n.createContext(r);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);