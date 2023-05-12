import React from 'react'
import './ModalComponent.css'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Modal from '@mui/material/Modal'
import PropTypes from 'prop-types'
import ButtonComponent from '../Button/ButtonComponent'

const ModalComponent = ({ text, fx,}) => {
  ModalComponent.propTypes = {
    text: PropTypes.string.isRequired,
    fx: PropTypes.func.isRequired,
    margin: PropTypes.string.isRequired,
  }

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  }

  const [open, setOpen] = React.useState(true)
  const handleOpen = () => {
    setOpen(true)
  }
  const handleClose = () => setOpen(false)

  return (
    <div>
      {/* <ButtonComponent text={text} fx={fx} margin={margin}>{text} /> */}
      <Button onClick={handleOpen}>{text}</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        closeAfterTransition={true}
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            Text in a modal
          </Typography>
          <Typography
            id="modal-modal-description"
            sx={{ mt: 2 }}
          >
            Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalComponent
