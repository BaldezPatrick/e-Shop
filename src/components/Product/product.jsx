import React from "react";
import './product.css'
import { useStateValue } from "../../StateProvider";

const Product = ({id, title, price, rating, image}) => {

    const [state, dispatch] = useStateValue();

    const addToBasket = () => {
        dispatch({
            type: "ADD_TO_BASKET",
            item: {
                id: id,
                image: image,
                price: price,
                rating: rating
            }
        });
    }

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

                <button onClick={addToBasket}>Add to Basket</button>
            </main>
        </>
    );
}

export default Product;