"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-socials">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="Twitter"><FaXTwitter /></a>
        <a href="#" aria-label="Instagram"><FaInstagram /></a>
        <a href="#" aria-label="YouTube"><FaYoutube /></a>
        <a href="#" aria-label="WhatsApp"><FaWhatsapp /></a>
        <a href="#" aria-label="TikTok"><FaTiktok /></a>
      </div>

      <p className="footer-text">
        © {new Date().getFullYear()} CBM TV – A CBM Brothers Product. All rights reserved.
      </p>

      <div className="footer-links">
        <a href="#">Privacy Policy</a>
        <a href="#">Terms of Use</a>
        <a href="#">Advertise</a>
        <a href="#">Contact Us</a>
      </div>
    </footer>
  );
}
