import React from 'react'
import './LogoSymbolComponent.css'
import { Button } from '@mui/material'
import symbol from './../../assets/logo/logo-symbol.svg'
import { Link } from 'react-router-dom'

const LogoSymbolComponent = () => {
  return (
    <Button color="inherit">
      <Link to="/">
        <img
          height="75px"
          src={symbol}
          alt="Locool"
        />
      </Link>
    </Button>
  )
}

export default LogoSymbolComponent
