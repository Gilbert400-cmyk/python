import React from "react";

export default function Button({ children }) {
  return (
    <button className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-lg font-medium transition">
      {children}
    </button>
  );
}
