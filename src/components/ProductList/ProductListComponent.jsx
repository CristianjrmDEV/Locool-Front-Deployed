import React from 'react'
import PropTypes from 'prop-types'
import './ProductListComponent.css'
import { Box, Typography } from '@mui/material'
import ProductCardComponent from '../ProductCard/ProductCardComponent'

const ProductListComponent = ({products}) => {
      ProductListComponent.propTypes = {
        products: PropTypes.array.isRequired,
      }
  return (
    <>
      <Typography variant="h6">Farms</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            sm: 'auto',
            md: 'auto auto',
            lg: 'auto auto auto',
            xl: 'auto auto auto auto',
          },
        }}
      >
        {products.get.map((farm, idx) => {
          return (
            <ProductCardComponent
              key={idx}
              farm={farm}
            />
          )
        })}
      </Box>
    </>
  )
}

export default ProductListComponent