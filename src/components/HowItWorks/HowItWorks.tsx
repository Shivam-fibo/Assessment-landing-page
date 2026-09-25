"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
  useReducedMotion,
} from "motion/react";
import StepHeader from "./StepHeader";
import StepLeftContent from "./StepLeftContent";
import StepFeatureCard from "./StepFeatureCard";
import { StepItem } from "./types";

export const STEPS = [
  {
    number: "01",
    tag: "CREATE",
    title: "Create the assessment",
    description:
      "Build question banks, configure marks and pass criteria, set the exam duration, and control how questions and options are presented.",
    image: "/images/how_it_works/image1.png",
  },
  {
    number: "02",
    tag: "SECURITY",
    title: "Students enter securely",
    description:
      "Students sign in using their Student ID and the platform manages active sessions to prevent account sharing across devices.",
    image: "/images/how_it_works/image2.png",
  },
  {
    number: "03",
    tag: "EXECUTE",
    title: "Run the exam",
    description:
      "The assessment runs with automatic saving, countdown timing, fullscreen monitoring, and tracking of important exam activity.",
    image: "/images/how_it_works/image3.png",
  },
  {
    number: "04",
    tag: "ANALYTICS",
    title: "Get instant results",
    description:
      "Submissions are evaluated automatically, giving administrators performance insights while students receive their scores and detailed subject-wise results.",
    image: "/images/how_it_works/image4.png",
  },
] as const;

export default function HowItWorks(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const shouldReduceMotion = useReducedMotion();
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  // Calculate current active step based on scroll progress (0.0 - 1.0)
  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const rawStep = Math.floor(latest * STEPS.length);
    const clampedStep = Math.min(STEPS.length - 1, Math.max(0, rawStep));
    setActiveStepIndex(clampedStep);
  });

  const handleNextStep = () => {
    setActiveStepIndex((prev) => (prev + 1) % STEPS.length);
  };

  // Subtle background color transition between steps
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.25, 0.5, 0.75, 1],
    ["#FFFFFF", "#F8FAFC", "#F0F9FF", "#ECFDF5", "#F8FAFC"]
  );

  return (
    <section
      ref={containerRef}
      style={{ height: `${STEPS.length * 100}vh` }}
      className="relative w-full"
    >
      {/* Sticky Viewport Container */}
      <motion.div
        style={{ backgroundColor }}
        className="sticky top-0 flex min-h-screen h-screen w-full flex-col justify-center items-center overflow-hidden transition-colors duration-500"
      >
        {/* Subtle Decorative Canvas Lighting */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/40 via-transparent to-transparent pointer-events-none" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-8 sm:py-10 flex flex-col gap-6 lg:gap-8 justify-center">
          {/* Top-Left Header */}
          <StepHeader />

          {/* Two-Column Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 items-start justify-between gap-10 lg:gap-20">
            {/* Left Column (~5 cols): Benefit Statement (Top-Left aligned) */}
            <div className="lg:col-span-5 flex flex-col justify-start pt-1 sm:pt-2">
              <StepLeftContent />
            </div>

            {/* Right Column (~7 cols): Feature Card Stack */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <StepFeatureCard
                activeStepIndex={activeStepIndex}
                steps={STEPS as unknown as readonly StepItem[]}
                progress={scrollYProgress}
                onNextStep={handleNextStep}
                shouldReduceMotion={shouldReduceMotion}
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}