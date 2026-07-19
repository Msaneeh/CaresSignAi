import React from 'react'

import './About.css'

const About = () => {
  return (
      <section className="section" id="about">
    <div className="wrap about-wrap">
      <div>
        <div className="eyebrow">About Us</div>
        <h2>About CareSign AI</h2>
        <p className="lede" style={{marginTop:'16px'}}>CareSign AI is an initiative focused on developing artificial intelligence solutions that improve healthcare accessibility for deaf communities.</p>
        <p style={{marginTop:'14px', maxWidth:'520px'}}>The project combines AI research, community collaboration, and locally generated datasets to build technologies designed for real-world impact — including developing Nigeria's first healthcare-focused Nigerian Sign Language dataset, built directly with the deaf community and healthcare experts.</p>
        <div className="powered-by"><span className="k">Powered by</span> EJAZTECH.AI</div>
      </div>
      <div className="callout" style={{background:'var(--bg-alt)', color: 'var(--text)'}}>
        <p style={{color: 'var(--ink)'}}>A future where no patient is denied quality healthcare because of communication barriers.</p>
      </div>
    </div>
  </section>
  )
}

export default About