"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import StepNavigation from "./StepNavigation";
import ProductFrame from "./ProductFrame";
import ExamSetupVisual from "./ExamSetupVisual";
import SecureLoginVisual from "./SecureLoginVisual";
import LiveExamVisual from "./LiveExamVisual";
import ResultsVisual from "./ResultsVisual";

export const STEPS = [
  {
    number: "01",
    title: "Set up the exam",
    body: "Build question banks, set marks and pass criteria, and configure a countdown timer. Shuffle questions and options so no two students see the same order.",
  },
  {
    number: "02",
    title: "Students sign in securely",
    body: "Students log in with their Student ID. If someone tries a second device, the first session is signed out automatically, so accounts can't be shared.",
  },
  {
    number: "03",
    title: "The exam runs itself",
    body: "Tab switches, exits from full-screen, and copy-paste attempts are tracked while the exam is live. Answers save instantly, and the paper auto-submits when time runs out.",
  },
  {
    number: "04",
    title: "Results, graded instantly",
    body: "Every submission is checked against the answer key in under a second. Admins get pass rates and cheating flags by section; students get their score and a subject-by-subject breakdown.",
  },
] as const;

export default function HowItWorks(): React.ReactElement {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    let ticking = false;

    function updateScrollProgress() {
      const container = containerRef.current;
      if (!container) return;

      const { top, height } = container.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      const scrollableRange = height - viewportHeight;

      if (scrollableRange <= 0) return;

      const scrolledIntoContainer = Math.min(Math.max(-top, 0), scrollableRange);
      const progress = scrolledIntoContainer / scrollableRange;

      const newIndex = Math.min(
        STEPS.length - 1,
        Math.floor(progress * STEPS.length)
      );

      setActiveIndex(Math.max(0, newIndex));
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(updateScrollProgress);
        ticking = true;
      }
    }

    updateScrollProgress();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", updateScrollProgress);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  const handleStepClick = (index: number) => {
    setActiveIndex(index);
    const container = containerRef.current;
    if (!container) return;

    const { top, height } = container.getBoundingClientRect();
    const scrollableRange = height - window.innerHeight;
    if (scrollableRange <= 0) return;

    const targetProgress = (index + 0.5) / STEPS.length;
    const targetScrollY = window.scrollY + top + targetProgress * scrollableRange;

    window.scrollTo({
      top: targetScrollY,
      behavior: shouldReduceMotion ? "auto" : "smooth",
    });
  };

  const renderVisual = () => {
    switch (activeIndex) {
      case 0:
        return <ExamSetupVisual key="step-0" />;
      case 1:
        return <SecureLoginVisual key="step-1" />;
      case 2:
        return <LiveExamVisual key="step-2" />;
      case 3:
        return <ResultsVisual key="step-3" />;
      default:
        return <ExamSetupVisual key="step-0" />;
    }
  };

  return (
    <section
      ref={containerRef}
      style={{ height: `${STEPS.length * 100}vh` }}
      className="relative bg-white text-slate-900"
    >
      {/* Background Subtle Mesh Grid & Radial Glow */}
      
      {/* Sticky Viewport Container */}
      <div className="sticky top-0 flex h-screen w-full flex-col justify-center overflow-hidden">
        {/* Soft background ambient radial gradient */}
       

        <div className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-16">
            
            {/* Left Column: Editorial & Step Navigation (42% width) */}
            <div className="flex flex-col justify-center lg:col-span-5">
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2">
               
              </div>

              {/* Headline */}
              <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl leading-[1.15]">
                From exam creation to instant results.
              </h2>

              <p className="mt-3 text-sm text-slate-600 sm:text-base">
                Everything required for secure, seamless digital assessments in four automated steps.
              </p>

              {/* Step Navigation Component */}
              <div className="mt-8">
                <StepNavigation
                  steps={STEPS}
                  activeIndex={activeIndex}
                  onStepClick={handleStepClick}
                />
              </div>
            </div>

            {/* Right Column: Product Showcase UI Mockups (58% width) */}
            <div className="flex items-center justify-center lg:col-span-7">
              <ProductFrame activeStep={activeIndex}>
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: 15, scale: 0.97 }
                    }
                    animate={
                      shouldReduceMotion
                        ? { opacity: 1 }
                        : { opacity: 1, y: 0, scale: 1 }
                    }
                    exit={
                      shouldReduceMotion
                        ? { opacity: 0 }
                        : { opacity: 0, y: -15, scale: 0.97 }
                    }
                    transition={{
                      duration: 0.4,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full"
                  >
                    {renderVisual()}
                  </motion.div>
                </AnimatePresence>
              </ProductFrame>
            </div>

          </div>
        </div>


      </div>
    </section>
  );
}
