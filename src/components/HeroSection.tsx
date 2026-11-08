import screenshotHome from "@/assets/screenshot-home.png";
import screenshotMood from "@/assets/screenshot-mood.png";
import AnimatedCounter from "@/components/AnimatedCounter";
import { Star, ShieldCheck, HeartHandshake } from "lucide-react";

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
  return (
    <section className="pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
      {/* Background ambient glowing animated blobs */}
      <div className="absolute -top-24 -left-24 w-80 sm:w-96 h-80 sm:h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" />
      <div className="absolute top-1/4 -right-24 w-80 sm:w-[420px] h-80 sm:h-[420px] bg-indigo-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-delayed" />
      <div className="absolute -bottom-24 left-1/3 w-72 h-72 bg-emerald-400/10 rounded-full blur-3xl pointer-events-none -z-10 animate-blob-delayed-2" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left content */}
          <div className="max-w-xl animate-fade-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-primary/20 backdrop-blur-sm shadow-sm hover:scale-105 transition-transform cursor-default">
              <span className="w-2.5 h-2.5 bg-emerald-500 rounded-full animate-pulse" />
              <span>Available on iOS & Android</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight text-foreground mb-3 tracking-tight">
              Hello-02 Mental Health App
            </h1>

            <p className="text-xl md:text-2xl font-semibold text-gradient mb-4">
              Talk, Heal & Grow
            </p>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8 max-w-md">
              Bangladesh's trusted mental health companion. Track moods, practice mindfulness, connect with verified psychologists — all in one app.
            </p>

            {/* Download Buttons */}
            <div className="flex flex-wrap gap-3 mb-10" id="download">
              <a
                href="https://play.google.com/store/apps/details?id=com.teambbs.hello02"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-95 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-primary/25 shimmer-effect"
              >
                <PlayStoreIcon />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Download on</div>
                  <div className="text-sm font-semibold -mt-0.5">Google Play</div>
                </div>
              </a>

              <a
                href="https://apps.apple.com/us/app/hello-02-mental-health-app/id6805609446"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-primary text-primary-foreground px-6 py-3.5 rounded-xl font-semibold hover:opacity-95 transition-all hover:scale-[1.03] active:scale-[0.98] shadow-lg shadow-primary/25 shimmer-effect"
              >
                <AppleIcon />
                <div className="text-left">
                  <div className="text-[10px] font-normal opacity-80 uppercase tracking-wider">Download on</div>
                  <div className="text-sm font-semibold -mt-0.5">App Store</div>
                </div>
              </a>
            </div>

            {/* Animated Social Proof Stats */}
            <div className="pt-4 border-t border-border/70 grid grid-cols-3 gap-3 max-w-md">
              <div className="flex flex-col">
                <div className="flex items-center gap-1 text-amber-500 font-bold text-lg sm:text-xl">
                  <Star className="w-4 h-4 fill-amber-500" />
                  <AnimatedCounter value={4.8} decimals={1} />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Rating (500+)</span>
              </div>

              <div className="flex flex-col border-x border-border/70 px-3">
                <div className="flex items-center gap-1 text-primary font-bold text-lg sm:text-xl">
                  <ShieldCheck className="w-4 h-4 text-emerald-500" />
                  <AnimatedCounter value={100} suffix="%" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Confidential</span>
              </div>

              <div className="flex flex-col pl-1">
                <div className="flex items-center gap-1 text-foreground font-bold text-lg sm:text-xl">
                  <HeartHandshake className="w-4 h-4 text-indigo-500" />
                  <AnimatedCounter value={24} suffix="/7" />
                </div>
                <span className="text-xs text-muted-foreground font-medium">Support Care</span>
              </div>
            </div>
          </div>

          {/* Right mockups with floating interactive badges */}
          <div className="relative flex justify-center lg:justify-end mt-4 lg:mt-0">
            <div className="relative">
              {/* Floating Badge 1 - Daily Streak */}
              <div className="absolute -left-4 sm:-left-10 top-1/4 z-20 bg-card/95 backdrop-blur-md border border-border shadow-xl px-3.5 py-2 rounded-2xl flex items-center gap-2.5 animate-float-slow text-xs font-semibold text-foreground pointer-events-none hover:scale-105 transition-transform">
                <span className="w-8 h-8 rounded-xl bg-amber-500/15 text-amber-600 flex items-center justify-center text-base">🔥</span>
                <div>
                  <div className="text-[10px] text-muted-foreground font-normal">Daily Streak</div>
                  <div className="font-bold">7 Days Mindful</div>
                </div>
              </div>

              {/* Floating Badge 2 - Peaceful Mood */}
              <div className="absolute -right-3 sm:-right-8 -bottom-3 sm:-bottom-5 z-20 bg-card/95 backdrop-blur-md border border-border shadow-xl px-3.5 py-2.5 rounded-2xl flex items-center gap-2.5 animate-float-reverse text-xs font-semibold text-foreground pointer-events-none hover:scale-105 transition-transform">
                <span className="w-8 h-8 rounded-xl bg-emerald-500/15 text-emerald-600 flex items-center justify-center text-base">🌱</span>
                <div>
                  <div className="text-[10px] text-muted-foreground font-normal">Mood Logged</div>
                  <div className="font-bold text-emerald-600">Peaceful & Calm</div>
                </div>
              </div>

              {/* Main App Mockup */}
              <div className="w-48 sm:w-60 md:w-64 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-2xl animate-float border-[4px] sm:border-[6px] border-foreground/10 hover:shadow-primary/20 transition-all duration-500">
                <img
                  src={screenshotHome}
                  alt="Hello-02 app home screen showing mood tracking and daily streak"
                  className="w-full object-cover"
                  loading="eager"
                  width="256"
                  height="512"
                />
              </div>

              {/* Secondary App Mockup (Mood Tracker) */}
              <div className="absolute -right-8 sm:-right-12 top-12 sm:top-16 w-36 sm:w-48 md:w-56 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden shadow-xl animate-float-delayed border-[4px] sm:border-[6px] border-foreground/10 hover:shadow-indigo-500/20 transition-all duration-500">
                <img
                  src={screenshotMood}
                  alt="Hello-02 mood tracker with weekly progress chart"
                  className="w-full object-cover"
                  loading="eager"
                  width="224"
                  height="448"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
