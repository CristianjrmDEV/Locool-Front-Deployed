import React from 'react'
import './LoadingComponent.css'
import { LoadingIcon } from '../Icon/IconComponent'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const LoadingComponent = ({spinnerSize}) => {
  LoadingComponent.propTypes = {
    spinnerSize: PropTypes.number,
  }
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center'
      }}
    >
      <Box sx={{ alignSelf: 'center' }}>
        <LoadingIcon size={spinnerSize ? spinnerSize : 100} />
      </Box>
    </Box>
  )
}

export default LoadingComponent
