import React from 'react'
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import ButtonComponent from '../Button/ButtonComponent'
import PropTypes from 'prop-types'
import { capitalise } from '../../services/toolkit'


const ProductCartComponent = ({ product, removeFromCart, smallCart }) => {
    ProductCartComponent.propTypes = {
      product: PropTypes.object,
      removeFromCart: PropTypes.func,
      smallCart: PropTypes.bool
    }

    const handleRemoveFromCart = () => {
        removeFromCart(product.id);
    }

  return (
    <Grid item xs={12} md={smallCart? 12: 6} xl={smallCart? 12:4} >
      <Card
        sx={{
          backgroundColor: mainTheme.palette.white.main,
          m: 2,
          padding: 2,
        }}
      >
        <CardActionArea>
          <Grid
            container
            spacing={1}
          >
            <Grid
              item
              xs={smallCart? 12:4}
              md={smallCart? 12:6}
            >
              <CardMedia
                component="img"
                width="200"
                height= {smallCart? "": "200"}
                image={product.img}
                alt="Imagen de un producto"
                sx={{ objectFit: 'contain' }}
              />
            </Grid>
            <Grid
              item
              xs={smallCart? 12:6}
              md={smallCart? 12:6}
            >
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
            </Grid>
          </Grid>
        </CardActionArea>
        <CardActions>
          <ButtonComponent
            text="Remove"
            fx={handleRemoveFromCart}
            bgColour={'red'}
          />
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ProductCartComponent