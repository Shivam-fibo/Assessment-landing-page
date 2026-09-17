interface YearlyStat {
  year: string;
  value: string;
  // Tailwind height class for the bar kept explicit per row instead of
  // computed, since the chart only has 4 known data points.
  heightClass: string;
  isCurrent?: boolean;
}

const EXAM_GROWTH: YearlyStat[] = [
  { year: "2022", value: "1.2M", heightClass: "h-24" },
  { year: "2023", value: "3.8M", heightClass: "h-40" },
  { year: "2024", value: "7.4M", heightClass: "h-56" },
  { year: "2025", value: "12.6M", heightClass: "h-72", isCurrent: true },
];

export default function StatsSection(): React.ReactNode {
  return (
    <section className="bg-[#FBE4ED] py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          {/* Left: heading */}
          <div>
            <h2 className="text-3xl font-bold leading-tight text-[#2B1330] sm:text-4xl">
              Powering Classrooms
              <br />
              Across the Globe
            </h2>
            <p className="mt-4 max-w-sm text-base text-[#5B3654]">
              From single classrooms to entire school districts, Assessment
              helps educators run exams that scale without extra effort.
            </p>
          </div>

          {/* Right: headline stat */}
          <div className="lg:justify-self-end">
            <p className="text-sm font-medium text-[#5B3654]">
              Exams conducted annually
            </p>
            <p className="mt-2 text-6xl font-bold text-[#2B1330] sm:text-7xl">
              12.6M+
            </p>
          </div>
        </div>

        {/* Ascending bar chart */}
        <div className="mt-16 grid grid-cols-4 items-end gap-4 sm:gap-8">
          {EXAM_GROWTH.map((stat) => (
            <div key={stat.year} className="flex flex-col items-start">
              <span className="mb-3 text-sm font-semibold text-[#2B1330] sm:text-base">
                {stat.value}
              </span>
              <div
                className={`w-full rounded-t-2xl ${stat.heightClass} ${
                  stat.isCurrent ? "bg-[#F5BC0F]" : "bg-[#F6C9DA]"
                }`}
              />
              <span className="mt-3 text-sm text-[#5B3654]">{stat.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
