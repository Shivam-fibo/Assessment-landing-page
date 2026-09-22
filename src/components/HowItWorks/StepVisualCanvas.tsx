"use client";

import React from "react";
import { motion, AnimatePresence, MotionValue } from "motion/react";
import CreateAssessmentVisual from "./visuals/CreateAssessmentVisual";
import SecureStudentVisual from "./visuals/SecureStudentVisual";
import RunExamVisual from "./visuals/RunExamVisual";
import ResultsVisual from "./visuals/ResultsVisual";

interface StepVisualCanvasProps {
  activeStep: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}

export default function StepVisualCanvas({
  activeStep,
  progress,
  shouldReduceMotion,
}: StepVisualCanvasProps): React.ReactElement {
  return (
    <div className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] rounded-[28px] bg-white p-2.5 sm:p-3 border border-slate-200/80 shadow-lg shadow-slate-200/40 overflow-hidden">
      {/* Decorative Outer Subtle Glow Grid Accent */}
      <div className="absolute inset-0 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:16px_16px] opacity-40 pointer-events-none" />

      <AnimatePresence mode="wait">
        <motion.div
          key={activeStep}
          initial={
            shouldReduceMotion
              ? { opacity: 1 }
              : { opacity: 0, y: 16, scale: 0.98 }
          }
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={
            shouldReduceMotion
              ? { opacity: 0 }
              : { opacity: 0, y: -16, scale: 0.98 }
          }
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 w-full h-full"
        >
          {activeStep === 0 && (
            <CreateAssessmentVisual
              activeStep={activeStep}
              stepIndex={0}
              progress={progress}
              shouldReduceMotion={shouldReduceMotion}
            />
          )}
          {activeStep === 1 && (
            <SecureStudentVisual
              activeStep={activeStep}
              stepIndex={1}
              progress={progress}
              shouldReduceMotion={shouldReduceMotion}
            />
          )}
          {activeStep === 2 && (
            <RunExamVisual
              activeStep={activeStep}
              stepIndex={2}
              progress={progress}
              shouldReduceMotion={shouldReduceMotion}
            />
          )}
          {activeStep === 3 && (
            <ResultsVisual
              activeStep={activeStep}
              stepIndex={3}
              progress={progress}
              shouldReduceMotion={shouldReduceMotion}
            />
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
