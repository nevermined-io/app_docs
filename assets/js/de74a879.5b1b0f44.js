"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6104],{369:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>a,toc:()=>p});var i=n(5893),o=n(1151);const r={sidebar_position:3,description:"How to integrate the Nevermined Payments Python library"},s="Tutorial on how to use the Nevermined Payments Protocol in Python",a={id:"tutorials/integration/python-integration",title:"Tutorial on how to use the Nevermined Payments Protocol in Python",description:"How to integrate the Nevermined Payments Python library",source:"@site/docs/tutorials/integration/python-integration.mdx",sourceDirName:"tutorials/integration",slug:"/tutorials/integration/python-integration",permalink:"/docs/tutorials/integration/python-integration",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/integration/python-integration.mdx",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,description:"How to integrate the Nevermined Payments Python library"},sidebar:"tutorialSidebar",previous:{title:"Tutorial on how to use the Nevermined Payments Protocol in a React app",permalink:"/docs/tutorials/integration/nextjs-react-payments"},next:{title:"For Web3 users",permalink:"/docs/tutorials/web3/"}},l={},p=[{value:"Installation",id:"installation",level:2},{value:"Initialize the payments library",id:"initialize-the-payments-library",level:3},{value:"Using payments library",id:"using-payments-library",level:3}];function c(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"tutorial-on-how-to-use-the-nevermined-payments-protocol-in-python",children:"Tutorial on how to use the Nevermined Payments Protocol in Python"}),"\n",(0,i.jsx)(t.p,{children:"The objective of this library is to make possible the integration of Nevermined payments in the Python code ecosystem. This library provides a set of functions to interact with the Nevermined network, including the ability to register subscriptions and subscribe to web services and get the JWT access token to call them."}),"\n",(0,i.jsx)(t.h2,{id:"installation",children:"Installation"}),"\n",(0,i.jsxs)(t.p,{children:["Install the ",(0,i.jsx)(t.a,{href:"https://pypi.org/project/payments-py/",children:"nevermined payments library"})," using pip:"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"pip install payments-py\n"})}),"\n",(0,i.jsx)(t.h3,{id:"initialize-the-payments-library",children:"Initialize the payments library"}),"\n",(0,i.jsx)(t.p,{children:"To initialize the payments library, you need to provide the following parameters:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["Nvm Api key: It's a string that identifies the session key of the account abstraction and some extra data as the marketplace auth token. It works similar to a jwt but for blockchain accounts. You can find more in ",(0,i.jsx)(t.a,{href:"https://docs.zerodev.app/sdk/plugins/session-keys",children:"zeroDev docs"}),"."]}),"\n",(0,i.jsxs)(t.li,{children:["Environment: It's an enum that represents the environment where the library will interact with the Nevermined network. It can be ",(0,i.jsx)(t.code,{children:"Environment.appTesting"})," or ",(0,i.jsx)(t.code,{children:"Environment.appArbitrum"}),"."]}),"\n",(0,i.jsx)(t.li,{children:"App id: It's a string that represents the app id. Currently is optional."}),"\n",(0,i.jsx)(t.li,{children:"Version: It's a string that represents the version of the app. Currently is optional."}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'from nevermined_payments import Payments\n\npayments = Payments(nvm_api_key=nvm_api_key, environment=Environment.appTesting, app_id="your_app_id", version="1.0.0")\n\n'})}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can find your ",(0,i.jsx)(t.code,{children:"nvm_api_key"})," in the ",(0,i.jsx)(t.a,{href:"https://testing.nevermined.app/en/account",children:"your profile page"}),". Just click the button and sign the session key. It will take some seconds."]})}),"\n",(0,i.jsx)(t.h3,{id:"using-payments-library",children:"Using payments library"}),"\n",(0,i.jsx)(t.p,{children:"Once you have initialized the payments library, you can use the methods as following:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:'    response = payment.create_subscription(name="test-py", description="test", price=1000000, token_address="0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d", amount_of_credits=100, duration=30, tags=["test"])\n'})}),"\n",(0,i.jsxs)(t.p,{children:["In the following link you can find the complete documentation of the library: ",(0,i.jsx)(t.a,{href:"https://nevermined-io.github.io/payments-py/",children:"payments-py"}),"."]})]})}function d(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(7294);const o={},r=i.createContext(o);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);