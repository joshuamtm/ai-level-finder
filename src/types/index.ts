export interface Question {
  id: string;
  text: string;
  type: 'single' | 'multiple' | 'likert';
  options: Option[];
  category: string;
  weight: number;
}

export interface Option {
  id: string;
  text: string;
  points: number;
  level?: number;
}

export interface Level {
  level: number;
  name: string;
  description: string;
  color: string;
  characteristics: string[];
  benefits: Benefit[];
  nextSteps: string[];
  examples: string[];
}

export interface Benefit {
  category: 'time' | 'revenue' | 'cost' | 'impact';
  metric: string;
  value: string;
  description: string;
}

export interface AssessmentResult {
  currentLevel: number;
  score: number;
  maxScore: number;
  categoryScores: CategoryScore[];
  recommendations: string[];
  nextLevelBenefits: Benefit[];
  nextNextLevelBenefits: Benefit[];
}

export interface CategoryScore {
  category: string;
  score: number;
  maxScore: number;
  percentage: number;
}

export interface UserResponse {
  questionId: string;
  selectedOptions: string[];
}