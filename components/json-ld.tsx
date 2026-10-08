import { siteConfig } from "@/lib/site-config";

export function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${siteConfig.url}/#website`,
        url: siteConfig.url,
        name: "AlgoraX",
        description:
          "Top AI, Web Development and Mobile App Development Company in Barishal Division and Worldwide.",
        publisher: {
          "@id": `${siteConfig.url}/#organization`,
        },
        inLanguage: ["en", "bn"],
      },
      {
        "@type": ["Organization", "ProfessionalService", "LocalBusiness"],
        "@id": `${siteConfig.url}/#organization`,
        name: "AlgoraX",
        alternateName: [
          "AlgoraX Software",
          "AlgoraX Web Development Barishal",
          "AlgoraX App Development Barisal Division",
        ],
        url: siteConfig.url,
        logo: `${siteConfig.url}/logo.svg`,
        image: `${siteConfig.url}/logo.svg`,
        email: siteConfig.email,
        description:
          "AlgoraX is the premier AI-powered software, web development, and mobile app development company located in Barishal Division, Bangladesh, engineering world-class digital products for local and global enterprises.",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Barishal",
          addressRegion: "Barishal Division",
          postalCode: "8200",
          addressCountry: "BD",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 22.7010,
          longitude: 90.3535,
        },
        areaServed: [
          {
            "@type": "AdministrativeArea",
            name: "Barishal Division",
          },
          {
            "@type": "City",
            name: "Barishal",
          },
          {
            "@type": "City",
            name: "Patuakhali",
          },
          {
            "@type": "City",
            name: "Bhola",
          },
          {
            "@type": "City",
            name: "Pirojpur",
          },
          {
            "@type": "City",
            name: "Barguna",
          },
          {
            "@type": "City",
            name: "Jhalokati",
          },
          {
            "@type": "Country",
            name: "Bangladesh",
          },
          {
            "@type": "Place",
            name: "Worldwide",
          },
        ],
        knowsAbout: [
          "Web Development",
          "Mobile App Development",
          "Custom Software Engineering",
          "AI Development",
          "Next.js Development",
          "React Native & Flutter",
          "SaaS Platform Development",
          "AI & Multi-Agent Systems Integration",
          "Cloud Infrastructure",
        ],
        priceRange: "$$",
        currenciesAccepted: "USD, BDT, EUR",
        paymentAccepted: "Credit Card, Wire Transfer, Stripe",
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "00:00",
            closes: "23:59",
          },
        ],
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: "5.0",
          reviewCount: "50",
          bestRating: "5",
          worstRating: "1",
        },
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Software & Web Development Services",
          itemListElement: [
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Web Development Services in Barishal Division",
                description:
                  "High-performance responsive websites, web portals, and progressive web apps built with Next.js, React, and TypeScript.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "Mobile App Development in Barishal Division",
                description:
                  "Native and cross-platform iOS and Android mobile app development with high-speed performance and modern UI/UX.",
              },
            },
            {
              "@type": "Offer",
              itemOffered: {
                "@type": "Service",
                name: "AI & Custom Software Development",
                description:
                  "Autonomous LLM systems, intelligent RAG pipelines, automated workflows, and enterprise business management systems.",
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "@id": `${siteConfig.url}/#faq`,
        mainEntity: siteConfig.faqItems.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: faq.answer,
          },
        })),
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}
