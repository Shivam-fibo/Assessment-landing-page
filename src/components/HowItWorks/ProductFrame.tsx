"use client";

import React from "react";

interface ProductFrameProps {
  children: React.ReactNode;
  activeStep: number;
}

const STEP_TITLES = [
  "assessment.app / create-exam",
  "assessment.app / student-login",
  "assessment.app / live-session",
  "assessment.app / analytics-results",
];

export default function ProductFrame({ children, activeStep }: ProductFrameProps): React.ReactElement {
  return (
    <div className="relative w-full max-w-2xl">
      {/* Subtle ambient glow behind card */}
      <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-orange-500/15 via-amber-500/10 to-orange-400/15 blur-xl opacity-70 transition-all duration-500" />

      {/* Main Frame */}
      <div className="relative flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5">
        {/* Window Header */}
        <div className="flex h-11 w-full items-center justify-between border-b border-slate-150 bg-slate-50/90 px-4 backdrop-blur-md">
          {/* Window Control Buttons */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-rose-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-amber-400/80 inline-block" />
            <span className="h-3 w-3 rounded-full bg-emerald-400/80 inline-block" />
          </div>

          {/* URL / Path Bar */}
          <div className="flex items-center gap-2 rounded-md bg-white px-3 py-1 text-xs font-medium text-slate-600 border border-slate-200/80 shadow-2xs">
            <svg
              className="h-3.5 w-3.5 text-slate-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>{STEP_TITLES[activeStep] || STEP_TITLES[0]}</span>
          </div>

          {/* Live Status Badge */}
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-emerald-600">
      
          </div>
        </div>

        {/* Viewport Content Area */}
        <div className="relative min-h-[360px] bg-white p-6 sm:p-8 flex flex-col justify-center">
          {children}
        </div>
      </div>
    </div>
  );
}
