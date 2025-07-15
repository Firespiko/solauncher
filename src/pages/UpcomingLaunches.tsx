import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { Rocket, ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import Footer from '../components/Footer';

const UpcomingLaunches: React.FC = () => {
  // Mock data for upcoming projects
  const upcomingProjects = [
    {
      id: '1',
      name: 'Cyber Punks',
      description: 'A collection of 10,000 unique cyberpunk-themed NFTs with utility in the metaverse.',
      logo: 'https://images.pexels.com/photos/8566473/pexels-photo-8566473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-01-15T18:00:00Z',
      type: 'NFT' as const,
      countdown: 'Launches in 2 days'
    },
    {
      id: '2',
      name: 'SolToken',
      description: 'Revolutionary DeFi token with staking rewards and governance features.',
      logo: 'https://images.pexels.com/photos/844124/pexels-photo-844124.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-01-20T15:00:00Z',
      type: 'Token' as const,
      countdown: 'Launches in 5 days'
    },
    {
      id: '3',
      name: 'Space Warriors',
      description: 'Epic space-themed NFT collection with play-to-earn gaming integration.',
      logo: 'https://images.pexels.com/photos/2159/flight-sky-earth-space.jpg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-01-25T12:00:00Z',
      type: 'NFT' as const,
      countdown: 'Launches in 1 week'
    },
    {
      id: '4',
      name: 'DeFi Coin',
      description: 'Next-generation DeFi token with automated yield farming capabilities.',
      logo: 'https://images.pexels.com/photos/730547/pexels-photo-730547.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-02-01T09:00:00Z',
      type: 'Token' as const,
      countdown: 'Launches in 2 weeks'
    },
    {
      id: '5',
      name: 'Digital Art',
      description: 'Curated collection of digital art pieces from renowned artists worldwide.',
      logo: 'https://images.pexels.com/photos/1183992/pexels-photo-1183992.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-02-05T16:00:00Z',
      type: 'NFT' as const,
      countdown: 'Launches in 3 weeks'
    },
    {
      id: '6',
      name: 'GameFi Token',
      description: 'Gaming-focused token powering the next generation of blockchain games.',
      logo: 'https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=1',
      launchTime: '2024-02-10T14:00:00Z',
      type: 'Token' as const,
      countdown: 'Launches in 1 month'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 font-sora">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
      </div>

      {/* Navigation */}
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
              <Link to="/upcoming" className="text-purple-400 font-inter font-semibold">
                Upcoming
              </Link>
              <Link to="/apply" className="text-gray-300 hover:text-white transition-colors font-inter">
                Apply
              </Link>
              <Link to="/launchpad" className="text-gray-300 hover:text-white transition-colors font-inter">
                Create Token
              </Link>
            </div>

            <WalletMultiButton className="!bg-gradient-to-r !from-purple-500 !to-cyan-500 !border-none !rounded-xl !px-6 !py-3 !text-white !font-semibold !transition-all !duration-300 hover:!scale-105" />
          </div>
        </div>
      </nav>

      {/* Header */}
      <section className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Upcoming{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Launches
              </span>
            </h1>
            <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
              Discover the next generation of Solana projects launching soon
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative z-10 py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {upcomingProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UpcomingLaunches;