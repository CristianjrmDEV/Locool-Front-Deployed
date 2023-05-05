import api from './config'

const getUserProfile = async () => {
  try {
    const { data } = await api.get('/users/my-profile', {  // check with endpoint
      headers: {
        token: localStorage.getItem('token'),
      },
    })
    return data
  } catch (error) {
    return error.message
  }
}

const findUserByUsername = async (username) => {
  try {
    const {data} = await api.get(`/users/${username}`)
    return data
  } catch (error) {
    return error.message
  }
}

const getAllUsers = async () => {
  try {
    const {data} = await api.get(`/users/`)
    return data
  } catch (error) {
    return error.message
  }
}

const getMyFarms = async (username) => {
  const {data} = await api.get(`/users/${username}/farms`)
  return data
}

export { 
  getUserProfile,
  findUserByUsername,
  getAllUsers,
  getMyFarms
}