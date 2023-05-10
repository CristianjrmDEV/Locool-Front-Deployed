import React, { useContext, useState } from 'react'
import './MapComponent.css'
import 'leaflet/dist/leaflet.css'
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from 'react-leaflet'
import { divIcon } from 'leaflet'
import L from 'leaflet'
import PropTypes from 'prop-types'

import { Box, CircularProgress } from '@mui/material'
import { ProductsContext } from '../../contexts/product'
import { FarmsContext } from '../../contexts/farm'
import ProductCardComponent from '../ProductCard/ProductCardComponent'
import FarmCardComponent from '../FarmCard/FarmCardComponent'
import logoSymbol from './../../assets/logo/logo-symbol.svg'
import farmSymbol from './../../assets/icons/farm-icon.svg'
import personSymbol from './../../assets/icons/person-icon.svg'
import markerSymbol from './../../assets/icons/marker-icon.svg'
import { mainTheme } from '../../themes/mainTheme'


const MapComponent = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const locoolIcon = new L.Icon({
    iconUrl: logoSymbol,
    iconRetinaUrl: logoSymbol,
    iconSize: [50, 70], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 60], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [3, -100],
  })

  const farmIcon = new L.Icon({
    iconUrl: farmSymbol,
    iconRetinaUrl: farmSymbol,
    iconSize: [50, 50], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [-20, 22], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [40, -56],
  })

    const myLocationIcon = new L.Icon({
      iconUrl: markerSymbol,
      iconRetinaUrl: markerSymbol,
      iconSize: [50, 50], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [0, 22], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [24, -50],
    })

  const MyLocationMarker = () => {
    const [position, setPosition] = useState(null)
    const map = useMapEvents({
      click() {
        map.locate()
      },
      locationfound(e) {
        setPosition(e.latlng)
        map.flyTo(e.latlng, map.getZoom())
      },
    })

    return position === null ? null : (
      <Marker position={position} icon={myLocationIcon}>
        <Popup>
          <Box sx={{color: mainTheme.palette.white.main, fontWeight: 'bold'}}>I am here!</Box>
        </Popup>
      </Marker>
    )
  }


  const displayFarms = () => {
    if (GLOBAL_Farm.get)
    return GLOBAL_Farm.get.map((farm, idx) => {
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
  }

  const displayProducts = () => {
    // console.log(GLOBAL_Product.get)
    if (GLOBAL_Product.get)
    return GLOBAL_Product.get.map((product, idx) => {
      if (product.latitude !== null && product.longitude !== null)
        return (
          <Marker
            key={idx}
            position={[product.latitude, product.longitude]}
            icon={locoolIcon}
          >
            <Popup>
              <ProductCardComponent product={product} />
            </Popup>
          </Marker>
        )
    })
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
        {/* OPEN STREEN MAPS TILES */}
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyLocationMarker />
        {displayProducts()}
        {displayFarms()}
      </MapContainer>
    </Box>
  )
}

export default MapComponent
