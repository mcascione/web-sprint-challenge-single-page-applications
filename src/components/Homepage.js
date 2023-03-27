import React from "react";
import { Link } from "react-router-dom";
import "../App.css"

const Homepage = () => {
  return (
    <header className="App-header">
        <nav className="Top-nav">
            <Link to="/pizza" className="App-link" id="order-pizza">Order Now</Link>
        </nav>      
    </header>
  );
};

export default Homepage;