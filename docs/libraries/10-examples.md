---
sidebar_position: 10
description: Examples
---

# Examples

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

    async def run(self, data):
        print("Data received:", data)
        step = self.payment.ai_protocol.get_step(data['step_id'])

        loader = YoutubeLoader.from_youtube_url(
            youtube_url=step['input_query'],
            add_video_info=False, 
            language=["en"],
            transcript_format=TranscriptFormat.CHUNKS, 
            chunk_size_seconds=30,
        )
        # Load the documents from the video
        docs = loader.load()
        result = " ".join(doc.page_content for doc in docs)

        llm = OpenAI(api_key=openai_api_key)
        summarize_chain = load_summarize_chain(llm, chain_type="map_reduce")
        docs = [Document(page_content=result)]
        summary = summarize_chain.invoke(docs)
        print('Summary:', summary['output_text'])


        # Use the `payment` object to update the step
        self.payment.ai_protocol.update_step(
            did=data['did'],
            task_id=data['task_id'], 
            step_id=data['step_id'],
            step={'step_id': data['step_id'],
                    'task_id': data["task_id"], 
                    'step_status': AgentExecutionStatus.Completed.value,
                    'output': summary['output_text'],
                    'is_last': True
                    },
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
        ai_protocol=True, 
        web_socket_options={'bearer_token': nvm_api_key}
    )

    # Initialize the YoutubeAgent with the payment instance
    agent = YoutubeAgent(payment)

    # Subscribe to the ai_protocol with the agent's `run` method
    subscription_task = asyncio.get_event_loop().create_task(payment.ai_protocol.subscribe(agent.run, join_account_room=True))
    try:
        await subscription_task
    except asyncio.CancelledError:
        print("Subscription task was cancelled")
```

The `main` function initializes the Payments object and the YoutubeAgent object. Then it subscribes to the ai_protocol with the agent's `run` method. 
In this example we are asuming that the agent is processing the AI task in one step, but you can implement the agent to process multiple steps.

```python
class YoutubeAgent:
    def __init__(self, payment):
        self.payment = payment

    async def run(self, data):
        step = self.payment.ai_protocol.get_step(data['step_id'])
        if(step['step_status'] != AgentExecutionStatus.Pending.value):
            print('Step status is not pending')
            return
        
        if(step['name'] == 'init'):
            transcript_step_id = generate_step_id()
            self.payment.ai_protocol.create_steps(did=step['did'], task_id=step['task_id'], steps={"steps" : [{
                'task_id': step['task_id'],
                'step_id': transcript_step_id,
                'input_query': step['input_query'],
                'name': 'transcript',
                'predecessor': step['step_id'],
                'is_last': False,
                'order': 2
                },
                {                
                'task_id': step['task_id'],
                'step_id': generate_step_id(),
                'predecessor': transcript_step_id,
                'input_query': '',
                'name': 'summarize',
                'is_waiting': True, 
                'is_last': True,
                'order': 3
            }]})
            self.payment.ai_protocol.update_step(
                did=step['did'],
                task_id=step['task_id'], 
                step_id=step['step_id'],
                step={'step_id': step['step_id'],
                        'task_id': step["task_id"], 
                        'step_status': AgentExecutionStatus.Completed.value,
                        'input_query': step['input_query'],
                        'output': step['input_query'],
                        'is_last': False
                        },
            )
        
        elif (step['name'] == 'transcript'):
            loader = YoutubeLoader.from_youtube_url(
                youtube_url=step['input_query'],
                add_video_info=False, 
                language=["en"],
                transcript_format=TranscriptFormat.CHUNKS, 
                chunk_size_seconds=30,
            )
            # Load the documents from the video
            docs = loader.load()
            result = " ".join(doc.page_content for doc in docs)
            self.payment.ai_protocol.update_step(
                did=step['did'],
                task_id=step['task_id'], 
                step_id=step['step_id'],
                step={'step_id': step['step_id'],
                        'task_id': step["task_id"], 
                        'step_status': AgentExecutionStatus.Completed.value,
                        'output': result,
                        'is_last': False
                        },
            )
        
        elif (step['name'] == 'summarize'):
            llm = OpenAI(api_key=openai_api_key)
            summarize_chain = load_summarize_chain(llm, chain_type="map_reduce")
            docs = [Document(page_content=step["input_query"])]
            summary = summarize_chain.invoke(docs)
            print('Summary:', summary['output_text'])
            # Use the `payment` object to update the step
            self.payment.ai_protocol.update_step(
                did=step['did'],
                task_id=step['task_id'], 
                step_id=step['step_id'],
                step={'step_id': step['step_id'],
                        'task_id': step["task_id"], 
                        'step_status': AgentExecutionStatus.Completed.value,
                        'output': summary['output_text'],
                        'is_last': True
                        },
            )
        
        else:
            print(f"Unknown step name: {step['name']}")
```

In this example, we are assuming that the agent is processing the AI task in multiple steps. The agent receives the data from the AI Task and uses it to process the task. 
After processing you have to update the step with the result. Automatically the output of the previous step is the input of the next step.


## Notebooks

In the [Python Notebook](https://colab.research.google.com/drive/1Pqrfm3P5t8P9DS7Hwp3v72jhRrB2KsP5#scrollTo=dghI-HwVgulp) example, we will show you how to use the Payments Library to create Payment Plans, register AI Agents, and query them.

