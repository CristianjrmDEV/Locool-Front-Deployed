import api from './config/'

const lookForFarms = async (query) => {
  try {
    const { data } = await api.get('/farms', {
      params: {
        name: query,
      },
    })
    return data
  } catch (err) {
    return []
  }
}

const getAllProductsByFarmId = async (id) => {
  try {
    const { data } = await api.get(`/farms/${id}/product`)
    return data
  } catch(err) {
    return []
  }
}

const getFarmById = async (id) => {
  try {
    const { data } = await api.get(`/farms/${id}`)
    return data
  } catch(err) {
    return []
  }
}

const getFarms = async () => {
  const { data } = await api.get('/farms')

  return data
}

const getMunicipalities = async() => {
  const {data} = await api.get('/municipalities')
  return data
}

export { getFarms, lookForFarms, getAllProductsByFarmId, getFarmById, getMunicipalities }
