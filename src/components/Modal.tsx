import React from 'react';
import { X } from 'lucide-react';
import { MinecraftButton } from './MinecraftButton';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-[#C6C6C6] border-4 border-[#373737] p-4 max-w-md w-full mx-4 relative">
        <div className="bg-[#C6C6C6] border-b-4 border-[#373737] mb-4 pb-2 flex justify-between items-center">
          <h2 className="text-xl font-minecraft text-[#373737]">{title}</h2>
          <button onClick={onClose} className="hover:text-gray-700">
            <X size={24} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};