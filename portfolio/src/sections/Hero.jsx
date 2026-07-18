import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.svg';

export default function Hero() {
  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home" className="section-container min-h-screen pt-28 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Column */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="visible"
          className="flex flex-col z-10"
        >
          <motion.span variants={item} className="text-xl text-primary font-medium">
            Hi, I'm
          </motion.span>
          <motion.h1 variants={item} className="text-5xl md:text-7xl font-bold text-textMain mt-2">
            Alankit
          </motion.h1>
          <motion.div variants={item} className="text-3xl md:text-5xl text-textSecondary mt-4 font-semibold h-20 md:h-24">
            <TypeAnimation
              sequence={[
                'AI & Data Science Student',
                2000,
                'Full-Stack Developer',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              deletionSpeed={65}
              repeat={Infinity}
            />
          </motion.div>
          <motion.p variants={item} className="text-lg text-textSecondary mt-6 max-w-lg leading-relaxed">
            I build intelligent web applications and AI-driven solutions. 
            Currently focused on blending machine learning with modern frontend architectures.
          </motion.p>
          
          <motion.div variants={item} className="flex gap-4 mt-8">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="px-6 py-3 border border-slate-700 rounded-lg hover:border-primary text-textMain transition-colors">
              Contact Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={item} className="flex gap-6 mt-10 text-2xl text-textSecondary">
            <motion.a href="#" whileHover={{ scale: 1.15 }} className="hover:text-primary transition-colors">
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.15 }} className="hover:text-primary transition-colors">
              <FaLinkedin />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.15 }} className="hover:text-primary transition-colors">
              <FaTwitter />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Image Column */}
        <div className="flex justify-center md:justify-end z-10">
          <motion.div 
            className="animate-float"
            style={{ animationDelay: '1s' }}
          >
            <img 
              src={profileImg} 
              alt="Alankit - Profile Placeholder" 
              className="w-72 h-72 md:w-96 md:h-96 object-cover rounded-2xl border-2 border-primary/30 shadow-glow"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
