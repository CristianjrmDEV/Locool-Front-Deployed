import { Typography } from '@mui/material'
import React from 'react'
import PropTypes from 'prop-types'
import { mainTheme } from '../../themes/mainTheme'

const PageHeadingComponent = ({ text, colour }) => {
  PageHeadingComponent.propTypes = {
    text: PropTypes.string.isRequired,
    colour: PropTypes.string,

  }
  return (
    <Typography
      variant="h4"
      padding={'30px 0 0 0'}
      color={colour ? mainTheme.palette[colour].main : mainTheme.palette.primary.main}
    >
      {text}
    </Typography>
  )
}

export default PageHeadingComponent
