import { Avatar, Box, Button, Card, CardContent, CardHeader, Container, IconButton, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { House } from '@mui/icons-material'
import { mainTheme } from '../../themes/mainTheme'
import { createFarm } from '../../services/userService'
import PageTitleComponent from '../PageTitle/PageTitleComponent'

const FarmAddCardComponent = (props) => {

  const [farmName,setFarmName] = useState('granjaPaco')
  const [farmAdress,setFarmAdress] = useState('')
  const [farmCollectionPoint,setFarmCollectionPoint] = useState('')
  const [farmCollectionSchedule,setFarmCollectionSchedule] = useState('')

  const farmData = {
    address: farmAdress,
    status: 'pending',
    collection_point: farmCollectionPoint,
    collection_schedule: farmCollectionSchedule,
    name: farmName
  }

  const handleAddFarmButton = async() =>{
    console.log(localStorage.username)
    const response = await createFarm(localStorage.username,farmData)
    console.log(response)
  }

  const handleCancelButton = () => {
    props.handleComponent('FarmListComponent')
  }

  return (
    <Card color='secondary' sx={{marginY:'10px', backgroundColor: mainTheme.palette.secondary.main}}>
      <CardHeader
        title={<PageTitleComponent title={'Add Farm'} />}
        action={
          <ButtonComponent text='Upload image' bgColour='green' textColour='white'/>
        }
      />
      <CardContent>
        <Container sx={{width:'100%',display:'flex' , justifyContent:'center'}}>
          <Avatar sx={{width:'100px',height:'100px'}}>
              <House />
          </Avatar>
        </Container>
        <TextField 
          onChange={(e) => setFarmName(e.target.value)}
          label="Farm name" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setFarmAdress(e.target.value)}
          label="Direction" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setFarmCollectionPoint(e.target.value)}
          label="Collection point" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setFarmCollectionSchedule(e.target.value)}
          label="Collection schedule" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <Box sx={{display:'flex' }}>
          <ButtonComponent text='Add farm' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={handleAddFarmButton}/>
          <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={handleCancelButton}/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FarmAddCardComponent