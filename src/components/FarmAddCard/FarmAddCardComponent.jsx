import { Box, Card, CardContent, CardHeader, CardMedia, Container, IconButton, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { createFarm } from '../../services/userService'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import farmDefault from '../../assets/images/farm/farmDefault.jpg'
import PropTypes from 'prop-types'

const FarmAddCardComponent = ({handleComponent}) => {
  
  FarmAddCardComponent.propTypes = {
    handleComponent: PropTypes.string
  }

  const [farmName,setFarmName] = useState('')
  const [farmAdress,setFarmAdress] = useState('')
  const [farmCollectionPoint,setFarmCollectionPoint] = useState('')
  const [farmCollectionSchedule,setFarmCollectionSchedule] = useState('')
  const [farmLatitude,setFarmLatitude] = useState('')
  const [farmLongitude,setFarmLongitude] = useState('')

  const [imageLoading,setImageLoading] = useState('')
  const [imgSelected, setImgSelected] = useState('')

  const farmData = {
    name: farmName,
    address: farmAdress,
    image_url: imgSelected,
    status: 'pending',
    collection_point: farmCollectionPoint,
    collection_schedule: farmCollectionSchedule,
    latitude: farmLatitude,
    longitude: farmLongitude
  }

  const handleAddFarmButton = async() =>{
    console.log(localStorage.username)
    const response = await createFarm(localStorage.username,farmData)
    console.log(response)
  }

  const handleImageLoading = (imgLoading) =>{
    setImageLoading(imgLoading)
    setImgSelected(imgLoading)
  }

  const handleImageValue = (img) => {
    setImgSelected(img)
  }

  const handleCancelButton = () => {
    handleComponent('FarmListComponent')
  }

  const handleLatitudeChange = (e) =>{
    const latitudeRegex = /^\d{0,2}(?:\.\d{0,5})?$/
    if(latitudeRegex.test(e.target.value)){
      setFarmLatitude(e.target.value)
    }
    
  }

  const handleLongitudeChange = (e) =>{
    const longitudeRegex = /^\d{0,3}(?:\.\d{0,5})?$/
    if(longitudeRegex.test(e.target.value)){
      setFarmLongitude(e.target.value)
    }
    
  }

  return (
    <Box>
      <Box sx={{width:'600px', margin:'auto'}}>
          <PageTitleComponent title={'Add new farm'} />
      </Box>
      <Card color='secondary' sx={{width:'600px',margin:'auto',marginY:'10px', backgroundColor: mainTheme.palette.secondary.main}}>
        <CardContent>
          <Box sx={{display: 'flex',height:'200px', margin:'20px 0px 40px 0px'}}>
            {/* <Image sx={{ width: '50%', height: '100%' }} src={imgSelected} alt={imgSelected !== '' ? "Product Image" : "Default Product Image"}/> */}
            <CardMedia
              component="img"
              height="auto"
              alt={imgSelected !== '' ? "Product Image" : "Default Product Image"}
              image={imgSelected === '' ? farmDefault : imgSelected}
              style={{ objectFit: 'fill'}}
            />
            <UploadWidgetComponent handleImageValue={handleImageValue} handleImageLoading={handleImageLoading}  width='50%' height='250px'/>
          </Box>
          <TextField 
            onChange={(e) => setFarmName(e.target.value)}
            label="Farm name" 
            variant="outlined" 
            fullWidth={true}
            InputProps={{ style: { maxLength: 50, backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField 
            onChange={(e) => setFarmAdress(e.target.value)}
            label="Direction" 
            variant="outlined" 
            fullWidth={true}
            InputProps={{ style: { maxLength: 255, backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField 
            onChange={(e) => setFarmCollectionPoint(e.target.value)}
            label="Collection point" 
            variant="outlined" 
            fullWidth={true}
            InputProps={{ style: { maxLength: 255, backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField 
            onChange={(e) => setFarmCollectionSchedule(e.target.value)}
            label="Collection schedule" 
            variant="outlined" 
            fullWidth={true}
            InputProps={{ style: { maxLength: 255, backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField 
            onChange={handleLatitudeChange}
            label="Latitude" 
            variant="outlined" 
            fullWidth={true}
            value={farmLatitude}
            InputProps={{ style: { backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField 
            onChange={handleLongitudeChange}
            label="Longitude" 
            variant="outlined" 
            fullWidth={true}
            value={farmLongitude}
            InputProps={{ style: { backgroundColor: mainTheme.palette.white.main } }}
            sx={{ marginBottom: '20px' }}
          />

          <Box sx={{display:'flex' }}>
            <ButtonComponent text='Add farm' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={handleAddFarmButton}/>
            <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={handleCancelButton}/>
          </Box>
        </CardContent>
      </Card>
    </Box>

  )
}

export default FarmAddCardComponent