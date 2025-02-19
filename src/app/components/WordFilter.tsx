'use client'
import React, { useState } from 'react';

interface WordGroup {
  words: string[];
  inputValue: string;
}

export default function WordFilter() {
  const [selectedFilter, setSelectedFilter] = useState<'specific' | 'any'>('specific');
  
  const [specificWords, setSpecificWords] = useState<WordGroup>({
    words: ["Price", "Product"],
    inputValue: ""
  });

  const [anyWords, setAnyWords] = useState<WordGroup>({
    words: [],
    inputValue: ""
  });

  const handleAddWord = (type: 'specific' | 'any') => {
    const currentGroup = type === 'specific' ? specificWords : anyWords;
    const setGroup = type === 'specific' ? setSpecificWords : setAnyWords;
    
    if (currentGroup.inputValue.trim()) {
      setGroup({
        words: [...currentGroup.words, currentGroup.inputValue.trim()],
        inputValue: ""
      });
    }
  };

  const handleRemoveWord = (type: 'specific' | 'any', wordToRemove: string) => {
    const currentGroup = type === 'specific' ? specificWords : anyWords;
    const setGroup = type === 'specific' ? setSpecificWords : setAnyWords;
    
    setGroup({
      ...currentGroup,
      words: currentGroup.words.filter(word => word !== wordToRemove)
    });
  };

  const WordFilterSection = ({ type, title }: { type: 'specific' | 'any', title: string }) => {
    const currentGroup = type === 'specific' ? specificWords : anyWords;
    const setGroup = type === 'specific' ? setSpecificWords : setAnyWords;

    return (
      <div className="p-4 bg-opacity-50 rounded-lg space-y-4">
        <div className="flex items-center justify-between">
          <span className="text-md text-[#F6F6F6] font-semibold">{title}</span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input 
              type="radio"
              name="wordFilter"
              className="w-5 h-5 accent-[#e5fb24]"
              checked={selectedFilter === type}
              onChange={() => setSelectedFilter(type)}
            />
          </label>
        </div>

        {type === 'specific' && (
          <>
            <div className={`flex gap-2 bg-[#282828] p-4 rounded-lg ${selectedFilter !== type ? 'opacity-50' : ''}`}>
              <input
                type="text"
                placeholder="Add a word and Press plus"
                className="flex-1 bg-transparent rounded-lg px-2 py-2 text-sm border-0 focus:outline-none text-white"
                value={currentGroup.inputValue}
                onChange={(e) => setGroup({ ...currentGroup, inputValue: e.target.value })}
                onKeyPress={(e) => e.key === 'Enter' && selectedFilter === type && handleAddWord(type)}
                disabled={selectedFilter !== type}
              />
              <button 
                className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-6 rounded-lg hover:bg-opacity-20 transition-colors disabled:opacity-50"
                onClick={() => handleAddWord(type)}
                disabled={selectedFilter !== type}
              >
                Add
              </button>
            </div>

            <div className="flex flex-wrap gap-2">
              {currentGroup.words.map((word) => (
                <div
                  key={word}
                  className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
                >
                  {word}
                  <button 
                    onClick={() => handleRemoveWord(type, word)}
                    className="hover:text-white transition-colors"
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    );
  };

  return (
    <div className="mb-6">
      <h1 className="text-xl text-[#F6F6F6] mb-4 ml-2 font-semibold">And this comment has</h1>
      <div className="space-y-4 bg-divColour p-4 rounded-2xl border border-borderColour">
        <WordFilterSection type="specific" title="a specific word or words" />
        <WordFilterSection type="any" title="any word or words" />
      </div>
    </div>
  );
} 