import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { login } from '../../services/authService'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Typography,
  InputAdornment,
  IconButton,
  Icon,
} from '@mui/material'
import { VisibilityOff, Visibility, Lock } from '@mui/icons-material'
import './LoginComponent.css'

const LoginComponent = () => {
  const [email, setEmail] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [formError, setFormError] = useState('')

  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('')

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const onLogin = async () => {
    const form = { email, password }
    const result = await login(form)
    if (result === 200) {
      setFormError('')
      navigate('/app')
    } else {
      setFormError('Email and password combination is not valid')
    }
  }

  return (
    <Card sx={{ maxWidth: '350px', margin: '0 auto' }}>
      <CardHeader
        sx={{ color: 'red.main' }}
        titleTypographyProps={{
          variant: 'h4',
          fontFamily: 'dosis',
          marginBottom: '14px',
        }}
      />
      <CardContent>
        <TextField
          required
          className="field-inputs"
          onChange={(e) => handleChangeEmail(e)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{
            borderRadius: '6px',
            marginBottom: '30px',
            backgroundColor: 'secondary.main',
          }}
        />
        <TextField
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            startAdornment: (
              <InputAdornment>
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment>
                <IconButton
                  onClick={() => {
                    setShowPassword((oldState) => !oldState)
                  }}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          required
          className="field-inputs"
          onChange={(e) => handleChangePassword(e)}
          label="Password"
          variant="outlined"
          fullWidth={true}
          sx={{
            borderRadius: '6px',
            marginBottom: '30px',
            backgroundColor: 'secondary.main',
          }}
        />
        <Typography sx={{ color: '#F00' }}>{formError}</Typography>
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={onLogin}
          color="success"
        >
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginComponent
