import React from 'react';
import { motion } from 'framer-motion';

const Competencies = () => {
  const skills = [
    {
      title: "Web & Frontend",
      items: ["Angular, React.js, Next.js", "TS, ES.Next, HTML, CSS, JS", "Bootstrap, Jquery", "DS & Algorithm"],
      icon: "🎨"
    },
    {
      title: "Backend & Data",
      items: ["C#, EF, LINQ, Node.js, Express, Nest.js", "MVC, WebApi, SignalR, gRPC, Blazor", "SQL, NoSQL, PostgreSQL, MongoDB", "GraphQL, Elasticsearch"],
      icon: "⚙️"
    },
    {
      title: "Architecture & DevOps",
      items: ["Microservices, CQRS", "Clean & Layered Architecture", "SOLID, Design Patterns", "Azure, Docker, RabbitMQ, Testing"],
      icon: "🚀"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="tech" className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Core Competencies
      </motion.h2>
      <motion.div 
        className="competencies-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="competency-card glass"
            variants={itemVariants}
            whileHover={{ y: -5, boxShadow: "0 10px 30px -10px rgba(129, 140, 248, 0.3)" }}
          >
            <div className="comp-icon">{skill.icon}</div>
            <h3 className="comp-title">{skill.title}</h3>
            <ul className="comp-list">
              {skill.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Competencies;
