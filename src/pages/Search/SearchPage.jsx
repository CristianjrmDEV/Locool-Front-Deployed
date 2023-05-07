import React from 'react'
import './SearchPage.css'
import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { FarmsContext } from '../../contexts/farm'
import { ProductsContext } from '../../contexts/product'
import FarmCardComponent from '../../components/FarmCard/FarmCardComponent'
import ProductCardComponent from '../../components/ProductCard/ProductCardComponent'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import FarmListComponent from '../../components/FarmList/FarmListComponent'

const SearchPage = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const displayProducts = () => {
    if (GLOBAL_Product.get.length > 0) {
      return (
        <Box>
          <Typography variant="h6">Products</Typography>
          {GLOBAL_Product.get.map((product, idx) => {
            return (
              <ProductCardComponent
                key={idx}
                product={product}
              />
            )
          })}
        </Box>
      )
    }
  }

  const displayFarms = () => {
    if (GLOBAL_Farm.get.length > 0) {
      return <FarmListComponent farms={GLOBAL_Farm} />
    }
  }

  return (
    <Box>
      <PageTitleComponent title={'Search results'} />
      <Box>{displayProducts()}</Box>
      <Box>{displayFarms()}</Box>
    </Box>
  )
}

export default SearchPage
