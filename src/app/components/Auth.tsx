'use client'
import { signIn, signOut, useSession } from 'next-auth/react'

export default function Auth() {
  const { data: session } = useSession()
  return (
    <div className='border-solid border-gray-400 p-1 border-[thin] rounded-lg flex justify-between'>
      {session?.user?.name || 'Not signed in'}

      <button onClick={() => (!session ? signIn() : signOut())}>
        {!session ? 'Sign In' : 'Sign Out'}
      </button>
    </div>
  )
}
