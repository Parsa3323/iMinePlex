import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export const MinecraftButton: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary',
  className = '',
  ...props 
}) => {
  const baseStyles = "relative px-8 py-2 text-lg font-minecraft border-2 shadow-[inset_-2px_-4px_0_rgba(0,0,0,0.6)] active:shadow-[inset_-1px_-2px_0_rgba(0,0,0,0.6)] active:translate-y-[2px] cursor-pointer transition-all";
  const variantStyles = {
    primary: "bg-green-500 hover:bg-green-400 border-green-700 text-white",
    secondary: "bg-gray-500 hover:bg-gray-400 border-gray-700 text-white"
  };

  return (
    <button 
      className={`${baseStyles} ${variantStyles[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};