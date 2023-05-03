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

const DrawerButtonComponent = ({ text, route }) => {
  return (
        <Link to={`/app/${route}`}>
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
        </Link>
  )
}

export default DrawerButtonComponent
