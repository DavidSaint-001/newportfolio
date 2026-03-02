import { Github, Linkedin, Twitter, Mail, MapPin } from 'lucide-react';
import { portfolioData } from '../../utils/data';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Github, href: portfolioData.socialLinks.github, label: 'GitHub' },
    { icon: Linkedin, href: portfolioData.socialLinks.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: portfolioData.socialLinks.twitter, label: 'Twitter' },
    { icon: Mail, href: portfolioData.socialLinks.email, label: 'Email' },
  ];

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/#projects' },
    { name: 'About', path: '/#about' },
    { name: 'Contact', path: '/#contact' },
  ];

  // Get initials from name
  const getInitials = (name) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <footer className="bg-gray-900 dark:bg-slate-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-accent-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">{getInitials(portfolioData.logo)}</span>
              </div>
              <span className="font-bold text-xl">{portfolioData.logo}</span>
            </div>
            <p className="text-gray-400 mb-4">
              Building exceptional digital experiences with modern web technologies. Focused on creating intuitive and performant user interfaces.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.path}
                    className="text-gray-400 hover:text-primary-400 transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-primary-400" />
                {portfolioData.email}
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-primary-400" />
                {portfolioData.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 dark:border-slate-800 mt-8 pt-8 text-center text-gray-400">
          <p>© {currentYear} {portfolioData.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
