
import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'framer-motion';
import { useSiteContext } from '@/contexts/SiteContext';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const { whatsAppSettings } = useSiteContext();
  
  useEffect(() => {
    // Optimize scroll handling with throttling
    let lastScrollTime = 0;
    const throttleDelay = 100; // ms
    
    const handleScroll = () => {
      const now = Date.now();
      if (now - lastScrollTime > throttleDelay) {
        lastScrollTime = now;
        setVisible(window.scrollY > 300);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Set initial visibility after a delay
    const timer = setTimeout(() => {
      setVisible(true);
      setTimeout(() => setHasAnimated(true), 2000);
    }, 3000);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timer);
    };
  }, []);
  
  const handleClick = () => {
    if (!whatsAppSettings.phoneNumber) return;
    
    const encodedMessage = encodeURIComponent(whatsAppSettings.message || '');
    window.open(`https://wa.me/${whatsAppSettings.phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0.5, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.5, opacity: 0, y: 20 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-6 right-6 z-50"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          <motion.button
            onClick={handleClick}
            className={cn(
              "p-4 rounded-full shadow-lg",
              "bg-[#25D366] hover:bg-[#128C7E] text-white",
              "flex items-center justify-center",
              "focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#25D366]"
            )}
            aria-label={t('contact.whatsapp')}
            title={t('contact.whatsapp')}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ 
                rotate: visible && !hasAnimated ? [0, 15, -15, 0] : 0
              }}
              transition={{ 
                duration: 0.5, 
                repeat: hasAnimated ? 0 : 3,
                repeatDelay: 1
              }}
            >
              <MessageCircle className="h-6 w-6" />
            </motion.div>
          </motion.button>
          
          <AnimatePresence>
            {(isHovering || (!hasAnimated && visible)) && (
              <motion.div
                initial={{ opacity: 0, scale: 0, x: -50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0, x: -50 }}
                transition={{ duration: 0.2 }}
                className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
              >
                <p className="text-sm font-medium text-gray-800 dark:text-white">
                  {t('contact.needHelp')}
                </p>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800"></div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default WhatsAppButton;
