import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../../services/authService'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  // Typography
} from '@mui/material'
import './SIgnupComponent.css'

const SignupComponent = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const onSignup = async () => {
    const form = { email, password, username, role: 'user' }
    const signupResult = await signup(form)
    const loginResult = await login({email, password})
    if (signupResult === 200 && loginResult === 200) {
      navigate('/app')
    } else {
      console.log("No me registré")
    }
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          onChange={(e) => setUsername(e.target.value)}
          label="Username"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setEmail(e.target.value)}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ marginBottom: '20px' }}
        />
        <TextField
          onChange={(e) => setPassword(e.target.value)}
          label="Password"
          variant="outlined"
          fullWidth={true}
        />
      </CardContent>
      <Divider />
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={onSignup}
          color="success"
        >
          Sign Up
        </Button>
      </CardActions>
    </Card>
  )
}

export default SignupComponent
