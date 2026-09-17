"use client";

import React from "react";
import { motion } from "motion/react";

export default function LiveExamVisual(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 text-slate-800">
      {/* Exam Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3">
        <div>
          <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
            Question 14 of 25
          </span>
          <div className="flex items-center gap-1.5 text-xs text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
            <span>Auto-saved to cloud</span>
          </div>
        </div>

        {/* Live Pulsing Timer */}
        <div className="flex items-center gap-2 rounded-xl bg-orange-50 px-3 py-1.5 border border-orange-200/60">
          <svg className="h-4 w-4 text-orange-500 animate-spin" style={{ animationDuration: '6s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="font-mono text-xs font-bold text-orange-600">
            00:42:15
          </span>
        </div>
      </div>

      {/* Question Text */}
      <div>
        <p className="text-sm font-semibold text-slate-900 leading-snug">
          What is the net force acting on an object of mass 5kg accelerating at 2m/s²?
        </p>
      </div>

      {/* Multiple Choice Options */}
      <div className="grid grid-cols-2 gap-2 text-xs">
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600">
          A) 2.5 N
        </div>
        <motion.div
          initial={{ scale: 0.98 }}
          animate={{ scale: 1 }}
          className="flex items-center justify-between rounded-xl border-2 border-orange-500 bg-orange-50/70 p-2.5 font-semibold text-orange-950"
        >
          <span>B) 10 N</span>
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-orange-500 text-[10px] text-white">
            ✓
          </span>
        </motion.div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600">
          C) 7.0 N
        </div>
        <div className="rounded-xl border border-slate-200 bg-white p-2.5 text-slate-600">
          D) 0.4 N
        </div>
      </div>

      {/* Live Security Monitor Bar */}
      <div className="mt-1 flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2.5 px-3 text-[11px] text-slate-700 shadow-2xs">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Fullscreen Active
          </span>
          <span className="flex items-center gap-1 text-emerald-600 font-medium">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Tab Switches: 0
          </span>
        </div>
        <span className="rounded bg-white border border-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
          Copy/Paste: Blocked
        </span>
      </div>
    </div>
  );
}
