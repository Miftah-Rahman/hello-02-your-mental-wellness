import logo from "@/assets/logo.png";
import { useInView } from "@/hooks/useInView";
import { Sparkles } from "lucide-react";

const CTASection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.15 });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div
          className={`relative rounded-3xl sm:rounded-[2.5rem] overflow-hidden p-8 sm:p-12 md:p-16 text-center shadow-2xl transition-all duration-700 ${
            isInView ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ background: "var(--hero-gradient)" }}
        >
          {/* Animated background ambient glow circles */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-white/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/3 animate-blob pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-white/10 rounded-full blur-2xl translate-y-1/3 -translate-x-1/4 animate-blob-delayed pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary-foreground/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            {/* App Logo with floating animation */}
            <div className="inline-block mb-6 relative">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mx-auto shadow-2xl animate-float overflow-hidden border-2 border-white/20">
                <img src={logo} alt="Hello-02 App Icon" className="w-full h-full object-cover" />
              </div>
              <span className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-400 border-2 border-white rounded-full animate-pulse" />
            </div>

            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white/15 text-white backdrop-blur-md mb-4 border border-white/20">
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>Prioritize Your Mental Peace</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-primary-foreground mb-4 tracking-tight leading-tight">
              Start Your Wellness Journey Today
            </h2>

            <p className="text-primary-foreground/85 text-base sm:text-lg mb-8 max-w-lg mx-auto leading-relaxed">
              Join thousands across Bangladesh who are cultivating inner calm, tracking their growth, and healing with Hello-02.
            </p>

            <div className="flex flex-wrap justify-center items-center gap-3.5">
              <a
                href="https://play.google.com/store/apps/details?id=com.teambbs.hello02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-foreground text-primary px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:opacity-95 transition-all hover:scale-105 active:scale-95 shadow-xl shimmer-effect"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                <span>Google Play</span>
              </a>

              <a
                href="https://apps.apple.com/us/app/hello-02-mental-health-app/id6805609446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-primary-foreground text-primary px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base hover:opacity-95 transition-all hover:scale-105 active:scale-95 shadow-xl shimmer-effect"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                <span>App Store</span>
              </a>
            </div>

            <p className="text-xs text-primary-foreground/75 mt-6 font-medium">
              Free to download • 100% Confidential • Verified Experts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
