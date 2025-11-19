'use client'

import { useState } from 'react'

const faqs = [
  {
    question: 'Is CO2 laser treatment painful?',
    answer: 'We use topical numbing cream before treatment to ensure your comfort. Most patients describe the sensation as a warm tingling feeling. Post-treatment, you may experience a sunburn-like sensation that subsides within 24-48 hours.'
  },
  {
    question: 'How long do CO2 laser results last?',
    answer: 'CO2 laser results can last 5-10 years with proper skincare. The treatment stimulates long-term collagen production, with improvements continuing for up to 6 months after treatment. Results longevity depends on your skincare routine and sun protection.'
  },
  {
    question: 'What is the typical downtime?',
    answer: 'Expect 5-7 days of social downtime. Days 1-2 involve redness and swelling, days 3-5 include peeling, and by day 7 most patients can return to normal activities with makeup. Full healing occurs within 2 weeks.'
  },
  {
    question: 'How many treatments will I need?',
    answer: 'Many patients achieve their desired results with a single treatment. However, for deeper scars or more significant concerns, 2-3 treatments spaced 6-12 months apart may be recommended for optimal results.'
  },
  {
    question: 'Who is an ideal candidate?',
    answer: 'Ideal candidates have concerns like wrinkles, acne scars, sun damage, or uneven texture. Good candidates are in good health, have realistic expectations, and can commit to the recovery process. We assess suitability during consultation.'
  },
  {
    question: 'What aftercare is required?',
    answer: 'Aftercare includes keeping skin moisturized, avoiding sun exposure, using prescribed skincare products, and following our detailed recovery protocol. We provide comprehensive aftercare instructions and 24/7 support during recovery.'
  }
]

interface FAQProps {
  onBookingClick?: () => void
}

export default function FAQ({ onBookingClick }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-white to-primary-50">
      <div className="max-w-4xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">FAQ</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Your Questions
            <span className="block gradient-text">Answered</span>
          </h2>
        </div>

        <div className="space-y-3 sm:space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg overflow-hidden transition-all duration-300"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-4 sm:px-6 py-4 sm:py-5 text-left flex justify-between items-center hover:bg-primary-50 transition-colors"
              >
                <span className="font-semibold text-sm sm:text-base lg:text-lg pr-3 sm:pr-4">{faq.question}</span>
                <div className={`w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-gradient-to-r from-primary-400 to-primary-600 flex items-center justify-center flex-shrink-0 transition-transform ${
                  openIndex === index ? 'rotate-180' : ''
                }`}>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${
                openIndex === index ? 'max-h-96' : 'max-h-0'
              }`}>
                <div className="px-4 sm:px-6 pb-4 sm:pb-5 text-xs sm:text-sm lg:text-base text-neutral-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 sm:mt-12 text-center">
          <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">
            Still have questions? We're here to help.
          </p>
          <button 
            onClick={onBookingClick}
            className="inline-flex items-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full sm:w-auto justify-center"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}