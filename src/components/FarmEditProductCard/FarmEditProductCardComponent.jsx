import { Box, Card, CardContent, CardMedia, TextField } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../contexts/product'
import { updateProductOfFarm } from '../../services/userService'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { FarmsContext } from '../../contexts/farm'

const FarmEditProductCardComponent = (props) => {

    const {editProductData} = useContext(FarmsContext)

    const [productName, setProductName] = useState('')
    const [productStock, setProductStock] = useState(0)
    const [productPrice, setProductPrice] = useState(0)

    const productData = {
        name: productName,
        stock: productStock,
        price: productPrice
    }

    const setDefaultValues = () => {
        setProductName(editProductData.name)
        setProductStock(editProductData.stock)
        setProductPrice(editProductData.price)
    }

    const onSaveChangesClick = async() => {
        console.log('clicked')
        //const result = updateProductOfFarm(localStorage.username,farmId,productId,productData)
    }

    const onCancelClick = () => {
        props.handleComponent('FarmSeeProductsCardComponent')
    }

    useEffect(() => {
        setDefaultValues()
    }, [])

    return (
        <Card color='secondary' sx={{ marginY: '10px', p: '10px', backgroundColor: mainTheme.palette.secondary.main }}>
            <CardMedia component='img' sx={{ borderRadius: '10px', width: '100%', maxHeight: '100%' }} image={`https://s1.1zoom.me/b4851/409/Carrots_Closeup_Wood_planks_527961_1920x1080.jpg`} title='FarmProduct' />
            {/* <UploadWidgetComponent /> */}
            <CardContent>
                <TextField
                    onChange={(e) => setProductName(e.target.value)}
                    label="Name"
                    variant="outlined"
                    fullWidth={true}
                    value={productName}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setProductStock(e.target.value)}
                    label="Stock"
                    variant="outlined"
                    fullWidth={true}
                    value={productStock}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ marginBottom: '20px' }}
                />
                <TextField
                    onChange={(e) => setProductPrice(e.target.value)}
                    label="Price"
                    variant="outlined"
                    fullWidth={true}
                    value={productPrice}
                    InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
                    InputLabelProps={{ shrink: true }}
                    sx={{ marginBottom: '20px' }}
                />
                <Box sx={{ display: 'flex' }}>
                    <ButtonComponent text='Save changes' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={onSaveChangesClick} />
                    <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={onCancelClick} />
                </Box>
            </CardContent>
        </Card>
    )
}

export default FarmEditProductCardComponent