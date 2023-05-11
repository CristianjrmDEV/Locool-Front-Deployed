import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './themes/mainTheme'
import '@fontsource/dosis'
import '@fontsource/quicksand'
import './App.css'
import { ProductsContext } from './contexts/product'

import { useEffect, useState } from 'react'
import { FarmsContext } from './contexts/farm'
import { CartContext } from './contexts/cart'
import { getFarms } from './services/farmService'

import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [products, setProducts] = useState([])
  const [farms, setFarms] = useState([])
  const [oneFarm, setOneFarm] = useState({})

  const [cartStatus, setCartStatus] = useState(false)

  const productObj = {
    get: products,
    set: (x) => setProducts(x),
  }

  const farmObj = {
    get: farms,
    set: (x) => setFarms(x),
    getOne: oneFarm,
    setOne: (x) => setOneFarm(x)
  }

  const cartObj = {
    get: cartStatus,
    set: (x) => setCartStatus(x),
  }

  const displayFarms = async () => {
    const result = await getFarms()
    setFarms(result)
  }

  useEffect(()=>{
    displayFarms()
  },[])

  return (
    <div className="App">
      <CartContext.Provider value={cartObj}>
        <FarmsContext.Provider value={farmObj}>
          <ProductsContext.Provider value={productObj}>
            <ThemeProvider theme={mainTheme}>
              <RouterProvider router={router} />
            </ThemeProvider>
          </ProductsContext.Provider>
        </FarmsContext.Provider>
      </CartContext.Provider>
    </div>
  )
}

export default App
