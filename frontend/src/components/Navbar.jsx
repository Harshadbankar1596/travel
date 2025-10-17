import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false); // menu toggle state

  const isActive = (path) => {
    return location.pathname === path ? 'text-white' : 'text-gray-200';
  };

  return (
    <nav className="navbar-gradient fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          {/* Logo */}
          <Link to="/" className="text-white font-bold text-xl flex items-center">
            <i className="fa fa-plane-departure mr-2"></i>
            Skyward Journeys
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white text-2xl"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? "✖" : "☰"}
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            <Link to="/" className={`${isActive('/')} hover:text-white transition`}>
              Home
            </Link>
            <Link to="/destinations" className={`${isActive('/destinations')} hover:text-white transition`}>
              Destinations
            </Link>
            <Link to="/packages" className={`${isActive('/packages')} hover:text-white transition`}>
              Packages
            </Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-white transition`}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-white transition`}>
              Contact
            </Link>
          </div>
        </div>

        {/* Mobile menu (show when open) */}
        {isOpen && (
          <div className="md:hidden flex flex-col space-y-4 mt-4 pb-4">
            <Link to="/" className={`${isActive('/')} hover:text-white transition`} onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/destinations" className={`${isActive('/destinations')} hover:text-white transition`} onClick={() => setIsOpen(false)}>
              Destinations
            </Link>
            <Link to="/packages" className={`${isActive('/packages')} hover:text-white transition`} onClick={() => setIsOpen(false)}>
              Packages
            </Link>
            <Link to="/about" className={`${isActive('/about')} hover:text-white transition`} onClick={() => setIsOpen(false)}>
              About
            </Link>
            <Link to="/contact" className={`${isActive('/contact')} hover:text-white transition`} onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
