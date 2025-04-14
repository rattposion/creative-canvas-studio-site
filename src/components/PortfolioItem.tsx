
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
  
  return (
    <motion.div 
      className="portfolio-item group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -10 }}
    >
      <div className="relative overflow-hidden aspect-video">
        {/* Thumbnail image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-95'}`}>
          <motion.div 
            className="transform transition-transform duration-300"
            animate={isHovered ? { y: 0 } : { y: 0 }}
          >
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-white">
                {category}
              </span>
              {type === 'video' && (
                <motion.div 
                  className="bg-white/20 backdrop-blur-sm text-white p-1 rounded-full"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <Play size={16} className="text-white" />
                </motion.div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-white mb-4 line-clamp-2">{description}</p>
            
            <motion.div 
              className="transition-all duration-300"
              initial={{ opacity: 0, y: 10 }}
              animate={{ 
                opacity: isHovered ? 1 : 0, 
                y: isHovered ? 0 : 10 
              }}
            >
              <motion.a 
                href="#" 
                className="inline-flex items-center text-white text-sm font-medium hover:text-teal-300 transition-colors"
                whileHover={{ x: 5 }}
              >
                Ver Projeto <ArrowRight size={16} className="ml-1" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioItem;
