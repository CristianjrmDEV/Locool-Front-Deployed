import api from './config'

const getAllProducts = async () => {
  try {
    const {data} = await api.get('/products')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

const getUserProfile = async () => {
  try {
    const { data } = await api.get('/users/my-profile', {
      // check with endpoint
      headers: {
        token: localStorage.getItem('locoolToken'),
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

const createFarm = async (username,farmData) => {
  const { data } = await api.post(`/users/${username}/farms`, farmData, {
    headers: {
      token: localStorage.getItem('locoolToken'),
    },
  })
  return data
}

const updateFarm = async (username,farmId,farmData) => {
  const { data } = await api.put(
    `/users/${username}/farms/${farmId}`,
    farmData,
    {
      headers: {
        token: localStorage.getItem('locoolToken'),
      },
    }
  )
  return data
}

const updateProductOfFarm = async (username,farmId,productId,productData) => {
  const {data} = await api.put(`/users/${username}/farms/${farmId}/products/${productId}`,productData,{
    headers: {
      token: localStorage.getItem('locoolToken'),
    },
  })
  return data
}

const deleteFarm = async (username,farmId) => {
  const {data} = await api.delete(`/users/${username}/farms/${farmId}`,{
    headers: {
      token: localStorage.getItem('locoolToken'),
    },
  })
  return data
}

const deleteProductOfFarm = async (username,farmId,productId) => {
  const {data} = await api.delete(`/users/${username}/farms/${farmId}/products/${productId}`,{
    headers: {
      token: localStorage.getItem('locoolToken'),
    },
  })
  return data
}

const addProductToFarm = async(username,farmId,productData) => {
  const {data} = await api.post(`/users/${username}/farms/${farmId}/products`,productData,{
    headers: {
      token: localStorage.getItem('locoolToken'),
    }
  })
  return data
}

const createPurchase = async(username, cart) => {
  const {data} = await api.post(`/users/${username}/purchase`, cart, {
    headers: {
      token: localStorage.getItem('locoolToken')
    }
  } )
  return data
}

export { 
  getUserProfile,
  findUserByUsername,
  getAllUsers,
  getMyFarms,
  createFarm,
  updateFarm,
  deleteFarm,
  addProductToFarm,
  updateProductOfFarm,
  deleteProductOfFarm,
  getAllProducts,
  createPurchase
}