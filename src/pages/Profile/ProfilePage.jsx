import { Box, Button, Card, CardContent, CardHeader, Container, Divider, Grid, Icon, IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { mainTheme } from '../../themes/mainTheme'
import { getUserProfile } from '../../services/userService'
import { getAllUsers } from '../../services/userService'
import { Lock, Visibility, VisibilityOff } from '@mui/icons-material'
import PageTitleComponent from '../../components/PageTitle/PageTitleComponent'
import './ProfilePage.css'

const ProfilePage = () => {

  const [allUsers,setAllUsers] = useState([])

  const [userName, setUserName] = useState('')
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [dob, setDob] = useState('')
  const [tlf, setTlf] = useState('')

  const [userNameError, setUserNameError] = useState('')
  const [emailError, setEmailError] = useState('')

  const [oldPassword, setOldPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [repeatPassword, setRepeatPassword] = useState('')

  const [isPassVisible, setIsPassVisible]  = useState(false)
  

  const onSaveHandle = () =>{
  }

  const getUserData = async ()=>{
    const response = await getUserProfile()
    // const result = await getAllUsers()
    // setAllUsers(result)  
    //Lo de abajo se tenía que hacer por el tema de inputs no controlables por no tener valor
    // a input controlable gracias a que tiene un valor de inicio
    setUserName(response.user.username)
    setFirstName(response.user.first_name)
    setLastName(response.user.last_name)
    setEmail(response.user.email)
    setDob(response.user.date_of_birth)
    setTlf(response.user.phone)
  }

  const updateErrorUserName = () =>{
    allUsers.some(user=> user.username === userName) ? setUserNameError('UserName already in use') : setUserNameError('')
    if(userName.length <= 5) setUserNameError('UserName must contain atleast 6 characters')
  }

  const handleFirstNameChange = (e) => {
    const regex = /^[a-zA-ZñÑ\s'-]*$/
    if (e.target.value === '' || regex.test(e.target.value)) setFirstName(e.target.value)
  }

  const handleLastNameChange = (e) => {
    const regex = /^[a-zA-ZñÑ\s'-]*$/
    if (e.target.value === '' || regex.test(e.target.value)) setLastName(e.target.value)
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
    const regex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // regex to validate email format
    if (e.target.value === '' || regex.test(e.target.value)) {
      setEmailError('')
    }else{
      setEmailError('The email structure should be something like this example@example.com')
    }
  }

  useEffect(()=>{ 
    getUserData() 
  },[])

  return (
    <>
      <PageTitleComponent title={'Profile'}/>
      <Box>
        <Typography variant='h2' sx={{
          color: mainTheme.palette.red.main,
          marginTop: 7,
          marginLeft: 3,
          marginBottom: 7
        }}>
          My Profile
        </Typography>
      </Box>
      <Container maxWidth='lg'>
        <Grid container>
          <Grid item xs={12} sm={6}>
            <Box className='details'  sx={{margin: '20px'}}>
            <Typography  sx={{color: mainTheme.palette.red.main, marginLeft:3}}>
              Personal details
            </Typography>
            <Box sx={{
              border: '1px solid',
              borderColor: mainTheme.palette.red.main,
            }}></Box>
            <Card >
              <CardContent>
                <TextField 
                  onChange={(e) => setUserName(e.target.value)}
                  label="Username" 
                  variant="standard" 
                  value={userName}
                  onKeyUp={updateErrorUserName}
                  InputLabelProps={{ shrink: true }}
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
                />
                <Typography sx={{color: '#F00'}} >{userNameError}</Typography>
                <TextField
                  onChange={handleFirstNameChange}
                  label="FirstName"
                  variant="standard"
                  fullWidth={true}
                  value={firstName}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{maxLength: 20}}
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  onChange={handleLastNameChange}
                  label="LastName"
                  variant="standard"
                  fullWidth={true}
                  value={lastName}
                  InputLabelProps={{ shrink: true }}
                  inputProps={{maxLength: 20}}
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  onChange={handleEmailChange}
                  label="Email"
                  variant="standard"
                  value={email}
                  InputLabelProps={{ shrink: true }}
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
                />
                <Typography sx={{color: '#F00'}}>{emailError}</Typography>
                <TextField
                  onChange={(e) => setDob(e.target.value)}
                  type='date'
                  onKeyDown={(e)=> false}
                  inputProps={{ min: '2010-01-01', max: '2023-05-05'}}
                  label="Date of birth"
                  variant="standard"
                  value={dob}
                  InputLabelProps={{ shrink: true }}
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
                />
                <TextField
                  onChange={(e) => setTlf(e.target.value)}
                  onInput={(e)=> e.target.value = e.target.value.replace(/[^0-9]/g, '')}
                  label="Tlf"
                  inputProps={{ maxLength: 9 }}
                  variant="standard"
                  value={tlf}
                  InputLabelProps={{ shrink: true }}
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
                />
              </CardContent>
            </Card>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Box className='security'  sx={{margin: '20px'}}>
            <Typography  sx={{color: mainTheme.palette.red.main, marginLeft:3}}>
              Security
            </Typography>
            <Box sx={{
              border: '1px solid',
              borderColor: mainTheme.palette.red.main
            }}></Box>
            <Card >
              <CardContent>
                <TextField 
                  onChange={(e) => setOldPassword(e.target.value)}
                  label="Old password"
                  type={isPassVisible ? 'text' : 'password'}
                  variant="standard"
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
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
                            setIsPassVisible((oldState) => !oldState)
                          }}
                        >
                          {isPassVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  onChange={(e) => setNewPassword(e.target.value)}
                  label="New password"
                  type={isPassVisible ? 'text' : 'password'}
                  variant="standard"
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
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
                            setIsPassVisible((oldState) => !oldState)
                          }}
                        >
                          {isPassVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <TextField
                  onChange={(e) => setRepeatPassword(e.target.value)}
                  label="Repeat new password"
                  type={isPassVisible ? 'text' : 'password'}
                  variant="standard"
                  fullWidth={true}
                  sx={{ marginBottom: '20px' }}
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
                            setIsPassVisible((oldState) => !oldState)
                          }}
                        >
                          {isPassVisible ? <Visibility /> : <VisibilityOff />}
                        </IconButton>
                      </InputAdornment>
                    )
                  }}
                />
                <Typography sx={{color:mainTheme.palette.red.main, marginBottom: '92px'}}>
                  Security: Use between 8 and 20 characters
                </Typography>
                <Button variant='contained' sx={{
                  backgroundColor: mainTheme.palette.red.main,
                  '&:hover': { backgroundColor: '#3E8E41'},
                  width: '100%', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center'
                  }}
                  onClick={onSaveHandle}>
                  Save Changes
                </Button>
              </CardContent>
            </Card>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default ProfilePage