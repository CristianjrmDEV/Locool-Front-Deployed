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
    Checkbox,
    InputAdornment,
    IconButton, 
    Icon,
  } from '@mui/material'
  import { VisibilityOff, Visibility, Lock } from '@mui/icons-material'

  const SignupComponent = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [showPasswordRepeat, setShowPasswordRepeat] = useState(false)

    const handleClickShowPassword = () => setShowPassword((show) => !show)
  
    const [users, setUsers] = useState([])

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [passwordRepeat, setPasswordRepeat] = useState('')
    const [username, setUsername] = useState('')
    const [privacyChecked, setPrivacyChecked] = useState(false)
    const [termsChecked, setTermsChecked] = useState(false)

    const [usernameError, setUsernameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
    const [passwordRepeatError, setPasswordRepeatError] = useState('')
    const [privacyCheckError, setPrivacyCheckError] = useState('')
    const [termsCheckError, setTermsCheckError] = useState('')

    useEffect(() => {
      findUsers()
    }, [])

    useEffect(() => {setPrivacyCheckError()}, [privacyChecked])
    useEffect(() => {setTermsCheckError()}, [termsChecked])

    const findUsers = async () => {
      const users = await getAllUsers()
      setUsers(users)
    }

    const thereAreNoFormErrors = () => {
      return (
        usernameIsValid() &&
        emailIsValid() &&
        passwordIsValid() &&
        passwordRepeatIsValid() &&
        privacyChecked &&
        termsChecked
      )
    }

    const updateAllErrors = () => {
      updateErrorUsername()
      updateErrorEmail()
      updateErrorPassword()
      updateErrorPasswordRepeat()
      updateErrorPrivacyCheck()
      updateErrorTermsCheck()
    }

    const onSignup = async () => {
      if(thereAreNoFormErrors()){
        const form = { email, password, username, role: 'user' }
        const signupResult = await signup(form)
        const loginResult = await login({ email, password })
        if (signupResult === 200 && loginResult === 200) {
          navigate('/app')
        } else {
          console.log('No me registré')
        }
      } else {
        console.log("There are errors to fix!")
        updateAllErrors()
      }
      
    }

    const usernameExists = () => {
      return users.some(user => user["username"] === username)
    }

    const usernameIsValid = () => {
      return /^[A-Za-z][A-Za-z0-9]{2,17}$/.test(username)
    }

    const emailIsValid = () => {
      return !emailExists() && emailHasValidFormat()
    }

    const emailExists = () => {
      return users.some(user => user["email"] === email)
    }

    const emailHasValidFormat = () => {
      var regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
      return regex.test(email)
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

    const handlePrivacyCheck = () => {
      setPrivacyChecked(!privacyChecked)
    }

    const handleTermsCheck = () => {
      setTermsChecked(!termsChecked)
    }

    const updateErrorUsername = () => {
      if (!usernameIsValid()) {
        setUsernameError('Username should start with a letter, can only contain letters and numbers, be at least 3 characters long and at maximum 18 characters long!')
      } else if (usernameExists()) {
        setUsernameError('User already exists')
      } else {
        setUsernameError('')
      }
    }

    const updateErrorEmail = () => {
      if (!emailHasValidFormat()) {
        setEmailError('Write a valid email!')
      } else if (emailExists()) {
        setEmailError('Email is already in use')
      } else {
        setEmailError('')
      }
    }

    const updateErrorPassword = () => {
      if (!passwordIsValid()) {
        setPasswordError('Password is weak! Must have at least 8 characters; of which there must be at least, 1 uppercase, 1 lowercase, 1 number and 1 special character')
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

    const updateErrorPrivacyCheck = () => {
      setPrivacyCheckError(
        privacyChecked ? '' : 'You must accept the privacy policy'
      )
    }

    const updateErrorTermsCheck = () => {
      setTermsCheckError(
        termsChecked ? '' : 'You must agree to terms & conditions'
      )
    }

    return (
      <Card sx={{ maxWidth: '350px', margin: '40px auto', p: 1 }}>
        <CardHeader
          title="Create account"
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
            onChange={(e) => handleChangeUsername(e)}
            onKeyUp={updateErrorUsername}
            onBlur={updateErrorUsername}
            label="Username"
            variant="outlined"
            fullWidth={true}
            color="primary"
            sx={{
              borderRadius: '6px',
              marginBottom: '30px',
              backgroundColor: 'secondary.main',
            }}
          />
          <Typography sx={{ color: '#F00' }}>{usernameError}</Typography>
          <TextField
            required
            className="field-inputs"
            onChange={(e) => handleChangeEmail(e)}
            onKeyUp={updateErrorEmail}
            onBlur={updateErrorEmail}
            label="Email"
            variant="outlined"
            fullWidth={true}
            sx={{
              borderRadius: '6px',
              marginBottom: '30px',
              backgroundColor: 'secondary.main',
            }}
          />
          <Typography sx={{ color: '#F00' }}>{emailError}</Typography>
          <TextField
            type={showPassword ? 'text' : 'password'}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon>
                    <Lock />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
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
            onKeyUp={updateErrorPassword}
            onBlur={updateErrorPassword}
            label="Password"
            variant="outlined"
            fullWidth={true}
            sx={{
              borderRadius: '6px',
              marginBottom: '30px',
              backgroundColor: 'secondary.main',
            }}
          />
          <Typography sx={{ color: '#F00' }}>{passwordError}</Typography>
          <TextField
            type={showPasswordRepeat ? 'text' : 'password'}
            required
            className="field-inputs"
            onChange={(e) => handleChangePasswordRepeat(e)}
            onKeyUp={updateErrorPasswordRepeat}
            onBlur={updateErrorPasswordRepeat}
            label="Repeat Password"
            variant="outlined"
            fullWidth={true}
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <Icon>
                    <Lock />
                  </Icon>
                </InputAdornment>
              ),
              endAdornment: (
                <InputAdornment position='end'>
                  <IconButton
                    onClick={() => {
                      setShowPasswordRepeat((oldState) => !oldState)
                    }}
                  >
                    {showPassword ? <Visibility /> : <VisibilityOff />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            sx={{
              borderRadius: '6px',
              marginBottom: '30px',
              backgroundColor: 'secondary.main',
            }}
          />
          <Typography sx={{ color: '#F00' }}>{passwordRepeatError}</Typography>

          <FormGroup>
            <FormControlLabel
              sx={{ fontSize: '20px', margin: '0 0 0 10px' }}
              required
              control={<Checkbox />}
              onChange={handlePrivacyCheck}
              label={
                <Typography sx={{ fontSize: '16px', fontFamily: 'Quicksand' }}>
                  I have read the privacy policy
                </Typography>
              }
            />
            <Typography sx={{ color: '#F00' }}>{privacyCheckError}</Typography>
            <FormControlLabel
              sx={{ fontSize: '20px', margin: '0 0 0 10px' }}
              required
              control={<Checkbox />}
              onChange={handleTermsCheck}
              label={
                <Typography sx={{ fontSize: '16px', fontFamily: 'Quicksand' }}>
                  I accept the terms and conditions
                </Typography>
              }
            />
            <Typography sx={{ color: '#F00' }}>{termsCheckError}</Typography>
          </FormGroup>
        </CardContent>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            onClick={onSignup}
            color="white"
            sx={{
              height: '39.41px',
              margin: '0 auto',
              maxWidth: '319px',
              marginBottom: '26px',
              borderRadius: '6px',
              backgroundColor: 'red.main',
              width: '100%',
              fontSize: '14px',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              ':hover': {
                bgcolor: 'primary.main', // theme.palette.primary.main
                color: 'white',
              },
            }}
          >
            Create account
          </Button>
        </CardActions>
        <Divider
          sx={{
            marginBottom: '38px',
            color: 'secondary.main',
            borderBottomWidth: '3px',
          }}
        />
        <Typography
          sx={{
            fontSize: '20px',
            textAlign: 'center',
            fontFamily: 'Quicksand',
          }}
        >
          I already have an account
        </Typography>
        <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button
            href="/login"
            color="white"
            sx={{
              height: '39.41px',
              margin: '0 auto',
              maxWidth: '319px',
              marginBottom: '26px',
              borderRadius: '6px',
              backgroundColor: 'green.main',
              width: '100%',
              fontSize: '14px',
              textTransform: 'capitalize',
              fontWeight: 'bold',
              ':hover': {
                bgcolor: 'primary.main', // theme.palette.primary.main
                color: 'white',
              },
            }}
          >
            Sign in
          </Button>
        </CardActions>
      </Card>
    )
  } 

  export default SignupComponent
