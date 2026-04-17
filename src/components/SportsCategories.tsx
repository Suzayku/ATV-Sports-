import { Activity, Trophy, Users, Radio } from 'lucide-react'

export default function SportsCategories() {
  const sports = [
    {
      name: 'Cricket',
      icon: <Activity size={48} />,
      description: 'IPL, World Cup, International Matches',
      color: 'from-yellow-600 to-yellow-700'
    },
    {
      name: 'Football',
      icon: <Trophy size={48} />,
      description: 'Premier League, World Cup, La Liga',
      color: 'from-yellow-500 to-yellow-600'
    },
    {
      name: 'Basketball',
      icon: <Users size={48} />,
      description: 'NBA, International Tournaments',
      color: 'from-yellow-400 to-yellow-500'
    },
    {
      name: 'More Sports',
      icon: <Radio size={48} />,
      description: 'Tennis, Hockey, Baseball & More',
      color: 'from-yellow-500 to-yellow-400'
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">
          Sports Coverage
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base">
          Stream your favorite sports and tournaments from around the world
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sports.map((sport, index) => (
            <div
              key={index}
              className="group glass card-hover p-6 rounded-lg border border-gray-200 relative overflow-hidden cursor-pointer"
            >
              <div className="relative z-10">
                <div className="text-black mb-3 transform group-hover:scale-110 transition-transform duration-300">
                  {sport.icon}
                </div>
                
                <h3 className="text-lg font-bold text-black mb-2">{sport.name}</h3>
                <p className="text-gray-600 text-sm">{sport.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
