import React from 'react'
import './DrawerGreeting.css'
import { ListItem, Typography } from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const DrawerGreeting = ({ greeting }) => {
  const displayUsername = () =>
    localStorage.getItem('username')
      ? `Hello  ${
          localStorage.getItem('username').slice(0, 1).toUpperCase() +
          localStorage.getItem('username').slice(1)
        }`
      : ''
  if (greeting) {
    return (
      <>
        <ListItem
          sx={{ backgroundColor: mainTheme.palette.primary.main, pt: 6 }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: 'bold',
            }}
          >
            {displayUsername()}
          </Typography>
        </ListItem>
      </>
    )
  }
}

export default DrawerGreeting
