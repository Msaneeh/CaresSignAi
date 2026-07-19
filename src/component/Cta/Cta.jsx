import React from 'react'

import './Cta.css'

const Cta = () => {

  const ctaData = [
  {
    id: 1,
    label: 'Healthcare Organizations',
    title: 'Bring CareSign AI to your facility',
    email: 'partnerships@caresign.ai',
    btnText: 'Partner With Us'
  },
  {
    id: 2,
    label: 'Deaf Community',
    title: 'Help shape the dataset',
    email: 'community@caresign.ai',
    btnText: 'Support Our Research'
  },
  {
    id: 3,
    label: 'Researchers',
    title: 'Collaborate on the science',
    email: 'research@caresign.ai',
    btnText: 'Collaborate With Us'
  },
  {
    id: 4,
    label: 'Investors',
    title: 'Fund inclusive AI innovation',
    email: 'invest@caresign.ai',
    btnText: 'Support Innovation'
  }
]

  return (
      <section className="section" id="contact" style={{paddingTop:'0'}}>
    <div className="cta-section">
      <div className="wrap">
        <div className="cta-head">
          <div className="eyebrow" style={{color: '#9FC6BE'}}>Get Involved</div>
          <h2>Join us in building accessible healthcare</h2>
          <p>Whatever seat you sit in — hospital, community, lab, or fund — there's a way to help close the gap.</p>
        </div>
        <div className="cta-grid">
          {ctaData.map((data) => (
            <div className="cta-card" key={data.id} >
              <div>
                <div div className="k">{data.label}</div>
                <h3 style={{color:'#fff', marginTop:'8px'}}>{data.title}</h3>
              </div>
              <a href={`mailto:${data.email}`} className="btn btn-light">{data.btnText}</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
  )
}

export default Cta;