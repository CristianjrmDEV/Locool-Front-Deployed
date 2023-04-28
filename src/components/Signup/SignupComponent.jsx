import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../../services/authService'
import { findUserByUsername } from '../../services/authService'

import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Typography
  // Typography
} from '@mui/material'
import './SIgnupComponent.css'

const SignupComponent = () => {

  const navigate = useNavigate()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState('')

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
  const findUser = async() => {
    try {
      const userExists = await findUserByUsername(username)
      console.log("User exists", userExists)
      return userExists
    } catch (error) {
      return false
    }
  }

  const handleChange = (e) => {
    setUsername(e.target.value)
  }

  const updateError = async() => {
    if(await findUser()){
      console.log('pim pam')
      setUsernameError('User already exists')
    } else {
      setUsernameError('')
    }
  }

  return (
    <Card sx={{ maxWidth: '500px' }}>
      <CardHeader title="Sign Up" />
      <CardContent>
        <TextField
          error
          onChange={(e) => handleChange(e)}
          onKeyUp={updateError}
          label="Username"
          variant="outlined"
          fullWidth={true}
          value={username}
          sx={{ marginBottom: '20px' }}
        />
        <Typography>{usernameError}</Typography>
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
