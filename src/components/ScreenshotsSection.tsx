import screenshotAssessment from "@/assets/screenshot-assessment.png";
import screenshotBreathing from "@/assets/screenshot-breathing.png";
import screenshotAppointment from "@/assets/screenshot-appointment.png";
import screenshotChat from "@/assets/screenshot-chat.png";

const screenshots = [
  { src: screenshotAssessment, alt: "Mental health assessment with DASS-42 clinical screening", label: "Assessment" },
  { src: screenshotBreathing, alt: "Guided breathing exercise with box breathing pattern", label: "Breathing" },
  { src: screenshotAppointment, alt: "Book appointments with verified psychologists in Bangladesh", label: "Appointments" },
  { src: screenshotChat, alt: "Chat with mental health support and professional psychologists", label: "Chat" },
];

const ScreenshotsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            See <span className="text-gradient">Hello-02</span> in Action
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore the features that thousands of Bangladeshi users trust for their mental well-being.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {screenshots.map((shot) => (
            <div key={shot.label} className="group">
              <div className="rounded-[1.5rem] overflow-hidden shadow-lg border-[4px] border-foreground/5 group-hover:shadow-xl transition-shadow duration-300 group-hover:scale-[1.02] transition-transform">
                <img src={shot.src} alt={shot.alt} className="w-full" loading="lazy" />
              </div>
              <p className="text-center text-sm font-medium text-muted-foreground mt-3">{shot.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
