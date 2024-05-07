import { Payments } from '@nevermined-io/payments'
import { useEffect, useRef, useState } from 'react'

export default function PaymentsTutorial() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<boolean>(false)
  const [creatingSubscription, setCreatingSubscription] = useState<boolean>(false)
  const [did, setDid] = useState<string>('')

  const payments = useRef(
    new Payments({
      returnUrl: 'https://docs.nevermined.app/docs/tutorials/integration/nextjs-react-payments#try-it-out',
      environment: 'appTesting',
      appId: 'app-docs',
      version: 'v0.1.4',
    }),
  )

  const onLogin = () => {
    payments.current.connect()
  }

  const onLogout = () => {
    payments.current.logout()
    setIsUserLoggedIn(payments.current.isLoggedIn)
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
        {!isUserLoggedIn && <button onClick={onLogin}>{'Log in'}</button>}
        {isUserLoggedIn && <button onClick={onLogout}>{'Log out'}</button>}
        <button disabled={!isUserLoggedIn} onClick={createSubscription}>
          Create Subscription
        </button>
        <p>
          {creatingSubscription && did === '' ? (
            'Creating Subscription, please wait a few seconds...'
          ) : (
            <a href={`https://testing.nevermined.app/subscription/${did}`}>{did}</a>
          )}
        </p>
      </div>
    </main>
  )
}
