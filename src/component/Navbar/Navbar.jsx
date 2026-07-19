import React, { useState } from 'react'
import { Check, Menu, X } from 'lucide-react'
import Button from '../UI/Button/Button'

import './Navbar.css'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header>
      <nav className="nav">
        <a href="#home" className="logo">
          <span className="mark">
            <Check />
          </span>
          CareSign AI
        </a>

        <div className={`navlinks ${isOpen ? 'open' : ''}`}>
          <a href="#about" onClick={() => setIsOpen(false)}>About</a>
          <a href="#how" onClick={() => setIsOpen(false)}>How It Works</a>
          <a href="#technology" onClick={() => setIsOpen(false)}>Technology</a>
          <a href="#dataset" onClick={() => setIsOpen(false)}>Dataset</a>
          <a href="#impact" onClick={() => setIsOpen(false)}>Impact</a>
          <a href="#team" onClick={() => setIsOpen(false)}>Team</a>
          <a href="#partnerships" onClick={() => setIsOpen(false)}>Partnerships</a>
          <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>

          <div className="navcta-mobile">
            <Button variant='ghost'><a href="#partnerships">Learn More</a></Button>
            <Button variant='primary'><a href="#contact">Partner With Us</a></Button>
          </div>
        </div>

        <div className="navcta">
          <Button variant='ghost'><a href="#partnerships">Learn More</a></Button>
          <Button variant='primary'><a href="#contact" style={{color: '#ffff'}}>Partner With Us</a></Button>
        </div>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  )
}

export default Navbar