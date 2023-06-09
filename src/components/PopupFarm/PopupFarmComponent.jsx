import './PopupFarmComponent.css'
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
} from '../Icon/IconComponent'
import HelpIcon from '@mui/icons-material/Help'
import ButtonWithIconComponent from '../ButtonWithIcon/ButtonWithIconComponent'
import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom'

const PopupFarmComponent = ({ greetingMessage, greeting , handleComponent,text}) => {
  PopupFarmComponent.propTypes = {
    greetingMessage: PropTypes.string,
    greeting: PropTypes.bool,
    text: PropTypes.string,
    handleComponent: PropTypes.func
  }

  const [open, setOpen] = React.useState(true)

  const checkOpenSetup = () => setOpen(true)

  React.useEffect(() => {
    checkOpenSetup()
  }, [])

  const theme = useTheme()
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'))

  const handleClickOpen = () => {
    setOpen(true)
  }

  const goTo = useNavigate()

  const handleClose = () => {
    setOpen(false)
    handleComponent('FarmListComponent')
  }

  return (
    <>
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
            {text}
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

export { PopupFarmComponent }
