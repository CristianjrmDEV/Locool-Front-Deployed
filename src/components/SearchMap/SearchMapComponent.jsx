import React, { useContext, useState } from 'react'
import './SearchMapComponent.css'
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

import { Box } from '@mui/material'
import { ProductsContext } from '../../contexts/product'
import { FarmsContext } from '../../contexts/farm'
import ProductCardComponent from '../ProductCard/ProductCardComponent'
import FarmCardComponent from '../FarmCard/FarmCardComponent'
import symbol from './../../assets/logo/logo-symbol.svg'
import farmSymbol from './../../assets/icons/farm-icon.svg'

const SearchMapComponent = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const MyLocation = () => <Box>My location</Box>

  const LocationMarker = () => {
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
      <Marker position={position}>
        <Popup>
          <MyLocation />
        </Popup>
      </Marker>
    )
  }
  const locoolIcon = new L.Icon({
    iconUrl: symbol,
    iconRetinaUrl: symbol,
    iconSize: [50, 70], // size of the icon
    shadowSize: [50, 64], // size of the shadow
    iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
    shadowAnchor: [4, 62], // the same for the shadow
    popupAnchor: [-3, -76],
  })

    const farmIcon = new L.Icon({
      iconUrl: farmSymbol,
      iconRetinaUrl: farmSymbol,
      iconSize: [50, 95], // size of the icon
      shadowSize: [50, 64], // size of the shadow
      iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
      shadowAnchor: [4, 62], // the same for the shadow
      popupAnchor: [-3, -76],
    })

  const displayFarms = () => {
    return GLOBAL_Farm.get.map((farm, idx) => {
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
    return GLOBAL_Product.get.map((product, idx) => {
      return (
        <Marker
          key={idx}
          position={[product.lat, product.lon]}
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
    <MapContainer
      center={[27.956918575017003, -15.6050452586645]}
      zoom={10}
    >
      {/* OPEN STREEN MAPS TILES */}
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        // url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        // url="https://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.jpg"
        // url="https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png",
        url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png"
      />
      {/* <LocationMarker /> */}
      {displayProducts()}
      {displayFarms()}
    </MapContainer>
  )
}

export default SearchMapComponent
