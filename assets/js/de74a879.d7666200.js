"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6104],{880:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>h});var i=n(5893),r=n(1151);const o={sidebar_position:6,description:"How to integrate the Nevermined Payments Python library"},a="Tutorial on how to use the Nevermined Payments Protocol in Python",s={id:"tutorials/integration/python-integration",title:"Tutorial on how to use the Nevermined Payments Protocol in Python",description:"How to integrate the Nevermined Payments Python library",source:"@site/docs/tutorials/integration/python-integration.mdx",sourceDirName:"tutorials/integration",slug:"/tutorials/integration/python-integration",permalink:"/docs/tutorials/integration/python-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/integration/python-integration.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6,description:"How to integrate the Nevermined Payments Python library"},sidebar:"tutorialSidebar",previous:{title:"What is a Nvm Api Key? How to obtain it and how to use it",permalink:"/docs/tutorials/integration/nvm-api-keys"},next:{title:"Tutorial on how to use the Nevermined Payments Protocol in a React app",permalink:"/docs/tutorials/integration/nextjs-react-payments"}},l={},h=[{value:"Installation",id:"installation",level:2},{value:"Initialize the payments library",id:"initialize-the-payments-library",level:3},{value:"Using payments library",id:"using-payments-library",level:3},{value:"Example",id:"example",level:2}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"tutorial-on-how-to-use-the-nevermined-payments-protocol-in-python",children:"Tutorial on how to use the Nevermined Payments Protocol in Python"})}),"\n",(0,i.jsx)(t.p,{children:"The objective of this library is to make possible the integration of Nevermined payments in the Python code ecosystem. This library provides a set of functions to interact with the Nevermined network, including the ability to register subscriptions and subscribe to web services and get the JWT access token to call them."}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["To have full details about how to use the ",(0,i.jsx)(t.a,{href:"../../libraries/",children:"Payments Library"}),", please visit the ",(0,i.jsx)(t.a,{href:"../../libraries/",children:"documentation section"})]})}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["Install the ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/payments-py/",children:"nevermined payments library"})," using pip:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"pip install payments-py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"initialize-the-payments-library",children:"Initialize the payments library"}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["In a previous tutorial we showed ",(0,i.jsx)(t.a,{href:"nvm-api-keys",children:"what is a Nvm Api Key and how to obtain it"}),"."]})}),"\n",(0,i.jsx)(t.p,{children:"To initialize the payments library, you need to provide the following parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Nvm Api key: It's a string that identifies the session key of the account abstraction and some extra data as the marketplace auth token. It works similar to a jwt but for blockchain accounts. You can find more in ",(0,i.jsx)(t.a,{href:"https://docs.zerodev.app/sdk/plugins/session-keys",children:"zeroDev docs"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Environment: It's an enum that represents the environment where the library will interact with the Nevermined network. It can be ",(0,i.jsx)(t.code,{children:"Environment.appTesting"})," or ",(0,i.jsx)(t.code,{children:"Environment.appArbitrum"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"App id: It's a string that represents the app id. Currently is optional."}),"\n",(0,i.jsx)(t.li,{children:"Version: It's a string that represents the version of the app. Currently is optional."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'from nevermined_payments import Payments\n\npayments = Payments(nvm_api_key=nvm_api_key, environment=Environment.appTesting, app_id="your_app_id", version="1.0.0")\n\n'})}),"\n",(0,i.jsx)(t.h3,{id:"using-payments-library",children:"Using payments library"}),"\n",(0,i.jsx)(t.p,{children:"Once you have initialized the payments library, you can use the methods as following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'    response = payment.create_subscription(name="test-py", description="test", price=1000000, token_address="0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d", amount_of_credits=100, duration=30, tags=["test"])\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the following link you can find the complete documentation of the library: ",(0,i.jsx)(t.a,{href:"https://nevermined-io.github.io/payments-py/",children:"payments-py"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.p,{children:"Here you can find an example of how to use the payments library and try yourself:"}),"\n",(0,i.jsx)("a",{href:"https://colab.research.google.com/drive/1mjvecOYHmplKxCCG1RBY56vAI4Bxvu0F",target:"_parent",children:(0,i.jsx)("img",{src:"https://colab.research.google.com/assets/colab-badge.svg",alt:"Open In Colab"})}),"\n",(0,i.jsx)("a",{href:"https://colab.research.google.com/drive/1mjvecOYHmplKxCCG1RBY56vAI4Bxvu0F",target:"_parent",children:(0,i.jsx)(t.img,{alt:"Colab",src:n(1100).Z+"",width:"1600",height:"940"})})]})}function d(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(p,{...e})}):p(e)}},1100:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/Colab-f526db238546fdbcb8bd64140189c325.jpeg"},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>a});var i=n(7294);const r={},o=i.createContext(r);function a(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);