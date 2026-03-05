// Portfolio data - Projects, skills, and content
export const portfolioData = {
  // Personal Information
  name: 'Ejoma David Oghene Serome',
  title: 'Frontend Developer',
  email: 'ejomaserome@gmail.com',
  location: 'Nigeria',
  logo: "Saint David",
  
  // Social Links
  socialLinks: {
    github: 'https://github.com/DavidSaint-001',
    linkedin: 'https://linkedin.com',
    twitter: 'https://twitter.com',
    email: 'mailto:ejomaserome@gmail.com',
  },
  
  // Skills - Frontend Stack
  skills: [
    'HTML', 'CSS', 'JavaScript', 'React', 'Next.js', 'Tailwind CSS', 'Git', 'GitHub', 'Figma', 'Supabase','Three.js','Framer-motion'
  ],
  
  // Projects - Frontend focused projects
  projects: [
    {
      id: 1,
      slug: 'modern-dashboard',
      title: 'Modern Dashboard',
      shortDescription: 'A beautiful analytics dashboard with real-time data visualization and responsive design.',
      description: 'A comprehensive analytics dashboard featuring real-time data visualization, dark/light mode toggle, and fully responsive layout. Built with React and Tailwind CSS for optimal performance.',
      tags: ['React', 'Tailwind CSS', 'Chart.js', 'Framer Motion'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop',
      client: 'TechCorp',
      year: '2024',
      role: 'Frontend Developer',
      github: 'https://github.com',
      live: 'https://dashboard.example.com',
    },
    {
      id: 2,
      slug: 'e-commerce-store',
      title: 'E-Commerce Store',
      shortDescription: 'A modern online shopping experience with smooth animations and intuitive navigation.',
      description: 'A sleek e-commerce platform featuring product filtering, cart functionality, and seamless checkout experience. Includes beautiful micro-interactions and smooth page transitions.',
      tags: ['Next.js', 'Tailwind CSS', 'Supabase', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop',
      client: 'ShopMax',
      year: '2024',
      role: 'Frontend Developer',
      github: 'https://github.com',
      live: 'https://shop.example.com',
    },
    {
      id: 3,
      slug: 'portfolio-website',
      title: 'Creative Portfolio',
      shortDescription: 'An award-winning portfolio website with immersive 3D elements and smooth scrolling.',
      description: 'A visually stunning portfolio website featuring immersive 3D elements, smooth scroll animations, and a unique visual identity that stands out from traditional portfolios.',
      tags: ['React', 'Three.js', 'Framer Motion', 'Tailwind'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop',
      client: 'Creative Agency',
      year: '2023',
      role: 'Frontend Developer',
      github: 'https://github.com',
      live: 'https://portfolio.example.com',
    },
    {
      id: 4,
      slug: 'task-management-app',
      title: 'Task Management App',
      shortDescription: 'A productivity tool with drag-and-drop interface and real-time collaboration.',
      description: 'A feature-rich task management application with drag-and-drop kanban boards, team collaboration, and real-time updates. Built with modern frontend technologies for a snappy experience.',
      tags: ['React', 'Tailwind CSS', 'Supabase', 'React Beautiful DnD'],
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop',
      client: 'Productivity Inc',
      year: '2023',
      role: 'Frontend Developer',
      github: 'https://github.com',
      live: 'https://tasks.example.com',
    },
  ],
  
  // Testimonials
  testimonials: [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO at TechStartup',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop',
      content: 'Working with David was an absolute pleasure. He delivered our project on time and exceeded our expectations with his attention to detail.',
      rating: 5,
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'Product Manager at InnovateLabs',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop',
      content: 'One of the best frontend developers I have had the privilege to work with. His ability to translate complex designs into pixel-perfect code is remarkable.',
      rating: 5,
    },
    {
      id: 3,
      name: 'Emily Davis',
      role: 'Founder at DesignHub',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop',
      content: 'Exceptional developer who truly understands user experience. Our web application has received fantastic feedback from users.',
      rating: 5,
    },
  ],
  
  // Specialties
  specialties: [
    {
      title: 'React Development',
      description: 'Building dynamic and interactive user interfaces with React and its ecosystem.',
      icon: 'Code2',
    },
    {
      title: 'UI/UX Implementation',
      description: 'Transforming Figma designs into pixel-perfect, responsive websites.',
      icon: 'Palette',
    },
    {
      title: 'Modern Stack',
      description: 'Expertise in Next.js, Tailwind CSS, and modern frontend tools.',
      icon: 'Sparkles',
    },
  ],
};

export default portfolioData;
