import React from 'react';

interface WordFilterSectionProps {
  type: 'specific' | 'any';
  title: string;
}

const WordFilterSection = ({ type, title }: WordFilterSectionProps) => {
  const words = type === 'specific' ? ["Price", "Product"] : [];

  return (
    <div className="p-4 bg-opacity-50 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-md text-[#F6F6F6] font-medium">{title}</span>
        <label className="relative inline-flex items-center">
          <input 
            type="radio"
            name="wordFilter"
            className="w-5 h-5 accent-[#e5fb24]"
            checked={type === 'specific'}
            readOnly
          />
        </label>
      </div>

      {type === 'specific' && (
        <>
          <div className="flex gap-2 bg-[#282828] p-4 rounded-lg">
            <input
              type="text"
              placeholder="Add a word and Press plus"
              className="flex-1 bg-transparent rounded-lg py-2 text-sm border-0 focus:outline-none text-white"
              value=""
              readOnly
            />
            <button 
              className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-6 rounded-lg hover:bg-opacity-20 transition-colors"
            >
              Add
            </button>
          </div>

          <div className="flex flex-wrap gap-2">
            {words.map((word) => (
              <div
                key={word}
                className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
              >
                {word}
                <span className="hover:text-white transition-colors">×</span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function WordFilter() {
  return (
    <div className="mb-6">
      <h1 className="text-xl text-[#F6F6F6] mb-4 ml-2 font-medium">And this comment has</h1>
      <div className="space-y-4 bg-divColour py-2 rounded-2xl border border-borderColour">
        <WordFilterSection type="specific" title="a specific word or words" />
        <WordFilterSection type="any" title="any word or words" />
      </div>
    </div>
  );
} 