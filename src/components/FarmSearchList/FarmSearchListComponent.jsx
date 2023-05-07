import React from 'react'
import './FarmSearchListComponent.css'
import PropTypes from 'prop-types'
import { Box } from '@mui/system'
import { Typography } from '@mui/material'
import FarmCardComponent from '../FarmCard/FarmCardComponent'

const FarmSearchListComponent = ({ farms }) => {
  FarmSearchListComponent.propTypes = {
    farms: PropTypes.array.isRequired,
  }

  return (
    <>
      <Typography variant="h6">Farms</Typography>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            sm: 'auto',
            md: 'auto auto',
            lg: 'auto auto auto',
            xl: 'auto auto auto auto',
          },
        }}
      >
        {farms.get.map((farm, idx) => {
          return (
            <FarmCardComponent
              key={idx}
              farm={farm}
            />
          )
        })}
      </Box>
    </>
  )
}

export default FarmSearchListComponent
