import React from 'react'
import './Greeting.css'
import { ListItem, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'

const Greeting = ({ greeting, message, textColor }) => {
  Greeting.propTypes = {
    greeting: PropTypes.bool,
    message: PropTypes.string,
    textColor: PropTypes.string,
  }
 

  const displayUsername = () =>
    localStorage.getItem('locoolUsername')
      ? `${message ? message : 'Hello'}  ${
          localStorage.getItem('locoolUsername').slice(0, 1).toUpperCase() +
          localStorage.getItem('locoolUsername').slice(1)
        }`
      : ''
  if (greeting) {
    return (
      <>
        <Typography
          sx={{
            fontSize:'1.5rem',
            fontWeight: 'bold',
            color: textColor
              ? mainTheme.palette[textColor].main
              : mainTheme.palette.red.main,
          }}
        >
          {displayUsername()}
        </Typography>
      </>
    )
  }
}

export default Greeting
