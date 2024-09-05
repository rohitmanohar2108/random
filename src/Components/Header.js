import React from 'react';
import { Link } from 'react-router-dom';
import './Header'

const Header = () => {
  return (
    <header className="bg-black text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <ul className="flex space-x-4">
          <li><Link to="/" className="hover:text-gray-400">About</Link></li>
          <li><Link to="/resume" className="hover:text-gray-400">Resume</Link></li>
          <li><Link to="/portfolio" className="hover:text-gray-400">Portfolio</Link></li>
          <li><Link to="/contact" className="hover:text-gray-400">Contact</Link></li>
          <li><Link to="/blog" className="hover:text-gray-400">Blog</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
