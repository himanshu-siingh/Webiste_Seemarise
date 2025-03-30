import React, { useState, useEffect } from "react";

const Preloader = () => {
  const [fontSize, setFontSize] = useState("5rem"); // Default for desktop

  useEffect(() => {
    const updateFontSize = () => {
      if (window.innerWidth <= 480) {
        setFontSize("4rem"); // Mobile
      } else if (window.innerWidth <= 768) {
        setFontSize("4rem"); // Tablet
      } else {
        setFontSize("5rem"); // Desktop
      }
    };

    updateFontSize(); // Set initial size
    window.addEventListener("resize", updateFontSize);

    return () => window.removeEventListener("resize", updateFontSize);
  }, []);

  return (
    <div
      style={{
        margin: 0,
        padding: 0,
        background: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        overflow: "hidden",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          fontSize,
          fontWeight: "bold",
          background:
            "linear-gradient(90deg, hsla(21, 100%, 90%, 1) 0%, hsla(300, 100%, 87%, 1) 39%, hsla(19, 100%, 76%, 1) 66%, hsla(203, 69%, 84%, 1) 97%)",
          backgroundSize: "200% 200%",
          WebkitBackgroundClip: "text",
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
          color: "transparent",
          animation: "gradientAnimation 2s infinite linear, wave 3s ease-in-out infinite",
          textTransform: "uppercase",
          textAlign: "center",
        }}
      >
        Seemarise
      </div>
      <style>
        {`
          @keyframes gradientAnimation {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
          @keyframes wave {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
          }
        `}
      </style>
    </div>
  );
};

export default Preloader;
