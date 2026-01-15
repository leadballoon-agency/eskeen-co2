'use client'

import { useState } from 'react'

interface ProcessSectionProps {
  onBookingClick?: () => void
}

export default function ProcessSection({ onBookingClick }: ProcessSectionProps) {
  const [flippedCards, setFlippedCards] = useState<number[]>([])

  const toggleCard = (index: number) => {
    setFlippedCards(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    )
  }

  const steps = [
    {
      number: '01',
      title: 'Consultation',
      subtitle: '& Patch Test',
      icon: '💬',
      duration: '20 mins',
      frontDetails: 'Comprehensive skin analysis',
      backTitle: 'What Happens',
      backDetails: [
        'In-depth skin assessment with our Visage scanner',
        'Discuss your goals & medical history',
        'Patch test on treatment area',
        'Personalised treatment plan created'
      ],
      backNote: 'No obligation - just expert advice'
    },
    {
      number: '02',
      title: 'Treatment',
      subtitle: 'Session',
      icon: '✨',
      duration: '60-90 mins',
      frontDetails: '48 hours after consultation',
      backTitle: 'During Treatment',
      backDetails: [
        'Numbing cream applied (30 mins)',
        'Precision CO2 laser resurfacing',
        'Cooling & soothing masks',
        'Aftercare kit provided'
      ],
      backNote: 'Minimal discomfort with numbing'
    },
    {
      number: '03',
      title: 'Recovery',
      subtitle: '& Healing',
      icon: '🌿',
      duration: '5-7 days',
      frontDetails: 'Guided aftercare support',
      backTitle: 'Healing Timeline',
      backDetails: [
        'Day 1-2: Redness like sunburn',
        'Day 3-4: Skin begins peeling',
        'Day 5-7: Fresh skin emerges',
        'Week 2+: Back to normal routine'
      ],
      backNote: '24/7 WhatsApp support included'
    },
    {
      number: '04',
      title: 'Results',
      subtitle: '& Follow-Up',
      icon: '📈',
      duration: '2-4 weeks',
      frontDetails: 'See your transformation',
      backTitle: 'Your Results',
      backDetails: [
        'Visible improvement from week 2',
        'Collagen rebuilding for 3-6 months',
        'Progress photos & assessment',
        'Maintenance plan if needed'
      ],
      backNote: 'Results continue improving for months'
    }
  ]

  return (
    <section id="process" className="py-16 sm:py-20 md:py-28 bg-gradient-to-b from-white via-primary-50/30 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-100 rounded-full blur-3xl opacity-30 translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto section-padding relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <span className="inline-flex items-center px-4 py-1.5 bg-primary-100 rounded-full text-primary-700 font-medium text-sm mb-4">
            <span className="w-2 h-2 bg-primary-500 rounded-full animate-pulse mr-2"></span>
            Your Journey
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Treatment
            <span className="block gradient-text">Process</span>
          </h2>
          <p className="text-neutral-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base lg:text-lg">
            Tap each card to discover what happens at every stage
          </p>
        </div>

        {/* Flip Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {steps.map((step, index) => (
            <div
              key={index}
              className="perspective-1000 h-[340px] sm:h-[380px] cursor-pointer group"
              onClick={() => toggleCard(index)}
            >
              <div
                className={`relative w-full h-full transition-transform duration-700 transform-style-3d ${
                  flippedCards.includes(index) ? 'rotate-y-180' : ''
                }`}
              >
                {/* Front of card */}
                <div className="absolute inset-0 backface-hidden">
                  <div className="h-full bg-white rounded-3xl shadow-premium hover:shadow-premium-lg transition-all duration-300 p-6 sm:p-8 flex flex-col border border-primary-100 group-hover:border-primary-300">
                    {/* Step number badge */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 bg-gradient-to-br from-primary-400 to-primary-600 rounded-2xl flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        {step.number}
                      </div>
                      <span className="text-4xl">{step.icon}</span>
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-xl sm:text-2xl text-neutral-900 leading-tight">
                      {step.title}
                      <span className="block text-primary-600">{step.subtitle}</span>
                    </h3>

                    {/* Duration pill */}
                    <div className="mt-4 inline-flex items-center self-start px-3 py-1.5 bg-primary-50 rounded-full">
                      <svg className="w-4 h-4 text-primary-500 mr-1.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <span className="text-sm font-medium text-primary-700">{step.duration}</span>
                    </div>

                    {/* Front details */}
                    <p className="mt-auto text-neutral-600 text-sm">{step.frontDetails}</p>

                    {/* Tap hint */}
                    <div className="mt-4 flex items-center justify-center text-primary-500 text-sm font-medium">
                      <span>Tap to learn more</span>
                      <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Back of card */}
                <div className="absolute inset-0 backface-hidden rotate-y-180">
                  <div className="h-full bg-gradient-to-br from-primary-500 to-primary-700 rounded-3xl shadow-premium-lg p-6 sm:p-8 flex flex-col text-white">
                    {/* Back header */}
                    <div className="flex items-center justify-between mb-4">
                      <h4 className="font-bold text-lg">{step.backTitle}</h4>
                      <span className="text-3xl opacity-80">{step.icon}</span>
                    </div>

                    {/* Details list */}
                    <ul className="space-y-3 flex-grow">
                      {step.backDetails.map((detail, idx) => (
                        <li key={idx} className="flex items-start text-sm">
                          <svg className="w-5 h-5 text-primary-200 mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span className="text-white/90">{detail}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Back note */}
                    <div className="mt-4 pt-4 border-t border-white/20">
                      <p className="text-sm text-primary-100 italic">{step.backNote}</p>
                    </div>

                    {/* Tap to flip back */}
                    <div className="mt-3 flex items-center justify-center text-white/70 text-sm">
                      <svg className="w-4 h-4 mr-1 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                      </svg>
                      <span>Tap to flip back</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection line - desktop only */}
        <div className="hidden lg:block relative mt-8">
          <div className="absolute left-[12.5%] right-[12.5%] top-0 h-1 bg-gradient-to-r from-primary-200 via-primary-400 to-primary-200 rounded-full"></div>
          <div className="flex justify-between px-[10%]">
            {steps.map((_, index) => (
              <div key={index} className="w-4 h-4 bg-primary-500 rounded-full -mt-1.5 shadow-lg"></div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 sm:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-white rounded-2xl sm:rounded-full p-4 sm:p-2 sm:pl-6 shadow-premium">
            <div className="flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center text-white text-sm font-bold border-2 border-white">E</div>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-300 to-primary-500 flex items-center justify-center text-white text-sm font-bold border-2 border-white">M</div>
              </div>
              <span className="text-neutral-700 font-medium text-sm sm:text-base">Ready to start your journey?</span>
            </div>
            <button
              onClick={onBookingClick}
              className="w-full sm:w-auto bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 py-3 rounded-full font-medium hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Book Consultation
            </button>
          </div>
        </div>
      </div>

      {/* CSS for 3D transforms */}
      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  )
}
