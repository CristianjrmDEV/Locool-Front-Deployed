import React, { useContext } from 'react'
import './CartComponent.css'
import ShoppingCartComponent from '../ShoppingCart/ShoppingCartComponent'
import PropTypes from 'prop-types'

const CartComponent = ({ cartComponent, toggleDrawer }) => {
  CartComponent.propTypes = {
    cartComponent: PropTypes.bool,
    toggleDrawer: PropTypes.func
  }
  if (cartComponent) return <ShoppingCartComponent toggleDrawer={toggleDrawer} />
}

export default CartComponent
