'use client'

import { useState } from 'react'

interface ResultsGalleryProps {
  onBookingClick?: () => void
}

export default function ResultsGallery({ onBookingClick }: ResultsGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const results = [
    {
      image: '/images/co2laser-skin-rejeuvenation.jpeg',
      title: 'Skin Resurfacing',
      description: 'Complete skin rejuvenation, renewal and tightening',
      time: 'Results Vary',
      isAvailable: true,
      featured: true
    },
    {
      image: '/images/Acne Scarring Before and After.jpeg',
      title: 'Acne Scarring',
      description: 'Dramatic improvement in skin texture',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/graeme.png',
      title: 'Baggy Eye',
      description: 'Effective results for men and women',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/stretch marks.jpeg',
      title: 'Stretch Marks',
      description: 'Significant reduction in appearance',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/pigmentation.png',
      title: 'Pigmentation',
      description: 'Even skin tone restoration',
      time: 'Results Vary',
      isAvailable: true,
      featured: false
    },
    {
      image: '/images/model-day-tile.svg',
      title: 'Book a Consultation',
      description: 'See your transformation - schedule your free consultation',
      time: 'Book Now',
      isAvailable: true,
      featured: false
    }
  ]

  return (
    <section id="results" className="py-12 sm:py-16 md:py-24 bg-gradient-to-b from-primary-50 to-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Real Results</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Transformations That
            <span className="block gradient-text">Speak For Themselves</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-2 sm:mt-4 max-w-2xl mx-auto px-4">
            Browse our gallery of real patient results
          </p>
        </div>

        {/* Premium Results Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
          {results.map((result, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl sm:rounded-2xl overflow-hidden shadow-premium transition-all duration-300 ${
                result.isAvailable ? 'sm:hover:shadow-premium-lg cursor-pointer' : 'opacity-90 cursor-not-allowed'
              } ${result.featured ? 'md:col-span-2' : ''}`}
              onClick={() => result.isAvailable && setSelectedImage(index)}
            >
              {/* Before/After Label - Only show for available results */}
              {result.isAvailable && (
                <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-10 flex gap-1.5 sm:gap-2">
                  <span className="bg-white/90 backdrop-blur px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    Before
                  </span>
                  <span className="bg-primary-500/90 backdrop-blur text-white px-2 sm:px-3 py-0.5 sm:py-1 rounded-full text-[10px] sm:text-xs font-medium">
                    After
                  </span>
                </div>
              )}

              {/* Time Badge or FULL Badge */}
              <div className={`absolute top-2 sm:top-4 right-2 sm:right-4 z-10 backdrop-blur rounded-full px-2 sm:px-3 py-0.5 sm:py-1 ${
                result.isAvailable ? 'bg-white/90' : 'bg-red-500/90'
              }`}>
                <span className={`text-[10px] sm:text-xs font-medium ${
                  result.isAvailable ? 'text-neutral-700' : 'text-white'
                }`}>{result.time}</span>
              </div>

              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={result.image} 
                  alt={result.title}
                  className="w-full h-full object-cover sm:group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 sm:from-black/50 via-transparent to-transparent sm:opacity-0 sm:group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-4 sm:p-6">
                <h3 className="font-bold text-base sm:text-lg lg:text-xl mb-1 sm:mb-2">{result.title}</h3>
                <p className="text-xs sm:text-sm lg:text-base text-neutral-600">{result.description}</p>
                
                <div className="mt-3 sm:mt-4 flex items-center text-primary-600 font-medium text-sm">
                  <span>View Details</span>
                  <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Reception Area Section - Mobile Optimized */}
        <div className="mt-8 sm:mt-12">
          <div className="relative rounded-xl sm:rounded-2xl overflow-hidden shadow-premium">
            <img
              src="/images/clinic/inside1.webp"
              alt="Eskeen Clinic Interior"
              className="w-full"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 sm:from-black/60 via-black/40 sm:via-transparent to-transparent flex items-center">
              <div className="p-6 sm:p-8 md:p-12 max-w-full sm:max-w-lg">
                <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold mb-2 sm:mb-4">
                  Welcome to Eskeen Clinic
                </h3>
                <p className="text-white/90 text-sm sm:text-base mb-4 sm:mb-6">
                  Step into our modern, welcoming clinic designed for your comfort and relaxation during your CO2 laser journey.
                </p>
                <button
                  onClick={onBookingClick}
                  className="inline-flex items-center bg-white text-primary-600 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base hover:shadow-lg transition-all duration-300"
                >
                  Schedule Consultation
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section - Mobile Optimized */}
        <div className="mt-10 sm:mt-12 lg:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {[
            { number: '20+', label: 'Years Experience' },
            { number: 'RN', label: 'Nurse-Led' },
            { number: '£395', label: 'Starting From' },
            { number: '5', label: 'Expert Practitioners' }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-2xl sm:text-3xl font-bold gradient-text mb-1 sm:mb-2">{stat.number}</p>
              <p className="text-xs sm:text-sm text-neutral-600">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Lightbox Modal - Mobile Optimized */}
        {selectedImage !== null && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-3 sm:p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl w-full">
              <img 
                src={results[selectedImage].image} 
                alt={results[selectedImage].title}
                className="w-full rounded-lg"
              />
              <button 
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 sm:top-4 sm:right-4 bg-white/90 backdrop-blur rounded-full p-1.5 sm:p-2 hover:bg-white transition"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}