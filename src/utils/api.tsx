interface UserProfile {
  id: number
  username: string
  name: string
  email: string
}

export const fetchUserProfile = (): Promise<UserProfile> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const user: UserProfile = {
        id: 1,
        username: 'john',
        name: 'John Doe',
        email: 'john@example.com',
      }
      resolve(user)
    }, 1000)
  })
}
