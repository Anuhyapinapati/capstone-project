import React from "react";
import chef from "../images/chef-serving-food-stockcake.jpg";

function CallToAction() {
  return (
    <section className="hero" aria-labelledby="hero-heading" role="region">
      <div className="hero-text">
        <h1 id="hero-heading">Welcome to Little Lemon</h1>
        <p>Savor authentic Mediterranean flavors made with fresh, locally sourced ingredients. Whether it’s a cozy dinner, a family celebration, or a quick bite, Little Lemon is here to make every meal special.</p>
        <ul><li><a href="/booking"><button
          className="reserve"
          aria-label="Reserve a table at Little Lemon Restaurant">
          Reserve a Table
        </button></a></li>
        </ul>
      </div>
      <img src={chef} alt="Chef serving freshly prepared Mediterranean dishes at Little Lemon Restaurant" role="img"/>
    </section>
  );
}

export default CallToAction;
