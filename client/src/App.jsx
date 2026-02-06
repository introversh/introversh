import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import BlogPost from "./pages/BlogPost";
import Home from './pages/Home'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const App = () => {
  return (
    <Router>
      <div className="bg-primary text-secondary">
        <Navbar />

        <Routes>
          {/* Single-page setup */}
          <Route path="/" element={<Home/>} />

          {/* Separate blog page */}
          <Route path="/blog/:slug" element={<BlogPost />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
};

export default App;
