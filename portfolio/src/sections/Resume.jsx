import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiDownload, FiEye, FiFileText, FiCheckCircle, FiCalendar, FiX, FiExternalLink } from 'react-icons/fi';
import { staggerContainer, fadeIn } from '../utils/motion';

export default function Resume() {
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const triggerRef = useRef(null);
  const closeBtnRef = useRef(null);

  // Close modal on Escape keypress and manage focus
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsPreviewOpen(false);
      }
    };

    if (isPreviewOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      // Focus close button when opened
      setTimeout(() => closeBtnRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
      // Focus trigger button when closed
      triggerRef.current?.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isPreviewOpen]);

  return (
    <motion.section 
      id="resume" 
      className="section-container"
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.15 }}
    >
      <motion.div 
        className="max-w-5xl mx-auto bg-card rounded-2xl p-8 md:p-12 border border-slate-700/50 shadow-lg flex flex-col md:flex-row gap-12 items-center"
        variants={fadeIn('up', 'tween', 0.1, 0.5)}
      >
        {/* Left side — visual preview trigger */}
        <div 
          ref={triggerRef}
          className="relative w-full max-w-[280px] aspect-[1/1.4] bg-slate-100 rounded-lg shadow-inner overflow-hidden group cursor-pointer border border-slate-300 flex-shrink-0 focus-ring"
          onClick={() => setIsPreviewOpen(true)}
          role="button"
          tabIndex={0}
          aria-label="Open resume preview"
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              e.preventDefault();
              setIsPreviewOpen(true);
            }
          }}
        >
          {/* Skeleton-style mock document layout */}
          <div aria-hidden="true" className="absolute inset-0 p-6 flex flex-col gap-4">
            <div className="h-6 bg-slate-300 rounded w-3/4 mx-auto mb-2"></div>
            <div className="h-2 bg-slate-300 rounded w-full"></div>
            <div className="h-2 bg-slate-300 rounded w-5/6"></div>
            <div className="h-2 bg-slate-300 rounded w-full"></div>
            <div className="h-4 bg-slate-300 rounded w-1/2 mt-4"></div>
            <div className="h-2 bg-slate-300 rounded w-full"></div>
            <div className="h-2 bg-slate-300 rounded w-4/5"></div>
            <div className="h-2 bg-slate-300 rounded w-full"></div>
            <div className="h-2 bg-slate-300 rounded w-5/6"></div>
          </div>

          {/* Hover overlay */}
          <div className="absolute inset-0 bg-primary/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2">
            <FiEye className="text-4xl text-white" />
            <span className="text-white font-medium">Click to Preview</span>
          </div>
        </div>

        {/* Right side — content, stats, actions */}
        <div className="flex-grow">
          <h2 className="text-3xl md:text-4xl font-bold text-textMain mb-4">My Resume</h2>
          <p className="text-textSecondary mb-8 leading-relaxed">
            Get a detailed overview of my academic background, technical skills, and project experience in a clean, ATS-friendly format.
          </p>

          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="flex items-center gap-2 text-sm text-textMain bg-background px-4 py-3 rounded-lg border border-slate-700">
              <FiFileText className="text-primary" /> 1 Page Document
            </div>
            <div className="flex items-center gap-2 text-sm text-textMain bg-background px-4 py-3 rounded-lg border border-slate-700">
              <FiCheckCircle className="text-primary" /> ATS-Friendly Layout
            </div>
            <div className="flex items-center gap-2 text-sm text-textMain bg-background px-4 py-3 rounded-lg border border-slate-700">
              <FiCalendar className="text-primary" /> Updated: July 2026
            </div>
          </div>

          <div className="flex flex-wrap gap-4">
            <motion.a 
              href="/resume.pdf" 
              download 
              className="btn-primary flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Download Resume
            </motion.a>
            <motion.a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="px-6 py-3 border border-slate-700 text-textMain rounded-lg hover:border-primary transition-colors flex items-center gap-2 focus-ring"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiExternalLink aria-hidden="true" /> Open in Tab
            </motion.a>
          </div>
        </div>
      </motion.div>

      {/* Preview modal */}
      <AnimatePresence>
        {isPreviewOpen && (
          <div 
            className="fixed inset-0 z-[100] bg-background/90 backdrop-blur-sm flex items-center justify-center p-4 md:p-8"
            onClick={() => setIsPreviewOpen(false)}
          >
            <motion.div 
              role="dialog"
              aria-modal="true"
              aria-labelledby="resume-modal-title"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card w-full max-w-4xl h-[85vh] rounded-2xl border border-slate-700/50 flex flex-col overflow-hidden relative"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b border-slate-700/50 bg-card">
                <h3 id="resume-modal-title" className="text-lg font-bold text-textMain">Resume Preview</h3>
                <button 
                  ref={closeBtnRef}
                  onClick={() => setIsPreviewOpen(false)} 
                  aria-label="Close preview"
                  className="text-textSecondary hover:text-white transition-colors focus-ring rounded-sm"
                >
                  <FiX size={24} aria-hidden="true" />
                </button>
              </div>
              
              <div className="flex-grow w-full bg-slate-100">
                <iframe 
                  src="/resume.pdf" 
                  className="w-full h-full border-none" 
                  title="Resume Preview" 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
