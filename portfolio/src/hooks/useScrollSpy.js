import { useState, useEffect } from 'react';

export const useScrollSpy = (sectionIds, offset = 0) => {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length > 0) {
          // If multiple sections are simultaneously "intersecting" under
          // this rootMargin, prefer the one closest to the top of the
          // viewport — that's the one a user would call "current."
          const topMost = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActiveSection(topMost.target.id);
        }
      },
      { rootMargin: `${offset}px 0px -80% 0px` }
    );

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, [sectionIds, offset]);

  return activeSection;
};
