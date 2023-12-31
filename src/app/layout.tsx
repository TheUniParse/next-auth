import './globals.css'
import type { Metadata } from 'next'
import { getServerSession } from 'next-auth'
import SessionProvider from './components/SessionProvider'
import Auth from './components/Auth'
import NavMenu from './components/NavMenu'

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

type Props = {
  children: React.ReactNode
}

export default async function RootLayout(props: Props) {
  const session = await getServerSession()

  return (
    <html lang='en'>
      <body>
        <SessionProvider session={session}>
          <Auth />
          <NavMenu />
          {props.children}
        </SessionProvider>
      </body>
    </html>
  )
}
