import { useState, useMemo } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavLinks from './NavLinks';
import ResumeButton from './ResumeButton';
import MobileMenu from './MobileMenu';
import { useScrollSpy } from '../hooks/useScrollSpy';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const sectionIds = useMemo(
    () => ['home', 'about', 'skills', 'projects', 'experience', 'resume', 'contact'],
    []
  );
  const activeSection = useScrollSpy(sectionIds, -100);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
        <a href="#home" className="text-2xl font-bold text-textMain">
          Alankit<span className="text-primary">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          <NavLinks activeSection={activeSection} />
          <ResumeButton />
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden text-textMain text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <MobileMenu 
        isOpen={isOpen} 
        setIsOpen={setIsOpen} 
        activeSection={activeSection} 
      />
    </nav>
  );
}
