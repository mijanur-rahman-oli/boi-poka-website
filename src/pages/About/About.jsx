import React from 'react'

const About = () => {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16 text-gray-800">
      {/* Header */}
      <h1 className="text-4xl font-bold text-center mb-8 flex items-center justify-center gap-2">
        <span role="img" aria-label="books">📚</span> About Us
      </h1>

      {/* Description */}
      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        Welcome to <span className="font-semibold text-indigo-600">BoiPoka</span>, your one-stop destination for discovering, exploring, 
        and enjoying books that inspire. We believe reading opens doors to new worlds — sparking imagination, deepening knowledge, 
        and connecting people across cultures and ideas.
      </p>

      <p className="text-lg leading-relaxed text-gray-700 mb-6">
        At <span className="font-semibold text-indigo-600">BoiPoka</span>, we make it easy to find your next great read. Whether you’re into 
        timeless classics, thrilling adventures, or modern bestsellers, our curated collection is designed to match every reader’s taste.
      </p>

      {/* Mission Section */}
      <div className="bg-indigo-50 border-l-4 border-indigo-500 p-6 rounded-lg shadow-sm">
        <h2 className="text-2xl font-semibold mb-4 text-indigo-700">Our Mission</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>To help readers <span className="font-medium text-indigo-600">discover books they’ll love.</span></li>
          <li>To support authors and publishers by <span className="font-medium text-indigo-600">sharing their stories with more readers.</span></li>
          <li>To build a vibrant community where book lovers can <span className="font-medium text-indigo-600">share insights and recommendations.</span></li>
        </ul>
      </div>
    </div>
  )
}

export default About
