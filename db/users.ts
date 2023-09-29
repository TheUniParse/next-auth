import fs from 'fs'
import path from 'path'

const usersPath = path.join(process.cwd(), 'db', 'users.json')

interface User {
  name: string
  email: string
  password: string
  image: string | null
}

export function getUsers() {
  const usersJson = fs.readFileSync(usersPath, 'utf8')
  const users = JSON.parse(usersJson)
  return users as User[]
}

export function getUser(name: string) {
  const users = getUsers()
  const user = users.find(u => u.name === name)
  return user
}

export function hasUser(name: string) {
  const users = getUsers()
  const isUserExist = users.some(u => u.name === name)
  return isUserExist
}

export function addUser(user: User) {
  const users = getUsers()
  users.push(user)

  const usersJson = JSON.stringify(users, null, 2)
  fs.writeFileSync(usersPath, usersJson)
}

export function deleteUser(name: string) {
  const users = getUsers()

  const userIndex = users.findIndex(u => u.name === name)
  if (userIndex !== -1) users.splice(userIndex, 1)

  const usersJson = JSON.stringify(users, null, 2)
  fs.writeFileSync(usersPath, usersJson)
}
