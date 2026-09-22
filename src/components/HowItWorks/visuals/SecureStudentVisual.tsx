"use client";

import React from "react";
import { motion } from "motion/react";
import { StepComponentProps } from "../types";

export default function SecureStudentVisual({
  shouldReduceMotion,
}: StepComponentProps): React.ReactElement {
  return (
    <div className="relative w-full h-full min-h-[340px] sm:min-h-[400px] flex flex-col justify-between p-6 sm:p-8 bg-gradient-to-br from-slate-50 via-indigo-50/30 to-purple-50/20 rounded-[24px]">
      {/* Security Header Bar */}
      <div className="flex items-center justify-between pb-4 border-b border-slate-200/80">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-purple-600/10 text-purple-700 flex items-center justify-center font-bold text-xs">
            02
          </div>
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
              Identity Verification
            </h4>
            <p className="text-sm font-bold text-slate-800">
              Student Gatekeeper & Security
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-purple-50 text-purple-700 border border-purple-200/60">
            <svg
              className="w-3.5 h-3.5 text-purple-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            Active Session Lock
          </span>
        </div>
      </div>

      {/* Security Login Verification Card */}
      <motion.div
        initial={shouldReduceMotion ? {} : { scale: 0.96, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        className="my-auto bg-white p-5 sm:p-6 rounded-2xl border border-slate-200/90 shadow-sm"
      >
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-900 text-white font-bold text-sm flex items-center justify-center ring-4 ring-indigo-50">
              AV
            </div>
            <div>
              <h5 className="text-sm font-bold text-slate-900">
                Alex Vance
              </h5>
              <p className="text-xs text-slate-500 font-mono">
                Student ID: #ST-84920
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200/60 flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
            Verified Identity
          </span>
        </div>

        {/* Credentials & Device Validation Matrix */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                />
              </svg>
              <span className="font-semibold">Single Active Device</span>
            </div>
            <span className="font-bold text-slate-900 font-mono text-[11px]">
              1 Active Token
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 border border-slate-200/70 text-xs">
            <div className="flex items-center gap-2 text-slate-700">
              <svg
                className="w-4 h-4 text-indigo-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                />
              </svg>
              <span className="font-semibold">Account Sharing Defense</span>
            </div>
            <span className="font-semibold text-emerald-600">Enforced</span>
          </div>
        </div>
      </motion.div>

      {/* Security Guarantees */}
      <div className="grid grid-cols-2 gap-3 pt-3 border-t border-slate-200/80 text-xs">
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-indigo-500" />
          <span className="font-medium text-slate-700">
            Encrypted Session Handshake
          </span>
        </div>
        <div className="bg-white/80 backdrop-blur-xs p-3 rounded-xl border border-slate-200/60 flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-medium text-slate-700">
            Fraud Prevention Active
          </span>
        </div>
      </div>
    </div>
  );
}
