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
import MenstrualHealthandHygiene from './pages/MenstrualHealthandHygiene';
import Consent from './pages/Consent';
import Safe_practices from './pages/Safe_practices';
import Confidential_S from './pages/Confidential_S';
import Open_Discussions_with_parents_and_the_community from './pages/Open_Discussions_with_parents_and_the_community';
// import ReproductiveRights from './pages/ReproductiveRights';



export default function App() {
  return (
  <BrowserRouter>
  <Navbar />
  <Routes>
  <Route path="/" element={<Home />} />
  <Route path="/Consent" element={<Consent />} />
  <Route path="/Contact" element={<Contact />} />
  <Route path="/About" element={<About />} />
  <Route path="/Sexual_health" element={<Sexual_health />} />
  <Route path="/Seeking_Advice"element={<Seeking_Advice />} />
  <Route path="/Mental" element={<Mental />} /> 
  <Route path="/Safe_practices" element={<Safe_practices />} /> 
  <Route path="/ReproductiveRights"element={<ReproductiveRights />} />
  <Route path="/Respectful_communication"element={<Respectful_communication />} />
  <Route path="/MenstrualHealthandHygiene" element={<MenstrualHealthandHygiene/>} />
  <Route path="/Open_Discussions_with_parents_and_the_community" element={<Open_Discussions_with_parents_and_the_community/>} />
  <Route path="/Confidential_S"S element={<Confidential_S/>} />



    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
