interface FeatureHighlight {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface SummaryRow {
  label: string;
  value: string;
}

const SUMMARY_ROWS: SummaryRow[] = [
  { label: "Exam type", value: "Midterm Quiz" },
  { label: "Class name", value: "Grade 10 - Physics" },
  { label: "Students attempted", value: "182" },
  { label: "Average score", value: "78%" },
];

const FEATURE_HIGHLIGHTS: FeatureHighlight[] = [
  {
    title: "Automated",
    description: "Every exam graded instantly",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z"
          stroke="#F5BC0F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    title: "Secure",
    description: "Built to prevent cheating",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M12 3 5 6v5c0 4.5 3 8 7 9 4-1 7-4.5 7-9V6l-7-3Z"
          stroke="#F5BC0F"
          strokeWidth="1.8"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function FeatureShowcase(): React.ReactNode {
  return (
    <section className="bg-[#132A28] py-20">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        {/* Left: summary card mockup */}
        <div className="rounded-3xl bg-[#FBE4ED] p-6 sm:p-8">
          <div className="rounded-2xl bg-white p-6 shadow-lg">
            {/* Browser-style dots */}
            <div className="mb-5 flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
              <span className="h-2.5 w-2.5 rounded-full bg-gray-200" />
            </div>

            <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
              Exam Snapshot
            </p>
            <h3 className="mt-1 text-lg font-bold text-[#2B1330]">
              Your Assessment Summary
            </h3>

            <div className="mt-5 divide-y divide-gray-100">
              {SUMMARY_ROWS.map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between py-3 text-sm"
                >
                  <span className="text-gray-500">{row.label}</span>
                  <span className="font-semibold text-[#2B1330]">
                    {row.value}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right: copy + highlights */}
        <div>
          <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl">
            Smarter Way to
            <br />
            Conduct Exams
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
            Stop spending hours grading by hand. Assessment grades, tracks, and
            reports automatically so you can focus on teaching, not paperwork.
          </p>

          <a
            href="/get-started"
            className="mt-7 inline-block rounded-full bg-[#F5BC0F] px-7 py-3 text-sm font-semibold text-[#2B1330] transition-transform hover:scale-105"
          >
            Get Started
          </a>

          <div className="mt-10 flex flex-wrap gap-8">
            {FEATURE_HIGHLIGHTS.map((feature) => (
              <div key={feature.title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15">
                  {feature.icon}
                </span>
                <div>
                  <p className="text-sm font-semibold text-white">
                    {feature.title}
                  </p>
                  <p className="text-sm text-white/50">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
