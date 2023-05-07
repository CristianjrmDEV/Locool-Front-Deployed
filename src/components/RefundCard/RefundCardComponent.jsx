import React from 'react'
import './RefundCardComponent.css'
import LogoSymbolComponent from '../LogoSymbol/LogoSymbolComponent'
import { Box, Divider } from '@mui/material'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'
import SavingsIcon from '@mui/icons-material/Savings'

const RefundCardComponent = ({ refund }) => {
  RefundCardComponent.propTypes = {
    refund: PropTypes.object.isRequired,
  }
  
  console.log('refund from refund card: ', refund)

  
  return (
    <>
      <Box
        sx={{
          width: '200px',
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
          gridTemplateColumns="20px 70px auto"
          gap={1}
          height={'75px'}
        >
          <Box sx={{ alignSelf: 'top' }}>
            <SavingsIcon fontSize="large" />
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            <Box>Date</Box>
            <Box>Status</Box>
            <Box>Refund</Box>
            <Box>Purchase</Box>
          </Box>
          <Box>
            <Box>{refund.updatedAt.slice(0, 10)}</Box>
            <Box>{refund.status}</Box>
            <Box>{refund.id}</Box>
            <Box>{refund.purchaseId}</Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}

export default RefundCardComponent
