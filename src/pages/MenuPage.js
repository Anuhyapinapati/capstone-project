import React from "react";

const menuData = {
  Starters: [
    { name: "Bruschetta", price: "$6", description: "Grilled bread with garlic, tomatoes & basil." },
    { name: "Stuffed Mushrooms", price: "$8", description: "Mushrooms stuffed with cheese & herbs." },
  ],
  Mains: [
    { name: "Pasta Primavera", price: "$14", description: "Fresh vegetables tossed in pasta." },
    { name: "Grilled Salmon", price: "$18", description: "Salmon with lemon butter sauce." },
  ],
  Desserts: [
    { name: "Tiramisu", price: "$7", description: "Classic Italian coffee-flavored dessert." },
    { name: "Cheesecake", price: "$6", description: "Creamy cheesecake with berry sauce." },
  ],
  Drinks: [
    { name: "Red Wine", price: "$10", description: "Full-bodied red wine." },
    { name: "Lemonade", price: "$4", description: "Freshly squeezed lemonade." },
  ],
};

export default function MenuPage() {
  return (
    <main className="menu">
      <h1>Our Menu</h1>
      {Object.keys(menuData).map((category) => (
        <section key={category} className="menu-category">
          <h2>{category}</h2>
          <div className="menu-items">
            {menuData[category].map((item, index) => (
              <div key={index} className="menu-card">
                <h3>{item.name}</h3>
                <p className="description">{item.description}</p>
                <p className="price">{item.price}</p>
              </div>
            ))}
          </div>
        </section>
      ))}
    </main>
  );
}
