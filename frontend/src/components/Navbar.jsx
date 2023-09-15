import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useNavigate} from 'react-router-dom'
import { useAuth } from '../AuthContext';

const Navbar = () => {
  const {state,dispatch} = useAuth()
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate()
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

  const logout=async()=>{
    dispatch({ type: 'LOGOUT' });
    const res = await fetch('/logout',{
      method:'GET',
      headers:{
        Accept:'application/json',
        'Content-Type':'application/json'
      ,
    credentials:'include'}
    });

    const data = await res.json();
    if(res.status === 200){
      console.log("cookie clear")
    }
    localStorage.removeItem('email');
  navigate('/login');
  }

  return (
    <div>
      {state.isAuthenticated===false?
      (<nav className="bg-darker p-4">
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

          <Link to="/" className="text-white font-sans hover:text-red-500">
            Home
            <span className="text-white font-sans text-lg ml-4">|</span>
          </Link>
          <Link to="/about" className="text-white font-sans hover:text-red-500">
            About
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
          {/* <Link to="/upload" className="text-white font-sans hover:text-red-500">
            Upload
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link> 
          
           <Link to="/input" className="text-white font-sans hover:text-red-500">
            Input
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link> */}
          <button className="bg-red-700 text-white font-sans hover:bg-dark hover:text-white px-4 py-0.6 rounded-lg" onClick={(e) => {navigate('/signup')}}>Signup</button>
          <button className="bg-red-700 text-white font-sans hover:bg-dark hover:text-white px-4 py-0.6 rounded-lg" onClick={(e) => {navigate('/login')}}>Login</button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-8 bg-darker py-2 px-4 w-32 h-auto rounded-lg shadow-lg">
          <Link to="/" className="block text-white hover:text-red-500  mb-4">
            Home
          </Link>
          
          <Link to="/about" className="block text-white hover:text-red-500 mb-4">
            About
          </Link>
          {/* <Link to="/upload" className="block text-white hover:text-red-500 mb-4">
            Upload
          </Link> */}
          {/* <Link to="/input" className="block text-white hover:text-red-500 mb-4">
            Input
          </Link> */}
          <Link to= "/signup" className="block text-white bg-red-700 hover:bg-dark hover:text-white px-2 py-0.6 rounded-lg mb-2">Signup</Link>
          <Link to= "/login" className="block text-white bg-red-700 hover:bg-dark hover:text-white px-2 py-0.6 rounded-lg mb-2">Login</Link>
        </div>
      )}

    </nav>):<nav className="bg-darker p-4">
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
          <Link to="/" className="text-white font-sans hover:text-red-500">
            Home
            <span className="text-white font-sans text-lg ml-4">|</span>
          </Link>
          <Link to="/about" className="text-white font-sans hover:text-red-500">
            About
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
          <Link to="/upload" className="text-white font-sans hover:text-red-500">
            Upload
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
          <Link to="/input" className="text-white font-sans hover:text-red-500">
            Input
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>

          <Link to="/output" className="text-white font-sans hover:text-red-500">
            Output
            <span className="text-white text-lg font-sans ml-4">|</span>
          </Link>
            <button className="bg-red-700 text-white font-sans hover:bg-dark hover:text-white px-4 py-0.6 rounded-lg" onClick={logout}>Logout</button>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-16 right-8 bg-darker py-2 px-4 w-32 h-auto rounded-lg shadow-lg">
          <Link to="/" className="block text-white hover:text-red-500  mb-4">
            Home
          </Link>
          <Link to="/about" className="block text-white hover:text-red-500 mb-4">
            About
          </Link>
          <Link to="/upload" className="block text-white hover:text-red-500 mb-4">
            Upload
          </Link>
          <Link to="/input" className="block text-white hover:text-red-500 mb-4">
            Input
          </Link>

          <Link to= "/login" className="block text-white bg-red-700 hover:bg-dark hover:text-white px-2 py-0.6 rounded-lg mb-2" onClick={logout}>Logout</Link>

          <Link to="/output" className="block text-white hover:text-red-500 mb-4">
            Output
          </Link>
        </div>
      )}

    </nav>}
    </div>
    
  );
};
export default Navbar;


