
import { useState } from 'react';
import { Play, Maximize, ArrowRight } from 'lucide-react';

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
    <div 
      className="portfolio-item group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden aspect-video">
        {/* Thumbnail image */}
        <img 
          src={imageUrl} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Overlay */}
        <div className={`absolute inset-0 bg-gradient-to-t from-creative-navy/80 via-creative-navy/40 to-transparent flex flex-col justify-end p-6 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-80'}`}>
          <div className="transform transition-transform duration-300 translate-y-0 group-hover:translate-y-0">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium uppercase tracking-wider text-creative-teal">
                {category}
              </span>
              {type === 'video' && (
                <div className="bg-creative-teal/20 backdrop-blur-sm text-white p-1 rounded-full">
                  <Play size={16} className="text-creative-teal" />
                </div>
              )}
            </div>
            <h3 className="text-xl font-bold text-white mb-1">{title}</h3>
            <p className="text-sm text-white/80 mb-4 line-clamp-2">{description}</p>
            
            <div className={`transition-all duration-300 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <a 
                href="#" 
                className="inline-flex items-center text-white text-sm font-medium hover:text-creative-teal transition-colors"
              >
                View Project <ArrowRight size={16} className="ml-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioItem;
