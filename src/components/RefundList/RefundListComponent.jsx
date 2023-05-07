import React from 'react'
import './RefundListComponent.css'
import PurchaseCardComponent from '../PurchaseCard/PurchaseCardComponent'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'
import RefundCardComponent from '../RefundCard/RefundCardComponent'

const RefundListComponent = ({ refunds }) => {
  RefundListComponent.propTypes = {
    refunds: PropTypes.array.isRequired,
  }

  return (
    <Box
      display="grid"
      gridTemplateColumns="auto auto auto"
      sx={{
        gridTemplateColumns: {
          sm: 'auto',
          md: 'auto auto',
          lg: 'auto auto auto',
          xl: 'auto auto auto',
        },
      }}
    >
      {refunds.map((refund, idx) => {
        return (
          <Box key={idx}>
            <RefundCardComponent refund={refund} />
          </Box>
        )
      })}
    </Box>
  )
}

export default RefundListComponent
