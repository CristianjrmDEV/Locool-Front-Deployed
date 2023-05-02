import React from 'react'
import './DrawerButtonComponent.css'
import { ListItem, ListItemButton, ListItemText } from '@mui/material'

const DrawerButtonComponent = ({ text, route }) => {
  return (
    <ListItem
      disablePadding
    >
      <ListItemButton href={`/app/${route}`}>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default DrawerButtonComponent
