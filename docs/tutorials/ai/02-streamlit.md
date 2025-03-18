---
sidebar_position: 2
description: How to accept payments in your Streamlit application
---

# How to accept payments in your Streamlit application

First here's a short demo of the AI Streamlit app and how it works with Stripe
payments:

<p align="center">
<iframe width="840" height="470" src="https://www.youtube.com/embed/SrC6yju6dms?si=iaJOhDJp9rL1lpw6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</p>

In this video, you will see how a user is prompted via your Streamlit app to first log into your
app. Once logged in and authenticated, users without credits will be prompted to subscribe to your
AI. You have the choice to set up different Pricing Plan options, such as Free and Paid
plans. Once a user has subscribed, they will be able to access your AI under the conditions you set
via each plan's prerequisites.

## How to setup a Streamlit Pricing Plan

The following is a step-by-step guide to creating your own Pricing Plan for your Streamlit app.
Please note that this product is still a work in progress, and we have not yet made the Stripe
payment piece fully available in production. If you would like to use the production Stripe
integration to get paid, please contact us on [Discord](https://discord.gg/PP4dQFd8) or at
[info@nevermined.io](mailto:info@nevermined.io).

### Step 1 - Set up your Builder Account in Nevermined

- Navigate to Nevermined
- Click "Log in"

![Log in](/images/tutorials/streamlit/step1_2.png)

- Select your sign in method

![Sign in](/images/tutorials/streamlit/step1_3.png)

- Once logged in, click the "New" button in the top right, then click the "Create a plan" button.

### Step 2 - Set up Stripe

- This will prompt you to continue creating your profile, updating it with your designated
  payment(s) type (i.e. Stripe).

![Profile](/images/tutorials/streamlit/step2_5.png)

- If you'd like to use Stripe as your payment gateway, select the Stripe option and click the
  "Create Stripe account" button

![Stripe](/images/tutorials/streamlit/step2_6.png)

- Now you will set up your Stripe account

  - First enter your email and verify your phone number

![Email](/images/tutorials/streamlit/step2_7_a.png)

  - Next, describe your business for Stripe, including your business and personal details. This will help Stripe onboard you into their system.
  - Once you've navigated the set up details, click "Agree and submit" to finalize your account set up.

![Finalize Account Setup](/images/tutorials/streamlit/step2_7_c.png)

Congratulations! You've successfully set up your Stripe account. Now let's create your first
Pricing Plan.

![Congratulations](/images/tutorials/streamlit/step2_4.png)

### Step 3 - Create a Pricing Plan

- Click the "New" button, then the "Create a plan" button

![Create a Plan](/images/tutorials/streamlit/step3_8.png)

- Describe the type of Pricing Plan you wish to create for your users. For example, you may
  want to create a Pricing Plan that allows your users to buy a set number of access credits
  for a certain price that your users will use to redeem access to your Streamlit app.

![Plan Type](/images/tutorials/streamlit/step3_9.png)

- Next, choose the type of plan you want to enable for your users. Here you have the selection of
  allowing your users to access your app for a period of time, or by a set number of requests. We've
  also included a set of templates you can use, like Free, time period plans (i.e 1 month, 1 year,
  etc.), custom plans, etc.

  - Request based plan - you can choose from a number of options, or create your own Custom plan.
    You are able to edit:
    - Title - Give your plan a descriptive Plan title.
    - Price - Set the price for your credits based plan.
    - No. of Credits - Set the number of credits your users receive when they buy this plan.

![Plan Details](/images/tutorials/streamlit/step3_10_a.png)

- Time period based plan - you can choose from a number of options, or create your own Custom plan.
  You are able to edit:

  - Title - Give your plan a descriptive Plan title.
  - Price - Set the price for your credits based plan.
  - Duration - Set the duration of time that your users can access your app when they buy this plan. Options include:
    - Hours
    - Days
    - Weeks
    - Months
    - Years

![Plan Details](/images/tutorials/streamlit/step3_10_b.png)

- Now review the Pricing Plan set up and confirm by clicking "Next"

![Plan Review](/images/tutorials/streamlit/step3_11.png)

## Step 4 - Specify your AI Service

- Next, you need to link your AI service, like your OpenAI GPT API, to the plan in order to manage
  access to your AI service. To do this, click the "Create Content" button.

![Link AI Service](/images/tutorials/streamlit/step4_12.png)

- You start by describing the AI service you want to control access to. To do this, provide a Title,
  Description and cover image for the AI service.

![Describe AI Service](/images/tutorials/streamlit/step4_13.png)

- Next, add your specific AI service information via your AI's API information. For example, if your
  AI is a text-to-text AI using OpenAI's completion capability, you will register the corresponding
  OpenAI POST: https://api.openai.com/v1/chat/completions. For other third party AI services, you
  can register a similar API call.

(Please note that we support the OpenAPI standard for API information. This means that you can also
set how you'd like to expose your endpoints.)

- Now add what type of security mechanism you'd like to enforce for User Authentication to your AI
  app. The options include:

  - No authentication
  - Basic Authentication with a username and password
  - Bearer Token authentication with designated access token.

![Service Authentication](/images/tutorials/streamlit/step4_18.png)

In the case that you are using a third party service, like OpenAI, use the Bearer Token option to
register your OpenAI API Key (OPENAI_API_KEY). This can be found from the third party service
provider.

(Please note that Nevermined fully encrypts the Bearer Token information that you submit so that
this information is never disclosed to anyone but yourself.)

- Now select the Pricing Plan that you created earlier and attach your AI service to this plan.
  This will enable the controls you've set for your AI app using this service. In this step you can
  also set the number of credits needed for each user to make one request for this AI service.

![Select Plan](/images/tutorials/streamlit/step4_16.png)

- Lastly, review your AI-service setup and click "Create".

![Create Service](/images/tutorials/streamlit/step4_17.png)

- Once you've successfully created the AI service, you can see its widget by clicking the "See the
  Agent" button.

## Step 5 - Get your Streamlit Embeddable Widget

- To create your embeddable widget into your Streamlit app, you will need your unique Pricing
  Plan identifier, or DID. You can get this by copying the URL for the AI API / webservice that you
  just created. To do this, first navigate to "My area → My Agents".

![Widget](/images/tutorials/streamlit/step5_19.png)

- Click the 3 vertical dots for your AI webservice, and select "See Agent".

![Agent details](/images/tutorials/streamlit/step5_20.png)

- From the AI webservice page, copy the URL to use in the next step.

![Service URL](/images/tutorials/streamlit/step5_21.jpeg)

## Embedding the Widget into your Streamlit App

The full example can be found [here](https://github.com/nevermined-io/streamlit)

Start by adding the widget to your app with the _did_ of your webservice (e.g.
`did:nv:5a06236a0bb1620c171a17a2e4d82935b1b63274011aeb1d9efcce87e83f0fee`).

```python
st.markdown('<iframe src="https://testing.nevermined.app/streamlit?did=did:nv:5a06236a0bb1620c171a17a2e4d82935b1b63274011aeb1d9efcce87e83f0fee" style="border-radius: 10px; width: 100%;" />', unsafe_allow_html=True)
```

Wait for the user authentication token and proxy url. This should be added at the end of the app not
to block other elements from rendering

```python
html("""
<script>
    parent.window.addEventListener('message', (e) => {
        if (e.data.type === 'streamlit:token') {
            parent.window.token = e.data;
        }
    },false);
</script>
""", height=0)

key = 0
while "nvm" not in st.session_state:
    key += 1
    token = st_javascript('parent.window.token', key=key)
    if token:
        st.session_state["nvm"] = {
            "jwt": token["data"]["jwtToken"]["accessToken"],
            "url": f'{token["data"]["proxyUrl"]}/ask'
        }
        break
    time.sleep(1)
```

Use the returned authentication token and proxy url to make calls to the service. For example:

```python
token = st.session_state["nvm"]["jwt"]
url = st.session_state["nvm"]["url"]

data = {"payload": "payload to post to the service"}
headers = {"Authorization": f"Bearer {token}"}

response = requests.post(url, json=data, headers=headers)
```
