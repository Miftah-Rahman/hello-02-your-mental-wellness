import { Brain, Heart, MessageCircle, Activity, Shield, Users, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

const features = [
  {
    icon: Brain,
    title: "Clinical Assessments",
    description: "DASS-42 inspired screenings to understand your emotional landscape with instant, confidential results.",
    tag: "Clinical",
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    icon: Activity,
    title: "Mood Tracking",
    description: "Track daily moods, view weekly progress, and discover patterns that help you understand yourself better.",
    tag: "Daily",
    color: "from-emerald-500/10 to-teal-500/10",
  },
  {
    icon: Heart,
    title: "Breathing Exercises",
    description: "Guided breathing sessions with box breathing, 4-7-8, and more patterns to calm your mind instantly.",
    tag: "Mindfulness",
    color: "from-pink-500/10 to-rose-500/10",
  },
  {
    icon: MessageCircle,
    title: "Chat with Experts",
    description: "Connect with verified psychologists and mental health professionals for guidance and support.",
    tag: "Direct Support",
    color: "from-violet-500/10 to-purple-500/10",
  },
  {
    icon: Users,
    title: "Book Appointments",
    description: "Find and book sessions with clinical psychologists, child specialists, and cognitive therapists near you.",
    tag: "Verified Doctors",
    color: "from-amber-500/10 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your mental health data is encrypted and private. We never share your information with anyone.",
    tag: "Encrypted",
    color: "from-teal-500/10 to-cyan-500/10",
  },
];

const FeaturesSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 relative overflow-hidden">
      {/* Ambient background blur */}
      <div className="absolute top-1/3 -left-32 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -right-32 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header with Scroll Reveal */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Care</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">Mental Wellness</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            A complete mental health toolkit designed with care for the people of Bangladesh.
          </p>
        </div>

        {/* Feature Cards Grid with Staggered Scroll Animation */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className={`group relative bg-card rounded-2xl p-7 border border-border/70 hover:border-primary/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[var(--card-shadow-hover)] flex flex-col justify-between overflow-hidden ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${i * 90}ms`,
              }}
            >
              {/* Subtle card top gradient accent */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}
              />

              <div className="relative z-10">
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/80 bg-muted px-2.5 py-0.5 rounded-full border border-border/50">
                    {feature.tag}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Bottom accent glow bar */}
              <div className="w-0 group-hover:w-full h-1 bg-gradient-to-r from-primary to-indigo-500 transition-all duration-500 mt-6 rounded-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
