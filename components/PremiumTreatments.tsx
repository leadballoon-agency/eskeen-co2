'use client'

import { useState } from 'react'
import { trackPRPDealView } from './FacebookPixel'

interface PremiumTreatmentsProps {
  onBookingClick?: () => void
}

export default function PremiumTreatments({ onBookingClick }: PremiumTreatmentsProps) {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null)

  const trackAndBook = () => {
    trackPRPDealView()
    onBookingClick?.()
  }

  return (
    <section id="treatments" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16 space-y-2 sm:space-y-4">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Our Offer</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
            One Treatment.
            <span className="gradient-text"> Four Areas.</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 max-w-2xl mx-auto px-4">
            Full face, eyelids, jowls and neck — medical-grade CO2 fractional laser resurfacing, one session.
          </p>
        </div>

        {/* PRIMARY OFFER HERO */}
        <div className="mb-12 sm:mb-16 max-w-5xl mx-auto relative">
          {/* Offer badge — sits ABOVE the card, outside the overflow-hidden so it's not clipped */}
          <div className="absolute left-1/2 -translate-x-1/2 -top-3 sm:-top-4 z-20">
            <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold shadow-lg uppercase tracking-wider whitespace-nowrap">
              Limited Offer
            </span>
          </div>

          <div className="relative bg-gradient-to-br from-white to-primary-50 rounded-2xl sm:rounded-3xl p-5 sm:p-8 lg:p-10 border-2 border-primary-200 shadow-premium-lg overflow-hidden">
            {/* Animated pulse border */}
            <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border-2 border-primary-400 animate-pulse opacity-40 pointer-events-none"></div>

            <div className="relative grid lg:grid-cols-[1.1fr_0.9fr] gap-6 lg:gap-10 items-center">
              {/* LEFT — copy + price + included list + CTA */}
              <div>
                <p className="text-primary-600 font-semibold text-xs sm:text-sm uppercase tracking-wider mb-2">Eskeen Clinic Offer</p>
                <h3 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 leading-tight mb-1">
                  Full Face CO2 Laser
                </h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-5">Medical-grade fractional resurfacing for face, eyelids, jowls and neck — one session.</p>

                <div className="flex items-baseline gap-3 mb-5 sm:mb-6">
                  <span className="text-4xl sm:text-5xl lg:text-6xl font-bold gradient-text">£395</span>
                  <span className="text-sm text-neutral-500">complete</span>
                </div>

                <p className="text-xs text-primary-700 font-semibold uppercase tracking-wider mb-2">Includes</p>
                <ul className="space-y-2 mb-5 sm:mb-6">
                  {['Full face fractional CO2 resurfacing', 'Upper &amp; lower eyelid rejuvenation (non-surgical blepharoplasty)', 'Jowls &amp; jawline lifting', 'Neck tightening', 'Skin analysis consultation included', 'Skin patch test included'].map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm sm:text-base text-neutral-700">
                      <svg className="w-5 h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span dangerouslySetInnerHTML={{ __html: feature }} />
                    </li>
                  ))}
                </ul>

                {/* PRP note */}
                <div className="mb-5 p-3 bg-cyan-50 rounded-xl border border-cyan-200">
                  <p className="text-xs sm:text-sm text-cyan-800">
                    <span className="font-semibold">Optional half-price PRP add-on</span> available during your treatment for faster healing.
                  </p>
                </div>

                <button
                  onClick={trackAndBook}
                  className="w-full sm:w-auto px-8 py-4 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 inline-flex items-center justify-center"
                >
                  Book a £50 Consultation
                  <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>
                <p className="text-xs text-neutral-500 mt-3">£50 reserves your slot — redeemed off your treatment.</p>

                {/* Secondary option — 3-session course */}
                <div className="mt-5 pt-5 border-t border-primary-100 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold text-neutral-800">
                      Prefer a full course? 3 sessions — <span className="gradient-text">£850</span>
                    </p>
                    <p className="text-xs text-neutral-500">Save £335 · best for deeper acne scarring</p>
                  </div>
                  <button
                    onClick={trackAndBook}
                    className="flex-shrink-0 px-4 py-2 rounded-full border border-primary-300 text-primary-700 font-medium hover:bg-primary-50 transition-colors text-sm"
                  >
                    Get Started
                  </button>
                </div>
              </div>

              {/* RIGHT — Skin resurfacing money shot (shown in full) */}
              <div>
                <div className="relative rounded-2xl overflow-hidden shadow-premium-lg">
                  <img
                    src="/images/co2laser-skin-rejeuvenation.jpeg"
                    alt="CO2 laser skin resurfacing — visible texture and tone improvement"
                    className="w-full h-auto"
                  />
                </div>
                <p className="text-center text-xs text-neutral-500 mt-3">
                  Real CO2 fractional laser resurfacing results.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Non-Surgical Blepharoplasty — Upper & Lower, available separately */}
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-6 sm:mb-8">
            <p className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Also available on their own</p>
            <h3 className="text-xl sm:text-2xl font-semibold text-neutral-800 mt-1">Non-Surgical Blepharoplasty</h3>
            <p className="text-sm text-neutral-600 max-w-xl mx-auto mt-2">
              Only want your eyes done? CO2 laser is a non-surgical alternative to blepharoplasty — smoothing and tightening the eye area. Choose the upper lids, lower lids, or both.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1fr_1.3fr_1fr] gap-4 sm:gap-6 items-center">
            {/* Upper — side */}
            <div className="order-2 lg:order-none bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
              <button
                onClick={() => setLightboxImg('/images/blepharoplasty-upper.jpeg')}
                className="relative block group cursor-pointer"
              >
                <span className="absolute top-2 left-2 bg-neutral-800/70 text-white text-[10px] px-2 py-0.5 rounded-full z-10">Before &amp; After</span>
                <span className="absolute top-2 right-2 bg-white/90 text-cyan-600 text-[10px] px-2 py-0.5 rounded-full z-10 font-medium group-hover:bg-cyan-500 group-hover:text-white transition-colors">Enlarge</span>
                <img
                  src="/images/blepharoplasty-upper.jpeg"
                  alt="Upper eyelid non-surgical blepharoplasty before and after"
                  className="w-full aspect-square object-cover"
                />
              </button>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-neutral-800">Upper Eyelids</h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 mb-4 flex-grow">Lifts hooded, heavy lids and smooths crepey skin above the eye.</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold gradient-text">£190</p>
                  <button
                    onClick={trackAndBook}
                    className="px-4 py-2 rounded-full border border-primary-300 text-primary-700 font-medium hover:bg-primary-50 transition-colors text-sm"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>

            {/* Both — hero (recommended) */}
            <div className="order-1 lg:order-none relative bg-gradient-to-br from-white to-primary-50 rounded-2xl sm:rounded-3xl border-2 border-primary-300 shadow-premium-lg overflow-hidden flex flex-col lg:scale-105">
              <div className="absolute left-1/2 -translate-x-1/2 top-0 z-20">
                <span className="bg-gradient-to-r from-primary-500 to-primary-700 text-white px-4 py-1 rounded-b-lg text-[11px] font-bold shadow uppercase tracking-wider whitespace-nowrap">Recommended</span>
              </div>
              <button
                onClick={() => setLightboxImg('/images/blepharoplasty-result.jpeg')}
                className="relative block group cursor-pointer"
              >
                <span className="absolute top-2 left-2 bg-neutral-800/70 text-white text-[10px] px-2 py-0.5 rounded-full z-10">Upper &amp; lower done</span>
                <span className="absolute top-2 right-2 bg-white/90 text-cyan-600 text-[10px] px-2 py-0.5 rounded-full z-10 font-medium group-hover:bg-cyan-500 group-hover:text-white transition-colors">Enlarge</span>
                <img
                  src="/images/blepharoplasty-result.jpeg"
                  alt="Upper and lower eyelid non-surgical blepharoplasty before and after"
                  className="w-full aspect-square object-cover"
                />
              </button>
              <div className="p-5 flex flex-col flex-grow text-center">
                <p className="text-[11px] text-primary-600 font-semibold uppercase tracking-wider mb-1">Best value</p>
                <h4 className="text-lg sm:text-xl font-bold text-neutral-800">Both Eyelids Together</h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 mb-3">Upper &amp; lower treated in one visit.</p>
                <div className="flex items-baseline justify-center gap-2 mb-4">
                  <span className="text-3xl sm:text-4xl font-bold gradient-text">£290</span>
                  <span className="text-sm text-neutral-400 line-through">£380</span>
                  <span className="text-xs font-semibold text-primary-700">save £90</span>
                </div>
                <button
                  onClick={trackAndBook}
                  className="mt-auto w-full px-5 py-3 rounded-full bg-gradient-to-r from-primary-500 to-primary-700 text-white font-semibold hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-sm sm:text-base"
                >
                  Book Both — £290
                </button>
              </div>
            </div>

            {/* Lower — side */}
            <div className="order-3 lg:order-none bg-white rounded-2xl border border-neutral-200 shadow-sm overflow-hidden flex flex-col">
              <button
                onClick={() => setLightboxImg('/images/blepharoplasty-lower.jpeg')}
                className="relative block group cursor-pointer"
              >
                <span className="absolute top-2 left-2 bg-neutral-800/70 text-white text-[10px] px-2 py-0.5 rounded-full z-10">Before &amp; After</span>
                <span className="absolute top-2 right-2 bg-white/90 text-cyan-600 text-[10px] px-2 py-0.5 rounded-full z-10 font-medium group-hover:bg-cyan-500 group-hover:text-white transition-colors">Enlarge</span>
                <img
                  src="/images/blepharoplasty-lower.jpeg"
                  alt="Lower eyelid non-surgical blepharoplasty before and after"
                  className="w-full aspect-square object-cover"
                />
              </button>
              <div className="p-4 flex flex-col flex-grow">
                <h4 className="text-base font-bold text-neutral-800">Lower Eyelids</h4>
                <p className="text-xs sm:text-sm text-neutral-600 mt-1 mb-4 flex-grow">Reduces under-eye crepiness, fine lines and tired-looking bags.</p>
                <div className="flex items-center justify-between">
                  <p className="text-xl font-bold gradient-text">£190</p>
                  <button
                    onClick={trackAndBook}
                    className="px-4 py-2 rounded-full border border-primary-300 text-primary-700 font-medium hover:bg-primary-50 transition-colors text-sm"
                  >
                    Book
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Call-to-Action */}
        <div className="mt-8 text-center sm:hidden">
          <p className="text-xs text-neutral-600 mb-3">Need help choosing?</p>
          <a href="#assessment" className="text-primary-600 font-medium text-sm">
            Take our assessment →
          </a>
        </div>
      </div>

      {/* Before/After Lightbox Modal */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center p-4 sm:p-8"
          onClick={() => setLightboxImg(null)}
        >
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />

          <div
            className="relative max-w-2xl w-full animate-fade-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-12 right-0 sm:top-4 sm:right-4 w-10 h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10"
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={lightboxImg}
                alt="Non-surgical blepharoplasty before and after — real result"
                className="w-full h-auto"
              />
              <div className="p-4 sm:p-6 bg-gradient-to-r from-cyan-50 to-blue-50">
                <h4 className="text-lg sm:text-xl font-bold text-neutral-800 mb-2">Real Results</h4>
                <p className="text-sm sm:text-base text-neutral-600">
                  CO2 laser eyelid rejuvenation — visible tightening and reduction of fine lines after treatment.
                </p>
                <button
                  onClick={() => {
                    setLightboxImg(null)
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
