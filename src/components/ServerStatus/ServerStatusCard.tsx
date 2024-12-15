import React from 'react';
import { Server, Users, Globe } from 'lucide-react';
import { useServerStatus } from '../../hooks/useServerStatus';

const SERVER_IP = 'play.chilshop.ir';
const SERVER_PORT = 29211;

export const ServerStatusCard: React.FC = () => {
  const { status, loading } = useServerStatus(SERVER_IP, SERVER_PORT);

  return (
    <div className="bg-gray-800 border-2 border-gray-700 p-6 rounded-lg shadow-xl">
      <div className="flex items-center gap-4 mb-6 text-green-400">
        <Server className="w-8 h-8" />
        <h2 className="text-2xl font-minecraft">Server Status</h2>
      </div>
      
      <div className="space-y-4">
        {loading ? (
          <div className="text-center py-4">
            <div className="animate-spin w-8 h-8 border-4 border-green-400 border-t-transparent rounded-full mx-auto"></div>
          </div>
        ) : (
          <>
            <StatusItem 
              icon={<Users className="w-5 h-5" />}
              label="Players Online"
              value={`${status.players.online}/${status.players.max}`}
              status={status.players.online > 0 ? 'success' : 'warning'}
            />
            
            <StatusItem 
              icon={<Globe className="w-5 h-5" />}
              label="Server Status"
              value={status.online ? 'Online' : 'Offline'}
              status={status.online ? 'success' : 'error'}
            />
            
            <div className="flex justify-between items-center bg-gray-700 p-4 rounded">
              <span className="font-minecraft text-gray-300 flex items-center gap-2">
                <Server className="w-5 h-5" />
                Server IP
              </span>
              <span className="font-minecraft text-green-400">{SERVER_IP}:{SERVER_PORT}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

interface StatusItemProps {
  icon: React.ReactNode;
  label: string;
  value: string;
  status: 'success' | 'warning' | 'error';
}

const StatusItem: React.FC<StatusItemProps> = ({ icon, label, value, status }) => {
  const statusColors = {
    success: 'text-green-400',
    warning: 'text-yellow-400',
    error: 'text-red-400'
  };

  return (
    <div className="flex justify-between items-center bg-gray-700 p-4 rounded">
      <span className="font-minecraft text-gray-300 flex items-center gap-2">
        {icon}
        {label}
      </span>
      <span className={`font-minecraft ${statusColors[status]}`}>{value}</span>
    </div>
  );
};