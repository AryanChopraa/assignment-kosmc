'use client'
import React, { useState } from 'react';

interface WordFilterSectionProps {
  type: 'specific' | 'any';
  title: string;
  isSelected: boolean;
  onSelect: () => void;
}

const WordFilterSection = ({ type, title, isSelected, onSelect }: WordFilterSectionProps) => {
  const [words, setWords] = useState<string[]>(["Price", "Product"]);
  const [inputWord, setInputWord] = useState('');

  const handleAddWord = () => {
    if (inputWord.trim()) {
      setWords([...words, inputWord.trim()]);
      setInputWord('');
    }
  };

  const handleRemoveWord = (wordToRemove: string) => {
    setWords(words.filter(word => word !== wordToRemove));
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleAddWord();
    }
  };

  return (
    <div className="p-4 bg-opacity-50 rounded-lg space-y-4">
      <div className="flex items-center justify-between">
        <span className="text-md text-[#F6F6F6] font-medium">{title}</span>
        <label className="relative inline-flex items-center">
          <input 
            type="radio"
            name="wordFilter"
            className={`w-5 h-5 accent-[#e5fb24] appearance-none rounded-full border relative ${
              isSelected 
                ? 'border-[#e5fb24] bg-divColour before:absolute before:w-3 before:h-3 before:rounded-full before:bg-[#e5fb24] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2' 
                : 'border-white bg-divColour'
            }`}
            checked={isSelected}
            onChange={onSelect}
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
              value={inputWord}
              onChange={(e) => setInputWord(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <button 
              className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-6 rounded-lg hover:bg-opacity-20 transition-colors"
              onClick={handleAddWord}
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
                <span 
                  className="bg-white text-gray-500 w-4 h-4 rounded-full flex items-center justify-center text-xs border border-gray-300 hover:bg-gray-100 transition-colors cursor-pointer pb-0.5"
                  onClick={() => handleRemoveWord(word)}
                >
                  ×
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default function WordFilter() {
  const [selectedType, setSelectedType] = useState<'specific' | 'any'>('specific');

  return (
    <div className="mb-6">
      <h1 className="text-xl text-[#F6F6F6] mb-4 ml-2 font-medium">And this comment has</h1>
      <div className=" bg-divColour py-2 rounded-2xl border border-borderColour">
        <WordFilterSection 
          type="specific" 
          title="a specific word or words" 
          isSelected={selectedType === 'specific'}
          onSelect={() => setSelectedType('specific')}
        />
        <WordFilterSection 
          type="any" 
          title="any word or words" 
          isSelected={selectedType === 'any'}
          onSelect={() => setSelectedType('any')}
        />
      </div>
    </div>
  );
} 