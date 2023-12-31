import { getServerSession } from 'next-auth'
import { NextResponse } from 'next/server'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)
  const profile = session?.user?.name || 'Not Logged In'
  return NextResponse.json({ profile })
}
