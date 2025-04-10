import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./Components/Navbar";
import Homepage from "./Pages/HomePage";
import Footer from "./Components/footer";
import About from "./Pages/About";
import Services from "./Components/Servicepage";
import ServiceDetail from "./Components/ServiceDetails"; // New import for service detail page
import Preloader from "./Components/Preloader";
import CustomCursor from "./Components/CustomCursor";
import "./App.css";
import HelpCenter from "./Pages/HelpCenter";
import ContactPage from "./Pages/Contactpage";

// Component to handle page title changes
const PageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    // Extract the base path and service slug (if any)
    const pathParts = location.pathname.split("/");
    const basePath = pathParts[1] ? `/${pathParts[1]}` : "/";
    const isServiceDetail = basePath === "/services" && pathParts.length > 2;

    switch (basePath) {
      case "/":
        document.title = "Seemarise";
        break;
      case "/about":
        document.title = "Seemarise | About Us";
        break;
      case "/services":
        if (isServiceDetail) {
          // Capitalize service name for the title
          const serviceName = pathParts[2]
            .split("-")
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
          document.title = `Seemarise | ${serviceName}`;
        } else {
          document.title = "Seemarise | Our Services";
        }
        break;
      case "/helpcenter":
        document.title = "Seemarise | Help Center";
        break;
      case "/contactus":
        document.title = "Seemarise | Contact Us";
        break;
      default:
        document.title = "Seemarise"; // Default title
    }
  }, [location]);

  return null; // This component doesn't render anything
};

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide preloader after 2 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

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
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/:slug" element={<ServiceDetail />} />{" "}
              {/* New route for service details */}
              <Route path="/helpcenter" element={<HelpCenter />} />
              <Route path="/contactus" element={<ContactPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      )}
    </Router>
  );
};

export default App;
