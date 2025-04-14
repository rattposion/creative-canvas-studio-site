
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
  return (
    <motion.div 
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
    >
      <div className="p-6 md:p-8 flex flex-col h-full">
        <motion.div 
          className="flex items-center mb-6"
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          <motion.div 
            className="bg-primary/10 text-primary dark:text-white rounded-lg p-3 mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300"
            whileHover={{ rotate: 10, scale: 1.1 }}
          >
            <Icon size={24} />
          </motion.div>
          <h3 className="text-xl font-bold text-and-dark dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        </motion.div>
        
        <p className="text-and-dark dark:text-gray-300 mb-8 text-sm leading-relaxed">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-medium text-and-dark dark:text-gray-300 mb-4">Inclui:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <motion.li 
                key={index} 
                className="flex items-start group/item"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index, duration: 0.3 }}
                whileHover={{ x: 5 }}
              >
                <motion.span 
                  className="text-primary mr-3 transition-transform"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                >•</motion.span>
                <span className="text-and-dark dark:text-gray-300 text-sm">{feature}</span>
              </motion.li>
            ))}
          </ul>
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
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
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
