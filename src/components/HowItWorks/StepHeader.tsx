"use client";

import React from "react";

export default function StepHeader(): React.ReactElement {
  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-[1.12] tracking-tight text-slate-900 max-w-3xl">
        From creating the exam to understanding every result.
      </h2>
    </div>
  );
}
