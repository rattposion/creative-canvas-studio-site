
import { LucideIcon } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  features: string[];
}

const ServiceCard = ({ title, description, icon: Icon, features }: ServiceCardProps) => {
  return (
    <div className="bg-white dark:bg-creative-navy rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full">
      <div className="p-6 md:p-8 flex flex-col h-full">
        <div className="flex items-center mb-4">
          <div className="bg-primary/10 text-primary rounded-lg p-3 mr-4">
            <Icon size={24} />
          </div>
          <h3 className="text-xl font-bold text-and-dark dark:text-white">{title}</h3>
        </div>
        
        <p className="text-and-dark dark:text-white mb-6">{description}</p>
        
        <div className="mt-auto">
          <h4 className="font-medium text-and-dark dark:text-white mb-3">Services Include:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <span className="text-primary mr-2">•</span>
                <span className="text-and-dark dark:text-white text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
          <a 
            href="#contact" 
            className="text-primary font-medium flex items-center group-hover:underline"
          >
            Request Service
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
