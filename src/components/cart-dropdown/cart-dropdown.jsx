import React from 'react'
import {connect} from 'react-redux'
import CartItem from '../cart-item/cart-item.component'


import './cart-dropdown.styles.scss'

import CustomButton from '../coustom-button/custom-button.component'

const CartDropdown = ({cartItems}) => {
  return (
    <div>
      <div className="cart-dropdown">
          <div className="cart-items">
            {
              cartItems.map(cartItem=> (
                <CartItem key={cartItem.id} item={cartItem} />
              ) )
            }
              <CustomButton>GO TO CHECKOUT</CustomButton>
          </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({cart: {cartItems}}) => ({
  cartItems
})

export default connect(mapStateToProps)(CartDropdown)