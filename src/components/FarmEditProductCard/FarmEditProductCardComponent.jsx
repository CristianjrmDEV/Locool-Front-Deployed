import { Box, Card, CardContent, CardHeader, CardMedia, FormControl, InputLabel, MenuItem, Select, TextField , TextareaAutosize } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import { ProductsContext } from '../../contexts/product'
import { getAllProducts, updateProductOfFarm } from '../../services/userService'
import ButtonComponent from '../Button/ButtonComponent'
import { mainTheme } from '../../themes/mainTheme'
import { FarmPageContext } from '../../contexts/farm'
import UploadWidgetComponent from '../UploadWidget/UploadWidgetComponent'
import PageTitleComponent from '../PageTitle/PageTitleComponent'
import LoadingComponent from '../Loading/LoadingComponent'
import uploadImageCloudinary from '../../services/cloudinary'
import { PopupFarmComponent } from '../PopupFarm/PopupFarmComponent'

const FarmEditProductCardComponent = ({handleComponent}) => {

    const {editProductData} = useContext(FarmPageContext)
    

    const [productsType,setProductsType] = useState([])

    const [productID, setProductID] = useState(0)
    const [productStock, setProductStock] = useState('')
    const [productPrice, setProductPrice] = useState('')
    const [productDescription,setProductDescription] = useState('')
    const [productMeasurement, setProductMeasurement] = useState('');

    const [selectedOption, setSelectedOption] = useState('');


    const [imgSelected, setImgSelected] = useState('')

    const [imageLoading,setImageLoading] = useState('')

    const [msgFinal,setMsgFinal] = useState(false)

    const [disable,setDisabled] = useState(false)
  
    const [loading,setLoading] = useState(false)


    const setDefaultValues = () => {
        setProductID(editProductData.productid)
        setProductStock(editProductData.stock)
        setProductPrice(editProductData.price)
        setSelectedOption(editProductData.productid)
        setImgSelected(editProductData.image_url)
        setProductMeasurement(editProductData.unit_of_sale)
        setProductDescription(editProductData.description)

    }

    const onSelectedOptionChange = (event) => {
        setSelectedOption(event.target.value);
    
        const selectedProduct = productsType.find((product) => product.productId === event.target.value);
        
        
        
        
        
        
        
        
        setProductID(selectedProduct.productId)
        
        
        
        
        
        
        setImgSelected(selectedProduct.productImageUrl);
        
    };

    const uploadImage = async(imageUrl) => {
        const data = new FormData();
        data.append("file", imageUrl);
        data.append("upload_preset", "presetUnsignedLocool");
        data.append("folder", "locool");
        data.append("cloud_name", "locool");
    
        const url = await uploadImageCloudinary(data)
        return url
    };

    const onSaveChangesClick = async() => {
        setDisabled(true)
        let urlCloud = ''
        setLoading(true)

        if(imageLoading !== ''){
            urlCloud = await uploadImage(imageLoading)
        }

        
        
        
        
        
        

        const productData = {
            productId: productID,
            stock: productStock,
            price: productPrice,
            image_url: urlCloud !== '' ? urlCloud : imgSelected,
            unit_of_sale: productMeasurement,
            description: productDescription
        }

        
        
        

        const result = await updateProductOfFarm(localStorage.username,editProductData.farmId,productID,productData)
        console.group('resultado')
        
        console.group('resultado')
        setLoading(false)
        setMsgFinal(true)
    }

    const onCancelClick = () => {
        handleComponent('FarmSeeProductsCardComponent')
    }

    const handleFinishProduct = () =>{
        handleComponent('FarmSeeProductsCardComponent')
    }

    const getProductsType = async() => {
        const result = await getAllProducts()
        setProductsType(result)
    }


    const handleImageLoading = (imgLoading) =>{
        setImageLoading(imgLoading)
    }

    const handleImageValue = (img) => {
        setImgSelected(img)
    }

    const handleMeasureChange = (e) =>{
        setProductMeasurement(e.target.value)
    }
    
    const handleStockChange = (e) => {
        const stockRegex = /^\d{0,6}(\.\d{0,2})?$/
        if (stockRegex.test(e.target.value)) {
            setProductStock(e.target.value)
        }
    }
    
    const handlePriceChange = (e) => {
        const stockRegex = /^\d{0,6}(\.\d{0,2})?$/
        if (stockRegex.test(e.target.value)) {
            setProductPrice(e.target.value)
        }
    }

    useEffect(() => {
        if(selectedOption === ''){
            getProductsType()
            setDefaultValues()
        }
    }, [selectedOption])

    return (
        <Box display="flex" alignItems="center" justifyContent="center" flexDirection={'column'} 
    sx={{width:'100%'}}>
        <PageTitleComponent title={'Edit product of farm'} />
      <Card color='secondary' sx={{width: '600px',marginBottom:'50px',backgroundColor: mainTheme.palette.secondary.main}}>
        <CardHeader
          title={editProductData.farm_name}
          component='h4'
          sx={{color:mainTheme.palette.white.main ,backgroundColor:mainTheme.palette.primary.main}}
        />
      <CardContent>
        
        <Box sx={{display: 'flex',height:'200px', margin:'20px 0px 40px 0px'}}>
          <CardMedia
            component="img"
            height="auto"
            alt={'Product Image'}
            image={imageLoading !== '' ? imageLoading : imgSelected !== '' ? imgSelected : imgSelected}
            style={{ objectFit: 'fill'}}
          />
          <UploadWidgetComponent handleImageValue={handleImageValue} handleImageLoading={handleImageLoading} imageBefore={imgSelected}  width='50%' height='250px'/>
        </Box>
        <FormControl fullWidth>
            <InputLabel id="top">Type of product</InputLabel>
            <Select
                disabled={disable}
                label='Type of product'
                labelId='top'
                onChange={onSelectedOptionChange}
                value={selectedOption}
                sx={{backgroundColor: mainTheme.palette.white.main , marginBottom: '20px'}}
            >
                {productsType.map((product) => (
                    <MenuItem key={product.productId} value={product.productId}>
                        {product.productName}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
        
        <Box sx={{display:'flex'}}>
          <TextField 
            disabled={disable}
            onChange={handleStockChange}
            label="Product stock" 
            variant="outlined" 
            value={productStock}
            InputProps={{ style: { backgroundColor: mainTheme.palette.white.main} }}
            sx={{ marginBottom: '20px', flexGrow: '1', marginRight: '10px' }}
          />
          <FormControl sx={{flexGrow: '0', width: '25%'}}>
            <InputLabel id="measure">Measure</InputLabel>
            <Select
              disabled={disable}
              value={productMeasurement}
              label='measurement'
              labelId='measure'
              variant="outlined"
              onChange={handleMeasureChange}
              sx={{backgroundColor: mainTheme.palette.white.main,marginBottom: '20px'}}
            >
              <MenuItem value="kg">kg</MenuItem>
              <MenuItem value="liter">litre</MenuItem>
              <MenuItem value="unit">unit</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{display:'flex'}}>
        <TextField 
            disabled={disable}
            onChange={handlePriceChange}
            label="Product price" 
            variant="outlined" 
            value={productPrice}
            InputProps={{ style: { backgroundColor: mainTheme.palette.white.main} }}
            sx={{ marginBottom: '20px', flexGrow: '1', marginRight: '10px' }}
          />
          <FormControl sx={{flexGrow: '0',width: '25%'}}>
            <InputLabel id="measure">Measure</InputLabel>
            <Select
              disabled={disable}
              value={productMeasurement}
              label='measurement'
              labelId='measure'
              variant="outlined"
              onChange={handleMeasureChange}
              sx={{backgroundColor: mainTheme.palette.white.main,marginBottom: '20px'}}
            >
              <MenuItem value="kg">€/kg</MenuItem>
              <MenuItem value="litre">€/litre</MenuItem>
              <MenuItem value="unit">€/unit</MenuItem>
            </Select>
          </FormControl>
        </Box>
        <Box sx={{paddingRight:'10px'}}>
        <TextareaAutosize
            disabled={disable}
            style={{
                width: '100%',
                height: '100px',
                overflow: 'hidden',
                overflowY: 'scroll',
                resize: 'none',
                marginBottom:'20px',
            }}
            value={productDescription}
            placeholder={'Description'}
            onChange={(e)=> {
                setProductDescription(e.target.value)
            }}
        />
        </Box>
        {
          loading !==false ? <LoadingComponent /> : null
        }
        <Box sx={{display:'flex' }}>
          <ButtonComponent isDisabled={disable} text='Save changes' bgColour='green' textColour='white' width='50%' margin='0px 5px 0px 0px' fx={onSaveChangesClick}/>
          <ButtonComponent isDisabled={disable} text='Cancel' bgColour='red' textColour='white' width='50%' margin='0px 5px 0px 5px' fx={onCancelClick}/>
        </Box>
      </CardContent>
    </Card>
    {
        msgFinal === true ? <PopupFarmComponent handleComponent={handleFinishProduct} text='Product edited successfully'/> : false
    }
    </Box>
    )
}

export default FarmEditProductCardComponent