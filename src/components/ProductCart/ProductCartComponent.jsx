import React from 'react'
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
import ButtonComponent from '../Button/ButtonComponent'
import PropTypes from 'prop-types'
import { capitalise } from '../../services/toolkit'


const ProductCartComponent = ({ product, removeFromCart }) => {

    ProductCartComponent.propTypes = {
      product: PropTypes.object,
      removeFromCart: PropTypes.func
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    }

  return (
    <Card
      sx={{
        maxWidth: 600,
        backgroundColor: mainTheme.palette.secondary.main,
        m: 2,
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={product.img}
          alt="Imagen de un producto"
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
            {product.price} € / kg
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Quantity: {product.quantity} kg
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
            Total: {product.quantity * product.price} €
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonComponent
          text="Remove"
          fx={handleRemoveFromCart}
          bgColour={'red'}
        />
      </CardActions>
    </Card>
  )
}

export default ProductCartComponent