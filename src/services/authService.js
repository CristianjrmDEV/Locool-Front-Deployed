import api from './config'
import { getUserProfile } from './userService'

const login = async (body) => {
  try {
    console.log('Connecting...')
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
    console.log('Welcome to Locool')
    const profile = await getUserProfile()
    localStorage.setItem('username', profile.user.username)
    if(!localStorage.getItem(`cart-${profile.user.username}`)){
      localStorage.setItem(`cart-${profile.user.username}`, JSON.stringify([...new Map()]))
    }

    console.log(`Hello ${localStorage.getItem('username')}`)

    return 200
  } catch (error) {
    return error.message
  }
}

const signup = async (body) => {
  try {
    const { data } = await api.post('/auth/signup', body)
    return 200
  } catch (error) {
    return error.message
  }
}

const findUserByUsername = async(username) => {
  try {
    const response = await api.get(`/users/${username}`)
    return response.status === 200
  } catch (error) {
    return false
  }
}

const logout = () => {
  try {
    if (localStorage.getItem('token')) {
      localStorage.removeItem('token')
      return 200
    }
  } catch (error) {
    return error.message
  }
}

export { login, signup, logout, findUserByUsername }