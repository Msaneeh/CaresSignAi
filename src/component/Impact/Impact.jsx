import React from 'react'

import './Impact.css'

const Impact = () => {
  const ImpactData = [
    {
      id: 1,
      num: "01",
      title: "Healthcare Accessibility",
      desc: "Helping deaf patients communicate independently."
    },
    {
      id: 2,
      num: "02",
      title: "Patient Experience",
      desc: "Reducing communication barriers during medical visits."
    },
    {
      id: 3,
      num: "03",
      title: "Healthcare Efficiency",
      desc: "Supporting providers with faster, clearer communication."
    },
    {
      id: 4,
      num: "04",
      title: "Digital Inclusion",
      desc: "Ensuring underserved communities benefit from AI innovation."
    }
  ]
  return (
 <section className="section alt" id="impact">
    <div className="wrap">
      <div className="section-head">
        <div className="eyebrow">Impact</div>
        <h2>Creating inclusive healthcare for everyone</h2>
      </div>
      <div className="impact-grid">
        {ImpactData.map((data) => (
          <div className="impact-card" key={data.id}>
            <span className="num">{data.num}</span>
            <h3>{data.title}</h3>
            <p>{data.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
  )
}

export default Impact