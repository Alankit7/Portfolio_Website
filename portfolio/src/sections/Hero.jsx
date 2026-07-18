import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import profileImg from '../assets/profile.svg';
import { staggerContainer, fadeIn, zoomIn } from '../utils/motion';

export default function Hero() {
  return (
    <section id="home" className="section-container min-h-screen pt-28 relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-primary/20 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '0s' }}></div>
      <div className="absolute bottom-1/4 right-10 w-72 h-72 bg-blue-500/20 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-500/10 blur-3xl rounded-full -z-10 animate-float" style={{ animationDelay: '4s' }}></div>

      <motion.div 
        variants={staggerContainer()}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
      >
        {/* Text Column */}
        <motion.div
          variants={fadeIn('up', 'tween', 0.2, 0.5)}
          className="flex flex-col z-10"
        >
          <span className="text-xl text-primary font-medium">
            Hi, I'm
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-textMain mt-2">
            Alankit
          </h1>
          <div className="text-2xl sm:text-3xl md:text-5xl text-textSecondary mt-4 font-semibold h-20 md:h-24">
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
          </div>
          <p className="text-lg text-textSecondary mt-6 max-w-lg leading-relaxed">
            I build intelligent web applications and AI-driven solutions. 
            Currently focused on blending machine learning with modern frontend architectures.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <motion.a 
              href="#projects" 
              className="btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Work
            </motion.a>
            <motion.a 
              href="#contact" 
              className="px-6 py-3 border border-slate-700 rounded-lg hover:border-primary text-textMain transition-colors text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.a>
          </div>

          {/* Social Links */}
          <div className="flex gap-6 mt-10 text-2xl text-textSecondary">
            <motion.a href="#" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className="hover:text-primary transition-colors">
              <FaGithub />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className="hover:text-primary transition-colors">
              <FaLinkedin />
            </motion.a>
            <motion.a href="#" whileHover={{ scale: 1.15 }} whileTap={{ scale: 0.95 }} className="hover:text-primary transition-colors">
              <FaTwitter />
            </motion.a>
          </div>
        </motion.div>

        {/* Image Column */}
        <div className="flex justify-center md:justify-end z-10">
          <motion.div 
            variants={zoomIn(0.4, 0.6)}
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
      </motion.div>
    </section>
  );
}
