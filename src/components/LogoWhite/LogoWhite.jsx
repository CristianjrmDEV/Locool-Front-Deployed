import React from 'react'
import './LogoWhite.css'
import {
  Button,
} from '@mui/material'
import logo from './../../assets/logo/logo-white.svg'

const LogoWhite = () => {
  return (
    <Button color="inherit" href="/">
        <img
          src={logo}
          alt="Locool"
        />
    </Button>
  )
}

export default LogoWhite