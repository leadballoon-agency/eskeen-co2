export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eskeen Clinic",
    "alternateName": "Eskeen Clinic London",
    "url": "https://co2london.com",
    "sameAs": [
      "https://co2london.com"
    ],
    "logo": "https://co2london.com/images/logo.png",
    "image": "https://co2london.com/images/home1.jpg",
    "description": "Expert CO2 laser treatment clinic in London led by Nurse Elanda, specializing in acne scar treatment, wrinkle reduction, skin texture improvement, and anti-aging treatments.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "London",
      "addressRegion": "Greater London",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.5074",
      "longitude": "-0.1278"
    },
    "telephone": "+44 7846888649",
    "priceRange": "£££",
    "openingHours": [
      "Mo-Fr 09:00-18:00",
      "Sa 09:00-17:00"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatments",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "Single CO2 Laser Session",
            "description": "Professional fractional CO2 laser treatment for skin resurfacing"
          },
          "price": "395",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "CO2 Laser 3 Session Package",
            "description": "Comprehensive package for acne scars, wrinkles, and skin rejuvenation - Save £335"
          },
          "price": "850",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "MedicalProcedure",
            "name": "PRP Enhancement Add-on",
            "description": "Platelet Rich Plasma therapy add-on for enhanced healing and results"
          },
          "price": "100",
          "priceCurrency": "GBP"
        }
      ]
    },
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Laser Therapy"
    ],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "CO2 Laser Skin Resurfacing",
        "description": "Fractional CO2 laser treatment for acne scars, wrinkles, and skin rejuvenation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "PRP Therapy",
        "description": "Platelet Rich Plasma therapy for enhanced healing and skin regeneration"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Acne Scar Treatment",
        "description": "Specialized CO2 laser treatment for acne scar reduction"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Pigmentation Treatment",
        "description": "Laser treatment for sun damage and pigmentation removal"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Stretch Mark Reduction",
        "description": "CO2 laser treatment for stretch mark improvement"
      }
    ]
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Eskeen Clinic CO2 Laser",
    "alternateName": "CO2 Laser London",
    "url": "https://co2london.com",
    "description": "Expert CO2 laser treatment for acne scars, wrinkles, skin texture & pigmentation in London by Nurse Elanda",
    "publisher": {
      "@type": "Organization",
      "name": "Eskeen Clinic"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://co2london.com/?s={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  }

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "CO2 Laser Treatment London",
    "description": "Expert fractional CO2 laser treatment for acne scars, wrinkles, skin texture, and pigmentation led by Nurse Elanda",
    "provider": {
      "@type": "MedicalBusiness",
      "name": "Eskeen Clinic",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "London",
        "addressRegion": "Greater London",
        "addressCountry": "GB"
      },
      "telephone": "+44 7846888649"
    },
    "areaServed": [
      "London",
      "Westminster",
      "Camden",
      "Islington",
      "Kensington",
      "Chelsea",
      "Hammersmith",
      "Greater London"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://co2london.com",
      "serviceSmsNumber": "+44 7846888649"
    },
    "category": "Medical Treatment",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "CO2 Laser Treatment Packages",
      "itemListElement": [
        {
          "@type": "Offer",
          "name": "Single CO2 Laser Session",
          "price": "395",
          "priceCurrency": "GBP"
        },
        {
          "@type": "Offer",
          "name": "CO2 Laser 3 Session Package",
          "price": "850",
          "priceCurrency": "GBP",
          "description": "Save £335 - Comprehensive package for acne scars, wrinkles, and skin rejuvenation"
        },
        {
          "@type": "Offer",
          "name": "PRP Enhancement Add-on",
          "price": "100",
          "priceCurrency": "GBP",
          "description": "Platelet Rich Plasma therapy add-on per session"
        }
      ]
    }
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
    </>
  )
}