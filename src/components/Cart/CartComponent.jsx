import React, { useContext } from 'react'
import './CartComponent.css'
import ShoppingCartComponent from '../ShoppingCart/ShoppingCartComponent'
import PropTypes from 'prop-types'

const CartComponent = ({ cartComponent, toggleDrawer, smallCart }) => {
  CartComponent.propTypes = {
    cartComponent: PropTypes.bool,
    toggleDrawer: PropTypes.func,
    smallCart: PropTypes.bool
  }
  if (cartComponent) return <ShoppingCartComponent toggleDrawer={toggleDrawer} smallCart={smallCart} />
}

export default CartComponent
