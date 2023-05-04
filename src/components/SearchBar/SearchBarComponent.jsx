import React, { useContext, useState } from 'react'
import './SearchBarComponent.css'
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  TextField,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import SearchIcon from '@mui/icons-material/Search'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import { getPricedProducts } from '../../services/productService'
import { getAllFarms } from '../../services/farmService'
import { FarmsContext } from '../../contexts/farm'
import { ProductsContext } from '../../contexts/product'
import { useNavigate } from 'react-router-dom'

const SearchBarComponent = () => {
  const GLOBAL_Product = useContext(ProductsContext)
  const GLOBAL_Farm = useContext(FarmsContext)

  const goTo = useNavigate()

  const [query, setQuery] = useState('')

  const handleChange = (e) => {
    setQuery(e.target.value.toLowerCase())
  }

  const handleProductSearch = async () => {
    const result = await getPricedProducts()
    const productSearch = result.filter((el) =>
      el.name.toLowerCase().includes(query)
    )
    GLOBAL_Product.set(productSearch)
    goTo('/app/search')
  }

  const handleFarmSearch = async () => {
    const result = await getAllFarms()
    const farmSearch = result.filter((el) =>
      el.name.toLowerCase().includes(query)
    )
    GLOBAL_Farm.set(farmSearch)
    goTo('/app/search')
  }

  return (
    <>
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: mainTheme.palette.secondary.main,
          p: 1,
        }}
      >
        <TextField
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleProductSearch}
                  sx={{ p: 1 }}
                >
                  <SearchIcon fontSize="large" />
                </IconButton>
                <Divider
                  sx={{ height: 28, m: 0.5 }}
                  orientation="vertical"
                />
                <IconButton
                  onClick={handleFarmSearch}
                  sx={{ p: 1 }}
                >
                  <WarehouseIcon fontSize="large" />
                </IconButton>
              </InputAdornment>
            ),
          }}
          id="outlined-basic"
          label="products | farms"
          variant="outlined"
          color="green"
          value={query}
          onChange={handleChange}
        />
      </Box>
    </>
  )
}

export default SearchBarComponent
