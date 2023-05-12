import React from 'react'
import Popover from '@mui/material/Popover'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import './PopoverComponent.css'
import ButtonComponent from '../Button/ButtonComponent'
import PropTypes from 'prop-types'
import { Box } from '@mui/material'

const PopoverComponent = ({ text, buttonText }) => {
  PopoverComponent.propTypes = {
    text: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired,
  }

  const [anchorEl, setAnchorEl] = React.useState(null)

  const handlePopoverClick = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)
  const id = open ? 'simple-popover' : undefined

  return (
    <>
      <Button
        aria-describedby={id}
        variant="contained"
        onClick={handlePopoverClick}
      >
        Open Popover
      </Button>
      <ButtonComponent
        fx={handlePopoverClick}
        text={buttonText}
      />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <Box sx={{ p: 2 }}>
          <Typography sx={{ pb: 2, fontWeight: 'bold' }}>
            {text}Item added to cart
          </Typography>
          <ButtonComponent
            fx={handleClose}
            text={buttonText}
          />
        </Box>
      </Popover>
    </>
  )
}

export default PopoverComponent
