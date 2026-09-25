"use client";

import React from "react";
import { motion, useTransform, useSpring, MotionValue } from "motion/react";
import { IconChevronRight } from "@tabler/icons-react";
import { StepItem } from "./types";

interface StepFeatureCardProps {
  activeStepIndex: number;
  steps: readonly StepItem[];
  progress: MotionValue<number>;
  onNextStep?: () => void;
  shouldReduceMotion?: boolean | null;
}

function CardItem({
  step,
  idx,
  totalSteps,
  smoothProgress,
  onNextStep,
}: {
  step: StepItem;
  idx: number;
  totalSteps: number;
  smoothProgress: MotionValue<number>;
  onNextStep?: () => void;
}) {
  // Continuous Y percentage mapping driven directly by smooth spring progress + 20px gap
  const yPercentage = useTransform(
    smoothProgress,
    [0, 1],
    [idx * 100, (idx - (totalSteps - 1)) * 100]
  );

  const yPixelGap = useTransform(
    smoothProgress,
    [0, 1],
    [idx * 20, (idx - (totalSteps - 1)) * 20]
  );

  const yString = useTransform(
    [yPercentage, yPixelGap],
    ([p, g]) => `calc(${p}% + ${g}px)`
  );

  return (
    <motion.div
      style={{
        y: yString,
        zIndex: 10 + idx,
      }}
      className="absolute inset-0 w-full h-full bg-[#EFF7FD] border border-slate-200/90 rounded-[40px] p-8 sm:p-10 lg:p-12 overflow-hidden flex flex-col justify-between shadow-sm"
    >
      {/* Content Area (Left side of card) */}
      <div className="relative z-10 max-w-full lg:max-w-[62%] flex flex-col gap-6 justify-between h-full">
        <div className="flex flex-col gap-5">
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

      {/* Dynamic Step Image Graphic (Bottom Right) */}
      <div className="absolute bottom-0 right-0 w-[180px] sm:w-[230px] lg:w-[270px] h-[160px] sm:h-[200px] lg:h-[230px] pointer-events-none z-0 overflow-hidden flex items-end justify-end">
        <img
          src={step.image || `/images/how_it_works/image${idx + 1}.png`}
          alt={step.title}
          className="w-full h-full object-contain object-bottom-right"
        />
      </div>
    </motion.div>
  );
}

export default function StepFeatureCard({
  steps,
  progress,
  onNextStep,
}: StepFeatureCardProps): React.ReactElement {
  // Ultra-smooth spring physics for continuous, fluid scrolling
  const smoothProgress = useSpring(progress, {
    stiffness: 140,
    damping: 26,
    mass: 0.15,
  });

  return (
    <div className="relative w-full h-[400px] sm:h-[440px] lg:h-[450px] overflow-hidden rounded-[40px] gap-14">
      {steps.map((step, idx) => (
        <CardItem
          key={step.number}
          step={step}
          idx={idx}
          totalSteps={steps.length}
          smoothProgress={smoothProgress}
          onNextStep={onNextStep}
        />
      ))}
    </div>
  );
}
