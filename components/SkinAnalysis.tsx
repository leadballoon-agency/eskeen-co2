interface SkinAnalysisProps {
  onBookingClick?: () => void
}

export default function SkinAnalysis({ onBookingClick }: SkinAnalysisProps) {
  const benefits = [
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'Personalised Assessment',
      description: 'Get a detailed analysis of your unique skin type, concerns, and goals'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      ),
      title: 'Expert Recommendations',
      description: 'Receive tailored treatment suggestions from our experienced practitioners'
    },
    {
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: 'No Obligation',
      description: 'Complimentary analysis with no pressure - just honest, professional advice'
    }
  ]

  return (
    <section id="skin-analysis" className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-50 via-white to-primary-50/50">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1">
            <span className="inline-block text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm mb-3">
              New Service
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold">
              Free Skin
              <span className="block gradient-text">Analysis</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-neutral-600 mt-4 leading-relaxed">
              Not sure which treatment is right for you? Book a complimentary skin analysis with our expert practitioners.
              We&apos;ll assess your skin concerns, discuss your goals, and create a personalised treatment plan
              tailored specifically for you.
            </p>

            {/* Benefits */}
            <div className="mt-6 sm:mt-8 space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-primary-100 rounded-xl flex items-center justify-center text-primary-600">
                    {benefit.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-neutral-900 text-sm sm:text-base">{benefit.title}</h3>
                    <p className="text-xs sm:text-sm text-neutral-600 mt-0.5">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-8">
              <button
                onClick={onBookingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Free Skin Analysis
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>

          {/* Visual */}
          <div className="order-1 lg:order-2">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-premium">
                <div className="aspect-square relative rounded-xl sm:rounded-2xl overflow-hidden">
                  <img
                    src="/images/skin-analysis.jpeg"
                    alt="Eskeen Clinic Skin Analysis Machine"
                    className="w-full h-full object-cover"
                  />
                  {/* Overlay with text */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent flex items-end justify-center pb-6">
                    <div className="text-center text-white">
                      <p className="font-semibold text-lg sm:text-xl drop-shadow-lg">Skin Analysis</p>
                      <p className="text-sm mt-1 drop-shadow-lg">Complimentary</p>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold gradient-text">15</p>
                    <p className="text-xs sm:text-sm text-neutral-600">Minutes</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold gradient-text">Free</p>
                    <p className="text-xs sm:text-sm text-neutral-600">No Cost</p>
                  </div>
                  <div>
                    <p className="text-2xl sm:text-3xl font-bold gradient-text">1:1</p>
                    <p className="text-xs sm:text-sm text-neutral-600">Expert Care</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-3 -right-3 sm:-top-4 sm:-right-4 bg-gradient-to-r from-primary-500 to-primary-600 text-white px-4 py-2 rounded-full text-xs sm:text-sm font-semibold shadow-lg">
                Now Available
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
