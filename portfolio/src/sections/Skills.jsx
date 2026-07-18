import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import { skillsData } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="section-container relative">
      {/* A. Section header */}
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-textMain mb-12 text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Technical <span className="text-primary">Skills</span>
      </motion.h2>

      {/* B. Category grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillsData.map((category, index) => (
          <motion.div
            key={category.category}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="card hover:-translate-y-2"
          >
            {/* C. Skill pills */}
            <h3 className="text-xl font-semibold text-textMain mb-6 border-b border-slate-700 pb-2">
              {category.category}
            </h3>
            
            <div className="flex flex-wrap gap-3">
              {category.skills.map((skill) => (
                <div
                  key={skill}
                  className="px-4 py-2 bg-background border border-slate-700 rounded-full text-sm text-textSecondary hover:text-primary hover:border-primary hover:shadow-glow transition-all duration-300 cursor-default"
                  data-tooltip-id="skill-tooltip"
                  data-tooltip-content={skill}
                >
                  {skill}
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* D. Tooltip */}
      <Tooltip
        id="skill-tooltip"
        place="top"
        className="!bg-primary !text-white !rounded-md !px-3 !py-1 !text-xs"
      />
    </section>
  );
}
