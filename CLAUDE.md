# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

CO2 laser treatment landing page for Eskeen Clinic, built with Next.js 15 (App Router), TypeScript, and Tailwind CSS. Single-page marketing site with booking integration.

## Development Commands

```bash
npm run dev        # Start development server (localhost:3000)
npm run build      # Build for production
npm run lint       # Run ESLint
```

## Architecture

### Page Structure

Single-page app using `app/page.tsx` → `PageWrapper.tsx` as the main orchestrator. PageWrapper is a client component that manages:
- Modal state (booking modal, video modal)
- Assessment data flow between `AssessmentTool` and `BookingModal`
- Click handlers passed down to all section components

### Key Component Flow

```
app/layout.tsx (metadata, fonts, analytics)
  └── app/page.tsx
        └── PageWrapper.tsx (client, state management)
              ├── Navigation
              ├── PremiumHero
              ├── AssessmentTool → captures user responses → BookingModal
              ├── AboutSection, PremiumTreatments, ResultsGallery, etc.
              └── BookingModal (GHL calendar iframe)
```

### Booking Integration

Booking uses GoHighLevel (GHL) embedded calendar:
- `BookingModal.tsx` loads GHL script and iframe from `link.leadballoon.co.uk`
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
5. **`components/Footer.tsx`** - Contact details, address
6. **`tailwind.config.js`** - Brand colors if needed
7. **`/public/images/`** - Logo, hero, before/after images

## External Services

- **GoHighLevel**: Booking calendar and form handling
- **Facebook Pixel**: Conversion tracking
- **ConvertBox**: Popup/lead capture
- **Vercel**: Deployment platform