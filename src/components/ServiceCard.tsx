import { LucideIcon } from 'lucide-react';
import React from 'react';

interface ServiceCardProps {
  key?: number;
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon: Icon, features }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group h-full transform hover:-translate-y-1">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center mb-6">
          <div className="bg-primary/10 text-primary dark:text-white rounded-lg p-3 mr-4 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-and-dark dark:text-white group-hover:text-primary transition-colors duration-300">{title}</h3>
        </div>
        
        <p className="text-and-dark dark:text-gray-300 mb-8 text-sm leading-relaxed">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-medium text-and-dark dark:text-gray-300 mb-4">Inclui:</h4>
          <ul className="space-y-3">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start group/item">
                <span className="text-primary mr-3 group-hover/item:scale-110 transition-transform">•</span>
                <span className="text-and-dark dark:text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
          <a 
            href="#contact" 
            className="text-primary font-medium flex items-center hover:text-primary/80 transition-colors duration-300"
          >
            Solicitar Serviço
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-4 w-4 ml-2 transform group-hover:translate-x-2 transition-transform duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
