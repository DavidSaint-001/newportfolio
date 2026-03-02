import Navbar from '../components/Layout/Navbar';
import Footer from '../components/Layout/Footer';
import Hero from '../features/Hero';
import Specialties from '../features/Specialties';
import AboutAccordion from '../features/AboutAccordion';
import ProjectGrid from '../features/ProjectGrid';
import Testimonials from '../features/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <Specialties />
        <ProjectGrid />
        <AboutAccordion />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
