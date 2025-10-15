import React from "react";
import logo from "../images/about1.webp"; // change path if needed

export default function Footer() {
  return (
    <footer className="footer">
      {/* Left side: logo */}
      <div className="footer-logo">
        <img src={logo} alt="Little Lemon Logo" />
      </div>

      {/* Right side: 3 columns */}
      <div className="footer-links">
        {/* Contact */}
        <div className="footer-column">
          <h4>Contact</h4>
          <p>123 Main St, Chicago, IL</p>
          <p>(555) 123-4567</p>
          <p>info@littlelemon.com</p>
        </div>

        {/* Social Media */}
        <div className="footer-column">
          <h4>Social Media</h4>
          <ul>
            <li><a href="/facebook">Facebook</a></li>
            <li><a href="/instagram">Instagram</a></li>
            <li><a href="/twitter">Twitter</a></li>
          </ul>
        </div>

        {/* Doormat Navigation */}
        <div className="footer-column">
          <h4>Navigation</h4>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/booking">Reservations</a></li>
            <li><a href="/order">Order Online</a></li>
            <li><a href="/login">Login</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
