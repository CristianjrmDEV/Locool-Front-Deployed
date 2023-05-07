import React from 'react'
import './DrawerCartButton.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../Button/ButtonComponent'
import { Box } from '@mui/system'

const DrawerCartButton = ({ cartBtn }) => {
  if (cartBtn)
    return (
      <Box sx={{m:2}}>
        <Link to="/app/cart">
          <ButtonComponent
            text={'Cart details'}
            textColour="primary"
            bgColour="green"
            padding={0}
          />
        </Link>
      </Box>
    )
}

export default DrawerCartButton
