import React from 'react';
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import About from "./pages/about/About";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";
import Login from './components/login/Login';
import Signup from './components/signup/Signup';
import Footer from './components/footer/Footer';
import Cars from './pages/cars/Cars';
import Supercars from './pages/supercars/Supercars';
import Illegal from './pages/Illegalcars/Illegal';




const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cars" element={<Cars />} />
        <Route path="/supercars" element={<Supercars />} />
        <Route path="/illegalcars" element={<Illegal />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;

