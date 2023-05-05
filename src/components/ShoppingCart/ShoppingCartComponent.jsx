import React, { useEffect, useState } from 'react'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Divider
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import ProductCartComponent from '../ProductCart/ProductCartComponent'

const ShoppingCartComponent = () => {

  const [cart, setCart] = useState([])
  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    const cartMap = new Map(JSON.parse(localStorage.getItem(`cart-${localStorage.getItem('username')}`)))
    const cartArray = [...cartMap.values()] // Convert iterator to array
    setCart(cartArray)
    calculateTotal(cartArray)
  }, [])
  
  const calculateTotal = (cartArray) => {
    const totalAmount = cartArray.reduce((acc, curr) => acc + curr.price * curr.quantity, 0)
    localStorage.setItem(`total-${localStorage.getItem('username')}`, totalAmount)
    setTotalPrice(totalAmount.toFixed(2))
  }
  
  const removeFromCart = (productId) => {
    const cartMap = new Map(JSON.parse(localStorage.getItem(`cart-${localStorage.getItem('username')}`)));
    cartMap.delete(productId);
    localStorage.setItem(`cart-${localStorage.getItem('username')}`, JSON.stringify([...cartMap]));
    const newCartArray = [...cartMap.values()];
    setCart(newCartArray);
    calculateTotal(newCartArray);
  }

  const emptyCart = () => {
    localStorage.setItem(`cart-${localStorage.getItem('username')}`, JSON.stringify([...new Map()]))

    setCart([])
    calculateTotal([])
  }
  
  const printCart = () => {
    const result = []
    for(let value of cart){
      result.push(value)
    }
    console.log("end result",result)
    return result.map(obj => {
      return <ProductCartComponent key={obj.id} product={obj} removeFromCart={removeFromCart}/>
    })
  }
  
  return (
    <div>
      {printCart()}
      <Card>
        <Button
          fullWidth={true}
          size="small"
          color="red"
          sx={{ backgroundColor: mainTheme.palette.secondary.main }}
          onClick={emptyCart}
        >
          Empty cart
        </Button>
        <Typography>
          Total: {totalPrice + " €"}
        </Typography>
        <Divider/>
        <Button
          fullWidth={true}
          size="small"
          color="white"
          sx={{ backgroundColor: mainTheme.palette.green.main }}
          href='/app/payment-method'
        >
          Proceed to pay
        </Button>
      </Card>
 
      
    </div>
  )
}

export default ShoppingCartComponent