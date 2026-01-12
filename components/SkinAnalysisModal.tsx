'use client'

import { useEffect } from 'react'
import { trackPhoneClick } from './FacebookPixel'

interface SkinAnalysisModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SkinAnalysisModal({ isOpen, onClose }: SkinAnalysisModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'

      // Load GHL calendar script
      const script = document.createElement('script')
      script.type = 'text/javascript'
      script.async = true
      script.src = 'https://link.eskeenpay.co.uk/js/form_embed.js'
      document.body.appendChild(script)

      return () => {
        try {
          document.body.removeChild(script)
        } catch (e) {
          // Script already removed
        }
      }
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[9999] flex items-end sm:items-center justify-center sm:p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal - Mobile slides up from bottom, desktop centered */}
      <div className="relative w-full max-w-2xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 p-5 sm:p-6 lg:p-8 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 lg:top-6 lg:right-6 w-8 h-8 sm:w-10 sm:h-10 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
          >
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="text-center">
            <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur rounded-full mb-2 sm:mb-3 lg:mb-4">
              <svg className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-1 sm:mb-2">Free Skin Analysis</h2>
            <p className="text-white/90 text-xs sm:text-sm lg:text-base">
              Book your complimentary consultation
            </p>
          </div>
        </div>

        {/* Calendar Content */}
        <div className="flex flex-col flex-1 overflow-hidden">
          {/* Scrollable Content Area */}
          <div className="flex-1 overflow-y-auto p-6 sm:p-8">
            {/* GHL Calendar */}
            <div className="space-y-4 sm:space-y-6 animate-fade-in">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">Book Your Free Analysis</h3>
                <p className="text-sm sm:text-base text-neutral-600 mb-4 sm:mb-6">Select your preferred date and time for a complimentary skin consultation</p>
              </div>

              <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 min-h-[600px]">
                <iframe
                  src="https://link.eskeenpay.co.uk/widget/booking/itJPH3ZPoHYBdFjVsGvM"
                  style={{
                    width: '100%',
                    minHeight: '700px',
                    height: '100%',
                    border: 'none',
                    overflow: 'hidden'
                  }}
                  scrolling="no"
                  id="itJPH3ZPoHYBdFjVsGvM_1768208648270"
                  title="Eskeen Clinic Skin Analysis Booking"
                />
              </div>

              {/* Call Now Option */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-neutral-200"></div>
                </div>
                <div className="relative flex justify-center text-xs sm:text-sm uppercase">
                  <span className="bg-white px-2 text-neutral-500">Or</span>
                </div>
              </div>

              <a
                href="tel:+447846888649"
                onClick={trackPhoneClick}
                className="block w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-600 hover:to-primary-700 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:shadow-lg group"
              >
                <div className="flex items-center justify-center space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-medium mb-0.5 sm:mb-1">Prefer to speak with us?</p>
                    <p className="text-xl sm:text-2xl font-bold">+44 7846 888649</p>
                    <p className="text-xs sm:text-sm text-white/90 mt-0.5">Tap to call now</p>
                  </div>
                </div>
              </a>

              <div className="bg-white border-2 border-primary-100 rounded-xl p-6">
                <h5 className="font-semibold mb-4 flex items-center">
                  <svg className="w-5 h-5 text-primary-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  What to expect:
                </h5>
                <ul className="space-y-3 text-sm text-neutral-700">
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>15-minute complimentary consultation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>Personalised skin assessment</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>Expert treatment recommendations</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-primary-500 mr-2 mt-0.5">✓</span>
                    <span>No obligation - just honest advice</span>
                  </li>
                </ul>
              </div>

              <div className="text-center">
                <p className="text-xs text-neutral-500">
                  Booking takes less than 2 minutes • Available appointments updated in real-time
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
