import React from 'react';
import "./cart-dropdown.styles.scss";
import CustomButton from "../custom-button/custom-button.component";
import CartItem from "../cart-item/cart-item.component";
import { connect } from "react-redux";


const CartDropdown = ({ cartItems }) => {
    return (
        <div className="cart-dropdown">
            <div className="cart-items">
                {cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem}></CartItem>)}
            </div>
            <CustomButton>PROCEED TO CHECKOUT</CustomButton>
        </div>
    );
};


const mapStaesToProps = ({ cart: { cartItems } }) => ({
    cartItems
})

export default connect(mapStaesToProps)(CartDropdown);