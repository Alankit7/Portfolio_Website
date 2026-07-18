import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { staggerContainer, fadeIn } from '../utils/motion';

export default function About() {
  const { ref: statsRef, inView: statsInView } = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.section 
      id="about" 
      className="section-container"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      {/* A. Section header */}
      <motion.h2 
        className="text-3xl md:text-4xl font-bold text-textMain mb-12"
        variants={fadeIn('up', 'tween', 0.1, 0.5)}
      >
        About <span className="text-primary">Me</span>
      </motion.h2>

      {/* B. Layout Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* C. Left Column — Summary */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.1, 0.5)}
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
          variants={fadeIn('up', 'tween', 0.1, 0.5)}
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
          <div className="border-l-2 border-slate-700 ml-2 pl-4 sm:ml-3 sm:pl-6 space-y-6">
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[29px] top-1 h-3 w-3 rounded-full bg-primary ring-4 ring-background"></span>
              <p className="text-textSecondary text-sm sm:text-base">
                <strong className="text-textMain font-medium">Current</strong> — Exploring Full-Stack & AI Orchestration (LangChain, Gemini API)
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[29px] top-1 h-3 w-3 rounded-full bg-slate-600 ring-4 ring-background"></span>
              <p className="text-textSecondary text-sm sm:text-base">
                Completed 1-Month AI Development Internship at Progression School
              </p>
            </div>
            <div className="relative">
              <span className="absolute -left-[21px] sm:-left-[29px] top-1 h-3 w-3 rounded-full bg-slate-600 ring-4 ring-background"></span>
              <p className="text-textSecondary text-sm sm:text-base">
                Selected in Top 5 for AI-Insights Habit Tracker Project
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* E. Bottom row — Animated counters */}
      <motion.div 
        ref={statsRef}
        variants={fadeIn('up', 'tween', 0.1, 0.5)}
        className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-16"
      >
        {/* Stat 1 */}
        <div className="text-center p-4 sm:p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={5} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-xs sm:text-sm md:text-base">Projects Built</p>
        </div>

        {/* Stat 2 */}
        <div className="text-center p-4 sm:p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={300} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-xs sm:text-sm md:text-base">LeetCode Problems</p>
        </div>

        {/* Stat 3 */}
        <div className="text-center p-4 sm:p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={120} suffix="+" duration={2.5} /> : '0+'}
          </h4>
          <p className="text-textSecondary text-xs sm:text-sm md:text-base">Lessons in AI Internship</p>
        </div>

        {/* Stat 4 */}
        <div className="text-center p-4 sm:p-6 bg-card rounded-2xl border border-slate-700/50">
          <h4 className="text-2xl sm:text-3xl md:text-4xl font-bold text-textMain mb-2">
            {statsInView ? <CountUp start={0} end={9.3} decimals={1} suffix="+" duration={2.5} /> : '0.0+'}
          </h4>
          <p className="text-textSecondary text-xs sm:text-sm md:text-base">CGPA</p>
        </div>
      </motion.div>
    </motion.section>
  );
}
