'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const [showSignup, setShowSignup] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [showSignupPassword, setShowSignupPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [useEmail, setUseEmail] = useState(true) // Added missing state
 

  const toggleMenu = () => setMenuOpen(!menuOpen)

  return (
    <>
      <div className="mobile-navbar-container">
        <div className="topnav">
          <Link href="/" className="logo-link">
            <Image
              src="/images/cbmtvwhitelogo.png"
              width={150}
              height={60}
              alt="CBM TV Logo"
              className="navbar-logo"
            />
          </Link>

          <button className="icon" onClick={toggleMenu}>
            <span className="hamburger-icon">&#9776;</span>
          </button>

          <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
            <Link href="/">CBM Stream Bird</Link>
            <Link href="/channels">CBM Channel Box</Link>
            <Link href="/programs">CBM Trends</Link>
            
            <div className="auth-buttons">
              <button className="auth-btn signin" onClick={() => setShowLogin(true)}>Sign In</button>
              <button className="auth-btn getstarted" onClick={() => setShowSignup(true)}>Get Started</button>
            </div>
          </div>
        </div>
      </div>

      {/* Login Modal */}
      {showLogin && (
        <div className="modal-overlay" onClick={() => setShowLogin(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>Your email address or mobile number will be used to sign in to CBM TV.</h3>

            <form>
              {useEmail ? (
                <>
                  <input
                    type="email"
                    placeholder="Email Address"
                    required
                  />
                  <button
                    type="button"
                    className="switch-button"
                    onClick={() => setUseEmail(false)}
                  >
                    USE MOBILE NUMBER INSTEAD
                  </button>
                </>
              ) : (
                <>
                  <div className="phone-wrapper">
                    <span className="country-code">🇺🇬 +256</span>
                    <input
                      type="tel"
                      placeholder="Mobile Phone Number"
                      pattern="[0-9]{9,12}"
                      required
                    />
                  </div>
                  <button
                    type="button"
                    className="switch-button"
                    onClick={() => setUseEmail(true)}
                  >
                    USE EMAIL INSTEAD
                  </button>
                </>
              )}

              <div className="password-field">
                <input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(prev => !prev)}
                >
                  👁️
                </button>
              </div>

              <button type="submit" className="main-button">Continue</button>
            </form>

            <button className="close-modal" onClick={() => setShowLogin(false)}>Close</button>
          </div>
        </div>
      )}

      {/* Signup Modal */}
      {showSignup && (
        <div className="modal-overlay" onClick={() => setShowSignup(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>All fields are required.</h3>
            <form>
              <input type="text" placeholder="Given Name" required />
              <input type="text" placeholder="Surname" required />

              <div className="phone-wrapper">
                <span className="country-code">🇺🇬 +256</span>
                <input type="tel" placeholder="Mobile Phone Number" pattern="[0-9]{9,12}" required />
              </div>

              <input type="email" placeholder="Email" required />

              <div className="password-field">
                <input
                  type={showSignupPassword ? 'text' : 'password'}
                  placeholder="Password"
                  required
                />
                <button type="button" onClick={() => setShowSignupPassword(prev => !prev)}>👁️</button>
              </div>

              <div className="password-field">
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Re-enter Your Password"
                  required
                />
                <button type="button" onClick={() => setShowConfirmPassword(prev => !prev)}>👁️</button>
              </div>

              <button type="submit" className="main-button">Create Account</button>
            </form>

            <p className="terms-text">
              By creating an account, I agree to the <a href="#">Terms and Conditions</a> and <a href="#">Privacy Policy</a>.
            </p>

            <button className="close-modal" onClick={() => setShowSignup(false)}>Close</button>
          </div>
        </div>
      )}
    </>
  )
}
export default Navbar
