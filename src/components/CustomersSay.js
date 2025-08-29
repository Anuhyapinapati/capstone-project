import React from "react";
import { FaStar } from "react-icons/fa"; 
import user1 from "../images/user1.jpg";
import user2 from "../images/user2.jpg";
import user3 from "../images/user3.jpg";
import user4 from "../images/user4.jpg";

function CustomersSay() {
  const testimonials = [
    {
      name: "Alex",
      review: "The best Greek salad I’ve ever had! Fresh and tasty.",
      image: user1, // replace with real image paths
      rating: 5,
    },
    {
      name: "john",
      review: "Bruschetta was amazing, I’ll definitely be back!",
      image: user2,
      rating: 4,
    },
    {
      name: "Maria",
      review: "The lemon dessert is heavenly. And the service is great and all the foods are amazing.A must-try!",
      image: user3,
      rating: 5,
    },
    {
      name: "sofia",
      review: "The Greek salad is very good. And I really like the ambience of the little lemon.Recommended place!",
      image: user4,
      rating: 5,
    },
  ];

  return (
    <section className="testimonials" aria-labelledby="testimonials-heading">
      <h2 id="testimonials-heading">What Our Customers Say</h2>

      <div className="testimonial-grid">
        {testimonials.map((t, index) => (
          <article key={index} className="testimonial-card" role="article">
            {/* Star Rating */}
            <div className="stars" aria-label={`${t.rating} out of 5 stars`}>
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  color={i < t.rating ? "#FFD700" : "#ddd"}
                  aria-hidden="true"
                />
              ))}
            </div>

            {/* User Image */}
            <img
              src={t.image}
              alt={`Photo of ${t.name}`}
              className="testimonial-img"
            />

            {/* Review Text */}
            <p className="review">“{t.review}”</p>
            <strong>- {t.name}</strong>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;
