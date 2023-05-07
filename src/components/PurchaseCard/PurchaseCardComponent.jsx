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

  console.log('purchase from purchase card: ', purchase)
  return (
    <>
      <Box
        className="row"
        // display="grid"
        // gridTemplateRows="auto auto"
        // height={'auto'}
        sx={{
          // width: '100%',
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
          gridTemplateColumns="30px 75px auto auto"
          gap={1}
          // height={'70px'}
        >
          <Box>
            <LogoSymbolComponent />
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            <Box>P. Ref</Box>
            <Box>Date</Box>
            <Box>Farm</Box>
            <Box>Total</Box>
          </Box>
          <Box>
            <Box>{purchase.id}</Box>
            <Box>{purchase.updatedAt.slice(0, 10)}</Box>
            <Box>{purchase.farm}</Box>
            <Box>{purchase.total}</Box>
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
