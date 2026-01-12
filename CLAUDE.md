# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CO2 laser treatment landing page for Eskeen Clinic, built with Next.js 15.5.9 (App Router), TypeScript, and Tailwind CSS. Single-page marketing site with booking integration.

**Live site:** https://co2london.com
**Vercel project:** `eskeen-co2` (not eskeen-co2laser)

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run lint       # Run ESLint
```

## Architecture

### Page Structure

Single-page app using `app/page.tsx` → `PageWrapper.tsx` as the main orchestrator. PageWrapper is a client component that manages:
- Modal state (booking modal, video modal, skin analysis modal)
- Assessment data flow between `AssessmentTool` and `BookingModal`
- Click handlers passed down to all section components

### Key Component Flow

```
app/layout.tsx (metadata, fonts, analytics)
  └── app/page.tsx
        └── PageWrapper.tsx (client, state management)
              ├── Navigation
              ├── PremiumHero
              ├── SkinAnalysis → SkinAnalysisModal (dedicated GHL calendar)
              ├── AssessmentTool → captures user responses → BookingModal
              ├── AboutSection, PremiumTreatments, ResultsGallery, Reviews, etc.
              ├── BookingModal (GHL calendar iframe)
              ├── VideoModal
              └── SkinAnalysisModal (separate GHL calendar for skin analysis bookings)
```

### Booking Integration

Booking uses GoHighLevel (GHL) embedded calendars:
- `BookingModal.tsx` - Main booking calendar from `link.leadballoon.co.uk`
- `SkinAnalysisModal.tsx` - Dedicated skin analysis calendar from `link.eskeenpay.co.uk`
- Assessment data from `AssessmentTool` can be passed to booking flow
- Phone number click tracking via `FacebookPixel.tsx`

### SEO & Structured Data

- `app/layout.tsx` - Comprehensive Next.js metadata export (OG, Twitter, robots)
- `components/StructuredData.tsx` - JSON-LD schemas (MedicalBusiness, LocalBusiness, Service, Review)
- `app/sitemap.ts` and `app/robots.ts` - Dynamic sitemap and robots.txt

### Analytics

- `FacebookPixel.tsx` - FB Pixel with custom event tracking functions
- `ConvertBox.tsx` - ConvertBox popup integration (loaded in Suspense)

### Styling

Custom Tailwind config with:
- `primary` color palette (blue shades, primary-500: #0D5EAF)
- `neutral` grays
- Custom fonts: Playfair Display (display), Inter (sans)
- Custom animations: `float`, `fade-in`, `slide-up`

### Path Aliases

Uses `@/*` path alias mapping to project root (configured in tsconfig.json).

## Customization for New Clinics

When duplicating for a new clinic, update in order:

1. **Hardcoded content** (search for "Eskeen", "co2london.com", phone numbers)
2. **`app/layout.tsx`** - All metadata, metadataBase URL
3. **`components/StructuredData.tsx`** - All schema data (address, phone, pricing, reviews)
4. **`components/BookingModal.tsx`** - GHL calendar URL and phone number
5. **`components/SkinAnalysisModal.tsx`** - GHL calendar URL for skin analysis
6. **`components/Reviews.tsx`** - Update reviews and review count
7. **`components/Footer.tsx`** - Contact details, address
8. **`tailwind.config.js`** - Brand colors if needed
9. **`/public/images/`** - Logo, hero, before/after images, skin-analysis.jpeg

## External Services

- **GoHighLevel**: Booking calendar and form handling
- **Facebook Pixel**: Conversion tracking
- **ConvertBox**: Popup/lead capture
- **Vercel**: Deployment platform (project: `eskeen-co2`)

## Feature Toggles

- **Model Card** in `ResultsGallery.tsx`: Set `SHOW_MODEL_CARD = true/false` at top of file to show/hide the "Become a Model" card without removing code

## Content Updates

### Reviews (`components/Reviews.tsx`)
- Currently shows 92 Google reviews with 5.0 average rating
- Review dates should reflect actual review dates (currently showing Jan 2026, Dec 2025)
- Update review count in the "Based on X Google reviews" text when reviews change

### Skin Analysis Section (`components/SkinAnalysis.tsx`)
- Promotes free 15-minute skin analysis consultations
- Uses image at `/public/images/skin-analysis.jpeg`
- Opens `SkinAnalysisModal` with dedicated booking calendar