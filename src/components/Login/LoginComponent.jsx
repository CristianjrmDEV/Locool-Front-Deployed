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
    <Card sx={{ maxWidth: '500px', margin: '50% auto', p: 2 }}>
      <CardHeader
        sx={{ color: 'red.main' }}
        title="Login"
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
              <InputAdornment position="start">
                <Icon>
                  <Lock />
                </Icon>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
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
      <Divider
        sx={{
          marginBottom: '38px',
          color: 'secondary.main',
          borderBottomWidth: '3px',
        }}
      />
      <CardActions>
        <Button
          onClick={onLogin}
          color="white"
          sx={{
            height: '39.41px',
            margin: '0 auto',
            maxWidth: '500px',
            marginBottom: '26px',
            borderRadius: '6px',
            backgroundColor: 'green.main',
            width: '100%',
            fontSize: '14px',
            textTransform: 'capitalize',
            fontWeight: 'bold',
            ':hover': {
              bgcolor: 'white', // theme.palette.primary.main
              color: 'green.main',
              border: '1px solid green',
            },
          }}
        >
          Login
        </Button>
      </CardActions>
    </Card>
  )
}

export default LoginComponent
