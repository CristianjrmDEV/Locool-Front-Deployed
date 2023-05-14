import React, { useContext, useEffect, useState } from 'react'
import './MapComponent.css'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import L from 'leaflet'
import PropTypes from 'prop-types'

import {
  Box,
  Divider,
  FormControlLabel,
  Radio,
  RadioGroup,
  Typography,
} from '@mui/material'
import { ProductsContext } from '../../contexts/product'
import { FarmsContext } from '../../contexts/farm'
import ProductCardComponent from '../ProductCard/ProductCardComponent'
import FarmCardComponent from '../FarmCard/FarmCardComponent'
import logoSymbol from './../../assets/logo/logo-symbol.svg'
import farmSymbol from './../../assets/icons/home-icon.svg'
import markerSymbol from './../../assets/icons/marker-icon.svg'
import { mainTheme } from '../../themes/mainTheme'
import { capitalise, convertCoordsToKm } from '../../services/toolkit'
import ButtonComponent from '../Button/ButtonComponent'
import Slider from '@mui/material/Slider'
import PersonIcon from '@mui/icons-material/Person'
import TuneIcon from '@mui/icons-material/Tune'

const MapComponent = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const locoolIcon = new L.Icon({
    iconUrl: logoSymbol,
    iconRetinaUrl: logoSymbol,
    iconSize: [50, 70], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 50], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [3, -70],
  })

  const farmIcon = new L.Icon({
    iconUrl: farmSymbol,
    iconRetinaUrl: farmSymbol,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [-20, 22], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [45, -30],
  })

  const myLocationIcon = new L.Icon({
    iconUrl: markerSymbol,
    iconRetinaUrl: markerSymbol,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [0, 22], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [24, -30],
  })

  const [position, setPosition] = useState(null)
  const [distance, setDistance] = useState(100)
  const [price, setPrice] = useState(1000)

  const handleDistance = (event) => {
    setDistance(event.target.value)
  }

  const handlePrice = (event) => {
    setPrice(event.target.value)
  }

  const MyLocationMarker = () => {
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    const UserName = () => {
      return (
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PersonIcon
            color="white"
            sx={{ fontSize: '50px' }}
          />
          <Typography
            variant="h6"
            color={mainTheme.palette.white.main}
          >
            {capitalise(localStorage.getItem('locoolUsername'))} `s location
          </Typography>
        </Box>
      )
    }

    const DistanceFilter = () => {
      return (
        <Box>
          <Box>Distance</Box>
          <RadioGroup
            aria-labelledby="distance"
            name="distance"
            value={distance}
            onChange={handleDistance}
          >
            <FormControlLabel
              value={5}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="5 Km"
            />
            <FormControlLabel
              value={10}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="10 Km"
            />
            <FormControlLabel
              value={20}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="20 Km"
            />
            <FormControlLabel
              value={100}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="100 Km"
            />
          </RadioGroup>
        </Box>
      )
    }

    const PriceFilter = () => {
      return (
        <Box>
          <Box>Price</Box>

          <RadioGroup
            aria-labelledby="price"
            name="price"
            value={price}
            onChange={handlePrice}
            // sx={{border:mainTheme.palette.green.main }}
          >
            <FormControlLabel
              value={1}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="1 €"
            />
            <FormControlLabel
              value={2}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="2 €"
            />
            <FormControlLabel
              value={3}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="3 €"
            />
            <FormControlLabel
              value={1000}
              control={
                <Radio
                  color="green"
                  variant="plain"
                />
              }
              label="All"
            />
          </RadioGroup>
        </Box>
      )
    }
    return position === null ? null : (
      <Marker
        position={position}
        icon={myLocationIcon}
      >
        <Popup>
          <Box
            sx={{
              color: mainTheme.palette.white.main,
            }}
          >
            <UserName />
            <Divider
              sx={{ borderColor: mainTheme.palette.white.main, my: 1 }}
            />
            <Box sx={{ display: 'flex', m: 1 }}>
              <DistanceFilter />
              <PriceFilter />
            </Box>
          </Box>
        </Popup>
      </Marker>
    )
  }

  const displayFarms = () => {
    return (
      GLOBAL_Farm.get &&
      GLOBAL_Farm.get
        .filter((el) => {
          if (position !== null) {
            return (
              convertCoordsToKm(
                el.latitude,
                position.lat,
                el.longitude,
                position.lng
              ) <= distance
            )
          } else return true
        })
        .map((farm, idx) => {
          if (farm.latitude !== null && farm.longitude !== null)
            return (
              <Marker
                key={idx}
                position={[farm.latitude, farm.longitude]}
                icon={farmIcon}
              >
                <Popup>
                  <FarmCardComponent farm={farm} />
                </Popup>
              </Marker>
            )
        })
    )
  }

  const displayProducts = () => {
    return (
      GLOBAL_Product.get &&
      GLOBAL_Product.get
        .filter((el) => {
          if (position !== null) {
            return (
              convertCoordsToKm(
                el.latitude,
                position.lat,
                el.longitude,
                position.lng
              ) <= distance
            )
          } else return true
        })
        .filter((el) => el.price <= price)
        .map((product, idx) => {
          if (product.latitude !== null && product.longitude !== null)
            return (
              <Marker
                key={idx}
                position={[product.latitude, product.longitude]}
                icon={locoolIcon}
              >
                <Popup>
                  <ProductCardComponent
                    product={product}
                    showFarmName={true}
                    seeFarmButton={true}
                  />
                </Popup>
              </Marker>
            )
        })
    )
  }

  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
      }}
    >
      <MapContainer
        center={[27.956918575017003, -15.6050452586645]}
        zoom={10}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MyLocationMarker />
        {displayProducts()}
        {displayFarms()}
      </MapContainer>
    </Box>
  )
}

export default MapComponent
