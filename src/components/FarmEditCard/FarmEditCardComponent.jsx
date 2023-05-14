import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Container,FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { House } from '@mui/icons-material'
import { mainTheme } from '../../themes/mainTheme'
import { FarmPageContext } from '../../contexts/farm'
import { updateFarm } from '../../services/userService'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import PropTypes from 'prop-types'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'
import uploadImageCloudinary from '../../services/cloudinary'
import LoadingComponent from '../Loading/LoadingComponent'
import { getMunicipalities } from '../../services/farmService'

const FarmEditCardComponent = ({ handleComponent }) => {

    FarmEditCardComponent.propTypes = {
        handleComponent: PropTypes.string
    }


    const { editFarmData } = useContext(FarmPageContext)
    console.log('holiiiita')
    console.log(editFarmData)


    const [farmName, setFarmName] = useState('')
    const [farmAddress, setFarmAddress] = useState('')
    const [farmImage, setFarmImage] = useState('')
    const [farmCollectionPoint, setFarmCollectionPoint] = useState('')
    const [farmCollectionSchedule, setFarmCollectionSchedule] = useState('')
    const [farmLatitude, setFarmLatitude] = useState('')
    const [farmLongitude, setFarmLongitude] = useState('')

    const [municipalities, setMunicipalities] = useState([])
    const [selectedMunicipality, setSelectedMunicipality] = useState('')

    const [msgFinal, setMsgFinal] = useState(false)

    const [imgSelected, setImgSelected] = useState('')

    const [imageLoading, setImageLoading] = useState('')

    const [disable, setDisabled] = useState(false)

    const [loading, setLoading] = useState(false)



    const setDefaultValues = async () => {
        setFarmName(editFarmData.name)
        setFarmAddress(editFarmData.address)
        setSelectedMunicipality(editFarmData.municipality)
        setFarmImage(editFarmData.image_url)
        setFarmCollectionPoint(editFarmData.collection_point)
        setFarmCollectionSchedule(editFarmData.collection_schedule)
        setFarmLatitude(editFarmData.latitude)
        setFarmLongitude(editFarmData.longitude)
        const result = await getMunicipalities()
        setMunicipalities(result)
        console.log(municipalities)
    }

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

    const handleAcceptChangesButton = async () => {
        setDisabled(true)
        let urlCloud = ''
        setLoading(true)
        if (imageLoading !== '' && imageLoading !== farmImage) {
            const result = await uploadImage(imageLoading)
            urlCloud = result
        }

        const updatedFarm = {
            name: farmName,
            address: farmAddress,
            municipalityId: selectedMunicipality,
            image_url: urlCloud !== '' ? urlCloud : farmImage,
            collection_point: farmCollectionPoint,
            collection_schedule: farmCollectionSchedule,
            latitude: farmLatitude,
            longitude: farmLongitude
        }

        const response = await updateFarm(localStorage.username, editFarmData.id, updatedFarm)
        setLoading(false)
        setMsgFinal(true)
    }

    const handleCancelButton = () => {
        handleComponent('FarmListComponent')
    }

    const handleLatitudeChange = (e) => {
        console.log(municipalities)
        const latitudeRegex = /^\d{0,2}(?:\.\d{0,5})?$/
        if (latitudeRegex.test(e.target.value)) {
            setFarmLatitude(e.target.value)
        }
    }

    const handleLongitudeChange = (e) => {
        const longitudeRegex = /^\d{0,3}(?:\.\d{0,5})?$/
        if (longitudeRegex.test(e.target.value)) {
            setFarmLongitude(e.target.value)
        }
    }

    const handleImageLoading = (imgLoading) => {
        setImageLoading(imgLoading)
    }

    const handleImageValue = (img) => {
        setFarmImage(img)
    }
    const handleFinishEdit = () => {
        handleComponent('FarmListComponent')
    }

    useEffect(() => {
        setDefaultValues()
    }, [])

    return (
        <Box>
            <Box sx={{ width: '600px', margin: 'auto' }}>
                <PageTitleComponent title={'Edit farm'} />
                {farmImage}
            </Box>
            <Card color='secondary' sx={{ width: '600px', margin: 'auto', marginY: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
                <CardContent>
                    <Box sx={{ display: 'flex', height: '200px', margin: '20px 0px 40px 0px' }}>
                        <CardMedia
                            component="img"
                            height="auto"
                            alt={"Farm Image"}
                            image={imageLoading !== '' ? imageLoading : farmImage}
                            style={{ objectFit: 'fill' }}
                        />
                        <UploadWidgetComponent handleImageValue={handleImageValue} handleImageLoading={handleImageLoading} imageBefore={farmImage} width='50%' height='250px' />
                    </Box>
                    <TextField
                        disabled={disable}
                        onChange={(e) => {
                            console.log(farmName)
                            setFarmName(e.target.value)
                            console.log(farmName)
                        }}
                        label="Farm name"
                        variant="outlined"
                        fullWidth={true}
                        value={farmName}
                        InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                        InputLabelProps={{ shrink: true }}
                        sx={{ marginBottom: '20px' }}
                    />
                    <TextField
                        disabled={disable}
                        onChange={(e) => setFarmAddress(e.target.value)}
                        label="Direction"
                        variant="outlined"
                        fullWidth={true}
                        value={farmAddress}
                        InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                        sx={{ marginBottom: '20px' }}
                    />
                    <FormControl fullWidth>
                        <InputLabel id="municipality">Municipality</InputLabel>
                        <Select
                            disabled={disable}
                            label='Municipality'
                            labelId='municipality'
                            onChange={onSelectedMunicipalityChange}
                            value={selectedMunicipality}
                            sx={{ backgroundColor: mainTheme.palette.white.main, marginBottom: '20px' }}
                        >
                            {municipalities.map((municipality) => (
                                <MenuItem key={municipality.id} value={municipality.id}>
                                    {municipality.name}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                    <TextField
                        disabled={disable}
                        onChange={(e) => setFarmCollectionPoint(e.target.value)}
                        label="Collection point"
                        variant="outlined"
                        fullWidth={true}
                        value={farmCollectionPoint}
                        InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                        sx={{ marginBottom: '20px' }}
                    />
                    <TextField
                        disabled={disable}
                        onChange={(e) => setFarmCollectionSchedule(e.target.value)}
                        label="Collection schedule"
                        variant="outlined"
                        fullWidth={true}
                        value={farmCollectionSchedule}
                        InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                        sx={{ marginBottom: '20px' }}
                    />
                    <TextField
                        disabled={disable}
                        onChange={handleLatitudeChange}
                        label="Latitude"
                        variant="outlined"
                        fullWidth={true}
                        value={farmLatitude}
                        InputProps={{ style: { backgroundColor: mainTheme.palette.white.main } }}
                        sx={{ marginBottom: '20px' }}
                    />
                    <TextField
                        disabled={disable}
                        onChange={handleLongitudeChange}
                        label="Longitude"
                        variant="outlined"
                        fullWidth={true}
                        value={farmLongitude}
                        InputProps={{ style: { backgroundColor: mainTheme.palette.white.main } }}
                        sx={{ marginBottom: '20px' }}
                    />
                    {
                        loading !== false ? <LoadingComponent /> : null
                    }
                    <Box sx={{ display: 'flex' }}>
                        <ButtonComponent isDisabled={disable} text='Accept changes' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={handleAcceptChangesButton} />
                        <ButtonComponent isDisabled={disable} text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={handleCancelButton} />
                    </Box>
                </CardContent>
            </Card>
            {
                msgFinal === true ? <PopupFarmComponent handleComponent={handleFinishEdit} text='Your farm has been updated' /> : false
            }
        </Box>

    )
}

export default FarmEditCardComponent