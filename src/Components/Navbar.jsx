import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Navbar.css';
import logo from './images/download.png';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 100);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className='logo'>
                <img src={logo} alt='Seemarise' />
                <span className={`logo-text ${scrolled ? 'scrolled-text' : ''}`}>Seemarise</span>
            </div>

            {/* Hamburger Icon for Mobile */}
            <div className='hamburger' onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? '✕' : '☰'} {/* Show cross when menu is open, hamburger when closed */}
            </div>

            {/* Navbar Links */}
            <div className={`nav-links ${menuOpen ? 'open' : ''} ${scrolled ? 'scrolled-links' : ''}`}>
                <Link to="/" className='nav-item' onClick={() => setMenuOpen(false)}>Home</Link>
                <Link to="/about" className='nav-item' onClick={() => setMenuOpen(false)}>About Company</Link>
                <Link to="/services" className='nav-item' onClick={() => setMenuOpen(false)}>Services</Link>
                <Link to="/helpcenter" className='nav-item' onClick={() => setMenuOpen(false)}>Help Centre</Link>
                <Link to="/blog" className='nav-item' onClick={() => setMenuOpen(false)}>Blog</Link>
                <Link to="/privacy-policy" className='nav-item' onClick={() => setMenuOpen(false)}>Privacy Policy</Link>
                <Link to="/contactus" className='nav-item' onClick={() => setMenuOpen(false)}>Contact Us</Link>
            </div>
        </nav>
    );
};

export default Navbar;