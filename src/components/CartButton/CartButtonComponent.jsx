import React from 'react'
import './CartButtonComponent.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'
import { Box, Button } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { Link, useNavigate } from 'react-router-dom'

const CartButtonComponent = () => {
    const goTo = useNavigate()
    const handleClick = () => {
      goTo('/app/cart')
    }
  return (
    <Button
      onClick={handleClick}
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
