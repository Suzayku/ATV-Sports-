import { AlertCircle } from 'lucide-react'

export default function Disclaimer() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-100">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white border border-gray-300 rounded-lg p-6">
          <div className="flex items-start gap-3">
            <AlertCircle size={28} className="text-gray-700 flex-shrink-0 mt-0.5" />
            <div>
              <h2 className="text-lg font-bold mb-3 text-black">Legal Disclaimer</h2>
              <p className="text-gray-700 leading-relaxed text-sm">
                <strong>ATV Sports does not host any content.</strong> It indexes streams available on the internet. We are not responsible for the content of external sites. If you have copyright concerns, please contact the hosting providers directly.
              </p>
              <p className="text-gray-600 text-xs mt-3">
                Users are responsible for complying with all applicable laws and regulations in their jurisdiction. Ensure you have the legal right to access the content you view through this app.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
