import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import { 
  Rocket, 
  Zap, 
  Shield, 
  Droplets, 
  BarChart3, 
  Lock, 
  Globe,
  ArrowRight,
  Star,
  Users,
  TrendingUp
} from 'lucide-react';
import Footer from '../components/Footer';

const NewLandingPage: React.FC = () => {
  const [heroRef, heroInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [featuresRef, featuresInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [statsRef, statsInView] = useInView({ threshold: 0.1, triggerOnce: true });
  const [ctaRef, ctaInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const features = [
    {
      icon: Zap,
      title: "Lightning Fast Deployment",
      description: "Deploy your tokens and NFTs in under 60 seconds with our optimized Solana infrastructure"
    },
    {
      icon: Shield,
      title: "Bank-Grade Security",
      description: "Multi-signature wallets, audited smart contracts, and enterprise-level security protocols"
    },
    {
      icon: Droplets,
      title: "Liquidity Pool Creator",
      description: "Create and manage liquidity pools with automated market making - Coming Soon!",
      badge: "Coming Soon"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Real-time tracking, holder analytics, and comprehensive project insights dashboard"
    },
    {
      icon: Lock,
      title: "Token Vesting & Locks",
      description: "Built-in vesting schedules and token locks to build investor confidence"
    },
    {
      icon: Globe,
      title: "Global Distribution",
      description: "Worldwide accessibility with multi-language support and global payment methods"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Launched" },
    { number: "$50M+", label: "Total Volume" },
    { number: "100K+", label: "Active Users" },
    { number: "99.9%", label: "Uptime" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 font-sora">
      {/* Background Effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-purple-500/5 to-cyan-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Navigation */}
      <nav className="relative z-50 bg-black/20 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-xl flex items-center justify-center">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-white">Solana Launchpad</span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <Link to="/upcoming" className="text-gray-300 hover:text-white transition-colors font-inter">
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

      {/* Hero Section */}
      <section ref={heroRef} className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Launch your Solana Project{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                in Minutes
              </span>
            </h1>
            
            {/* Prominent Security & Speed Message */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 px-8 py-4 shadow-2xl">
                <p className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-400 to-red-400">
                  The Fastest & Most Secure Collections
                </p>
                <p className="text-lg text-gray-300 mt-2 font-inter">
                  Deploy in under 60 seconds with enterprise-grade security
                </p>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 font-inter mb-12 max-w-3xl mx-auto"
            >
              The most advanced platform to launch NFT collections, tokens, and liquidity pools on Solana
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link
                to="/apply"
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Apply for Launch</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              
              <Link
                to="/upcoming"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300"
              >
                View Upcoming
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section ref={statsRef} className="relative z-10 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={statsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={statsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6"
              >
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 font-inter">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section ref={featuresRef} className="relative z-10 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={featuresInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Features
              </span>
            </h2>
            <p className="text-xl text-gray-300 font-inter max-w-2xl mx-auto">
              Everything you need to launch and manage successful Solana projects
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={featuresInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group relative bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-purple-500/30 transition-all duration-300"
              >
                {feature.badge && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-500 to-red-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                    {feature.badge}
                  </div>
                )}
                
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-8 h-8 text-purple-400 group-hover:text-cyan-400 transition-colors duration-300" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-cyan-400 transition-all duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-300 font-inter leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section ref={ctaRef} className="relative z-10 py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 p-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">
                Launch?
              </span>
            </h2>
            
            <p className="text-xl text-gray-300 font-inter mb-8 max-w-2xl mx-auto">
              Join hundreds of successful projects that have launched on our platform
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/apply"
                className="group bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center space-x-2"
              >
                <span>Apply Now</span>
                <Star className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </Link>
              
              <Link
                to="/launchpad"
                className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/20 transition-all duration-300 flex items-center space-x-2"
              >
                <Rocket className="w-5 h-5" />
                <span>Create Token</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewLandingPage;