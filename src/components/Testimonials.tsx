import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: 'Raj Patel',
      role: 'Cricket Fan',
      text: 'Never miss an IPL or World Cup match! The quality is HD, and no ads interrupting the game. Simply amazing!',
      rating: 5,
      image: '👨‍💼',
      verified: true
    },
    {
      name: 'Maria Santos',
      role: 'Football Enthusiast',
      text: 'Watch Premier League, La Liga, and World Cup all in one app. Crystal clear streaming without any buffering. Best app ever!',
      rating: 5,
      image: '👩‍💼',
      verified: true
    },
    {
      name: 'Ahmed Hassan',
      role: 'Multi-Sport Lover',
      text: 'Cricket, football, basketball, tennis - everything is here! Ad-free viewing makes it perfect for uninterrupted sports experience.',
      rating: 5,
      image: '👨‍🦱',
      verified: true
    }
  ]

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">
          Loved by Millions
        </h2>
        <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto text-base">
          Join thousands of happy sports fans worldwide
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass card-hover p-6 rounded-lg border border-gray-200"
              style={{
                animation: `slideInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              <div className="flex items-start gap-3 mb-4">
                <div className="text-3xl">{testimonial.image}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    {testimonial.verified && (
                      <span className="text-blue-600 text-xs font-semibold">✓</span>
                    )}
                  </div>
                  <p className="text-gray-600 text-xs">{testimonial.role}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-gray-600 text-sm leading-relaxed">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
