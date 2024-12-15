import React from 'react';
import { Server } from 'lucide-react';

export const ServerStatus: React.FC = () => {
  return (
    <div className="bg-[#C6C6C6] border-4 border-[#373737] p-6 rounded-lg">
      <div className="flex items-center gap-4 mb-6">
        <Server className="w-8 h-8" />
        <h2 className="text-2xl font-minecraft">Server Status</h2>
      </div>
      
      <div className="space-y-4">
        <div className="flex justify-between items-center bg-[#8B8B8B] p-4 rounded">
          <span className="font-minecraft">Players Online</span>
          <span className="font-minecraft text-green-500">42/100</span>
        </div>
        
        <div className="flex justify-between items-center bg-[#8B8B8B] p-4 rounded">
          <span className="font-minecraft">Server Status</span>
          <span className="font-minecraft text-green-500">Online</span>
        </div>
        
        <div className="flex justify-between items-center bg-[#8B8B8B] p-4 rounded">
          <span className="font-minecraft">Server IP</span>
          <span className="font-minecraft">play.mineoplex.com</span>
        </div>
      </div>
    </div>
  );
};