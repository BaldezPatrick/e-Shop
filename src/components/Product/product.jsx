import React from "react";
import './product.css'

const Product = ({id, title, price, rating, image}) => {
    return (
        <>
            <main className="product">
                <section className="product_info">
                    <p>{title}</p>
                    <p className="product_price">${price}</p>
                    <div className="product_rating">
                        {Array(rating)
                        .fill()
                        .map((_, i) => (
                            <p>⭐</p>
                        ))}
                    </div>
                </section>

                <img src={image} alt="Bag" />

                <button>Add to Basket</button>
            </main>
        </>
    );
}

export default Product;