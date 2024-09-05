// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Portfolio from "./Components/Portfolio";
import Contact from "./Components/Contact";
import Blog from "./Components/Blog";
import "./index.css"; // Import your CSS file

function App() {
  return (
    <Router>
      <div>
      <Header />
      </div>
      
      
      <main>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
