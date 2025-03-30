import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/HomePage";
import Footer from './Components/footer';
import About from "./Pages/About"; // Example additional page
import Services from "./Pages/Services"; // Example additional page
import Preloader from "./Components/Preloader"; // Import Preloader
import CustomCursor from "./Components/CustomCursor"; // Custom Cursor component
import "./App.css";
import HelpCenter from "./Pages/HelpCenter";
import ContactPage from "./Pages/Contactpage";

// Component to handle page title changes
const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Seemarise";
        break;
      case "/about":
        document.title = "Seemarise | About Us";
        break;
      case "/services":
        document.title = "Seemarise | Our Services";
        break;
      // Add more cases for other routes as needed
      default:
        document.title = "Seemarise"; // Default title
    }
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 4 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup timeout on component unmount
  }, []);

  return (
    <Router>
      {/* Show Preloader while loading */}
      {loading ? (
        <Preloader />
      ) : (
        <div className="app">
          {/* Navbar and Custom Cursor */}
          <Navbar />
          <CustomCursor />

          {/* Component to handle page title changes */}
          <PageTitle />

          {/* Main Content Area */}
          <div className="content">
            <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/about" element={<About />} /> {/* About Page Route */}
              <Route path="/services" element={<Services />} /> {/* Services Page Route */}
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/contactus" element={<ContactPage />} />{/* Add more routes as necessary */}
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;