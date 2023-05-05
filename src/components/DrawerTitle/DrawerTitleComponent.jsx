import React from 'react'
import { mainTheme } from '../../themes/mainTheme'
import './DrawerTitleComponent.css'
import { Box } from '@mui/system'
import { ListItem, Typography } from '@mui/material'

const DrawerTitleComponent = ({ title, titleTopPadding, align }) => {
  return (
    <Box>
      <ListItem sx={{ justifyContent: align ? align : 'flex-start', backgroundColor: mainTheme.palette.primary.main }}>
        <Typography
          sx={{
            color: mainTheme.palette.white.main,
            fontSize: '1.1rem',
            pt: titleTopPadding,
           
          }}
        >
          {title}
        </Typography>
      </ListItem>
    </Box>
  )
}

export default DrawerTitleComponent