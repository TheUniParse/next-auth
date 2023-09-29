import CredentialsProvider from 'next-auth/providers/credentials'
import { getUser } from '../../../../../db/users'

const credentials = {
  name: {
    label: 'User Name',
    type: 'text',
  },
  password: {
    label: 'Password',
    type: 'password',
  },
}

export const credentialsProvider = CredentialsProvider({
  name: 'UniParse App',
  credentials,
  async authorize(credentials) {
    if (!credentials) return null

    const { name, password } = credentials
    if (!name || !password) return null

    const user = getUser(name)
    if (!user) return null

    // check password, in real app it must use bcrypt.compare()
    const validPw = password === user.password
    if (!validPw) return null

    return user as any
  },
})
