interface IntegrationTool {
  name: string;
  accentColor: string;
}

// Generic rounded-square icon with the tool's brand accent color and initial.
// Using text + color instead of reproducing actual logos.
const INTEGRATION_TOOLS: IntegrationTool[] = [
  { name: "Google Classroom", accentColor: "#1A73E8" },
  { name: "Zoom", accentColor: "#2D8CFF" },
  { name: "Microsoft Teams", accentColor: "#5059C9" },
  { name: "Slack", accentColor: "#E01E5A" },
  { name: "Canvas LMS", accentColor: "#E13F2A" },
  { name: "Moodle", accentColor: "#F98012" },
  { name: "Google Drive", accentColor: "#34A853" },
  { name: "Gmail", accentColor: "#EA4335" },
];

export default function IntegrationsSection(): React.ReactNode {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto max-w-5xl px-6 text-center lg:px-10">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#5B3654]">
          Integrations
        </p>
        <h2 className="mt-3 text-3xl font-bold leading-tight text-[#2B1330] sm:text-4xl">
          Works With the Tools
          <br />
          You Already Use
        </h2>
        <p className="mx-auto mt-4 max-w-md text-base text-gray-500">
          Connect Assessment with your school&apos;s LMS, video conferencing,
          and communication tools in just a few clicks.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {INTEGRATION_TOOLS.map((tool) => (
            <div
              key={tool.name}
              className="flex items-center gap-3 rounded-2xl border border-gray-100 px-4 py-4 text-left shadow-sm"
            >
              <span
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: tool.accentColor }}
                aria-hidden="true"
              >
                {tool.name.charAt(0)}
              </span>
              <span className="text-sm font-medium text-[#2B1330]">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
