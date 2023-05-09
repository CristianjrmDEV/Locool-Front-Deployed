import api from './config/'
import { lookForFarms, getAllProductsByFarmId } from './farmService'

const lookForProducts = async (query) => {
  const { data } = await api.get('/products', {params: {
    name: query
  }})
  console.log('get products from service: ', data)

  const mappedResult = []

  data.map((obj, idx) => {
    // console.log(obj.farms, idx)

    for (let i = 0; i < obj.farms.length; i++) {
      const objMod = {
        id: obj.productId,
        name: obj.productName,
        img: obj.productImageUrl,
        farmName: obj.farms[i].farmName,
        price: obj.farms[i].farm_product.price,
        stock: obj.farms[i].farm_product.stock,
        latitude: obj.farms[i].latitude,
        longitude: obj.farms[i].longitude,
        // farm: obj.farms[i],
      }
      mappedResult.push(objMod)
    }
  })

  console.log('mapped results: ', mappedResult)

  return mappedResult
}

export { lookForProducts }

