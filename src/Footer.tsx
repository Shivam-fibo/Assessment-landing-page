interface FooterLinkColumn {
  heading: string;
  links: string[];
}

const FOOTER_COLUMNS: FooterLinkColumn[] = [
  {
    heading: "Product",
    links: ["Overview", "Features", "Security", "Pricing"],
  },
  {
    heading: "For Schools",
    links: ["Institutions", "Districts", "Partner Program"],
  },
  {
    heading: "For Educators",
    links: ["Teacher Guide", "Grading Tools", "Analytics"],
  },
  {
    heading: "Company",
    links: ["About", "Blog", "Careers", "Contact"],
  },
];

const SOCIAL_LINKS = ["Facebook", "Twitter", "LinkedIn"];

export default function Footer(): React.ReactNode {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#452140] pb-8 pt-16 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <p className="text-xl font-bold">Assessment</p>
            <p className="mt-3 max-w-xs text-sm text-white/60">
              Assessment helps schools organize exams, grade automatically, and
              keep every student&apos;s progress in one place without the chaos.
            </p>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.heading}>
              <p className="text-sm font-semibold text-white">
                {column.heading}
              </p>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-white"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-sm text-white/50">
            © {currentYear} Assessment. All rights reserved.
          </p>
          <div className="flex gap-6">
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social}
                href="#"
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
