import React from "react";
// import { Routes, Route, Link } from "react-router-dom";
// import Confirmation from "./Confirmation";

const onChange = () => {

}

const onSubmit = (e) => {
    e.preventDefault();
}

const Form = () => {
    return (
        <form id="pizza-form" onSubmit={onSubmit}>
        <label> Your Name:
            <input 
                type="text"
                name="name"
                id="name-input"
                placeholder="Your First and Last Name"
                onChange={onChange}
            />
        </label>
        <label> Delivery Address:
            <input
                type="text"
                name="address"
                id="address-input"
                placeholder="Delivery Address"
                onChange={onChange}
            />
        </label>
        <label> Select a Pizza Size:
            <select id="size-dropdown" name="size" onChange={onChange}>
                <option value="select-size">Select a Size</option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>
        </label>
        <label onChange={onChange}> Load up on the toppings:
            <label> Jalapeños:
                <input
                    type="checkbox"
                    name="jalapeños"
                />
            </label>
            <label> Black Olives:
                <input
                    type="checkbox"
                    name="black-olives"
                />
            </label>
            <label> Pineapple:
                <input
                    type="checkbox"
                    name="pineapple"
                />
            </label>
            <label> Mushrooms:
                <input
                    type="checkbox"
                    name="mushrooms"
                />
            </label>
        </label>
        <label> Special Instructions:
            <textarea 
                rows="10" 
                cols="60" 
                type="text" 
                id="special-text" 
                name="special" 
                placeholder ="Any special instructions for the kitchen?" 
                onChange={onChange}
            > 
            </textarea>
        </label>
        <button id="order-button">Add to Order</button>
        </form>
    );
};

export default Form;