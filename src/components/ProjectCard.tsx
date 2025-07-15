import React from 'react';
import { motion } from 'framer-motion';
import { Clock, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    id: string;
    name: string;
    description: string;
    logo: string;
    launchTime: string;
    type: 'NFT' | 'Token';
    countdown: string;
  };
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 overflow-hidden"
    >
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <div className="relative p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
              <img 
                src={project.logo} 
                alt={project.name}
                className="w-8 h-8 rounded-lg"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling!.classList.remove('hidden');
                }}
              />
              <div className="hidden w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">
                  {project.name.charAt(0)}
                </span>
              </div>
            </div>
            <div>
              <h3 className="font-sora font-semibold text-white text-lg">
                {project.name}
              </h3>
              <span className={`inline-flex px-2 py-1 rounded-full text-xs font-medium ${
                project.type === 'NFT' 
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30' 
                  : 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/30'
              }`}>
                {project.type}
              </span>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 font-inter text-sm mb-4 line-clamp-2">
          {project.description}
        </p>

        {/* Countdown */}
        <div className="flex items-center space-x-2 mb-6">
          <Clock className="w-4 h-4 text-purple-400" />
          <span className="text-purple-300 font-inter font-medium text-sm">
            {project.countdown}
          </span>
        </div>

        {/* View Details Button */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-xl py-3 px-4 text-white font-inter font-medium hover:from-purple-500/30 hover:to-cyan-500/30 transition-all duration-300 flex items-center justify-center space-x-2 group"
        >
          <span>View Details</span>
          <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProjectCard;