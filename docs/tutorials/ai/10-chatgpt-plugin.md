---
sidebar_position: 10
description: How to monetize a ChatGPT plugin using Nevermined
---

# Monetizing a ChatGPT plugin using Nevermined

OpenAI created the ChatGPT plugins as an extension that allow users to interact with external services. OpenAI ChatGPT provides intelligent answers to users based on the internal data crawled by OpenAI from internet until moment in time (2022) when the model was trained. OpenAI is not connected to internet and therefore it cannot provide answers to questions that are not in the internal data.

As an answer to that OpenAI created the ChatGPT plugins, that allow users to connect to external services and get answers from them. The ChatGPT plugins are a way to extend the capabilities of the OpenAI ChatGPT model.

Since them several organizations have created their own ChatGPT plugins, and they are available in the OpenAI marketplace.

In this tutorial we are gonna describe how to publish your OpenAI ChatGPT plugin in Nevermined, so you can monetize it and share it with a broader group of users.

## Create your own ChatGPT plugin

:::info

If you already created your plugin you can skip this section

:::

OpenAI created the [ChatGPT Plugin Retrieval](https://github.com/openai/chatgpt-retrieval-plugin) software template to facilitate the creation of ChatGPT plugins. It provides the scafolding to integrate into the ChatGPT marketplace.
This software template is [available on Github](https://github.com/openai/chatgpt-retrieval-plugin) so you can copy/fork that code and implement your stuff on top of that.

There are multiple options when you create your plugin, like the [vector database to use](https://github.com/openai/chatgpt-retrieval-plugin#choosing-a-vector-database), but here we are gonna focus and what needs to be done to integrate your plugin with ChatGPT.

After you find the right Vector Database and implement the logic it's important you pay attention to the `.well-known` folder:

1. Edit the `.well-known/ai-plugin.json` file. It should contain the information about your plugin, like the name, description, version, etc.
2. In the `auth` section you need to configure the authentication mechanism that validates the requests via a bearer token. See the below example for more details.
3. Overwrite with your logo the `.well-known/logo.png` file
4. Add your contact email and link to your website

Example of the `.well-known/ai-plugin.json` file completed:


```json
{
  "schema_version": "v1",
  "name_for_model": "retrieval",
  "name_for_human": "Elvis Songs Summarizer",
  "description_for_model": "Plugin for summarizing Elvis songs. Giving an Elvis title song, it summarizes the lyrics of that song.",
  "description_for_human": "Summarizes Elvis songs giving the title.",
  "auth": {
    "type": "user_http",
    "authorization_type": "bearer"
  },
  "api": {
    "type": "openapi",
    "url": "https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app/.well-known/openapi.yaml",
    "has_user_authentication": false
  },
  "logo_url": "https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app/.well-known/nvm-logo.png",
  "contact_email": "info@nevermined.io", 
  "legal_info_url": "https://nevermined.io/"
}
```

Edit the `.well-known/openapi.yaml` file. It should contain the information about your API. It's very important each endpoint included here has good documentation that helps ChatGPT to identify if the method exposed can be useful depending on the user query. So if your method analyze the sentiment of a text, you should include in the documentation the keywords that ChatGPT can use to identify your plugin as the right one to analyze the sentiment given a user query.

Extract example of the `.well-known/openapi.yaml` file completed:

```yaml
openapi: 3.0.2
info:
  title: Elvis Songs Summarizer
  description: Plugin for summarizing Elvis songs. Giving an Elvis title song, it summarizes the lyrics of that song
  version: 0.0.6
  servers:
    - url: https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app
paths:
  /query:
    post:
      summary: Query
      description: Accepts the title of a Elvis song as a search query objects array each with query and optional filter. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.
      operationId: query_query_post

[...]

  /ask:
    post:
      summary: Summarize
      description: Given an Elvis song title it summarizes the lyrics of that song. Break down complex questions into sub-questions. Refine results by criteria, e.g. time / source, don't do this often. Split queries if ResponseTooLargeError occurs.
      operationId: ask_query_post

[...]      
```

:::tip

You can find a complete example in the Nevermined [Elvis ChatGPT plugin](https://github.com/nevermined-io/chatgpt-elvis-plugin)

:::

At this point you should have your plugin ready to be deployed using your favorite cloud/on-premise solution.

## Register your ChatGPT plugin in Nevermined

So at this point you should you have implemented your plugin and deploy it somewhere. Now you can share your plugin with the other ChatGPT users in a safety way, and even monetize it if you want, using a Nevermined Payment Plan.

In order to test and learn how you can use Nevermined App, we provide a testing environment where you can try the different features provided by Nevermined.

You can access to this test version of Nevermined App [here](https://testing.nevermined.app/)

### Before you register your Service

We recommend you to take a look to the different [guides and tutorials we have about Nevermined App](https://docs.nevermined.app/docs/getting-started/)

The next step is to create a brand new [Payment Plan](https://docs.nevermined.app/docs/tutorials/builders/smart-subscriptions)

You will register your AI Service associated with this Subscription you are about to create. The process to create a new Subscription is pretty straightforward, but [here](https://docs.nevermined.app/docs/tutorials/builders/create-plan) you can find some help to guide you.

### Registering your AI Service

So now that you have all set up and you have created a Payment Plan, you can create a Web Service Asset to register your AI Service in Nevermined App.

You can find a complete guide to register your service [here](https://docs.nevermined.app/docs/tutorials/builders/register-webservice/)

 ![Plugin Service Registration](/images/tutorials/plugins/001_Service_Registration_01.png)


#### Defining Endpoints URLs

 In the second step of the process you'll see you need to provide the endpoints URLs of your ChatGPT Plugin Service, and in case you have protected them with a Bearer Token, you need to facilitate it. 

 Instead of define the endpoints one by one manually, we can use the OpenAPI integration to do this automatically.

So in the `OpenAPI URL` field you need to provide the URL of the `openapi.json` file describing your API. If you used the ChatGPT Template plugin this should be generated automatically and exposed in the root of your service. In the example we are using the Elvis ChatGPT plugin, the URL is `https://chatgpt-plugin.testing.nevermined.app/openapi.json`

![Plugin Endpoints](/images/tutorials/plugins/002_Service_Registration_02.png)

Once this is done, all the endpoints included as part of the definition will be registered automatically in the `Protected Endpoints` section. Go through them and remove the ones you don't want to expose. For example we don't want to allow anyone to update/upsert/delete any document through the API, so we remove those endpoints clicking on the cross at right of each endpoint.

Now this step is important, the ChatGPT plugins require to have full read access to the `.well-known` folder, so we need to add the following endpoint to the `Open Endpoints` section:

`https://YOUR_SERVICE/.well-known/(.*)`

The final `(.*)` part is a wildcard that will allow the ChatGPT plugin to access to any file included in the `.well-known` folder. Use your own domain instead of `YOUR_SERVICE`. For example using the previous Elvis ChatGPT plugin example, the URL will be `https://chatgpt-plugin.nevermined.app/.well-known/(.*)`

#### Add some metadata and associate the Payment Plan

In the next 2 screens you just need to include some additional metadata that facilitates the integration by a third-party. And finally we just need to associate the Payment Plan you created before. If you select any non-free Payment Plan, the users who want to use your plugin will need to pay for it.

When you finish the process you will see your new Web Service Asset registered in the Nevermined App.

![Plugin Details Page](/images/tutorials/plugins/009_Service_Details_02.png)

Now if you go to the `Integration Details` tab of the service you will see the `Proxy URL` and the `JWT` token. The JWT token is only available to you or the users who have access to the Payment Plan associated with the service. This token is used to authenticate the requests to the protected endpoints.

Remember them because you are gonna need it when you integrate your plugin in OpenAI.

![How to integrate details](/images/tutorials/plugins/010_Service_Details_03.png)

Copy the `Proxy URL` and paste it in all the references of the `.well-known/openapi.yaml`, `.well-known/ai-plugin.json` or `server/main.py` files of your plugin. This is the URL that ChatGPT will use to access to your plugin and it's better not expose any public url on it.

Redeploy your plugin once this is done.

### Integrating your ChatGPT plugin in OpenAI

Now our plugin is registered in Nevermined, we can integrate it in ChatGPT OpenAI: 

1. Go to the [OpenAI ChatGPT page](https://chat.openai.com/?model=gpt-4-plugins) and click on `GPT-4` > `Plugins` linkthe `Add Plugin` button.
2. Click on `Plugins Store`
3. Click on `Develop your own plugin`
4. Paste the domain of your plugin using the `Proxy URL` we copied before: `https://zparolnv3lqwtjk26xfkgustpbbk9gz9so4x30zfe5v8x8wqs.proxy.testing.nevermined.app`
   ![How to integrate details](/images/tutorials/plugins/015-Install_Plugin_Validate_Manifest.png)
5. OpenAI will fetch the `ai-plugin.json` file and validate it. If everything is ok you will see the `Install` button enabled. Click on it.
6. The application will ask you to introduce the **Authentication Token**. Paste here the `JWT` token copied before. ![How to integrate details](/images/tutorials/plugins/019-Install_Plugin_Validate_Credentials_05.png)
7. Click on `Install` and the plugin will be ready to use


### Using your ChatGPT plugin

Now in the ChatGPT interface, when you click on GPT-4 > Plugins you will see your plugin available. Click on it and you will see the plugin enabled.

![Using the ChatGPT plugin](/images/tutorials/plugins/31_ChatGPT_Summarize_Song_02.png)

So if everything is ok, you can start using your plugin. In the ChatGPT input field introce a query that is related with your plugin, if ChatGPT identify your query as something your plugin can resolve ti will send a query to it (remember we said the description of your API was important).

ChatGPT will send a query to your plugin through the Nevermined Proxy and will use the JWT token provided. Without that JWT token the request wouldn't go through. Your plugin will return the response to ChatGPT and it will show it to you.






