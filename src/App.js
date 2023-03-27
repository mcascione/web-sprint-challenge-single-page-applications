import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Homepage";
import Form from "./components/Form";
import Confirmation from "./components/Confirmation"


const App = () => {
  return (
      <>
        <header className="App-header">
        <nav className="Top-nav">
            <Link to="/" className="App-link" >Home</Link>&nbsp;
        </nav>      
    </header>

        <h1>Bloomtech Eats</h1>
        <p>Fuel Your Coding Session with Pizza</p>
        <Routes>
            <Route path="/" element={<Homepage />}/>
            <Route path="Form" element={<Form />}/>  
            <Route path="pizza" element={<Confirmation />}/> 
        </Routes> 
      </>
  );
};
export default App;
