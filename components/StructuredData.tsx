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

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalClinic",
    "name": "Eskeen Clinic",
    "alternateName": "CO2 Laser London",
    "image": "https://co2london.com/images/clinic/inside1.webp",
    "description": "Expert CO2 laser treatment clinic in Putney, London. Specializing in acne scar treatment, wrinkle reduction, skin resurfacing, and pigmentation removal led by Nurse Elanda.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "115 Lower Richmond Road",
      "addressLocality": "Putney",
      "addressRegion": "London",
      "postalCode": "SW15 1EX",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.4598",
      "longitude": "-0.2166"
    },
    "url": "https://co2london.com",
    "telephone": "+447846888649",
    "email": "info@eskeen.co.uk",
    "priceRange": "££-£££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "09:00",
        "closes": "17:00"
      }
    ],
    "paymentAccepted": ["Cash", "Credit Card", "Debit Card", "Clearpay"],
    "currenciesAccepted": "GBP",
    "areaServed": [
      {
        "@type": "City",
        "name": "London"
      },
      {
        "@type": "City",
        "name": "Putney"
      },
      {
        "@type": "City",
        "name": "Wimbledon"
      },
      {
        "@type": "City",
        "name": "Richmond"
      },
      {
        "@type": "City",
        "name": "Chelsea"
      },
      {
        "@type": "City",
        "name": "Fulham"
      }
    ],
    "hasMap": "https://maps.google.com/?q=115+Lower+Richmond+Road,+Putney,+London+SW15+1EX",
    "medicalSpecialty": [
      "Dermatology",
      "Aesthetic Medicine",
      "Cosmetic Dermatology"
    ]
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
        "streetAddress": "115 Lower Richmond Road",
        "addressLocality": "Putney",
        "addressRegion": "London",
        "postalCode": "SW15 1EX",
        "addressCountry": "GB"
      },
      "telephone": "+447846888649"
    },
    "areaServed": [
      "London",
      "Putney",
      "Wimbledon",
      "Richmond",
      "Westminster",
      "Camden",
      "Islington",
      "Kensington",
      "Chelsea",
      "Fulham",
      "Hammersmith",
      "Greater London"
    ],
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://co2london.com",
      "serviceSmsNumber": "+447846888649"
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

  const reviewSchema = {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "name": "Eskeen Clinic",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5.0",
      "reviewCount": "6",
      "bestRating": "5",
      "worstRating": "5"
    },
    "review": [
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Maria B."
        },
        "datePublished": "2024-10-28",
        "reviewBody": "I honestly can't recommend Elanda enough! She's truly the best at what she does. She has so much experience, knowledge, and passion for her work. What makes her stand out is how she really listens and tailors everything perfectly to your needs.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Zoyyah I."
        },
        "datePublished": "2024-09-15",
        "reviewBody": "I've struggled with insecurity related to acne scars for years, and PRP has finally made a real difference! The clinic team - particularly Mavra was professional, I was super nervous and she took the time to explain the process and put me at ease.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Inês R."
        },
        "datePublished": "2024-09-20",
        "reviewBody": "I had PRP for the hyperpigmentation on my skin from Mavra and just 2 sessions in, I can already see a huge difference! Mavra explained the process thoroughly and made me feel so comfortable she was gentle, informative, and really took her time.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Olivia B."
        },
        "datePublished": "2024-10-25",
        "reviewBody": "Elanda is an exceptionally knowledgeable practitioner as well as being a nurse she is very patient through her consultations and will always explain everything to you and there is no pressure to have anything done that she doesn't feel is right for you.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Eva C."
        },
        "datePublished": "2024-09-18",
        "reviewBody": "I've been seeing Elanda at Eskeen Clinic for a course of PRP sessions and I couldn't be happier with the results! She's incredibly knowledgeable, professional, and really takes the time to explain everything so I feel informed and comfortable.",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      },
      {
        "@type": "Review",
        "author": {
          "@type": "Person",
          "name": "Ljiljana P."
        },
        "datePublished": "2024-09-22",
        "reviewBody": "What an incredible young lady Elanda is! Knowledgable, polite, professional, explains everything to a detail. Shows all the products and labels. Done the job precisely and with care. Much better priced services than anywhere else too. Highly recommend!",
        "reviewRating": {
          "@type": "Rating",
          "ratingValue": "5",
          "bestRating": "5"
        }
      }
    ]
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewSchema) }}
      />
    </>
  )
}