'use client'
import React from 'react';
import { Link } from 'react-router-dom';

const FloatingActionButton: React.FC = () => {
  return (
    <Link to="/contact" className="fixed bottom-4 right-4 group">
      <div className="relative w-14 h-14 bg-blue-500 rounded-full shadow-lg flex items-center justify-center">
        <div className="absolute w-6 h-1 bg-white transition-transform ease-in-out duration-300 group-hover:rotate-45"></div>
        <div className="absolute w-6 h-1 bg-white transition-transform ease-in-out duration-300 group-hover:-rotate-45"></div>
      </div>
    </Link>
  );
};

export default FloatingActionButton;