import React from "react";
import './home.css';
import Product from "../Product/product";

const Home = () => {
    return (
        <>
            <main className="home">
                <section className="home_container">

                    <img src="https://images.pexels.com/photos/5632371/pexels-photo-5632371.jpeg?auto=compress&cs=tinysrgb&w=400" alt="a supermarket trolley" className="home_img" />

                    <div className="home_row">
                        <Product
                        id={123}
                        title={'Teste'}
                        price={300}
                        rating={3}
                        image="https://images.pexels.com/photos/2905238/pexels-photo-2905238.jpeg?auto=compress&cs=tinysrgb&w=400"
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