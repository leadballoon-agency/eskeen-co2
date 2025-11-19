interface AboutSectionProps {
  onBookingClick?: () => void
}

export default function AboutSection({ onBookingClick }: AboutSectionProps) {
  return (
    <section id="about" className="py-12 sm:py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto section-padding">
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <span className="text-primary-600 font-medium tracking-wider uppercase text-xs sm:text-sm">Meet Your Lead Practitioner</span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mt-2 sm:mt-4">
            Expert Care from
            <span className="block gradient-text">Nurse Elanda</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Mobile: Image at top */}
          <div className="relative order-1 lg:order-1">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl mx-auto max-w-sm lg:max-w-none">
              <div className="aspect-[4/5] sm:aspect-[4/5] relative">
                <img
                  src="/images/team/Elanda.jpg"
                  alt="Nurse Elanda - Advanced Aesthetics Practitioner"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-primary-100/10 to-primary-300/10"></div>
              </div>
            </div>

            {/* Badge - Positioned differently on mobile */}
            <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 max-w-[200px] sm:max-w-xs">
              <div className="flex items-center space-x-3 sm:space-x-4">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center">
                  <span className="text-xl sm:text-2xl">🇬🇷</span>
                </div>
                <div>
                  <p className="font-bold text-base sm:text-lg">Greek Excellence</p>
                  <p className="text-sm sm:text-base text-neutral-600">International Expertise</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4 sm:space-y-6 order-2 lg:order-2">
            <div className="lg:hidden text-center">
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Advanced Aesthetics Practitioner
              </h3>
            </div>
            <div className="hidden lg:block">
              <h3 className="font-display text-3xl font-bold">
                Nurse Elanda
                <span className="block text-xl text-primary-600 font-normal mt-2">Advanced Aesthetics Practitioner</span>
              </h3>
            </div>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              With 9 years of experience in the medical industry, I bring expertise from Greece to London's aesthetic scene. Having spent the past 5 years refining my skills in one of the best and most highly rated clinics in London, I specialise in advanced CO2 laser treatments for acne scars, wrinkles, and skin rejuvenation.
            </p>

            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
              My goal is to deliver safe, precise, and tailored CO2 laser treatments to help you achieve the best version of yourself. I combine medical precision with artistic vision to create natural, beautiful results.
            </p>

            <div className="space-y-3">
              <h4 className="font-bold text-lg">Qualifications & Expertise</h4>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  'Advanced CO2 Laser Specialist',
                  'Acne Scar Treatment Expert',
                  'Skin Resurfacing Procedures',
                  '9+ Years Medical Experience'
                ].map((item, index) => (
                  <li key={index} className="flex items-start sm:items-center text-neutral-700">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-primary-500 mr-2 flex-shrink-0 mt-0.5 sm:mt-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-xs sm:text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 sm:pt-6">
              <button 
                onClick={onBookingClick}
                className="w-full sm:w-auto inline-flex items-center justify-center bg-gradient-to-r from-primary-500 to-primary-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-medium text-base sm:text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                Book Your Consultation
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}