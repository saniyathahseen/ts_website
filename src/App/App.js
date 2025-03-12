import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./../Shared/Components/Navbar/Navbar";
import About from "./../Pages/About/About";
import Enquire from "./../Pages/Enquire/Enquire";
import Home from "./../Pages/Home/Home";
import Stories from "../Pages/Stories/Stories";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Store from "../Pages/Store/Store";
import "./App.css"; // Import a CSS file for global styles

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL || "/"}>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/enquire" element={<Enquire />} />
            <Route path="/stories" element={<Stories />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </main>
        <footer className="footer">
          <p className="text-footer">© {new Date().getFullYear()} - All rights reserved</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;