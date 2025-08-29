import React from "react";
import GreekSalad from "../images/GreekSalad.jpg";
import Bruschetta from "../images/bruschetta.jpg";
import LemonDessert from "../images/lemon dessert.jpg";
import dish from "../images/dish.webp";
import mussels from "../images/dish1.webp";
import food from "../images/Food.webp";

export default function OrderPage() {
  return (
    <main className="order">
      <h1>Order Online</h1>
      <p>Choose your favorite dishes and order online for delivery or pickup.</p>

      <div className="order-menu">
        <div className="order-card">
          <img src={GreekSalad} alt="Greek Salad" />
          <h3>Greek Salad</h3>
          <p>Fresh vegetables, feta cheese, and olives.</p>
          <button>Add to Cart</button>
        </div>

        <div className="order-card">
          <img src={Bruschetta} alt="Bruschetta" />
          <h3>Bruschetta</h3>
          <p>Grilled bread with garlic, tomatoes, and basil.</p>
          <button>Add to Cart</button>
        </div>

        <div className="order-card">
          <img src={dish} alt="baked salmon with veggies" />
          <h3>Baked salmon with veggies</h3>
          <p>Sweet and tangy lemon cake with cream.</p>
          <button>Add to Cart</button>
        </div>
        <div className="order-card">
          <img src={mussels} alt="steamed mussels" />
          <h3>Steamed Mussels</h3>
          <p>Sweet and tangy lemon cake with cream.</p>
          <button>Add to Cart</button>
        </div>
        <div className="order-card">
          <img src={food} alt="paya with rice" />
          <h3>Paya with rice</h3>
          <p>Sweet and tangy lemon cake with cream.</p>
          <button>Add to Cart</button>
        </div>

      </div>
    </main>
  );
}
