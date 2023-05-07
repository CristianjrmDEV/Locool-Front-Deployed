import React from 'react'
import './SearchPage.css'
import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { FarmsContext } from '../../contexts/farm'
import { ProductsContext } from '../../contexts/product'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import FarmListComponent from '../../components/FarmList/FarmListComponent'
import ProductListComponent from '../../components/ProductList/ProductListComponent'

const SearchPage = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const displayProducts = () => {
    if (GLOBAL_Product.get.length > 0) {
      return <ProductListComponent products={GLOBAL_Product} />
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
