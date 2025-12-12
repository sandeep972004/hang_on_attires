import React from 'react'
import bgImage from "../assests/Background_Image.png"

const Icon = ({ children }) => (
  <span className="w-5 h-5 inline-block" aria-hidden>
    {children}
  </span>
)

const Instagram = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5z" stroke="#6B4E16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="12" r="3" stroke="#6B4E16" strokeWidth="1.2" />
    <circle cx="17.5" cy="6.5" r="0.5" fill="#6B4E16" />
  </svg>
)

const WhatsApp = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M21 11.5A9.38 9.38 0 0012 2.13 9.5 9.5 0 1021 11.5z" stroke="#6B4E16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M15.5 12.5c-.2-.1-1.2-.6-1.4-.6-.2 0-.4 0-.6.6-.2.6-.8 1.4-1.4 1.2-.6-.2-1.5-.9-2.8-1.7-1-.6-.2-1 .2-1.6.3-.4.2-.6 0-.9-.2-.4-.6-.9-.9-1.1-.3-.2-.6-.1-.8-.1-.2 0-.6 0-.9.4-.2.4-.9 1.5-.9 3.6s1 3.9 1.2 4.2c.2.3 1.9 2.9 4.9 3.8 3 .9 3 .6 3.5.6.5 0 1.5-.6 1.7-1.5.2-.9.2-1.7.1-1.9-.1-.2-.5-.3-1-.5z" stroke="#6B4E16" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
)

const Location = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" className="w-5 h-5">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" stroke="#6B4E16" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    <circle cx="12" cy="9" r="2" stroke="#6B4E16" strokeWidth="1.2" />
  </svg>
)

export default function Home() {

  return (
    <main
      className="w-full min-h-screen hero-banner"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >

      <div className="relative hero-inner">
        <div className="hero-card">
          <h1 className="hero-title" style={{ fontFamily: 'Playfair Display, Georgia, serif' }}>Hang-On Attires</h1>
          <p className="hero-sub">Redefining style — curated outfits crafted for you.</p>
          <p className="mb-6 max-w-lg">Discover seasonal collections, made for every occasion. Minimal, modern, timeless.</p>
          <div className="flex gap-3 justify-center md:justify-start">
            <a href="https://www.instagram.com/hang_on_attires_world" target="_blank" rel="noopener noreferrer" className="action-btn">
              <span className="icon-wrap"><Icon><Instagram /></Icon></span>
              <span className="font-medium">Instagram</span>
            </a>
            <a href="https://wa.me/919566043071" target="_blank" rel="noopener noreferrer" className="action-btn">
              <span className="icon-wrap"><Icon><WhatsApp /></Icon></span>
              <span className="font-medium">WhatsApp</span>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=Hang-On+Attires" target="_blank" rel="noopener noreferrer" className="action-btn">
              <span className="icon-wrap"><Icon><Location /></Icon></span>
              <span className="font-medium">Location</span>
            </a>
          </div>
          {/* Additional full-screen hero content */}
          <div className="mt-8 hero-full-content">
            <p className="mb-4">Welcome — we're thrilled you're here. Take a relaxing browse through our handpicked collections crafted with care and attention to detail. Whether you're refreshing your wardrobe or searching for a signature piece, our seasonal looks are made to inspire.</p>
            <p className="mb-4">Feel free to explore categories, or message us on WhatsApp for personalized recommendations — we're happy to help you find something you love.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
