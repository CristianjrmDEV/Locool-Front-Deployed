import { Avatar, Box, Card, CardContent, CardHeader, TextField, Typography } from '@mui/material'
import React, { useContext, useState } from 'react'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { addProductToFarm } from '../../services/userService'
import { FarmsContext } from '../../contexts/farm'

const FarmAddProductCardComponent = (props) => {

  const { editFarmData } = useContext(FarmsContext)

  const [productName,setProductName] = useState('')
  const [productStock,setProductStock] = useState('')
  const [productPrice,setProductPrice] = useState(0)

  const newProduct = {
    name: productName,
    stock: productStock,
    price: productPrice
  }

  const onAddProductClick = () =>{
    
  }

  const onCancelClick = () => {
    props.handleComponent('FarmListComponent')
  }

  return (
    <Card color='secondary' sx={{marginY:'10px', backgroundColor: mainTheme.palette.secondary.main}}>
      <CardHeader
        title={<PageTitleComponent title={'Add product'} />}
        action={
          <ButtonComponent text='Upload image' bgColour='green' textColour='white'/>
        }
      />
      <CardContent>
        <Typography>{editFarmData.name}</Typography>
        <TextField 
          onChange={(e) => setProductName(e.target.value)}
          label="Product name" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setProductStock(e.target.value)}
          label="Product stock" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <TextField 
          onChange={(e) => setProductPrice(e.target.value)}
          label="Product price" 
          variant="outlined" 
          fullWidth={true}
          InputProps={{ style: { backgroundColor: '#F5F5F5' } }}
          sx={{ marginBottom: '20px' }}
        />
        <Box sx={{display:'flex' }}>
          <ButtonComponent text='Add product to farm' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={onAddProductClick}/>
          <ButtonComponent text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={onCancelClick}/>
        </Box>
      </CardContent>
    </Card>
  )
}

export default FarmAddProductCardComponent