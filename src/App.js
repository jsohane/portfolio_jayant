import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./nav/Nav";
import About from "./about/About"
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Contact from "./contact.js/Contact";
import PlayerStats from "./playerStats/PlayerStats";
import "./styles/app.css"
import Background from "./background/Background";


const App = () => {
  return (
    <Router>
      <Nav />
      <Background />
      <Routes>
        <Route path="/" element={<About/>} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <PlayerStats />
    </Router>
  );
};

export default App;