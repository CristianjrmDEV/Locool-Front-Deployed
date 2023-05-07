import api from './config'

const getRefundsByUsername = async (username) => {
  const { data } = await api.get(`/users/${username}/refunds`, {
    headers: { token: localStorage.getItem('token') },
  })
  return data
}

export { getRefundsByUsername }

