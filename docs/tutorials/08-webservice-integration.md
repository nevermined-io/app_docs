---
sidebar_position: 8
description: How to generate the JWT access token that gives access to a web service
---

# How to integrate an AI web service in an application

In this tutorial we show how you can integrate a web service in an application, after you bought a subscription.

## Getting ready

If you got this far, we assume you know that you need to connect your MetaMask wallet. 

You also need to own a Smart Subscription for the web service. If you haven't done that yet, first purchase a subscription for the AI you want to integrate. [tutorial here](07-search-and-purchase.md)

## How to integrate a web service

The steps to integrate are the following:

### 1. Open your Dashboard page

Click on the "My Assets" link on the header of the application. Select the "My Assets" option in the menu, and click on the "Purchased" tab.

You will see a list of all the assets you can access. Use the filters in the Search Bar to see only the Services.

![My Assets](/images/tutorials/08-01-Integration-Dashboard.png)


### 2. Get information about the Service

You can access to detailed information about the service clicking the icons on the right hand side. 

The fist tab, "Service Information", shows a link to an OpenAPI endpoint, if it was provided by the publisher, and a "How to Integrate" guide.

![Service Information](/images/tutorials/08-02-Service-Info.png)

In the tab "Endpoints" you'll see detailed information about the endpoints this service exposes, where you can find information about the parameters and the responses.
This tab is only showed if the publisher provided an OpenAPI definition.

![Service Information](/images/tutorials/08-03-Service-endpoints.png)

### 3. Get the JWT access token

In the last tab, "Integration Details" you will find see the web service's JWT access token, along with the Proxy URL and an example of how to call the service.

![Service Information](/images/tutorials/08-04-Service-JWT.png)

The JWT token is the access key identifying you as a subscriber. It allows you to make HTTP requests to the web service. Once you have it, you can make requests to all the endpoints that are included in the web service that you subscribed to.

Copy both the JWT token and the Proxy url for the network you're using (e.g. https://proxy.mumbai.nevermined.app/). You need these to enable your app to send HTTP requests.

### 4. Use the JWT to call the service

Next we will show how you can integrate the web service into your app using Command Line. 

#### 4.a Using curl to integrate the web service

Here we will use **curl** but the same works for any HTTP client application or library.

```bash
# Here we export the JWT token pasted from the NVM App
export $JWT_TOKEN=””

# In our example we are sending a body message via HTTP POST. 
# For sake of clarity, here we export the message we are gonna send to the web service
export REQUEST_DATA='{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}'

# With curl we make a POST request and we add the $JWT_TOKEN as Bearer token in the Authorization header
# The url where we send the request is the host name of the proxy: "https://proxy.mumbai.nevermined.app" plus the endpoint of the service 
# we are calling, int this case "/ask"
curl -k -X POST -H "Content-Type: application/json"  -H "Authorization: Bearer $JWT_TOKEN" -d "$REQUEST_DATA" https://proxy.mumbai.nevermined.app/ask

{"response":"\nThe song is about a person who is in love with someone who is not perfect, but they cannot live without them. Despite knowing that loving this person will bring heartache, they are willing to take the risk and accept the consequences. The song also compares the relationship to the story of Adam and Eve, with the person in the song being like Adam and their love interest being like Eve.","source_nodes":[{"node":{"text":"...","doc_id":"8e748293-f8d2-41b8-a225-7479455b1899","embedding":null,"doc_hash":"451d68b33de1e8034e48c6a98865364e52edd02837f06c34c662ba6d6d462c76","extra_info":null,"node_info":{"start":0,"end":1030},"relationships":{"1":"did:nv:3e0a13a6dba0ab20e83bf25c3e820af8b71c94cea0ab0763b4f822a6998009e6"}},"score":0.7585169416635178}],"extra_info":null}
```


#### 4.b Using typescript to integrate the web service

```typescript
const proxyEndpoint = `https://proxy.mumbai.nevermined.app/ask`
const requestData = '{"queries": [{"query": "Adam And Evil", "filter": {}, "top_k": 1 }]}'

opts.headers = {
    // The proxy expects the `HTTP Authorization` header with the JWT
    authorization: `Bearer ${JWT_TOKEN}`,
    'content-type': 'application/json'
}

opts.method = 'POST'
opts.body = requestData

const result = await fetch(proxyEndpoint, opts)

assert.isTrue(result.ok)
assert.equal(result.status, 200)
```
