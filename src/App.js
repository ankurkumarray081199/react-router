import React from "react";
import { Routes, Route } from "react-router-dom";
import Menu from "../src/Menu/Menu";
import Home from "../src/Menu/Home";
import About from "../src/Menu/About";
import Service from "../src/Menu/Service";
import Contact from "../src/Menu/Contact";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Footer from "./Menu/Footer";
function App() {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
