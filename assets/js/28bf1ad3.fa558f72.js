"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[2401],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(n),h=r,m=d["".concat(l,".").concat(h)]||d[h]||c[h]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4630:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=n(7462),r=(n(7294),n(3905));const o={sidebar_position:9,description:"How to expose an AI agent and publish it into Nevermined"},i="How to expose an AI agent and publish it into Nevermined",s={unversionedId:"tutorials/ai-service",id:"tutorials/ai-service",title:"How to expose an AI agent and publish it into Nevermined",description:"How to expose an AI agent and publish it into Nevermined",source:"@site/docs/tutorials/09-ai-service.md",sourceDirName:"tutorials",slug:"/tutorials/ai-service",permalink:"/docs/tutorials/ai-service",draft:!1,editUrl:"https://github.com/nevermined-io/app_docs/tree/main/docs/tutorials/09-ai-service.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,description:"How to expose an AI agent and publish it into Nevermined"},sidebar:"tutorialSidebar",previous:{title:"How to integrate an AI web service in an application",permalink:"/docs/tutorials/webservice-integration"},next:{title:"How to use Smart Subscriptions to protect Smart Contracts?",permalink:"/docs/tutorials/smart-contract-access"}},l={},u=[{value:"Enviroment and dependencies",id:"enviroment-and-dependencies",level:2},{value:"venv as enviroment",id:"venv-as-enviroment",level:3},{value:"Dependencies",id:"dependencies",level:3},{value:"Synchronous service",id:"synchronous-service",level:2},{value:"Implementing a GET method",id:"implementing-a-get-method",level:3},{value:"Calling your AI model with parameters",id:"calling-your-ai-model-with-parameters",level:3},{value:"Using BackgroundTasks",id:"using-backgroundtasks",level:3},{value:"Protecting your endpoints",id:"protecting-your-endpoints",level:3},{value:"Implementing POST methods",id:"implementing-post-methods",level:3},{value:"Using ngrok as tunneling solution",id:"using-ngrok-as-tunneling-solution",level:2},{value:"Creating an account and generate Authtoken",id:"creating-an-account-and-generate-authtoken",level:3},{value:"Install and configure",id:"install-and-configure",level:3},{value:"Tunneling the AI service",id:"tunneling-the-ai-service",level:3},{value:"Registering your AI Service in Nevermined App",id:"registering-your-ai-service-in-nevermined-app",level:2},{value:"Before you register your Service",id:"before-you-register-your-service",level:3},{value:"Registering your AI Service",id:"registering-your-ai-service",level:3},{value:"Defining Endpoints URLs",id:"defining-endpoints-urls",level:4},{value:"Access to the details of the Service",id:"access-to-the-details-of-the-service",level:3},{value:"Consuming your AI Service",id:"consuming-your-ai-service",level:3},{value:"Examples",id:"examples",level:4}],p={toc:u};function c(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-to-expose-an-ai-agent-and-publish-it-into-nevermined"},"How to expose an AI agent and publish it into Nevermined"),(0,r.kt)("p",null,"In the following sections we will show how you can easily expose your AI model through web services endpoints.\nWith this endpoints up & running you will be able to register this service in Nevermined so you can safely share, and monetize, your AI model"),(0,r.kt)("h2",{id:"enviroment-and-dependencies"},"Enviroment and dependencies"),(0,r.kt)("p",null,"The tips and code examples we will provide in this tutorial assume you have developed your AI service using Python, so you need to be acquainted to working wiht Python projects."),(0,r.kt)("p",null,"We recommend you to use a enviroment manager to install the dependencies, like venv, conda, etc"),(0,r.kt)("h3",{id:"venv-as-enviroment"},"venv as enviroment"),(0,r.kt)("p",null,"For example, to create a virtual env for your project you can use venv:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"python -m venv .venv\nsource .venv/bin/activate\n")),(0,r.kt)("p",null,"All the dependencies installed using ",(0,r.kt)("em",{parentName:"p"},"pip install")," will be installed  in the virtual enviroment and not in your OS."),(0,r.kt)("p",null,"To stop using the virtual enviroment you just need to use the ",(0,r.kt)("em",{parentName:"p"},"deactivate")," command"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"deactivate\n")),(0,r.kt)("h3",{id:"dependencies"},"Dependencies"),(0,r.kt)("p",null,"The dependencies needed in order to run your services are ",(0,r.kt)("em",{parentName:"p"},"fastapi"),", and ",(0,r.kt)("em",{parentName:"p"},"uvicorn"),"."),(0,r.kt)("p",null,"You can install this dependencies in your enviroment using ",(0,r.kt)("em",{parentName:"p"},"pip install")," or you can use a setup.py file like the one included in this repository. If you use the setup.py file, you need to execute:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"pip3 install -e .\n")),(0,r.kt)("h2",{id:"synchronous-service"},"Synchronous service"),(0,r.kt)("p",null,"The first approach to expose your AI model would be to implement a synchronous endpoint, that takes some parameters from a GET request, call your AI function, waits until the function finish the computation, and return the result."),(0,r.kt)("p",null,"The sync approach is valid when the execution of your AI model/service does not take long. If the service takes over a minute to complete the execution and return a response, we would strongly suggest you to take an asynchronous approach."),(0,r.kt)("p",null,"To implement this sync service we will use FastAPI framework. You will see how easy is to run a service wit a few lines of code."),(0,r.kt)("p",null,"You need to install both ",(0,r.kt)("em",{parentName:"p"},"fastapi")," and ",(0,r.kt)("em",{parentName:"p"},"uvicorn")," dependencies."),(0,r.kt)("h3",{id:"implementing-a-get-method"},"Implementing a GET method"),(0,r.kt)("p",null,"In the following examples we will show you some code snippets with the relevant pieces of code to implement these service. But you can see the full example in the sync_service.py file contained in this repository. "),(0,r.kt)("p",null,"First thing to do is to define a FastAPI app:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'app = FastAPI( title="Awesome AI service",\n    summary="Brief summary of your service here",\n    description="Full description of your awesome AI model here",\n    version="1.0.0",\n)\n')),(0,r.kt)("p",null,"The information passed to the FastAPI object will be use to construct the docs of the service, so take your time to describe your service!"),(0,r.kt)("p",null,"Let's implement a ",(0,r.kt)("em",{parentName:"p"},"Hello World")," endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/")\ndef home():\n    return "Hello World!"\n')),(0,r.kt)("p",null,"And that's it, you have your first endpoint implemented"),(0,r.kt)("p",null,"To run the service just execute this command from the root folder of your project:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"uvicorn service.sync_service:app --reload\n")),(0,r.kt)("p",null,"If you navigate to ",(0,r.kt)("em",{parentName:"p"},"http://localhost:8000/docs")," in your browser, you will see the documentation generated automatically by FastAPI."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Api Docs",src:n(245).Z,width:"2814",height:"1536"})),(0,r.kt)("p",null,"To call the ",(0,r.kt)("em",{parentName:"p"},"Hello World")," endpoint you just need to browse to ",(0,r.kt)("em",{parentName:"p"},"http://localhost:8000/")),(0,r.kt)("h3",{id:"calling-your-ai-model-with-parameters"},"Calling your AI model with parameters"),(0,r.kt)("p",null,"The next step is calling your AI service, using a couple of parameteres you get from the service request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'@app.get("/ai_service")\ndef ai_service(param1, param2):\n    logger.debug("Processing AI service with params: " + param1 + \',\' + param2)\n\n    # calling the AI function. It returns a string with the result\n    result = awesome_ai_service.execute(param1, param2)\n\n    return {"result": result}\n')),(0,r.kt)("p",null,"Really simple, we just defined an ",(0,r.kt)("em",{parentName:"p"},"ai-service")," endpoint, that gets two parameters, param1 and param2, you will use to call your awesome AI service. The AI service returns a string result we use to compose a json response. "),(0,r.kt)("p",null,"If you want to try it, you just need to put this in your browser: ",(0,r.kt)("em",{parentName:"p"},"http://localhost:8000/ai-service?param1=value1","\xb6","m2=value2")),(0,r.kt)("h3",{id:"using-backgroundtasks"},"Using BackgroundTasks"),(0,r.kt)("p",null,"Depending on the nature of your service you might need some way of executing some tasks once your endpoint returns the response.\nFor instance, imagine that your AI function returns a path where it placed a generated pdf file, and your endpoint returns the binary content of the file."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"@app.get(\"/ai_service_binary\")\ndef ai_service_binary(param1, param2, background_tasks: BackgroundTasks):\n    logger.debug(\"Processing AI service with params: \" + param1 + ',' + param2)\n\n    # calling the AI function. It returns a path where a result pdf file was generated\n    result_path = awesome_ai_service.execute(param1, param2)\n   \n    with open(result_path, \"rb\") as file:\n        bytes_stream = BytesIO(file.read())\n\n    # close the byte stream using a background task, after its been used for the response \n    background_tasks.add_task(bytes_stream.close)\n   \n    # returns the content of a pdf\n    headers = {'Content-Disposition': 'inline; filename=\"result.pdf\"'}\n    return Response(bytes_stream.getvalue(), headers=headers, media_type='application/pdf')\n")),(0,r.kt)("p",null,"In this example, we use the BackgroundTasks instance to close the bytes stream once we use it to compose the binary response, but you can use it to perform any kind of task you need."),(0,r.kt)("h3",{id:"protecting-your-endpoints"},"Protecting your endpoints"),(0,r.kt)("p",null,"Now you are able to implement your own endpoints to call your AI model, but until this time your endpoints are open, so anyone can use them, so let's see how you can protect your endpoints with a Bearer Token."),(0,r.kt)("p",null,"First you need to indicate where is your token and how to validate it. As a simple approach, you can use an enviroment variable to define the value of the token, and just compare if the request contains an Authorization Header wich value is the same"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'bearer_scheme = HTTPBearer()\nBEARER_TOKEN = os.environ.get("BEARER_TOKEN")\nassert BEARER_TOKEN is not None\n\ndef validate_token(credentials: HTTPAuthorizationCredentials = Depends(bearer_scheme)):\n    if credentials.scheme != "Bearer" or credentials.credentials != BEARER_TOKEN:\n        raise HTTPException(status_code=401, detail="Invalid or missing token")\n    return credentials\n')),(0,r.kt)("p",null,"And now we need to modify slighly the creation of the app to include this validate token function:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'app = FastAPI( title="Awesome AI service",\n    summary="Brief summary of your service here",\n    description="Full description of your awesome AI model here",\n    version="1.0.0",\n    dependencies=[Depends(validate_token)]\n)\n')),(0,r.kt)("p",null,"And that's it, your endpoints are protected. If you try now to start the service you will see an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"assert BEARER_TOKEN is not None\n           ^^^^^^^^^^^^^^^^^^^^^^^^\n")),(0,r.kt)("p",null,"You need to create the enviroment variable with the token value you want to use:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export BEARER_TOKEN=1234\n")),(0,r.kt)("p",null,"Of course using ",(0,r.kt)("em",{parentName:"p"},"1234")," as Authorization token is not the best practice here. You can use an online uuid generator tool to create a random token."),(0,r.kt)("p",null,"If you try now to access to the ",(0,r.kt)("em",{parentName:"p"},"Hello World")," endpoint you'll get a ",(0,r.kt)("em",{parentName:"p"},"Not Authenticated")," error"),(0,r.kt)("p",null,"Try with this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: Bearer 1234" -X GET "localhost:8000/"\n')),(0,r.kt)("h3",{id:"implementing-post-methods"},"Implementing POST methods"),(0,r.kt)("p",null,"If you need, o prefer, to implement your endpoints as POST methods instead, FastAPI makes it quite easy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},'\nfrom pydantic import BaseModel\n\nclass AIRequest(BaseModel):\n    param1: str\n    param2: str | None = None\n\n@app.get("/ai_service")\ndef ai_service(aiRequest: AIRequest):\n    logger.debug("Processing AI service with params: " + aiRequest.param1 + \',\' + aiRequest.param2)\n\n    # calling the AI function. It returns a string with the result\n    result = awesome_ai_service.execute(aiRequest.param1, aiRequest.param2)\n\n    return {"result": result}\n')),(0,r.kt)("h2",{id:"using-ngrok-as-tunneling-solution"},"Using ngrok as tunneling solution"),(0,r.kt)("p",null,"If you want to test how you can register your AI service on Nevermined App, you will need a way to make your service accesible outside your laptop, if you are running the service locally."),(0,r.kt)("p",null,"Of course the best solution here would be to deploy your service on a Cloud service like Aws, Gcloud, or on an on-premise infraestructure, etc. But to test it in a quick way you can use a tunneling tool. There are several free alternatives, but maybe the most popular is ngrok."),(0,r.kt)("h3",{id:"creating-an-account-and-generate-authtoken"},"Creating an account and generate Authtoken"),(0,r.kt)("p",null,"You can create a free account in ",(0,r.kt)("a",{parentName:"p",href:"https://ngrok.com"},"ngrok website")),(0,r.kt)("p",null,"Once you are register, you will see an option to create an Authtoken. You will need this token to run ngrok in your laptop."),(0,r.kt)("h3",{id:"install-and-configure"},"Install and configure"),(0,r.kt)("p",null,"Installing ngrok is really easy, you just need to pick the right version for your OS ",(0,r.kt)("a",{parentName:"p",href:"https://ngrok.com/download"},"here")," and follow the instructions."),(0,r.kt)("p",null,"After the installation is completed, you need to add your Authtoken to the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok config add-authtoken yourtokenhere\n")),(0,r.kt)("h3",{id:"tunneling-the-ai-service"},"Tunneling the AI service"),(0,r.kt)("p",null,"First you need to start the AI service with ",(0,r.kt)("em",{parentName:"p"},"unicorn")," as we have already seen."),(0,r.kt)("p",null,"Once the service is running, you just need to execute this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"ngrok http 8000\n")),(0,r.kt)("p",null,"You will see ngrok has created a new url to forward the request to your localhost service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"Forwarding                    https://6557-213-94-33-247.ngrok-free.app -> http://localhost:8000 \n")),(0,r.kt)("p",null,"So now your AI services are accesible to anyone (as long as you keep your ngrok process running)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: Bearer 1234" -X GET " https://6557-213-94-33-247.ngrok-free.app"\n')),(0,r.kt)("p",null,"Take into account that any time you run ngrok to tunnel your local service, a new url wil be generated, so if you want to test your AI service with Nevermined App, remember to keep ngrok running until you finish all the testing."),(0,r.kt)("h2",{id:"registering-your-ai-service-in-nevermined-app"},"Registering your AI Service in Nevermined App"),(0,r.kt)("p",null,"So you have implemented some endpoints to access your AI service, you have protected them and this endpoints are available to anyone who want to use them."),(0,r.kt)("p",null,"Yo can share your service with the Community in a safety way, and even monetize them, if you want, using a Nevermined Smart Subscription."),(0,r.kt)("p",null,"In order to test and learn how you can use Nevermined App, we provide a test deployment that uses Arbitrum Goerli testnet, where you can try the different features provided by Nevermined."),(0,r.kt)("p",null,"You can access to this test version of Nevermined App ",(0,r.kt)("a",{parentName:"p",href:"https://goerli.nevermined.app/en"},"here")),(0,r.kt)("h3",{id:"before-you-register-your-service"},"Before you register your Service"),(0,r.kt)("p",null,"We recommend you to take a look to the different ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/getting-started/"},"guides and tutorials we have about Nevermined App")),(0,r.kt)("p",null,"Before starting using Nevermined you will need to install and config Metamask in your browser. ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/metamask/"},"See the instructions here"),", ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/metamask-networks/#arbitrum-goerli-testnet"},"here"),", and ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/metamask-tokens/"},"here"),", "),(0,r.kt)("p",null,"Once you have Metamask correctly configured, the next step is to create a brand new ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/getting-started/smart-subscriptions"},"Smart Subscription")),(0,r.kt)("p",null,"You will register your AI Service associated with this Subscription you are about to create. The process to create a new Subscription is pretty straightforward, but ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/create-subscription"},"here")," you can find some help to guide you."),(0,r.kt)("h3",{id:"registering-your-ai-service"},"Registering your AI Service"),(0,r.kt)("p",null,"So now that you have all set up and you have created a Smart Subscription, you can create a Web Service Asset to register your AI Service in Nevermined App."),(0,r.kt)("p",null,"You can find a complete guide to register your service ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/register-webservice/"},"here")),(0,r.kt)("h4",{id:"defining-endpoints-urls"},"Defining Endpoints URLs"),(0,r.kt)("p",null," In the second step of the process you'll see you need to provide the endpoints URLs of your AI Service, and in case you have protected them with a Bearer Token, you need to facilitate it. "),(0,r.kt)("p",null," Instead of define the endpoints one by one manually, we can use the OpenAPI integration to do this automatically. "),(0,r.kt)("p",null," If you remember, when we create an endpoint with FastAPI, it generates a docs page located in ",(0,r.kt)("em",{parentName:"p"},(0,r.kt)("a",{parentName:"em",href:"https://your-ngrok-url-free.app/docs"},"https://your-ngrok-url-free.app/docs"))),(0,r.kt)("p",null," This is not the url where are going to use. If you access to this docs page, you'll see a link named ",(0,r.kt)("em",{parentName:"p"},"/openapi.json"),". If you click there in your browser you will see a json object which describe your service in OpenAPI standard. You will use the url of the page that shows this json."),(0,r.kt)("p",null," ",(0,r.kt)("img",{alt:"Service OpenAPI Docs",src:n(4478).Z,width:"1102",height:"248"})),(0,r.kt)("h3",{id:"access-to-the-details-of-the-service"},"Access to the details of the Service"),(0,r.kt)("p",null,' When the process is finished, you will be able to access the details of your new Service Asset (you can also access anytime using the "MyAssets" menu on the App).\nIn the Service details you can access to the description of the endpoints.'),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Service Endpoints",src:n(4377).Z,width:"819",height:"876"})),(0,r.kt)("h3",{id:"consuming-your-ai-service"},"Consuming your AI Service"),(0,r.kt)("p",null,"Every user that have purchased your Subscription will be able to use your AI Service through Nevermined. In this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.nevermined.app/docs/tutorials/webservice-integration/"},"guide")," you can find how users can integrate your service."),(0,r.kt)("h4",{id:"examples"},"Examples"),(0,r.kt)("p",null,"Use the service through Nevermined Proxy URL is pretty straighforward, you need to use the Proxy URL instead of the actual URL of your service, adding the specific endpoint you want to call and the parameters defined in that endpoint, and indicate and the Authorization Header with the JWT."),(0,r.kt)("p",null,"For instance:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'export NVM_TOKEN="eyJhbGciOiJkaXIiLCJlbmMiOiJBMTI4Q0JDLUhTMjU2In0..EW-BsszuYJLLuBylm6VPvw.zlGJQcCRjjG_m....srbCQpQ"\n\ncurl -H "Authorization: $NVM_TOKEN" -X GET "https://5shbhhycwqvkqxjix1ubwnfss6fec5mpptaloqgx9agsqblyrt.proxy.goerli.nevermined.one/ai_service?param1=value1&param2=value2"\n')),(0,r.kt)("p",null,"In case you have implemented your endpoints as a POST method, you can call them like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Authorization: $NVM_TOKEN" -X POST "https://5shbhhycwqvkqxjix1ubwnfss6fec5mpptaloqgx9agsqblyrt.proxy.goerli.nevermined.one/ai_service"  \\\n--header \'content-type: application/json\' \\\n--data \'{"param1": "value1", "param2": "value2"} \'\n')))}c.isMDXComponent=!0},245:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09_01_APIDocs-dfb778d1ba6bacec10919f1bb4f9af80.png"},4478:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09_02_ServiceDocs-c690f8980e1e7b3562aae992778a383d.png"},4377:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/09_03_ServiceEndpoints-c1738bc69f72c14502300f559dd67425.png"}}]);