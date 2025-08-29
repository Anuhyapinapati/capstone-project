import React from "react";
import about1 from "../images/about1.webp";   // first image
import about2 from "../images/about2.jpg"; // second image

export default function About() {
  return (
    <section className="about-section">
      {/* Left side: text */}
      <div className="about-text">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Little Lemon is a family-owned Mediterranean restaurant located in the heart of Chicago.
          We blend authentic recipes with modern twists, creating dishes full of flavor and tradition.
          Whether you’re here for a quick bite or a full meal, our chefs ensure every plate is made with love.
        </p>
      </div>

      {/* Right side: overlapping images */}
      <div className="about-images">
        <img
          src={about1}
          alt="Restaurant interior with cozy dining tables"
          className="img img-top"
        />
        <img
          src={about2}
          alt="Chef preparing Mediterranean dishes"
          className="img img-bottom"
        />
      </div>
    </section>
  );
}
