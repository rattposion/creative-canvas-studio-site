
import { Award, Clock, Users, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSiteContext } from '../contexts/SiteContext';

const About = () => {
  const { t } = useTranslation();
  const { aboutContent } = useSiteContext();
  
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-and-dark dark:to-and-navy">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="section-title mb-6 text-gray-800 dark:text-white">{t('about.title')}</h2>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {aboutContent.intro}
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-8">
              {aboutContent.belief}
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {aboutContent.stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white dark:bg-and-navy/50 rounded-lg shadow-sm">
                  {index === 0 && <Clock className="w-8 h-8 mx-auto mb-2 text-and-blue" />}
                  {index === 1 && <Users className="w-8 h-8 mx-auto mb-2 text-and-orange" />}
                  {index === 2 && <Wrench className="w-8 h-8 mx-auto mb-2 text-and-yellow" />}
                  {index === 3 && <Award className="w-8 h-8 mx-auto mb-2 text-and-gold" />}
                  <p className="text-2xl font-bold text-gray-800 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{t(`about.stats.${stat.label.toLowerCase().replace(' ', '')}`)}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-3 mt-6">
              <a href="#services" className="btn btn-primary py-3 px-8 rounded-md">{t('about.cta.services')}</a>
              <a href="#contact" className="btn btn-ghost border border-gray-300 dark:border-gray-700 py-3 px-8 rounded-md text-gray-800 dark:text-white">{t('about.cta.contact')}</a>
            </div>
          </div>
          
          <div>
            <div className="bg-white dark:bg-and-navy/50 rounded-xl shadow-md p-6 md:p-8">
              <h3 className="text-xl font-bold mb-6 text-gray-800 dark:text-white">{t('about.skills')}</h3>
              
              <div className="space-y-4">
                {aboutContent.skills.map((skill, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-and-navy rounded-full h-2">
                      <div 
                        className={`h-2 rounded-full ${index % 3 === 0 ? 'bg-and-blue' : index % 3 === 1 ? 'bg-and-orange' : 'bg-and-yellow'}`}
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <h3 className="text-xl font-bold mt-10 mb-6 text-gray-800 dark:text-white">{t('about.equipment')}</h3>
              
              <div className="grid grid-cols-2 gap-3">
                {aboutContent.equipment.map((item, index) => (
                  <div key={index} className="flex items-center">
                    <div className={`w-2 h-2 rounded-full mr-2 ${index % 3 === 0 ? 'bg-and-blue' : index % 3 === 1 ? 'bg-and-orange' : 'bg-and-yellow'}`}></div>
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
