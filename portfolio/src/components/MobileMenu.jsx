import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import NavLinks from './NavLinks';
import ResumeButton from './ResumeButton';

export default function MobileMenu({ isOpen, setIsOpen, activeSection }) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.2 }}
          className="absolute top-full left-0 w-full h-[calc(100vh-5rem)] bg-card/95 backdrop-blur-lg border-b border-slate-700/50 flex flex-col p-6 gap-6 md:hidden overflow-y-auto"
        >
          <NavLinks 
            activeSection={activeSection} 
            onClick={() => setIsOpen(false)} 
          />
          <div className="w-full">
            <ResumeButton />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
