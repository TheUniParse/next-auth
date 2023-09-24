import { getServerSession } from 'next-auth'

export default async function Home() {
  const session = await getServerSession()

  return (
    <main className='text-center'>
      <h1>Home</h1>
      {!session
        ? 'Not signed in'
        : `${session?.user?.name} signed in`}
    </main>
  )
}
