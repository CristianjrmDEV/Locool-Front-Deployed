import { Box, Card, CardContent, CardHeader, CardMedia, Container,FormControl, InputLabel, MenuItem, Select, IconButton, TextField, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { createFarm } from '../../services/userService'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import farmDefault from '../../assets/images/farm/farmDefault.jpg'
import PropTypes from 'prop-types'
import uploadImageCloudinary from '../../services/cloudinary'
import { PopupComponent } from '../Popup/PopupComponent'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'
import LoadingComponent from '../Loading/LoadingComponent'
import { getMunicipalities } from '../../services/farmService'

const FarmAddCardComponent = ({ handleComponent }) => {

  FarmAddCardComponent.propTypes = {
    handleComponent: PropTypes.func
  }

  const [farmName, setFarmName] = useState('Reboot Academy Farm')
  const [farmAdress, setFarmAdress] = useState('Parque Santa Catalina')
  const [farmCollectionPoint, setFarmCollectionPoint] = useState('Academy')
  const [farmCollectionSchedule, setFarmCollectionSchedule] = useState('Monday to Friday, 9-5')
  const [farmLatitude, setFarmLatitude] = useState('22')
  const [farmLongitude, setFarmLongitude] = useState('33')

  const [municipalities, setMunicipalities] = useState([])
  const [selectedMunicipality, setSelectedMunicipality] = useState('')

  const [msgFinal, setMsgFinal] = useState(false)

  const [imageLoading, setImageLoading] = useState('')
  const [imgSelected, setImgSelected] = useState('')

  const [disable, setDisabled] = useState(false)

  const [loading, setLoading] = useState(false)

  
  const uploadImage = async (imageUrl) => {
    const data = new FormData();
    data.append("file", imageUrl);
    data.append("upload_preset", "presetUnsignedLocool");
    data.append("folder", "locool");
    data.append("cloud_name", "locool");

    const url = await uploadImageCloudinary(data)
    return url
  };

  const onSelectedMunicipalityChange = (e) => {
    setSelectedMunicipality(e.target.value)
}

  const handleAddFarmButton = async () => {
    setDisabled(true)
    setLoading(true)
    let urlCloud= ''
    if (imageLoading !== '') {
      urlCloud =  await uploadImage(imageLoading)
    }

    const farmData = {
      name: farmName,
      address: farmAdress,
      municipalityId: selectedMunicipality,
      image_url:  urlCloud !== '' ? urlCloud: imageLoading !== '' ? imageLoading : farmDefault,
      status: 'pending',
      collection_point: farmCollectionPoint,
      collection_schedule: farmCollectionSchedule,
      latitude: farmLatitude,
      longitude: farmLongitude
    }

    const response = await createFarm(
      localStorage.getItem('locoolUsername'),
      farmData
    )
    setLoading(false)
    setMsgFinal(true)
  }

  const handleImageLoading = (imgLoading) => {
    setImageLoading(imgLoading)
  }

  const handleImageValue = (img) => {
    setImgSelected(img)
  }

  const handleCancelButton = () => {
    handleComponent('FarmListComponent')
  }

  const handleFinishFarm = () => {
    handleComponent('FarmListComponent')
  }

  const handleLatitudeChange = (e) => {
    const latitudeRegex = /^\d{0,2}(?:\.\d{0,5})?$/
    if (latitudeRegex.test(e.target.value)) {
      setFarmLatitude(e.target.value)
    }
  }
  const getPosiblesMunicipalities = async() => {
    const result = await getMunicipalities()
    setMunicipalities(result)
  }

  

  const handleLongitudeChange = (e) => {
    const longitudeRegex = /^\d{0,3}(?:\.\d{0,5})?$/
    if (longitudeRegex.test(e.target.value)) {
      setFarmLongitude(e.target.value)
    }
  }

  useEffect(() =>{
    getPosiblesMunicipalities()
  },[])

  return (
    <Box>
      <Box sx={{ width: '600px', margin: 'auto' }}>
        <PageTitleComponent title={'Add new farm'} />
      </Box>
      <Card
        color="secondary"
        sx={{
          width: '600px',
          margin: 'auto',
          marginY: '10px',
          backgroundColor: mainTheme.palette.secondary.main,
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: 'flex',
              height: '200px',
              margin: '20px 0px 40px 0px',
            }}
          >
            <CardMedia
              component="img"
              height="auto"
              alt={'Farm Image'}
              image={
                imageLoading !== ''
                  ? imageLoading
                  : imgSelected !== ''
                  ? imgSelected
                  : farmDefault
              }
              style={{ objectFit: 'fill' }}
            />
            <UploadWidgetComponent
              handleImageValue={handleImageValue}
              handleImageLoading={handleImageLoading}
              imageBefore={imgSelected}
              width="50%"
              height="250px"
            />
          </Box>
          <TextField
            onChange={(e) => setFarmName(e.target.value)}
            label="Farm name"
            variant="outlined"
            fullWidth={true}
            value={farmName}
            InputProps={{
              style: {
                maxLength: 50,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={(e) => setFarmAdress(e.target.value)}
            label="Direction"
            variant="outlined"
            fullWidth={true}
            value={farmAdress}
            InputProps={{
              style: {
                maxLength: 255,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
            sx={{ marginBottom: '20px' }}
          />
          <FormControl fullWidth>
            <InputLabel id="municipality">Municipality</InputLabel>
            <Select
              disabled={disable}
              label="Municipality"
              labelId="municipality"
              onChange={onSelectedMunicipalityChange}
              value={selectedMunicipality}
              sx={{
                backgroundColor: mainTheme.palette.white.main,
                marginBottom: '20px',
              }}
            >
              {municipalities.map((municipality) => (
                <MenuItem
                  key={municipality.id}
                  value={municipality.id}
                >
                  {municipality.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            onChange={(e) => setFarmCollectionPoint(e.target.value)}
            label="Collection point"
            variant="outlined"
            fullWidth={true}
            value={farmCollectionPoint}
            InputProps={{
              style: {
                maxLength: 255,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={(e) => setFarmCollectionSchedule(e.target.value)}
            label="Collection schedule"
            variant="outlined"
            fullWidth={true}
            value={farmCollectionSchedule}
            InputProps={{
              style: {
                maxLength: 255,
                backgroundColor: mainTheme.palette.white.main,
              },
            }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={handleLatitudeChange}
            label="Latitude"
            variant="outlined"
            fullWidth={true}
            value={farmLatitude}
            InputProps={{
              style: { backgroundColor: mainTheme.palette.white.main },
            }}
            sx={{ marginBottom: '20px' }}
          />
          <TextField
            onChange={handleLongitudeChange}
            label="Longitude"
            variant="outlined"
            fullWidth={true}
            value={farmLongitude}
            InputProps={{
              style: { backgroundColor: mainTheme.palette.white.main },
            }}
            sx={{ marginBottom: '20px' }}
          />
          {loading !== false ? <LoadingComponent /> : null}
          <Box sx={{ display: 'flex' }}>
            <ButtonComponent
              isDisabled={disable}
              text="Add farm"
              bgColour="green"
              textColour="white"
              width="50%"
              margin="0px 5px 0px 0px"
              fx={handleAddFarmButton}
            />
            <ButtonComponent
              isDisabled={disable}
              text="Cancel"
              bgColour="red"
              textColour="white"
              width="50%"
              margin="0px 5px 0px 5px"
              fx={handleCancelButton}
            />
          </Box>
        </CardContent>
      </Card>
      {msgFinal === true ? (
        <PopupFarmComponent
          handleComponent={handleFinishFarm}
          text="Added a new farm"
        />
      ) : (
        false
      )}
    </Box>
  )
}

export default FarmAddCardComponent