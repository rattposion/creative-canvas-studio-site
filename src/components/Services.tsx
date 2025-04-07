import { Film, PenTool, Video, Users, Image, PieChart, Table, Layout } from 'lucide-react';
import ServiceCard from './ServiceCard';

const Services = () => {
  const videoServices = [
    {
      title: "Video Production",
      description: "Professional video production services from concept to final delivery, tailored to your brand's unique story.",
      icon: Film,
      features: [
        "Corporate Video Production",
        "Event Coverage & Documentation",
        "Promotional Videos",
        "Product Demonstrations",
        "Interview Productions"
      ]
    },
    {
      title: "Video Editing",
      description: "Transform raw footage into polished, captivating stories that engage your audience and deliver your message.",
      icon: Video,
      features: [
        "Professional Editing & Color Grading",
        "Motion Graphics Integration",
        "Sound Design & Audio Mixing",
        "Visual Effects Application",
        "Format Optimization for Various Platforms"
      ]
    }
  ];
  
  const designServices = [
    {
      title: "Brand Identity Design",
      description: "Create a distinctive visual identity that sets your brand apart and resonates with your target audience.",
      icon: PenTool,
      features: [
        "Logo Design & Brand Guidelines",
        "Visual Identity Systems",
        "Brand Collateral Design",
        "Typography Selection",
        "Color Palette Development"
      ]
    },
    {
      title: "Marketing Materials",
      description: "Eye-catching designs for all your marketing needs, both digital and print, to promote your brand effectively.",
      icon: Image,
      features: [
        "Social Media Graphics",
        "Print Collateral Design",
        "Digital Ad Creatives",
        "Presentation Design",
        "Package Design"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-and-dark">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto mb-4 text-and-dark dark:text-white">Our Services</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-and-dark dark:text-white max-w-2xl mx-auto">
            Professional video production and graphic design services to elevate your brand and captivate your audience.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 flex items-center text-and-dark dark:text-white">
            <Film className="mr-3 text-primary" />
            Videomaking Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {videoServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-10 flex items-center text-and-dark dark:text-white">
            <PenTool className="mr-3 text-primary" />
            Graphic Design Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {designServices.map((service, index) => (
              <ServiceCard 
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                features={service.features}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
