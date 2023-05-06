import api from './config'

const getPurchasesByUsername = async (username) => {
  console.log('sending request..')
  const { data } = await api.get(`/users/${username}/purchases`, {
    headers: { token: localStorage.getItem('token') },
  })
  console.log('request result:', data.purchases)
  return data.purchases
}

const getUserCart = async (username, purchaseId) => {
  console.log('sending request..')
  const { data } = await api.get(`/users/${username}/purchases/${purchaseId}/shoppingCart`, {
    headers: { token: localStorage.getItem('token') },
  })
  console.log('request result:', data)
  return data
}

export { getPurchasesByUsername, getUserCart }

