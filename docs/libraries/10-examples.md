---
sidebar_position: 10
description: Examples
---

# Code Examples

The Payment Libraries allow you to interact with the Nevermined platform to create and manage Payment Plans and AI Agents.

## AI Agents

### Youtube Agent (Python)

The Youtube Summarizer it's a small Python AI Agent with Nevermined Payments Library integrated which receives a Youtube video URL and returns a summary of the transcription of the video.

The Agent uses LangChain to retrieve the transcription and summarize it via OpenAI integration.

Here is the [Youtube Summarizer Agent code](https://github.com/nevermined-io/youtube-agent/).

As you can see, the Agent is a simple Python script that implements a callback function to process the AI Tasks that are sent by the users.

```python
class YoutubeAgent:
    def __init__(self, payment):
        self.payment = payment

    # Callback function called when a user creates an AI Task that needs to be processed
    async def run(self, data):
        print("Data received:", data)
        step = self.payment.query.get_step(data["step_id"])
        if step.step_status != AgentExecutionStatus.Pending.value:
            print("Step status is not pending")
            return

        # logging, we inform we are initializing the youtube loader
        await self.payment.query.log_task(
            TaskLog(task_id=step.task_id, message="Fetching steps...", level="info")
        )
        loader = YoutubeLoader.from_youtube_url(
            youtube_url=step.input_query,
            add_video_info=False,
            language=["en", "es", "pt", "uk", "ru", "fr", "zh-Hans", "zh-Hant", "de"],
            transcript_format=TranscriptFormat.CHUNKS,
            chunk_size_seconds=30,
        )
        # We generate some logs saying that we are loading the documents
        await self.payment.query.log_task(
            TaskLog(
                task_id=step.task_id,
                message="Load the documents from the video",
                level="info",
            )
        )
        try:
            docs = loader.load()
            if not docs:
                print("No transcript available for the video.")
                await self.payment.query.log_task(
                    TaskLog(
                        task_id=step.task_id,
                        message="No transcript available.",
                        level="error",
                        task_status=AgentExecutionStatus.Failed.value,
                    )
                )
                return
        except Exception as e:
            print("Error parsing transcript:", e)
            await self.payment.query.log_task(
                TaskLog(
                    task_id=step.task_id,
                    message="Error parsing transcript",
                    level="error",
                    task_status=AgentExecutionStatus.Failed.value,
                )
            )
            return
        result = " ".join(doc.page_content for doc in docs)

        llm = OpenAI(api_key=openai_api_key)
        await self.payment.query.log_task(
            TaskLog(task_id=step.task_id, message="Summarizing...", level="info")
        )
        summarize_chain = load_summarize_chain(llm, chain_type="map_reduce")
        docs = [Document(page_content=result)]
        summary = summarize_chain.invoke(docs)
        print("Summary:", summary["output_text"])

        # Use the `payment` object to update the step
        self.payment.query.update_step(
            did=data["did"],
            task_id=data["task_id"],
            step_id=data["step_id"],
            step={
                "step_id": data["step_id"],
                "task_id": data["task_id"],
                "step_status": AgentExecutionStatus.Completed.value,
                "output": summary["output_text"],
                "is_last": True,
            },
        )
        await self.payment.query.log_task(
            TaskLog(
                task_id=step.task_id,
                message="Summary ready.",
                level="info",
                task_status=AgentExecutionStatus.Completed.value,
            )
        )
```

As you can see the fuction `run` is the callback function that processes the AI Task. The function receives the data from the AI Task and uses it to process the task. In this case, the function uses the data to retrieve the Youtube video URL, transcribe it, and summarize it. After processing you have to update the step with the result.

```python
async def main():
    # Initialize the Payments object
    payment = Payments(
        app_id="youtube_agent", 
        nvm_api_key=nvm_api_key, 
        version="1.0.0", 
        environment=Environment.get_environment(environment), 
    )

    # Initialize the YoutubeAgent with the payment instance
    agent = YoutubeAgent(payment)

    # Subscribe to the query protocol with the agent's `run` method
    subscription_task = asyncio.get_event_loop().create_task(payment.query.subscribe(agent.run, join_account_room=True))
    try:
        await subscription_task
    except asyncio.CancelledError:
        print("Subscription task was cancelled")
```

The `main` function initializes the Payments object and the YoutubeAgent object. Then it subscribes to the query protocol with the agent's `run` method. 
In this example we are asuming that the agent is processing the AI task in one step, but you can implement the agent to process multiple steps.

```python
class YoutubeAgent:
    def __init__(self, payment):
        self.payment = payment

    async def run(self, data):
        step = self.payment.query.get_step(data["step_id"])
        if step.step_status != AgentExecutionStatus.Pending.value:
            print("Step status is not pending", step.step_status)
            return

        if step.name == "init":
            transcript_step_id = generate_step_id()
            self.payment.query.create_steps(
                did=step.did,
                task_id=step.task_id,
                steps={
                    "steps": [
                        {
                            "task_id": step.task_id,
                            "step_id": transcript_step_id,
                            "input_query": step.input_query,
                            "name": "transcript",
                            "predecessor": step.step_id,
                            "is_last": False,
                            "order": 2,
                        },
                        {
                            "task_id": step.task_id,
                            "step_id": generate_step_id(),
                            "predecessor": transcript_step_id,
                            "input_query": "",
                            "name": "summarize",
                            "is_waiting": True,
                            "is_last": True,
                            "order": 3,
                        },
                    ]
                },
            )
            self.payment.query.update_step(
                did=step.did,
                task_id=step.task_id,
                step_id=step.step_id,
                step={
                    "step_id": step.step_id,
                    "task_id": step.task_id,
                    "step_status": AgentExecutionStatus.Completed.value,
                    "input_query": step.input_query,
                    "output": step.input_query,
                    "is_last": False,
                },
            )

        elif step.name == "transcript":
            loader = YoutubeLoader.from_youtube_url(
                youtube_url=step.input_query,
                add_video_info=False,
                language=["en"],
                transcript_format=TranscriptFormat.CHUNKS,
                chunk_size_seconds=30,
            )
            # Load the documents from the video
            docs = loader.load()
            result = " ".join(doc.page_content for doc in docs)
            self.payment.query.update_step(
                did=step.did,
                task_id=step.task_id,
                step_id=step.step_id,
                step={
                    "step_id": step.step_id,
                    "task_id": step.task_id,
                    "step_status": AgentExecutionStatus.Completed.value,
                    "output": result,
                    "is_last": False,
                },
            )

        elif step.name == "summarize":
            llm = OpenAI(api_key=openai_api_key)
            summarize_chain = load_summarize_chain(llm, chain_type="map_reduce")
            docs = [Document(page_content=step.input_query)]
            summary = summarize_chain.invoke(docs)
            print("Summary:", summary["output_text"])
            # Use the `payment` object to update the step
            self.payment.query.update_step(
                did=step.did,
                task_id=step.task_id,
                step_id=step.step_id,
                step={
                    "step_id": step.step_id,
                    "task_id": step.task_id,
                    "step_status": AgentExecutionStatus.Completed.value,
                    "output": summary["output_text"],
                    "is_last": True,
                },
            )

        else:
            print(f"Unknown step name: {step.name}")
```

In this example, we are assuming that the agent is processing the AI task in multiple steps. The agent receives the data from the AI Task and uses it to process the task. 
After processing you have to update the step with the result. Automatically the output of the previous step is the input of the next step.

### The Text to Speech Agent (Typescript)

The Text to Speech Agent is a simple Typescript AI Agent with Nevermined Payments Library integrated which receives a text and returns an audio file with the speech of the text.

The Agent uses OpenAPI to generate the audio file, which after the generation is uploaded to IPFS.

Here is the [Text to Speech agent code](https://github.com/nevermined-io/agent-text2speech-js).

In this agent we created 2 separate implementations, one for a single step agent generating the audio file, and another integrating the above Youtube agent ([agent2agent implementation](https://github.com/nevermined-io/agent-text2speech-js/blob/main/src/agent2agent.ts)).

### Simple Text to Speech Agent implementation

As you can see, the Agent is a [simple Typescript code](https://github.com/nevermined-io/agent-text2speech-js/blob/main/src/main.ts) that implements a callback function (`processSteps`) to process the AI Tasks that are sent by the users.

```typescript
async function main() {  
  openaiTools = new OpenAITools(OPEN_API_KEY!)
  payments = getPaymentsInstance(NVM_API_KEY!, NVM_ENVIRONMENT)
  logger.info(`Connected to Nevermined Network: ${NVM_ENVIRONMENT}`)  

  await payments.query.subscribe(processSteps, opts)
}

// This callback function is invoked when a new AI Task is received
async function processSteps(data: any) {
  
  const eventData = JSON.parse(data)
  logger.info(`Received event: ${JSON.stringify(eventData)}`)
  const step = await payments.query.getStep(eventData.step_id)  
  logger.info(`Processing Step ${step.task_id} - ${step.step_id} [ ${step.step_status} ]: ${step.input_query}`)
  
  if (step.step_status != AgentExecutionStatus.Pending) {
    logger.warn(`Step ${step.step_id} is not pending. Skipping...`)
    return
  }
  
  logger.info(`Generating Speech from input query`)
  const fileSpeech = await openaiTools.text2speech(step.input_query)
  logger.info(`Speech file generated: ${fileSpeech}`)
  const cid = await uploadSpeechFileToIPFS(fileSpeech)
  logger.info(`Speech file uploaded to IPFS: ${cid}`)


  const updateResult = await payments.query.updateStep(step.did, {
    ...step,
    step_status: AgentExecutionStatus.Completed,
    is_last: true,
    output: 'success',    
    output_artifacts: [cid],
    cost: 5
  })
  if (updateResult.success)
    logger.info(`Step ${step.step_id} completed!`)
  else
    logger.error(`Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`)
}
```

### Agent2Agent implementation (Youtube to Speech)

```
(Text2Speech + Youtube Summarizer) = Youtube2Speech
```

In this example we are going to show you how to integrate an external agent (Youtube summarizer) in our agent. This is implemented using multiple steps.

First we implement our `main` function to initialize the Payments object and subscribe to receive new tasks. This is as we saw before:

```typescript
async function main() {  
  openaiTools = new OpenAITools(OPEN_API_KEY!)
  payments = getPaymentsInstance(NVM_API_KEY!, NVM_ENVIRONMENT)
  logger.info(`Connected to Nevermined Network: ${NVM_ENVIRONMENT}`)  

  await payments.query.subscribe(processSteps, opts)
}
```

But in this example our logic is a bit more sophisticated because when the `processSteps` callback function is invoked, we check the step name to know which step we are processing. 

```typescript
async function processSteps(data: any) {
  
  const eventData = JSON.parse(data)
  logger.info(`Received event: ${JSON.stringify(eventData)}`)
  const step = await payments.query.getStep(eventData.step_id)  
  logger.info(`Processing Step ${step.task_id} - ${step.step_id} [ ${step.step_status} ]: ${step.input_query}`)

  if (step.step_status != AgentExecutionStatus.Pending) {
    logger.warn(`Step ${step.step_id} is not pending. Skipping...`)
    return
  }
  
  // Check the step name to know which step we are processing

  // ....
}
```

When a new Task is created by the user, automatically is created a step with name `init`. What we do in this case is create the execution plan of the task, which in our example involves 2 steps: `transcribe` and `text2speech`:

```typescript
if (step.name === 'init') {
    logger.info(`Setting up steps necessary to resolve the task ...`)
    const transcribeStepId = generateStepId()
    const createResult = await payments.query.createSteps(step.did, step.task_id, { steps: [{
        step_id: transcribeStepId,
        task_id: step.task_id,
        predecessor: step.step_id,
        input_query: step.input_query,        
        name: 'transcribe',
        is_last: false,
        cost: 20,
        order: 2
      }, {  
        step_id: generateStepId(),              
        task_id: step.task_id,
        predecessor: transcribeStepId,        
        input_query: '',
        name: 'text2speech',
        is_last: true,
        order: 3
    }]})
    createResult.success
      ? payments.query.logTask({ task_id: step.task_id, level: 'info', message: 'Steps created successfully' })
      : payments.query.logTask({
          task_id: step.task_id,
          level: 'error',
          message: `Error creating steps: ${JSON.stringify(createResult.data)}`,
        })

    const updateResult = await payments.query.updateStep(step.did, {
      ...step,
      step_status: AgentExecutionStatus.Completed,
      output: step.input_query,
    })
    updateResult.success
      ? payments.query.logTask({
          task_id: step.task_id,
          level: 'info',
          message: `Step ${step.name} : ${step.step_id} completed!`,
        })
      : payments.query.logTask({
          task_id: step.task_id,
          level: 'error',
          message: `Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`,
        })

  } else if (step.name === 'transcribe') {
    // Here we integrate with the Youtube Summarizer agent

  } else if (step.name === 'text2speech') {
    // Here we generate the speech from the Youtube summarized text

  } else {    
    logger.warn(`Step ${step.name} is not recognized. Skipping...`)
    return
  }

```

When the step `init` is completed, it will add 2 additional steps to the task and our agent will receive the next step to process. Because the `text2speech` steps depend on the completion of the `transcribe` step, we will receive first that one, and there is where we integrate with the Youtube Summarizer:

```typescript
  } else if (step.name === 'transcribe') {
    logger.info(`Transcribing video to text with external agent ...`)

    // First we check if we have enough balance to query the Youtube AI Agent
    const balanceResult = await payments.getPlanBalance(PLAN_YOUTUBE_DID)
    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Youtube Plan balance: ${balanceResult.balance}`,
    })

    if (balanceResult.balance < 1) { // If we don't have enough balance, we order more credits
      payments.query.logTask({
        task_id: step.task_id,
        level: 'warning',
        message: `Insufficient balance to query the Youtube AI Agent. Ordering more credits.`,
      })
      await payments.orderPlan(PLAN_YOUTUBE_DID)
    }

    // Create the AI Task to query the Youtube Agent with the youtube video URL
    const aiTask = {
      query: step.input_query,
      name: "transcribe",
      "additional_params": [],
      "artifacts": []
    }

    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Querying Youtube Agent DID: ${AGENT_YOUTUBE_DID} with input: ${step.input_query}`,
    })
    // Get the JWT access token and the Proxy we must use to query theYoutube Agent
    const accessConfig = await payments.query.getServiceAccessConfig(AGENT_YOUTUBE_DID)

    // Create the task
    const taskResult = await payments.query.createTask(
      AGENT_YOUTUBE_DID,
      aiTask,
      accessConfig,
      async (data) => {
        const taskLog: TaskLogMessage = JSON.parse(data)

        console.log(`Received ws task log: ${JSON.stringify(data)}`)

        if (!taskLog.task_status) {
          payments.query.logTask({
            task_id: taskLog.task_id,
            level: 'info',
            message: `LOG: ${taskLog.task_id} :: ${taskLog.message}`,
          })
          return
        }

        return await validateExternalYoutubeSummarizerTask(taskLog.task_id, step)
      },
    )

   if (!taskResult.success) {
      payments.query.logTask({
        task_id: step.task_id,
        task_status: AgentExecutionStatus.Failed,
        level: 'error',
        message: `Failed to create task on Youtube Summarizer external agent: ${taskResult.data}`,
      })
      // Because we couldnt summarize the Youtube video on the external agent:
      // we UPDATE the Step to FAILED
      await payments.query.updateStep(step.did, {
        ...step,
        step_status: AgentExecutionStatus.Failed,
        is_last: true,
        output: `Error creating task on Youtube Summarizer external agent: ${JSON.stringify(taskResult.data)}`,
      })
      return
    }

    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Task on external agent created [${taskResult.data.task.task_id}] created: ${taskResult.data.task.input_query}`,
    })
    

```

At this stage if everything worked correctly we must have a few credits and the summary of the Youtube video. Because the `transcribe` is completed now we will receive an update on the `text2speech` step, meaning now we can process that step:

```typescript

  } else if (step.name === 'text2speech') {

    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Converting text to audio ...`,
    })
    const fileSpeech = await openaiTools.text2speech(step.input_query)

    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Speech file generated`,
    })
    const cid = await uploadSpeechFileToIPFS(fileSpeech)

    payments.query.logTask({
      task_id: step.task_id,
      level: 'info',
      message: `Speech file generated uploaded to IPFS`,
    })

    const updateResult = await payments.query.updateStep(step.did, {
      ...step,
      step_status: AgentExecutionStatus.Completed,
      is_last: true,
      output: `Text converted to audio: ${cid}`,
      output_additional: 'success',
      output_artifacts: [IpfsHelper.cidToUrl(cid)],
      cost: 20,
    })

    if (updateResult.success)
      payments.query.logTask({
        task_id: step.task_id,
        task_status: AgentExecutionStatus.Completed,
        step_id: step.step_id,
        level: 'info',
        message: `Step ${step.name} : ${step.step_id} completed!`,
      })
    else
      payments.query.logTask({
        task_id: step.task_id,
        task_status: AgentExecutionStatus.Failed,
        level: 'error',
        message: `Error updating step ${step.step_id} - ${JSON.stringify(updateResult.data)}`,
      })
  }
```

If the `text2speech` step is completed, we will update the step with the result of the audio file and the cost of the step. And because the `text2speech` step is the last one, when we update the step this will resolve the whole task and calculate the total cost as the sum of all the individual cost of the steps.


## Notebooks

In the [Python Notebook](https://colab.research.google.com/drive/1Pqrfm3P5t8P9DS7Hwp3v72jhRrB2KsP5#scrollTo=dghI-HwVgulp) example, we will show you how to use the Payments Library to create Payment Plans, register AI Agents, and query them.

