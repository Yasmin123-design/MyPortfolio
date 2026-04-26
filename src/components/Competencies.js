import React from 'react';
import { motion } from 'framer-motion';
import { 
  SiAngular, SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiHtml5, SiCss, SiBootstrap, SiJquery, SiSass, SiTailwindcss,
  SiDotnet, SiNodedotjs, SiExpress, SiNestjs, SiMongodb, SiPostgresql, 
  SiGraphql, SiElasticsearch, SiDocker, SiRabbitmq, SiBlazor
} from 'react-icons/si';
import { FaDatabase, FaCode, FaCubes, FaServer, FaFlask, FaProjectDiagram, FaBroadcastTower, FaNetworkWired, FaSitemap, FaWindows, FaLayerGroup } from 'react-icons/fa';
import { TbBrandCSharp } from 'react-icons/tb';
import { VscAzure } from 'react-icons/vsc';

const Competencies = () => {
  const skills = [
    {
      title: "Web & Frontend",
      icon: "🎨",
      items: [
        { name: "Angular", icon: <SiAngular color="#DD0031" /> },
        { name: "React.js", icon: <SiReact color="#61DAFB" /> },
        { name: "Next.js", icon: <SiNextdotjs color="#fff" /> },
        { name: "Auth.js", icon: <SiAuth0 color="#eb5424" /> },
        { name: "TypeScript", icon: <SiTypescript color="#3178C6" /> },
        { name: "JavaScript", icon: <SiJavascript color="#F7DF1E" /> },
        { name: "HTML5", icon: <SiHtml5 color="#E34F26" /> },
        { name: "CSS3", icon: <SiCss color="#1572B6" /> },
        { name: "Tailwind CSS", icon: <SiTailwindcss color="#06B6D4" /> },
        { name: "Bootstrap", icon: <SiBootstrap color="#7952B3" /> },
        { name: "SASS", icon: <SiSass color="#CC6699" /> },
        { name: "jQuery", icon: <SiJquery color="#0769AD" /> },
        { name: "OOP", icon: <FaCode color="#a8b2d1" /> },
        { name: "Data Structure", icon: <FaSitemap color="#a8b2d1" /> },
        { name: "Algorithms", icon: <FaProjectDiagram color="#a8b2d1" /> }
      ]
    },
    {
      title: "Backend & Data",
      icon: "⚙️",
      items: [
        { name: "C#", icon: <TbBrandCSharp color="#239120" /> },
        { name: ".NET Core", icon: <SiDotnet color="#512BD4" /> },
        { name: "Entity Framework", icon: <FaDatabase color="#512BD4" /> },
        { name: "LINQ", icon: <FaCode color="#512BD4" /> },
        { name: "MVC", icon: <FaCubes color="#512BD4" /> },
        { name: "Web API", icon: <FaServer color="#512BD4" /> },
        { name: "SignalR", icon: <FaBroadcastTower color="#008CDD" /> },
        { name: "gRPC", icon: <FaNetworkWired color="#2496ED" /> },
        { name: "Node.js", icon: <SiNodedotjs color="#339933" /> },
        { name: "Express", icon: <SiExpress color="#fff" /> },
        { name: "Nest.js", icon: <SiNestjs color="#E0234E" /> },
        { name: "Blazor", icon: <SiBlazor color="#512BD4" /> },
        { name: "SQL Server", icon: <FaDatabase color="#CC292B" /> },
        { name: "PostgreSQL", icon: <SiPostgresql color="#4169E1" /> },
        { name: "MongoDB", icon: <SiMongodb color="#47A248" /> },
        { name: "GraphQL", icon: <SiGraphql color="#E10098" /> },
        { name: "Elasticsearch", icon: <SiElasticsearch color="#005571" /> }
      ]
    },
    {
      title: "Architecture & DevOps",
      icon: "🚀",
      items: [
        { name: "Microservices", icon: <FaCubes color="#a8b2d1" /> },
        { name: "Clean Architecture", icon: <FaServer color="#a8b2d1" /> },
        { name: "Layered Architecture", icon: <FaLayerGroup color="#a8b2d1" /> },
        { name: "SOLID Principles", icon: <FaProjectDiagram color="#a8b2d1" /> },
        { name: "Design Patterns", icon: <FaCubes color="#a8b2d1" /> },
        { name: "MediatR", icon: <SiDotnet color="#512BD4" /> },
        { name: "CQRS", icon: <FaSitemap color="#a8b2d1" /> },
        { name: "Azure", icon: <VscAzure color="#0089D6" /> },
        { name: "Docker", icon: <SiDocker color="#2496ED" /> },
        { name: "RabbitMQ", icon: <SiRabbitmq color="#FF6600" /> },
        { name: "IIS", icon: <FaWindows color="#00A4EF" /> },
        { name: "Testing", icon: <FaFlask color="#a8b2d1" /> }
      ]
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
            
            <div className="comp-skills-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {skill.items.map((item, i) => (
                <div 
                  key={i} 
                  className="skill-chip"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    background: 'rgba(255,255,255,0.05)',
                    border: '1px solid rgba(255,255,255,0.1)',
                    padding: '8px 12px',
                    borderRadius: '8px',
                    fontSize: '0.85rem',
                    color: 'var(--text-primary)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(129, 140, 248, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(129, 140, 248, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                    e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '1.2rem', display: 'flex' }}>{item.icon}</span>
                  <span>{item.name}</span>
                </div>
              ))}
            </div>

          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Competencies;
