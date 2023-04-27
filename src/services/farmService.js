import api from './config/'

const getFarms = async () => {
  console.log('before retrieveing data')
  const { data } = await api.get('/farms')
  console.log('request result:', data)

  return data
}

export default getFarms
