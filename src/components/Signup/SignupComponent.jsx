import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { signup, login } from '../../services/authService'
import { getAllUsers } from '../../services/userService'
import {
  Card,
  CardHeader,
  TextField,
  CardContent,
  Divider,
  Button,
  CardActions,
  Typography,
  FormGroup,
  FormControlLabel,
  Checkbox
} from '@mui/material'

const SignupComponent = () => {

  const navigate = useNavigate()

  const [users, setUsers] = useState([])

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordRepeat, setPasswordRepeat] = useState('')
  const [username, setUsername] = useState('')

  const [usernameError, setUsernameError] = useState('')
  const [emailError, setEmailError] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [passwordRepeatError, setPasswordRepeatError] = useState('')

  useEffect(() => {
    findUsers()
  }, [])

  const findUsers = async () => {
    const users = await getAllUsers()
    console.log(users)
    setUsers(users)
  }

  const onSignup = async () => {
    const form = { email, password, username, role: 'user' }
    const signupResult = await signup(form)
    const loginResult = await login({ email, password })
    if (signupResult === 200 && loginResult === 200) {
      navigate('/app')
    } else {
      console.log("No me registré")
    }
  }

  const usernameExists = () => {
    return users.some(user => user["username"] === username)
  }

  const emailExists = () => {
    return users.some(user => user["email"] === email)
  }

  const passwordIsValid = () => {
    var regex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    return regex.test(password);
  }

  const passwordRepeatIsValid = () => {
    return password === passwordRepeat
  }

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleChangePassword = (e) => {
    setPassword(e.target.value)
  }

  const handleChangePasswordRepeat = (e) => {
    setPasswordRepeat(e.target.value)
  }

  const updateErrorUsername = () => {
    if (usernameExists() && username !== "") {
      setUsernameError('User already exists')
    } else {
      setUsernameError('')
    }
  }

  const updateErrorEmail = () => {
    if (emailExists() && email !== "") {
      setEmailError('Email is already in use')
    } else {
      setEmailError('')
    }
  }

  const updateErrorPassword = () => {
    if (!passwordIsValid()) {
      setPasswordError('Password is weak! Must have at least 8 characters, of which: 1 uppercase, 1 lowercase, 1 number and 1 special character')
    } else {
      setPasswordError('')
    }
  }

  const updateErrorPasswordRepeat = () => {
    if (!passwordRepeatIsValid()) {
      setPasswordRepeatError('Passwords do not match')
    } else {
      setPasswordRepeatError('')
    }
  }

  return (
    <Card sx={{ maxWidth: '350px', margin: '0 auto' }}>
      <CardHeader title="Create account" sx={{ color: 'red.main' }} titleTypographyProps={{ variant: 'h4', fontFamily: 'dosis', marginBottom: '14px' }}
      />
      <CardContent>
        <TextField
          required
          className='field-inputs'
          onChange={(e) => handleChangeUsername(e)}
          onKeyUp={updateErrorUsername}
          label="Username"
          variant="outlined"
          fullWidth={true}
          value={username}
          color='primary'
          sx={{ borderRadius:'6px', marginBottom: '30px', backgroundColor: 'secondary.main' }}
        />
        <Typography sx={({ color: '#F00'})}>{usernameError}</Typography>
        <TextField
          required
          className='field-inputs'
          onChange={(e) => handleChangeEmail(e)}
          onKeyUp={updateErrorEmail}
          label="Email"
          variant="outlined"
          fullWidth={true}
          sx={{ borderRadius:'6px', marginBottom: '30px', backgroundColor: 'secondary.main' }}
        />
        <Typography sx={({ color: '#F00' })}>{emailError}</Typography>
        <TextField
          required
          className='field-inputs'
          onChange={(e) => handleChangePassword(e)}
          onKeyUp={updateErrorPassword}
          label="Password"
          variant="outlined"
          fullWidth={true}
          sx={{ borderRadius:'6px', marginBottom: '30px', backgroundColor: 'secondary.main' }}
        />
        <Typography sx={({ color: '#F00' })}>{passwordError}</Typography>
        <TextField
          required
          className='field-inputs'
          onChange={(e) => handleChangePasswordRepeat(e)}
          onKeyUp={updateErrorPasswordRepeat}
          label="Repeat Password"
          variant="outlined"
          fullWidth={true}
          sx={{ borderRadius:'6px', marginBottom: '30px', backgroundColor: 'secondary.main' }}
        />
        <Typography sx={({ color: '#F00' })}>{passwordRepeatError}</Typography>

        <FormGroup >
          <FormControlLabel sx={{fontSize: '20px', margin:'0 0 0 10px' }} required control={<Checkbox />} label={<Typography sx={{fontSize: '16px', fontFamily: 'Quicksand'}}>I have read the privacy policy</Typography>} />
          <FormControlLabel sx={{fontSize: '20px', margin:'0 0 0 10px' }} required control={<Checkbox />} label={<Typography sx={{fontSize: '16px', fontFamily: 'Quicksand'}}>I accept the terms and conditions</Typography>}/>
        </FormGroup>

      </CardContent>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={onSignup}
          color="white"
          sx={{ height: '39.41px', margin:'0 auto', maxWidth: '319px', marginBottom: '26px', borderRadius:'6px', backgroundColor: 'red.main', width: '100%', fontSize: '14px', textTransform: 'capitalize', fontWeight: 'bold',':hover': {
            bgcolor: 'primary.main', // theme.palette.primary.main
            color: 'white',
          },}}
        >
          Create account
        </Button>
      </CardActions>
      <Divider sx={{marginBottom:'38px', color: 'secondary.main', borderBottomWidth: '3px'}}/>
      <Typography sx={{ fontSize: '20px', textAlign: 'center', fontFamily: 'Quicksand' }}>
        I already have an account
      </Typography>
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          onClick={onSignup}
          color="white"
          sx={{ height: '39.41px', margin:'0 auto', maxWidth: '319px', marginBottom: '26px', borderRadius:'6px', backgroundColor: 'green.main', width: '100%', fontSize: '14px', textTransform: 'capitalize', fontWeight: 'bold',':hover': {
            bgcolor: 'primary.main', // theme.palette.primary.main
            color: 'white',
          }, }}
        >
          Sign in
        </Button>
      </CardActions>
    </Card>
  )
} 

export default SignupComponent
