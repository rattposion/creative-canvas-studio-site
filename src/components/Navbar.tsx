import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-and-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <Link to="/" className="flex items-center">
            <motion.img 
              src="/lovable-uploads/5e0b424a-1bdd-44f4-ac09-012ae812cad8.png" 
              alt="A.N.D STUDIOS" 
              className="h-10 md:h-12"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            />
          </Link>
        </motion.div>
        
        {/* Desktop Menu with animations */}
        <div className="hidden md:flex items-center space-x-8">
          <motion.div 
            className="flex space-x-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <NavLink href="#home">{t('navigation.home')}</NavLink>
            <NavLink href="#about">{t('navigation.about')}</NavLink>
            <NavLink href="#services">{t('navigation.services')}</NavLink>
            <NavLink href="#portfolio">{t('navigation.portfolio')}</NavLink>
            <NavLink href="#contact">{t('navigation.contact')}</NavLink>
          </motion.div>
          
          <motion.div 
            className="flex items-center space-x-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <ThemeToggle />
            <LanguageSelector />
          </motion.div>
        </div>
        
        {/* Mobile Menu Button with animations */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSelector />
          <motion.button 
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence initial={false} mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </div>
      
      {/* Mobile Menu with slide animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden bg-and-navy/95 backdrop-blur-md"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <motion.div 
              className="container mx-auto py-4 flex flex-col space-y-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>{t('navigation.home')}</MobileNavLink>
              <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>{t('navigation.about')}</MobileNavLink>
              <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>{t('navigation.services')}</MobileNavLink>
              <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>{t('navigation.portfolio')}</MobileNavLink>
              <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>{t('navigation.contact')}</MobileNavLink>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <motion.a 
    href={href} 
    className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    {children}
    <motion.span 
      className="absolute bottom-0 left-0 h-[2px] bg-and-orange"
      initial={{ width: 0 }}
      whileHover={{ width: "100%" }}
      transition={{ duration: 0.3 }}
    />
  </motion.a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
  <motion.a 
    href={href} 
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg px-4"
    initial={{ x: -20, opacity: 0 }}
    animate={{ x: 0, opacity: 1 }}
    whileHover={{ x: 5 }}
    whileTap={{ scale: 0.95 }}
    transition={{ duration: 0.3 }}
  >
    {children}
  </motion.a>
);

export default Navbar;
