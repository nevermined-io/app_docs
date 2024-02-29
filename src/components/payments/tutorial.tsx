import { useEffect, useState, useRef } from 'react'
import { Payments } from '@nevermined-io/payments'

export default function PaymentsTutorial() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  const [creatingSubscription, setCreatingSubscription] = useState<boolean>(false)
  const [did, setDid] = useState<string>('')

  const payments = useRef(
    new Payments({
      returnUrl: 'http://localhost:3000/docs/tutorials/integration/nextjs-react-payments',
      environment: 'staging',
    }),
  )

  const onLogin = () => {
    payments.current.connect()
  }

  useEffect(() => {
    payments.current.init()
  }, [])

  useEffect(() => {
    if (payments.current.isLoggedIn) {
      setIsUserLoggedIn(true)
    }
  }, [payments.current.isLoggedIn])

  async function createSubscription() {
    if (payments.current.isLoggedIn) {
      setCreatingSubscription(true)
      const { did } = await payments.current.createSubscription({
        name: 'test subscription',
        description: 'test',
        price: 10000000n,
        tokenAddress: '0x75faf114eafb1BDbe2F0316DF893fd58CE46AA4d',
        duration: 30,
        tags: ['test'],
      })
      setCreatingSubscription(false)
      setDid(did)
    }
  }

  return (
    <main>
      <div>
        <button onClick={onLogin}>Login</button>
        <p>{isUserLoggedIn ? 'Logged in' : 'Not logged in'}</p>
        <button onClick={createSubscription}>Create Subscription</button>
        <p>
          {creatingSubscription && did === '' ? (
            'Creating Subscription, please wait a few seconds...'
          ) : (
            <a href={`https://staging.nevermined.app/subscription/${did}`}>{did}</a>
          )}
        </p>
      </div>
    </main>
  )
}
