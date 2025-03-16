import React, { useEffect, useState } from "react";
import "../styles/Cursor.css";

const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [bigPosition, setBigPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      setTimeout(() => {
        setBigPosition({ x: e.clientX, y: e.clientY });
      }, 50); // Delay for smooth effect
    };

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
    };
  }, []);

  return (
    <>
      <div
        className="cursor-small"
        style={{ left: `${position.x}px`, top: `${position.y}px` }}
      ></div>
      <div
        className="cursor-big"
        style={{ left: `${bigPosition.x}px`, top: `${bigPosition.y}px` }}
      ></div>
    </>
  );
};

export default Cursor;
