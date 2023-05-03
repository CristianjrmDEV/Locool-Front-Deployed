import React from 'react'
import './ProductCardComponent.css'
import { Box } from '@mui/material'

const ProductCardComponent = ({product}) => {
  return (
    <Box>
      <Box>name: {product.name}</Box>
      <Box>price: {product.price}</Box>
      <Box>stock: {product.stock}</Box>
      <Box>img: {product.img}</Box>
      <Box>address: {product.farmAddress}</Box>
      <Box>latitude: {product.latitude}</Box>
      <Box>longitude: {product.longitude}</Box>
    </Box>
  )
}

export default ProductCardComponent
