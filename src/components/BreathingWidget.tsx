import { useState, useEffect } from "react";
import { Play, Pause, RotateCcw, Wind, Sparkles } from "lucide-react";
import { useInView } from "@/hooks/useInView";

type Phase = "Inhale" | "Hold" | "Exhale" | "Rest";

export const BreathingWidget = () => {
  const [ref, isInView] = useInView({ threshold: 0.2 });
  const [isActive, setIsActive] = useState(false);
  const [phase, setPhase] = useState<Phase>("Inhale");
  const [secondsLeft, setSecondsLeft] = useState(4);
  const [completedCycles, setCompletedCycles] = useState(0);

  const phaseDuration = 4; // 4 seconds per phase (Box Breathing)

  useEffect(() => {
    if (!isActive) return;

    const timer = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev > 1) {
          return prev - 1;
        }

        // Switch to next phase
        setPhase((currPhase) => {
          if (currPhase === "Inhale") return "Hold";
          if (currPhase === "Hold") return "Exhale";
          if (currPhase === "Exhale") return "Rest";
          if (currPhase === "Rest") {
            setCompletedCycles((c) => c + 1);
            return "Inhale";
          }
          return "Inhale";
        });

        return phaseDuration;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isActive]);

  const handleReset = () => {
    setIsActive(false);
    setPhase("Inhale");
    setSecondsLeft(phaseDuration);
    setCompletedCycles(0);
  };

  // Dynamic styles based on phase
  const getCircleScale = () => {
    if (!isActive) return "scale-100";
    if (phase === "Inhale") return "scale-125";
    if (phase === "Hold") return "scale-125";
    if (phase === "Exhale") return "scale-90";
    return "scale-90";
  };

  const getPhaseColor = () => {
    switch (phase) {
      case "Inhale":
        return "text-indigo-600 dark:text-indigo-400";
      case "Hold":
        return "text-purple-600 dark:text-purple-400";
      case "Exhale":
        return "text-emerald-600 dark:text-emerald-400";
      case "Rest":
        return "text-sky-600 dark:text-sky-400";
    }
  };

  return (
    <section ref={ref} className="py-16 md:py-24 relative overflow-hidden">
      {/* Background ambient subtle glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -z-10 animate-blob" />

      <div className="container mx-auto px-6">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* Header pill */}
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-3.5 py-1.5 rounded-full text-xs font-semibold mb-4 border border-primary/20">
            <Wind className="w-3.5 h-3.5 animate-pulse" />
            <span>Interactive Mindfulness Preview</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-3">
            Pause. Take a Calm Breath with <span className="text-gradient">Hello-02</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-lg mx-auto">
            Experience our 4-4-4 guided box breathing right here. Even 60 seconds can help reduce cortisol and center your mind.
          </p>

          {/* Interactive Breathing Sphere */}
          <div className="relative flex flex-col items-center justify-center my-6">
            {/* Outer animated ripple rings */}
            <div
              className={`absolute w-60 h-60 sm:w-72 sm:h-72 rounded-full border border-primary/20 transition-all duration-1000 ${
                isActive ? "animate-ping opacity-25" : "opacity-0"
              }`}
            />
            <div
              className={`absolute w-52 h-52 sm:w-64 sm:h-64 rounded-full bg-primary/5 transition-all duration-1000 ${
                isActive ? "animate-breathing-ring" : ""
              }`}
            />

            {/* Main Interactive Circle */}
            <div
              style={{ transitionDuration: "4000ms" }}
              className={`w-44 h-44 sm:w-52 sm:h-52 rounded-full bg-gradient-to-tr from-primary/15 via-primary/5 to-indigo-500/20 border-2 border-primary/30 flex flex-col items-center justify-center shadow-xl transition-all ease-in-out ${getCircleScale()} ${
                isActive ? "shadow-primary/20 shadow-2xl" : ""
              }`}
            >
              <span className={`text-xl sm:text-2xl font-bold tracking-wide transition-colors ${getPhaseColor()}`}>
                {isActive ? phase : "Ready?"}
              </span>
              <span className="text-3xl sm:text-4xl font-extrabold text-foreground mt-1 tabular-nums">
                {isActive ? secondsLeft : "4s"}
              </span>
              <span className="text-[11px] text-muted-foreground mt-1 font-medium">
                {isActive ? (phase === "Inhale" ? "Fill your lungs" : phase === "Hold" ? "Gentle pause" : phase === "Exhale" ? "Release slowly" : "Stay relaxed") : "Press start to begin"}
              </span>
            </div>

            {/* Controls */}
            <div className="flex items-center gap-3 mt-8">
              <button
                onClick={() => setIsActive(!isActive)}
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-2.5 rounded-full font-semibold text-sm hover:opacity-90 transition-all shadow-md active:scale-95 shimmer-effect"
              >
                {isActive ? (
                  <>
                    <Pause className="w-4 h-4" /> Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4 fill-current" /> Start Breathing
                  </>
                )}
              </button>

              {completedCycles > 0 && (
                <button
                  onClick={handleReset}
                  className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground transition-all"
                  title="Reset exercise"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              )}
            </div>

            {completedCycles > 0 && (
              <p className="text-xs text-muted-foreground mt-3 flex items-center gap-1.5 font-medium animate-fade-up">
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                Completed {completedCycles} {completedCycles === 1 ? "mindful cycle" : "mindful cycles"} — Great job!
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreathingWidget;
