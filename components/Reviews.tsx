'use client'

import { useState } from 'react'

interface Review {
  name: string
  rating: 5
  date: string
  treatment: string
  text: string
  verified: boolean
  featured?: boolean
  images?: string[]
}

export default function Reviews() {
  const [expandedReview, setExpandedReview] = useState<number | null>(null)

  const reviews: Review[] = [
    {
      name: "Lyuba N.",
      rating: 5,
      date: "2026-02-06",
      treatment: "CO2 Laser Resurfacing",
      text: "She carefully explained my skin condition and showed me exactly what we would be working on before my CO₂ laser resurfacing procedure. I was offered numbing cream, but I decided to try without it — and it was comfortable with great results. The facial scan and skin analysis were incredibly helpful in understanding my skin. The clinic felt welcoming from the moment I walked in, and I felt completely at ease throughout. Highly recommend!",
      verified: true,
      featured: true,
      images: ['/review/lyuba-skin-analysis.png', '/review/lyuba-neycheva.png']
    },
    {
      name: "Roussetos K.",
      rating: 5,
      date: "2026-02-13",
      treatment: "CO2 Laser",
      text: "Visited this clinic for CO2 laser for my acne scars and had a course of 4 sessions. I'm so pleased with the results, couldn't be happier! Elanda created a treatment plan I'm really excited about. Looking forward to more sessions.",
      verified: true
    },
    {
      name: "Adriana P.",
      rating: 5,
      date: "2026-02-06",
      treatment: "CO2 Laser",
      text: "I recently had a CO2 laser treatment with Elanda and I couldn't be happier with the results and experience. She explained every step, checked in during treatment, and my skin already looks smoother and brighter.",
      verified: true
    },
    {
      name: "Fatmir S.",
      rating: 5,
      date: "2026-01-06",
      treatment: "CO2 Laser",
      text: "I booked CO₂ laser at Eskeen Clinic after doing a lot of research and I'm so glad I found this clinic! The process was excellent and I noticed significant improvements in my skin. Elanda takes real pride in her work.",
      verified: true
    },
    {
      name: "Nabeel I.",
      rating: 5,
      date: "2026-01-06",
      treatment: "CO2 Laser",
      text: "I had CO2 laser treatment with Mavra and the results were amazing. I've struggled with darkness under my eyes for a long time and the treatments have made such an incredible difference. Highly recommend!",
      verified: true
    },
    {
      name: "Elvis T.",
      rating: 5,
      date: "2025-12-06",
      treatment: "CO2 Laser",
      text: "I recently tried CO₂ laser for my acne scars, and I'm genuinely thrilled with how much my skin has improved. The texture is smoother and Elanda's expertise and care made a significant difference. Felt supported throughout my journey.",
      verified: true
    },
    {
      name: "Waheed M.",
      rating: 5,
      date: "2025-12-06",
      treatment: "CO2 Laser",
      text: "I had acne scars and pigmentation on my cheeks. Although I was hesitant to try the CO₂ laser, I'm so happy I did. After just one session, I noticed a huge difference! Mavra was incredibly reassuring and made me feel at ease.",
      verified: true
    },
    {
      name: "T Riaz",
      rating: 5,
      date: "2025-12-06",
      treatment: "CO2 Laser",
      text: "Had my first CO₂ laser with Mavra and I'm so happy! She's incredibly talented — my fine lines softened, pigmentation faded. Looking forward to my future skincare needs!",
      verified: true
    },
    {
      name: "Noor A.",
      rating: 5,
      date: "2026-01-06",
      treatment: "CO2 Laser",
      text: "Mavra did my CO2 laser and I can already see a big difference. I'm so happy with the results and can't wait to come back!",
      verified: true
    }
  ]

  return (
    <section className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Patient Reviews</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            What Our Patients
            <span className="block gradient-text">Are Saying</span>
          </h2>

          {/* Overall Rating */}
          <div className="mt-6 sm:mt-8 inline-flex flex-col items-center bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-400 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-2xl sm:text-3xl font-bold text-neutral-900">5.0</p>
            <p className="text-sm sm:text-base text-neutral-600 mt-1">Based on 104 Google reviews</p>
          </div>
        </div>

        {/* Featured Review */}
        {reviews.filter(r => r.featured).map((review, index) => (
          <div key={`featured-${index}`} className="mb-8 sm:mb-12 max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-primary-50 to-white border-2 border-primary-200 rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-primary-500 text-white px-3 py-1 rounded-full text-xs font-bold">Featured Review</span>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>

              <p className="text-neutral-700 text-base sm:text-lg mb-6 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {review.images && review.images.length > 0 && (
                <div className="grid grid-cols-2 gap-3 sm:gap-4 mb-6">
                  {review.images.map((img, imgIdx) => (
                    <img
                      key={imgIdx}
                      src={img}
                      alt={`${review.name}'s ${imgIdx === 0 ? 'skin analysis' : 'results'}`}
                      className="w-full rounded-xl shadow-md"
                    />
                  ))}
                </div>
              )}

              <div className="flex items-center justify-between pt-4 border-t border-primary-100">
                <div>
                  <p className="font-semibold text-neutral-900 text-base">{review.name}</p>
                  <p className="text-sm text-neutral-500">
                    {new Date(review.date).toLocaleDateString('en-GB', { year: 'numeric', month: 'long' })}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-neutral-500">{review.images?.length} photos</span>
                  <div className="flex items-center text-green-600 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.filter(r => !r.featured).map((review, index) => (
            <div key={index} className="bg-white border-2 border-neutral-100 rounded-2xl p-6 sm:p-8 hover:border-primary-200 hover:shadow-lg transition-all duration-300">
              {/* Rating Stars */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Review Text */}
              <p className="text-neutral-700 text-sm sm:text-base mb-4 leading-relaxed">
                &ldquo;{review.text}&rdquo;
              </p>

              {/* Treatment Badge */}
              <div className="inline-block bg-primary-50 text-primary-700 px-3 py-1 rounded-full text-xs font-medium mb-4">
                {review.treatment}
              </div>

              {/* Reviewer Info */}
              <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                <div>
                  <p className="font-semibold text-neutral-900 text-sm sm:text-base">{review.name}</p>
                  <p className="text-xs sm:text-sm text-neutral-500">
                    {new Date(review.date).toLocaleDateString('en-GB', {
                      year: 'numeric',
                      month: 'long'
                    })}
                  </p>
                </div>
                {review.verified && (
                  <div className="flex items-center text-green-600 text-xs">
                    <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Verified
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Google Reviews CTA */}
        <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          {/* Read Reviews Button */}
          <a
            href="https://www.google.com/search?q=eskeen+clinic+putney+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-50 to-primary-100 hover:from-primary-100 hover:to-primary-200 rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
          >
            <svg className="w-10 h-10 sm:w-12 sm:h-12" viewBox="0 0 48 48">
              <path fill="#4285F4" d="M45.12 24.5c0-1.56-.14-3.06-.4-4.5H24v8.51h11.84c-.51 2.75-2.06 5.08-4.39 6.64v5.52h7.11c4.16-3.83 6.56-9.47 6.56-16.17z"/>
              <path fill="#34A853" d="M24 46c5.94 0 10.92-1.97 14.56-5.33l-7.11-5.52c-1.97 1.32-4.49 2.1-7.45 2.1-5.73 0-10.58-3.87-12.31-9.07H4.34v5.7C7.96 41.07 15.4 46 24 46z"/>
              <path fill="#FBBC05" d="M11.69 28.18C11.25 26.86 11 25.45 11 24s.25-2.86.69-4.18v-5.7H4.34C2.85 17.09 2 20.45 2 24c0 3.55.85 6.91 2.34 9.88l7.35-5.7z"/>
              <path fill="#EA4335" d="M24 10.75c3.23 0 6.13 1.11 8.41 3.29l6.31-6.31C34.91 4.18 29.93 2 24 2 15.4 2 7.96 6.93 4.34 14.12l7.35 5.7c1.73-5.2 6.58-9.07 12.31-9.07z"/>
            </svg>
            <div className="text-left">
              <p className="font-semibold text-neutral-900 text-sm sm:text-base">Read More Reviews</p>
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-3.5 h-3.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <span className="text-xs text-neutral-600">on Google</span>
              </div>
            </div>
          </a>

          {/* Leave a Review Button */}
          <a
            href="https://search.google.com/local/writereview?placeid=ChIJx6VvnBcPdkgRhfH8QlSxdlk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:shadow-lg"
          >
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
            </div>
            <div className="text-left">
              <p className="font-semibold text-sm sm:text-base">Leave a Review</p>
              <p className="text-xs text-white/80">Share your experience</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
