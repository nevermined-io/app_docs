"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6386],{9589:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var n=i(5893),s=i(1151);const r={sidebar_position:2,description:"How to accept payments in your Streamlit application"},a="How to accept payments in your Streamlit application",o={id:"tutorials/ai/streamlit",title:"How to accept payments in your Streamlit application",description:"How to accept payments in your Streamlit application",source:"@site/docs/tutorials/ai/02-streamlit.md",sourceDirName:"tutorials/ai",slug:"/tutorials/ai/streamlit",permalink:"/docs/tutorials/ai/streamlit",draft:!1,unlisted:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/ai/02-streamlit.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"How to accept payments in your Streamlit application"},sidebar:"tutorialSidebar",previous:{title:"Where to deploy your AI and get paid",permalink:"/docs/tutorials/ai/"},next:{title:"How to expose an AI agent and publish it into Nevermined",permalink:"/docs/tutorials/ai/ai-service"}},c={},l=[{value:"How to setup a Streamlit Subscription Plan",id:"how-to-setup-a-streamlit-subscription-plan",level:2},{value:"Step 1 - Set up your Builder Account in Nevermined",id:"step-1---set-up-your-builder-account-in-nevermined",level:3},{value:"Step 2 - Set up Stripe",id:"step-2---set-up-stripe",level:3},{value:"Step 3 - Create a Subscription Plan",id:"step-3---create-a-subscription-plan",level:3},{value:"Step 4 - Specify your AI Service",id:"step-4---specify-your-ai-service",level:2},{value:"Step 5 - Get your Streamlit Embeddable Widget",id:"step-5---get-your-streamlit-embeddable-widget",level:2},{value:"Embedding the Widget into your Streamlit App",id:"embedding-the-widget-into-your-streamlit-app",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"how-to-accept-payments-in-your-streamlit-application",children:"How to accept payments in your Streamlit application"}),"\n",(0,n.jsx)(t.p,{children:"First here's a short demo of the AI Streamlit Subscription app and how it works with Stripe\npayments:"}),"\n",(0,n.jsx)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/SrC6yju6dms?si=iaJOhDJp9rL1lpw6",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",allowfullscreen:!0}),"\n",(0,n.jsx)(t.p,{children:"In this video, you will see how a user is prompted via your Streamlit app to first log into your\napp. Once logged in and authenticated, users without credits will be prompted to subscribe to your\nAI. You have the choice to set up different subscription options, such as Free and Paid subscription\nplans. Once a user has subscribed, they will be able to access your AI under the conditions you set\nvia each plan\u2019s subscription prerequisites."}),"\n",(0,n.jsx)(t.h2,{id:"how-to-setup-a-streamlit-subscription-plan",children:"How to setup a Streamlit Subscription Plan"}),"\n",(0,n.jsxs)(t.p,{children:["The following is a step-by-step guide to creating your own Subscription Plan for your Streamlit app.\nPlease note that this product is still a work in progress, and we have not yet made the Stripe\npayment piece fully available in production. If you would like to use the production Stripe\nintegration to get paid, please contact us on ",(0,n.jsx)(t.a,{href:"https://discord.gg/PP4dQFd8",children:"Discord"})," or at\n",(0,n.jsx)(t.a,{href:"mailto:info@nevermined.io",children:"info@nevermined.io"}),"."]}),"\n",(0,n.jsx)(t.h3,{id:"step-1---set-up-your-builder-account-in-nevermined",children:"Step 1 - Set up your Builder Account in Nevermined"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Navigate to Nevermined"}),"\n",(0,n.jsx)(t.li,{children:"Click \u201cLog in\u201d"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Log in",src:i(91).Z+"",width:"624",height:"32"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Select your sign in method"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Sign in",src:i(3006).Z+"",width:"289",height:"500"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Once logged in, click the \u201cNew\u201d button in the top right, then click the \u201cCreate a plan\u201d button."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"step-2---set-up-stripe",children:"Step 2 - Set up Stripe"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"This will prompt you to continue creating your profile, updating it with your designated\npayment(s) type (i.e. Stripe)."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Profile",src:i(4162).Z+"",width:"317",height:"289"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"If you\u2019d like to use Stripe as your payment gateway, select the Stripe option and click the\n\u201cCreate Stripe account\u201d button"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Stripe",src:i(6287).Z+"",width:"522",height:"470"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Now you will set up your Stripe account"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"First enter your email and verify your phone number"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Email",src:i(6070).Z+"",width:"600",height:"500"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Next, describe your business for Stripe, including your business and personal details. This will help Stripe onboard you into their system."}),"\n",(0,n.jsx)(t.li,{children:"Once you\u2019ve navigated the set up details, click \u201cAgree and submit\u201d to finalize your account set up."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Finalize Account Setup",src:i(5226).Z+"",width:"245",height:"500"})}),"\n",(0,n.jsx)(t.p,{children:"Congratulations! You\u2019ve successfully set up your Stripe account. Now let\u2019s create your first\nsubscription plan."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Congratulations",src:i(3398).Z+"",width:"415",height:"429"})}),"\n",(0,n.jsx)(t.h3,{id:"step-3---create-a-subscription-plan",children:"Step 3 - Create a Subscription Plan"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Click the \u201cNew\u201d button, then the \u201cCreate a plan\u201d button"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create a Plan",src:i(4529).Z+"",width:"690",height:"277"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Describe the type of subscription plan you wish to create for your users. For example, you may\nwant to create a subscription plan that allows your users to buy a set number of access credits\nfor a certain price that your users will use to redeem access to your Streamlit app."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Subscription Type",src:i(3534).Z+"",width:"690",height:"445"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Next, choose the type of plan you want to enable for your users. Here you have the selection of\nallowing your users to access your app for a period of time, or by a set number of requests. We\u2019ve\nalso included a set of templates you can use, like Free, time period plans (i.e 1 month, 1 year,\netc.), custom plans, etc."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Request based plan - you can choose from a number of options, or create your own Custom plan.\nYou are able to edit:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Title - Give your plan a descriptive Subscription title."}),"\n",(0,n.jsx)(t.li,{children:"Price - Set the price for you credits based plan."}),"\n",(0,n.jsx)(t.li,{children:"No. of Credits - Set the number of credits your users receive when they buy this plan."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Subscription Details",src:i(6764).Z+"",width:"690",height:"459"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Time period based plan - you can choose from a number of options, or create your own Custom plan.\nYou are able to edit:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Title - Give your plan a descriptive Subscription title."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Price - Set the price for you credits based plan."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Duration - Set the duration of time that your users can access your app when they buy this plan. Options include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Hours"}),"\n",(0,n.jsx)(t.li,{children:"Days"}),"\n",(0,n.jsx)(t.li,{children:"Weeks"}),"\n",(0,n.jsx)(t.li,{children:"Months"}),"\n",(0,n.jsx)(t.li,{children:"Years"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Subscription Details",src:i(6405).Z+"",width:"690",height:"464"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Now review the subscription plan set up and confirm by clicking \u201cNext\u201d"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Subscription Review",src:i(3133).Z+"",width:"690",height:"402"})}),"\n",(0,n.jsx)(t.h2,{id:"step-4---specify-your-ai-service",children:"Step 4 - Specify your AI Service"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Next, you need to link your AI service, like your OpenAI GPT API, to the plan in order to manage\naccess to your AI service. To do this, click the \u201cCreate Content\u201d button."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Link AI Service",src:i(9393).Z+"",width:"690",height:"314"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"You start by describing the AI service you want to control access to. To do this, provide a Title,\nDescription and cover image for the AI service."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Describe AI Service",src:i(4065).Z+"",width:"690",height:"442"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Next, add your specific AI service information via your AI\u2019s API information. For example, if your\nAI is a text-to-text AI using OpenAI\u2019s completion capability, you will register the corresponding\nOpenAI POST: ",(0,n.jsx)(t.a,{href:"https://api.openai.com/v1/chat/completions",children:"https://api.openai.com/v1/chat/completions"}),". For other third party AI services, you\ncan register a similar API call."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"(Please note that we support the OpenAPI standard for API information. This means that you can also\nset how you\u2019d like to expose your endpoints.)"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Now add what type of security mechanism you\u2019d like to enforce for User Authentication to your AI\napp. The options include:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"No authentication"}),"\n",(0,n.jsx)(t.li,{children:"Basic Authentication with a username and password"}),"\n",(0,n.jsx)(t.li,{children:"Bearer Token authentication with designated access token."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Service Authentication",src:i(3425).Z+"",width:"690",height:"480"})}),"\n",(0,n.jsx)(t.p,{children:"In the case that you are using a third party service, like OpenAI, use the Bearer Token option to\nregister your OpenAI API Key (OPENAI_API_KEY). This can be found from the third party service\nprovider."}),"\n",(0,n.jsx)(t.p,{children:"(Please note that Nevermined fully encrypts the Bearer Token information that you submit so that\nthis information is never disclosed to anyone but yourse"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Now select the subscription plan that you created earlier and attach your AI service to this plan.\nThis will enable the controls you\u2019ve set for your AI app using this service. In this step you can\nalso set the number of credits needed for each user to make one request for this AI service."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Select Subscription",src:i(4272).Z+"",width:"690",height:"376"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Lastly, review your AI-service setup and click \u201cCreate\u201d."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Create Service",src:i(8309).Z+"",width:"690",height:"460"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Once you\u2019ve successfully created the AI service, you can see its widget by clicking the \u201cSee the\nasset\u201d button."}),"\n"]}),"\n",(0,n.jsx)(t.h2,{id:"step-5---get-your-streamlit-embeddable-widget",children:"Step 5 - Get your Streamlit Embeddable Widget"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"To create your embeddable widget into your Streamlit app, you will need your unique subscription\nplan identifier, or DID. You can get this by copying the URL for the AI API / webservice that you\njust created. To do this, first navigate to \u201cMy area \u2192 My assets\u201d."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Widget",src:i(5144).Z+"",width:"690",height:"234"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Click the 3 vertical dots for your AI webservice, and select \u201cSee Asset\u201d."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Asset details",src:i(2409).Z+"",width:"690",height:"176"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"From the AI webservice page, copy the URL to use in the next step."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Service URL",src:i(8187).Z+"",width:"975",height:"685"})}),"\n",(0,n.jsx)(t.h2,{id:"embedding-the-widget-into-your-streamlit-app",children:"Embedding the Widget into your Streamlit App"}),"\n",(0,n.jsxs)(t.p,{children:["The full example can be found ",(0,n.jsx)(t.a,{href:"https://github.com/nevermined-io/streamlit",children:"here"})]}),"\n",(0,n.jsxs)(t.p,{children:["Start by adding the widget to your app with the ",(0,n.jsx)(t.em,{children:"did"})," of your webservice (e.g.\n",(0,n.jsx)(t.code,{children:"did:nv:5a06236a0bb1620c171a17a2e4d82935b1b63274011aeb1d9efcce87e83f0fee"}),")."]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'st.markdown(\'<iframe src="https://testing.nevermined.app/streamlit?did=did:nv:5a06236a0bb1620c171a17a2e4d82935b1b63274011aeb1d9efcce87e83f0fee" style="border-radius: 10px; width: 100%;" />\', unsafe_allow_html=True)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Wait for the user authentication token and proxy url. This should be added at the end of the app not\nto block other elements from rendering"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'html("""\n<script>\n    parent.window.addEventListener(\'message\', (e) => {\n        if (e.data.type === \'streamlit:token\') {\n            parent.window.token = e.data;\n        }\n    },false);\n<\/script>\n""", height=0)\n\nkey = 0\nwhile "nvm" not in st.session_state:\n    key += 1\n    token = st_javascript(\'parent.window.token\', key=key)\n    if token:\n        st.session_state["nvm"] = {\n            "jwt": token["data"]["jwtToken"]["accessToken"],\n            "url": f\'{token["data"]["proxyUrl"]}/ask\'\n        }\n        break\n    time.sleep(1)\n'})}),"\n",(0,n.jsx)(t.p,{children:"Use the returned authentication token and proxy url to make calls to the service. For example:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-python",children:'token = st.session_state["nvm"]["jwt"]\nurl = st.session_state["nvm"]["url"]\n\ndata = {"payload": "payload to post to the service"}\nheaders = {"Authorization": f"Bearer {token}"}\n\nresponse = requests.post(url, json=data, headers=headers)\n'})})]})}function p(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},91:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step1_2-a3c119ace8eb460aaea08c067704ea06.png"},3006:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step1_3-c54b9dbd696c5f736d2f1a44658146cd.png"},3398:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step2_4-d89529b762ff1172e0928117c2e37f7b.png"},4162:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step2_5-6b9be6731f0b565d0abbb922576d3396.png"},6287:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step2_6-ae9f24a1de8294da3abb2a5679bfd3b1.png"},6070:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step2_7_a-381e991fe68124ee3d4a3dd59c836286.png"},5226:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step2_7_c-e89550d904f4fe3690f828259b225ba5.png"},6764:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step3_10_a-6f975fb4943817861e618a97dc2468fb.png"},6405:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step3_10_b-44869f7e09e4c8789da827d2cd3d8ffc.png"},3133:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step3_11-102773dac6c1707adc3d2adfb3fbc9c4.png"},4529:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step3_8-5a9c84a14b66659c10c892365e7ce0ac.png"},3534:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step3_9-44da2dfdfd0330c2ef21bfeeebe98ac7.png"},9393:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step4_12-37975f33c318a90d917a326c5680de53.png"},4065:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step4_13-3095f7f62ce878d6bfd598e4fcc0f8d0.png"},4272:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step4_16-776956e5da4eae9e7d3cf9b7d4ace932.png"},8309:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step4_17-8b000926cefc9ceb3bb22aacc185a5de.png"},3425:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step4_18-27b4774e55ed86e11143eeda5bbf5b8e.png"},5144:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step5_19-3989dae0410b23b141b8d9b78c14d8ad.png"},2409:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step5_20-01f33e7f92d1248b82044f6b5b04efb4.png"},8187:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/step5_21-e28f290cca0d5607ac28024bd66ad87b.jpeg"},1151:(e,t,i)=>{i.d(t,{Z:()=>o,a:()=>a});var n=i(7294);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);