import React from 'react';
import { levels } from '../data/levels';

interface LevelGaugeProps {
  level: number;
  score: number;
  maxScore: number;
}

const LevelGauge: React.FC<LevelGaugeProps> = ({ level, score, maxScore }) => {
  const percentage = Math.round((score / maxScore) * 100);
  const currentLevel = levels[level];
  const circumference = 2 * Math.PI * 45;
  const strokeDasharray = `${(percentage / 100) * circumference} ${circumference}`;

  return (
    <div className="relative w-48 h-48">
      <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
        {/* Background circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="#e5e7eb"
          strokeWidth="8"
        />
        {/* Progress circle */}
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={currentLevel.color}
          strokeWidth="8"
          strokeLinecap="round"
          strokeDasharray={strokeDasharray}
          className="transition-all duration-1000 ease-out"
        />
      </svg>
      
      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-3xl font-bold" style={{ color: currentLevel.color }}>
            {level}
          </div>
          <div className="text-sm text-gray-600 font-medium">
            {percentage}%
          </div>
          <div className="text-xs text-gray-500 mt-1">
            Score: {score}/{maxScore}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LevelGauge;