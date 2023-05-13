import React from 'react'
import './PurchaseCardComponent.css'
import LogoSymbolComponent from '../LogoSymbol/LogoSymbolComponent'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'
import PurchaseItemsComponent from '../PurchaseItems/PurchaseItemsComponent'
import { roundNumber } from '../../services/toolkit'

const PurchaseCardComponent = ({ purchase, cart }) => {
  PurchaseCardComponent.propTypes = {
    purchase: PropTypes.object.isRequired,
    cart: PropTypes.array.isRequired,
  }

  const sumArray = (arrayOfNumbers) => {
    const result = arrayOfNumbers.reduce((acc, curr) => curr.price + acc, 0)
    return roundNumber(result)
  }

  return (
    <>
      <Box
        className="row"
        sx={{
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
          <Box sx={{ textAlign: 'left' }}>
            <Box>{purchase.id}</Box>
            <Box>{purchase.updatedAt.slice(0, 10)}</Box>
            <Box>{purchase.status}</Box>
            <Box>{sumArray(purchase.farm_products)} €</Box>
          </Box>
        </Box>
        <Box
          className="row"
          sx={{ p: 0, m: 0 }}
        >
          <PurchaseItemsComponent cart={cart} />
        </Box>
      </Box>
    </>
  )
}

export default PurchaseCardComponent
