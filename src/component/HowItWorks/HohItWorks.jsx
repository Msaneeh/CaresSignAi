import React, { useState } from 'react'
import './HohItWorks.css'

const HohItWorks = () => {
  const [activeTab, setActiveTab] = useState('patient');

  const stepsData = {
  patient: [
    { num: 1, title: 'Sign', text: 'The patient performs sign language gestures naturally.' },
    { num: 2, title: 'Capture', text: 'The CareSign AI device captures and processes the signs in real time.' },
    { num: 3, title: 'Translate', text: 'AI models translate the signs into accurate text.' },
    { num: 4, title: 'Deliver', text: 'The provider receives a text transcription and voice output.' },
  ],
  provider: [
    { num: 1, title: 'Speak', text: 'The healthcare provider speaks normally, as they always would.' },
    { num: 2, title: 'Convert', text: 'Speech recognition converts the voice into text instantly.' },
    { num: 3, title: 'Display', text: 'The deaf patient sees the transcription on the device screen.' },
  ],
}

const demoData = {
  patient: {
    direction: 'PATIENT → PROVIDER',
    inputLabel: 'Patient signs',
    inputValue: '"My chest is paining me"',
    outputLabel: 'Text + Voice output',
    outputValue: 'My chest is paining me',
  },
  provider: {
    direction: 'PROVIDER → PATIENT',
    inputLabel: 'Doctor says',
    inputValue: '"Take this medicine twice daily."',
    outputLabel: 'Device displays',
    outputValue: 'Take this medicine twice daily.',
  },
}

const tabs = [
  { id: 'patient', label: 'For Deaf Patients' },
  { id: 'provider', label: 'For Healthcare Providers' },
]

  return (
    <section className="section" id="how">
      <div className="wrap">
        <div className="section-head">
          <div className="eyebrow">How It Works</div>
          <h2>Two-way healthcare communication, powered by AI.</h2>
        </div>

        <div className="hiw-tabs" role="tablist" aria-label="How it works">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className="hiw-tab"
              role="tab"
              aria-selected={activeTab === tab.id}
              id={`tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {tabs.map((tab) => (
          <div
            key={tab.id}
            className={`hiw-panel ${activeTab === tab.id ? 'active' : ''}`}
            id={`panel-${tab.id}`}
          >
            <div className="hiw-steps">
              {stepsData[tab.id].map((step) => (
                <div className="hiw-step" key={step.num}>
                  <div className="num">{step.num}</div>
                  <div>
                    <h4>{step.title}</h4>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="demo-card">
              <div className="demo-top">
                <span><span className="signal-dot"></span>Live demo</span>
                <span>{demoData[tab.id].direction}</span>
              </div>
              <div className="demo-input">
                <span className="k">{demoData[tab.id].inputLabel}</span>
                <span className="v">{demoData[tab.id].inputValue}</span>
              </div>
              <div className="demo-arrow">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#54655F" strokeWidth="1.8" strokeLinecap="round">
                  <path d="M12 4v16M6 14l6 6 6-6" />
                </svg>
              </div>
              <div className="demo-output">
                <span className="k">{demoData[tab.id].outputLabel}</span>
                <span className="v">{demoData[tab.id].outputValue}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HohItWorks