'use client'
import { useState } from 'react'

interface User {
  name?: string | null | undefined
  email?: string | null | undefined
  image?: string | null | undefined
}

interface Props {
  whoAmIAction: () => Promise<User | undefined>
}

export function WhoAmI({ whoAmIAction }: Props) {
  const [user, setUser] = useState<User | undefined>()

  return (
    <>
      <button
        onClick={async () => setUser(await whoAmIAction())}>
        Who Am I?
      </button>
      <br />

      {user && (
        <output className='text-start inline-block mt-3'>
          User Name: {user.name || 'Not provided'}
          <br />
          Email: {user.email || 'Not provided'}
        </output>
      )}
    </>
  )
}
