import React from 'react'
import { UserRound, Lock, Bot, AudioLines, Mic, Key } from 'lucide-react'
import './Hero.css'

import Button from '../UI/Button/Button'

const Hero = () => {

  const LiveTransData = [
    {
      id: 1,
      icon: <UserRound />,
      title: "Deaf Patient",
      desc: "signs their symptoms"
    },
    {
      id: 2,
      icon: <Lock />,
      title: "Sign Language",
      desc: "captured on device"
    },
    {
      id: 3,
      icon: <Bot />,
      title: "CareSign AI Engine",
      desc: "computer vision + NLP"
    },
    {
      id: 4,
      icon: <AudioLines />,
      title: "Text + Voice",
      desc: "delivered instantly"
    }
  ]

  return (
    <section className="hero">
    <div className="wrap">
      <div className="hero-copy">
        <div className="eyebrow">AI-Based Healthcare Communication</div>
        <h1>Healthcare, without the <em>communication barrier</em>.</h1>
        <p className="lede">CareSign AI enables real-time, two-way communication between deaf patients and healthcare providers using AI-based sign language recognition and speech translation, built on localized Nigerian Sign Language datasets.</p>
        <div className="hero-ctas">
          <Button variant='primary' ><a href="#contact" >Partner With Us</a></Button>
          <Button variant='ghost'><a href="#how" >Learn More</a></Button>
        </div>
        <div className="hero-stats">
          <div className="stat"><b>2-way</b><span>PATIENT ↔ HEALTHCARE PROVIDER</span></div>
          <div className="stat"><b>NSL</b><span>NIGERIAN SIGN LANGUAGE</span></div>
          <div className="stat"><b>Real-time</b><span>SIGN, TEXT &amp; VOICE</span></div>
        </div>
      </div>

      <div className="flow-card" aria-label="Communication flow from deaf patient to healthcare provider">
        <div className="flow-label"><span>Live translation flow</span><span>001</span></div>
        <div className="flow-nodes">
          {LiveTransData.map((data, id) => (
            <div key={id}>
            <div className="flow-node" >
              <div className="dot">{data.icon}</div>
              <div>
                <div className="label">{data.title}</div>
                <div className="sub">{data.desc}</div>
              </div>
            </div>
            <div className="flow-connector active"></div>
            </div>
          ))}
          
        </div>
        <div className="flow-badge">TWO-WAY</div>
      </div>
    </div>
  </section>
  )
}

export default Hero
