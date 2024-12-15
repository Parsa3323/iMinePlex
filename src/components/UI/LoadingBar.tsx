import React from 'react';

interface LoadingBarProps {
  isLoading: boolean;
}

export const LoadingBar: React.FC<LoadingBarProps> = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-2 bg-gray-800">
      <div className="h-full bg-green-500 animate-loading-bar"></div>
    </div>
  );
};