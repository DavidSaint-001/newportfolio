import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import Projects from '../pages/Projects';
import About from '../pages/About';
import Contact from '../pages/Contact';
import ProjectDetail from '../pages/ProjectDetail';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/project/:id" element={<ProjectDetail />} />
    </Routes>
  );
};

export default AppRoutes;
