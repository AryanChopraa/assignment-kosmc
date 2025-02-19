'use client'
import React, { useState } from 'react';
import Image from 'next/image';

export default function     PostPreview() {
  const [selectedImage, setSelectedImage] = useState<number>(1);

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
              onClick={() => setSelectedImage(item)}
              className={`relative min-w-[100px] h-[100px] rounded-lg overflow-hidden cursor-pointer border ${
                selectedImage === item ? 'border-[#e5fb24]' : 'border-gray-800'
              }`}
            >
              <Image
                src="/dummyimage.svg"
                alt="Post preview"
                fill
                priority
                loading="eager"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjMjAyMDIwIi8+PC9zdmc+"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 