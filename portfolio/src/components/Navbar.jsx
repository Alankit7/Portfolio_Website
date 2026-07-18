import { useState, useEffect } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import NavLinks from './NavLinks';
import ResumeButton from './ResumeButton';
import MobileMenu from './MobileMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const sections = ['about', 'skills', 'projects', 'experience', 'contact'];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((id) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <nav className="fixed w-full top-0 z-50 transition-all duration-300 bg-background/80 backdrop-blur-md border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center relative">
        <a href="#hero" className="text-2xl font-bold text-textMain">
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
