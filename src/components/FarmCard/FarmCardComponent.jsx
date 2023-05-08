import React from 'react'
import './FarmCardComponent.css'
import { Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { capitalise, getFullMame } from '../../services/toolkit'
import PropTypes from 'prop-types'
import ButtonComponent from '../Button/ButtonComponent'


const FarmCardComponent = ({farm}) => {
    FarmCardComponent.propTypes = {
      farm: PropTypes.object.isRequired,
    }

    const getOwner = (farm) => {
      const name = farm.user.first_name
      const surname = farm.user.last_name
      const username = farm.user.username
      if (name.length > 0 && username.length > 0) {
        return getFullMame(name, surname)
      } 
      if (name.length > 0 || surname.length > 0) {
        return name.length > 0 ? capitalise(name) : capitalise(surname)
      }
      return capitalise(username)
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
            Owner: {getOwner(farm)}
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
        <ButtonComponent text='See farm'/>
      </CardActions>
    </Card>
  )
}

export default FarmCardComponent