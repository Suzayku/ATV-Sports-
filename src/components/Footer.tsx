import { Mail, Link, Share } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-purple-950 to-black border-t border-purple-800 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <img src="https://www.atvsports.live/icon.png" alt="ATV Sports" className="h-10 w-10 rounded" />
              <span className="text-lg font-bold text-white">ATV Sports</span>
            </div>
            <p className="text-purple-200 text-xs">
              Your one-stop destination for live sports and TV channels.        
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-white">Quick Links</h3>
            <ul className="space-y-1 text-purple-200 text-xs">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#screenshots" className="hover:text-white transition">Gallery</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
              <li><a href="#download" className="hover:text-white transition">Download</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-white">Legal</h3>
            <ul className="space-y-1 text-purple-200 text-xs">
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-3 text-sm text-white">Follow Us</h3>
            <div className="flex gap-3">
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Share size={18} />
              </a>
              <a href="#" className="text-purple-200 hover:text-white transition">
                <Share size={18} />
              </a>
              <a href="https://github.com/chinkulj" className="text-purple-200 hover:text-white transition">
                <Link size={18} />
              </a>
              <a href="mailto:contact@atvsports.live" className="text-purple-200 hover:text-white transition">
                <Mail size={18} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-purple-800 pt-6">
          <p className="text-purple-200 text-center text-xs">
            © 2024 ATV Sports. All rights reserved. | Stream responsibly.      
          </p>
        </div>
      </div>
    </footer>
  )
}
