import { Zap, Globe, Lock, Users, Radio, Video } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: <Video size={36} />,
      title: 'Multi-Sport Coverage',
      description: 'Cricket, Football, Basketball, Tennis, Hockey & more live events',
      gradient: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: <Zap size={36} />,
      title: 'Ad-Free Experience',
      description: 'Zero interruptions, pure uninterrupted streaming pleasure',
      gradient: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Radio size={36} />,
      title: 'Live Channels',
      description: 'Multiple sports channels streaming simultaneously',
      gradient: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: <Globe size={36} />,
      title: 'Global Tournaments',
      description: 'Major leagues and international events worldwide',
      gradient: 'from-yellow-500 to-yellow-400'
    },
    {
      icon: <Users size={36} />,
      title: 'Multi-Device Sync',
      description: 'Watch on phone, tablet, or TV simultaneously',
      gradient: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: <Lock size={36} />,
      title: 'Secure Streaming',
      description: 'Fast, reliable, and secure viewing experience',
      gradient: 'from-yellow-500 to-yellow-600'
    }
  ]

  return (
    <section id="features" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">
          Powerful Features
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base">
          Experience the ultimate sports streaming platform with enterprise-grade features
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass card-hover p-6 rounded-lg border border-gray-200"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="bg-gray-100 p-3 rounded-lg w-10 h-10 flex items-center justify-center mb-4">
                <div className="text-black">{feature.icon}</div>
              </div>
              
              <h3 className="text-lg font-bold mb-2 text-black">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
