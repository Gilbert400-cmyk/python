import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        <h1 className="text-2xl font-bold text-indigo-600">Laptify</h1>
        <nav className="space-x-6">
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#products" className="hover:text-indigo-600">Products</a>
          <a href="#newsletter" className="hover:text-indigo-600">Newsletter</a>
        </nav>
      </div>
    </header>
  );
}
