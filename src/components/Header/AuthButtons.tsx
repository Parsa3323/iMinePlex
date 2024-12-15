import React from 'react';
import { Users, UserPlus } from 'lucide-react';
import { MinecraftButton } from '../UI/MinecraftButton';

interface AuthButtonsProps {
  onLogin: () => void;
  onRegister: () => void;
}

export const AuthButtons: React.FC<AuthButtonsProps> = ({ onLogin, onRegister }) => {
  return (
    <div className="flex gap-2">
      <MinecraftButton 
        variant="primary" 
        onClick={onLogin}
        className="text-sm px-4 py-1"
      >
        <span className="flex items-center gap-1">
          <Users size={16} />
          Login
        </span>
      </MinecraftButton>
      <MinecraftButton 
        variant="secondary" 
        onClick={onRegister}
        className="text-sm px-4 py-1"
      >
        <span className="flex items-center gap-1">
          <UserPlus size={16} />
          Register
        </span>
      </MinecraftButton>
    </div>
  );
};