"use strict";(self.webpackChunkapp_docs=self.webpackChunkapp_docs||[]).push([[6155],{4095:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"libraries/examples","title":"Code Examples","description":"Examples","source":"@site/docs/libraries/10-examples.md","sourceDirName":"libraries","slug":"/libraries/examples","permalink":"/docs/libraries/examples","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":10,"frontMatter":{"sidebar_position":10,"description":"Examples"},"sidebar":"tutorialSidebar","previous":{"title":"How AI Builders can process AI Tasks?","permalink":"/docs/libraries/process-tasks"},"next":{"title":"Getting Started with the Tutorials","permalink":"/docs/tutorials/"}}');var a=n(4848),i=n(8453);const o={sidebar_position:10,description:"Examples"},r="Code Examples",p={},d=[{value:"AI Agents",id:"ai-agents",level:2},{value:"Youtube Agent (Python)",id:"youtube-agent-python",level:3},{value:"The Text to Speech Agent (Typescript)",id:"the-text-to-speech-agent-typescript",level:3},{value:"Simple Text to Speech Agent implementation",id:"simple-text-to-speech-agent-implementation",level:3},{value:"Agent2Agent implementation (Youtube to Speech)",id:"agent2agent-implementation-youtube-to-speech",level:3},{value:"Notebooks",id:"notebooks",level:2}];function c(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.header,{children:(0,a.jsx)(t.h1,{id:"code-examples",children:"Code Examples"})}),"\n",(0,a.jsx)(t.p,{children:"The Payment Libraries allow you to interact with the Nevermined platform to create and manage Payment Plans and AI Agents."}),"\n",(0,a.jsx)(t.h2,{id:"ai-agents",children:"AI Agents"}),"\n",(0,a.jsx)(t.h3,{id:"youtube-agent-python",children:"Youtube Agent (Python)"}),"\n",(0,a.jsx)(t.p,{children:"The Youtube Summarizer it's a small Python AI Agent with Nevermined Payments Library integrated which receives a Youtube video URL and returns a summary of the transcription of the video."}),"\n",(0,a.jsx)(t.p,{children:"The Agent uses LangChain to retrieve the transcription and summarize it via OpenAI integration."}),"\n",(0,a.jsxs)(t.p,{children:["Here is the ",(0,a.jsx)(t.a,{href:"https://github.com/nevermined-io/youtube-agent/",children:"Youtube Summarizer Agent code"}),"."]}),"\n",(0,a.jsx)(t.p,{children:"As you can see, the Agent is a simple Python script that implements a callback function to process the AI Tasks that are sent by the users."}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class YoutubeAgent:\n    def __init__(self, payment):\n        self.payment = payment\n\n    # Callback function called when a user creates an AI Task that needs to be processed\n    async def run(self, data):\n        print(\"Data received:\", data)\n        step = self.payment.ai_protocol.get_step(data['step_id'])\n        if(step['step_status'] != AgentExecutionStatus.Pending.value):\n            print('Step status is not pending')\n            return\n\n        # logging, we inform we are initializing the youtube loader\n        await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='Initializing Youtube Loader...', level='info'))\n        loader = YoutubeLoader.from_youtube_url(\n            youtube_url=step['input_query'],\n            add_video_info=False, \n            language=[\"en\", \"es\", \"pt\", \"uk\", \"ru\", \"fr\", \"zh-Hans\", \"zh-Hant\", \"de\"],           \n            transcript_format=TranscriptFormat.CHUNKS, \n            chunk_size_seconds=30,\n        )\n        # We generate some logs saying that we are loading the documents\n        await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='Load the documents from the video', level='info'))\n        try:\n            # Load the documents from the video\n            docs = loader.load()\n            if not docs:\n                print(\"No transcript available for the video.\")\n                await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='No transcript available.', level='error', task_status=AgentExecutionStatus.Failed.value))\n                return\n        except Exception as e:\n            print(\"Error parsing transcript:\", e)\n            await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='Error parsing transcript', level='error', task_status=AgentExecutionStatus.Failed.value))\n            return\n        result = \" \".join(doc.page_content for doc in docs)\n        \n\n        llm = OpenAI(api_key=openai_api_key)\n        await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='Summarizing...', level='info'))\n        summarize_chain = load_summarize_chain(llm, chain_type=\"map_reduce\")\n        docs = [Document(page_content=result)]\n        summary = summarize_chain.invoke(docs)\n        print('Summary:', summary['output_text'])\n\n        # Use the `payment` object to update the step\n        self.payment.ai_protocol.update_step(\n            did=data['did'],\n            task_id=data['task_id'], \n            step_id=data['step_id'],\n            step={'step_id': data['step_id'],\n                    'task_id': data[\"task_id\"], \n                    'step_status': AgentExecutionStatus.Completed.value,\n                    'output': summary['output_text'],\n                    'is_last': True\n                    },\n        )\n        await self.payment.ai_protocol.log_task(TaskLog(task_id=step['task_id'], message='Summary ready.', level='info', task_status=AgentExecutionStatus.Completed.value))\n"})}),"\n",(0,a.jsxs)(t.p,{children:["As you can see the fuction ",(0,a.jsx)(t.code,{children:"run"})," is the callback function that processes the AI Task. The function receives the data from the AI Task and uses it to process the task. In this case, the function uses the data to retrieve the Youtube video URL, transcribe it, and summarize it. After processing you have to update the step with the result."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:'async def main():\n    # Initialize the Payments object\n    payment = Payments(\n        app_id="youtube_agent", \n        nvm_api_key=nvm_api_key, \n        version="1.0.0", \n        environment=Environment.get_environment(environment), \n        ai_protocol=True, \n        web_socket_options={\'bearer_token\': nvm_api_key}\n    )\n\n    # Initialize the YoutubeAgent with the payment instance\n    agent = YoutubeAgent(payment)\n\n    # Subscribe to the ai_protocol with the agent\'s `run` method\n    subscription_task = asyncio.get_event_loop().create_task(payment.ai_protocol.subscribe(agent.run, join_account_room=True))\n    try:\n        await subscription_task\n    except asyncio.CancelledError:\n        print("Subscription task was cancelled")\n'})}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"main"})," function initializes the Payments object and the YoutubeAgent object. Then it subscribes to the ai_protocol with the agent's ",(0,a.jsx)(t.code,{children:"run"})," method.\nIn this example we are asuming that the agent is processing the AI task in one step, but you can implement the agent to process multiple steps."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-python",children:"class YoutubeAgent:\n    def __init__(self, payment):\n        self.payment = payment\n\n    async def run(self, data):\n        step = self.payment.ai_protocol.get_step(data['step_id'])\n        if(step['step_status'] != AgentExecutionStatus.Pending.value):\n            print('Step status is not pending')\n            return\n        \n        if(step['name'] == 'init'):\n            transcript_step_id = generate_step_id()\n            self.payment.ai_protocol.create_steps(did=step['did'], task_id=step['task_id'], steps={\"steps\" : [{\n                'task_id': step['task_id'],\n                'step_id': transcript_step_id,\n                'input_query': step['input_query'],\n                'name': 'transcript',\n                'predecessor': step['step_id'],\n                'is_last': False,\n                'order': 2\n                },\n                {                \n                'task_id': step['task_id'],\n                'step_id': generate_step_id(),\n                'predecessor': transcript_step_id,\n                'input_query': '',\n                'name': 'summarize',\n                'is_waiting': True, \n                'is_last': True,\n                'order': 3\n            }]})\n            self.payment.ai_protocol.update_step(\n                did=step['did'],\n                task_id=step['task_id'], \n                step_id=step['step_id'],\n                step={'step_id': step['step_id'],\n                        'task_id': step[\"task_id\"], \n                        'step_status': AgentExecutionStatus.Completed.value,\n                        'input_query': step['input_query'],\n                        'output': step['input_query'],\n                        'is_last': False\n                        },\n            )\n        \n        elif (step['name'] == 'transcript'):\n            loader = YoutubeLoader.from_youtube_url(\n                youtube_url=step['input_query'],\n                add_video_info=False, \n                language=[\"en\"],\n                transcript_format=TranscriptFormat.CHUNKS, \n                chunk_size_seconds=30,\n            )\n            # Load the documents from the video\n            docs = loader.load()\n            result = \" \".join(doc.page_content for doc in docs)\n            self.payment.ai_protocol.update_step(\n                did=step['did'],\n                task_id=step['task_id'], \n                step_id=step['step_id'],\n                step={'step_id': step['step_id'],\n                        'task_id': step[\"task_id\"], \n                        'step_status': AgentExecutionStatus.Completed.value,\n                        'output': result,\n                        'is_last': False\n                        },\n            )\n        \n        elif (step['name'] == 'summarize'):\n            llm = OpenAI(api_key=openai_api_key)\n            summarize_chain = load_summarize_chain(llm, chain_type=\"map_reduce\")\n            docs = [Document(page_content=step[\"input_query\"])]\n            summary = summarize_chain.invoke(docs)\n            print('Summary:', summary['output_text'])\n            # Use the `payment` object to update the step\n            self.payment.ai_protocol.update_step(\n                did=step['did'],\n                task_id=step['task_id'], \n                step_id=step['step_id'],\n                step={'step_id': step['step_id'],\n                        'task_id': step[\"task_id\"], \n                        'step_status': AgentExecutionStatus.Completed.value,\n                        'output': summary['output_text'],\n                        'is_last': True\n                        },\n            )\n        \n        else:\n            print(f\"Unknown step name: {step['name']}\")\n"})}),"\n",(0,a.jsx)(t.p,{children:"In this example, we are assuming that the agent is processing the AI task in multiple steps. The agent receives the data from the AI Task and uses it to process the task.\nAfter processing you have to update the step with the result. Automatically the output of the previous step is the input of the next step."}),"\n",(0,a.jsx)(t.h3,{id:"the-text-to-speech-agent-typescript",children:"The Text to Speech Agent (Typescript)"}),"\n",(0,a.jsx)(t.p,{children:"The Text to Speech Agent is a simple Typescript AI Agent with Nevermined Payments Library integrated which receives a text and returns an audio file with the speech of the text."}),"\n",(0,a.jsx)(t.p,{children:"The Agent uses OpenAPI to generate the audio file, which after the generation is uploaded to IPFS."}),"\n",(0,a.jsxs)(t.p,{children:["Here is the ",(0,a.jsx)(t.a,{href:"https://github.com/nevermined-io/agent-text2speech-js",children:"Text to Speech agent code"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["In this agent we created 2 separate implementations, one for a single step agent generating the audio file, and another integrating the above Youtube agent (",(0,a.jsx)(t.a,{href:"https://github.com/nevermined-io/agent-text2speech-js/blob/main/src/agent2agent.ts",children:"agent2agent implementation"}),")."]}),"\n",(0,a.jsx)(t.h3,{id:"simple-text-to-speech-agent-implementation",children:"Simple Text to Speech Agent implementation"}),"\n",(0,a.jsxs)(t.p,{children:["As you can see, the Agent is a ",(0,a.jsx)(t.a,{href:"https://github.com/nevermined-io/agent-text2speech-js/blob/main/src/main.ts",children:"simple Typescript code"})," that implements a callback function (",(0,a.jsx)(t.code,{children:"processSteps"}),") to process the AI Tasks that are sent by the users."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"async function main() {  \n  openaiTools = new OpenAITools(OPEN_API_KEY!)\n  payments = getPaymentsInstance(NVM_API_KEY!, NVM_ENVIRONMENT)\n  logger.info(`Connected to Nevermined Network: ${NVM_ENVIRONMENT}`)  \n\n  await payments.query.subscribe(processSteps, opts)\n}\n\n// This callback function is invoked when a new AI Task is received\nasync function processSteps(data: any) {\n  \n  const eventData = JSON.parse(data)\n  logger.info(`Received event: ${JSON.stringify(eventData)}`)\n  const step = await payments.query.getStep(eventData.step_id)  \n  logger.info(`Processing Step ${step.task_id} - ${step.step_id} [ ${step.step_status} ]: ${step.input_query}`)\n  \n  if (step.step_status != AgentExecutionStatus.Pending) {\n    logger.warn(`Step ${step.step_id} is not pending. Skipping...`)\n    return\n  }\n  \n  logger.info(`Generating Speech from input query`)\n  const fileSpeech = await openaiTools.text2speech(step.input_query)\n  logger.info(`Speech file generated: ${fileSpeech}`)\n  const cid = await uploadSpeechFileToIPFS(fileSpeech)\n  logger.info(`Speech file uploaded to IPFS: ${cid}`)\n\n\n  const updateResult = await payments.query.updateStep(step.did, {\n    ...step,\n    step_status: AgentExecutionStatus.Completed,\n    is_last: true,\n    output: 'success',    \n    output_artifacts: [cid],\n    cost: 5\n  })\n  if (updateResult.status === 201)\n    logger.info(`Step ${step.step_id} completed!`)\n  else\n    logger.error(`Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`)\n}\n"})}),"\n",(0,a.jsx)(t.h3,{id:"agent2agent-implementation-youtube-to-speech",children:"Agent2Agent implementation (Youtube to Speech)"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{children:"(Text2Speech + Youtube Summarizer) = Youtube2Speech\n"})}),"\n",(0,a.jsx)(t.p,{children:"In this example we are going to show you how to integrate an external agent (Youtube summarizer) in our agent. This is implemented using multiple steps."}),"\n",(0,a.jsxs)(t.p,{children:["First we implement our ",(0,a.jsx)(t.code,{children:"main"})," function to initialize the Payments object and subscribe to receive new tasks. This is as we saw before:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"async function main() {  \n  openaiTools = new OpenAITools(OPEN_API_KEY!)\n  payments = getPaymentsInstance(NVM_API_KEY!, NVM_ENVIRONMENT)\n  logger.info(`Connected to Nevermined Network: ${NVM_ENVIRONMENT}`)  \n\n  await payments.query.subscribe(processSteps, opts)\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["But in this example our logic is a bit more sophisticated because when the ",(0,a.jsx)(t.code,{children:"processSteps"})," callback function is invoked, we check the step name to know which step we are processing."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"async function processSteps(data: any) {\n  \n  const eventData = JSON.parse(data)\n  logger.info(`Received event: ${JSON.stringify(eventData)}`)\n  const step = await payments.query.getStep(eventData.step_id)  \n  logger.info(`Processing Step ${step.task_id} - ${step.step_id} [ ${step.step_status} ]: ${step.input_query}`)\n\n  if (step.step_status != AgentExecutionStatus.Pending) {\n    logger.warn(`Step ${step.step_id} is not pending. Skipping...`)\n    return\n  }\n  \n  // Check the step name to know which step we are processing\n\n  // ....\n}\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When a new Task is created by the user, automatically is created a step with name ",(0,a.jsx)(t.code,{children:"init"}),". What we do in this case is create the execution plan of the task, which in our example involves 2 steps: ",(0,a.jsx)(t.code,{children:"transcribe"})," and ",(0,a.jsx)(t.code,{children:"text2speech"}),":"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"if (step.name === 'init') {\n    logger.info(`Setting up steps necessary to resolve the task ...`)\n    const transcribeStepId = generateStepId()\n    const createResult = await payments.query.createSteps(step.did, step.task_id, { steps: [{\n        step_id: transcribeStepId,\n        task_id: step.task_id,\n        predecessor: step.step_id,\n        input_query: step.input_query,        \n        name: 'transcribe',\n        is_last: false,\n        cost: 20,\n        order: 2\n      }, {  \n        step_id: generateStepId(),              \n        task_id: step.task_id,\n        predecessor: transcribeStepId,        \n        input_query: '',\n        name: 'text2speech',\n        is_last: true,\n        order: 3\n    }]})\n    createResult.status === 201\n      ? payments.query.logTask({ task_id: step.task_id, level: 'info', message: 'Steps created successfully' })\n      : payments.query.logTask({\n          task_id: step.task_id,\n          level: 'error',\n          message: `Error creating steps: ${JSON.stringify(createResult.data)}`,\n        })\n\n    const updateResult = await payments.query.updateStep(step.did, {\n      ...step,\n      step_status: AgentExecutionStatus.Completed,\n      output: step.input_query,\n    })\n    updateResult.status === 201\n      ? payments.query.logTask({\n          task_id: step.task_id,\n          level: 'info',\n          message: `Step ${step.name} : ${step.step_id} completed!`,\n        })\n      : payments.query.logTask({\n          task_id: step.task_id,\n          level: 'error',\n          message: `Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`,\n        })\n\n  } else if (step.name === 'transcribe') {\n    // Here we integrate with the Youtube Summarizer agent\n\n  } else if (step.name === 'text2speech') {\n    // Here we generate the speech from the Youtube summarized text\n\n  } else {    \n    logger.warn(`Step ${step.name} is not recognized. Skipping...`)\n    return\n  }\n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["When the step ",(0,a.jsx)(t.code,{children:"init"})," is completed, it will add 2 additional steps to the task and our agent will receive the next step to process. Because the ",(0,a.jsx)(t.code,{children:"text2speech"})," steps depend on the completion of the ",(0,a.jsx)(t.code,{children:"transcribe"})," step, we will receive first that one, and there is where we integrate with the Youtube Summarizer:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"  } else if (step.name === 'transcribe') {\n    logger.info(`Transcribing video to text with external agent ...`)\n\n    // First we check if we have enough balance to query the Youtube AI Agent\n    const balanceResult = await payments.getPlanBalance(PLAN_YOUTUBE_DID)\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Youtube Plan balance: ${balanceResult.balance}`,\n    })\n\n    if (balanceResult.balance < 1) { // If we don't have enough balance, we order more credits\n      payments.query.logTask({\n        task_id: step.task_id,\n        level: 'warning',\n        message: `Insufficient balance to query the Youtube AI Agent. Ordering more credits.`,\n      })\n      await payments.orderPlan(PLAN_YOUTUBE_DID)\n    }\n\n    // Create the AI Task to query the Youtube Agent with the youtube video URL\n    const aiTask = {\n      query: step.input_query,\n      name: \"transcribe\",\n      \"additional_params\": [],\n      \"artifacts\": []\n    }\n\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Querying Youtube Agent DID: ${AGENT_YOUTUBE_DID} with input: ${step.input_query}`,\n    })\n    // Get the JWT access token and the Proxy we must use to query theYoutube Agent\n    const accessConfig = await payments.query.getServiceAccessConfig(AGENT_YOUTUBE_DID)\n\n    // Create the task\n    const taskResult = await payments.query.createTask(\n      AGENT_YOUTUBE_DID,\n      aiTask,\n      accessConfig,\n      async (data) => {\n        const taskLog: TaskLogMessage = JSON.parse(data)\n\n        console.log(`Received ws task log: ${JSON.stringify(data)}`)\n\n        if (!taskLog.task_status) {\n          payments.query.logTask({\n            task_id: taskLog.task_id,\n            level: 'info',\n            message: `LOG: ${taskLog.task_id} :: ${taskLog.message}`,\n          })\n          return\n        }\n\n        return await validateExternalYoutubeSummarizerTask(taskLog.task_id, step)\n      },\n    )\n\n   if (taskResult.status !== 201) {\n      payments.query.logTask({\n        task_id: step.task_id,\n        task_status: AgentExecutionStatus.Failed,\n        level: 'error',\n        message: `Failed to create task on Youtube Summarizer external agent: ${taskResult.data}`,\n      })\n      // Because we couldnt summarize the Youtube video on the external agent:\n      // we UPDATE the Step to FAILED\n      await payments.query.updateStep(step.did, {\n        ...step,\n        step_status: AgentExecutionStatus.Failed,\n        is_last: true,\n        output: `Error creating task on Youtube Summarizer external agent: ${JSON.stringify(taskResult.data)}`,\n      })\n      return\n    }\n\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Task on external agent created [${taskResult.data.task.task_id}] created: ${taskResult.data.task.input_query}`,\n    })\n    \n\n"})}),"\n",(0,a.jsxs)(t.p,{children:["At this stage if everything worked correctly we must have a few credits and the summary of the Youtube video. Because the ",(0,a.jsx)(t.code,{children:"transcribe"})," is completed now we will receive an update on the ",(0,a.jsx)(t.code,{children:"text2speech"})," step, meaning now we can process that step:"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-typescript",children:"\n  } else if (step.name === 'text2speech') {\n\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Converting text to audio ...`,\n    })\n    const fileSpeech = await openaiTools.text2speech(step.input_query)\n\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Speech file generated`,\n    })\n    const cid = await uploadSpeechFileToIPFS(fileSpeech)\n\n    payments.query.logTask({\n      task_id: step.task_id,\n      level: 'info',\n      message: `Speech file generated uploaded to IPFS`,\n    })\n\n    const updateResult = await payments.query.updateStep(step.did, {\n      ...step,\n      step_status: AgentExecutionStatus.Completed,\n      is_last: true,\n      output: `Text converted to audio: ${cid}`,\n      output_additional: 'success',\n      output_artifacts: [IpfsHelper.cidToUrl(cid)],\n      cost: 20,\n    })\n\n    if (updateResult.status === 201)\n      payments.query.logTask({\n        task_id: step.task_id,\n        task_status: AgentExecutionStatus.Completed,\n        step_id: step.step_id,\n        level: 'info',\n        message: `Step ${step.name} : ${step.step_id} completed!`,\n      })\n    else\n      payments.query.logTask({\n        task_id: step.task_id,\n        task_status: AgentExecutionStatus.Failed,\n        level: 'error',\n        message: `Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`,\n      })\n  }\n"})}),"\n",(0,a.jsxs)(t.p,{children:["If the ",(0,a.jsx)(t.code,{children:"text2speech"})," step is completed, we will update the step with the result of the audio file and the cost of the step. And because the ",(0,a.jsx)(t.code,{children:"text2speech"})," step is the last one, when we update the step this will resolve the whole task and calculate the total cost as the sum of all the individual cost of the steps."]}),"\n",(0,a.jsx)(t.h2,{id:"notebooks",children:"Notebooks"}),"\n",(0,a.jsxs)(t.p,{children:["In the ",(0,a.jsx)(t.a,{href:"https://colab.research.google.com/drive/1Pqrfm3P5t8P9DS7Hwp3v72jhRrB2KsP5#scrollTo=dghI-HwVgulp",children:"Python Notebook"})," example, we will show you how to use the Payments Library to create Payment Plans, register AI Agents, and query them."]})]})}function u(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},8453:(e,t,n)=>{n.d(t,{R:()=>o,x:()=>r});var s=n(6540);const a={},i=s.createContext(a);function o(e){const t=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),s.createElement(i.Provider,{value:t},e.children)}}}]);