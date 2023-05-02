import api from './config/'

const getProducts = async () => {
  console.log('sending request..')
  const { data } = await api.get('/products')
  console.log('request result:', data)
  return data
}

export {getProducts}
