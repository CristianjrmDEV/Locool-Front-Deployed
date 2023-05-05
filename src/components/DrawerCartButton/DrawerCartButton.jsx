import React from 'react'
import './DrawerCartButton.css'
import { Button } from '@mui/base'
import { mainTheme } from '../../themes/mainTheme'
import { Link } from '@mui/material'
import DrawerButtonComponent from '../DrawerButton/DrawerButtonComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { useNavigate } from 'react-router'

const DrawerCartButton = ({ seeCartBtn }) => {

  if (seeCartBtn)
    return (
      <Link to="/app/cart">
        <ButtonComponent
          text={'Cart details'}
          textColour='primary'
          bgColour="green"
          padding={0}
          margin={0}
        />
      </Link>
    )
}

export default DrawerCartButton
