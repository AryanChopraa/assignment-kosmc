import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white max-w-md mx-auto">
    {/* Header */}
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
      <h1 className="text-lg font-medium">When Someone comments on</h1>
    </header>

    <main className="px-4 pb-20">
      {/* Post Preview Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-2">
          <p className="text-sm text-gray-400">a specific post or reel</p>
          <button className="text-[#e5fb24] text-sm hover:underline">View more</button>
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
                <span className="text-sm font-bold">CONSISTENT</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Word Filter Section */}
      <div className="mb-6">
        <p className="text-sm text-gray-400 mb-4">And this comment has</p>
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <span className="text-sm">a specific word or words</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" defaultChecked />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#e5fb24]"></div>
            </label>
          </div>

          <div className="flex gap-2">
            <input
              type="text"
              placeholder="Add a word and Press plus"
              className="flex-1 bg-gray-900 bg-opacity-50 rounded-lg px-4 py-2 text-sm border-0 focus:outline-none focus:ring-1 focus:ring-[#e5fb24]"
            />
            <button className="bg-[#e5fb24] text-black px-6 rounded-lg hover:bg-opacity-90 transition-colors">
              Add
            </button>
          </div>

          <div className="flex gap-2">
            {["Price", "Product"].map((tag) => (
              <div
                key={tag}
                className="bg-[#e5fb24] bg-opacity-10 text-[#e5fb24] px-3 py-1.5 rounded-full text-sm flex items-center gap-2"
              >
                {tag}
                <div className="w-2 h-2 rounded-full bg-[#e5fb24]" />
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <span className="text-sm">any word or words</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#e5fb24]"></div>
            </label>
          </div>
        </div>
      </div>

      {/* Reply Settings Section */}
      <div className="mb-6">
        <h2 className="text-base mb-4">Setup Public Reply in the comment</h2>
        <div className="space-y-3">
          <div className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <label className="text-sm">Yes, Set random replies on comment</label>
            <input type="radio" name="reply" className="w-5 h-5 accent-[#e5fb24]" defaultChecked />
          </div>

          <div className="p-4 bg-gray-900 bg-opacity-50 rounded-lg space-y-2">
            <p className="text-sm text-[#e5fb24]">Note : Customize your comments - click to add</p>
            {["Thanks for the comment!", "We will send you DM regarding your query", "ola!"].map((text, i) => (
              <div key={i} className="p-3 bg-gray-800 bg-opacity-50 rounded text-sm">
                {text}
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between p-4 bg-gray-900 bg-opacity-50 rounded-lg">
            <label className="text-sm">No, Continue</label>
            <input type="radio" name="reply" className="w-5 h-5 accent-[#e5fb24]" />
          </div>
        </div>
      </div>

      {/* Media Selection Section */}
      <div className="mb-6">
        <h2 className="text-base mb-4">Select the media you want to send as message</h2>
        <div className="space-y-2">
          {["Gallery", "Simple Message", "Button Template", "Data Collection", "Quick Reply"].map((option, i) => (
            <button
              key={i}
              className={`w-full p-4 text-left rounded-lg transition-colors hover:bg-gray-800 
                ${i === 0 ? "bg-[#e5fb24] bg-opacity-10 text-[#e5fb24]" : "bg-gray-900 bg-opacity-50"}`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {/* Next Button */}
      <div className="fixed bottom-0 left-0 right-0 p-4 max-w-md mx-auto bg-black">
        <button className="w-full bg-[#e5fb24] text-black hover:bg-opacity-90 transition-colors py-6 text-lg rounded-lg font-medium">
          NEXT →
        </button>
      </div>
    </main>
  </div>
  );
}
