import React from "react";
import Navbar from "./../Shared/Components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./../Pages/About/About";
import Enquire from "./../Pages/Enquire/Enquire";
import Home from "./../Pages/Home/Home";
import Stories from "../Pages/Stories/Stories";
import Testimonials from "../Pages/Testimonials/Testimonials";
import Store from "../Pages/Store/Store";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/enquire" element={<Enquire />} />
          <Route path="/stories" element={<Stories />} />
          <Route path="/testimonials" element={<Testimonials />} />
          <Route path="/store" element={<Store />} />
        </Routes>
      </Router>
      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;
