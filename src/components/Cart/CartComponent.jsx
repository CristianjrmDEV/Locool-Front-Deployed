import React, { useContext } from 'react'
import './CartComponent.css'
import ShoppingCartComponent from '../ShoppingCart/ShoppingCartComponent'
import PropTypes from 'prop-types'

const CartComponent = ({ cartComponent }) => {
  CartComponent.propTypes = {
    clickable: PropTypes.bool,
  }
  if (cartComponent)
    return (
      <>
        <ShoppingCartComponent />
      </>
    )
}

export default CartComponent
