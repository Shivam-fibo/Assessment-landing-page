"use client";

import React from "react";

export default function StepHeader(): React.ReactElement {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-widest bg-slate-100 text-slate-700 border border-slate-200/80">
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
          HOW IT WORKS
        </span>
      </div>
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight text-slate-900 max-w-3xl">
        From creating the exam to understanding every result.
      </h2>
    </div>
  );
}
