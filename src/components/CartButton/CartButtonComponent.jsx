import React from 'react'
import './CartButtonComponent.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Button } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const CartButtonComponent = () => {

  return (
    <Button
      color="inherit"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '&:hover': {
          backgroundColor: mainTheme.palette.primary.main,
          color: mainTheme.palette.green.main,
        },
      }}
    >
      <ShoppingCartIcon />
      <Box sx={{ fontSize: '0.5rem' }}>Cart</Box>
    </Button>
  )
}

export default CartButtonComponent
