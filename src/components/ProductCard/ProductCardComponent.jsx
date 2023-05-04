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
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  )
}

export default ProductCardComponent