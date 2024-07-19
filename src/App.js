import Menu from "./Components/Menu";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Home from "./Components/Home"
import VehicleList from "./Components/VehicleList"
import { Routes,Route } from "react-router-dom";
import React from 'react';

function App()
{
  return(
    <>
    <Menu/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/vehicle-list" element={<VehicleList />} />
    </Routes>
    <Footer/>
    </>
  )
}

export default App;