import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/HomePage";
import "./App.css";
import CustomCursor from "./Components/CustomCursor";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <CustomCursor></CustomCursor>
        <div className="content">
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
