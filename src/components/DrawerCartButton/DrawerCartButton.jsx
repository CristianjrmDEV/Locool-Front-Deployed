import React from 'react'
import './DrawerCartButton.css'
import { Link } from 'react-router-dom'
import ButtonComponent from '../Button/ButtonComponent'
import { Box } from '@mui/system'
import PropTypes from 'prop-types'

const DrawerCartButton = ({ cartBtn, toggleDrawer }) => {
    DrawerCartButton.propTypes = {
      cartBtn: PropTypes.bool,
      toggleDrawer: PropTypes.func
    }
  if (cartBtn)
    return (
      <Box sx={{m:2}}>
        <Link to="/app/cart">
          <ButtonComponent
            text={'Cart details'}
            textColour="primary"
            bgColour="green"
            padding={0}
            fx={toggleDrawer}
          />
        </Link>
      </Box>
    )
}

export default DrawerCartButton
