'use client'
import useSWR from 'swr'

export default function APITestPage() {
  const { data, isLoading } = useSWR('/api/whoAmI', fetcher)

  if (isLoading)
    return <h1 className='text-center'>loading...</h1>

  return (
    <div className='text-center'>
      <h1>API From Client</h1>
      <p>profile: {data.profile}</p>
    </div>
  )
}

async function fetcher(url: string) {
  const res = await fetch(url)
  const data = await res.json()
  return data
}
