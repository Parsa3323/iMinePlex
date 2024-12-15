import React from 'react';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ currentPage, onPageChange }) => {
  return (
    <div className="space-x-4">
      <button 
        onClick={() => onPageChange('home')}
        className={`font-minecraft text-gray-300 hover:text-green-400 transition-colors ${
          currentPage === 'home' ? 'text-green-400' : ''
        }`}
      >
        Home
      </button>
      <button 
        onClick={() => onPageChange('status')}
        className={`font-minecraft text-gray-300 hover:text-green-400 transition-colors ${
          currentPage === 'status' ? 'text-green-400' : ''
        }`}
      >
        Server Status
      </button>
    </div>
  );
};