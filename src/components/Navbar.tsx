import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-gray-800/95 backdrop-blur-sm p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-xl">AI Adventure</div>
        <div className="space-x-4">
          <Link to="/" className="text-white hover:text-gray-300">Home</Link>
          <Link to="/about" className="text-white hover:text-gray-300">About</Link>
          <Link to="/contact" className="text-white hover:text-gray-300">Contact</Link>
        </div>
      </div>
    </nav>
  )
} 