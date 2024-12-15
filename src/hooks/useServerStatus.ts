import { useState, useEffect } from 'react';

interface ServerStatus {
  online: boolean;
  players: {
    online: number;
    max: number;
  };
  error?: string;
}

export const useServerStatus = (host: string, port: number) => {
  const [status, setStatus] = useState<ServerStatus>({
    online: false,
    players: { online: 0, max: 0 }
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        const response = await fetch(`https://api.mcsrvstat.us/3/${host}:${port}`);
        const data = await response.json();
        
        setStatus({
          online: data.online || false,
          players: {
            online: data.players?.online || 0,
            max: data.players?.max || 0
          }
        });
      } catch (error) {
        setStatus({
          online: false,
          players: { online: 0, max: 0 },
          error: 'Failed to fetch server status'
        });
      } finally {
        setLoading(false);
      }
    };

    checkStatus();
    const interval = setInterval(checkStatus, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [host, port]);

  return { status, loading };
};