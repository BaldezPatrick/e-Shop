import React from "react";
import './header.css'
import { Link } from "react-router-dom";
import ShoppingBasketIcon from '@mui/icons-material/ShoppingBasket';
import StoreIcon from '@mui/icons-material/Store';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <>
            <main className="header">
                <Link to="/">
                    <section className="header_logo">
                        <StoreIcon className="header_logo_img" fontSize='large' />
                        <h2 className="header_logo_title">Shop</h2>
                    </section>
                </Link>

                <section className="header_search">

                    <input type="text" className="header_search_input" />
                    <SearchIcon className="header_search_icon" />

                </section>

                <section className="header_nav">

                    <section className="nav_item">

                        <span className="nav_item_one">Hello Guest</span>
                        <span className="nav_item_2">Sign In</span>

                    </section>

                    <section className="nav_item">

                        <span className="nav_item_one">Your</span>
                        <span className="nav_item_2">Shop</span>

                    </section>

                    <Link to="/checkout">
                        <section className="nav_item">
                            <ShoppingBasketIcon className="item_basket" />
                            <span className="nav_item_2 nav_basket_count">0</span>
                        </section>
                    </Link>

                </section>
            </main>
        </>
    )
}

export default Header;