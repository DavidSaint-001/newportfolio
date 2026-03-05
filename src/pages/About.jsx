import { motion } from 'framer-motion';
import { MapPin, Mail, Download, Calendar, Code2, Palette, Zap, Users, ExternalLink } from 'lucide-react';
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNextdotjs, SiTailwindcss, SiGit, SiGithub, SiFigma, SiSupabase, SiThreedotjs, SiFramer } from 'react-icons/si';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Button from '../components/Common/Button';
import Badge from '../components/Common/Badge';
import SectionTitle from '../components/Common/SectionTitle';
import { portfolioData } from '../utils/data';
import myimage from '../assets/images/me.JPG';

const About = () => {
  const { name, title, email, location, skills } = portfolioData;

  const skillLogos = {
    'HTML': { icon: SiHtml5, color: '#E34F26', bg: '#FFF4F2' },
    'CSS': { icon: SiCss3, color: '#1572B6', bg: '#F0F6FF' },
    'JavaScript': { icon: SiJavascript, color: '#F7DF1E', bg: '#FFFDE7' },
    'React': { icon: SiReact, color: '#61DAFB', bg: '#E8F5FF' },
    'Next.js': { icon: SiNextdotjs, color: '#000000', bg: '#F5F5F5' },
    'Tailwind CSS': { icon: SiTailwindcss, color: '#06B6D4', bg: '#ECFEFF' },
    'Git': { icon: SiGit, color: '#F05032', bg: '#FFF0ED' },
    'GitHub': { icon: SiGithub, color: '#181717', bg: '#F6F8FA' },
    'Figma': { icon: SiFigma, color: '#F24E1E', bg: '#FFF0ED' },
    'Supabase': { icon: SiSupabase, color: '#3ECF8E', bg: '#E8F8F0' },
    'Three.js': { icon: SiThreedotjs, color: '#000000', bg: '#F5F5F5' },
    'Framer-motion': { icon: SiFramer, color: '#0055FF', bg: '#E8F5FF' },
  };

  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '20+' },
    { label: 'Happy Clients', value: '15+' },
    { label: 'Technologies', value: skills.length },
  ];

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and performant code is my top priority.'
    },
    {
      icon: Palette,
      title: 'Pixel Perfect',
      description: 'Transforming Figma designs into responsive, browser-consistent websites.'
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and smooth user experiences across all devices.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Working effectively with designers, developers, and stakeholders.'
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <SectionTitle 
                title="About Me" 
                subtitle="Get to know me better"
              />
            </motion.div>
          </div>
        </section>

        {/* Main Content */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Image Side */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={myimage}
                    alt={name}
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                
                {/* Floating Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="absolute -bottom-6 -right-6 bg-white dark:bg-slate-800 rounded-xl p-4 shadow-xl"
                >
                  <p className="text-sm text-gray-500 dark:text-gray-400">Based in</p>
                  <p className="font-bold text-gray-900 dark:text-white">{location}</p>
                </motion.div>
              </motion.div>

              {/* Content Side */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                  Hi, I'm <span className="gradient-text">{name}</span>
                </h1>
                <p className="text-xl text-primary-600 dark:text-primary-400 mb-6">
                  {title}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                  I'm a passionate frontend developer with expertise in building modern, 
                  responsive, and user-friendly web applications. With a strong foundation 
                  in HTML, CSS, and JavaScript, I specialize in React, Next.js, and Tailwind CSS.
                  <br /><br />
                  I love creating beautiful digital experiences that combine stunning visuals 
                  with seamless functionality. My approach focuses on writing clean, maintainable 
                  code while ensuring optimal performance and accessibility.
                </p>

                {/* Contact Info */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <MapPin className="w-5 h-5 mr-2 text-primary-500" />
                    {location}
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <Mail className="w-5 h-5 mr-2 text-primary-500" />
                    {email}
                  </div>
                </div>

                <Button variant="primary" size="lg">
                  <Download className="mr-2 w-5 h-5" />
                  Download CV
                </Button>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 text-center"
                >
                  <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills with Logos */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionTitle 
                title="My Skills" 
                subtitle="Technologies I work with"
              />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {skills.map((skill, idx) => {
                const skillData = skillLogos[skill] || { icon: Code2, color: '#6366F1', bg: '#EEF2FF' };
                const IconComponent = skillData.icon;
                
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="group bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700"
                  >
                    <div className="flex flex-col items-center">
                      <div 
                        className="w-16 h-16 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
                        style={{ backgroundColor: skillData.bg }}
                      >
                        <IconComponent 
                          className="w-8 h-8 transition-transform group-hover:rotate-6" 
                          style={{ color: skillData.color }}
                        />
                      </div>
                      <span className="font-semibold text-gray-900 dark:text-white text-center">
                        {skill}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Highlights */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionTitle 
                title="What I Do" 
                subtitle="My expertise areas"
              />
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {highlights.map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <item.icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <SectionTitle 
                title="My Journey" 
                subtitle="How I got here"
              />
            </motion.div>

            <div className="space-y-8">
              {[
                {
                  year: '2025 - Present',
                  title: 'Frontend Developer @ unicus technologies',
                  company: 'Freelance',
                  description: 'Working with clients worldwide to build modern web applications using React, Next.js, and Tailwind CSS.'
                },
                {
                  year: '2025 - present',
                  title: 'Frontend Developer',
                  company: 'intern @flux creative technologies',
                  description: 'Built responsive websites and web applications. Collaborated with design teams to implement pixel-perfect UIs.'
                },
                {
                  year: '2025 - present',
                  title: 'Senior - Developer',
                  company: '@ livity',
                  description: 'Started my professional journey building websites and learning modern frameworks.'
                }
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + idx * 0.1 }}
                  className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800"
                >
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-500 rounded-full" />
                  <div className="mb-2">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                      <Calendar className="w-4 h-4 mr-1" />
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 mb-2">
                    {item.company}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Let's Work Together
              </h2>
              <p className="text-white/80 mb-8 max-w-2xl mx-auto">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <a href={`mailto:${email}`}>
                  <Button variant="secondary" size="lg">
                    <Mail className="mr-2 w-5 h-5" />
                    Get In Touch
                  </Button>
                </a>
                <a href="/projects">
                  <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary-600">
                    <ExternalLink className="mr-2 w-5 h-5" />
                    View Projects
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
