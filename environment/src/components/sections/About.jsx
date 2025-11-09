import React from "react";

export default function About() {
  const aboutImg = "https://images.unsplash.com/photo-1611078489935-0cb964de46d4?auto=format&fit=crop&w=800&q=80";

  return (
    <section id="about" className="bg-white py-16 px-6">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <img
            src={aboutImg}
            alt="About Laptify"
            className="rounded-2xl shadow-md w-full"
          />
        </div>

        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold mb-4">About Laptify</h2>
          <p className="text-gray-600 mb-4">
            At Laptify, we design accessories that redefine your laptop workspace.
            From ergonomic stands to sleek hubs, every item is crafted for
            durability and innovation.
          </p>
          <p className="text-gray-600">
            Join thousands of satisfied users upgrading their daily tech experience
            with Laptify's modern and stylish gear.
          </p>
        </div>
      </div>
    </section>
  );
}
