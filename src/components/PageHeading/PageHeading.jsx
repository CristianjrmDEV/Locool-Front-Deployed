import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'

const PageHeadingComponent = ({ text }) => {
  PageHeadingComponent.propTypes = {
    text: PropTypes.string.isRequired,
  }
  return (
    <Typography
      variant="h4"
      padding={'30px 0 0 0'}
    >
      {text}
    </Typography>
  )
}

export default PageHeadingComponent
