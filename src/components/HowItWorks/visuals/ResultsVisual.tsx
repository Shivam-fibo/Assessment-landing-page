"use client";

import React from "react";
import { motion } from "motion/react";
import { StepComponentProps } from "../types";

export default function ResultsVisual({
  shouldReduceMotion,
}: StepComponentProps): React.ReactElement {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-emerald-50/30 to-teal-50/20 rounded-[24px]">
      {/* Results Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-600/10 text-emerald-700 flex items-center justify-center font-bold text-xs">
            04
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Automated Evaluation
            </h4>
            <p className="text-sm font-bold text-slate-800">
              Instant Analytics & Insights
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-emerald-50 text-emerald-800 border border-emerald-200/80">
            <svg
              className="w-3.5 h-3.5 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Auto-Graded
          </span>
        </div>
      </div>

      {/* Main Score & Analytics Dashboard Card */}
      <motion.div
        initial={shouldReduceMotion ? {} : { scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Overall Score
            </span>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-mono">
                88%
              </span>
              <span className="text-xs font-bold px-2 py-0.5 rounded-md bg-emerald-100 text-emerald-800">
                PASSED (Grade A)
              </span>
            </div>
          </div>

          <div className="text-right">
            <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
              Evaluation Time
            </span>
            <span className="block text-xs font-bold text-slate-700 font-mono mt-0.5">
              0.4 Seconds
            </span>
          </div>
        </div>

        {/* Subject-Wise Performance Breakdown */}
        <div className="space-y-3">
          {[
            { subject: "Mathematics & Logic", score: 92, color: "bg-emerald-500" },
            { subject: "Computer Science Core", score: 86, color: "bg-indigo-500" },
            { subject: "Problem Solving", score: 88, color: "bg-cyan-500" },
          ].map((item) => (
            <div key={item.subject} className="space-y-1">
              <div className="flex items-center justify-between text-xs">
                <span className="font-semibold text-slate-700">
                  {item.subject}
                </span>
                <span className="font-bold text-slate-900 font-mono">
                  {item.score}%
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                <div
                  className={`${item.color} h-full rounded-full transition-all`}
                  style={{ width: `${item.score}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Analytics Highlights */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 text-xs">
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex items-center justify-between">
          <span className="font-medium text-slate-600">Admin Report</span>
          <span className="font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md text-[11px]">
            Ready
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex items-center justify-between">
          <span className="font-medium text-slate-600">Student Breakdown</span>
          <span className="font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded-md text-[11px]">
            Generated
          </span>
        </div>
      </div>
    </div>
  );
}
