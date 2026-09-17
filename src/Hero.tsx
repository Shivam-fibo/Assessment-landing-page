import Image from "next/image";
import Header from "./Header";

// Placeholder institution names for the trusted-by strip. Swap these for
// real logos/partners once you have them.
const TRUSTED_INSTITUTIONS: readonly string[] = [
  "Stanford Prep",
  "Oakridge International",
  "Delta University",
  "Green Valley High",
  "Bright Path Academy",
];

export default function Hero(): React.ReactNode {
  return (
    <section
      className="relative overflow-hidden bg-cover bg-center bg-no-repeat pb-16 pt-2 lg:pb-20"
      style={{ backgroundImage: "url('/images/background-image.jpg')" }}
    >
      {/* Background Overlay for text contrast & seamless aesthetic */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#2B1330]/75 via-[#2B1330]/55 to-[#2B1330]/85 backdrop-blur-[1px]" />

      <div className="relative z-10">
        {/* Header inside Hero so background covers both */}
        <Header />

        <div className="mx-auto grid max-w-7xl gap-14 px-6 pt-20 lg:grid-cols-2 lg:items-center lg:gap-10 lg:px-10 lg:pt-24">
          {/* Left column: copy */}
          <div>
            <p className="mb-4 flex items-center gap-2 text-sm text-white/70 font-medium">
              <span>Teach</span>
              <span className="text-white/40">›</span>
              <span>Assess</span>
              <span className="text-white/40">›</span>
              <span>Grow</span>
            </p>

            <h1 className="text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Turning
              <br />
              <span className="text-[#F5BC0F]">Exams</span>
              <br />
              Into a Powerful
              <br />
              Learning Habit
            </h1>

            <p className="mt-6 max-w-md text-base leading-relaxed text-white/80">
              Assessment helps teachers create secure quizzes, track performance,
              and simplify grading without the chaos. From classroom tests to
              institution-wide exams, Assessment keeps everything on track.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="/get-started"
                className="rounded-full bg-[#F5BC0F] px-7 py-3 text-sm font-semibold text-[#2B1330] shadow-lg transition-all hover:bg-[#ffca28] hover:scale-105 active:scale-95"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="rounded-full border border-white/40 px-7 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:bg-white/20 hover:border-white"
              >
                Contact us
              </a>
            </div>
          </div>

          {/* Right column: image with floating stat cards */}
          <div className="relative mx-auto w-full max-w-md pb-6 pt-6 lg:max-w-none">
            <div className="relative overflow-hidden rounded-[2rem] shadow-2xl border border-white/10">
              <Image
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                alt="Student taking a digital exam on a laptop"
                width={600}
                height={720}
                className="h-[420px] w-full object-cover sm:h-[520px]"
                priority
              />
            </div>

            {/* Stat card: top right */}
            <div className="absolute -top-2 right-2 w-56 rounded-2xl bg-white/95 p-5 shadow-2xl backdrop-blur-md sm:right-6 border border-white/20">
              <p className="text-3xl font-bold text-[#2B1330]">94%</p>
              <p className="mt-1 text-sm text-gray-600">
                Teachers report reduced grading time within the first month of
                using Assessment.
              </p>
            </div>

            {/* Stat card: bottom left */}
            <div className="absolute -bottom-2 left-2 w-52 rounded-2xl bg-[#FBDCE7]/95 p-5 shadow-2xl backdrop-blur-md sm:left-6 border border-white/20">
              <p className="text-3xl font-bold text-[#2B1330]">50K+</p>
              <p className="mt-1 text-sm text-[#5B3654]">
                Exams securely conducted and graded on Assessment.
              </p>
            </div>
          </div>
        </div>

        {/* Trusted-by strip */}
        <div className="mx-auto mt-16 max-w-7xl px-6 lg:mt-20 lg:px-10">
          <div className="flex flex-wrap items-center justify-between gap-x-8 gap-y-4 border-t border-white/15 pt-10">
            {TRUSTED_INSTITUTIONS.map((name) => (
              <span
                key={name}
                className="text-sm font-semibold tracking-wide text-white/60 sm:text-base hover:text-white transition-colors"
              >
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
