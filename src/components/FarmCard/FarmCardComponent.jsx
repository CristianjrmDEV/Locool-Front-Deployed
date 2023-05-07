import React from 'react'
import './FarmCardComponent.css'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { capitalise } from '../../services/toolkit'
import PropTypes from 'prop-types'


const FarmCardComponent = ({farm}) => {
    FarmCardComponent.propTypes = {
      farm: PropTypes.object.isRequired,
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
          image={farm.image_url}
          alt=""
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
          >
            {capitalise(farm.name)}
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