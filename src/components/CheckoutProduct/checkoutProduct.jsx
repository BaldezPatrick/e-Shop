import React from "react";
import "./checkoutProduct.css";

const CheckoutProduct = ({id, title, price, rating, image}) => {
    return(
        <>
            <main className="checkoutProduct">
                <img src="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400" alt="" className="checkoutProduct_img" />

                <section className="checkoutProduct_info">
                    <p className="checkoutProduct_title">
                        Teste
                    </p>
                    <p className="checkoutProduct_price">
                        $300
                    </p>

                    <div className="checkoutProduct_rating">
                        ⭐⭐⭐
                    </div>

                    <button>Remove from Basket</button>
                </section>
            </main>
        </>
    );
}

export default CheckoutProduct;