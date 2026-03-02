import { motion } from 'framer-motion';
import { Code2, Palette, Sparkles, Figma, Layout, Zap } from 'lucide-react';
import SectionTitle from '../components/Common/SectionTitle';
import { portfolioData } from '../utils/data';

const getIcon = (iconName) => {
  const icons = {
    Code2,
    Palette,
    Sparkles,
    Figma,
    Layout,
    Zap,
  };
  return icons[iconName] || Code2;
};

const Specialties = () => {
  return (
    <section id="specialties" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="My Specialties" 
          subtitle="What I Do"
          alignment="center"
        />
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.specialties.map((specialty, index) => {
            const IconComponent = getIcon(specialty.icon);
            const colors = [
              'bg-gradient-to-br from-primary-500 to-blue-600',
              'bg-gradient-to-br from-accent-500 to-purple-600',
              'bg-gradient-to-br from-pink-500 to-rose-600',
            ];
            
            return (
              <motion.div
                key={specialty.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 bg-gray-50 dark:bg-slate-800 rounded-xl hover:shadow-xl transition-all duration-300 border border-transparent hover:border-primary-200 dark:hover:border-primary-700"
              >
                <div className={`w-14 h-14 ${colors[index % colors.length]} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {specialty.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300">
                  {specialty.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Specialties;
