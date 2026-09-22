"use client";

import React from "react";
import { StepItem } from "./types";

interface StepProgressIndicatorProps {
  activeStepIndex?: number;
  steps: readonly StepItem[];
  progress?: unknown;
  shouldReduceMotion?: boolean | null;
}

export default function StepProgressIndicator({
  activeStepIndex = 0,
  steps,
}: StepProgressIndicatorProps): React.ReactElement {
  return (
    <div className="flex flex-col gap-3.5 w-full">
      {steps.map((step, idx) => {
        const isActive = idx === activeStepIndex;

        return (
          <div
            key={step.number}
            className={`flex items-start gap-4 p-4 rounded-xl border transition-all duration-200 ${
              isActive
                ? "bg-white border-indigo-500/40 shadow-sm ring-1 ring-indigo-500/10"
                : "bg-slate-50/80 border-slate-200/80 hover:bg-white"
            }`}
          >
            {/* Step Number Badge */}
            <div
              className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center font-extrabold text-xs ${
                isActive
                  ? "bg-indigo-600 text-white shadow-sm"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {step.number}
            </div>

            {/* Step Info */}
            <div className="flex flex-col gap-0.5">
              <span className="text-[11px] font-extrabold uppercase tracking-wider text-indigo-600">
                {step.tag}
              </span>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {step.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
}
