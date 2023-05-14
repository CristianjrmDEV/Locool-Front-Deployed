import { Avatar, Box, Card, CardContent, CardHeader, Container, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import ButtonComponent from '../Button/ButtonComponent'
import { House } from '@mui/icons-material'
import { mainTheme } from '../../themes/mainTheme'
import { FarmPageContext } from '../../contexts/farm'
import { updateFarm } from '../../services/userService'
import PageTitleComponent from '../PageTitle/PageTitleComponent'

const FarmEditCardComponent = (props) => {

    const {editFarmData} = useContext(FarmPageContext)

    const [farmName,setFarmName] = useState(editFarmData.name)
    const [farmAddress,setFarmAddress] = useState(editFarmData.address)
    const [farmCollectionPoint,setFarmCollectionPoint] = useState(editFarmData.collection_point)
    const [farmCollectionSchedule,setFarmCollectionSchedule] = useState(editFarmData.collection_schedule)

    const updatedFarm = {
        name: farmName,
        address: farmAddress,
        collection_point: farmCollectionPoint,
        collection_schedule: farmCollectionSchedule
    }

    const setDefaultValues = () => {
        setFarmName(editFarmData.name)
        setFarmAddress(editFarmData.address)
        setFarmCollectionPoint(editFarmData.collection_point)
        setFarmCollectionSchedule(editFarmData.collection_schedule)
    }

    const handleAcceptChangesButton = async() => {
        const response = await updateFarm(localStorage.username,editFarmData.id,updatedFarm)
    }

    const handleCancelButton = () => {
        props.handleComponent('FarmListComponent')
    }

    useEffect(()=>{ 
        setDefaultValues() 
      },[])

    return (
        <Card color='secondary' sx={{ marginY: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
            <CardHeader
                title={<PageTitleComponent title={'Edit Farm'} />}
                action={
                    <ButtonComponent text='Upload image' bgColour='green' textColour='white' />
                }
            />
            <CardContent>
                <Container sx={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
                    <Avatar sx={{ width: '100px', height: '100px' }}>
                        <House />
                    </Avatar>
                </Container>
                <TextField
                    onChange={(e) => setFarmName(e.target.value)}
                    label="Farm name"
                    variant="outlined"
                    fullWidth={true}
                    value={farmName}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setFarmAddress(e.target.value)}
                    label="Direction"
                    variant="outlined"
                    fullWidth={true}
                    value={farmAddress}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setFarmCollectionPoint(e.target.value)}
                    label="Collection point"
                    variant="outlined"
                    fullWidth={true}
                    value={farmCollectionPoint}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setFarmCollectionSchedule(e.target.value)}
                    label="Collection schedule"
                    variant="outlined"
                    fullWidth={true}
                    value={farmCollectionSchedule}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    sx={{ marginBottom: '20px' }}
                />
                <Box sx={{ display: 'flex' }}>
                    <ButtonComponent text='Accept changes' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={handleAcceptChangesButton} />
                    <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={handleCancelButton} />
                </Box>
            </CardContent>
        </Card>
    )
}

export default FarmEditCardComponent