import React from 'react';

export default function Header() {
  return (
    <header className="p-4 flex items-center gap-4">
      <button className="hover:bg-gray-800 p-2 rounded-full transition-colors">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 12H5M12 19l-7-7 7-7" />
        </svg>
      </button>
     
    </header>
  );
} 