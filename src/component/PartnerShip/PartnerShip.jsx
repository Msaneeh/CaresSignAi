import React from 'react'

import './PartnerShip.css'

const PartnerShip = () => {
  return (
      <section className="section" id="partnerships">
    <div className="wrap">
      <div className="section-head">
        <div className="eyebrow">Partnerships</div>
        <h2>Building with the community</h2>
        <p className="lede" style={{marginTop:'16px'}}>We believe the best solutions are built together with the communities they serve.</p>
      </div>
      <div className="partner-row">
        <div className="partner-pill"><span className="dot"></span>Deaf communities</div>
        <div className="partner-pill"><span className="dot"></span>Healthcare providers</div>
        <div className="partner-pill"><span className="dot"></span>Sign language experts</div>
        <div className="partner-pill"><span className="dot"></span>Accessibility organizations</div>
        <div className="partner-pill"><span className="dot"></span>Research institutions</div>
      </div>
    </div>
  </section>
  )
}

export default PartnerShip