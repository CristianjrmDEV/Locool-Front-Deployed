import api from './config/'
import { getAllFarms, getAllProductsByFarmId } from './farmService'

const getProducts = async () => {
  // console.log('sending request..')
  const { data } = await api.get('/products')
  // console.log('request result:', data)
  return data
}

const getPricedProducts = async () => {
  const farmsId = await getAllFarms()
  const productsId = await getProducts()
  const farmProducts = []
  let arrayOfFarmProducts = null

  console.log('farmsid: ', farmsId)
  farmsId.map((farm) => {
    farmProducts.push(getAllProductsByFarmId(farm.id))
  })
  arrayOfFarmProducts = Promise.all(farmProducts).then((arr) =>
    arr.map((el) => el[0].farm_product)
  )

  const productPricedNamed = await arrayOfFarmProducts

  const mappedResult = []

  productPricedNamed.map((obj) => {
    const productIdentified = productsId.filter(el => el.id === obj.productId)
    const farmIdentified = farmsId.filter((el) => el.id === obj.farmId)
    // console.log('this is obj: ',obj)
    const objMod = {
      id: obj.id,
      name: productIdentified[0].name,
      price: obj.price,
      stock: obj.stock,
      img: productIdentified[0].img_url,
      farmName: farmIdentified[0].name,
      farmAddress: farmIdentified[0].address,
      latitude: farmIdentified[0].latitude,
      longitude: farmIdentified[0].longitude,
    }
    mappedResult.push(objMod)
  })
  // console.log(mappedResult)
  return mappedResult
}

export { getProducts, getPricedProducts }
