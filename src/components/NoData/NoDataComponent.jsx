import React from 'react'
import './NoDataComponent.css'
import { Box } from '@mui/material'
import PropTypes from 'prop-types'

const NoDataComponent = ({ text }) => {
  NoDataComponent.propTypes = {
    text: PropTypes.string.isRequired,
  }
  return (
    <Box
      sx={{
        display: 'flex',height: '200px', justifyContent: 'center'
      }}
    >
      <Box sx={{alignSelf: 'center' }}>
        {text}
      </Box>
    </Box>
  )
}

export default NoDataComponent
