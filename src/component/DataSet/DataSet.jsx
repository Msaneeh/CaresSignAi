import React from 'react'
import { Video, Check } from "lucide-react"

import './DataSet.css'

const DataSet = () => {
  return (
      <section className="section" id="dataset">
    <div className="wrap dataset-wrap">
      <div>
        <div className="eyebrow">Dataset</div>
        <h2>Building AI with localized data</h2>
        <p className="lede" style={{marginTop:'16px'}}>Most AI systems are trained on datasets from other regions and languages. CareSign AI is developing locally curated Nigerian Sign Language healthcare datasets — built to understand the language, expressions, and communication patterns of the communities we serve.</p>
        <div className="dataset-highlights">
          <div className="dh-item"><Check size={20}/><span>Nigerian Sign Language focused</span></div>
          <div className="dh-item"><Check size={20}/><span>Community-driven collection</span></div>
          <div className="dh-item"><Check size={20}/><span>Domain expert validation</span></div>
          <div className="dh-item"><Check size={20}/><span>Ethical, consent-based data collection</span></div>
          <div className="dh-item"><Check size={20}/><span>Healthcare-specific vocabulary</span></div>
        </div>
      </div>
      <div className="dataset-visual">
        <div>
          <div className="eyebrow">Our Progress</div>
          <div className="dv-figure" style={{fontSize:'38px'}}><Video size={38}/> 10,000+</div>
          <div className="dv-caption">NIGERIAN SIGN LANGUAGE VIDEO SAMPLES COLLECTED</div>
        </div>
        <div className="dv-row">
          <div><div className="dv-figure" style={{fontSize:'26px'}}>Consent</div><div className="dv-caption">DATA ETHICS</div></div>
          <div><div className="dv-figure" style={{fontSize:'26px'}}>Expert</div><div className="dv-caption">VALIDATED</div></div>
          <div><div className="dv-figure" style={{fontSize:'26px'}}>Community</div><div className="dv-caption">SOURCED</div></div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default DataSet;