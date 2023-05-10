import api from './config/'

const lookForFarms = async (query) => {
  // console.log('before retrieveing data')
  const { data } = await api.get('/farms', {
    params: {
      name: query
    }
  })
  console.log('lookForFarms result:', data)
  return data
}

const getAllProductsByFarmId = async (id) => {
  // console.log('before retrieveing data')
  const { data } = await api.get(`/farms/${id}/product`)
  // console.log('request result:', data)
  return data
}

const getFarms = async () => {
  console.log('before retrieveing data')
  const { data } = await api.get('/farms')
  console.log('request result:', data)

  return data
}

export { getFarms, lookForFarms, getAllProductsByFarmId }
