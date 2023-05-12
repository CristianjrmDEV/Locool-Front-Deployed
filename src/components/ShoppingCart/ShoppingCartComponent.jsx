import React, { useContext, useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Grid,
} from '@mui/material'

import ProductCartComponent from '../ProductCart/ProductCartComponent'
import { CartContext } from '../../contexts/cart'
import ButtonComponent from '../Button/ButtonComponent'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const ShoppingCartComponent = ({ toggleDrawer }) => {
  ShoppingCartComponent.propTypes = {
    toggleDrawer: PropTypes.func,
  }

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)
  const GLOBAL_Cart = useContext(CartContext)

  useEffect(() => {
    const cartMap = new Map(
      JSON.parse(
        localStorage.getItem(`cart-${localStorage.getItem('locoolUsername')}`)
      )
    )
    // console.log(cartMap)
    const cartArray = [...cartMap.values()] // Convert iterator to array
    setCart(cartArray)
    calculateTotal(cartArray)
  }, [GLOBAL_Cart.get])

  const calculateTotal = (cartArray) => {
    const totalAmount = cartArray.reduce(
      (acc, curr) => acc + curr.price * curr.quantity,
      0
    )
    localStorage.setItem(
      `total-${localStorage.getItem('locoolUsername')}`,
      totalAmount
    )
    setTotalPrice(totalAmount.toFixed(2))
  }

  const removeFromCart = (productId) => {
    const cartMap = new Map(
      JSON.parse(
        localStorage.getItem(`cart-${localStorage.getItem('locoolUsername')}`)
      )
    )
    cartMap.delete(productId)
    localStorage.setItem(
      `cart-${localStorage.getItem('locoolUsername')}`,
      JSON.stringify([...cartMap])
    )
    const newCartArray = [...cartMap.values()]
    setCart(newCartArray)
    calculateTotal(newCartArray)
  }

  const emptyCart = () => {
    localStorage.setItem(
      `cart-${localStorage.getItem('locoolUsername')}`,
      JSON.stringify([...new Map()])
    )

    setCart([])
    calculateTotal([])
  }

  const printCart = () => {
    const result = []
    for (let value of cart) {
      result.push(value)
    }
    // console.log('end result', result)
    return result.map((obj) => {
      return (
        <ProductCartComponent
          key={obj.id}
          product={obj}
          removeFromCart={removeFromCart}
        />
      )
    })
  }

  return (
    <Grid
      container
      spacing={1}
      xs={12}
    >
      <Grid
        container
        xs={12}
        lg={9}
        sx={{ gridAutoRows: '1fr' }}
      >
        {printCart()}
      </Grid>

      <Grid
        item
        xs={12}
        lg={3}
      >
        <Card>
          <ButtonComponent
            text={'Empty cart'}
            bgColour={'red'}
            margin={'20px'}
            width={'85%'}
            fx={emptyCart}
            sx={{boxSizing:'border-box'}}
          />
          <Box sx={{ p: 2 }}>
            <Typography>Total: {totalPrice + ' €'}</Typography>
          </Box>
          <Divider />
          <Link to="/app/payment-method">
            <ButtonComponent
              text={'Proceed to pay'}
              bgColour={'green'}
              margin={'20px'}
              width={'85%'}
              fx={toggleDrawer}
            />
          </Link>
        </Card>
      </Grid>
    </Grid>
  )
}

export default ShoppingCartComponent
