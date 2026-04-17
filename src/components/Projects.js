import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import TiltCard from './TiltCard';

import p2 from '../assets/project2.png';
import p3 from '../assets/project3.png';
import p4 from '../assets/sc1.png';
import p5 from '../assets/rest.png';
import p6 from '../assets/ai.png';
import p7 from '../assets/fit.png';

import cr1 from '../assets/cr1.jpeg';
import cr3 from '../assets/cr3.jpeg';
import cr4 from '../assets/cr4.jpeg';
import cr5 from '../assets/cr5.jpeg';
import cr6 from '../assets/cr6.jpeg';
import cr7 from '../assets/cr7.jpeg';
import cr8 from '../assets/cr8.jpeg';
import cr9 from '../assets/cr9.jpeg';
import cr10 from '../assets/cr10.jpeg';
import cr11 from '../assets/cr11.jpeg';
import cr12 from '../assets/cr12.jpeg';
import cr13 from '../assets/cr13.jpeg';
import cr14 from '../assets/cr14.jpeg';
import cr15 from '../assets/cr15.jpeg';
import cr16 from '../assets/cr16.jpeg';
import cr17 from '../assets/cr17.jpeg';
import cr18 from '../assets/cr18.jpeg';
import cr19 from '../assets/cr19.jpeg';
import cr20 from '../assets/cr20.jpeg';
import cr21 from '../assets/cr21.jpeg';

import s1 from '../assets/s1.png';
import s2 from '../assets/s2.png';
import s3 from '../assets/s3.png';
import s4 from '../assets/s4.png';
import s5 from '../assets/s5.png';
import s6 from '../assets/s6.png';
import s7 from '../assets/s7.png';
import s8 from '../assets/s8.png';
import s9 from '../assets/s9.png';

import l1 from '../assets/l1.png';
import l2 from '../assets/l2.png';
import l3 from '../assets/l3.png';
import l4 from '../assets/l4.png';
import l5 from '../assets/l5.png';
import l6 from '../assets/l6.png';
import l7 from '../assets/l7.png';
import l8 from '../assets/l8.png';
import l9 from '../assets/l9.png';
import l10 from '../assets/l10.png';
import l11 from '../assets/l11.png';
import l12 from '../assets/l12.png';
import v1 from '../assets/healing.mp4';
import v2 from '../assets/FinalGraduationProjectDEPI.mp4';
import v3 from '../assets/school.mp4';

import re1 from '../assets/re1 (1).jpeg';
import re2 from '../assets/re1 (2).jpeg';
import re3 from '../assets/re1 (3).jpeg';
import re4 from '../assets/re4.jpeg';
import re5 from '../assets/re5.jpeg';

import ai1 from '../assets/ai1.png';
import ai2 from '../assets/ai2.png';
import ai3 from '../assets/ai3.png';

import fit1 from '../assets/fit1.png';
const IconGithub = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
);

const IconLink = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
);

const IconPlay = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
);

const ProjectCard = ({ project, onPlayVideo }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (project.videoUrl && videoRef.current) {
      videoRef.current.play().catch(err => console.log("Autoplay blocked", err));
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (project.videoUrl && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const nextImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev + 1) % project.images.length);
  };

  const prevImg = (e) => {
    e.stopPropagation();
    setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const hasGallery = (project.mediaType === 'gallery' || project.mediaType === 'image') && project.images?.length > 1;
  const hasVideo = !!project.videoUrl;

  return (
    <TiltCard className="project-card-wrapper">
      <motion.div 
        className="project-card glass"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        whileHover={{ y: -5 }}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className={`project-image-wrapper ${isHovered && hasVideo ? 'video-active' : ''}`}>
          {hasVideo ? (
            <>
              <img 
                src={project.images?.[0] || project.img} 
                alt={project.name} 
                className={`project-image placeholder-image`} 
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 1, opacity: isHovered ? 0 : 1, transition: 'opacity 0.5s ease' }}
              />
              <video 
                ref={videoRef}
                src={project.videoUrl} 
                muted 
                loop 
                playsInline
                className={`project-image video-element ${isHovered ? 'visible' : 'hidden'}`}
                style={{ position: 'absolute', top: 0, left: 0, zIndex: 2 }}
              />
            </>
          ) : (
            <img 
              src={hasGallery ? project.images[currentImg] : (project.img || project.images?.[0])} 
              alt={project.name} 
              className="project-image" 
            />
          )}

          {hasGallery && !hasVideo && (
            <div className="gallery-controls">
              <button className="gallery-btn prev" onClick={prevImg}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6"></polyline></svg>
              </button>
              <button className="gallery-btn next" onClick={nextImg}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6"></polyline></svg>
              </button>
              <div className="gallery-dots">
                {project.images.map((_, i) => (
                  <span key={i} className={`dot ${i === currentImg ? 'active' : ''}`}></span>
                ))}
              </div>
            </div>
          )}

          <div className="project-overlay">
            <div className="project-actions">
              {project.videoUrl && (
                <button 
                  className="action-btn"
                  onClick={() => onPlayVideo(project.videoUrl)} 
                  title="View Full Video"
                >
                  <IconPlay />
                </button>
              )}
              {project.links.github && (
                <a href={project.links.github} target="_blank" rel="noreferrer" title="Source Code">
                  <IconGithub />
                </a>
              )}
              {project.links.githubFront && (
                <a href={project.links.githubFront} target="_blank" rel="noreferrer" title="Frontend Repo">
                  <IconGithub />
                  <span className="badge-small">F</span>
                </a>
              )}
              {project.links.githubBack && (
                <a href={project.links.githubBack} target="_blank" rel="noreferrer" title="Backend Repo">
                  <IconGithub />
                  <span className="badge-small">B</span>
                </a>
              )}
              {project.links.frontend && (
                <a href={project.links.frontend} target="_blank" rel="noreferrer" title="Live Demo">
                  <IconLink />
                </a>
              )}
            </div>
          </div>
        </div>
        <div className="project-info">
          <span className="project-tag">{project.tag}</span>
          <h3 className="project-name">{project.name}</h3>
          <p className="project-desc">{project.desc}</p>
          <div className="project-links-inline">
            {project.videoUrl && (
              /* eslint-disable-next-line jsx-a11y/anchor-is-valid */
              <a href="#" onClick={(e) => { e.preventDefault(); onPlayVideo(project.videoUrl); }} title="View Full Video">
                <IconPlay /> Video
              </a>
            )}
            {project.links.github && (
              <a href={project.links.github} target="_blank" rel="noreferrer" title="Source Code">
                <IconGithub /> GitHub
              </a>
            )}
            {project.links.githubFront && (
              <a href={project.links.githubFront} target="_blank" rel="noreferrer" title="Frontend Repo">
                <IconGithub /> Frontend
              </a>
            )}
            {project.links.githubBack && (
              <a href={project.links.githubBack} target="_blank" rel="noreferrer" title="Backend Repo">
                <IconGithub /> Backend
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </TiltCard>
  );
};

const Projects = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const projects = [
    {
      name: "CROWDFUNDING PLATFORM",
      tag: "WEB APP",
      desc: "Built a crowdfunding platform using Angular & ASP.NET Core (Clean Architecture), supporting campaign management and role-based JWT authentication.",
      mediaType: "gallery",
      images: [cr1, cr3, cr4, cr5, cr6, cr7, cr8, cr9, cr10, cr11, cr12, cr13, cr14, cr15, cr16, cr17, cr18, cr19, cr20, cr21],
      links: {
        githubFront: "https://github.com/Yasmin123-design/CrowdFunding_FrontendAngular.git",
        githubBack: "https://github.com/Yasmin123-design/CrowdFunding_BackendAsp.NetCore.git"
      }
    },
    {
      name: "HEALING",
      tag: "HEALTHCARE",
      desc: "Graduation project: a healthcare system built with .NET 8 Web API connecting patients, doctors, and pharmacies. Supports appointments and prescriptions.",
      mediaType: "video",
      images:[p2],
      videoUrl: v1,
      links: {
        github: "https://github.com/Yasmin123-design/Healing_Asp.NetCore.git"
      }
    },
    {
      name: "Electro",
      tag: "E-COMMERCE",
      desc: "Built an ASP.NET Core MVC e-commerce platform with SQL Server, supporting 100+ products, shopping cart, orders, and a full admin panel.",
      mediaType: "video",
      images:[p3],
      videoUrl: v2,
      links: {
        github: "https://github.com/Yasmin123-design/ECommerece_DEPI.git"
      }
    },
    {
  name: "Social Media Platform (Microservices)",
  tag: "SOCIAL MEDIA",
  desc: "Scalable .NET microservices platform with RabbitMQ for event-driven communication and Elasticsearch for optimized search. Frontend built with Angular and NgRx for real-time state management.",
  mediaType: "gallery",
  images: [s1, s2, s3, s4, s5, s6, s7, s8, s9],
  links: {
    githubBack: "https://github.com/Yasmin123-design/SocialMediaApp_Asp.NetCoreBackend.git",
    githubFront:"https://github.com/Yasmin123-design/SocialMediaApp_FrontendAngular.git"
  }
},
{
  name: "Learning Management System (LMS)",
  tag: "EDTECH",
  desc: "Full-stack LMS built with React and Next.js. Features Stripe payments, OAuth (Google/LinkedIn), and automated certificate generation with a scalable PostgreSQL and Redis backend.",
  mediaType: "gallery",
  images: [l1, l2, l3, l4, l5, l6, l7, l8, l9, l10, l11, l12],
  links: {
    githubBack: "https://github.com/Yasmin123-design/LearningManagementSystem_NestJS.git",
    githubFront:"https://github.com/Yasmin123-design/CrowdFunding_FrontendAngular.git"
  }
},
{
  name: "School Management System",
  tag: "EDUCATION",
  desc: "A Blazor-based system with role-based access for Admins, Teachers, and Students. Features interactive dashboards for managing academic records and real-time data updates.",
  mediaType: "video",
  images:[p4],
  videoUrl: v3,
  links: {
    github: "https://github.com/Yasmin123-design/MySchool_Blazor.git"
  }
},
{
  name: "Restaurant Management System",
  tag: "BACKEND",
  desc: "Scalable backend built with Node.js and MongoDB, featuring JWT authentication, real-time notifications via Socket.io, and automated inventory management.",
  mediaType: "image",
  images: [p5,re1,re2,re3,re4,re5],
  links: {
    github: "https://github.com/Yasmin123-design/RestaurantManagementSystem_NodeJs.git"
  }
},
{
  name: "AI Resume Analyzer & Job Matcher",
  tag: "AI / BACKEND",
  desc: "AI-powered tool using OpenAI for semantic resume matching. Features LinkedIn OAuth, background job processing with Redis, and a real-time analytics dashboard.",
  mediaType: "image",
  images: [p6,ai1,ai2,ai3],
  links: {
    github: "https://github.com/Yasmin123-design/AIReasumeAnalyzer_NodeJs.git"
  }
},
{
  name: "Fitness Tracker API",
  tag: "BACKEND / GRAPHQL",
  desc: "ASP.NET GraphQL API built with Clean Architecture. Supports efficient querying and full CRUD operations for workout tracking with Repository and Unit of Work patterns.",
  mediaType: "image",
  images: [p7,fit1],
  links: {
    github: "https://github.com/Yasmin123-design/FitnessTracker_GraphQL.git"
  }
}
  ];

  const visibleProjects = showAll ? projects : projects.slice(0, 3);

  return (
    <section id="work" className="container">
      <h2 className="section-title">Featured Projects</h2>
      <p className="section-subtitle">A collection of full-stack applications and professional technical solutions.</p>
      
      <div className="projects-grid">
        {visibleProjects.map((project, index) => (
          <ProjectCard 
            key={index} 
            project={project} 
            onPlayVideo={setSelectedVideo}
          />
        ))}
      </div>

      {projects.length > 3 && (
        <div className="view-more-container">
          <button className="btn-view-more" onClick={() => setShowAll(!showAll)}>
            {showAll ? 'Show Fewer' : 'View All Projects'}
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: '0.3s' }}>
              <polyline points="6 9 12 15 18 9"></polyline>
            </svg>
          </button>
        </div>
      )}

      {/* Video Modal */}
      {selectedVideo && (
        <div className="video-modal-overlay" onClick={() => setSelectedVideo(null)}>
          <div className="video-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedVideo(null)}>×</button>
            <video 
              src={selectedVideo} 
              autoPlay 
              muted 
              controls 
              playsInline
              onVolumeChange={(e) => e.target.muted = true}
              className="full-video no-volume"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
