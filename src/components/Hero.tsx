
import { ChevronDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t } = useTranslation();

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
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBzdHJva2U9InJnYmEoMCwwLDAsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] opacity-40 dark:bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNNjAgMEgwVjYwSDYwVjBaIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiIHN0cm9rZS13aWR0aD0iMC41Ii8+PC9zdmc+')] dark:opacity-40"></div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 dark:text-white mb-6 leading-tight animate-fade-in">
            {t('hero.title')}
            <span className="gradient-text block mt-2">{t('hero.subtitle')}</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-700 dark:text-white/80 mb-8 max-w-2xl mx-auto animate-fade-in" style={{animationDelay: '0.2s'}}>
            {t('hero.description')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{animationDelay: '0.4s'}}>
            <a href="#contact" className="btn btn-primary py-3 px-8 rounded-full text-base">
              {t('hero.getQuote')}
            </a>
            <a href="#portfolio" className="btn btn-ghost border border-gray-300 dark:border-white/20 py-3 px-8 rounded-full text-base dark:text-white">
              {t('hero.viewPortfolio')}
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll down indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-500 dark:text-white/50 flex flex-col items-center cursor-pointer hover:text-gray-700 dark:hover:text-white/80 transition-colors"
        onClick={scrollToServices}
      >
        <span className="text-sm mb-2">{t('hero.scrollDown')}</span>
        <ChevronDown size={24} className="animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
