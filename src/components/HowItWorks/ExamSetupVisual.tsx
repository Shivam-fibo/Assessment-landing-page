"use client";

import React from "react";
import { motion } from "motion/react";

export default function ExamSetupVisual(): React.ReactElement {
  return (
    <div className="flex flex-col gap-5 text-slate-800">
      {/* Top Header Card */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 pb-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="rounded bg-blue-100 px-2 py-0.5 text-xs font-semibold text-black">
              Physics 101
            </span>
            <span className="text-xs text-slate-400">Draft saved 2m ago</span>
          </div>
          <h3 className="mt-1 text-lg font-bold text-slate-900">
            Mid-Term Physics Assessment 2026
          </h3>
        </div>
        <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
          <span className="rounded-full bg-slate-100 px-2.5 py-1">
            25 Questions
          </span>
          <span className="rounded-full bg-slate-100 px-2.5 py-1">
            60 Mins
          </span>
        </div>
      </div>

      {/* Question Configuration Preview */}
      <div className="space-y-2.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
          Question Bank & Modules
        </span>
        
        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/10 text-[11px] font-bold text-orange-600">
              Q1
            </span>
            <span className="font-medium text-slate-700">
              Kinematics & Projectile Motion
            </span>
          </div>
          <span className="font-semibold text-slate-500">10 Points</span>
        </div>

        <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/80 p-3 text-xs">
          <div className="flex items-center gap-2.5">
            <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-orange-500/10 text-[11px] font-bold text-orange-600">
              Q2
            </span>
            <span className="font-medium text-slate-700">
              Newton&apos;s Laws & Friction
            </span>
          </div>
          <span className="font-semibold text-slate-500">15 Points</span>
        </div>
      </div>

      {/* Security & Randomization Toggles */}
      <div className="mt-1 space-y-2 rounded-xl border border-orange-100 bg-orange-50/50 p-3.5">
        <span className="text-xs font-semibold uppercase tracking-wider text-orange-600">
          Anti-Cheating Rules
        </span>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex items-center justify-between rounded-lg bg-white p-2 px-3 shadow-2xs border border-slate-100"
          >
            <span className="text-xs font-medium text-slate-700">
              Shuffle Questions
            </span>
            <span className="flex h-4 w-7 items-center rounded-full bg-orange-500 p-0.5 justify-end">
              <span className="h-3 w-3 rounded-full bg-white shadow-2xs" />
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-between rounded-lg bg-white p-2 px-3 shadow-2xs border border-slate-100"
          >
            <span className="text-xs font-medium text-slate-700">
              Shuffle Options
            </span>
            <span className="flex h-4 w-7 items-center rounded-full bg-orange-500 p-0.5 justify-end">
              <span className="h-3 w-3 rounded-full bg-white shadow-2xs" />
            </span>
          </motion.div>
        </div>
      </div>

      {/* Action Footer */}
      <div className="flex items-center justify-between pt-1">
        <span className="text-xs font-medium text-slate-400">
          Pass threshold: <strong className="text-slate-700">70%</strong>
        </span>
        <button
          type="button"
          className="inline-flex items-center gap-1.5 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-transform active:scale-95"
        >
          Publish Assessment
          <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </button>
      </div>
    </div>
  );
}
