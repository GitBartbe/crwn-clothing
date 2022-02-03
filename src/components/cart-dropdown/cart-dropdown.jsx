import React from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";

import CartItem from "../cart-item/cart-item.component";
import CustomButton from "../coustom-button/custom-button.component";
import { selectCartItems } from "../../redux/cart/cart.selector";
import { createStructuredSelector } from "reselect";
import { toggleCartHidden } from '../../redux/cart/cart.actions' 



import "./cart-dropdown.styles.scss";

const CartDropdown = ({ cartItems, dispatch }) => {

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
    dispatch(toggleCartHidden());
  }

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className="empty-message"> Your cart is empty </span>
        )}
      </div>
      <CustomButton onClick={handleClick} >GO TO CHECKOUT</CustomButton>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});

export default connect(mapStateToProps)(CartDropdown);
