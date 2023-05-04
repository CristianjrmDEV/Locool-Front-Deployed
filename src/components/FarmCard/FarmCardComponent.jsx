import React from 'react'
import './FarmCardComponent.css'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const FarmCardComponent = ({farm}) => {
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
          image={farm.img}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {farm.name.slice(0, 1).toUpperCase() +
              farm.name.slice(1).toLowerCase()}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Farm address: {farm.address}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Municipality: {farm.municipalityId}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Collection point: {farm.collection_point}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Collection schedule: {farm.collection_schedule}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Owner: {farm.userId}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Latitude: {farm.latitude}
          </Typography>
          <Typography
            variant="body2"
            color="text.primary"
          >
            Longitude: {farm.longitude}
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
          See farm
        </Button>
      </CardActions>
    </Card>
  )
}

export default FarmCardComponent