import React from 'react'
import { User2Icon , MicIcon, UserCog2Icon } from 'lucide-react'

import './Solution.css'

const Solution = () => {
  const SolData = [
    {
      id: 1,
      icon: <User2Icon />,
      title: "For Patients",
      desc: "Communicate symptoms and needs independently, without waiting on an interpreter."
    },
    {
      id: 2,
      icon: <MicIcon />,
      title: "For Providers",
      desc: "Understand and respond to patients clearly, without a break in the consultation."
    },
    {
      id: 3,
      icon: <UserCog2Icon />,
      title: "For Communities",
      desc: "Built with and for the deaf community, so the system reflects how they actually communicate."
    }
  ]
  return (
    <section className="section alt">
    <div className="wrap">
      <div className="section-head">
        <div className="eyebrow">Our Solution</div>
        <h2>Introducing CareSign AI</h2>
        <p className="lede">An intelligent healthcare communication system that enables two-way interaction between deaf patients and healthcare providers — turning sign language into speech and text, and speech into text, in real time.</p>
      </div>
      <div className="pillars">
        {SolData.map((data, id) => (
          <div className="pillar" key={id} >
            <div className="dot">{data.icon}</div>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Solution