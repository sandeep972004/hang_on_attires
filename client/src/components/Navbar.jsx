import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-inner">
        <div className="nav-left">&nbsp;</div>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <a href="https://instagram.com/yourshop" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://wa.me/91XXXXXXXXXX" target="_blank" rel="noopener noreferrer">WhatsApp</a>
          <a href="https://facebook.com/yourshop" target="_blank" rel="noopener noreferrer">Facebook</a>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </div>
    </header>
  )
}
