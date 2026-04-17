import { Download, Smartphone, Play, Zap, TrendingUp } from 'lucide-react'

export default function Hero() {
  return (
    <section id="download" className="relative pt-24 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto relative z-10">
        {/* Logo - Clean and Simple */}
        <div className="mb-8 text-center">
          <div className="inline-block p-3 bg-gray-100 rounded-2xl shadow-sm">
            <img src="https://www.atvsports.live/icon.png" alt="ATV Sports" className="h-20 w-20 rounded-lg" />
          </div>
        </div>

        {/* Main heading - Bold and Clean */}
        <h1 className="text-5xl sm:text-6xl font-black mb-4 text-center text-black">
          ATV Sports
        </h1>

        {/* Subheading - Simple */}
        <p className="text-xl sm:text-2xl text-gray-600 font-semibold mb-4 text-center">
          Live Sports Streaming Platform
        </p>

        {/* Description - Minimal */}
        <p className="text-base text-gray-600 mb-8 max-w-3xl mx-auto text-center leading-relaxed">
          Experience the ultimate live sports streaming with crystal-clear HD quality. 
          Watch <span className="font-semibold text-black">Cricket, Football, Basketball</span> and 
          more sports with <span className="font-semibold text-black">zero interruptions</span>.
        </p>

        {/* Stats row - Compact */}
        <div className="grid grid-cols-3 gap-3 mb-10 max-w-2xl mx-auto">
          <div className="glass p-3 rounded-lg text-center border border-gray-200">
            <div className="text-xl font-bold text-black">50+</div>
            <div className="text-xs text-gray-600">Sports Events</div>
          </div>
          <div className="glass p-3 rounded-lg text-center border border-gray-200">
            <div className="text-xl font-bold text-black">570886</div>
            <div className="text-xs text-gray-600">Active Users</div>
          </div>
          <div className="glass p-3 rounded-lg text-center border border-gray-200">
            <div className="text-xl font-bold text-black">24/7</div>
            <div className="text-xs text-gray-600">Live Streaming</div>
          </div>
        </div>

        {/* Download buttons - Compact */}
        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <a
            href="https://github.com/chinkulj/t/releases/download/v10.1.0/app-release.apk"
            download="ATV-Sports.apk"
            className="btn-primary flex items-center justify-center gap-2"
          >
            <Download size={20} />
            Download for Android
          </a>

          <button className="btn-secondary flex items-center justify-center gap-2 cursor-not-allowed opacity-50">
            <Smartphone size={20} />
            iOS Coming Soon
          </button>
        </div>

        {/* Feature cards - Compact and Simple */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass card-hover p-6 rounded-lg border border-gray-200">
            <Zap size={32} className="text-black mb-3" />
            <h3 className="text-lg font-bold mb-2 text-black">Lightning Fast</h3>
            <p className="text-sm text-gray-600">Minimal buffering with optimized streaming</p>
          </div>

          <div className="glass card-hover p-6 rounded-lg border border-gray-200">
            <TrendingUp size={32} className="text-black mb-3" />
            <h3 className="text-lg font-bold mb-2 text-black">HD Quality</h3>
            <p className="text-sm text-gray-600">Watch in stunning clarity with adaptive bitrate</p>
          </div>

          <div className="glass card-hover p-6 rounded-lg border border-gray-200">
            <Play size={32} className="text-black mb-3" />
            <h3 className="text-lg font-bold mb-2 text-black">Ad-Free Zone</h3>
            <p className="text-sm text-gray-600">Uninterrupted viewing experience 24/7</p>
          </div>
        </div>
      </div>
    </section>
  )

}
