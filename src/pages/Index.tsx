import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import ScreenshotsSection from "@/components/ScreenshotsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "Hello-02: Mental Health App",
    operatingSystem: "Android",
    applicationCategory: "HealthApplication",
    description:
      "Bangladesh's best mental health app. Track moods, practice breathing exercises, take clinical assessments, and connect with verified psychologists.",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "BDT",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.8",
      ratingCount: "500",
    },
    url: "https://play.google.com/store/apps/details?id=com.teambbs.hello02",
  };

  return (
    <>
      <Helmet>
        <title>Hello-02: Best Mental Health App in Bangladesh | Mood Tracker & Therapy</title>
        <meta
          name="description"
          content="Hello-02 is Bangladesh's leading mental health app. Track your mood, practice guided breathing, take DASS-42 assessments, and connect with verified psychologists. Download free on Android."
        />
        <meta name="keywords" content="mental health app Bangladesh, mood tracker, psychologist Bangladesh, breathing exercise, DASS-42 assessment, therapy app, Hello-02, মানসিক স্বাস্থ্য অ্যাপ" />
        <link rel="canonical" href="https://hello02.app" />
        <meta property="og:title" content="Hello-02: Best Mental Health App in Bangladesh" />
        <meta property="og:url" content="https://hello02.app" />
        <meta property="og:description" content="Track moods, practice mindfulness, and connect with verified psychologists. Bangladesh's trusted mental health companion." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hello-02: Best Mental Health App in Bangladesh" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>

      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <ScreenshotsSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
};

export default Index;
