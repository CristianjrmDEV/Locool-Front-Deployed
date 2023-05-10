import React from 'react'
import './IconComponent.css'
import { Box } from '@mui/material'
import makerIcon from '../../assets/icons/marker-icon.svg'
import farmIcon from '../../assets/icons/farm-icon.svg'
import locoolSymbol from '../../assets/logo/logo-symbol.svg'

import PropTypes from 'prop-types'

const MyLocationIcon = ({ size }) => {
  MyLocationIcon.propTypes = {
    size: PropTypes.number,
  }
  return (
    <img
      width={size ? `${size} px` : '50px'}
      src={makerIcon}
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
      width={size ? `${size} px` : '50px'}
      src={farmIcon}
      alt="Farm icon"
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
        width={size ? `${size} px` : '50px'}
        src={locoolSymbol}
        alt="Farm icon"
      />
    </Box>
  )
}

export { MyLocationIcon, FarmIcon, LocoolIcon }
