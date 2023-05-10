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
import { FarmIcon, LocoolIcon, MyLocationIcon } from '../Icon/IconComponent'
import HelpIcon from '@mui/icons-material/Help'
import ButtonWithIconComponent from '../ButtonWithIcon/ButtonWithIconComponent'
import PropTypes from 'prop-types'

const PopupComponent = ({ greetingMessage, greeting, openBtn }) => {
  PopupComponent.propTypes = {
    greetingMessage: PropTypes.string.isRequired,
    greeting: PropTypes.string.isRequired,
    openBtn: PropTypes.bool,
  }

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
    <>
      {openBtn ? (
        <ButtonWithIconComponent
          text="Help"
          icon={<HelpIcon />}
          fx={handleClickOpen}
          buttonBg={'green'}
        />
      ) : (
        ''
      )}

      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <Box>
          <DialogTitle id="responsive-dialog-title">
            <Greeting
              greeting={greeting}
              message={greetingMessage}
              textColor="green"
            />
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              <Box
                sx={{
                  mx: 1,
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <SearchIcon fontSize="large" />
                <Box sx={{ pl: 2, alignSelf: 'center' }}>
                  Click to look for a product
                </Box>
              </Box>
              <Box
                sx={{
                  mx: 1,
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <WarehouseIcon fontSize="large" />{' '}
                <Box sx={{ pl: 2, alignSelf: 'center' }}>
                  Click to look for a farm
                </Box>
              </Box>
              <Box
                sx={{
                  mx: 1,
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <MyLocationIcon size={40} />
                <Box sx={{ pl: 2, alignSelf: 'center' }}>
                  Click to see your location
                </Box>
              </Box>
              <Box
                sx={{
                  mx: 1,
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <LocoolIcon size={25} />{' '}
                <Box sx={{ pl: 2, alignSelf: 'center' }}>
                  Click to see a product
                </Box>
              </Box>
              <Box
                sx={{
                  mx: 1,
                  fontSize: '1.2rem',
                  display: 'flex',
                  justifyContent: 'flex-start',
                }}
              >
                <FarmIcon size={40} />
                <Box sx={{ pl: 2, alignSelf: 'center' }}>
                  Click on it to see a farm
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
    </>
  )
}

export { PopupComponent }
