
import { Award, Clock, Users, Wrench } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useSiteContext } from '../contexts/SiteContext';
import { motion } from 'framer-motion';

const About = () => {
  const { t } = useTranslation();
  const { aboutContent } = useSiteContext();
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };
  
  return (
    <section id="about" className="py-24 bg-gray-50 dark:bg-gradient-to-b dark:from-and-dark dark:to-and-navy">
      <div className="container mx-auto">
        <motion.div 
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="section-title mb-6 text-gray-800 dark:text-white"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              {t('about.title')}
            </motion.h2>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-6"
              variants={itemVariants}
            >
              {aboutContent.intro}
            </motion.p>
            
            <motion.p 
              className="text-gray-700 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              {aboutContent.belief}
            </motion.p>
            
            {/* Stats with animations */}
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              variants={containerVariants}
            >
              {aboutContent.stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 bg-white dark:bg-and-navy/50 rounded-lg shadow-sm"
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5, 
                    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)" 
                  }}
                >
                  <motion.div
                    initial={{ scale: 0.5, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + index * 0.1, duration: 0.5, type: "spring" }}
                  >
                    {index === 0 && <Clock className="w-8 h-8 mx-auto mb-2 text-and-blue" />}
                    {index === 1 && <Users className="w-8 h-8 mx-auto mb-2 text-and-orange" />}
                    {index === 2 && <Wrench className="w-8 h-8 mx-auto mb-2 text-and-yellow" />}
                    {index === 3 && <Award className="w-8 h-8 mx-auto mb-2 text-and-gold" />}
                  </motion.div>
                  <motion.p 
                    className="text-2xl font-bold text-gray-800 dark:text-white"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    {stat.value}
                  </motion.p>
                  <motion.p 
                    className="text-sm text-gray-500 dark:text-gray-400"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {t(`about.stats.${stat.label.toLowerCase().replace(' ', '')}`)}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.div 
              className="flex flex-wrap gap-3 mt-6"
              variants={containerVariants}
            >
              <motion.a 
                href="#services" 
                className="btn btn-primary py-3 px-8 rounded-md"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {t('about.cta.services')}
              </motion.a>
              <motion.a 
                href="#contact" 
                className="btn btn-ghost border border-gray-300 dark:border-gray-700 py-3 px-8 rounded-md text-gray-800 dark:text-white"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                variants={itemVariants}
              >
                {t('about.cta.contact')}
              </motion.a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            variants={itemVariants}
            whileHover={{ 
              y: -5,
              transition: { duration: 0.2 }
            }}
          >
            <motion.div 
              className="bg-white dark:bg-and-navy/50 rounded-xl shadow-md p-6 md:p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.h3 
                className="text-xl font-bold mb-6 text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                {t('about.skills')}
              </motion.h3>
              
              <motion.div 
                className="space-y-4"
                variants={containerVariants}
              >
                {aboutContent.skills.map((skill, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                  >
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-gray-500 dark:text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-and-navy rounded-full h-2">
                      <motion.div 
                        className={`h-2 rounded-full ${index % 3 === 0 ? 'bg-and-blue' : index % 3 === 1 ? 'bg-and-orange' : 'bg-and-yellow'}`}
                        style={{ width: '0%' }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: 0.5 + index * 0.1 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.h3 
                className="text-xl font-bold mt-10 mb-6 text-gray-800 dark:text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                {t('about.equipment')}
              </motion.h3>
              
              <motion.div 
                className="grid grid-cols-2 gap-3"
                variants={containerVariants}
              >
                {aboutContent.equipment.map((item, index) => (
                  <motion.div 
                    key={index} 
                    className="flex items-center"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.8 + index * 0.05, duration: 0.3 }}
                    whileHover={{ x: 5 }}
                  >
                    <motion.div 
                      className={`w-2 h-2 rounded-full mr-2 ${index % 3 === 0 ? 'bg-and-blue' : index % 3 === 1 ? 'bg-and-orange' : 'bg-and-yellow'}`}
                      animate={{ 
                        scale: [1, 1.5, 1],
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        repeatDelay: 1 + index * 0.2
                      }}
                    />
                    <span className="text-gray-700 dark:text-gray-300 text-sm">{item.name}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
