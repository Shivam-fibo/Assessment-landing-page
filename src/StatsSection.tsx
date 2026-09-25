"use client";

import { useRef } from "react";
import Image from "next/image";

import { cn } from "@/lib/utils";
import StackingCards, { StackingCardItem } from "./components/ui/StackingCardItem";

interface PlatformCard {
  title: string;
  titleColor: string;
  description: string;
  bgColor: string;
  borderColor: string;
  image: string;
}

const cards: PlatformCard[] = [
  {
    title: "Instant Grading & Paperless Exams",
    titleColor: "text-emerald-950",
    description:
      "Eliminate manual paper grading forever. Assessment evaluates quizzes, midterms, and standardized tests in milliseconds, providing automated score calculations and immediate feedback.",
    bgColor: "bg-white bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100",
    borderColor: "border-emerald-200",
    image:
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "AI Anti-Cheating & Active Protection",
    titleColor: "text-purple-950",
    description:
      "Ensure strict academic integrity across every exam session. Automated tab-switch detection, browser locking, and single-device session enforcement prevent dishonesty effortlessly.",
    bgColor: "bg-white bg-gradient-to-br from-purple-50 via-fuchsia-50 to-pink-100",
    borderColor: "border-purple-200",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Deep Student & Subject Analytics",
    titleColor: "text-sky-950",
    description:
      "Transform exam results into actionable learning insights. Track subject mastery, analyze question difficulty curves, and spot struggling students early with clear visual dashboards.",
    bgColor: "bg-white bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-100",
    borderColor: "border-sky-200",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1000&q=80",
  },
  {
    title: "Classroom & Institution Management",
    titleColor: "text-amber-950",
    description:
      "Organize question banks by subject, schedule recurring quizzes, and manage permissions across classes or entire school districts with powerful centralized administration.",
    bgColor: "bg-white bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-100",
    borderColor: "border-amber-200",
    image:
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=1000&q=80",
  },
];

export default function StatsSection() {
  const container = useRef<HTMLDivElement>(null);

  return (
    <section
      ref={container}
      style={{ height: `${cards.length * 75 + 20}vh` }}
      className="bg-slate-50 py-12 relative w-full"
    >
      <div className="sticky top-0 pt-20 pb-6 w-full flex flex-col justify-start">
        {/* Top Left Section Header */}
        <div className="w-11/12 max-w-6xl mx-auto mb-6 text-left relative z-20">
          <h2 className="text-2xl sm:text-4xl font-bold text-[#2B1330] tracking-tight">
            Designed for Educators, Built for Scale
          </h2>
        </div>

        <StackingCards
          totalCards={cards.length}
          scrollOptions={{ target: container }}
        >
          {cards.map(
            ({ title, titleColor, description, bgColor, borderColor, image }, index) => {
              return (
                <StackingCardItem
                  key={index}
                  index={index}
                  topPosition={`${100 + index * 14}px`}
                  className="h-[520px]"
                >
                  <div
                    className={cn(
                      bgColor,
                      borderColor,
                      "bg-white border shadow-2xl h-[440px] flex-col md:flex-row flex w-11/12 max-w-6xl rounded-3xl mx-auto relative overflow-hidden z-10 opacity-100 items-stretch"
                    )}
                  >
                    {/* Left text column - Only Title and Description */}
                    <div className="flex-1 flex flex-col justify-center p-6 sm:p-8 md:p-12 z-10">
                      <h3
                        className={cn(
                          "font-bold text-2xl sm:text-3xl lg:text-4xl mb-4 tracking-tight leading-tight",
                          titleColor
                        )}
                      >
                        {title}
                      </h3>
                      <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed font-normal">
                        {description}
                      </p>
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
        </StackingCards>
      </div>
    </section>
  );
}



