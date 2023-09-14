import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../AuthContext';

const Navbar2 = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
  const { state, dispatch } = useAuth();
  // Handle window resize
  const handleResize = () => {
    if (window.innerWidth >= 640) {
      setIsMobileMenuOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const logout=()=>{
    dispatch({ type: 'LOGOUT' });
    document.cookie = 'jwtoken=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
    localStorage.removeItem('email');
  navigate('/login');
  }

  return (
    <nav className="bg-darker p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-lg">
        Logo
        </Link>
        <div className="lg:hidden">
          {/* Mobile Menu Button */}
          <button
            className="text-white hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:block space-x-4">
          <Link to="/upload" className="text-white font-sans hover:text-red-500">
            Upload
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
          <Link to="/input" className="text-white font-sans hover:text-red-500">
            Input
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
          <button className="bg-red-700 text-white font-sans hover:bg-dark hover:text-white px-4 py-0.6 rounded-lg" onClick={logout()}>Logout</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-8 bg-darker py-2 px-4 w-32 h-auto rounded-lg shadow-lg">
          <Link to="/upload" className="block text-white hover:text-red-500 mb-4">
            Upload
          </Link>
          <Link to="/input" className="block text-white hover:text-red-500 mb-4">
            Input
          </Link>
          <Link to= "/login" className="block text-white bg-red-700 hover:bg-dark hover:text-white px-2 py-0.6 rounded-lg mb-2">Logout</Link>
        </div>
      )}

    </nav>
  );
};
export default Navbar2;

