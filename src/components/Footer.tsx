import { Link } from 'react-router-dom'
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa'

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-12 mt-auto">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* Company Info Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">AI Adventure</h3>
              <p className="text-gray-300 leading-relaxed">
                Experience the future of storytelling through the power of artificial intelligence.
              </p>
            </div>
  
            {/* Quick Links Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Quick Links</h3>
              <ul className="text-gray-300 space-y-2">
                <li>
                  <Link 
                    to="/about" 
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/contact" 
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Contact
                  </Link>
                </li>
                <li>
                  <Link 
                    to="/play" 
                    className="hover:text-white hover:translate-x-1 transition-all duration-200 inline-block"
                  >
                    Play Now
                  </Link>
                </li>
              </ul>
            </div>
  
            {/* Social Media Section */}
            <div>
              <h3 className="text-xl font-bold mb-4 text-gray-100">Connect</h3>
              <div className="flex space-x-4">
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                >
                  <FaFacebook size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                >
                  <FaTwitter size={24} />
                </a>
                <a 
                  href="#" 
                  className="text-gray-300 hover:text-white transition-colors duration-200 w-8 h-8 flex items-center justify-center"
                >
                  <FaInstagram size={24} />
                </a>
              </div>
            </div>
          </div>
  
          <div className="text-center text-gray-400 mt-12 pt-8 border-t border-gray-700">
            <p>&copy; {new Date().getFullYear()} AI Adventure. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }