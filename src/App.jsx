import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Navbar from './Componants/Navbar';
import Footer from './Componants/Footer';
import Sexual_health from './pages/Sexual_health';
import Seeking_Advice from './pages/Seeking_Advice';
import Mental from './pages/Mental';
import ReproductiveRights from './pages/ReproductiveRights';
import Respectful_communication from './pages/Respectful_communication';
// import ReproductiveRights from './pages/ReproductiveRights';



export default function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/About" element={<About />} />
  <Route path="/Sexual_health" element={<Sexual_health />} />
  <Route path="/Seeking_Advice"element={<Seeking_Advice />} />
  <Route path="/Mental" element={<Mental />} /> 
  <Route path="/ReproductiveRights"element={<ReproductiveRights />} />
  <Route path="/Respectful_communication"element={<Respectful_communication />} />


    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
