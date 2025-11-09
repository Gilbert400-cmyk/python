import React from "react";
import Card from "../common/Card";

const products = [
  {
    name: "Laptop Stand",
    image: "https://images.unsplash.com/photo-1603791452906-bb4ec5a8d949?auto=format&fit=crop&w=800&q=80",
    description: "Ergonomic aluminum stand for better posture and cooling.",
  },
  {
    name: "Wireless Keyboard",
    image: "https://images.unsplash.com/photo-1593642532973-d31b6557fa68?auto=format&fit=crop&w=800&q=80",
    description: "Compact and quiet keyboard with premium key feel.",
  },
  {
    name: "Wireless Mouse",
    image: "https://images.unsplash.com/photo-1579389083078-4e7018379f7a?auto=format&fit=crop&w=800&q=80",
    description: "Precision control and comfort for long working hours.",
  },
  {
    name: "Laptop Bag",
    image: "https://images.unsplash.com/photo-1598970434795-0c54fe7c0642?auto=format&fit=crop&w=800&q=80",
    description: "Durable and stylish bag for travel and everyday use.",
  },
];

export default function Products() {
  return (
    <section id="products" className="py-16 px-6 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Products</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {products.map((item, index) => (
            <Card key={index} title={item.name} image={item.image} description={item.description} />
          ))}
        </div>
      </div>
    </section>
  );
}
