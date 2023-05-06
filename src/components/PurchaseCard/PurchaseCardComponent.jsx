import React from 'react'
import './PurchaseCardComponent.css'
import LogoSymbolComponent from '../LogoSymbol/LogoSymbolComponent'
import { Box, Divider } from '@mui/material'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'
import { fontSize } from '@mui/system'

const PurchaseCardComponent = ({ purchase }) => {
  PurchaseCardComponent.propTypes = {
    purchase: PropTypes.object.isRequired,
  }
  return (
    <>
      <Box
        className="row"
        display="grid"
        gridTemplateRows="100px 50px"
        height={'120px'}
        sx={{
          width: '280px',
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
          gridTemplateColumns="auto auto auto"
          gap={1}
          height={'70px'}
        >
          {/* <Box></Box>
        <Box></Box> */}
          <Box>
            <LogoSymbolComponent />
          </Box>
          <Box sx={{ fontWeight: 'bold', textAlign: 'right' }}>
            <Box>P. Ref</Box>
            <Box>Farm</Box>
            <Box>Date</Box>
            <Box>Total</Box>
          </Box>
          <Box>
            <Box>{purchase.id}</Box>
            <Box>{purchase.farm}</Box>
            <Box>{purchase.date}</Box>
            <Box>{purchase.total}</Box>
          </Box>
        </Box>
        <Box className="row">
          <Divider />
          <Box>Cart details ????</Box>
        </Box>
      </Box>
    </>
  )
}

export default PurchaseCardComponent
