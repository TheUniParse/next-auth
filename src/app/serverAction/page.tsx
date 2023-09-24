import { getServerSession } from 'next-auth'
import { WhoAmIButton } from './WhoAmIButton'

export default function page() {
  const whoAmI = async () => {
    'use server'
    const session = await getServerSession()
    return session?.user?.name || 'Not Logged In'
  }

  return (
    <div className='text-center'>
      <h1>Server Action</h1>

      <WhoAmIButton whoAmIAction={whoAmI} />
    </div>
  )
}
