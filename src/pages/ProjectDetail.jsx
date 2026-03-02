import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Github, Globe, Users, Code2, ArrowRight } from 'lucide-react';
import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Button from '../components/Common/Button';
import Badge from '../components/Common/Badge';
import { portfolioData } from '../utils/data';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = portfolioData.projects.find(p => p.slug === id) || portfolioData.projects[0];

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900">
      <Navbar />
      
      <main className="pt-24 pb-12">
        {/* Hero Section */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <Link to="/#projects">
              <Button variant="ghost" className="mb-6">
                <ArrowLeft className="mr-2 w-4 h-4" />
                Back to Projects
              </Button>
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
                {project.title}
              </h1>
              
              <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mb-8">
                {project.shortDescription}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="primary">
                    {tag}
                  </Badge>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline">
                    <Github className="mr-2 w-4 h-4" />
                    View Code
                  </Button>
                </a>
                <a href={project.live} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary">
                    <Globe className="mr-2 w-4 h-4" />
                    Live Demo
                  </Button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Image */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="rounded-2xl overflow-hidden shadow-2xl"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-auto object-cover"
              />
            </motion.div>
          </div>
        </section>

        {/* Project Details */}
        <section className="px-4 sm:px-6 lg:px-8 mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">About the Project</h2>
                  <div className="prose prose-lg text-gray-600 dark:text-gray-300 mb-12">
                    <p className="mb-4">{project.description}</p>
                  </div>

                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Technologies Used</h2>
                  <ul className="space-y-3 mb-12">
                    {project.tags.map((tag, idx) => (
                      <li key={idx} className="flex items-center text-gray-600 dark:text-gray-300">
                        <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 flex-shrink-0" />
                        {tag}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="bg-gray-50 dark:bg-slate-800 rounded-xl p-6 sticky top-24"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-6">Project Details</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <Users className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Client</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.client}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Calendar className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Year</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.year}</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Code2 className="w-5 h-5 text-primary-500 mt-0.5 mr-3" />
                      <div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Role</p>
                        <p className="font-medium text-gray-900 dark:text-white">{project.role}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* More Projects */}
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">More Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {portfolioData.projects.filter(p => p.slug !== id).slice(0, 3).map((proj) => (
                <Link key={proj.id} to={`/project/${proj.slug}`} className="group">
                  <motion.div
                    whileHover={{ y: -5 }}
                    className="bg-white dark:bg-slate-800 rounded-xl overflow-hidden shadow-lg border border-gray-100 dark:border-slate-700"
                  >
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="p-4">
                      <h3 className="font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2">
                        {proj.shortDescription}
                      </p>
                      <div className="flex items-center text-primary-500 mt-3 text-sm font-medium">
                        View Project <ArrowRight className="ml-1 w-4 h-4" />
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;
