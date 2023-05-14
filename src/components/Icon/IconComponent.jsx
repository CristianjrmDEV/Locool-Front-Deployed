import React from 'react'
import './IconComponent.css'
import { Box } from '@mui/material'
import makerSymbol from '../../assets/icons/marker-icon.svg'
import homeSymbol from '../../assets/icons/home-icon.svg'
import locoolSymbol from '../../assets/logo/logo-symbol.svg'
import farmSymbol from '../../assets/icons/farm-icon.svg'
import searchSymbol from '../../assets/icons/search-icon.svg'
import loadingSymbol from '../../assets/icons/loading-icon.svg'
import personSymbol from '../../assets/icons/person-icon.svg'


import PropTypes from 'prop-types'

const MyLocationIcon = ({ size }) => {
  MyLocationIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size}px` : '50px'}
      src={makerSymbol}
      alt="I am here"
    />
  )
}

const FarmIcon = ({ size }) => {
  FarmIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size}px` : '50px'}
      src={homeSymbol}
      alt="Tractor icon"
    />
  )
}

const LocoolIcon = ({ size }) => {
  LocoolIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <Box>
      <img
        width={size ? `${size}px` : '50px'}
        src={locoolSymbol}
        alt="Tractor icon"
      />
    </Box>
  )
}

const SearchFarmIcon = ({ size }) => {
  SearchFarmIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size}px` : '50px'}
      src={farmSymbol}
      alt="Tractor icon"
    />
  )
}

const MagnifierIcon = ({ size }) => {
  MagnifierIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size}px` : '50px'}
      src={searchSymbol}
      alt="Tractor icon"
    />
  )
}

const LoadingIcon = ({ size }) => {
  LoadingIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
      <img
        width={size ? `${size}px` : '50px'}
        src={loadingSymbol}
        alt="Loading"
      />
  )
}

const PersonIcon = ({ size }) => {
  PersonIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size}px` : '50px'}
      src={personSymbol}
      alt="Person"
    />
  )
}


export {
  MyLocationIcon,
  FarmIcon,
  LocoolIcon,
  SearchFarmIcon,
  MagnifierIcon,
  LoadingIcon,
  PersonIcon,
}
