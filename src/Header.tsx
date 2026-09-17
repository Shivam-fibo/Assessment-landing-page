"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/src/components/ui/resizable-navbar";
import { NoiseBackground } from "./components/ui/noise-background";

const navItems = [
  { name: "Features", link: "#features" },
  { name: "Community", link: "#community" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "FAQ", link: "#faq" },
];

export default function Header(): React.ReactNode {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  return (
    <Navbar>
      {/* Desktop Navbar - Resizes & animates on scroll */}
      <NavBody>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group relative z-20">
          <span className="text-xl font-extrabold tracking-tight text-white group-hover:text-orange-400 transition-colors">
            Assessment
          </span>
        </Link>

        {/* Hover-animated Nav Links */}
        <NavItems items={navItems} />

        {/* CTA Button */}
        <div className="relative z-20 flex items-center gap-3">
          <NoiseBackground
            containerClassName="!rounded-full !bg-transparent !p-1 !shadow-none"
            gradientColors={["rgb(249, 115, 22)", "rgb(251, 146, 60)", "rgb(234, 88, 12)"]}
          >
            <Link
              href="/get-started"
              className="rounded-full bg-orange-500 px-5 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-orange-600 hover:scale-105 active:scale-95 block"
            >
              Get Started
            </Link>
          </NoiseBackground>
        </div>
      </NavBody>

      {/* Mobile Navbar - Animated for smaller screens */}
      <MobileNav>
        <MobileNavHeader>
          <Link href="/" className="flex items-center gap-2">
            <span className="text-lg font-bold text-white">Assessment</span>
          </Link>
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              className="text-base font-medium text-white/90 hover:text-orange-400 transition-colors py-1 w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <Link
            href="/get-started"
            className="mt-2 w-full rounded-full bg-orange-500 py-2.5 text-center text-sm font-semibold text-white shadow-md transition-transform active:scale-95"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started
          </Link>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}

