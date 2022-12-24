import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import {
  About,
  Cart,
  Checkout,
  Error,
  Home,
  PrivateRoute,
  Products,
  SingleProduct,
} from "./Pages";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleProduct/>} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
    </React.StrictMode>
  );
}

export default App;
