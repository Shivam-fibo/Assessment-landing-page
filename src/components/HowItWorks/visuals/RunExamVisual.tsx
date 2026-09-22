"use client";

import React from "react";
import { motion } from "motion/react";
import { StepComponentProps } from "../types";

export default function RunExamVisual({
  shouldReduceMotion,
}: StepComponentProps): React.ReactElement {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-cyan-50/30 to-blue-50/20 rounded-[24px]">
      {/* Exam Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-600/10 text-cyan-700 flex items-center justify-center font-bold text-xs">
            03
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Live Examination State
            </h4>
            <p className="text-sm font-bold text-slate-800">
              Active Assessment Engine
            </p>
          </div>
        </div>

        {/* Live Countdown Clock */}
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-cyan-900 text-cyan-100 shadow-xs font-mono">
            <svg
              className="w-3.5 h-3.5 text-cyan-400 animate-spin"
              style={{ animationDuration: "6s" }}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            42:18
          </div>
        </div>
      </div>

      {/* Main Active Exam Progress Card */}
      <motion.div
        initial={shouldReduceMotion ? {} : { y: 15, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm"
      >
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold text-slate-800">
            Exam Progress
          </span>
          <span className="text-xs font-mono font-semibold text-slate-500">
            18 / 25 Questions (72%)
          </span>
        </div>

        {/* Progress Bar */}
        <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden mb-4">
          <div
            className="bg-gradient-to-r from-cyan-500 to-indigo-600 h-full rounded-full transition-all"
            style={{ width: "72%" }}
          />
        </div>

        {/* Live Event Monitoring Log */}
        <div className="space-y-2">
          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs">
            <span className="flex items-center gap-2 text-slate-700 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              Autosave Engine
            </span>
            <span className="text-[11px] font-semibold text-slate-500 font-mono">
              Saved 2s ago
            </span>
          </div>

          <div className="flex items-center justify-between p-2.5 rounded-lg bg-slate-50 border border-slate-200/60 text-xs">
            <span className="flex items-center gap-2 text-slate-700 font-medium">
              <svg
                className="w-3.5 h-3.5 text-cyan-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                />
              </svg>
              Fullscreen Enforcement
            </span>
            <span className="text-[11px] font-semibold text-emerald-600 font-mono">
              Locked & Monitored
            </span>
          </div>
        </div>
      </motion.div>

      {/* Bottom Activity Indicators */}
      <div className="grid grid-cols-3 gap-3 pt-3 border-t border-slate-200/80 text-xs">
        <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 text-center">
          <span className="text-[10px] uppercase font-semibold text-slate-400">
            Tab Switches
          </span>
          <span className="block text-xs font-bold text-emerald-600 mt-0.5">
            0 Detected
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 text-center">
          <span className="text-[10px] uppercase font-semibold text-slate-400">
            Connection
          </span>
          <span className="block text-xs font-bold text-slate-800 mt-0.5">
            Stable (14ms)
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-2.5 rounded-xl border border-slate-200/60 text-center">
          <span className="text-[10px] uppercase font-semibold text-slate-400">
            Session
          </span>
          <span className="block text-xs font-bold text-cyan-700 mt-0.5">
            Syncing Live
          </span>
        </div>
      </div>
    </div>
  );
}
