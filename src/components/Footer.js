import React from 'react';

const Footer = () => {
  return (
    <footer id="contact" className="container">
      <div className="footer-cta glass">
        <h2 className="footer-title">
          Let's build the <br />
          <span className="text-gradient">next</span> thing.
        </h2>
        <p className="hero-description" style={{ margin: '0 auto' }}>
          Currently open to new collaborations and high-impact full-time roles in design-led engineering teams.
        </p>
      </div>
      
      <div className="footer-grid">
        <div className="contact-card glass">
          <span>EMAIL</span>
          <p>yasminelabasy58@gmail.com</p>
        </div>
        <div className="contact-card glass">
          <span>LINKEDIN</span>
          <p><a href="https://www.linkedin.com/in/yasmin-elabasy/" target="_blank" rel="noopener noreferrer">/in/yasmin-elabasy</a></p>
        </div>
        <div className="contact-card glass">
          <span>GITHUB</span>
          <p><a href="https://github.com/Yasmin123-design" target="_blank" rel="noopener noreferrer">@Yasmin123-design</a></p>
        </div>
        <div className="contact-card glass">
          <span>PHONE</span>
          <p>+20 1001642297</p>
        </div>
      </div>

      <div className="copyright">
        <p>© 2026 YASMIN ELABASY. BUILT FOR THE HIGH-END V3.0</p>
        <div style={{ display: 'flex', gap: '2rem' }}>
          <a href="mailto:yasminelabasy58@gmail.com">EMAIL</a>
          <a href="tel:+201001642297">PHONE</a>
          <a href="https://www.linkedin.com/in/yasmin-elabasy/" target="_blank" rel="noopener noreferrer">LINKEDIN</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
