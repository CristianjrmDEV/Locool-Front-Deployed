import api from './config/'

const getAllFarms = async () => {
  // console.log('before retrieveing data')
  const { data } = await api.get('/farms')
  // console.log('request result:', data)
  return data
}

const getAllProductsByFarmId = async (id) => {
  // console.log('before retrieveing data')
  const { data } = await api.get(`/farms/${id}/product`)
  // console.log('request result:', data)
  return data
}

export {getAllFarms, getAllProductsByFarmId}
