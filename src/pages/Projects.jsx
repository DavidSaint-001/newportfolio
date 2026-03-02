import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../features/Hero';
import ProjectGrid from '../features/ProjectGrid';

const Projects = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        {/* <Hero /> */}
        <ProjectGrid />
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
