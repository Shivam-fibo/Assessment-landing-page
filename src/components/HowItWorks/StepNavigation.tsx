"use client";

import React from "react";
import { motion } from "motion/react";

export interface StepItem {
  number: string;
  title: string;
  body: string;
}

interface StepNavigationProps {
  steps: readonly StepItem[];
  activeIndex: number;
  onStepClick: (index: number) => void;
}

export default function StepNavigation({
  steps,
  activeIndex,
  onStepClick,
}: StepNavigationProps): React.ReactElement {
  return (
    <div className="relative flex flex-col justify-center space-y-6">
      {/* Background Connecting Timeline */}
      <div className="absolute left-[19px] top-6 bottom-6 w-[2px] bg-slate-200" />

      {steps.map((step, index) => {
        const isActive = index === activeIndex;

        return (
          <div
            key={step.number}
            onClick={() => onStepClick(index)}
            className="group relative flex cursor-pointer items-start gap-4 transition-all duration-300"
          >
            {/* Step Number Circle / Indicator Badge */}
            <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300">
              {isActive ? (
                <motion.div
                  layoutId="activeStepCircle"
                  className="absolute inset-0 rounded-full bg-orange-500 shadow-md shadow-orange-500/30"
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                />
              ) : (
                <div className="absolute inset-0 rounded-full border-2 border-slate-200 bg-white group-hover:border-slate-300" />
              )}
              <span
                className={`relative z-10 text-xs font-bold transition-colors duration-300 ${
                  isActive
                    ? "text-white"
                    : "text-slate-500 group-hover:text-slate-800"
                }`}
              >
                {step.number}
              </span>
            </div>

            {/* Content Area */}
            <div className="pt-1.5 flex-1">
              <h3
                className={`text-lg font-bold tracking-tight transition-colors duration-300 sm:text-xl ${
                  isActive
                    ? "text-slate-900"
                    : "text-slate-400 group-hover:text-slate-600"
                }`}
              >
                {step.title}
              </h3>

              {/* Animated Expandable Body Description */}
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                  marginTop: isActive ? 8 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="overflow-hidden"
              >
                <p className="max-w-md text-sm leading-relaxed text-slate-600">
                  {step.body}
                </p>
              </motion.div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
