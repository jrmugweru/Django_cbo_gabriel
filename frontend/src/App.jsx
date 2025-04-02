import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
import Donation from "./components/Donation/Donation";
import Register from "./components/register/Register.jsx";
import Login from "./components/Login/Login";
import Footer from "./components/Footer/Footer";
import Contact from "./components/Contact";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Body />} />
        <Route path="/donation" element={<Donation />} />
       <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />  
      </Routes>
      <Contact/>
      <Footer/>
    </Router>
  );
};

export default App;
