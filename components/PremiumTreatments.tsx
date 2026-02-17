'use client'

import { useState } from 'react'
import { trackPRPDealView } from './FacebookPixel'

interface PremiumTreatmentsProps {
  onBookingClick?: () => void
}

export default function PremiumTreatments({ onBookingClick }: PremiumTreatmentsProps) {
  const [addPRP, setAddPRP] = useState(false)
  const [showAfterModal, setShowAfterModal] = useState(false)

  const treatments = [
    {
      icon: '✨',
      title: 'Single Session',
      description: "Individual CO2 laser treatment",
      features: ['Full face treatment', '5-7 days downtime', '60-90 minutes', 'Immediate results'],
      price: '£395',
      gradient: 'from-blue-400 to-cyan-600',
      popular: false,
      hasFreePRP: true
    },
    {
      icon: '💎',
      title: '3 Session Package',
      description: 'Complete transformation package',
      features: ['3 CO2 laser sessions', 'Save £335 total', 'Book within 6 months', 'Best for acne scars'],
      price: '£850',
      gradient: 'from-primary-400 to-primary-600',
      popular: true
    }
  ]

  const eyesTreatment = {
    icon: '👁️',
    title: 'Eyelid Rejuvenation',
    badge: 'NON-SURGICAL BLEPHAROPLASTY',
    description: 'Non-surgical lift for upper & lower eyelids',
    longDescription: 'Fractional CO2 laser resurfacing uses controlled light beams to vaporize damaged skin, stimulate collagen, and tighten loose skin around the eyes. A non-surgical lift to reduce wrinkles, fine lines, and mild excess skin — results comparable to traditional blepharoplasty but without the surgery.',
    features: ['Upper & lower eyelids', 'Non-surgical alternative to blepharoplasty', 'Stimulates collagen production', 'Tightens loose skin naturally'],
    singlePrice: '£180',
    packagePrice: '£300',
    gradient: 'from-cyan-500 to-primary-600'
  }

  return (
    <section id="treatments" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Services</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            Treatments That
            <span className="gradient-text"> Transform</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Each treatment is tailored to your unique needs
          </p>
        </div>

        {/* Featured Eyelid Rejuvenation / Blepharoplasty Section */}
        <div className="mb-10 sm:mb-14 max-w-4xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-50 to-blue-50 rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 border-2 border-cyan-200">
            {/* Animated pulse border effect */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-cyan-400 animate-pulse opacity-50"></div>

            <div className="absolute -top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <span className="bg-gradient-to-r from-cyan-500 to-primary-600 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg">
                {eyesTreatment.badge}
              </span>
            </div>

            <div className="relative pt-4">
              {/* Before/After Images */}
              <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                <div className="relative">
                  <span className="absolute top-2 left-2 bg-neutral-800/70 text-white text-xs px-2 py-1 rounded-full z-10">Before</span>
                  <img
                    src="/before-eyes.png"
                    alt="Before eyelid treatment"
                    className="w-full h-auto rounded-xl"
                  />
                </div>
                <div className="relative">
                  <button
                    onClick={() => setShowAfterModal(true)}
                    className="w-full h-full group cursor-pointer"
                  >
                    <span className="absolute top-2 left-2 bg-neutral-800/70 text-white text-xs px-2 py-1 rounded-full z-10">After</span>
                    <span className="absolute top-2 right-2 bg-white/90 text-cyan-600 text-xs px-2 py-1 rounded-full z-10 font-medium group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                      Tap to enlarge
                    </span>
                    <img
                      src="/after-eyes.png"
                      alt="After eyelid treatment"
                      className="w-full h-auto rounded-xl group-hover:ring-2 ring-cyan-400 transition-all"
                    />
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-3xl sm:text-4xl">{eyesTreatment.icon}</span>
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-800">{eyesTreatment.title}</h3>
                  </div>
                  <p className="text-sm sm:text-base text-neutral-600 mb-4">
                    {eyesTreatment.longDescription}
                  </p>
                  <ul className="space-y-1.5 sm:space-y-2 mb-4">
                    {eyesTreatment.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-xs sm:text-sm text-neutral-700">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-500 mr-1.5 sm:mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="bg-white rounded-2xl p-5 sm:p-6 shadow-lg text-center">
                  <p className="text-xs sm:text-sm text-cyan-600 font-semibold mb-2 uppercase tracking-wide">Treatment Pricing</p>
                  <div className="flex items-center justify-center gap-4 sm:gap-6 mb-4">
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-cyan-600">{eyesTreatment.singlePrice}</p>
                      <p className="text-xs sm:text-sm text-neutral-500">Single Session</p>
                    </div>
                    <div className="h-12 w-px bg-neutral-200"></div>
                    <div>
                      <p className="text-2xl sm:text-3xl font-bold text-cyan-600">{eyesTreatment.packagePrice}</p>
                      <p className="text-xs sm:text-sm text-neutral-500">3 Sessions</p>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-500 mb-4">Some downtime for swelling & redness expected</p>
                  <button
                    onClick={() => onBookingClick?.()}
                    className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-medium hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                  >
                    Book Eyes Treatment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Full Face Treatments Header */}
        <div className="text-center mb-6 sm:mb-8">
          <h3 className="text-lg sm:text-xl font-semibold text-neutral-700">Full Face Treatments</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
          {treatments.map((treatment, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 transition-all duration-500 flex flex-col h-full ${
                treatment.popular ? 'shadow-premium-lg sm:scale-105 border-2 border-primary-200' : 'shadow-premium hover:shadow-premium-lg'
              } sm:hover:scale-105`}
            >
              {treatment.popular && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-3 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium">
                  Best Value
                </div>
              )}

              <div className={`absolute inset-0 bg-gradient-to-br ${treatment.gradient} opacity-5 rounded-2xl sm:rounded-3xl transition-opacity group-hover:opacity-10`}></div>

              <div className="relative flex flex-col h-full">
                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <div className={`text-3xl sm:text-4xl lg:text-5xl p-2.5 sm:p-3 lg:p-4 bg-gradient-to-br ${treatment.gradient} rounded-xl sm:rounded-2xl bg-opacity-10 inline-block`}>
                    {treatment.icon}
                  </div>
                </div>

                <div className="mb-3 sm:mb-4 lg:mb-6">
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-1.5 sm:mb-2">{treatment.title}</h3>
                  <p className="text-xs sm:text-sm lg:text-base text-neutral-600">{treatment.description}</p>
                </div>

                <ul className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 flex-grow">
                  {treatment.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start sm:items-center text-xs sm:text-sm text-neutral-700">
                      <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-1.5 sm:mr-2 flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {treatment.hasFreePRP && (
                  <div className="mb-4 p-3 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border border-green-200">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={addPRP}
                        onChange={(e) => setAddPRP(e.target.checked)}
                        className="w-4 h-4 text-green-600 border-green-300 rounded focus:ring-green-500"
                      />
                      <span className="ml-3 text-sm text-neutral-700">
                        Add PRP Enhancement <span className="font-bold text-green-600">FREE</span>
                      </span>
                    </label>
                    <p className="text-xs text-green-700 mt-1 ml-7">Faster healing & enhanced results - worth £120!</p>
                  </div>
                )}

                <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-neutral-100 mt-auto">
                  <div>
                    <p className="text-xs text-neutral-500 sm:hidden">From</p>
                    <p className="text-xl sm:text-2xl font-bold gradient-text">{treatment.price}</p>
                    {treatment.hasFreePRP && addPRP && (
                      <p className="text-xs text-green-600 font-medium">+ FREE PRP</p>
                    )}
                  </div>
                  <button
                    onClick={() => {
                      if (treatment.title === '3 Session Package' || (treatment.hasFreePRP && addPRP)) {
                        trackPRPDealView()
                      }
                      onBookingClick?.()
                    }}
                    className={`px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r ${treatment.gradient} text-white font-medium hover:shadow-lg transition-all duration-300 sm:hover:scale-105 text-sm sm:text-base`}
                  >
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-xs text-neutral-600 mb-3">Need help choosing?</p>
          <a href="#assessment" className="text-primary-600 font-medium text-sm">
            Take our assessment →
          </a>
        </div>
      </div>

      {/* After Image Lightbox Modal */}
      {showAfterModal && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setShowAfterModal(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          {/* Modal Content */}
          <div
            className="relative max-w-2xl w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAfterModal(false)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Image Container */}
            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/after-eyes.png"
                alt="After eyelid treatment - Results"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2">Real Results</h4>
                <p className="text-sm sm:text-base text-neutral-600">
                  CO2 laser eyelid rejuvenation — visible tightening and reduction of fine lines after treatment.
                </p>
                <button
                  onClick={() => {
                    setShowAfterModal(false)
                    onBookingClick?.()
                  }}
                  className="mt-4 w-full px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500 to-primary-600 text-white font-medium hover:shadow-lg transition-all duration-300 text-sm sm:text-base"
                >
                  Book Your Consultation
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}