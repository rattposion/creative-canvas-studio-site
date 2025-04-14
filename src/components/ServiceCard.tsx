
import { LucideIcon } from 'lucide-react';
import React from 'react';
import { motion } from 'framer-motion';

interface ServiceCardProps {
  key?: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6
      }
    },
    hover: {
      y: -10,
      boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      transition: { 
        duration: 0.2
      }
    }
  };
  
  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        delay: 0.2
      }
    },
    hover: {
      rotate: [0, -10, 10, -5, 0],
      transition: {
        duration: 0.5
      }
    }
  };
  
  const listVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const listItemVariants = {
    hidden: { x: -10, opacity: 0 },
    visible: { 
      x: 0, 
      opacity: 1,
      transition: { duration: 0.4 }
    }
  };
  
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 overflow-hidden h-full"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      whileHover="hover"
      viewport={{ once: true, margin: "-50px" }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <motion.div 
          className="flex items-center mb-6"
          variants={iconVariants}
        >
          <motion.div 
            className="bg-primary/10 text-primary dark:text-white rounded-lg p-3 mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <Icon size={24} />
          </motion.div>
          <h3 className="text-xl font-bold text-and-dark dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        </motion.div>
        
        <motion.p 
          className="text-and-dark dark:text-gray-300 mb-8 text-sm leading-relaxed"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          {description}
        </motion.p>
        
        <div className="mt-auto">
          <motion.h4 
            className="font-medium text-and-dark dark:text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            Inclui:
          </motion.h4>
          <motion.ul 
            className="space-y-3"
            variants={listVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start group/item"
                variants={listItemVariants}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="text-primary mr-3 transition-transform"
                  animate={{ 
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2
                  }}
                >•</motion.span>
                <span className="text-and-dark dark:text-gray-300 text-sm">{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <motion.a 
            href="#contact" 
            className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors duration-300"
            whileHover={{ x: 5 }}
            whileTap={{ scale: 0.95 }}
          >
            Solicitar Serviço
            <motion.svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ 
                x: [0, 5, 0],
                opacity: [0.7, 1, 0.7] 
              }}
              transition={{ 
                duration: 1.5, 
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </motion.svg>
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
