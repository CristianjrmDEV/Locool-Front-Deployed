import api from './config'

const getRefundsByUsername = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/refunds`, {
      headers: { token: localStorage.getItem('locoolToken') },
    })
    return data.purchases
  } catch (err) {
    return []
  }
}

export { getRefundsByUsername }
