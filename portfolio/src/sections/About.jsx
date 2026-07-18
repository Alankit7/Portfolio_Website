import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const fadeUpVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const statItemVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="about" className="section-container">
      {/* A. Section header */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-textMain mb-12"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUpVariant}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>

      {/* B. Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* C. Left Column — Summary */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col gap-6"
        >
          <p className="text-lg text-textSecondary leading-relaxed">
            I am a third-year Artificial Intelligence and Data Science (AI & DS) 
            engineering student at Savitribai Phule Pune University (SPPU). I am 
            deeply passionate about bridging the gap between intelligent machine 
            learning models and intuitive full-stack web applications.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed">
            My goal is to build scalable AI-driven solutions and orchestration 
            tools that solve real-world problems while delivering seamless user 
            experiences.
          </p>
          <p className="text-lg text-textSecondary leading-relaxed mt-4 border-l-4 border-primary pl-4">
            When I'm not coding, you can find me exploring high-fidelity audio 
            setups, reading manhwa, or experimenting with the chemistry of South 
            Indian cooking.
          </p>
        </motion.div>

        {/* D. Right Column — Education & Timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col gap-8"
        >
          {/* Education Card */}
          <div className="card">
            <h3 className="text-xl font-bold text-textMain mb-2">Education</h3>
            <p className="text-lg text-textSecondary font-medium mb-1">
              B.E. in Artificial Intelligence & Data Science
            </p>
            <p className="text-textSecondary mb-4">
              Savitribai Phule Pune University (SPPU)
            </p>
            <p className="text-primary font-semibold">
              Aggregate CGPA: 9.308
            </p>
          </div>

          {/* Mini-timeline */}
          <div className="border-l-2 border-slate-700 ml-3 pl-6 space-y-6">
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></span>
              <p className="text-textSecondary">
                <strong className="text-textMain font-medium">Current</strong> — Exploring Full-Stack & AI Orchestration (LangChain, Gemini API)
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-slate-600 ring-4 ring-background"></span>
              <p className="text-textSecondary">
                Completed 1-Month AI Development Internship at Progression School
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-slate-600 ring-4 ring-background"></span>
              <p className="text-textSecondary">
                Selected in Top 5 for AI-Insights Habit Tracker Project
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* E. Bottom row — Animated counters */}
      <motion.div 
        ref={statsRef}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
      >
        {/* Stat 1 */}
        <motion.div variants={statItemVariant} className="text-center p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={5} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-sm md:text-base">Projects Built</p>
        </motion.div>

        {/* Stat 2 */}
        <motion.div variants={statItemVariant} className="text-center p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={300} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-sm md:text-base">LeetCode Problems</p>
        </motion.div>

        {/* Stat 3 */}
        <motion.div variants={statItemVariant} className="text-center p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={120} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-sm md:text-base">Lessons in AI Internship</p>
        </motion.div>

        {/* Stat 4 */}
        <motion.div variants={statItemVariant} className="text-center p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={9.3} decimals={1} suffix="+" duration={2.5} /> : '0.0+'}
          </h4>
          <p className="text-textSecondary text-sm md:text-base">CGPA</p>
        </motion.div>
      </motion.div>
    </section>
  );
}
