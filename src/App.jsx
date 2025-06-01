import React from 'react';
import { Routes, Route } from 'react-router-dom';
import index from "../src/layouts/index";
import Home from '../src/pages/Home/home';
import Mammals from '../src/pages/Mammals/mammals';
import Birds from '../src/pages/Birds/birds';
import Reptiles from '../src/pages/Reptiles/reptiles';
import Header from "../src/components/Header/header";

function App() {
  return (
    
   
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/mammals" element={<Mammals />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/reptiles" element={<Reptiles />} />
    </Routes>
   
  );
}

export default App;
