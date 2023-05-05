import React from 'react'
import { mainTheme } from '../../themes/mainTheme'
import './DrawerTitleComponent.css'
import { Box } from '@mui/system'
import { ListItem, Typography } from '@mui/material'

const DrawerTitleComponent = ({title}) => {
  return (
    <Box>
      <ListItem sx={{ backgroundColor: mainTheme.palette.primary.main }}>
        <Typography
          sx={{
            color: mainTheme.palette.white.main,
            fontSize: '1.1rem',
          }}
        >
          {title}
        </Typography>
      </ListItem>
    </Box>
  )
}

export default DrawerTitleComponent