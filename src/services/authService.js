import api from './config'

const login = async (body) => {
  try {
    console.log('connecting...')
    const { data } = await api.post('/auth/login', body)
    localStorage.setItem('token', data.token)
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