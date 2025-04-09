import { Film, PenTool, Video, Users, Image, PieChart, Layout, Palette, Globe } from 'lucide-react';
import React from 'react';
import ServiceCard from './ServiceCard';

const Services: React.FC = () => {
  const videoServices = [
    {
      title: "Produção de Vídeo",
      description: "Serviços profissionais de produção de vídeo, desde o conceito até a entrega final, adaptados à história única da sua marca.",
      icon: Film,
      features: [
        "Vídeos Corporativos",
        "Cobertura de Eventos",
        "Vídeos Promocionais",
        "Demonstrações de Produtos",
        "Produções de Entrevistas"
      ]
    },
    {
      title: "Edição de Vídeo",
      description: "Transforme filmagens brutas em histórias polidas e cativantes que envolvem seu público e transmitem sua mensagem.",
      icon: Video,
      features: [
        "Edição Profissional e Correção de Cor",
        "Integração de Motion Graphics",
        "Design de Som e Mixagem",
        "Aplicação de Efeitos Visuais",
        "Otimização para Várias Plataformas"
      ]
    }
  ];
  
  const designServices = [
    {
      title: "Design de Identidade Visual",
      description: "Crie uma identidade visual distintiva que destaque sua marca e ressoe com seu público-alvo.",
      icon: PenTool,
      features: [
        "Design de Logo e Manual de Marca",
        "Sistema de Identidade Visual",
        "Design de Material Institucional",
        "Seleção de Tipografia",
        "Desenvolvimento de Paleta de Cores"
      ]
    },
    {
      title: "Design para Marketing",
      description: "Designs chamativos para todas as suas necessidades de marketing, tanto digital quanto impresso.",
      icon: Image,
      features: [
        "Artes para Redes Sociais",
        "Design de Material Impresso",
        "Criativos para Anúncios Digitais",
        "Design de Apresentações",
        "Design de Embalagens"
      ]
    },
    {
      title: "Design Web",
      description: "Interfaces modernas e responsivas que proporcionam uma excelente experiência ao usuário.",
      icon: Globe,
      features: [
        "Design de Interface (UI)",
        "Design de Experiência (UX)",
        "Landing Pages",
        "Email Marketing",
        "Banners e Anúncios Online"
      ]
    },
    {
      title: "Design Editorial",
      description: "Layouts profissionais para publicações impressas e digitais que comunicam com clareza e estilo.",
      icon: Layout,
      features: [
        "Diagramação de Revistas",
        "Design de Catálogos",
        "E-books e Livros Digitais",
        "Relatórios Corporativos",
        "Newsletters"
      ]
    }
  ];

  return (
    <section id="services" className="py-24 bg-gray-50 dark:bg-and-dark">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto mb-4 text-and-dark dark:text-white">Nossos Serviços</h2>
          <div className="h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="text-and-dark dark:text-white max-w-2xl mx-auto">
            Serviços profissionais de produção de vídeo e design gráfico para elevar sua marca e cativar seu público.
          </p>
        </div>

        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-10 flex items-center text-and-dark dark:text-white">
            <Film className="mr-3 text-primary" />
            Serviços de Vídeo
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
            Serviços de Design
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
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
