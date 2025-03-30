import React, { useEffect, useRef } from "react";
import "../styles/Cursor.css"; // Keep your external CSS import

const Cursor = () => {
  // Use refs for cursor elements
  const smallCursorRef = useRef(null);
  const bigCursorRef = useRef(null);
  
  // Track positions with refs
  const mousePosition = useRef({ x: 0, y: 0 });
  const bigPosition = useRef({ x: 0, y: 0 });
  
  // Speed tracking
  const prevMousePos = useRef({ x: 0, y: 0 });
  const speed = useRef(0);
  
  // Animation frame reference
  const requestRef = useRef(null);

  useEffect(() => {
    // Get cursor elements
    const smallCursor = smallCursorRef.current;
    const bigCursor = bigCursorRef.current;
    
    if (!smallCursor || !bigCursor) return;

    // Handle mouse movement
    const handleMouseMove = (e) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
      
      // Move small cursor directly with mouse
      smallCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      
      // Check background color
      checkBackgroundColor(e.clientX, e.clientY);
    };

    // Check background color under cursor
    const checkBackgroundColor = (x, y) => {
      try {
        // Get element under cursor
        const element = document.elementFromPoint(x, y);
        if (!element) return;
        
        // Try to get computed background color
        let bgColor = getComputedStyle(element).backgroundColor;
        let currentElement = element;
        
        // If transparent, traverse up the DOM tree to find a non-transparent parent
        while ((bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') && 
               currentElement.parentElement) {
          currentElement = currentElement.parentElement;
          bgColor = getComputedStyle(currentElement).backgroundColor;
        }
        
        // Default to white if we couldn't find a non-transparent background
        if (bgColor === 'rgba(0, 0, 0, 0)' || bgColor === 'transparent') {
          bgColor = 'rgb(255, 255, 255)';
        }
        
        // Parse RGB values
        const rgb = parseRGB(bgColor);
        
        if (rgb) {
          const brightness = calculateBrightness(rgb);
          
          // Adjust cursor color based on background brightness
          if (brightness < 128) {
            // Dark background - white cursor
            smallCursor.style.backgroundColor = 'white';
            bigCursor.style.borderColor = 'white';
          } else {
            // Light background - black cursor
            smallCursor.style.backgroundColor = 'black';
            bigCursor.style.borderColor = 'black';
          }
        }
      } catch (err) {
        console.error("Error checking background color:", err);
      }
    };

    // Parse RGB values from CSS color string
    const parseRGB = (color) => {
      const match = color.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)(?:,\s*[\d.]+)?\)/);
      if (match) {
        return {
          r: parseInt(match[1]),
          g: parseInt(match[2]),
          b: parseInt(match[3])
        };
      }
      return null;
    };

    // Calculate brightness using the formula: (R*299 + G*587 + B*114) / 1000
    const calculateBrightness = (rgb) => {
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    };

    // Animation loop for big cursor
    const animateBigCursor = () => {
      // Calculate speed
      const dx = mousePosition.current.x - prevMousePos.current.x;
      const dy = mousePosition.current.y - prevMousePos.current.y;
      const distance = Math.sqrt(dx * dx + dy * dy);
      
      // Update speed with smoothing
      speed.current = speed.current * 0.8 + distance * 0.2;
      
      // Store current position for next frame
      prevMousePos.current = { ...mousePosition.current };
      
      // Calculate dynamic following factor
      const speedFactor = Math.min(0.08 + speed.current * 0.01, 0.25);
      
      // Update big cursor position with easing
      bigPosition.current.x += (mousePosition.current.x - bigPosition.current.x) * speedFactor;
      bigPosition.current.y += (mousePosition.current.y - bigPosition.current.y) * speedFactor;
      
      // Apply transforms directly
      bigCursor.style.transform = `translate(${bigPosition.current.x}px, ${bigPosition.current.y}px)`;
      
      // Continue animation
      requestRef.current = requestAnimationFrame(animateBigCursor);
    };
    
    // Start tracking and animation
    window.addEventListener("mousemove", handleMouseMove);
    requestRef.current = requestAnimationFrame(animateBigCursor);
    
    // Clean up
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(requestRef.current);
    };
  }, []);

  return (
    <>
      <div
        ref={smallCursorRef}
        className="cursor-small"
      ></div>
      <div
        ref={bigCursorRef}
        className="cursor-big"
      ></div>
    </>
  );
};

export default Cursor;