import React from 'react';
import Magnetic from './Magnetic';

const Navbar = ({ theme, toggleTheme }) => {
  return (
    <nav className="navbar glass">
      <div className="container">
        <Magnetic>
          <div className="logo text-gradient" style={{ cursor: 'pointer' }}>Yasmin Elabasy</div>
        </Magnetic>
        <div className="nav-links">
          <Magnetic><a href="#work" className="nav-link">Work</a></Magnetic>
          <Magnetic><a href="#tech" className="nav-link">Tech</a></Magnetic>
          <Magnetic><a href="#certifications" className="nav-link">Certifications</a></Magnetic>
          <Magnetic><a href="#journey" className="nav-link">Journey</a></Magnetic>
          <Magnetic><a href="#contact" className="nav-link">Contact</a></Magnetic>
        </div>
        <div className="nav-actions" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
          <Magnetic>
            <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle Theme">
              {theme === 'dark' ? (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
              ) : (
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
              )}
            </button>
          </Magnetic>
          <Magnetic>
            <button className="nav-cta">Hire Me</button>
          </Magnetic>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
