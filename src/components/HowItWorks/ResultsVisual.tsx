"use client";

import React from "react";
import { motion } from "motion/react";

export default function ResultsVisual(): React.ReactElement {
  return (
    <div className="flex flex-col gap-4 text-slate-800">
      {/* Score Header Banner */}
      <div className="flex items-center justify-between rounded-xl border border-emerald-200/80 bg-emerald-50/70 p-3.5">
        <div>
          <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">
            Instant Assessment Score
          </span>
          <div className="flex items-baseline gap-2">
            <span className="text-2xl font-extrabold text-emerald-950">
              96 / 100
            </span>
            <span className="rounded-full bg-emerald-200/80 px-2 py-0.5 text-xs font-bold text-emerald-800">
              Grade A+ (Passed)
            </span>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-[10px] font-semibold text-emerald-600">
            Auto-Graded
          </span>
          <span className="font-mono text-xs font-bold text-emerald-800">
            0.42 seconds
          </span>
        </div>
      </div>

      {/* Subject Performance Breakdown */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Topic Breakdown
        </span>

        {/* Bar 1 */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-700">Kinematics & Dynamics</span>
            <span className="font-bold text-emerald-600">100%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>
        </div>

        {/* Bar 2 */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-700">Electromagnetism</span>
            <span className="font-bold text-emerald-600">92%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "92%" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>
        </div>

        {/* Bar 3 */}
        <div className="space-y-1">
          <div className="flex justify-between text-xs font-medium">
            <span className="text-slate-700">Thermodynamics</span>
            <span className="font-bold text-emerald-600">95%</span>
          </div>
          <div className="h-2 w-full overflow-hidden rounded-full bg-slate-100">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "95%" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              className="h-full rounded-full bg-emerald-500"
            />
          </div>
        </div>
      </div>

      {/* Security Audit Badge */}
      <div className="flex items-center justify-between rounded-xl border border-slate-200 bg-slate-50 p-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 text-xs font-bold">
            🛡️
          </span>
          <span className="text-[11px] font-medium text-slate-600">
            Integrity Score: <strong className="text-slate-900">100% (Clean Session)</strong>
          </span>
        </div>
        <span className="text-[10px] font-bold text-emerald-600">
          0 Flags
        </span>
      </div>
    </div>
  );
}
