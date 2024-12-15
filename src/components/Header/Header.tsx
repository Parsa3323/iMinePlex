import React from 'react';
import { Navigation } from './Navigation';
import { AuthButtons } from './AuthButtons';

interface HeaderProps {
  currentPage: string;
  onPageChange: (page: string) => void;
  onLogin: () => void;
  onRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onPageChange,
  onLogin,
  onRegister
}) => {
  return (
    <nav className="bg-gray-900 border-b border-gray-800 p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-8">
          <span className="text-green-400 font-minecraft text-xl">ChilShop</span>
          <Navigation currentPage={currentPage} onPageChange={onPageChange} />
        </div>
        <AuthButtons onLogin={onLogin} onRegister={onRegister} />
      </div>
    </nav>
  );
};