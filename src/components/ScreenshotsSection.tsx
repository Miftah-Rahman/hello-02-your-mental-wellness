import screenshotAssessment from "@/assets/screenshot-assessment.png";
import screenshotBreathing from "@/assets/screenshot-breathing.png";
import screenshotAppointment from "@/assets/screenshot-appointment.png";
import screenshotChat from "@/assets/screenshot-chat.png";
import { useInView } from "@/hooks/useInView";
import { Smartphone } from "lucide-react";

const screenshots = [
  {
    src: screenshotAssessment,
    alt: "Mental health assessment with DASS-42 clinical screening",
    label: "Assessment",
    subtitle: "DASS-42 Clinical Test",
  },
  {
    src: screenshotBreathing,
    alt: "Guided breathing exercise with box breathing pattern",
    label: "Breathing",
    subtitle: "Box & 4-7-8 Patterns",
  },
  {
    src: screenshotAppointment,
    alt: "Book appointments with verified psychologists in Bangladesh",
    label: "Appointments",
    subtitle: "Verified Specialists",
  },
  {
    src: screenshotChat,
    alt: "Chat with mental health support and professional psychologists",
    label: "Support Chat",
    subtitle: "Private & Confidential",
  },
];

const ScreenshotsSection = () => {
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-card/60 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3">
            <Smartphone className="w-3.5 h-3.5" />
            <span>App Interface</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See <span className="text-gradient">Hello-02</span> in Action
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Explore the features that thousands of Bangladeshi users trust for their mental well-being.
          </p>
        </div>

        {/* Screenshots grid with staggered animated reveals and smooth hover lift */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-6xl mx-auto">
          {screenshots.map((shot, idx) => (
            <div
              key={shot.label}
              className={`group transition-all duration-700 ${
                isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
              style={{
                transitionDelay: `${idx * 120}ms`,
              }}
            >
              <div className="relative rounded-[1.75rem] sm:rounded-[2rem] overflow-hidden shadow-md border-[4px] border-foreground/5 group-hover:border-primary/30 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500 group-hover:-translate-y-3 group-hover:scale-[1.03] bg-background">
                <img
                  src={shot.src}
                  alt={shot.alt}
                  className="w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Subtle sheen highlight */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>

              <div className="text-center mt-4">
                <p className="text-sm sm:text-base font-bold text-foreground group-hover:text-primary transition-colors">
                  {shot.label}
                </p>
                <p className="text-[11px] sm:text-xs text-muted-foreground mt-0.5">
                  {shot.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
