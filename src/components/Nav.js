import React from "react";
import { Link } from "react-router-dom";
import lemonlogo from "../images/lemon logo.jpg";

export default function Nav() {
  return (
    <nav className="nav" role="navigation" aria-label="Main navigation">
      {/* Left side: logo + text */}
      <div className="logo-container">
        <img src={lemonlogo} alt="Little Lemon Logo" className="logo" />
        <h1 className="littlelemon">Little Lemon</h1>
      </div>

      {/* Right side: navigation links */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}
