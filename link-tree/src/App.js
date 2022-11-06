import React from "react";
import Home from "./components/home/Home";
import { Route, Routes } from  "react-router-dom"
import Contact from "./components/Contact";
import "./App.css";
import Footer from "./components/home/Footer";




function App() {
  return (
    <div>
      <Routes>
        
        
          
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        
        
          
          
        

      </Routes>
      
    </div>
    
   
  );
}

export default App;
