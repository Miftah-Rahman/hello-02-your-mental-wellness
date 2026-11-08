import { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

export const faqs = [
  {
    question: "What is Hello-02 Mental Health App?",
    answer:
      "Hello-02 is Bangladesh's leading mental health and emotional well-being mobile app. It provides an all-in-one platform for mood tracking, clinical assessments (DASS-42), guided breathing exercises, and confidential consultations with verified psychologists.",
  },
  {
    question: "Is Hello-02 free to download and use?",
    answer:
      "Yes, Hello-02 is completely free to download on both Google Play Store (Android) and Apple App Store (iOS). Core features including daily mood tracking, guided breathing exercises, and clinical assessments are free to use.",
  },
  {
    question: "How does the DASS-42 clinical assessment work?",
    answer:
      "The DASS-42 (Depression, Anxiety, and Stress Scale) is an internationally recognized 42-item self-report questionnaire. It measures the severity of core symptoms of depression, anxiety, and stress with instant, confidential results and personalized care recommendations.",
  },
  {
    question: "Can I consult verified psychologists in Bangladesh on Hello-02?",
    answer:
      "Yes. Hello-02 connects users directly with verified clinical psychologists, mental health specialists, and cognitive behavioral therapists across Bangladesh. You can view doctor profiles, check availability, and book appointments right from the app.",
  },
  {
    question: "Is my mental health and therapy data confidential?",
    answer:
      "Absolutely. We take patient confidentiality with extreme seriousness. Your mood logs, test scores, private notes, and messages are end-to-end encrypted. Hello-02 never sells or shares your personal wellness data with third parties or advertisers.",
  },
  {
    question: "How do I get help or customer support?",
    answer:
      "You can visit our dedicated Support page at hello02.app/support or email our official help desk directly at support@hello02.app. Our support team typically responds within 12–24 hours.",
  },
];

export const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [sectionRef, isInView] = useInView({ threshold: 0.1 });

  const toggle = (idx: number) => {
    setOpenIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <section ref={sectionRef} className="py-20 md:py-28 bg-card/40 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/3 -right-24 w-80 h-80 bg-primary/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 -left-24 w-80 h-80 bg-indigo-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 max-w-4xl">
        <div
          className={`text-center max-w-2xl mx-auto mb-14 transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-primary/10 text-primary mb-3 border border-primary/20">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Got Questions?</span>
          </div>

          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-muted-foreground text-base sm:text-lg">
            Everything you need to know about Hello-02, mental wellness, and how we protect your privacy.
          </p>
        </div>

        <div className="space-y-3.5">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`border rounded-2xl transition-all duration-300 overflow-hidden bg-card ${
                  isOpen ? "border-primary/40 shadow-md" : "border-border/70 hover:border-border"
                } ${isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
                style={{ transitionDelay: `${index * 60}ms` }}
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full px-5 sm:px-6 py-4.5 sm:py-5 flex items-center justify-between gap-4 text-left font-semibold text-foreground hover:text-primary transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 animate-fade-up">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer note in FAQ */}
        <div className="text-center mt-10">
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            Have more questions? Visit our{" "}
            <a href="/support" className="text-primary font-semibold hover:underline">
              Support Center
            </a>{" "}
            or write to <span className="text-primary font-semibold">support@hello02.app</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

