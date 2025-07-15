'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => {
    setMenuOpen(!menuOpen)
  }

  return (
    <div className="mobile-navbar-container">
      <div className="topnav">
        {/* Logo */}
        <Link href="/" className="logo-link">
          <Image
            src="/images/cbmtvwhitelogo.png"
            width={150}
            height={70}
            alt="CBM TV Logo"
            className="navbar-logo"
          />
        </Link>

        {/* Hamburger Icon */}
        <button className="icon" onClick={toggleMenu}>
          <span className="hamburger-icon">&#9776;</span> {/* This is ☰ */}
        </button>

        {/* Menu Links */}
        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          <Link href="/">Home</Link>
          <Link href="/channels">Channels</Link>
          <Link href="/programs">Programs</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
