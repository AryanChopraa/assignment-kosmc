import React from 'react';

export default function PostPreview() {
  return (
    <div>
    <h1 className="text-xl text-[#F6F6F6] mb-4 ml-2 font-medium">When Someone comments on</h1>
    <div className="mb-6 bg-divColour p-4 rounded-2xl border border-borderColour">
  
      <div className="flex items-center justify-between mb-2">
        <p className="text-md text-white font-medium">a specific post or reel</p>
        <button className="text-[#e5fb24] text-sm font-medium hover:underline">View more</button>
      </div>
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="relative min-w-[100px] h-[100px] rounded-lg overflow-hidden border border-gray-800"
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-19%20at%2012.39.09%E2%80%AFPM-orLzpBGBOLJ0RFZqktaJKTGq76OFgW.png"
              alt="Post preview"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
              <span className="text-sm font-extrabold italic ">CONSISTENT</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
} 