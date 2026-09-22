"use client";

import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconChevronRight } from "@tabler/icons-react";
import { StepItem } from "./types";

interface StepFeatureCardProps {
  activeStepIndex: number;
  steps: readonly StepItem[];
  onNextStep?: () => void;
  shouldReduceMotion?: boolean | null;
}

export default function StepFeatureCard({
  activeStepIndex,
  steps,
  onNextStep,
  shouldReduceMotion,
}: StepFeatureCardProps): React.ReactElement {
  const activeStep = steps[activeStepIndex] || steps[0];g

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[440px] rounded-[32px] bg-[#EFF7FD] border border-slate-200/90 p-8 sm:p-10 lg:p-12 overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-300">
      {/* Background Soft Glow */}
      {/* <div className="absolute top-0 right-0 w-96 h-96  pointer-events-none" /> */}

      {/* Content Area (Left side of card) */}
      <div className="relative z-10 max-w-full lg:max-w-[62%] flex flex-col gap-6 justify-between h-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStepIndex}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, y: 12 }
            }
            animate={{ opacity: 1, y: 0 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: -12 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-5"
          >
            {/* Step Title */}
            <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
              {activeStep.title}
            </h3>

            {/* Step Description */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
              {activeStep.description}
            </p>
          </motion.div>
        </AnimatePresence>

        {/* Action Buttons (Learn More + Circle Arrow) */}
        <div className="flex items-center gap-3 pt-4">
          <button
            type="button"
            className="px-6 py-2.5 rounded-full border border-slate-900 text-slate-900 font-medium text-sm sm:text-base hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-sm active:scale-95"
          >
            Learn more
          </button>
          <button
            type="button"
            onClick={onNextStep}
            aria-label="Next step"
            className="w-10 h-10 rounded-full border border-slate-900 text-slate-900 flex items-center justify-center hover:bg-slate-900 hover:text-white transition-all duration-200 shadow-sm active:scale-95 group"
          >
            <IconChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>
      </div>

      {/* Dynamic Step Image Graphic (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-[180px] sm:w-[230px] lg:w-[270px] h-[160px] sm:h-[200px] lg:h-[230px] pointer-events-none z-0 overflow-hidden flex items-end justify-end">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeStepIndex}
            src={activeStep.image || `/images/how_it_works/image${activeStepIndex + 1}.png`}
            alt={activeStep.title}
            initial={
              shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 }
            }
            animate={{ opacity: 1, scale: 1 }}
            exit={
              shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 }
            }
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-full object-contain object-bottom-right"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}
