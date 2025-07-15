import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Rocket, Sparkles } from 'lucide-react';

interface StickerProps {
  text: string;
  initialX: number;
  initialY: number;
  id: string;
}

const MovableSticker: React.FC<StickerProps> = ({ text, initialX, initialY, id }) => {
  const [position, setPosition] = useState({ x: initialX, y: initialY });
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    const rect = e.currentTarget.getBoundingClientRect();
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (isDragging) {
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDragging, dragOffset]);

  return (
    <div
      className={`absolute select-none cursor-move z-10 px-3 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-lg border border-cyan-400/30 text-cyan-300 font-mono text-sm transition-all duration-200 hover:scale-110 hover:shadow-lg hover:shadow-cyan-500/25 ${isDragging ? 'scale-110 shadow-lg shadow-cyan-500/50' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        transform: isDragging ? 'rotate(5deg)' : 'rotate(0deg)'
      }}
      onMouseDown={handleMouseDown}
      data-id={id}
    >
      {text}
    </div>
  );
};

const LandingPage: React.FC = () => {
  const stickers = [
    { text: "Doge Smiling", x: 120, y: 200, id: "doge" },
    { text: "Rocket", x: window.innerWidth - 200, y: 250, id: "rocket" },
    { text: "Gojo hollow purple", x: 80, y: 400, id: "gojo" },
    { text: "random pikachu", x: window.innerWidth - 250, y: 450, id: "pikachu" },
    { text: "Pepe Crying Emoji", x: window.innerWidth / 2 - 100, y: 550, id: "pepe" },
  ];

  return (
    <div className="min-h-screen bg-black overflow-hidden relative">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-pulse"></div>
      
      {/* Noise texture overlay */}
      <div className="absolute inset-0 opacity-5 bg-[url('data:image/svg+xml,%3Csvg%20viewBox=%220%200%20256%20256%22%20xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter%20id=%22noiseFilter%22%3E%3CfeTurbulence%20type=%22fractalNoise%22%20baseFrequency=%220.9%22%20numOctaves=%224%22%20stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect%20width=%22100%25%22%20height=%22100%25%22%20filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')]"></div>

      {/* Navigation */}
      <nav className="relative z-20 flex items-center justify-between px-8 py-6">
        <div className="flex items-center space-x-4">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center">
            <Rocket className="w-5 h-5 text-black" />
          </div>
        </div>
        
        <h1 className="text-2xl font-bold text-white italic">
          ngmi Launchpad
        </h1>
        
        <div className="flex items-center space-x-6">
          <Link 
            to="/launchpad" 
            className="text-cyan-300 hover:text-cyan-100 transition-colors duration-200 font-semibold"
          >
            Launchpad
          </Link>
          <div className="mt-4">
            <WalletMultiButton className="!bg-gradient-to-r !from-cyan-500 !to-purple-600 !border-none !rounded-lg !px-6 !py-3 !text-white !font-semibold !transition-all !duration-300 hover:!scale-105 hover:!shadow-lg hover:!shadow-cyan-500/25" />
          </div>
        </div>
      </nav>

      {/* Movable stickers */}
      {stickers.map((sticker) => (
        <MovableSticker
          key={sticker.id}
          text={sticker.text}
          initialX={sticker.x}
          initialY={sticker.y}
          id={sticker.id}
        />
      ))}

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8 text-center">
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gray-300 drop-shadow-2xl relative">
            Just launch it bruh
          </h1>
          <div className="absolute inset-0 text-6xl md:text-8xl font-bold blur-lg opacity-50">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-green-500 to-blue-500 animate-pulse">
              Just launch it bruh
            </span>
          </div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-200 mb-2">
            wagmi!!!!
          </h2>
        </div>

        <p className="text-lg md:text-xl font-bold text-gray-200 mb-12 max-w-2xl">
          A solana token Launchpad
        </p>

        {/* Neon glow effects */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-64 h-64 bg-gradient-to-r from-pink-500/20 to-blue-500/20 rounded-full blur-2xl animate-pulse delay-1000"></div>
        </div>
      </div>

      {/* Connect Wallet Button */}
      <div className="absolute bottom-8 right-8 z-20">
        <WalletMultiButton className="!bg-gradient-to-r !from-cyan-500 !to-purple-600 !border-none !rounded-lg !px-6 !py-3 !text-white !font-semibold !transition-all !duration-300 hover:!scale-105 hover:!shadow-lg hover:!shadow-cyan-500/25" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default LandingPage;