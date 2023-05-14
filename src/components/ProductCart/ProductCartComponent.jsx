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
  SvgIcon,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import ButtonComponent from '../Button/ButtonComponent'
import PropTypes from 'prop-types'
import { capitalise } from '../../services/toolkit'

import DeleteIcon from '@mui/icons-material/Delete';


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
    <Grid item xs={12} >
      <Card
        sx={{
          backgroundColor: mainTheme.palette.white.main,
          m: 1,
          padding: 2,
        }}
      >
        <CardActionArea>
          <Grid
            container
            spacing={smallCart ? 0 : 2}
          >
            <Grid
              item
              xs={12}
              md={smallCart ? 12 : 2}
            >
              <CardMedia
                component="img"
                width="100"
                height={smallCart ? "" : "100"}
                image={product.img}
                alt="Imagen de un producto"
                sx={{ objectFit: 'contain', borderRadius: '10px' }}
              />
            </Grid>
            <Grid
              item
              xs={smallCart ? 12 : 12}
              md={smallCart ? 12 : 10}
            >
              <CardContent>
                <Grid
                  container
                  spacing={smallCart ? 1 : 2}
                  alignItems='center'
                >
                  <Grid item xs={smallCart ? 12 : 10} md={smallCart ? 12 : 4}>
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
                      {product.farmName}
                    </Typography>
                  </Grid>
                  <Grid item xs={smallCart ? 12 : 4} md={smallCart ? 12 : 2}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                    >
                      {product.price} € / kg
                    </Typography>
                  </Grid>
                  <Grid item xs={smallCart ? 12 : 4} md={smallCart ? 12 : 2}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                    >
                      {product.quantity} kg
                    </Typography>
                  </Grid>
                  <Grid item xs={smallCart ? 12 : 4} md={smallCart ? 12 : 2.5}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                    >
                      Total: {product.quantity * product.price} €
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={smallCart ? 12 : 1}>
                    <CardActions>
                      <ButtonComponent
                        text={<SvgIcon component={DeleteIcon} color='white'></SvgIcon>}
                        fx={handleRemoveFromCart}
                        bgColour={'red'}
                      />
                    </CardActions>
                  </Grid>
                </Grid>
              </CardContent>
            </Grid>
          </Grid>
        </CardActionArea>

      </Card>
    </Grid>
  )
}

export default ProductCartComponent