---
sidebar_position: 8
description: How AI Builders can process AI Tasks?
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

# How AI Agents can accept paid requests

Once a user (or agent) purchases a Payment Plan, if this Plan has some AI Agents or Services attached to it, the user can query these AI Agents or Services.

To facilitate AI Agents to authorize only the requests of users with a valid Payment Plan, the Payments libraries provide a simple API to do this validation simple and secure.

## Authorizing only valid requests to my AI Agents

All the authorization can be done just calling the `requests.startProcessingRequest` method. This method will receive the access token sent by the user, and will validate:

1. The user is a subscriber of any of the payment plans giving access to the AI Agent.
2. The endpoint requested and HTTP method is allowed because was included as part of the AI Agent registration.
3. The user has enough credits to pay for the request (if the AI Agent is using a credit-based Payment Plan) or the payment plan didn't expire (if it's a time-based subscription).

In the example below we are gonna start a simple HTTP server that first thing is gonna do is to validate the request using the `startProcessingRequest` method. If the request is valid, it will return a 200 OK response, otherwise it will return a 402 Payment Required response.

<Tabs
  defaultValue="python"
  values={[
    {label: 'Python', value: 'python'},
    {label: 'TypeScript', value: 'typescript'}
  ]}>
  <TabItem value="python">
  ```python
  from http.server import HTTPServer, BaseHTTPRequestHandler
  import json

  agent_host = "https://example.com"  # The AI Agent is running in this host

  class AgentRequestHandler(BaseHTTPRequestHandler):
      def do_POST(self):
          self._handle_request()

      def do_GET(self):
          self._handle_request()

      def _handle_request(self):
          auth_header = self.headers.get("Authorization")
          requested_url = f"{agent_host}{self.path}"
          http_verb = self.command
          print("Received request:", {"endpoint": requested_url, "httpVerb": http_verb, "authHeader": auth_header})

          try:
              is_valid_req = payments.requests.start_processing_request(
                  agent_id,
                  auth_header,
                  requested_url,
                  http_verb
              )
              print("isValidReq", is_valid_req)
              if is_valid_req["balance"]["isSubscriber"]:
                  self.send_response(200)
                  self.send_header("Content-Type", "application/json")
                  self.end_headers()
                  self.wfile.write(json.dumps({"message": "Hello from the Agent!"}).encode())
                  return
          except Exception as error:
              print("Unauthorized access attempt:", auth_header)
              print("Error details:", error)

          self.send_response(402)
          self.send_header("Content-Type", "application/json")
          self.end_headers()
          self.wfile.write(json.dumps({"error": "Payment Required"}).encode())
          return

  # To start the server:
  # server = HTTPServer(("localhost", 8889), AgentRequestHandler)
  # server.serve_forever()
  ```
  </TabItem>
  <TabItem value="typescript">
  ```typescript
  const agentHost = 'https://example.com' // The AI Agent is running in this host
  
  const server = http.createServer(async (req, res) => {
    const authHeader = req.headers['authorization'] as string
    const requestedUrl = `${agentHost}${req.url}`
    const httpVerb = req.method
    console.log('Received request:', { endpoint: requestedUrl, httpVerb, authHeader })
     
    try {
      const isValidReq = await payments.requests.startProcessingRequest(
        agentId,
        authHeader,
        requestedUrl,
        httpVerb!,
      )
      console.log('isValidReq', isValidReq)
      if (isValidReq.balance.isSubscriber) {
        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify({ message: 'Hello from the Agent!' }))
        return
      }
    } catch (error) {
      console.log('Unauthorized access attempt:', authHeader)
      console.log('Error details:', error)
    }

    res.writeHead(402, { 'Content-Type': 'application/json' })
    res.end(JSON.stringify({ error: 'Payment Required' }))
    return
  })
  ```
  </TabItem>  
</Tabs>
