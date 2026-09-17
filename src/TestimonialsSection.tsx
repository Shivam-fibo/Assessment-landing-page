interface HeadlineStat {
  value: string;
  label: string;
}

const HEADLINE_STATS: HeadlineStat[] = [
  { value: "10K+", label: "Educators" },
  { value: "4.9", label: "Based on 1,800+ reviews" },
];

export default function TestimonialsSection(): React.ReactNode {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <h2 className="max-w-sm text-3xl font-bold leading-tight text-[#2B1330] sm:text-4xl">
            Hear it straight from our satisfied users!
          </h2>
          <div className="flex gap-10">
            {HEADLINE_STATS.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#2B1330]">
                  {stat.value}
                </p>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 rounded-3xl bg-[#FBE4ED] p-8 sm:p-10">
          <p className="max-w-2xl text-lg leading-relaxed text-[#2B1330] sm:text-xl">
            &ldquo;Assessment turned exam week from our most stressful stretch
            into one of the easiest. Grading that used to take days now happens
            automatically, and the class analytics help us catch struggling
            students much earlier.&rdquo;
          </p>
          <div className="mt-6 flex items-center gap-3">
            <img
              src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=100&q=80"
              alt="Jordan Lee, Head of Curriculum at Riverside High"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <p className="text-sm font-semibold text-[#2B1330]">Jordan Lee</p>
              <p className="text-sm text-[#5B3654]">
                Head of Curriculum · Riverside High
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
