import React from "react";
import CheckoutProduct from "../CheckoutProduct/checkoutProduct";
import Subtotal from "../Subtotal/subtotal";
import './checkout.css';

const Checkout = () => {
    return(
        <>
            <main className="checkout">
                <div className="checkout_left">
                    <div>
                        <h2 className="checkout_title">
                            Your Shopping Basket
                        </h2>
                        <CheckoutProduct />
                        <CheckoutProduct />
                        <CheckoutProduct />
                        <CheckoutProduct />
                    </div>
               </div>

                <div className="checkout_right">
                    <Subtotal />
                </div>
            </main>
        </>
    );
}

export default Checkout;