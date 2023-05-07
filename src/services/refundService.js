import api from './config'

const getRefundsByUsername = async (username) => {
  console.log('finding refunds..')
  const { data } = await api.get(`/users/${username}/refunds`, {
    headers: { token: localStorage.getItem('token') },
  })
  console.log(`${localStorage.getItem('username')}'s refunds:`, data)
  return data
}

export { getRefundsByUsername }

