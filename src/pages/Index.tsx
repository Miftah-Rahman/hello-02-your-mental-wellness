import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import BreathingWidget from "@/components/BreathingWidget";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import FAQSection, { faqs } from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": "https://hello02.app/#website",
        "url": "https://hello02.app",
        "name": "Hello-02: Best Mental Health App in Bangladesh",
        "description":
          "Bangladesh's premier mental wellness platform. Track moods, practice guided mindfulness, assess emotional health with DASS-42, and consult verified psychologists.",
        "publisher": {
          "@id": "https://hello02.app/#organization",
        },
        "inLanguage": ["en-US", "bn-BD"],
      },
      {
        "@type": "Organization",
        "@id": "https://hello02.app/#organization",
        "name": "Hello-02",
        "url": "https://hello02.app",
        "logo": {
          "@type": "ImageObject",
          "url": "https://hello02.app/favicon.png",
          "caption": "Hello-02 Mental Health App Logo",
        },
        "email": "support@hello02.app",
        "sameAs": [
          "https://play.google.com/store/apps/details?id=com.teambbs.hello02",
          "https://apps.apple.com/us/app/hello-02-mental-health-app/id6805609446",
        ],
        "contactPoint": [
          {
            "@type": "ContactPoint",
            "email": "support@hello02.app",
            "contactType": "customer support",
            "areaServed": "BD",
            "availableLanguage": ["English", "Bengali"],
          },
        ],
      },
      {
        "@type": "MobileApplication",
        "@id": "https://hello02.app/#app",
        "name": "Hello-02: Mental Health App",
        "operatingSystem": "Android, iOS",
        "applicationCategory": "HealthApplication",
        "applicationSubCategory": "Mental Health & Mindfulness",
        "description":
          "Bangladesh's best mental health app. Track moods, practice breathing exercises, take clinical assessments, and connect with verified psychologists.",
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "BDT",
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "500",
          "bestRating": "5",
          "worstRating": "1",
        },
        "author": {
          "@id": "https://hello02.app/#organization",
        },
        "url": "https://hello02.app",
        "downloadUrl": [
          "https://apps.apple.com/us/app/hello-02-mental-health-app/id6805609446",
          "https://play.google.com/store/apps/details?id=com.teambbs.hello02",
        ],
        "featureList": [
          "Daily Mood Tracking & Emotional Analytics",
          "Guided Box Breathing & 4-7-8 Breathing Patterns",
          "Clinical DASS-42 Psychological Screenings",
          "Verified Psychologists Directory in Bangladesh",
          "Encrypted and 100% Confidential Care",
        ],
      },
      {
        "@type": "FAQPage",
        "@id": "https://hello02.app/#faq",
        "mainEntity": faqs.map((f) => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": f.answer,
          },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://hello02.app/#breadcrumbs",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://hello02.app",
          },
        ],
      },
    ],
  };

  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>Hello-02: Best Mental Health App in Bangladesh | Mood Tracker & Therapy</title>
        <meta
          name="description"
          content="Hello-02 is Bangladesh's leading mental health app. Track your mood, practice guided breathing, take DASS-42 assessments, and connect with verified psychologists. Download free on iOS and Android."
        />
        <meta
          name="keywords"
          content="mental health app Bangladesh, mood tracker, psychologist Bangladesh, breathing exercise, DASS-42 assessment, therapy app, Hello-02, মানসিক স্বাস্থ্য অ্যাপ, সাইকোলজিস্ট বাংলাদেশ, মানসিক সুস্থতা, ডিপ্রেশন টেস্ট"
        />
        <link rel="canonical" href="https://hello02.app" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />

        {/* OpenGraph / Facebook */}
        <meta property="og:title" content="Hello-02: Best Mental Health App in Bangladesh" />
        <meta property="og:site_name" content="Hello-02" />
        <meta property="og:url" content="https://hello02.app" />
        <meta
          property="og:description"
          content="Track moods, practice mindfulness, and connect with verified psychologists. Bangladesh's trusted mental health companion."
        />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:locale:alternate" content="bn_BD" />
        <meta property="og:image" content="https://hello02.app/favicon.png" />
        <meta property="og:image:width" content="512" />
        <meta property="og:image:height" content="512" />
        <meta property="og:image:alt" content="Hello-02 Mental Health App Bangladesh" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello-02: Best Mental Health App in Bangladesh" />
        <meta
          name="twitter:description"
          content="Track moods, practice mindfulness, and connect with verified psychologists. Bangladesh's trusted mental health companion."
        />
        <meta name="twitter:image" content="https://hello02.app/favicon.png" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <BreathingWidget />
        <FeaturesSection />
        <ScreenshotsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
