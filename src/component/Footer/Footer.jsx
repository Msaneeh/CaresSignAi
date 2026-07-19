import React from 'react'

import './Footer.css'

const Footer = () => {
  return (
    <footer id="contact-footer">
  <div className="wrap">
    <div className="footer-top">
      <div className="footer-brand">
        <a href="#home" className="logo">
          <span className="mark">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L4 6v6c0 5 3.4 8.4 8 10 4.6-1.6 8-5 8-10V6l-8-4z" stroke="#fff" stroke-width="1.6" stroke-linejoin="round"/><path d="M8.5 12.2l2.3 2.3 4.7-4.9" stroke="#fff" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>
          </span>
          CareSign AI
        </a>
        <p>Bridging healthcare communication through AI-powered translation. Powered by EJAZTECH.AI.</p>
        <div className="social-row" style={{marginTop:'18px'}}>
          <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="none" stroke="#16221F" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 10v7M7 7v.01M12 17v-4.5a2 2 0 014 0V17M12 12.5v4.5"/></svg></a>
          <a href="#" aria-label="Twitter/X"><svg viewBox="0 0 24 24" fill="none" stroke="#16221F" stroke-width="1.6"><path d="M4 4l16 16M20 4L4 20"/></svg></a>
          <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="#16221F" stroke-width="1.6"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg></a>
        </div>
      </div>
      <div className="footer-cols">
        <div className="footer-col">
          <h4>Site</h4>
          <a href="#about">About</a>
          <a href="#how">How It Works</a>
          <a href="#technology">Technology</a>
          <a href="#dataset">Dataset</a>
          <a href="#impact">Impact</a>
          <a href="#team">Team</a>
          <a href="#partnerships">Partnerships</a>
        </div>
        <div className="footer-col">
          <h4>Contact</h4>
          <a href="mailto:hello@caresign.ai">hello@caresign.ai</a>
          <span>Abuja, Nigeria</span>
          <a href="#contact">Partner With Us</a>
        </div>
        <div className="footer-col">
          <h4>Legal</h4>
          <a href="#">Privacy Policy</a>
          <a href="#">Data Collection Ethics Policy</a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <span>© 2026 CareSign AI. An EJAZTECH.AI initiative.</span>
      <span>Built for accessible, inclusive healthcare.</span>
    </div>
  </div>
</footer>
  )
}

export default Footer