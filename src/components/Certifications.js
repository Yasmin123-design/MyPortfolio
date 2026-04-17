import React from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';
import cert1 from '../assets/cert1.jpeg';
import cert2 from '../assets/cert2.jpeg';
import cert3 from '../assets/cert3.jpeg';
import cert4 from '../assets/cert4.jpeg';
import cert6 from '../assets/cert6.jpeg';
import cert7 from '../assets/cert7.jpeg';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: "Buisness English Track",
      org: "Software Development Course",
      img: cert3,
      date: "2025"
    },
    {
      id: 2,
      title: "Frontend Development using Angular",
      org: "Global Tech Certification",
      img: cert7,
      date: "2025"
    },
      {
      id: 3,
      title: "Tech Hakathon",
      org: "Information Technology Academy",
      img: cert4,
      date: "2025"
    },
        {
      id: 4,
      title: "Full-Stack Web Development",
      org: "Digital Egypt Pioneers Initiative (DEPI)",
      img: cert1,
      date: "2024"
    },
    {
      id: 5,
      title: "Career Direction Programe ",
      org: "Professional Technical Training",
      img: cert2,
      date: "2024"
    },
        {
      id: 6,
      title: "Fullstack Web Development using .Net",
      org: "Technical Excellence Workshop",
      img: cert6,
      date: "2024"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section id="certifications" className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Professional Certifications
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        A record of specialized training and industry-recognized qualifications.
      </motion.p>
      
      <motion.div 
        className="certifications-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {certifications.map((cert) => (
          <TiltCard key={cert.id} className="cert-card-wrapper">
            <motion.div 
              className="cert-card glass"
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.2 } }}
            >
              <div className="cert-image-container">
                <img src={cert.img} alt={cert.title} className="cert-image" />
                <div className="cert-overlay">
                   <span className="cert-date">{cert.date}</span>
                </div>
              </div>
              <div className="cert-info">
                <h3 className="cert-title">{cert.title}</h3>
                <p className="cert-org">{cert.org}</p>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </motion.div>
    </section>
  );
};

export default Certifications;
