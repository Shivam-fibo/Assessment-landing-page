interface NotificationBubble {
  id: string;
  message: string;
  timestamp: string;
  tone: "neutral" | "warning";
}

const EXAM_NOTIFICATIONS: NotificationBubble[] = [
  {
    id: "started",
    message: "Exam started · Class 10B",
    timestamp: "Just now",
    tone: "neutral",
  },
  {
    id: "flagged",
    message: "3 students flagged for tab switching",
    timestamp: "2 min ago",
    tone: "warning",
  },
];

export default function LiveMonitoringSection(): React.ReactNode {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:items-center lg:gap-16 lg:px-10">
        {/* Left: copy */}
        <div>
          <p className="text-sm font-medium text-[#5B3654]">Stay in Control</p>
          <h2 className="mt-2 text-3xl font-bold leading-tight text-[#2B1330] sm:text-4xl">
            Watch Every Exam
            <br />
            in Real Time
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-gray-500">
            See exams progress live, get instant alerts on flagged activity, and
            step in the moment something needs your attention no refreshing
            required.
          </p>
          <a
            href="/get-started"
            className="mt-7 inline-block rounded-full bg-[#F5BC0F] px-7 py-3 text-sm font-semibold text-[#2B1330] transition-transform hover:scale-105"
          >
            Get Started
          </a>
        </div>

        {/* Right: image with floating notification bubbles */}
        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=800&q=80"
              alt="Teacher monitoring a live exam session on a laptop"
              className="h-[420px] w-full object-cover"
            />
          </div>

          <div className="absolute bottom-6 left-1/2 w-[85%] -translate-x-1/2 space-y-3">
            {EXAM_NOTIFICATIONS.map((notification) => (
              <div
                key={notification.id}
                className="flex items-center justify-between rounded-2xl bg-white px-4 py-3 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      notification.tone === "warning"
                        ? "bg-amber-500"
                        : "bg-green-500"
                    }`}
                  />
                  <span className="text-sm font-medium text-[#2B1330]">
                    {notification.message}
                  </span>
                </div>
                <span className="text-xs text-gray-400">
                  {notification.timestamp}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
