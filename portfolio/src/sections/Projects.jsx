import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiSearch } from 'react-icons/fi';
import { projectsData } from '../data/projects';
import ProjectCard from '../components/ProjectCard';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [search, setSearch] = useState('');

  // Derived data
  const categories = useMemo(() => {
    return ['All', ...new Set(projectsData.map(p => p.category))];
  }, []);

  const filteredProjects = useMemo(() => {
    const searchLower = search.toLowerCase();
    
    // 1. Filter by search term & category
    const filtered = projectsData.filter(project => {
      const matchesSearch = 
        project.title.toLowerCase().includes(searchLower) ||
        project.description.toLowerCase().includes(searchLower);
      
      const matchesCategory = filter === 'All' || project.category === filter;
      
      return matchesSearch && matchesCategory;
    });

    // 2. Stable sort: featured projects first
    return [...filtered].sort((a, b) => {
      if (a.featured && !b.featured) return -1;
      if (!a.featured && b.featured) return 1;
      return 0; // Maintain original order for same-featured status
    });
  }, [filter, search]);

  return (
    <section id="projects" className="section-container">
      
      {/* Header & Search UI */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
        <motion.h2 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-textMain"
        >
          Featured <span className="text-primary">Projects</span>
        </motion.h2>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative w-full max-w-md"
        >
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
          <input
            type="text"
            placeholder="Search projects by title or tech..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-background border border-slate-700 rounded-lg pl-10 pr-4 py-2 w-full focus:border-primary focus:outline-none text-textMain transition-colors"
          />
        </motion.div>
      </div>

      {/* Category Tabs */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap gap-3 mb-10"
      >
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === cat 
                ? 'bg-primary text-white' 
                : 'bg-card text-textSecondary hover:bg-slate-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </motion.div>

      {/* Grid */}
      {filteredProjects.length > 0 ? (
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      ) : (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center justify-center py-20 text-center"
        >
          <p className="text-textSecondary text-lg mb-2">No projects found matching your criteria.</p>
          <button 
            onClick={() => { setSearch(''); setFilter('All'); }}
            className="text-primary hover:underline"
          >
            Clear filters
          </button>
        </motion.div>
      )}

    </section>
  );
}
