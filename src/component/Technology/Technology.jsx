import React from 'react'

import './Technology.css'

const Technology = () => {

  const TechData = [
  {
    id: 1,
    title: 'Computer Vision',
    items: ['Hand movements', 'Body gestures', 'Facial expressions']
  },
  {
    id: 2,
    title: 'Transformer Models',
    items: ['Sequence understanding', 'Sign language recognition', 'Temporal video analysis']
  },
  {
    id: 3,
    title: 'Speech AI',
    items: ['Voice-to-text conversion', 'Text accessibility']
  },
  {
    id: 4,
    title: 'Localized AI Dataset',
    items: ['Nigerian Sign Language', 'Community-built & validated']
  }
]

  return (
      <section className="section alt" id="technology">
    <div className="wrap">
      <div className="section-head">
        <div className="eyebrow">Technology</div>
        <h2>Built with advanced AI technologies</h2>
      </div>
      <div className="tech-grid">
  {TechData.map((data) => (
    <div className="tech-cell" key={data.id}>
      <h3>{data.title}</h3>
      <ul>
        {data.items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  ))}
</div>
    </div>
  </section>
  )
}

export default Technology