import React from "react";
// import Form from './Form';
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <header className="App-header">
        <nav className="Top-nav">
            <Link to="/Pizza" className="App-link" id="order-pizza">Order Now</Link>&nbsp;
        </nav>      
    </header>
  );
};

export default Homepage;