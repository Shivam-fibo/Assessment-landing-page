"use client";

import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import StackingCards, { StackingCardItem } from "./components/ui/StackingCardItem";

interface PlatformCard {
  badge: string;
  badgeStyle: string;
  stat: string;
  statBg: string;
  title: string;
  titleColor: string;
  description: string;
  bgColor: string;
  borderColor: string;
  accentColor: string;
  highlightStyle: string;
  image: string;
  highlights: string[];
}

const cards: PlatformCard[] = [
  {
    badge: "AUTOMATED EVALUATION",
    badgeStyle: "bg-emerald-100 text-emerald-800 border-emerald-200",
    stat: "99.4% Time Saved",
    statBg: "bg-emerald-600 text-white shadow-sm",
    title: "Instant Grading & Paperless Exams",
    titleColor: "text-emerald-950",
    description:
      "Eliminate manual paper grading forever. Assessment evaluates quizzes, midterms, and standardized tests in milliseconds, providing automated score calculations and immediate feedback.",
    bgColor: "bg-white bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100",
    borderColor: "border-emerald-200",
    accentColor: "text-emerald-600",
    highlightStyle: "bg-white text-emerald-900 border-emerald-200 shadow-sm",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Instant auto-grading", "Item-wise error breakdown", "CSV & PDF grade exports"],
  },
  {
    badge: "EXAM INTEGRITY",
    badgeStyle: "bg-purple-100 text-purple-800 border-purple-200",
    stat: "100% Proctored",
    statBg: "bg-purple-600 text-white shadow-sm",
    title: "AI Anti-Cheating & Active Protection",
    titleColor: "text-purple-950",
    description:
      "Ensure strict academic integrity across every exam session. Automated tab-switch detection, browser locking, and single-device session enforcement prevent dishonesty effortlessly.",
    bgColor: "bg-white bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-100",
    borderColor: "border-purple-200",
    accentColor: "text-purple-600",
    highlightStyle: "bg-white text-purple-900 border-purple-200 shadow-sm",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Tab-switch detection", "Single active device lock", "Real-time anomaly flags"],
  },
  {
    badge: "ACTIONABLE ANALYTICS",
    badgeStyle: "bg-sky-100 text-sky-800 border-sky-200",
    stat: "360° Insights",
    statBg: "bg-sky-600 text-white shadow-sm",
    title: "Deep Student & Subject Analytics",
    titleColor: "text-sky-950",
    description:
      "Transform exam results into actionable learning insights. Track subject mastery, analyze question difficulty curves, and spot struggling students early with clear visual dashboards.",
    bgColor: "bg-white bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100",
    borderColor: "border-sky-200",
    accentColor: "text-sky-600",
    highlightStyle: "bg-white text-sky-900 border-sky-200 shadow-sm",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Subject mastery distribution", "Question difficulty curves", "Automated student reports"],
  },
  {
    badge: "ENTERPRISE SCALABILITY",
    badgeStyle: "bg-amber-100 text-amber-900 border-amber-200",
    stat: "500K+ Students",
    statBg: "bg-amber-500 text-white shadow-sm",
    title: "Classroom & Institution Management",
    titleColor: "text-amber-950",
    description:
      "Organize question banks by subject, schedule recurring quizzes, and manage permissions across classes or entire school districts with powerful centralized administration.",
    bgColor: "bg-white bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",
    borderColor: "border-amber-200",
    accentColor: "text-amber-600",
    highlightStyle: "bg-white text-amber-900 border-amber-200 shadow-sm",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
    highlights: ["Centralized question library", "Multi-class management", "Role-based access control"],
  },
];

export default function StatsSection() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section className="bg-slate-50 py-12">
      <div
        className="h-[680px] bg-slate-50 overflow-auto text-slate-900 scrollbar-thin scrollbar-thumb-slate-300"
        ref={container}
      >
        <StackingCards
          totalCards={cards.length}
          scrollOptions={{ container: container }}
        >
          {/* Section Header inside scroll container */}
          <div className="relative py-8 w-full z-10 flex flex-col justify-center items-center text-center px-4">
          
            <h2 className="text-2xl sm:text-4xl font-bold text-[#2B1330] tracking-tight">
              Designed for Educators, Built for Scale
            </h2>
         
          </div>

          {cards.map(
            (
              {
                badge,
                badgeStyle,
                stat,
                statBg,
                title,
                titleColor,
                description,
                bgColor,
                borderColor,
                accentColor,
                highlightStyle,
                image,
                highlights,
              },
              index
            ) => {
              return (
                <StackingCardItem key={index} index={index} className="h-[620px]">
                  <div
                    className={cn(
                      bgColor,
                      borderColor,
                      "bg-white border shadow-2xl h-[85%] sm:h-[75%] flex-col md:flex-row flex w-11/12 max-w-6xl rounded-t-3xl rounded-b-xl mx-auto relative overflow-hidden z-10 opacity-100 items-stretch"
                    )}
                  >
                    {/* Left text column */}
                    <div className="flex-1 flex flex-col justify-between p-6 sm:p-8 md:p-10 z-10">
                      <div>
                        {/* Header Badges */}
                        {badge && (
                          <div className="flex flex-wrap items-center gap-3 mb-4">
                            <span
                              className={cn(
                                "text-[10px] sm:text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border",
                                badgeStyle
                              )}
                            >
                              {badge}
                            </span>
                            {stat && (
                              <span
                                className={cn(
                                  "text-[10px] sm:text-xs font-semibold px-3 py-1 rounded-full",
                                  statBg
                                )}
                              >
                                {stat}
                              </span>
                            )}
                          </div>
                        )}

                        {/* Title */}
                        <h3 className={cn("font-bold text-xl sm:text-3xl mb-3 tracking-tight", titleColor)}>
                          {title}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-600 text-xs sm:text-base leading-relaxed mb-6 font-normal">
                          {description}
                        </p>
                      </div>

                      {/* Feature Bullet Points */}
                      {highlights && highlights.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-3 border-t border-slate-900/10 mt-auto">
                          {highlights.map((item, idx) => (
                            <div
                              key={idx}
                              className={cn(
                                "flex items-center gap-1.5 text-xs sm:text-sm font-medium px-3 py-1.5 rounded-lg border",
                                highlightStyle
                              )}
                            >
                              <svg
                                className={cn("w-4 h-4 shrink-0", accentColor)}
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2.5"
                                  d="M5 13l4 4L19 7"
                                />
                              </svg>
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Right Image Column - Full Height */}
                    <div className="w-full md:w-1/2 h-52 sm:h-64 md:h-full relative overflow-hidden shrink-0 self-stretch">
                      <Image
                        src={image}
                        alt={title}
                        className="object-cover transition-transform duration-500 hover:scale-105"
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </StackingCardItem>
              );
            }
          )}

          {/* Bottom Watermark / Branding Footer */}
          <div className="w-full h-48 relative overflow-hidden flex items-end justify-center">
            <h2 className="text-[64px] sm:text-[120px] font-black tracking-widest text-[#2B1330]/10 uppercase select-none pointer-events-none translate-y-6">
              ASSESSMENT
            </h2>
          </div>
        </StackingCards>
      </div>
    </section>
  );
}



