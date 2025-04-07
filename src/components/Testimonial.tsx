
import { Star, Quote } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  company: string;
  content: string;
  rating: number;
  imageUrl: string;
}

const Testimonial = ({ name, role, company, content, rating, imageUrl }: TestimonialProps) => {
  return (
    <div className="bg-white dark:bg-creative-navy rounded-lg shadow-md hover:shadow-lg transition-all p-6 flex flex-col h-full relative">
      {/* Quote Icon */}
      <div className="absolute top-4 right-4 text-gray-100 dark:text-creative-navy/40">
        <Quote size={40} />
      </div>
      
      {/* Rating */}
      <div className="flex mb-4">
        {[...Array(5)].map((_, i) => (
          <Star 
            key={i} 
            size={18} 
            className={i < rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}
          />
        ))}
      </div>
      
      {/* Content */}
      <p className="text-gray-600 dark:text-gray-300 mb-8 relative z-10">{content}</p>
      
      {/* Client Info */}
      <div className="flex items-center mt-auto">
        <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img 
            src={imageUrl} 
            alt={name}
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h4 className="font-bold text-gray-800 dark:text-white">{name}</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">{role}, {company}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
