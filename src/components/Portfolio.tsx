import { useState } from 'react';
import PortfolioItem from './PortfolioItem';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  
  const portfolioItems = [
    {
      title: "Corporate Brand Video",
      category: "Corporate",
      imageUrl: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1200",
      type: "video" as const,
      description: "Promotional video highlighting the company's values and mission through compelling storytelling.",
      client: "Tech Solutions Inc."
    },
    {
      title: "Product Launch Campaign",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=1200",
      type: "design" as const,
      description: "Complete visual identity and marketing materials for a new product launch.",
      client: "Innovate Products"
    },
    {
      title: "Event Highlight Reel",
      category: "Events",
      imageUrl: "https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&q=80&w=1200",
      type: "video" as const,
      description: "Dynamic highlight video capturing the key moments of the annual industry conference.",
      client: "Global Conference Group"
    },
    {
      title: "Brand Identity Redesign",
      category: "Branding",
      imageUrl: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?auto=format&fit=crop&q=80&w=1200",
      type: "design" as const,
      description: "Complete visual identity redesign including logo, typography, and brand guidelines.",
      client: "Refresh Boutique"
    },
    {
      title: "Social Media Campaign",
      category: "Social Media",
      imageUrl: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200",
      type: "design" as const,
      description: "Series of eye-catching graphics designed for a seasonal marketing campaign.",
      client: "Style Co."
    },
    {
      title: "Product Tutorial Series",
      category: "Tutorial",
      imageUrl: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200",
      type: "video" as const,
      description: "Instructional video series showcasing product features and user guides.",
      client: "TechGear Solutions"
    }
  ];
  
  const filters = [
    { value: 'all', label: 'All Works' },
    { value: 'video', label: 'Video Production' },
    { value: 'design', label: 'Graphic Design' },
    { value: 'corporate', label: 'Corporate' },
    { value: 'branding', label: 'Branding' },
  ];
  
  const filteredItems = activeFilter === 'all' 
    ? portfolioItems 
    : portfolioItems.filter(item => 
        item.type === activeFilter || 
        item.category.toLowerCase() === activeFilter.toLowerCase()
      );

  return (
    <section id="portfolio" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto mb-4 text-and-dark dark:text-white">Portfolio</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our collection of video and design projects that showcase our creativity and expertise.
          </p>
        </div>
        
        {/* Filter Controls */}
        <div className="flex justify-center mb-12 overflow-x-auto py-2 scrollbar-none">
          <div className="flex space-x-2 md:space-x-4">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`py-2 px-4 md:px-6 rounded-full text-sm md:text-base transition-all whitespace-nowrap ${
                  activeFilter === filter.value
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>
        </div>
        
        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <PortfolioItem
              key={index}
              title={item.title}
              category={item.category}
              imageUrl={item.imageUrl}
              type={item.type}
              description={item.description}
              client={item.client}
            />
          ))}
        </div>
        
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 dark:text-gray-400">No projects found matching the selected filter.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Portfolio;
