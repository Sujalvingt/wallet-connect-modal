import React from 'react';
import WalletLeftPanel from './WalletLeftPanel';

const WalletModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null; 

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-[1000] p-4"
      onClick={onClose}
    >
      <div
        className="flex w-full max-w-[90%] sm:max-w-[380px] md:max-w-[480px] lg:max-w-[680px] h-[440px] bg-[#1A1A1A] rounded-2xl overflow-hidden flex-col lg:flex-row border border-[#333]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left Panel */}
        <div className="bg-[#1A1B23] p-4 flex flex-col text-white w-full lg:w-[35%]">
          <WalletLeftPanel />
        </div>

        {/* Right Panel */}
        <div className="w-full p-6 bg-[#1A1A1A] text-white flex flex-col justify-between relative lg:w-[69%]">
          <button
            className="absolute top-4 right-4 text-[#666] text-2xl cursor-pointer"
            onClick={onClose}
          >
            &times;
          </button>

          <h2 className="mt-16 font-bold text-[34px] mb-3">Available Wallets</h2>

          <div className="flex items-center gap-2 mb-6">
            <input type="checkbox" id="terms" className="accent-[#5C5CFF]" />
            <label htmlFor="terms" className="text-[#999] text-sm">
              I agree to the{' '}
              <a href="#" className="text-[#5C5CFF]">Terms & Conditions</a> and{' '}
              <a href="#" className="text-[#5C5CFF]">Privacy Policy</a>.
            </label>
          </div>

          <div className="grid grid-cols-2 gap-3 mb-6 md:grid-cols-2">
            {[
              { src: '/coinbase.svg', name: 'Coinbase Wallet' },
              { src: '/MetaMask-icon.svg.png', name: 'MetaMask' },
              { src: '/phantom-icon.svg', name: 'Phantom' },
              { src: '/Binance-icon.svg', name: 'Binance' },
            ].map((wallet) => (
              <div
                key={wallet.name}
                className="bg-[#2A2A2A] border border-[#333] rounded-lg p-3 flex items-center gap-3 text-sm cursor-pointer hover:bg-[#333] hover:border-[#444] transition"
              >
                <img src={wallet.src} alt={wallet.name} className="w-[30px] h-[30px]" />
                <span>{wallet.name}</span>
              </div>
            ))}
          </div>

          <button className="w-full bg-[#2A2A2A] border border-[#333] rounded-lg p-3 text-[#999] text-sm flex justify-between items-center">
            <span>Why don't I see my wallet?</span>
            <span className="bg-[#333] rounded-full w-5 h-5 flex items-center justify-center text-[#999]">
              ?
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default WalletModal;
