import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path ? 'text-white' : 'text-gray-200';
  };

  return (
    <nav className="navbar-gradient fixed top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-3">
          <Link to="/" className="text-white font-bold text-xl flex items-center">
            <i className="fa fa-plane-departure mr-2"></i>
            Skyward Journeys
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navMenu"
          >
            <span className="navbar-toggler-icon">☰</span>
          </button>

          {/* Navigation links */}
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
      </div>
    </nav>
  );
};

export default Navbar;