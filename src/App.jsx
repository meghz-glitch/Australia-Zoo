import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../src/pages/Home/home';
import Mammals from '../src/pages/Mammals/mammals';
import Birds from '../src/pages/Birds/birds';
import Reptiles from '../src/pages/Reptiles/reptiles';
import Layouts from '../src/layouts/index';

function App() {
  return (
    
   
    <Routes>
      <Route element={<Layouts />}></Route>
      <Route path="/" element={<Home />} />
      <Route path="/mammals" element={<Mammals />} />
      <Route path="/birds" element={<Birds />} />
      <Route path="/reptiles" element={<Reptiles />} />
    </Routes>
   
  );
}

export default App;
