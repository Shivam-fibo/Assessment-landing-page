interface AvatarStackItem {
  imageUrl: string;
  alt: string;
}

const COMMUNITY_AVATARS: AvatarStackItem[] = [
  {
    imageUrl:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80",
    alt: "Teacher using Assessment",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=100&q=80",
    alt: "Teacher using Assessment",
  },
  {
    imageUrl:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=100&q=80",
    alt: "Teacher using Assessment",
  },
];

export default function CommunitySection(): React.ReactNode {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        {/* Left: image with floating class badge */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80"
              alt="Teacher reviewing exam results on a laptop"
              className="h-[380px] w-full object-cover"
            />
          </div>

          {/* Floating "live class" badge */}
          <div className="absolute -top-5 left-6 flex items-center gap-2 rounded-full bg-white px-4 py-2 shadow-lg">
            <span className="h-2 w-2 rounded-full bg-green-500" />
            <span className="text-sm font-medium text-[#2B1330]">
              Ms. Carter&apos;s Class · Live Now
            </span>
          </div>

          {/* Avatar stack + reach caption */}
          <div className="absolute -bottom-6 left-6 flex items-center gap-3 rounded-2xl bg-white px-4 py-3 shadow-lg">
            <div className="flex -space-x-3">
              {COMMUNITY_AVATARS.map((avatar) => (
                <img
                  key={avatar.imageUrl}
                  src={avatar.imageUrl}
                  alt={avatar.alt}
                  className="h-9 w-9 rounded-full border-2 border-white object-cover"
                />
              ))}
            </div>
            <p className="text-xs text-gray-500">
              Used by over
              <br />
              <span className="font-semibold text-[#2B1330]">
                500K+ students
              </span>{" "}
              worldwide
            </p>
          </div>
        </div>

        {/* Right: copy */}
        <div className="lg:pl-6">
          <p className="text-sm font-medium text-[#5B3654]">Build Community</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2B1330] sm:text-4xl">
            Everything You Need
            <br />
            to Stay Organized
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
            Group students by class or subject, assign quizzes to the right
            people, and keep every assessment past and upcoming in one organized
            workspace.
          </p>
          <a
            href="/get-started"
            className="mt-7 inline-block rounded-full bg-[#F5BC0F] px-7 py-3 text-sm font-semibold text-[#2B1330] transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
}
