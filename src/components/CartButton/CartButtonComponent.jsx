import React, { useContext } from 'react'
import './CartButtonComponent.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Button } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { CartContext } from '../../contexts/cart'

const CartButtonComponent = () => {
  const GLOBAL_Cart = useContext(CartContext)

  const handleCartStatus =() => {
        GLOBAL_Cart.get === true
          ? GLOBAL_Cart.set(false)
          : GLOBAL_Cart.set(true)
  }

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
      onClick={handleCartStatus}
    >
      <ShoppingCartIcon sx={{ fontSize: '30px' }} />
      <Box sx={{ fontSize: '0.6rem' }}>Cart</Box>
    </Button>
  )
}

export default CartButtonComponent
