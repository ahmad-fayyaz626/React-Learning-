// Now we will learn about the react routers
// it is old syntax of react router
import React from "react";
import { Link } from "react-router-dom";
import Navbar from "./Component/Navbar";
import Home from "./Component/Home";
import About from "./Component/About";
import Contact from "./Component/Contact..jsx";
import Services from "./Component/Services";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import ContactA from "./Component/ContactA";
import ContactB from "./Component/ContactB";

// Dynamic Routing helps us this way

// Dynamic Routing through URL parameters:It is a way to create routng
const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about/:cid" element={<About />} />
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/services" element={<Navigate to="/" />} />
      </Routes>
    </div>
  );
};

export default App;
