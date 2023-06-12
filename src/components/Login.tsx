import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { login } from '../utils/auth'
import { UserContext } from '../components/UserContext'

const Login: React.FC = () => {
  const [userEmail, setUserEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { setUser } = useContext(UserContext)

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const token = await login(userEmail, password)
    if (token) {
      localStorage.setItem('token', token)
      setUser({ id: 1, name: 'Admin', email: 'admin@gmail.com' })
      history.push('/home')
    } else {
      alert('Invalid credentials')
    }
  }
  return (
    <div className="bg-gray-900 min-h-screen flex flex-col justify-center items-center ">
      <h2 className="text-white">Login Page</h2>
      <div className="max-w-lg w-full mx-4 p-4 bg-gray-800 rounded-lg shadow-lg">
        <div>
          <form onSubmit={handleLogin} className="flex flex-col mb-4">
            <label className="text-white">Email:</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={userEmail}
              onChange={(e) => setUserEmail(e.target.value)}
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-lg focus:outline-none"
            />
            <label className="text-white mt-2">Password:</label>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-grow bg-gray-700 text-white placeholder-gray-400 border-gray-400 border-2 p-2 rounded-lg focus:outline-none"
            />
            <button
              className="bg-blue-500 text-white rounded-lg hover:bg-blue-600 mt-4 focus:outline-none p-2"
              type="submit"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
