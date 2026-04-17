import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Competencies from './components/Competencies';
import Projects from './components/Projects';
import Journey from './components/Journey';
import Certifications from './components/Certifications';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import CustomCursor from './components/CustomCursor';

function App() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'dark';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <CustomCursor />
      <div className="bg-lights">
        <div className="light light-1"></div>
        <div className="light light-2"></div>
      </div>
      <Background3D theme={theme} />
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <main>
        <Hero theme={theme} />
        <Competencies />
        <Projects />
        <Certifications />
        <Journey />
      </main>
      <Footer />
    </div>
  );
}

export default App;
