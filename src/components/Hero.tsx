
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';

const Hero = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animations after component mounts
    setIsVisible(true);
  }, []);

  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen bg-white dark:bg-and-dark flex items-center relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(13,118,128,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(255,87,51,0.1),transparent_50%)]"></div>
      
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-and-blue/5 to-transparent animate-pulse opacity-60"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-40 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] dark:opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 
            className={`text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 leading-tight transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {t('hero.title')}
            <span className="gradient-text block mt-2 animate-pulse">{t('hero.subtitle')}</span>
          </h1>
          <p 
            className={`text-lg md:text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto transition-all duration-1000 delay-300 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            {t('hero.description')}
          </p>
          <div 
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <a 
              href="#contact" 
              className="btn btn-primary py-3 px-8 rounded-full text-base hover:scale-105 transition-transform duration-300"
            >
              {t('hero.getQuote')}
            </a>
            <a 
              href="#portfolio" 
              className="btn btn-ghost border border-gray-300 dark:border-white/20 py-3 px-8 rounded-full text-base dark:text-white hover:scale-105 transition-transform duration-300"
            >
              {t('hero.viewPortfolio')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator with enhanced animation */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-white/50 flex flex-col items-center cursor-pointer hover:text-gray-700 dark:hover:text-white/80 transition-colors animate-bounce"
        onClick={scrollToServices}
      >
        <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>

      {/* Floating particles */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-and-blue/20 animate-pulse"></div>
      <div className="absolute top-3/4 left-1/3 w-6 h-6 rounded-full bg-and-orange/20 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-5 h-5 rounded-full bg-and-yellow/20 animate-pulse" style={{animationDelay: '0.5s'}}></div>
    </section>
  );
};

export default Hero;
