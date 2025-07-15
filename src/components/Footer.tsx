import React from 'react';
import { Twitter, MessageCircle, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black/20 backdrop-blur-xl border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold font-sora text-white mb-2">
              Solana Launchpad
            </h3>
            <p className="text-gray-400 font-inter">
              Launch your project in minutes
            </p>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </motion.a>
            <motion.a
              href="#"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="p-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </motion.a>
          </div>

          {/* Built on Solana Badge */}
          <div className="text-center md:text-right">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm rounded-full border border-purple-500/30"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm font-medium font-inter text-white">Built on Solana</span>
            </motion.div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-gray-400 font-inter text-sm">
            © 2024 Solana Launchpad. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;