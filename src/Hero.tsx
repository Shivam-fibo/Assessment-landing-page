import Header from "./Header";
import { PointerHighlight } from "./components/ui/pointer-highlight";
// Placeholder institution names for the trusted-by strip.
const TRUSTED_INSTITUTIONS: readonly string[] = [
  "Stanford Prep",
  "Oakridge International",
  "Delta University",
  "Green Valley High",
  "Bright Path Academy",
];

const HERO_STATS = [
  { value: "94%", label: "Reduced grading time" },
  { value: "50K+", label: "Exams conducted" },
  { value: "99.9%", label: "Uptime & security" },
];

export default function Hero(): React.ReactNode {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pt-2 pb-12 min-h-screen flex flex-col justify-start"
      style={{ backgroundImage: "url('/images/image6.png')" }}
    >
      <div className="relative z-10 flex flex-col">
        {/* Integrated Fixed Header */}
        <Header />

        {/* Centered Hero Content */}
        <div className="mx-auto max-w-4xl px-6 pt-24 pb-8 lg:pt-28 text-center flex flex-col items-center">
          {/* Headline */}
          <h1 className="text-3xl font-medium tracking-[-0.03em] text-slate-100 sm:text-4xl lg:text-5xl leading-[1.2] flex flex-col items-center text-center">
            <span>Turning Exams Into a Powerful</span>
            <PointerHighlight
       
              rectangleClassName="border border-orange-400 rounded-xl"
              pointerClassName="text-orange-400"
            >
              Learning Habit
            </PointerHighlight>
          </h1>

          {/* Description */}
          <p className="mt-4 max-w-2xl text-base sm:text-lg leading-relaxed text-slate-200 font-normal">
            Assessment helps teachers create secure quizzes, track performance,
            and simplify grading without the chaos. From classroom tests to
            institution-wide exams, keep everything on track.
          </p>
        </div>
      </div>
    </section>
  );
}
