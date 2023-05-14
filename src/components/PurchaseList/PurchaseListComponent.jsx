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

  return (
    <Box>
      {purchases
        .slice()
        .sort(
          (a, b) =>
            new Date(b.updatedAt) -
            new Date(a.updatedAt)
        )
        .map((purchase, idx) => {
          return (
            <PurchaseCardComponent
              key={idx}
              purchase={purchase}
              cart={purchase.farm_products}
            />
          )
        })}
    </Box>
  )
}

export default PurchaseListComponent
