import { getServerSession } from 'next-auth'
import { WhoAmI } from './WhoAmI'

export default function page() {
  return (
    <div className='text-center'>
      <h1>Server Action</h1>

      <WhoAmI whoAmIAction={whoAmIAction} />
    </div>
  )
}

// server action
async function whoAmIAction() {
  'use server'
  const session = await getServerSession()
  return session?.user
}
