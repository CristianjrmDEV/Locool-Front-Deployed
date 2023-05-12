import api from './config'

const getPurchasesByUsername = async (username) => {
  try {
    const { data } = await api.get(`/users/${username}/purchases`, {
      headers: { token: localStorage.getItem('locoolToken') },
    })
    return data.purchases
  } catch (err) {
    return []
  }
}

const getUserCart = async (username, purchaseId) => {
  const { data } = await api.get(
    `/users/${username}/purchases/${purchaseId}/shoppingCart`,
    {
      headers: { token: localStorage.getItem('locoolToken') },
    }
  )
  return data
}

export { getPurchasesByUsername, getUserCart }
