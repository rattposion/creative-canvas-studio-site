import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useSiteContext } from '@/contexts/SiteContext';

const WhatsAppButton = () => {
  const { t } = useTranslation();
  const [visible, setVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const { whatsAppSettings } = useSiteContext();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 300;
      setVisible(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    
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
    const encodedMessage = encodeURIComponent(whatsAppSettings.message);
    window.open(`https://wa.me/${whatsAppSettings.phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const pulseAnimation = {
    initial: {
      scale: 1,
      boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.7)"
    },
    animate: {
      scale: [1, 1.05, 1],
      boxShadow: [
        "0 0 0 0 rgba(37, 211, 102, 0.7)",
        "0 0 0 10px rgba(37, 211, 102, 0)",
        "0 0 0 0 rgba(37, 211, 102, 0)"
      ],
      transition: {
        duration: 2,
        repeat: hasAnimated ? 0 : Infinity,
        repeatType: "loop" as const
      }
    }
  };

  return (
    <motion.div
      initial={{ scale: 0.5, opacity: 0, y: 20 }}
      animate={{ 
        scale: visible ? 1 : 0.5, 
        opacity: visible ? 1 : 0, 
        y: visible ? 0 : 20 
      }}
      transition={{ duration: 0.3 }}
      className="fixed bottom-6 right-6 z-50"
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
        variants={pulseAnimation}
        initial="initial"
        animate="animate"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ 
            duration: 0.5, 
            repeat: hasAnimated ? 0 : 3,
            repeatDelay: 1
          }}
        >
          <MessageCircle className="h-6 w-6" />
        </motion.div>
      </motion.button>
      <motion.div
        initial={{ opacity: 0, scale: 0, x: -50 }}
        animate={{ 
          opacity: visible && !hasAnimated ? 1 : 0,
          scale: visible && !hasAnimated ? 1 : 0,
          x: visible && !hasAnimated ? 0 : -50
        }}
        transition={{ delay: 1, duration: 0.3 }}
        className="absolute right-full mr-3 top-1/2 transform -translate-y-1/2 bg-white dark:bg-gray-800 px-3 py-2 rounded-lg shadow-lg whitespace-nowrap"
      >
        <p className="text-sm font-medium text-gray-800 dark:text-white">
          {t('contact.needHelp')}
        </p>
        <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 rotate-45 w-2 h-2 bg-white dark:bg-gray-800"></div>
      </motion.div>
    </motion.div>
  );
};

export default WhatsAppButton;
