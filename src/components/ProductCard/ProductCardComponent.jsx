import React from 'react'
import './ProductCardComponent.css'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const ProductCardComponent = ({ product }) => {
  const addProductToCart = () => {
    const cartMap = new Map(JSON.parse(localStorage.getItem(`cart-${localStorage.getItem('username')}`)))
    console.log("Carrito" ,cartMap)
    console.log("Item", product)
    if(!cartMap.has(product.id)){
      cartMap.set(product.id, {
        "name": product.name,
        "farmName": product.farmName,
        "price": product.price,
        "quantity": 1

      })
    } else {
      cartMap.get(product.id)["quantity"]++
    }
    console.log(cartMap)
    localStorage.setItem(`cart-${localStorage.getItem('username')}`, JSON.stringify([...cartMap]))
  }

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: mainTheme.palette.secondary.main,
        m: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {product.name.slice(0, 1).toUpperCase() +
              product.name.slice(1).toLowerCase()}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Price: {product.price} €
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Stock: {product.stock}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Farm: {product.farmName}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Farm address: {product.farmAddress}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          fullWidth={true}
          size="small"
          color="primary"
          sx={{ backgroundColor: mainTheme.palette.green.main }}
          onClick={addProductToCart}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent