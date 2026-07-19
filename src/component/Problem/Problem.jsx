import React from 'react'

import './Problem.css'

const Problem = () => {
  const ChallData = [
    {
      id: 1,
      num: "01",
      text: "Miscommunication between patients and healthcare providers"
    },
    {
      id: 2,
      num: "02",
      text: "Delayed diagnosis and treatment"
    },
    {
      id: 3,
      num: "03",
      text: "Reduced healthcare independence"
    },
    {
      id: 4,
      num: "04",
      text: "Poor patient experience"
    }
  ]


  return (
 <section className="section" id="problem">
    <div className="wrap problem-grid">
      <div>
        <div className="eyebrow">The Challenge</div>
        <h2>Millions face healthcare communication barriers.</h2>
        <div className="problem-list">
          {/* <div className="problem-item">
            <span className="n">01</span>
            <p>Miscommunication between patients and healthcare providers</p>
          </div> */}
          {ChallData.map((data, id) => (
            <div className="problem-item" key={id} >
              <span className="n">{data.num}</span>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
      <div>
        <p className="lede" style={{marginBottom:'24px'}}>Many deaf individuals experience difficulty communicating their symptoms, needs, and concerns in healthcare environments due to limited access to sign language interpreters.</p>
        <div className="callout">
          <p>Healthcare should be accessible to everyone, regardless of communication ability.</p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Problem;