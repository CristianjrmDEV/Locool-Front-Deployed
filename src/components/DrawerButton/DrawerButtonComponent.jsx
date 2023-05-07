import React from 'react'
import './DrawerButtonComponent.css'
import {
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import { Link } from 'react-router-dom'

const DrawerButtonComponent = ({ text, handleDrawerToggle, align }) => {
  return (
    <ListItem disablePadding>
      <ListItemButton onClick={handleDrawerToggle}>
        <ListItemText>
          <Typography
            sx={{
              color: mainTheme.palette.primary.main,
              fontSize: '1.1rem',
              textAlign: align ? align : 'left'
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
