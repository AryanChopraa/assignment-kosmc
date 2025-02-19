import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function NextButton() {
  return (
    <div className="pt-2 pb-6 bg-black">
      <button className="w-full bg-[#e5fb24] text-black hover:bg-opacity-90 transition-colors py-6 text-lg rounded-2xl font-semibold flex items-center justify-center gap-2">
        NEXT <ArrowRight className="w-5 h-5" />
      </button>
    </div>
  );
} 