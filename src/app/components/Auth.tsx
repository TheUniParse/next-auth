'use client'
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import userProfileUrl from '../../../public/userProfile.svg'

export default function Auth() {
  const { data: session } = useSession()
  return (
    <div className='border-solid border-gray-400 p-1 border-[thin] rounded-lg gap-x-1 flex items-center mb-1'>
      <Image
        className='rounded-full'
        src={session?.user?.image || userProfileUrl}
        alt='user profile'
        width={40}
        height={40}
      />

      {session?.user?.name || 'Not signed in'}

      <button
        className='ml-auto'
        onClick={() => (!session ? signIn() : signOut())}>
        {!session ? 'Sign In' : 'Sign Out'}
      </button>
    </div>
  )
}
