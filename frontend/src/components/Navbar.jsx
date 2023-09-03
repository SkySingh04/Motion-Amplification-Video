// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-blue-500 py-4">
      <ul className="flex space-x-4">
        <li><Link to="/" className="text-white">Home</Link></li>
        <li><Link to="/dashboard" className="text-white">Dashboard</Link></li>
        <li><Link to="/output" className="text-white">Output</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
