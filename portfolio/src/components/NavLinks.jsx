import { memo } from 'react';

const NavLinks = ({ activeSection, onClick }) => {
  const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

  return (
    <>
      {links.map((link) => {
        const id = link.toLowerCase();
        const isActive = activeSection === id;
        
        return (
          <a
            key={link}
            href={`#${id}`}
            onClick={onClick}
            className={`transition-colors focus-ring rounded-sm ${
              isActive
                ? 'text-primary font-medium'
                : 'text-textSecondary hover:text-primary'
            }`}
          >
            {link}
          </a>
        );
      })}
    </>
  );
};

export default memo(NavLinks);
