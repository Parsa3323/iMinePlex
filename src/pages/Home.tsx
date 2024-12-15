import React, { useState } from 'react';
import { MinecraftButton } from '../components/MinecraftButton';
import { Modal } from '../components/Modal';
import { Users, Gamepad2 } from 'lucide-react';

export const Home: React.FC = () => {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegisterOpen, setIsRegisterOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1607988795691-3d0147b43231?auto=format&fit=crop&q=80')] bg-cover bg-center">
      <div className="min-h-screen bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
        <h1 className="text-6xl font-minecraft text-white mb-8 text-center">MineOplex</h1>
        <p className="text-xl text-white mb-12 max-w-2xl text-center font-minecraft">
          Join the ultimate Minecraft experience with custom games, amazing community, and endless adventures!
        </p>
        
        <div className="flex gap-4 flex-wrap justify-center">
          <MinecraftButton onClick={() => setIsLoginOpen(true)}>
            <span className="flex items-center gap-2">
              <Users size={20} />
              Login
            </span>
          </MinecraftButton>
          <MinecraftButton variant="secondary" onClick={() => setIsRegisterOpen(true)}>
            <span className="flex items-center gap-2">
              <Gamepad2 size={20} />
              Register
            </span>
          </MinecraftButton>
        </div>

        <Modal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} title="Login">
          <form className="space-y-4">
            <div>
              <label className="block font-minecraft mb-2">Username</label>
              <input 
                type="text"
                className="w-full p-2 border-2 border-gray-700 bg-white font-minecraft"
              />
            </div>
            <div>
              <label className="block font-minecraft mb-2">Password</label>
              <input 
                type="password"
                className="w-full p-2 border-2 border-gray-700 bg-white font-minecraft"
              />
            </div>
            <MinecraftButton className="w-full">Login</MinecraftButton>
          </form>
        </Modal>

        <Modal isOpen={isRegisterOpen} onClose={() => setIsRegisterOpen(false)} title="Register">
          <form className="space-y-4">
            <div>
              <label className="block font-minecraft mb-2">Username</label>
              <input 
                type="text"
                className="w-full p-2 border-2 border-gray-700 bg-white font-minecraft"
              />
            </div>
            <div>
              <label className="block font-minecraft mb-2">Email</label>
              <input 
                type="email"
                className="w-full p-2 border-2 border-gray-700 bg-white font-minecraft"
              />
            </div>
            <div>
              <label className="block font-minecraft mb-2">Password</label>
              <input 
                type="password"
                className="w-full p-2 border-2 border-gray-700 bg-white font-minecraft"
              />
            </div>
            <MinecraftButton className="w-full">Register</MinecraftButton>
          </form>
        </Modal>
      </div>
    </div>
  );
};