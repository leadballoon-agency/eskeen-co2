'use client'

import { useEffect } from 'react'
import { trackPhoneClick } from './FacebookPixel'

interface SkinAnalysisModalProps {
  isOpen: boolean
  onClose: () => void
}

const CALENDAR_URL = 'https://link.leadballoon.co.uk/widget/booking/syK16SjNrYdMzEIta7Bb'
const FORM_EMBED_SRC = 'https://link.leadballoon.co.uk/js/form_embed.js'

export default function SkinAnalysisModal({ isOpen, onClose }: SkinAnalysisModalProps) {
  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'unset'
      return
    }

    document.body.style.overflow = 'hidden'

    // Load GHL form embed once per modal open (resizes the iframe to content height)
    const script = document.createElement('script')
    script.type = 'text/javascript'
    script.async = true
    script.src = FORM_EMBED_SRC
    document.body.appendChild(script)

    return () => {
      document.body.style.overflow = 'unset'
      try {
        document.body.removeChild(script)
      } catch {
        /* already removed */
      }
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

      {/* Modal */}
      <div className="relative w-full max-w-xl bg-white rounded-t-3xl sm:rounded-3xl shadow-2xl overflow-hidden animate-modal-slide-up max-h-[90vh] sm:max-h-[85vh] flex flex-col">
        {/* Compact header */}
        <div className="relative bg-gradient-to-br from-primary-500 to-primary-600 px-5 py-4 sm:px-6 sm:py-5 text-white flex-shrink-0">
          <button
            onClick={onClose}
            className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
            aria-label="Close"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <h2 className="text-lg sm:text-xl font-bold pr-10">Book Your Consultation</h2>
          <p className="text-white/80 text-xs sm:text-sm mt-0.5">
            30-minute consultation • £50 redeemable against your treatment
          </p>
        </div>

        {/* Calendar iframe — fills remaining height, scrolls internally */}
        <div
          className="flex-1 overflow-y-auto overscroll-contain"
          style={{ WebkitOverflowScrolling: 'touch' }}
        >
          <iframe
            src={CALENDAR_URL}
            title="Eskeen Clinic — Consultation Booking"
            style={{ width: '100%', border: 'none', display: 'block', minHeight: '640px' }}
            scrolling="yes"
            id="syK16SjNrYdMzEIta7Bb"
          />
        </div>

        {/* Compact footer — cancellation policy + phone fallback */}
        <div className="flex-shrink-0 border-t border-neutral-200 px-4 py-3 bg-neutral-50 text-center space-y-1">
          <p className="text-xs text-neutral-500">
            48 hours&apos; notice required to cancel or rearrange.
          </p>
          <p className="text-xs sm:text-sm text-neutral-600">
            Prefer to call?{' '}
            <a
              href="tel:+447846888649"
              onClick={trackPhoneClick}
              className="text-primary-600 font-semibold hover:text-primary-700"
            >
              +44 7846 888649
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
