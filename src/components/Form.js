import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import formSchema from "../validation/formSchema";
import Confirmation from "./Confirmation";
import "../App.css";
import * as Yup from "yup";

const initialValues = {
  name: "",
  address: "",
  size: "",
  jalapeños: false,
  blackOlives: false,
  pineapples: false,
  mushrooms: false,
  special: "",
};

const initialErrorValues = {
  name: "",
  address: "",
  size: "",
};

const Form = () => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState(initialErrorValues);
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate();
  const isMountedRef = useRef(true);

  useEffect(() => {
    return () => {
      isMountedRef.current = false; // Update the mounted state on component unmount
    };
  }, []);

  useEffect(() => {
    formSchema.isValid(values).then((valid) => {
      setDisabled(!valid);
    });
  }, [values]);

  const onChange = (event) => {
    const { name, type, value, checked } = event.target;
    const updatedValue = type === "checkbox" ? checked : value;
    const setFormErrors = (name, value) => {
      Yup.reach(formSchema, name)
        .validate(value)
        .then(() => setErrors({ ...errors, [name]: "" }))
        .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
    };
    setFormErrors(name, updatedValue);
    setValues({ ...values, [name]: updatedValue });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/orders", values);
      setValues(initialValues);
      const pizzaOrder = response.data;
      console.log(pizzaOrder);

      if (isMountedRef.current) {
        // Check if the component is still mounted
        setValues({
          name: "",
          address: "",
          size: "",
          jalapeños: false,
          blackOlives: false,
          pineapples: false,
          mushrooms: false,
          special: "",
        });

        const encodedPizzaOrder = encodeURIComponent(
          JSON.stringify(pizzaOrder)
        );
        navigate(`/confirmation/${encodedPizzaOrder}`);
      }
    } catch (err) {
      setErrors({
        customMessage: "An error occurred while making the request.",
      });
    }
  };

  return (
    <form id="pizza-form" onSubmit={onSubmit}>
      <div style={{ color: "red" }}>
        {errors && errors.customMessage && <div>{errors.customMessage}</div>}
        <div>{errors.name}</div>
        <div>{errors.address}</div>
        <div>{errors.size}</div>
      </div>
      <label>
        {" "}
        Your Name:
        <input
          type="text"
          name="name"
          id="name-input"
          value={values.name}
          placeholder="Your First and Last Name"
          onChange={onChange}
        />
      </label>
      <label>
        {" "}
        Delivery Address:
        <input
          type="text"
          name="address"
          id="address-input"
          value={values.address}
          placeholder="Delivery Address"
          onChange={onChange}
        />
      </label>
      <label>
        {" "}
        Select a Pizza Size:
        <select
          id="size-dropdown"
          name="size"
          value={values.size}
          onChange={onChange}
        >
          <option value="">Select a Size</option>
          <option value="small">Small</option>
          <option value="medium">Medium</option>
          <option value="large">Large</option>
        </select>
      </label>
      <label>
        {" "}
        Load up on the toppings:
        <label>
          {" "}
          Jalapeños:
          <input
            type="checkbox"
            name="jalapeños"
            checked={values.jalapeños}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Black Olives:
          <input
            type="checkbox"
            name="blackOlives"
            checked={values.blackOlives}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Pineapple:
          <input
            type="checkbox"
            name="pineapples"
            checked={values.pineapples}
            onChange={onChange}
          />
        </label>
        <label>
          {" "}
          Mushrooms:
          <input
            type="checkbox"
            name="mushrooms"
            checked={values.mushrooms}
            onChange={onChange}
          />
        </label>
      </label>
      <label>
        {" "}
        Special Instructions:
        <textarea
          rows="10"
          cols="60"
          type="text"
          id="special-text"
          name="special"
          value={values.special}
          placeholder="Any special instructions for the kitchen?"
          onChange={onChange}
        ></textarea>
      </label>
      <button id="order-button" disabled={disabled}>
        Add to Order
      </button>
    </form>
  );
};

export default Form;
