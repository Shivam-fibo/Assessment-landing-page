import { MotionValue } from "motion/react";

export interface StepItem {
  readonly number: string;
  readonly tag: string;
  readonly title: string;
  readonly description: string;
}

export interface StepComponentProps {
  activeStep: number;
  stepIndex: number;
  progress: MotionValue<number>;
  shouldReduceMotion: boolean | null;
}
