import React from 'react';
import { motion } from 'framer-motion';

const Journey = () => {
  const experiences = [
    {
  date: "2026/01 — Present",
  title: "Backend Developer Intern - Centerly",
  desc: "Worked on a multi-tenant SaaS platform for tutoring centers, designing and developing scalable RESTful APIs for student management, attendance, scheduling, and payments, with secure role-based authentication and real-time system features."
},
    {
  date: "2025/01 — 2026",
  title: "Freelance Full-Stack Software Developer",
  desc: "Delivered end-to-end web solutions for clients across E-commerce, Social Media, and Healthcare domains, handling full project lifecycle from design to deployment using modern frontend and backend technologies."
},
    {
  date: "2024/09 — 2025/05",
  title: "Backend Node.js Developer Trainee - DEPI",
  desc: "Trained in backend development with Node.js through DEPI. Developed 3+ real-world projects using Express.js, RESTful APIs, MongoDB/SQL, and authentication systems, delivering scalable backend solutions and improving code reliability."
},
    {
  date: "2025/01 — 2025/03",
  title: "Frontend Angular Developer Trainee - ITI",
  desc: "Specialized in frontend development with Angular at ITI. Developed 2+ scalable SPAs using Angular, TypeScript, and modern JavaScript, optimizing performance by 30% and applying robust state management patterns with NgRx."
},
  {
  date: "2024/05 — 2024/08",
  title: "Full Stack .NET Developer Trainee - ITI",
  desc: "Trained at ITI in Full Stack Web Development using .NET. Designed and developed 2+ real-world applications using C#, ASP.NET Core, Entity Framework, and RESTful APIs, delivering scalable solutions with clean architecture principles and improved code maintainability."
},
    {
      date: "2020 — 2025",
      title: "B.Sc. Engineering & Computer Science",
      desc: "Graduated with a Very Good grade. Experienced Full-Stack Developer with a strong focus on building scalable, high-performance web applications across both frontend and backend."    }
  ];

  return (
    <section id="journey" className="container">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        Journey
      </motion.h2>
      <motion.p 
        className="section-subtitle"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        A timeline of professional milestones and academic foundation.
      </motion.p>
      <div className="timeline">
        {experiences.map((exp, index) => (
          <motion.div 
            key={index} 
            className="timeline-item"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="timeline-dot"></div>
            <div className="timeline-date">{exp.date}</div>
            <h3 className="timeline-title">{exp.title}</h3>
            <p className="timeline-desc">{exp.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Journey;
