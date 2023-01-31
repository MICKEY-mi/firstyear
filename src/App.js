import React from 'react';
import './App.css';
import Navbarfirst from './components/navbar/navbar-first';
import Firstyear from './components/firstyear/firstyear';
import { BrowserRouter , Routes, Route } from 'react-router-dom';
function App() {
  return (

    <BrowserRouter>
      <Routes>
          
          <Route path="*" element={[(<Navbarfirst/>),(<Firstyear />)]} />
          
          
      </Routes>
    </BrowserRouter>

  );
}

export default App;
