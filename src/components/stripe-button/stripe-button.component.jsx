import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {

    const priceForStripe = price * 100;
    const publishableKey = "pk_test_51IwtYPSH47m0S4ayqArmbsaTV3hg1STQ75DMF2iSL8HLApiJDMWlEhM9t87x1vKa9o2kkQWuzlY6YJzsPhYqBBZw00lRPt8UhT";
    const onToken = token => {
        console.log(token);
        alert("Payment successful");
    }
    return (
        <StripeCheckout
            label="Pay Now"
            name="CRWN Clothing Ltd."
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`Your total is ${price}`}
            amount={priceForStripe}
            panelLabel="Pay Now"
            token={onToken}
            stripeKey={publishableKey}>
        </StripeCheckout>
    );
};

export default StripeCheckoutButton;