
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import ThemeToggle from './ThemeToggle';
import LanguageSelector from './LanguageSelector';

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
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-and-navy/95 backdrop-blur-md py-3 shadow-lg' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="flex items-center">
          <img 
            src="/lovable-uploads/5e0b424a-1bdd-44f4-ac09-012ae812cad8.png" 
            alt="AND Studios" 
            className="h-10 md:h-12"
          />
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <div className="flex space-x-6">
            <NavLink href="#home">{t('navigation.home')}</NavLink>
            <NavLink href="#about">{t('navigation.about')}</NavLink>
            <NavLink href="#services">{t('navigation.services')}</NavLink>
            <NavLink href="#portfolio">{t('navigation.portfolio')}</NavLink>
            <NavLink href="#contact">{t('navigation.contact')}</NavLink>
          </div>
          
          <div className="flex items-center space-x-3">
            <ThemeToggle />
            <LanguageSelector />
          </div>
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center space-x-3">
          <ThemeToggle />
          <LanguageSelector />
          <button 
            className="text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-and-navy/95 backdrop-blur-md">
          <div className="container mx-auto py-4 flex flex-col space-y-4">
            <MobileNavLink href="#home" onClick={() => setIsOpen(false)}>{t('navigation.home')}</MobileNavLink>
            <MobileNavLink href="#about" onClick={() => setIsOpen(false)}>{t('navigation.about')}</MobileNavLink>
            <MobileNavLink href="#services" onClick={() => setIsOpen(false)}>{t('navigation.services')}</MobileNavLink>
            <MobileNavLink href="#portfolio" onClick={() => setIsOpen(false)}>{t('navigation.portfolio')}</MobileNavLink>
            <MobileNavLink href="#contact" onClick={() => setIsOpen(false)}>{t('navigation.contact')}</MobileNavLink>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink = ({ href, children }: { href: string, children: React.ReactNode }) => (
  <a 
    href={href} 
    className="text-white/80 hover:text-white transition-colors duration-200 font-medium relative group"
  >
    {children}
    <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-and-orange group-hover:w-full transition-all duration-300"></span>
  </a>
);

const MobileNavLink = ({ href, onClick, children }: { href: string, onClick: () => void, children: React.ReactNode }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="text-white/80 hover:text-white transition-colors duration-200 font-medium text-lg px-4"
  >
    {children}
  </a>
);

export default Navbar;
