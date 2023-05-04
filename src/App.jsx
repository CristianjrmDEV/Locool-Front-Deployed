import { RouterProvider } from 'react-router-dom'
import router from './router'
import { ThemeProvider } from '@emotion/react'
import { mainTheme } from './themes/mainTheme'
import '@fontsource/dosis'
import '@fontsource/quicksand'
import './App.css'
import { ProductsContext } from './contexts/product'

import { useState } from 'react'
import { FarmsContext } from './contexts/farm'

const App = () => {
  const [products, setProducts] = useState([])
  const [farms, setFarms] = useState([])


  const productObj = {
    get: products,
    set: (x)=> setProducts(x)
  }

    const farmObj = {
      get: farms,
      set: (x) => setFarms(x)
    }

  return (
    <div className="App">
      <FarmsContext.Provider value={farmObj}>
        <ProductsContext.Provider value={productObj}>
          <ThemeProvider theme={mainTheme}>
            <RouterProvider router={router} />
          </ThemeProvider>
        </ProductsContext.Provider>
      </FarmsContext.Provider>
    </div>
  )
}

export default App
