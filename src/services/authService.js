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
    const { user } = await api.post('/auth/signup', body)
    const loginStatus = await login(user) //perform login automatically
    return loginStatus
  } catch (error) {
    return error.message
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

export { login, signup, logout }