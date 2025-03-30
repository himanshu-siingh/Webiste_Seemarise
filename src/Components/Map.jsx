import React, { useEffect, useRef } from 'react';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icon
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';

const MapSection = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Check if the map container exists
    if (mapRef.current) {
      // Create map
      const map = L.map('map').setView([40.7128, -74.0060], 13); // New York City coordinates as example

      // Add tile layer (OpenStreetMap)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap contributors'
      }).addTo(map);

      // Create custom marker icon
      const DefaultIcon = L.icon({
        iconUrl: markerIcon,
        shadowUrl: markerShadow,
        iconSize: [40, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      L.Marker.prototype.options.icon = DefaultIcon;

      // Add a marker
      const marker = L.marker([28.4784, 77.5256])
        .addTo(map)
        .bindPopup('Our Office Location')
        .openPopup();

      // Cleanup on unmount
      return () => {
        map.remove();
      };
    }
  }, []); // Empty dependency array means this runs once on mount

  return (
    <div className="map-section">
      <h2>Find Us</h2>
      <div 
        ref={mapRef}
        id="map" 
        className="map-container"
        style={{ 
          height: '400px', 
          width: '100%',
          borderRadius: '8px',
          boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
        }}
      ></div>
    </div>
  );
};

export default MapSection;