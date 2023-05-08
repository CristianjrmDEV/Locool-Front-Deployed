import React, { useContext, useState } from 'react'
import './SearchBarComponent.css'
import {
  Box,
  Divider,
  IconButton,
  InputAdornment,
  InputBase,
  Paper,
  TextField,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import SearchIcon from '@mui/icons-material/Search'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import { getProducts } from '../../services/productService'
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
    const result = await getProducts()
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
      <Box sx={{ backgroundColor: mainTheme.palette.secondary.main, p: 1 }}>
        <Paper
          component="form"
          elevation={0}
          sx={{
            m: 'auto',
            p: '2px 4px',
            display: 'flex',
            alignItems: 'center',
            width: 400,
            borderRadius: 10,
          }}
        >
          <InputBase
            className="search-placeholder"
            sx={{ ml: 1, flex: 1, color: mainTheme.palette.primary.main }}
            placeholder="Products | Farms"
            inputProps={{
              'aria-label': 'Products | Farms',
              color: mainTheme.palette.red.main,
            }}
            value={query}
            onChange={handleChange}
          />
          <IconButton
            onClick={handleProductSearch}
            sx={{
              p: 1,
              '&:hover': {
                color: mainTheme.palette.green.main,
              },
            }}
          >
            <SearchIcon fontSize="large" />
          </IconButton>
          <Divider
            sx={{
              height: 28,
              m: 0.5,
              backgroundColor: mainTheme.palette.secondary.main,
            }}
            orientation="vertical"
          />
          <IconButton
            onClick={handleFarmSearch}
            sx={{
              p: 1,
              '&:hover': {
                color: mainTheme.palette.green.main,
              },
            }}
          >
            <WarehouseIcon fontSize="large" />
          </IconButton>
        </Paper>
      </Box>
    </>
  )
}

export default SearchBarComponent
