import React from 'react'
import './PurchaseItemsComponent.css'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
  darken,
} from '@mui/material'
import { mainTheme } from '../../themes/mainTheme'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import PropTypes from 'prop-types'
import { capitalise } from '../../services/toolkit'

const PurchaseItemsComponent = ({ cart }) => {
  PurchaseItemsComponent.propTypes = {
    cart: PropTypes.array.isRequired,
  }
  return (
    <Accordion
      sx={{
        borderRadius: 3,
      }}
    >
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          backgroundColor: darken(mainTheme.palette.secondary.main, 0.1),
        }}
      >
        <Typography>Purchased items</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography></Typography>
        <Box sx={{width: '100%'}}>
          {cart.map((item, idx) => {
            return (
              <Box
                display="grid"
                gridTemplateColumns="50% 20% 25%"
                gap={1}
                key={idx}
                sx={{}}
              >
                <Box>{capitalise(item.product.name)}</Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {item.purchase_detail.quantity}
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  {item.price} €
                </Box>
              </Box>
            )
          })}
        </Box>
      </AccordionDetails>
    </Accordion>
  )
}

export default PurchaseItemsComponent
