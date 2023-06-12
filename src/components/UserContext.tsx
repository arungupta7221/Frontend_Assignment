import React, { createContext, useState, useEffect } from 'react'

interface User {
  id: number
  name: string
  email: string
}

interface UserContextValue {
  user: User | null
  setUser: React.Dispatch<React.SetStateAction<User | null>>
  logout: () => void
}
export const UserContext = createContext<UserContextValue>({
  user: null,
  setUser: () => {},
  logout: () => {},
})
export const UserProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const logout = () => {
    setUser(null)
    localStorage.removeItem('token')
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      // Perform API call to validate token and fetch user data
      // Simulating the API call with a timeout
      setTimeout(() => {
        const userData = {
          id: 1,
          name: 'Admin',
          email: 'Admin@gmail.com',
        }
        setUser(userData)
      }, 1000)
    }
  }, [])
  return <UserContext.Provider value={{ user, setUser, logout }}>{children}</UserContext.Provider>
}
