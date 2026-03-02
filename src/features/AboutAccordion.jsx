import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, User, GraduationCap, Briefcase, Heart, Code } from 'lucide-react';
import SectionTitle from '../components/Common/SectionTitle';

const accordionItems = [
  {
    id: 'background',
    title: 'My Background',
    icon: User,
    content: `I'm a passionate Frontend Developer with expertise in building modern, responsive, and user-friendly web applications. I specialize in React, Next.js, and Tailwind CSS. My journey started with curiosity about how websites work, and it has evolved into a career where I get to create impactful digital experiences that users love.`,
  },
  {
    id: 'skills',
    title: 'Technical Skills',
    icon: Code,
    content: `My core stack includes HTML, CSS, JavaScript, React, Next.js, and Tailwind CSS. I also work with Git, GitHub for version control, Figma for design implementation, and Supabase for backend services. I'm constantly learning and keeping up with the latest frontend technologies and best practices.`,
  },
  {
    id: 'experience',
    title: 'Work Experience',
    icon: Briefcase,
    content: `Frontend Developer at Tech Corp (2020-Present). 
      Web Developer at StartupXYZ (2018-2020). Junior Developer at WebAgency (2016-2018). 
      Each role has helped me grow and develop expertise in different aspects of frontend development, from UI implementation to performance optimization.`,
  },
  {
    id: 'interests',
    title: 'Interests',
    icon: Heart,
    content: `When I'm not coding, you can find me exploring new web technologies, 
      contributing to open-source projects, designing interfaces in Figma, or enjoying 
      outdoor activities. I believe in continuous learning and staying updated with 
      the latest industry trends in frontend development.`,
  },
];

const AboutAccordion = () => {
  const [openItem, setOpenItem] = useState('background');

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto">
        <SectionTitle 
          title="About Me" 
          subtitle="Get to Know"
          alignment="center"
        />
        
        <div className="max-w-3xl mx-auto">
          {accordionItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4"
            >
              <button
                onClick={() => setOpenItem(openItem === item.id ? '' : item.id)}
                className={`w-full flex items-center justify-between p-5 rounded-lg transition-all duration-300 ${
                  openItem === item.id 
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 text-white' 
                    : 'bg-white dark:bg-slate-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-slate-700'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-semibold">{item.title}</span>
                </div>
                <motion.div
                  animate={{ rotate: openItem === item.id ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5" />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="p-5 bg-white dark:bg-slate-800 rounded-b-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                      {item.content}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutAccordion;
