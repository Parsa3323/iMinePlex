import React, { useState } from 'react';
import { Header } from './components/Header/Header';
import { Home } from './pages/Home';
import { ServerStatusCard } from './components/ServerStatus/ServerStatusCard';
import { LoadingBar } from './components/UI/LoadingBar';
import { Notification } from './components/UI/Notification';
import { Modal } from './components/UI/Modal';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<{message: string, type: 'success' | 'error'} | null>(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  const changePage = (page: string) => {
    setIsLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <LoadingBar isLoading={isLoading} />
      
      <Header 
        currentPage={currentPage}
        onPageChange={changePage}
        onLogin={() => setIsLoginOpen(true)}
        onRegister={() => setIsRegisterOpen(true)}
      />

      {currentPage === 'home' && <Home />}
      {currentPage === 'status' && (
        <div className="container mx-auto py-12 px-4">
          <ServerStatusCard />
        </div>
      )}

      <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Login">
        <form className="space-y-4">
          <div>
            <label className="block font-minecraft mb-2 text-gray-300">Username</label>
            <input 
              type="text"
              className="w-full p-2 border-2 border-gray-700 bg-gray-800 text-white font-minecraft focus:border-green-400 focus:outline-none rounded"
            />
          </div>
          <div>
            <label className="block font-minecraft mb-2 text-gray-300">Password</label>
            <input 
              type="password"
              className="w-full p-2 border-2 border-gray-700 bg-gray-800 text-white font-minecraft focus:border-green-400 focus:outline-none rounded"
            />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-400 text-white font-minecraft py-2 rounded transition-colors">
            Login
          </button>
        </form>
      </Modal>

      <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} title="Register">
        <form className="space-y-4">
          <div>
            <label className="block font-minecraft mb-2 text-gray-300">Username</label>
            <input 
              type="text"
              className="w-full p-2 border-2 border-gray-700 bg-gray-800 text-white font-minecraft focus:border-green-400 focus:outline-none rounded"
            />
          </div>
          <div>
            <label className="block font-minecraft mb-2 text-gray-300">Email</label>
            <input 
              type="email"
              className="w-full p-2 border-2 border-gray-700 bg-gray-800 text-white font-minecraft focus:border-green-400 focus:outline-none rounded"
            />
          </div>
          <div>
            <label className="block font-minecraft mb-2 text-gray-300">Password</label>
            <input 
              type="password"
              className="w-full p-2 border-2 border-gray-700 bg-gray-800 text-white font-minecraft focus:border-green-400 focus:outline-none rounded"
            />
          </div>
          <button className="w-full bg-green-500 hover:bg-green-400 text-white font-minecraft py-2 rounded transition-colors">
            Register
          </button>
        </form>
      </Modal>

      {notification && (
        <Notification 
          message={notification.message}
          type={notification.type}
          onClose={() => setNotification(null)}
        />
      )}
    </div>
  );
}

export default App;