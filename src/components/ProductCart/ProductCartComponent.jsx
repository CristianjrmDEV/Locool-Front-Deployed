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

const ProductCartComponent = ({ product, removeFromCart }) => {

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
            {product.name.slice(0, 1).toUpperCase() +
              product.name.slice(1).toLowerCase()}
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
            <keygen />
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
        {/* <Button
          fullWidth={true}
          size="small"
          color="red"
          sx={{ backgroundColor: mainTheme.palette.secondary.main }}
          onClick={handleRemoveFromCart}
        >
          Remove from cart
        </Button> */}
        <ButtonComponent
          text="Remove"
          fx={handleRemoveFromCart}
        />
      </CardActions>
    </Card>
  )
}

export default ProductCartComponent