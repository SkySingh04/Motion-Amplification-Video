import React from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
  return (
    <nav className="bg-dark p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-black font-bold text-2xl">Your Logo</Link>
        <div className="lg:hidden">
          {/* Mobile Menu Button */}
          <button
            className="text-black hover:text-gray-300 focus:outline-none focus:text-gray-300"
            onClick={() => alert("Toggle mobile menu here")}
          >
            ☰
          </button>
        </div>
        <div className="hidden lg:block space-x-4">
          <Link to="/" className="text-black">Home</Link>
          <Link to="/dashboard" className="text-black">Dashboard</Link>
          <Link to="/about" className="text-black">About</Link>
          <Link to="/login" className="text-black">Login</Link>
          <Link to="/signup" className="text-black">Signup</Link>
          <button className="bg-red-500 text-black px-4 py-2 rounded">Sign Out</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;