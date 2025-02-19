import React from 'react';

export default function ReplySettings() {
  return (
    <div className="mb-6">
      <h1 className="text-xl text-[#F6F6F6] mb-4 ml-2 font-medium">Setup Public Reply in the comment</h1>
      <div className="space-y-3 bg-divColour p-4 rounded-2xl border border-borderColour">
        <div className='flex flex-col gap-2 py-2'>
        <div className="flex items-center justify-between bg-opacity-50 rounded-lg">
          <label className="text-md font-medium">Yes, Set random replies on comment</label>
          <input type="radio" name="reply" className="w-5 h-5 accent-[#e5fb24]" defaultChecked />

        </div>
        <p className="text-sm font-[500px]"> <span className='font-medium text-[#e5fb24]'>Note : </span> Customize your comments - click to add</p>

        </div>

        <div className="py-2 bg-opacity-50 rounded-lg space-y-2">
          {["Thanks for the comment!", "We will send you DM regarding your query", "ola!"].map((text, i) => (
            <div key={i} className="p-3 bg-[#282828] rounded-2xl text-[15px] text-gray-400">
              {text}
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-2 bg-opacity-50 rounded-lg">
          <label className="text-md font-medium">No, Continue</label>
          <input type="radio" name="reply" className="w-5 h-5 accent-[#e5fb24]" />
        </div>
      </div>
    </div>
  );
} 