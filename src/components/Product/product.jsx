import React from "react";
import './product.css'

const Product = () => {
    return (
        <>
            <main className="product">
                <section className="product_info">
                    <p>Title</p>
                    <p className="product_price">$30</p>
                    <div className="product_rating">⭐⭐⭐⭐⭐</div>
                </section>

                <img src="https://images.pexels.com/photos/1152077/pexels-photo-1152077.jpeg?auto=compress&cs=tinysrgb&w=400" alt="Bag" />
                
                <button>Add to Basket</button>
            </main>
        </>
    );
}

export default Product;