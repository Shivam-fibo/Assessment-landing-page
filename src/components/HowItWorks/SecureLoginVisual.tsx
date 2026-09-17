"use client";

import React from "react";
import { motion } from "motion/react";

export default function SecureLoginVisual(): React.ReactElement {
  return (
    <div className="flex flex-col gap-5 text-slate-800">
      {/* Portal Header */}
      <div className="text-center">
        <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full bg-orange-500/10 text-orange-500">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="mt-2 text-base font-bold text-slate-900">
          Secure Student Verification
        </h3>
        <p className="text-xs text-slate-500">
          Protected single-session hardware lock
        </p>
      </div>

      {/* Input Group */}
      <div className="space-y-3">
        <div>
          <label className="mb-1 block text-xs font-semibold text-slate-600">
            Student ID / Roll Number
          </label>
          <div className="relative flex items-center">
            <input
              type="text"
              readOnly
              value="STD-2026-8941"
              className="w-full rounded-xl border border-slate-200 bg-slate-50 py-2.5 pl-3.5 pr-10 text-xs font-semibold text-slate-800"
            />
            <span className="absolute right-3 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] text-white">
              ✓
            </span>
          </div>
        </div>

        {/* Device Lock Warning Card */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-xl border border-amber-200/80 bg-amber-50/70 p-3 text-xs text-amber-900"
        >
          <div className="flex items-start gap-2.5">
            <span className="text-amber-500 text-sm">⚠️</span>
            <div>
              <p className="font-semibold">Single-Device Lock Enforced</p>
              <p className="mt-0.5 text-[11px] leading-tight text-amber-800/90">
                Signing in on this device automatically revokes sessions on secondary laptops or phones.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Security Status Bar */}
      <div className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50 p-2.5 text-xs">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />
          <span className="text-[11px] font-medium text-slate-600">
            Hardware Fingerprint: <strong className="text-slate-800">Verified</strong>
          </span>
        </div>
        <span className="text-[10px] font-semibold text-emerald-600 uppercase tracking-wide">
          Protected
        </span>
      </div>

      {/* Primary Login Button */}
      <button
        type="button"
        className="w-full rounded-full bg-orange-500 py-2.5 text-xs font-semibold text-white shadow-md shadow-orange-500/20 transition-all hover:bg-orange-600 active:scale-98"
      >
        Authorize & Enter Exam Room
      </button>
    </div>
  );
}
