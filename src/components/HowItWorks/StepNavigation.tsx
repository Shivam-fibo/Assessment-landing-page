"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";

export interface StepItem {
  number: string;
  title: string;
  body: string;
}

interface StepNavigationProps {
  steps: readonly StepItem[];
  activeIndex: number;
  direction?: number;
  onStepClick: (index: number) => void;
}

export default function StepNavigation({
  steps,
  activeIndex,
  direction = 1,
  onStepClick,
}: StepNavigationProps): React.ReactElement {
  const currentStep = steps[activeIndex] || steps[0];

  const slideUpVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 35 : -35,
      opacity: 0,
      filter: "blur(4px)",
    }),
    center: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -35 : 35,
      opacity: 0,
      filter: "blur(4px)",
    }),
  };

  return (
    <div className="flex flex-col gap-6">
      {/* Step Counter Indicator Header */}

      {/* Single Active Step - Vertical Text Slider */}
      <div className="relative min-h-[160px] overflow-hidden">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeIndex}
            custom={direction}
            variants={slideUpVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              duration: 0.4,
              ease: [0.25, 1, 0.5, 1],
            }}
            className="flex flex-col gap-3"
          >
            {/* Step Badge & Title */}
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-orange-500 text-xs font-bold text-white shadow-sm shadow-orange-500/30">
                {currentStep.number}
              </span>
              <h3 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                {currentStep.title}
              </h3>
            </div>

            {/* Step Body Description */}
            <p className="max-w-md text-base leading-relaxed text-slate-600 pt-1">
              {currentStep.body}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

    
    </div>
  );
}
