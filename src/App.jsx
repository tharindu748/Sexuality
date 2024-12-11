import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Componants/Navbar';

export default function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Contact' element={<Contact />} />
  <Route path='/About' element={<About />} />
    </Routes>
    </BrowserRouter>
  )
}
