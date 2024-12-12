import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className="flex flex-col items-center text-center space-y-8">
      <div className="max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-6 tracking-tight">
          Welcome to AI Adventure
        </h1>
        <p className="text-xl text-gray-300 mb-8">
          Embark on an epic journey where your choices shape the story. Experience a unique adventure powered by artificial intelligence.
        </p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-colors">
          Play Now
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-16">
        {/* Feature cards */}
        <div className="bg-gray-800 p-6 rounded-xl">
          <h3 className="text-2xl font-semibold text-white mb-4">Interactive Story</h3>
          <p className="text-gray-300">Your choices matter in this dynamic adventure.</p>
        </div>
        {/* Add more feature cards as needed */}
      </div>
    </div>
  )
}
