import { headers } from 'next/headers'

export default async function Page() {
  const url = 'http://localhost:3000/api/whoAmI'
  const res = await fetch(url, {
    method: 'GET',
    headers: headers(),
  })
  const { profile } = await res.json()

  return (
    <div className='text-center'>
      <h1>API From Server</h1>
      <p>profile: {profile}</p>
    </div>
  )
}
