import { useEffect, useRef } from 'react'

export default function Screenshots() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)

  const posters = [
    {
      title: 'Cricket',
      subtitle: 'IPL & World Cup',
      icon: '🏏',
      color: 'bg-blue-100 border-blue-300'
    },
    {
      title: 'Football',
      subtitle: 'Premier League',
      icon: '⚽',
      color: 'bg-green-100 border-green-300'
    },
    {
      title: 'Basketball',
      subtitle: 'NBA & Tournaments',
      icon: '🏀',
      color: 'bg-orange-100 border-orange-300'
    },
    {
      title: 'Tennis',
      subtitle: 'Grand Slams',
      icon: '🎾',
      color: 'bg-yellow-100 border-yellow-300'
    },
    {
      title: 'Hockey',
      subtitle: 'International',
      icon: '🏒',
      color: 'bg-cyan-100 border-cyan-300'
    },
    {
      title: 'Baseball',
      subtitle: 'World Series',
      icon: '⚾',
      color: 'bg-red-100 border-red-300'
    },
    {
      title: 'Rugby',
      subtitle: 'Six Nations',
      icon: '🏉',
      color: 'bg-purple-100 border-purple-300'
    },
    {
      title: 'Volleyball',
      subtitle: 'Olympics',
      icon: '🏐',
      color: 'bg-pink-100 border-pink-300'
    },
    {
      title: 'Golf',
      subtitle: 'Major Tournaments',
      icon: '⛳',
      color: 'bg-emerald-100 border-emerald-300'
    },
    {
      title: 'Badminton',
      subtitle: 'International',
      icon: '🏸',
      color: 'bg-indigo-100 border-indigo-300'
    }
  ]

  useEffect(() => {
    const container = scrollContainerRef.current
    if (!container) return

    let scrollPosition = 0
    const scrollSpeed = 3
    let animationId: number

    const autoScroll = () => {
      scrollPosition += scrollSpeed
      
      // Reset to start when reaching the end
      if (scrollPosition >= container.scrollWidth - container.clientWidth) {
        scrollPosition = 0
      }
      
      container.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(autoScroll)
    }

    // Start auto-scroll
    animationId = requestAnimationFrame(autoScroll)

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId)
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(autoScroll)
    }

    container.addEventListener('mouseenter', handleMouseEnter)
    container.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      container.removeEventListener('mouseenter', handleMouseEnter)
      container.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  return (
    <section id="screenshots" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">
          Live Sports Coverage
        </h2>
        <p className="text-gray-600 text-center mb-12 text-base">
          Cricket, Football, Basketball & More Sports - All Ad-Free
        </p>

        {/* Auto-scrolling Poster Gallery */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-4 overflow-x-hidden scroll-smooth pb-4"
            style={{ scrollBehavior: 'smooth' }}
          >
            {posters.map((poster, index) => (
              <div
                key={index}
                className={`flex-shrink-0 w-64 h-80 ${poster.color} border-2 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <div className="text-6xl mb-4">{poster.icon}</div>
                <h3 className="text-2xl font-bold text-black text-center">{poster.title}</h3>
                <p className="text-sm text-gray-700 text-center mt-2">{poster.subtitle}</p>
              </div>
            ))}
            {/* Duplicate posters for seamless loop */}
            {posters.map((poster, index) => (
              <div
                key={`duplicate-${index}`}
                className={`flex-shrink-0 w-64 h-80 ${poster.color} border-2 rounded-xl p-6 flex flex-col items-center justify-center hover:shadow-lg transition-all duration-300 cursor-pointer transform hover:scale-105`}
              >
                <div className="text-6xl mb-4">{poster.icon}</div>
                <h3 className="text-2xl font-bold text-black text-center">{poster.title}</h3>
                <p className="text-sm text-gray-700 text-center mt-2">{poster.subtitle}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Info text */}
        <div className="text-center mt-8">
          <p className="text-gray-600 text-sm">✨ Hover to pause scrolling</p>
        </div>
      </div>
    </section>
  )
}
