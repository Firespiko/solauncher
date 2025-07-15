import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAccount, useConnect } from 'wagmi';
import { ArrowLeft, Upload, Snowflake, Coins, Edit3, ChevronDown, ChevronUp, Rocket } from 'lucide-react';

const LaunchpadPage: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const [formData, setFormData] = useState({
    name: '',
    symbol: '',
    decimals: 6,
    supply: 1,
    description: '',
    image: null as File | null
  });

  const [socialLinks, setSocialLinks] = useState(false);
  const [revokeOptions, setRevokeOptions] = useState({
    freeze: false,
    mint: false,
    update: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'decimals' || name === 'supply' ? Number(value) : value
    }));
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFormData(prev => ({ ...prev, image: file }));
    }
  };

  const handleRevokeChange = (option: keyof typeof revokeOptions) => {
    setRevokeOptions(prev => ({
      ...prev,
      [option]: !prev[option]
    }));
  };

  const handleConnect = () => {
    if (connectors.length > 0) {
      connect({ connector: connectors[0] });
    }
  };

  const handleMintToken = () => {
    if (!isConnected) {
      handleConnect();
      return;
    }
    // Token minting logic here
    console.log('Minting token with data:', formData);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 font-sora">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Top left circular gradient */}
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl animate-pulse-slow"></div>
        
        {/* Top right circular gradient */}
        <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-500/12 rounded-full blur-3xl animate-pulse-slow delay-500"></div>
        
        {/* Bottom left circular gradient */}
        <div className="absolute -bottom-32 -left-20 w-72 h-72 bg-purple-500/8 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        
        {/* Bottom right circular gradient */}
        <div className="absolute -bottom-20 -right-32 w-88 h-88 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1500"></div>
        
        {/* Center subtle glow */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Header */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                <ArrowLeft className="w-6 h-6" />
              </Link>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold text-white">Solana Launchpad</span>
              </div>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/upcoming" className="text-gray-300 hover:text-white transition-colors font-inter">
                Upcoming
              </Link>
              <Link to="/apply" className="text-gray-300 hover:text-white transition-colors font-inter">
                Apply
              </Link>
              <Link to="/launchpad" className="text-purple-400 font-inter font-semibold">
                Create Token
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {isConnected ? (
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-4 py-2">
                  <span className="text-white font-inter text-sm">
                    {address?.slice(0, 6)}...{address?.slice(-4)}
                  </span>
                </div>
              ) : (
                <button
                  onClick={handleConnect}
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 border-none rounded-xl px-6 py-3 text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  Connect Wallet
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-8">
        <div className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 shadow-2xl">
          <div className="p-8">
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Create Your Token</h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column */}
              <div className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Ex: Solana"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all font-inter"
                  />
                  <p className="text-gray-300 text-xs mt-1 font-inter">Max 32 characters in your name</p>
                </div>

                {/* Symbol */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Symbol
                  </label>
                  <input
                    type="text"
                    name="symbol"
                    value={formData.symbol}
                    onChange={handleInputChange}
                    placeholder="Ex: SOL"
                    className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all font-inter"
                  />
                  <p className="text-gray-300 text-xs mt-1 font-inter">Max 8 characters in your symbol</p>
                </div>

                {/* Decimals */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Decimals
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="decimals"
                      value={formData.decimals}
                      onChange={handleInputChange}
                      min="0"
                      max="9"
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all font-inter"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button type="button" className="text-gray-300 hover:text-white">
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button type="button" className="text-gray-300 hover:text-white">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs mt-1 font-inter">Most tokens use 6 decimals</p>
                </div>

                {/* Supply */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Supply
                  </label>
                  <div className="relative">
                    <input
                      type="number"
                      name="supply"
                      value={formData.supply}
                      onChange={handleInputChange}
                      min="1"
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all font-inter"
                    />
                    <div className="absolute right-3 top-1/2 transform -translate-y-1/2 flex flex-col">
                      <button type="button" className="text-gray-300 hover:text-white">
                        <ChevronUp className="w-4 h-4" />
                      </button>
                      <button type="button" className="text-gray-300 hover:text-white">
                        <ChevronDown className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <p className="text-gray-300 text-xs mt-1 font-inter">Most tokens use 1B supply</p>
                </div>

                {/* Description */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Description
                  </label>
                  <div className="relative">
                    <textarea
                      name="description"
                      value={formData.description}
                      onChange={handleInputChange}
                      placeholder="Ex: First community token on Solana."
                      rows={4}
                      className="w-full px-4 py-3 bg-white/5 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 focus:outline-none transition-all resize-none font-inter"
                    />
                    <div className="absolute bottom-2 right-2 text-xs text-gray-400 font-inter">
                      {formData.description.length}/500
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-6">
                {/* Image Upload */}
                <div>
                  <label className="block text-white text-sm font-medium mb-2 font-inter">
                    * Image
                  </label>
                  <label className="block border-2 border-dashed border-white/20 rounded-xl p-12 text-center hover:border-purple-500/50 transition-colors cursor-pointer bg-white/5 backdrop-blur-sm">
                    <Upload className="w-8 h-8 text-gray-300 mx-auto mb-4" />
                    <p className="text-white font-medium font-inter">Drag and drop here to upload</p>
                    <p className="text-gray-300 text-sm mt-1 font-inter">.png, .jpg 1000x1000 px</p>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Social Links Toggle */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-medium font-inter">Add Social Links & Tags</h3>
                  <p className="text-gray-300 text-sm font-inter">Add links to your token metadata.</p>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={socialLinks}
                    onChange={(e) => setSocialLinks(e.target.checked)}
                    className="sr-only"
                  />
                  <div className={`w-11 h-6 rounded-full transition-colors ${socialLinks ? 'bg-purple-500' : 'bg-white/20'}`}>
                    <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform ${socialLinks ? 'translate-x-5' : 'translate-x-0'} mt-0.5 ml-0.5`}></div>
                  </div>
                </label>
              </div>
            </div>

            {/* Revoke Authorities */}
            <div className="mt-8 border-t border-white/10 pt-6">
              <h3 className="text-white font-medium mb-2 font-inter">Revoke Authorities</h3>
              <p className="text-gray-300 text-sm mb-6 font-inter">
                Solana Token has 3 authorities: Freeze Authority, Mint Authority, and Update Authority. Revoke them to attract more investors.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Revoke Freeze */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Snowflake className="w-5 h-5 text-blue-400" />
                    <span className="font-medium text-white font-inter">Revoke Freeze</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 font-inter">
                    No one will be able to freeze token accounts anymore
                  </p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={revokeOptions.freeze}
                      onChange={() => handleRevokeChange('freeze')}
                      className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-xs text-gray-300 font-inter">+0.1 SOL</span>
                  </label>
                </div>

                {/* Revoke Mint */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Coins className="w-5 h-5 text-yellow-400" />
                    <span className="font-medium text-white font-inter">Revoke Mint</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 font-inter">
                    No one will be able to create more tokens anymore
                  </p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={revokeOptions.mint}
                      onChange={() => handleRevokeChange('mint')}
                      className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-xs text-gray-300 font-inter">+0.1 SOL</span>
                  </label>
                </div>

                {/* Revoke Update */}
                <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10">
                  <div className="flex items-center space-x-2 mb-2">
                    <Edit3 className="w-5 h-5 text-purple-400" />
                    <span className="font-medium text-white font-inter">Revoke Update</span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 font-inter">
                    No one will be able to modify token metadata anymore
                  </p>
                  <label className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      checked={revokeOptions.update}
                      onChange={() => handleRevokeChange('update')}
                      className="w-4 h-4 text-purple-500 bg-white/10 border-white/20 rounded focus:ring-purple-500 focus:ring-2"
                    />
                    <span className="text-xs text-gray-300 font-inter">+0.1 SOL</span>
                  </label>
                </div>
              </div>
            </div>

            {/* Mint Token Button */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button 
                onClick={handleMintToken}
                className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 border-none rounded-xl py-4 text-lg font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 text-white font-inter"
              >
                {isConnected ? 'Mint Token' : 'Connect Wallet to Mint'}
              </button>
            </div>

            {/* Total Fees */}
            <div className="mt-4 text-center">
              <p className="text-gray-300 font-inter">
                Total Fees: <span className="text-white font-semibold">0.3 SOL</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaunchpadPage;