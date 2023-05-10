import './PopupComponent.css'
import * as React from 'react'
import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import useMediaQuery from '@mui/material/useMediaQuery'
import { useTheme } from '@mui/material/styles'
import SearchIcon from '@mui/icons-material/Search'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import { Box } from '@mui/system'
import { Divider, Typography } from '@mui/material'
import ButtonComponent from '../Button/ButtonComponent'
import Greeting from '../Greeting/Greeting'
const PopupComponent = () => {
  const [open, setOpen] = React.useState(true)
  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <Box>
        <DialogTitle id="responsive-dialog-title">
          <Greeting
            greeting={true}
            message="Welcome"
            textColor="green"
          />
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            <Box>
              <Typography sx={{ fontSize: '1.5rem' }}>
                This app will help you find local products and farms.
              </Typography>
            </Box>
            <Divider sx={{ margin: 1, border: 2 }} />

            <Box sx={{ display: 'flex' }}>
              <SearchIcon fontSize="medium" />
              <Box sx={{ fontSize: '1.2rem', pb: 1, pl: 1 }}>
                Type & click to see products on the map
              </Box>
            </Box>
            <Box sx={{ display: 'flex' }}>
              <WarehouseIcon fontSize="medium" />
              <Box sx={{ fontSize: '1.2rem', pb: 1, pl: 1 }}>
                Type & click to see farms on the map
              </Box>
            </Box>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <ButtonComponent
            text="OK"
            fx={handleClose}
          />
        </DialogActions>
      </Box>
    </Dialog>
  )
}

export { PopupComponent }
