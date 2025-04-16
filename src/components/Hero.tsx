
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedBackground from './AnimatedBackground';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden bg-gradient-to-br from-gray-900 via-and-navy to-gray-900">
      <AnimatedBackground />
      
      {/* Enhanced gradient overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,118,128,0.25),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,51,0.2),transparent_50%)]"></div>
      
      {/* Grid pattern with improved opacity */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4xKSIgc3Ryb2tlLXdpZHRoPSIwLjUiLz48L3N2Zz4=')] opacity-30"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h1 
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('hero.title')}
            <motion.span 
              className="gradient-text block mt-4 bg-gradient-to-r from-and-blue via-and-orange to-and-yellow"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              {t('hero.subtitle')}
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            {t('hero.description')}
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <motion.a 
              href="#contact" 
              className="btn bg-gradient-to-r from-and-blue to-and-blue/80 hover:from-and-blue/90 hover:to-and-blue text-white py-4 px-8 rounded-full text-lg font-medium transform transition-all duration-300 hover:scale-105 hover:shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.getQuote')}
            </motion.a>
            <motion.a 
              href="#portfolio" 
              className="btn backdrop-blur-sm bg-white/10 border border-white/20 text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-white/20 transform transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {t('hero.viewPortfolio')}
            </motion.a>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 text-white/70 flex flex-col items-center cursor-pointer hover:text-white transition-colors duration-300"
        onClick={scrollToServices}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <span className="text-sm mb-2 font-medium">{t('hero.scrollDown')}</span>
        <motion.div
          animate={{ 
            y: [0, 8, 0],
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            repeatType: "loop"
          }}
        >
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>

      {/* Enhanced floating elements */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-24 h-24 rounded-full bg-and-blue/20 blur-2xl"
        animate={{ 
          y: [0, -30, 0], 
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      />
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-32 h-32 rounded-full bg-and-orange/20 blur-2xl"
        animate={{ 
          y: [0, -40, 0], 
          opacity: [0.2, 0.5, 0.2]
        }}
        transition={{ 
          duration: 5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      />
      <motion.div 
        className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-and-yellow/20 blur-2xl"
        animate={{ 
          y: [0, -25, 0], 
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ 
          duration: 4.5, 
          repeat: Infinity,
          repeatType: "reverse",
          delay: 0.5
        }}
      />
    </section>
  );
};

export default Hero;
