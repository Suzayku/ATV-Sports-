import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: 'What sports are available on ATV Sports?',
      answer: 'We cover cricket (IPL, World Cup), football (Premier League, World Cup), basketball (NBA, international matches), tennis, hockey, and many other sports. New sports and events are added regularly.'
    },
    {
      question: 'Is it really ad-free?',
      answer: 'Yes, completely ad-free! You get uninterrupted streaming of all sports events. No annoying ads or pop-ups during matches.'
    },
    {
      question: 'What devices can I use?',
      answer: 'ATV Sports works on Android phones, tablets, and Android TV. iOS app is coming soon. You can also cast to Smart TVs for a bigger screen experience.'
    },
    {
      question: 'What is the streaming quality?',
      answer: 'We offer HD and high-quality streaming. The quality adapts based on your internet speed to minimize buffering and provide smooth playback.'
    },
    {
      question: 'Can I watch multiple matches simultaneously?',
      answer: 'Yes! With multiple devices, you can watch different sports or matches on your phone, tablet, and TV at the same time.'
    },
    {
      question: 'Do I need any subscription?',
      answer: 'No! ATV Sports is completely free. Download and start watching instantly without any subscriptions or hidden fees.'
    }
  ]

  return (
    <section id="faq" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-3 text-black">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 text-center mb-12 text-base">
          Find answers to common questions about ATV Sports
        </p>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-gray-300 transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <h3 className="text-base font-semibold text-left text-black">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`transition-transform duration-300 flex-shrink-0 text-gray-600 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-4 pb-4 text-gray-600 border-t border-gray-200 text-sm">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
