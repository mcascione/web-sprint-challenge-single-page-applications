import React from "react";
import { useParams } from "react-router-dom";
import "../App.css";

const Confirmation = () => {
  const { pizzaOrder } = useParams();
  const orderDetails = JSON.parse(pizzaOrder);
  
  return (
    <header className="App-header">
      <nav className="Top-nav">
      <h1>Congrats, {orderDetails.name}!</h1>
      <h2>Your {orderDetails.size} pizza is on the way!</h2>
        <h4>Toppings:</h4>
        <p>Jalapeños: {orderDetails.jalapeños.toString()}</p>
        <p>Black Olives: {orderDetails.blackOlives.toString()}</p>
        <p>Pineapples: {orderDetails.pineapples.toString()}</p>
        <p>Mushrooms: {orderDetails.mushrooms.toString()}</p>
        <h3>Special Instructions:</h3>
        <p>{orderDetails.special}</p>
        <p>Delivery Address: {orderDetails.address}</p>
        <p>Ordered At: {orderDetails.createdAt}</p>
      </nav>
    </header>
  );
};

export default Confirmation;
