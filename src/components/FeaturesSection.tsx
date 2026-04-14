import { Brain, Heart, MessageCircle, Activity, Shield, Users } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Clinical Assessments",
    description: "DASS-42 inspired screenings to understand your emotional landscape with instant, confidential results.",
  },
  {
    icon: Activity,
    title: "Mood Tracking",
    description: "Track daily moods, view weekly progress, and discover patterns that help you understand yourself better.",
  },
  {
    icon: Heart,
    title: "Breathing Exercises",
    description: "Guided breathing sessions with box breathing, 4-7-8, and more patterns to calm your mind instantly.",
  },
  {
    icon: MessageCircle,
    title: "Chat with Experts",
    description: "Connect with verified psychologists and mental health professionals for guidance and support.",
  },
  {
    icon: Users,
    title: "Book Appointments",
    description: "Find and book sessions with clinical psychologists, child specialists, and cognitive therapists near you.",
  },
  {
    icon: Shield,
    title: "100% Confidential",
    description: "Your mental health data is encrypted and private. We never share your information with anyone.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Everything You Need for{" "}
            <span className="text-gradient">Mental Wellness</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A complete mental health toolkit designed with care for the people of Bangladesh.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-7 border border-border/60 hover:border-primary/30 transition-all duration-300 hover:shadow-[var(--card-shadow-hover)]"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
