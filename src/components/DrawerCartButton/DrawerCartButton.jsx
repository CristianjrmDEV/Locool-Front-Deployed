import React from 'react'
import './DrawerCartButton.css'
import { Button } from '@mui/base'
import { mainTheme } from '../../themes/mainTheme'
import { Link } from '@mui/material'
import DrawerButtonComponent from '../DrawerButton/DrawerButtonComponent'
import ButtonComponent from '../Button/ButtonComponent'

const DrawerCartButton = ({ seeCartBtn }) => {
    const demo = () => console.log('dasfdsf')
  if (seeCartBtn)
    return (
      <Link to="/app/cart">
        <ButtonComponent
          text={'Cart details'}
          textColour='primary'
          bgColour="green"
          padding={0}
          margin={0}
        //   fx={demo}
        />
      </Link>
    )
}

export default DrawerCartButton
