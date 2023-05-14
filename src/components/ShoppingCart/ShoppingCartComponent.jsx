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
import PageTitleComponent from '../PageTitle/PageTitleComponent'

const ShoppingCartComponent = ({ toggleDrawer, smallCart }) => {
  ShoppingCartComponent.propTypes = {
    toggleDrawer: PropTypes.func,
    smallCart: PropTypes.bool
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
      totalAmount.toFixed(2)
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
    return result.map((obj) => {
      return (
        <ProductCartComponent
          key={obj.id}
          product={obj}
          removeFromCart={removeFromCart}
          smallCart={smallCart}
        />
      )
    })
  }

  return (
    <Box
      width={'80%'}
      sx={{ m: '10px auto 50px auto' }}
    >
      {smallCart ? "" : <PageTitleComponent title={"Shopping Cart"} />}
      <Grid
        container
        spacing={7}
      >
        <Grid
          item
          xs={12}
          lg={smallCart ? 12 : 9}
        >
          <Grid
            container
          >

            {printCart()}
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          lg={smallCart ? 12 : 3}
        >
          <Card>
            <CardActions sx={{p: 2}}>
              <ButtonComponent
                text={'Empty cart'}
                bgColour={'red'}
                width={'100%'}
                fx={emptyCart}
                sx={{ boxSizing: 'border-box' }}
              />
            </CardActions>
            
            <Box sx={{ p: 2 }}>
              <Typography>Total: {totalPrice + ' €'}</Typography>
            </Box>
            <CardActions sx={{padding: 2}}>
              <Link to="/app/payment-method">
                <ButtonComponent
                  text={'Proceed to pay'}
                  bgColour={'green'}
                  fx={toggleDrawer}
                />
              </Link>
            </CardActions>
           
          </Card>
        </Grid>
      </Grid>
    </Box>

  )
}

export default ShoppingCartComponent
