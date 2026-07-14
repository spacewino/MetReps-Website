export interface Exercise {
  id: string;
  name: string;
  category: 'strength' | 'power' | 'hypertrophy' | 'endurance';
  primaryMuscle: string;
  defaultWeight: number; // in lbs
  defaultReps: number;
  baseVelocity: number; // m/s
}

export interface WorkoutSet {
  weight: number;
  reps: number;
  rpe: number; // Rate of Perceived Exertion (1-10)
  velocity: number; // lift speed in m/s
}

export interface PerformanceGrade {
  grade: 'A+' | 'A' | 'B+' | 'B' | 'C+' | 'C' | 'D';
  score: number; // 0-100
  powerOutput: number; // in watts (calculated)
  consistencyBonus: number; // percentage
  velocityEfficiency: number; // percentage
  gradingDetails: {
    intensity: number; // 0-100
    volume: number; // 0-100
    tempo: number; // 0-100
  };
}

export interface ProgressionMilestone {
  week: number;
  weight: number;
  estimated1RM: number;
  adaptationRate: number; // algorithmic modifier
  phase: string; // e.g. "Neuromuscular Base", "Hypertrophy Peak", "Absolute Strength"
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  avatarUrl: string;
  quote: string;
  stats: string; // e.g., "+45lb Squat in 6 Weeks"
  verified: boolean;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ShowcaseScreen {
  id: string;
  title: string;
  subtitle: string;
  type: 'dashboard' | 'progression' | 'grading' | 'history';
  tagline: string;
}
