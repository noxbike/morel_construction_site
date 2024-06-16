import React from "react";
import './App.css';
import Navbar from "./components/navbar/Navbar.js";
import { Routes, Route } from "react-router-dom";
import { routelist } from "./Data/routelist.js"
import Footer from "./components/Footer/Footer.js";

function App() {
  return (
    <div className="contain">
      <Navbar/>
      <Routes>
        {routelist.map((route) => 
        <Route path={route.path} element={route.element}/>
        )}
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
