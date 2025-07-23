"use client";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiThreads } from "react-icons/si"; // Thread icon
import Image from "next/image";

export default function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#1a1a1a", // dark but not pure black
        color: "#fff",
        padding: "2rem 1rem",
        textAlign: "center",
      }}
    >
      {/* Privacy Section */}
      <div className="footer-links" style={{ marginBottom: "1.5rem" }}>
        <a href="#" style={{ margin: "0 1rem" }}>Privacy Policy</a>
        <a href="#" style={{ margin: "0 1rem" }}>Terms of Use</a>
        <a href="https://cbmbrothers.org/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 1rem" }}>Advertise</a>
        <a href="#" >Contact Us</a>
      </div>

      {/* Social Media */}
      <div className="footer-socials" style={{ marginBottom: "1.5rem", fontSize: "1.5rem" }}>
        <a href="https://www.facebook.com/cbmbrotherscbm" target="_blank" rel="noopener noreferrer" aria-label="Facebook" ><FaFacebookF /></a>
        <a href="https://x.com/CBMBrothers" target="_blank" rel="noopener noreferrer" aria-label="Twitter" ><FaXTwitter /></a>
        <a href="https://www.instagram.com/cbmbrothers/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" ><FaInstagram /></a>
        <a href="https://www.youtube.com/@CBMTVUG" target="_blank" rel="noopener noreferrer" aria-label="YouTube" ><FaYoutube /></a>
        <a href="#" aria-label="WhatsApp" ><FaWhatsapp /></a>
        <a href="#" aria-label="TikTok" ><FaTiktok /></a>
        <a href="#" aria-label="Threads" ><SiThreads /></a>
      </div>

      {/* Logo */}
      <div style={{ marginBottom: "1rem" }}>
        <Image
          src="/logo.png" // make sure this path is correct
          alt="CBM TV Logo"
          width={100}
          height={40}
        />
      </div>

      {/* CBM Brothers Product Text */}
      <p style={{ fontSize: "0.9rem", color: "#ccc" }}>
        © {new Date().getFullYear()} CBM TV – A product of CBM Brothers. All rights reserved.
      </p>
    </footer>
  );
}
