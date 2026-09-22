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
  const activeStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="relative w-full min-h-[400px] sm:min-h-[440px] rounded-[32px] bg-[#edf4f9] border border-slate-200/90 p-8 sm:p-10 lg:p-12 overflow-hidden flex flex-col justify-between shadow-sm transition-all duration-300">
      {/* Background Soft Glow */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-teal-200/40 via-cyan-100/30 to-transparent rounded-full blur-3xl pointer-events-none" />

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

      {/* Abstract 3D Layered Staircase Graphic (Bottom Right) */}
      <div className="absolute bottom-[-10px] right-[-10px] sm:bottom-0 sm:right-0 w-[240px] sm:w-[320px] lg:w-[360px] h-[220px] sm:h-[280px] pointer-events-none z-0 opacity-90 sm:opacity-100">
        <svg
          viewBox="0 0 400 320"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full object-contain object-bottom-right"
        >
          <defs>
            <linearGradient id="grad-cyan" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="100%" stopColor="#0284c7" />
            </linearGradient>
            <linearGradient id="grad-teal" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#2dd4bf" />
              <stop offset="100%" stopColor="#0d9488" />
            </linearGradient>
            <linearGradient id="grad-emerald" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#34d399" />
              <stop offset="100%" stopColor="#059669" />
            </linearGradient>
            <linearGradient id="grad-dark" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#065f46" />
              <stop offset="100%" stopColor="#044e39" />
            </linearGradient>
            <filter id="shadow-card" x="-20%" y="-20%" width="140%" height="140%">
              <feDropShadow dx="-4" dy="6" stdDeviation="6" floodOpacity="0.15" />
            </filter>
          </defs>

          {/* Layered Curved 3D Stack Cards */}
          <g filter="url(#shadow-card)">
            {/* Base Blue Ripple Fan */}
            <path
              d="M 120 320 C 140 280 180 250 240 260 C 290 270 330 300 380 320 Z"
              fill="url(#grad-cyan)"
              opacity="0.75"
            />
            <path
              d="M 150 310 C 170 265 210 235 270 245 C 315 255 350 285 390 310 Z"
              fill="url(#grad-cyan)"
              opacity="0.85"
            />

            {/* Middle Teal Wave Stack */}
            <path
              d="M 180 300 C 200 240 240 210 300 220 C 340 230 370 260 400 290 Z"
              fill="url(#grad-teal)"
              opacity="0.9"
            />

            {/* Cascading Emerald 3D Angled Chevron Cards */}
            <rect
              x="260"
              y="180"
              width="80"
              height="80"
              rx="14"
              transform="rotate(-28 260 180)"
              fill="url(#grad-emerald)"
              stroke="#ffffff"
              strokeWidth="2"
              opacity="0.95"
            />
            <rect
              x="280"
              y="150"
              width="80"
              height="80"
              rx="14"
              transform="rotate(-28 280 150)"
              fill="url(#grad-emerald)"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <rect
              x="300"
              y="120"
              width="80"
              height="80"
              rx="14"
              transform="rotate(-28 300 120)"
              fill="url(#grad-dark)"
              stroke="#ffffff"
              strokeWidth="2"
            />
            <rect
              x="320"
              y="90"
              width="80"
              height="80"
              rx="14"
              transform="rotate(-28 320 90)"
              fill="url(#grad-dark)"
              stroke="#ffffff"
              strokeWidth="2.5"
            />
            <rect
              x="340"
              y="60"
              width="80"
              height="80"
              rx="14"
              transform="rotate(-28 340 60)"
              fill="#022c22"
              stroke="#34d399"
              strokeWidth="2"
            />
          </g>
        </svg>
      </div>
    </div>
  );
}
