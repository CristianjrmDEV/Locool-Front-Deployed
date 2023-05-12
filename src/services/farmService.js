import api from './config/'

const lookForFarms = async (query) => {
  try {
    // console.log('before retrieveing data')
    const { data } = await api.get('/farms', {
      params: {
        name: query,
      },
    })
    // console.log('lookForFarms result:', data)
    return data
  } catch (err) {
    return []
  }
}

const getAllProductsByFarmId = async (id) => {
  try {
    
    // console.log('before retrieveing data')
    const { data } = await api.get(`/farms/${id}/product`)
    // console.log('getAllProductsByFarmId result:', data)
    return data
  } catch(err) {
    return []
  }
}

const getFarmById = async (id) => {
  try {
    const { data } = await api.get(`/farms/${id}`)
    console.log('getFarmById result:', data)
    return data
  } catch(err) {
    return []
  }
}

const getFarms = async () => {
  // console.log('before retrieveing data')
  const { data } = await api.get('/farms')
  // console.log('request result:', data)

  return data
}

export { getFarms, lookForFarms, getAllProductsByFarmId, getFarmById }
