import { SessionProvider } from 'next-auth/react'
import { useSession, signIn, signOut } from 'next-auth/react'

export default function PawprintPage() {
  return (
    <SessionProvider>
      <Content />
    </SessionProvider>
  )
}

function Content() {
  const { data: session } = useSession()

  if (!session || !session.user) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <p>Please connect your X account 🐾</p>
        <button onClick={() => signIn('twitter')}>Connect</button>
      </div>
    )
  }

  return (
    <div style={{ padding: 40, textAlign: 'center' }}>
      <p>Welcome {session.user.name || 'anon'} 🐱</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  )
}
