"use client";

import React from "react";
import { motion, AnimatePresence, MotionValue } from "motion/react";
import StepVisualCanvas from "./StepVisualCanvas";
import { StepItem } from "./types";

interface StepStoryProps {
  activeStepIndex: number;
  steps: readonly StepItem[];
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

export default function StepStory({
  activeStepIndex,
  steps,
  progress,
  shouldReduceMotion,
}: StepStoryProps): React.ReactElement {
  const activeStep = steps[activeStepIndex];

  return (
    <div className="flex flex-col gap-6 w-full">
      {/* Visual Canvas Stage */}
      <StepVisualCanvas
        activeStep={activeStepIndex}
        progress={progress}
        shouldReduceMotion={shouldReduceMotion}
      />

      {/* Active Step Story Details: Title + Description */}
      <div className="relative min-h-[110px] sm:min-h-[120px] bg-slate-50/80 p-5 sm:p-6 rounded-2xl border border-slate-200/70">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={
              shouldReduceMotion
                ? { opacity: 1 }
                : { opacity: 0, y: 10 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion
                ? { opacity: 0 }
                : { opacity: 0, y: -10 }
            }
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-2"
          >
            <div className="flex items-center gap-2">
              <span className="text-xs font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-indigo-100 text-indigo-800">
                {activeStep.tag}
              </span>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">
                {activeStep.title}
              </h3>
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-slate-600 font-normal">
              {activeStep.description}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
