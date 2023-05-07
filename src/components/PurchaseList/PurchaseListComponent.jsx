import React from 'react'
import './PurchaseListComponent.css'
import PurchaseCardComponent from '../PurchaseCard/PurchaseCardComponent'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'
import { useMediaQuery } from '@mui/material'

const PurchaseListComponent = ({ purchases }) => {
  PurchaseListComponent.propTypes = {
    purchases: PropTypes.array.isRequired,
  }

//   const onlySmallScreen = useMediaQuery(mainTheme.breakpoints.down('sm'))
//   const onlyMediumScreen = useMediaQuery(mainTheme.breakpoints.down('md'))
//   const onlyLargeScreen = useMediaQuery(mainTheme.breakpoints.down('ml'))

  return (
    <Box
      display="grid"
      gridTemplateColumns="auto"
      sx={{
        // gridTemplateColumns: { sm: 'auto', md: 'auto auto', lg:'auto auto auto', xl:'auto auto auto' },
      }}
    >
      {purchases.map((purchase, idx) => {
        return (
          <PurchaseCardComponent
            key={idx}
            purchase={purchase.detail}
            cart={purchase.cart}
          />
        )
      })}
    </Box>
  )
}

export default PurchaseListComponent
