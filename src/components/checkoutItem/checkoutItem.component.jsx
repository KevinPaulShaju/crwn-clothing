import React from 'react';
import "./checkoutItem.styles.scss";
import { connect } from "react-redux";
import { removeItem, reduceItem, addItem } from "../../redux/cart/cart.action";

const CheckoutItem = ({ cartItem, clearItem, reduceItem, addItem }) => {
    const { name, imageUrl, price, quantity } = cartItem
    return (
        <div className="checkout-item">
            <div className="image-container">
                <img src={imageUrl} alt="item" ></img>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className="arrow" onClick={() => reduceItem(cartItem)}>&#10094;</div>
                <span className="value">{quantity}</span>
                <div className="arrow" onClick={() => addItem(cartItem)}>&#10095;</div>
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={() => clearItem(cartItem)}>&#10005;</div>
        </div>
    );
};


const mapDispatchToProps = dispath => ({
    clearItem: item => dispath(removeItem(item)),
    addItem: item => dispath(addItem(item)),
    reduceItem: item => dispath(reduceItem(item))
})


export default connect(null, mapDispatchToProps)(CheckoutItem);