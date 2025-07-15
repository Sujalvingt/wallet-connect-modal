import React, { useState } from 'react';
import WalletModal from './components/Popup vingt/WalletModal.jsx';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex justify-center items-center h-screen bg-[#1E1E1E]">
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-6 py-3 text-base font-medium text-white bg-[#5C5CFF] border-none rounded-lg cursor-pointer transition-all duration-200 flex justify-center items-center hover:bg-[#4A4AFF] active:scale-[0.97]"
      >
        Connect Wallet
      </button>

      <WalletModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;
