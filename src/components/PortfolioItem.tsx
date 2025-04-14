
import { useState } from 'react';
import { Play, Maximize, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PortfolioItemProps {
  title: string;
  category: string;
  imageUrl: string;
  videoUrl?: string;
  type: 'video' | 'design';
  description: string;
  client?: string;
}

const PortfolioItem = ({ 
  title, 
  category, 
  imageUrl, 
  videoUrl, 
  type,
  description,
  client 
}: PortfolioItemProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
      }
    }
  };
  
  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.3 } }
  };
  
  const contentVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.4, delay: 0.1 }
    }
  };
  
  return (
    <motion.div 
      className="portfolio-item group"
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden aspect-video rounded-lg">
        {/* Thumbnail image with zoom effect */}
        <motion.img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover"
          animate={{ scale: isHovered ? 1.1 : 1 }}
          transition={{ duration: 0.7 }}
        />
        
        {/* Overlay with reveal animation */}
        <motion.div 
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.div variants={contentVariants}>
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white">
                {category}
              </span>
              {type === 'video' && (
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm text-white p-1 rounded-full"
                  whileHover={{ scale: 1.2, backgroundColor: "rgba(255,255,255,0.3)" }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={16} className="text-white" />
                </motion.div>
              )}
            </div>
            <motion.h3 
              className="text-xl font-bold text-white mb-1"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              {title}
            </motion.h3>
            <motion.p 
              className="text-sm text-white mb-4 line-clamp-2"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: isHovered ? 0 : 10, opacity: isHovered ? 1 : 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              {description}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 10 
              }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <motion.a 
                href="#" 
                className="inline-flex items-center text-white text-sm font-medium hover:text-teal-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Ver Projeto 
                <motion.span
                  animate={{ x: isHovered ? [0, 5, 0] : 0 }}
                  transition={{ duration: 0.6, repeat: isHovered ? Infinity : 0, repeatDelay: 0.5 }}
                >
                  <ArrowRight size={16} className="ml-1" />
                </motion.span>
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
