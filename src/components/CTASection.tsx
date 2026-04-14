import { useState } from "react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const CTASection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center" style={{ background: "var(--hero-gradient)" }}>
          <div className="relative z-10">
            <img src={logo} alt="Hello-02" className="w-16 h-16 rounded-2xl mx-auto mb-6 shadow-lg" />
            <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
              Start Your Wellness Journey Today
            </h2>
            <p className="text-primary-foreground/80 text-lg mb-8 max-w-md mx-auto">
              Join thousands of users who are prioritizing their mental health with Hello-02.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href="https://play.google.com/store/apps/details?id=com.teambbs.hello02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary-foreground text-primary px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                </svg>
                Google Play
              </a>
              <button
                onClick={() => setShowComingSoon(true)}
                className="inline-flex items-center gap-2 bg-primary-foreground/15 text-primary-foreground border border-primary-foreground/30 px-6 py-3 rounded-xl font-semibold hover:bg-primary-foreground/25 transition-all hover:scale-[1.02]"
              >
                <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                </svg>
                App Store
              </button>
            </div>
          </div>
          {/* Decorative circles */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-foreground/5 rounded-full -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-foreground/5 rounded-full translate-y-1/3 -translate-x-1/4" />
        </div>
      </div>

      <Dialog open={showComingSoon} onOpenChange={setShowComingSoon}>
        <DialogContent className="sm:max-w-sm text-center">
          <DialogHeader>
            <DialogTitle className="text-xl">Coming Soon! 🍎</DialogTitle>
            <DialogDescription className="text-muted-foreground">
              Hello-02 for iOS is currently in development. Stay tuned — we'll be on the App Store soon!
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default CTASection;
