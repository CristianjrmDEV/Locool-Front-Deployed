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
import { capitalise } from '../../services/toolkit'

const ProductCardComponent = ({ product }) => {
    // console.log('Item', product)

  const addProductToCart = () => {
    const cartMap = new Map(JSON.parse(localStorage.getItem(`cart-${localStorage.getItem('locoolUsername')}`)))
    console.log("Carrito" ,cartMap)
    console.log("Item", product)
    if(!cartMap.has(product.id)){
      cartMap.set(product.id, {
        id: product.id,
        name: product.name,
        farmName: product.farm.farmName,
        price: product.farm.farm_product.price,
        quantity: 1,
      })
    } else {
      cartMap.get(product.id)["quantity"]++
    }
    console.log(cartMap)
    localStorage.setItem(`cart-${localStorage.getItem('locoolUsername')}`, JSON.stringify([...cartMap]))
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
            {capitalise(product.name)}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Price: {product.farm.farm_product.price} €
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Stock: {product.farm.farm_product.stock}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Farm: {product.farm.farmName}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Latitude: {product.farm.latitude}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Longitude: {product.farm.longitude}
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