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
import { Box } from '@mui/system'
import ButtonComponent from '../Button/ButtonComponent'
import Greeting from '../Greeting/Greeting'
import {
  LocoolIcon,
  MyLocationIcon,
  FarmIcon,
  MagnifierIcon,
  SearchFarmIcon,
} from '../Icon/IconComponent'
import HelpIcon from '@mui/icons-material/Help'
import ButtonWithIconComponent from '../ButtonWithIcon/ButtonWithIconComponent'
import PropTypes from 'prop-types'

const PopupComponent = ({ greetingMessage, greeting, bgColour }) => {
  PopupComponent.propTypes = {
    greetingMessage: PropTypes.string,
    greeting: PropTypes.bool,
    bgColour: PropTypes.string,
  }

  const [open, setOpen] = React.useState(false)

  const checkOpenSetup = () =>
    localStorage.getItem(`noMoreHelp${localStorage.getItem('locoolUsername')}`)
      ? setOpen(false)
      : setOpen(true)

  React.useEffect(() => {
    checkOpenSetup()
  }, [])

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleCloseButton = () => {
    setOpen(false)
    localStorage.setItem(
      `noMoreHelp${localStorage.getItem('locoolUsername')}`,
      'OK'
    )
  }

  const handleClose = () => setOpen(false)

  const KeyRow = ({ icon, text }) => {
    KeyRow.propTypes = {
      icon: PropTypes.object.isRequired,
      text: PropTypes.string.isRequired,
    }
    return (
      <Box
        sx={{
          mx: 1,
          fontSize: '1.2rem',
          display: 'flex',
          justifyContent: 'flex-start',
        }}
      >
        <Box
          sx={{
            width: '40px',
            height: '50px',
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
        <Box sx={{ pl: 2, alignSelf: 'center' }}>{text}</Box>
      </Box>
    )
  }

  const displayBackground = () => bgColour ? bgColour : 'primary'

  return (
    <>
      <ButtonWithIconComponent
        text="Help"
        icon={<HelpIcon sx={{ fontSize: '20px' }} />}
        fx={handleClickOpen}
        buttonBg={displayBackground()}
      />
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
          <DialogContent sx={{ width: '350px', m: 'auto' }}>
            <KeyRow
              icon={<MagnifierIcon size={40} />}
              text="Click to look for products"
            />
            <KeyRow
              icon={<SearchFarmIcon size={40} />}
              text="Click to look for farms"
            />
            <KeyRow
              icon={<MyLocationIcon size={40} />}
              text="Click to see your location"
            />
            <KeyRow
              icon={<LocoolIcon size={20} />}
              text="Click to see a product"
            />

            <KeyRow
              icon={<FarmIcon size={40} />}
              text="Click on it to see a farm"
            />
          </DialogContent>
          <DialogActions>
            <ButtonComponent
              text="OK"
              fx={handleCloseButton}
              width={'300px'}
              margin={'0 auto 10px auto'}
            />
          </DialogActions>
        </Box>
      </Dialog>
    </>
  )
}

export { PopupComponent }
