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

export { getUserProfile }
