import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'

export default async function Page() {
  const session = await getServerSession()

  if (!session?.user) redirect('/api/auth/signin')

  return (
    <div className='text-center'>
      <h1>Protected Route</h1>
      <p>you will only see this if you are authenticated</p>
    </div>
  )
}
