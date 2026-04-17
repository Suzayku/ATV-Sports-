import { Mail, Link, Share } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="/icon.png" alt="ATV Sports" className="h-7 w-7 rounded" />
              <span className="text-lg font-bold text-black">ATV Sports</span>
            </div>
            <p className="text-gray-600 text-xs">
              Your one-stop destination for live sports and TV channels.        
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-black">Quick Links</h3>
            <ul className="space-y-1 text-gray-600 text-xs">
              <li><a href="#features" className="hover:text-black transition">Features</a></li>
              <li><a href="#screenshots" className="hover:text-black transition">Gallery</a></li>
              <li><a href="#faq" className="hover:text-black transition">FAQ</a></li>
              <li><a href="#download" className="hover:text-black transition">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-black">Legal</h3>
            <ul className="space-y-1 text-gray-600 text-xs">
              <li><a href="#" className="hover:text-black transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-black transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-black transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-black">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="text-gray-600 hover:text-black transition">
                <Share size={18} />
              </a>
              <a href="#" className="text-gray-600 hover:text-black transition">
                <Share size={18} />
              </a>
              <a href="https://github.com/chinkulj" className="text-gray-600 hover:text-black transition">
                <Link size={18} />
              </a>
              <a href="mailto:contact@atvsports.live" className="text-gray-600 hover:text-black transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-6">
          <p className="text-gray-600 text-center text-xs">
            © 2024 ATV Sports. All rights reserved. | Stream responsibly.      
          </p>
        </div>
      </div>
    </footer>
  )
}
