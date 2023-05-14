import api from './config/'

const lookForProducts = async (query) => {
  try {
    const { data } = await api.get('/products', {
      params: {
        name: query,
      },
    })

    const mappedResult = []

    data.map((obj, idx) => {
      for (let i = 0; i < obj.farms.length; i++) {
        const objMod = {
          id: obj.productId,
          name: obj.productName,
          img: obj.productImageUrl,
          farmName: obj.farms[i].farmName,
          price: obj.farms[i].farm_product.price,
          stock: obj.farms[i].farm_product.stock,
          farmProductId: obj.farms[i].farm_product.id,
          latitude: obj.farms[i].latitude,
          longitude: obj.farms[i].longitude,
          farmId: obj.farms[i].farmId,
        }
        mappedResult.push(objMod)
      }
    })
    return mappedResult
  } catch (err) {
    return []
  }
}

export { lookForProducts }
