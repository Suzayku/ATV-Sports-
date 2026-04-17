import { Users, Target, Zap, Globe } from 'lucide-react'

export default function Stats() {
  const stats = [
    {
      icon: <Users size={40} />,
      value: '10,578',
      label: 'Active Users',
      color: 'from-yellow-600 to-yellow-500'
    },
    {
      icon: <Target size={40} />,
      value: '50+',
      label: 'Live Events Daily',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      icon: <Zap size={40} />,
      value: '99.9%',
      label: 'Uptime',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      icon: <Globe size={40} />,
      value: '180+',
      label: 'Countries',
      color: 'from-yellow-500 to-yellow-400'
    }
  ]

  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="glass card-hover p-6 rounded-lg text-center border border-gray-200"
            >
              <div className="bg-gray-100 p-3 rounded-lg w-12 h-12 flex items-center justify-center mx-auto mb-3">
                <div className="text-black">{stat.icon}</div>
              </div>
              <div className="text-3xl font-bold mb-1 text-black">
                {stat.value}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
