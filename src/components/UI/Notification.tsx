import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  type?: 'success' | 'error';
  onClose: () => void;
}

export const Notification: React.FC<NotificationProps> = ({ 
  message, 
  type = 'success',
  onClose 
}) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300);
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const bgColor = type === 'success' ? 'bg-green-500' : 'bg-red-500';

  return (
    <div className={`fixed top-4 right-4 transition-all duration-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
      <div className={`${bgColor} text-white px-4 py-2 rounded font-minecraft shadow-lg border-2 border-black`}>
        {message}
      </div>
    </div>
  );
};