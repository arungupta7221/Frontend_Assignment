interface User {
  id: number
  userEmail: string
  password: string
}
const users: User[] = [{ id: 1, userEmail: 'admin@gmail.com', password: 'Admin' }]

export const login = async (userEmail: string, password: string): Promise<string | null> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user = users.find((u) => u.userEmail === userEmail && u.password === password)
      if (user) {
        const token = generateToken(user)
        resolve(token)
      } else {
        alert('Invalid credentials ')

        reject(new Error('Invalid credentials'))
      }
    }, 1000)
  })
}
const generateToken = (user: User): string => {
  return `JWT_TOKEN_${user.id}`
}
