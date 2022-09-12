import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Navbar from './Navbar';
import Home from './Home';
import Cart from './Cart';

function App() {
  const searchHandler = () =>{
     alert("heloo")
  }
  return (
    <div className="App">
    <BrowserRouter>
   < Navbar />
   <Routes>
  <Route path="/" element={<Home />}></Route>
  <Route path="/cart" element={<Cart />}></Route>
   </Routes>
   
   </BrowserRouter>

    </div>
  );
}

export default App;
