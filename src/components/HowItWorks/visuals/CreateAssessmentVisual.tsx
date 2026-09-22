"use client";

import React from "react";
import { motion } from "motion/react";
import { StepComponentProps } from "../types";

export default function CreateAssessmentVisual({
  shouldReduceMotion,
}: StepComponentProps): React.ReactElement {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-blue-50/30 to-indigo-50/20 rounded-[24px]">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-indigo-600/10 text-indigo-600 flex items-center justify-center font-bold text-xs">
            01
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Exam Configuration
            </h4>
            <p className="text-sm font-bold text-slate-800">
              Computer Science Mid-Term
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200/60">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
            Drafting
          </span>
        </div>
      </div>

      {/* Main Question Bank Builder Card */}
      <motion.div
        initial={shouldReduceMotion ? {} : { y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-md bg-slate-100 text-slate-600">
            Question 01 of 25
          </span>
          <span className="text-xs font-semibold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">
            Multiple Choice
          </span>
        </div>

        <h5 className="text-sm sm:text-base font-bold text-slate-900 mb-4">
          Which data structure operates on a First-In, First-Out (FIFO) basis?
        </h5>

        {/* Option Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-4">
          {[
            { key: "A", label: "Stack (LIFO)", selected: false },
            { key: "B", label: "Queue (FIFO)", selected: true },
            { key: "C", label: "Binary Tree", selected: false },
            { key: "D", label: "Priority Queue", selected: false },
          ].map((opt) => (
            <div
              key={opt.key}
              className={`flex items-center justify-between p-3 rounded-xl border text-xs font-medium transition-all ${
                opt.selected
                  ? "bg-indigo-50/70 border-indigo-500/50 text-indigo-900 shadow-xs"
                  : "bg-slate-50/50 border-slate-200/70 text-slate-700"
              }`}
            >
              <div className="flex items-center gap-2.5">
                <span
                  className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                    opt.selected
                      ? "bg-indigo-600 text-white"
                      : "bg-slate-200 text-slate-600"
                  }`}
                >
                  {opt.key}
                </span>
                <span>{opt.label}</span>
              </div>
              {opt.selected && (
                <svg
                  className="w-4 h-4 text-indigo-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Metadata & Parameters Row */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/80">
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex flex-col items-center sm:items-start">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Duration
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
            60 Minutes
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex flex-col items-center sm:items-start">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Total Marks
          </span>
          <span className="text-xs sm:text-sm font-bold text-slate-800 mt-0.5">
            50 Points
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex flex-col items-center sm:items-start">
          <span className="text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
            Shuffle Options
          </span>
          <span className="text-xs sm:text-sm font-bold text-emerald-600 mt-0.5 flex items-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            Enabled
          </span>
        </div>
      </div>
    </div>
  );
}
