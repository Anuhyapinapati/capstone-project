import React from "react";
import GreekSalad from "../images/GreekSalad.jpg";
import Bruschetta from "../images/bruschetta.jpg";
import LemonDessert from "../images/lemon dessert.jpg";

function Specials() {
  return (
    <section
      className="highlights"
      aria-labelledby="specials-heading">
      <div className="specials-header">
        <h2 id="specials-heading">This Week’s Specials!</h2>
        <a href="/menu" className="special-btn" aria-label="View the full online menu">
          Online menu
        </a>


      </div>

      <div className="cards">
        {/* Greek Salad */}
        <article
          className="card"
          aria-labelledby="greek-salad-title"
        >
          <img
            src={GreekSalad}
            alt="Bowl of fresh Greek Salad with feta cheese and olives"
          />
          <div className="card-title">
            <h3 id="greek-salad-title">Greek Salad</h3>
            <p className="price" aria-label="Price 12 dollars 67 cents">
              $12.67
            </p>
          </div>
          <p>Fresh vegetables, feta cheese, and olives with tangy dressing.</p>
        </article>

        {/* Bruschetta */}
        <article
          className="card"
          aria-labelledby="bruschetta-title"
        >
          <img
            src={Bruschetta}
            alt="Bruschetta topped with tomatoes and herbs"
          />
          <div className="card-title">
            <h3 id="bruschetta-title">Bruschetta</h3>
            <p className="price" aria-label="Price 12 dollars 67 cents">
              $12.67
            </p>
          </div>
          <p>Grilled bread rubbed with garlic and topped with tomatoes.</p>
        </article>

        {/* Lemon Dessert */}
        <article
          className="card"
          aria-labelledby="lemon-dessert-title"
        >
          <img
            src={LemonDessert}
            alt="Lemon dessert cake with cream topping"
          />
          <div className="card-title">
            <h3 id="lemon-dessert-title">Lemon Dessert</h3>
            <p className="price" aria-label="Price 12 dollars 67 cents">
              $12.67
            </p>
          </div>
          <p>Sweet and tangy lemon cake with cream topping.</p>
        </article>
      </div>
    </section>
  );
}

export default Specials;
