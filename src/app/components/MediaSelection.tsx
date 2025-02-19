'use client'
import React, { useState } from 'react';

export default function MediaSelection() {
  const [selectedOption, setSelectedOption] = useState(0);

  return (
    <div className="mb-6">
      <h1 className="text-xl text-white mb-4 ml-2 font-medium">Select the media you want to send as message</h1>
      <div className="space-y-2 bg-divColour p-4 rounded-2xl border border-borderColour">
        {["Gallery", "Simple Message", "Button Template", "Data Collection", "Quick Reply"].map((option, i) => (
          <button
            key={i}
            onClick={() => setSelectedOption(i)}
            className={`w-full p-4 text-left rounded-2xl transition-colors hover:bg-[#282828] focus:outline-none
              ${selectedOption === i 
                ? "bg-[#282B00] border border-[#E1F21A66] text-gray-400" 
                : "bg-[#363535] bg-opacity-50 text-gray-400 border border-transparent"}`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
} 