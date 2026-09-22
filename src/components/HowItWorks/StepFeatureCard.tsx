"use client";

import React from "react";
import { motion } from "motion/react";
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
  return (
    <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[450px]">
      {steps.map((step, idx) => {
        const isActive = idx === activeStepIndex;
        const isPast = idx < activeStepIndex;
        const isFuture = idx > activeStepIndex;

        // Determine y offset, opacity, scale, and zIndex for each card
        let yOffset = 0;
        let opacity = 1;
        let scale = 1;

        if (isPast) {
          // Card scrolled up and out of view when scrolling down
          yOffset = shouldReduceMotion ? 0 : -80;
          opacity = 0;
          scale = 0.94;
        } else if (isFuture) {
          // Card waiting below to come up when scrolling down
          yOffset = shouldReduceMotion ? 0 : 80;
          opacity = 0;
          scale = 0.94;
        } else {
          // Active step card
          yOffset = 0;
          opacity = 1;
          scale = 1;
        }

        return (
          <motion.div
            key={step.number}
            initial={false}
            animate={{
              y: yOffset,
              opacity: opacity,
              scale: scale,
            }}
            transition={{
              duration: 0.45,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{
              zIndex: isActive ? 30 : 10 - Math.abs(idx - activeStepIndex),
              pointerEvents: isActive ? "auto" : "none",
            }}
            className="absolute inset-0 w-full h-full rounded-[32px] bg-[#EFF7FD] border border-slate-200/90 p-8 sm:p-10 lg:p-12 overflow-hidden flex flex-col justify-between shadow-sm"
          >
            {/* Content Area (Left side of card) */}
            <div className="relative z-10 max-w-full lg:max-w-[62%] flex flex-col gap-6 justify-between h-full">
              <div className="flex flex-col gap-5">
                {/* Step Tag / Badge */}
                <div className="flex items-center gap-2">
                  {/* <span className="text-[11px] font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded bg-indigo-100/80 text-indigo-800">
                    Step {step.number} — {step.tag}
                  </span> */}
                </div>

                {/* Step Title */}
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 leading-[1.18]">
                  {step.title}
                </h3>

                {/* Step Description */}
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
                  {step.description}
                </p>
              </div>

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

            {/* Step Image Graphic (Bottom Right) */}
            <div className="absolute bottom-0 right-0 w-[180px] sm:w-[230px] lg:w-[270px] h-[160px] sm:h-[200px] lg:h-[230px] pointer-events-none z-0 overflow-hidden flex items-end justify-end">
              <img
                src={step.image || `/images/how_it_works/image${idx + 1}.png`}
                alt={step.title}
                className="w-full h-full object-contain object-bottom-right"
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
