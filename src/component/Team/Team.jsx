import React from 'react'

import './Team.css'

const Team = () => {

  const teamData = [
  {
    id: 1,
    avatar: 'FO',
    role: 'Founder & CEO',
    name: 'Founder Name',
    description: 'Sets the direction and leads partnerships across healthcare and community stakeholders.'
  },
  {
    id: 2,
    avatar: 'AI',
    role: 'Head of AI Research',
    name: 'Team Member',
    description: 'Leads model development for sign language recognition and speech translation.'
  },
  {
    id: 3,
    avatar: 'CL',
    role: 'Clinical Advisor',
    name: 'Team Member',
    description: 'Guides how the system fits real clinical workflows and patient safety needs.'
  },
  {
    id: 4,
    avatar: 'CP',
    role: 'Community & Partnerships Lead',
    name: 'Team Member',
    description: 'Works directly with the deaf community on dataset collection and validation.'
  }
]

  return (
      <section className="section" id="team">
    <div className="wrap">
      <div className="section-head">
        <div className="eyebrow">Our Team</div>
        <h2>The people building CareSign AI</h2>
        <p className="lede" style={{marginTop:'16px'}}>A small, cross-disciplinary team working across AI research, healthcare, and the deaf community — with support from EJAZTECH.AI.</p>
      </div>
      <div className="team-grid">
        {teamData.map((data) => (
          <div className="team-card" key={data.id}>
            <div className="team-avatar">{data.avatar}</div>
            <div>
              <div className="team-role">{data.role}</div>
              <h3>{data.name}</h3>
              <p>{data.description}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="team-note">CareSign AI is growing. If you're a researcher, clinician, or member of the deaf community who wants to contribute, we'd like to hear from you.</p>
    </div>
  </section>
  )
}

export default Team;