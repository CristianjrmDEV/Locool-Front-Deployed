import React from 'react'
import './PurchaseCardComponent.css'
import LogoSymbolComponent from '../LogoSymbol/LogoSymbolComponent'
import {
  Box,
} from '@mui/material'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'
import PurchaseItemsComponent from '../PurchaseItems/PurchaseItemsComponent'

const PurchaseCardComponent = ({ purchase, cart }) => {
  PurchaseCardComponent.propTypes = {
    purchase: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
  }

  return (
    <>
      <Box
        className="row"
        sx={{
          width: '100%',
          backgroundColor: mainTheme.palette.secondary.main,
          borderRadius: 3,
          boxShadow: 3,
          m: 3,
          p: 2,
          fontSize: '.9rem',
        }}
      >
        <Box
          display="grid"
          gridTemplateColumns="60px 50px auto"
          gap={1}
        >
          <Box>
            <LogoSymbolComponent />
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'left' }}>
            <Box>P. Ref</Box>
            <Box>Date</Box>
            <Box>Status</Box>
            <Box>Total</Box>
          </Box>
          <Box sx={{ textAlign: 'left'}}>
            <Box>{purchase.id}</Box>
            <Box>{purchase.updatedAt.slice(0, 10)}</Box>
            <Box>{purchase.status}</Box>
            <Box>
              {purchase.farm_products.reduce(
                (acc, curr) => curr.price + acc,
                0
              )}{' '}
              €
            </Box>
          </Box>
        </Box>
        <Box className="row">
          <PurchaseItemsComponent cart={cart} />
        </Box>
      </Box>
    </>
  )
}

export default PurchaseCardComponent
