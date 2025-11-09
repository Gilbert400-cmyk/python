import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center">
      <p>© {new Date().getFullYear()} Laptify. All rights reserved.</p>
    </footer>
  );
}
