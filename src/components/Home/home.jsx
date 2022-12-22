import React from "react";
import './home.css';
import Product from "../Product/product";

const Home = () => {
    return (
        <>
            <main className="home">
                <section className="home_container">

                    <img src="https://images.pexels.com/photos/6214452/pexels-photo-6214452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="a supermarket trolley" className="home_img" />

                    <div className="home_row">
                        <Product
                            id={123}
                            title={'Bag'}
                            price={300}
                            rating={3}
                            image="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                        <Product
                            id={124}
                            title={"Guitar"}
                            price={2000}
                            rating={5}
                            image="https://images.pexels.com/photos/1010519/pexels-photo-1010519.jpeg?auto=compress&cs=tinysrgb&w=400"
                        />
                    </div>

                    <div className="home_row">

                    </div>

                    <div className="home_row">

                    </div>
                </section>
            </main>
        </>
    );
}

export default Home;