import { motion } from 'framer-motion';

const SectionTitle = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className = '' 
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`mb-12 ${alignmentClasses[alignment]} ${className}`}
    >
      {subtitle && (
        <p className="text-primary-600 dark:text-primary-400 font-medium text-sm uppercase tracking-wider mb-2">
          {subtitle}
        </p>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white">
        {title}
      </h2>
    </motion.div>
  );
};

export default SectionTitle;
