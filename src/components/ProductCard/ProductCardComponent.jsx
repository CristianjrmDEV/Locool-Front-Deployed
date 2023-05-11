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
import PropTypes from 'prop-types'

const ProductCardComponent = ({ product, showFarmName, showDescription }) => {
  // console.log('Item', product)
  ProductCardComponent.propTypes = {
    product: PropTypes.object.isRequired,
    showFarmName: PropTypes.bool,
    showDescription: PropTypes.bool,
  }

  const addProductToCart = () => {
    const cartMap = new Map(
      JSON.parse(
        localStorage.getItem(`cart-${localStorage.getItem('locoolUsername')}`)
      )
    )
    // console.log('Carrito', cartMap)
    // console.log('Item', product)
    if (!cartMap.has(product.id)) {
      cartMap.set(product.id, {
        id: product.id,
        name: product.name,
        farmName: product.farmName,
        price: product.price,
        quantity: 1,
      })
    } else {
      cartMap.get(product.id)['quantity']++
    }
    console.log(cartMap)
    localStorage.setItem(
      `cart-${localStorage.getItem('locoolUsername')}`,
      JSON.stringify([...cartMap])
    )
  }

  const displayFarmName = () => {
    return (
      showFarmName && (
        <>
          <Typography
            variant="span"
            sx={{ fontWeight: 'bold' }}
          >
            Farm:
          </Typography>
          <Typography variant="span"> {product.farmName}</Typography>
        </>
      )
    )
  }

    const displayDescription = () => {
      return (
        showDescription && (
          <>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Description:
            </Typography>
            <Typography variant="span"> {product.description}</Typography>
          </>
        )
      )
    }

  return (
    <Card
      sx={{
        maxWidth: 345,
        backgroundColor: mainTheme.palette.secondary.main,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="100"
          image={product.img}
          alt=""
        />
        <CardContent>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
            >
              {capitalise(product.name)}
            </Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Price:{' '}
            </Typography>
            <Typography variant="span">{product.price} €</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Stock:
            </Typography>
            <Typography variant="span"> {product.stock}</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>{displayFarmName()}</Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>{displayDescription()}</Box>
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
