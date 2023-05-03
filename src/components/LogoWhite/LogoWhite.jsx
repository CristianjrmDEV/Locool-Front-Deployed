import React from 'react'
import './LogoWhite.css'
import { Button } from '@mui/material'
import logo from './../../assets/logo/logo-white.svg'
import { Link } from 'react-router-dom'

const LogoWhite = () => {
  return (
    <Button
      color="inherit"
    >
      <Link to="/">
      <img
        width="100px"
        src={logo}
        alt="Locool"
        />
        </Link>
    </Button>
  )
}

export default LogoWhite
