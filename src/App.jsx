import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Componants/Navbar';
import Footer from './Components/Footer'; 
import Sexual_health from './pages/sexual_health';



export default function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path='/' element={<Home />} />
  <Route path='/Contact' element={<Contact />} />
  <Route path='/About' element={<About />} />
  <Route path="/Sexual_health" element={<Sexual_health />} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
