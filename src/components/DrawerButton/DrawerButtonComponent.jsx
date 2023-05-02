import React from 'react'
import './DrawerButtonComponent.css'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'

const DrawerButtonComponent = ({ text, route }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton href={`/app/${route}`}>
        <ListItemText>
          <Typography
            sx={{
              color: mainTheme.palette.primary.main,
              fontSize: '1.1rem',
            }}
          >
            {text}
          </Typography>
        </ListItemText>
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerButtonComponent
