import React from "react";
import Button from "../common/Button";

export default function Hero() {
  const heroImg = "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=1200&q=80";

  return (
    <section className="relative bg-gray-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between py-16 px-6">
        <div className="max-w-lg mb-10 md:mb-0">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Elevate Your Laptop Experience
          </h1>
          <p className="text-gray-600 mb-6">
            Laptify brings you premium accessories for better comfort, speed, and style.
          </p>
          <Button>Shop Now</Button>
        </div>

        <div className="md:w-1/2 flex justify-center">
          <img
            src={heroImg}
            alt="Laptop Accessories"
            className="rounded-2xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
}
