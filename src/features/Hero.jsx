import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Common/Button';
import { portfolioData } from '../utils/data';
import myimage from '../assets/images/me.JPG';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/ejoma_david_serome_frontend_cv.pdf';
    link.download = 'Ejoma_David_Serome_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="min-h-screen flex items-center pt-20 pb-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-white to-blue-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary-600 dark:text-primary-400 font-medium mb-4"
            >
              Hello, I'm
            </motion.p>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-4"
            >
              {portfolioData.name}
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600 mb-6"
            >
              {portfolioData.title}
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-8 max-w-lg"
            >
              I craft beautiful, responsive, and user-friendly web experiences using modern technologies. 
              Focused on creating intuitive interfaces with clean code and exceptional UX.
            </motion.p>
            
            {/* Tech Stack Pills */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-2 mb-8"
            >
              {portfolioData.skills.slice(0, 6).map((skill, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 text-sm font-medium text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-slate-700 rounded-full"
                >
                  {skill}
                </span>
              ))}
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link to="/projects">
                <Button variant="primary" size="lg">
                  View Projects
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" onClick={handleDownloadCV}>
                <Download className="mr-2 w-5 h-5" />
                Download CV
              </Button>
            </motion.div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 mt-8"
            >
              <a 
                href={portfolioData.socialLinks.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.socialLinks.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.socialLinks.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href={portfolioData.socialLinks.instagram} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-slate-700 text-gray-700 dark:text-gray-300 hover:bg-primary-100 dark:hover:bg-primary-900 hover:text-primary-600 dark:hover:text-primary-400 transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 rounded-full border-2 border-dashed border-primary-200 dark:border-primary-800"
              />
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                className="absolute inset-4 rounded-full border-2 border-dashed border-accent-200 dark:border-accent-800"
              />
              
              {/* Profile Image  */}
              <div className="relative bg-gradient-to-br from-primary-500 via-blue-500 to-accent-500 rounded-2xl p-1">
                <div className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden aspect-square">
                  <img 
                    src={myimage} 
                    alt={portfolioData.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -left-4 top-1/4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white">React</span>
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -right-4 bottom-1/4 bg-white dark:bg-slate-800 px-4 py-2 rounded-lg shadow-lg"
              >
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Next.js</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
