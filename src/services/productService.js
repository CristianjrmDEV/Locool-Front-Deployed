import api from './config/'
import { getAllFarms, getAllProductsByFarmId } from './farmService'

const getProducts = async (query) => {
  const { data } = await api.get('/products', {params: {
    name: query
  }})
  // console.log('get products from service: ', data)

  const mappedResult = []

  data.map((obj, idx) => {
    console.log(obj.farms, idx)

    for (let i = 0; i < obj.farms.length; i++) {
      const objMod = {
        id: obj.productId,
        name: obj.productName,
        img: obj.productImageUrl,
        farm: obj.farms[i]
      }
      mappedResult.push(objMod)
    }
  })

  // console.log('mapped results: ', mappedResult)

  return mappedResult
}

export { getProducts }

