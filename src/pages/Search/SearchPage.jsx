import React from 'react'
import './SearchPage.css'
import { useContext } from 'react'
import { Box, Typography } from '@mui/material'
import { FarmsContext } from '../../contexts/farm'
import { ProductsContext } from '../../contexts/product'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import ProductListComponent from '../../components/ProductList/ProductListComponent'
import FarmSearchListComponent from '../../components/FarmSearchList/FarmSearchListComponent'
import SearchMapComponent from '../../components/SearchMap/SearchMapComponent'

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
      return <FarmSearchListComponent farms={GLOBAL_Farm} />
    }
  }

  return (
    <Box sx={{
      width: '100%'
    }}>
      <PageTitleComponent title={'Search results'} />
      <SearchMapComponent />
      <Box>{displayProducts()}</Box>
      <Box>{displayFarms()}</Box>
    </Box>
  )
}

export default SearchPage
