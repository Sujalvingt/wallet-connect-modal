import React from 'react';

const WalletLeftPanel = () => {
  return (
    <div className="text-white flex flex-col h-full ">
      {/* Top Content */}
      <div className="flex-grow">
        <div className="flex items-center gap-2 mb-6">
          <img src="/VingtLogo.png" alt="logo" className="w-14 h-14 object-contain" />
          <span className="font-bold text-[25px]">Vingt.io</span>
        </div>

        <h2 className="text-2xl font-semibold mb-3 whitespace-nowrap">Connect your wallet</h2>
        <p className="text-sm leading-6 text-slate-300 mb-4">
          Connecting your wallet is like “logging in” to Vingt.io. Select your wallet from the options to get started.
        </p>
        <a href="#" className="text-sm text-indigo-500 cursor-pointer inline-flex items-center gap-1">
          I don't have a wallet ℹ️
        </a>
      </div>

      {/* Bottom Footer */}
      <div className="flex flex-col items-center gap-2 mt-auto pt-4">
        <div className="flex gap-2">
          <button className="w-2 h-2 bg-indigo-500 rounded-full" />
          <button className="w-2 h-2 bg-gray-600 rounded-full" />
          <button className="w-2 h-2 bg-gray-600 rounded-full" />
        </div>

        <div className="flex items-center gap-1.5 text-xs text-gray-400">
          powered by
          <img src="/VingtLogo.png" alt="logo" className="w-[30px] h-10 object-contain" />
          <span className="font-medium text-white text-base">Vingt.io</span>
        </div>
      </div>
    </div>
  );
};

export default WalletLeftPanel;
