import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed w-full bg-gradient-to-r from-blue-950 to-blue-900 backdrop-blur-sm z-50 border-b border-blue-800">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center gap-2">
            <img src="/ATV-Sports-/icon.png" alt="ATV Sports" className="h-7 w-7 rounded" />
            <span className="text-xl font-bold text-white">ATV Sports</span>
          </div>

          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-blue-200 hover:text-white transition text-sm">Features</a>
            <a href="#screenshots" className="text-blue-200 hover:text-white transition text-sm">Gallery</a>
            <a href="#faq" className="text-blue-200 hover:text-white transition text-sm">FAQ</a>
            <a href="#download" className="btn-primary text-sm">Download Now</a>
          </div>

          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#features" className="block text-blue-200 hover:text-white py-2 text-sm">Features</a>
            <a href="#screenshots" className="block text-blue-200 hover:text-white py-2 text-sm">Gallery</a>
            <a href="#faq" className="block text-blue-200 hover:text-white py-2 text-sm">FAQ</a>
            <button className="btn-primary w-full text-sm">Download Now</button>
          </div>
        )}
      </nav>
    </header>
  )
}
