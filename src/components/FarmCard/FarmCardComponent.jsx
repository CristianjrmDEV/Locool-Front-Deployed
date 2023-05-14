import React, { useContext } from 'react'
import './FarmCardComponent.css'
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
import { capitalise, getFullMame } from '../../services/toolkit'
import PropTypes from 'prop-types'
import ButtonComponent from '../Button/ButtonComponent'
import { FarmsContext } from '../../contexts/farm'
import { useNavigate } from 'react-router-dom'
import { getAllProductsByFarmId, getFarmById } from '../../services/farmService'

const FarmCardComponent = ({ farm }) => {
  FarmCardComponent.propTypes = {
    farm: PropTypes.object.isRequired,
  }

  const { setOne } = useContext(FarmsContext)

  const goTo = useNavigate()

  const handleClick = async () => {
    const result = await getFarmById(farm.id)

    ///products
    const productByFarm = await getAllProductsByFarmId(farm.id)
    const mappedArray = []
    productByFarm.forEach((el) => {
      const objRes = {
        name: el.name,
        img: el.img_url,
        price: el.farm_product.price,
        stock: el.farm_product.stock,
        farmName: result.name,
        description: el.farm_product.description,
      }
      mappedArray.push(objRes)
    })

    /////
    const objResult = {
      collection_point: result.collection_point,
      collection_schedule: result.collection_schedule,
      user: {
        email: result.user.email,
        first_name: result.user.first_name,
        last_name: result.user.last_name,
      },
      municipality: { name: result.municipality.name },
      image_url: result.image_url,
      name: result.name,
      address: result.address,
      id: result.id,
      products: mappedArray,
    }
    setOne(objResult)
    goTo('/app/farms/details')
  }

  const getOwner = (farm) => {
    if (farm.user !== null) {
      const name = farm.user.first_name === null ? '' : farm.user.first_name
      const surname = farm.user.last_name === null ? '' : farm.user.last_name
      const username = farm.user.username
      if (name.length > 0 && username.length > 0) {
        return getFullMame(name, surname)
      }
      if (name.length > 0 || surname.length > 0) {
        return name.length > 0 ? capitalise(name) : capitalise(surname)
      }
      return capitalise(username)
    } else {
      return 'Unknown'
    }
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
          image={farm.image_url}
          alt=""
        />
        <CardContent>
          <Box>
            <Typography
              gutterBottom
              variant="h4"
              component="div"
            >
              {capitalise(farm.name)}
            </Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Address:
            </Typography>
            <Typography variant="span"> {farm.address}</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Municipality:
            </Typography>
            <Typography variant="span"> {farm.municipality.name}</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Owner:
            </Typography>
            <Typography variant="span"> {getOwner(farm)}</Typography>
          </Box>
          <Box sx={{ pb: 0.5, fontSize: '1rem' }}>
            <Typography
              variant="span"
              sx={{ fontWeight: 'bold' }}
            >
              Contact:
            </Typography>
            <Typography variant="span"> {farm.user.email}</Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <ButtonComponent
          text="See farm"
          fx={handleClick}
        />
      </CardActions>
    </Card>
  )
}

export default FarmCardComponent
