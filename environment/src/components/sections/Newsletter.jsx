import React from "react";
import Button from "../common/Button";

export default function Newsletter() {
  return (
    <section id="newsletter" className="py-16 bg-indigo-600 text-white text-center px-6">
      <div className="container mx-auto max-w-xl">
        <h2 className="text-3xl font-bold mb-4">Join the Laptify Community</h2>
        <p className="mb-6">
          Get updates on our latest releases, exclusive deals, and design tips for your workspace.
        </p>
        <form className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded-lg text-gray-800 w-full sm:w-2/3"
          />
          <Button>Subscribe</Button>
        </form>
      </div>
    </section>
  );
}
