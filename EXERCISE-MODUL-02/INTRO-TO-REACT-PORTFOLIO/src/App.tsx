import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Contact />
    </Router>
  );
};

export default App;
