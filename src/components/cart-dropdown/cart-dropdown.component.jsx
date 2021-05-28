import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { selectCartItems } from "../../redux/cart/cart.selectors";
import { toggleCartHidden } from "../../redux/cart/cart.action"


const CartDropdown = ({ cartItems, history, dispatch }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => (<CartItem key={cartItem.id} cartItem={cartItem}></CartItem>))}
                {!cartItems.length && <span className="empty-message">Your cart is empty</span>}
            </div>
            <CustomButton onClick={() => { history.push("/checkout"); dispatch(toggleCartHidden()) }}>PROCEED TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapStaesToProps = (state) => ({
    cartItems: selectCartItems(state)
})

export default withRouter(connect(mapStaesToProps)(CartDropdown));