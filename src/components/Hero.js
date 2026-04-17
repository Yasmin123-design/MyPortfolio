import React from 'react';
import { motion } from 'framer-motion';
import avatar from '../assets/yasmin.jpeg';
import Hero3D from './Hero3D';
import Magnetic from './Magnetic';
import cvFile from '../assets/FullstackDeveloper_YasminElabasi.pdf';

const Hero = () => {
  return (
    <section className="hero container">
      <motion.div 
        className="hero-visual"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <div className="3d-container" style={{ position: 'absolute', inset: -50, zIndex: 0 }}>
           <Hero3D />
        </div>
        <div className="avatar-container" style={{ zIndex: 1 }}>
          <div className="avatar-inner">
            <img src={avatar} alt="Yasmin Elabasy" className="avatar-image" />
          </div>
        </div>
      </motion.div>
      <div className="hero-content">
        <motion.span 
          className="badge"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          Available for projects
        </motion.span>
        <h1 className="hero-title">
          <motion.span
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            Hi, I'm <span className="text-gradient">Yasmin</span>
          </motion.span>
          <motion.span 
            className="text-gradient"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            Fullstack Developer.
          </motion.span>
        </h1>
        <motion.p 
          className="hero-description"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          "Full-Stack Developer focused on building scalable and high-performance web applications. Experienced across modern frontend frameworks (Angular, React.js, Next.js) and backend technologies (Node.js, Express.js, Nest.js, ASP.NET Core). 
        </motion.p>
        <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <Magnetic>
            <motion.a 
              href="#work" 
              className="btn-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Work 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </motion.a>
          </Magnetic>
          <Magnetic>
            <motion.a 
              href={cvFile} 
              target="_blank"
              download="FullstackDeveloper_YasminElabasi.pdf"
              className="btn-secondary"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Download CV 
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
            </motion.a>
          </Magnetic>
        </div>
      </div>
    </section>
  );
};

export default Hero;
