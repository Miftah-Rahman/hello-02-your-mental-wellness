import { useState } from "react";
import screenshotHome from "@/assets/screenshot-home.png";
import screenshotMood from "@/assets/screenshot-mood.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const PlayStoreIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.302 2.302a1 1 0 0 1 0 1.38l-2.302 2.302L15.396 13l2.302-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
  </svg>
);

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

const HeroSection = () => {
  const [showComingSoon, setShowComingSoon] = useState(false);

  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Available on Android
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-3">
              Hello-02 Mental Health App
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gradient mb-4">
              Talk, Heal & Grow
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Bangladesh's trusted mental health companion. Track moods, practice mindfulness, connect with verified psychologists — all in one app.
            </p>

            <div className="flex flex-wrap gap-3" id="download">
              <a
                href="https://play.google.com/store/apps/details?id=com.teambbs.hello02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Download on</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>

              <button
                onClick={() => setShowComingSoon(true)}
                className="inline-flex items-center gap-3 bg-card text-foreground border border-border px-6 py-3.5 rounded-xl font-semibold hover:bg-muted transition-all hover:scale-[1.02] active:scale-[0.98]"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-60 uppercase tracking-wider">Download on</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </button>
            </div>
          </div>

          {/* Right mockups */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-56 md:w-64 rounded-[2.5rem] overflow-hidden shadow-2xl animate-float border-[6px] border-foreground/10">
                <img src={screenshotHome} alt="Hello-02 app home screen showing mood tracking and daily streak" className="w-full" />
              </div>
              <div className="absolute -right-12 top-16 w-48 md:w-56 rounded-[2.5rem] overflow-hidden shadow-xl animate-float-delayed border-[6px] border-foreground/10">
                <img src={screenshotMood} alt="Hello-02 mood tracker with weekly progress chart" className="w-full" />
              </div>
            </div>
          </div>
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

export default HeroSection;
