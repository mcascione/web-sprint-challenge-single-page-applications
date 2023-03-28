import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Form from "./components/Form";


const App = () => {
  return (
      <>  
          <nav className="Top-nav">
          <Link to="/" className="App-link">Home</Link>
          </nav> 
          <h1>Bloomtech Eats</h1>
          <p>Fuel Your Coding Session with Pizza</p>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="/pizza" element={<Form />}/>  
        </Routes> 
      </>
  );
};
export default App;
