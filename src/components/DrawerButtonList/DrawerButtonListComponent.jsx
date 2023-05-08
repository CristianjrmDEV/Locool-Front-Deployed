import React from 'react'
import './DrawerButtonListComponent.css'
import DrawerButtonComponent from '../DrawerButton/DrawerButtonComponent'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import { mainTheme } from '../../themes/mainTheme'
import PropTypes from 'prop-types'

const DrawerButtonListComponent = ({ list, handleDrawer, align }) => {
  DrawerButtonListComponent.propTypes = {
    list: PropTypes.array,
    handleDrawer: PropTypes.func.isRequired,
    align: PropTypes.string,
  }

  return (
    <>
      {list?.map((text, index) => (
        <Box
          key={index}
          sx={{
            '&:hover': {
              backgroundColor: mainTheme.palette.green.main,
            },
          }}
        >
          <Link
            to={`/app/${list[index].toLowerCase()}`}
            sx={{
              display: 'block',
              width: '100%',
            }}
          >
            <DrawerButtonComponent
              text={text}
              handleDrawerToggle={handleDrawer}
              align={align}
            />
          </Link>
        </Box>
      ))}
    </>
  )
}


export default DrawerButtonListComponent
