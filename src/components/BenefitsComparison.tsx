import React from 'react';
import { Benefit } from '../types';
import { levels } from '../data/levels';

interface BenefitsComparisonProps {
  currentLevel: number;
  nextLevelBenefits: Benefit[];
  nextNextLevelBenefits: Benefit[];
}

const BenefitsComparison: React.FC<BenefitsComparisonProps> = ({
  currentLevel,
  nextLevelBenefits,
  nextNextLevelBenefits
}) => {
  const nextLevel = currentLevel + 1;
  const nextNextLevel = currentLevel + 2;

  const getBenefitIcon = (category: string) => {
    switch (category) {
      case 'time':
        return (
          <svg className="h-6 w-6 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
        );
      case 'revenue':
        return (
          <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
        );
      case 'cost':
        return (
          <svg className="h-6 w-6 text-orange-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
          </svg>
        );
      case 'impact':
        return (
          <svg className="h-6 w-6 text-purple-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        );
      default:
        return (
          <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        );
    }
  };

  if (nextLevelBenefits.length === 0 && nextNextLevelBenefits.length === 0) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          🎉 Congratulations!
        </h2>
        <p className="text-gray-700">
          You've reached the highest AI maturity level. Consider sharing your expertise with other nonprofits and contributing to the sector's AI advancement.
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        What You Unlock at Higher Levels
      </h2>
      
      <div className="grid lg:grid-cols-2 gap-8">
        {/* Next Level Benefits */}
        {nextLevelBenefits.length > 0 && nextLevel <= 4 && (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3"
                style={{ backgroundColor: levels[nextLevel].color }}
              >
                {nextLevel}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Level {nextLevel}: {levels[nextLevel].name}
              </h3>
            </div>
            
            <div className="space-y-4">
              {nextLevelBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {getBenefitIcon(benefit.category)}
                  <div>
                    <div className="font-medium text-gray-900">
                      {benefit.metric}: {benefit.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Next Next Level Benefits */}
        {nextNextLevelBenefits.length > 0 && nextNextLevel <= 4 && (
          <div className="border border-gray-200 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3"
                style={{ backgroundColor: levels[nextNextLevel].color }}
              >
                {nextNextLevel}
              </div>
              <h3 className="text-lg font-semibold text-gray-900">
                Level {nextNextLevel}: {levels[nextNextLevel].name}
              </h3>
            </div>
            
            <div className="space-y-4">
              {nextNextLevelBenefits.map((benefit, idx) => (
                <div key={idx} className="flex items-start space-x-3">
                  {getBenefitIcon(benefit.category)}
                  <div>
                    <div className="font-medium text-gray-900">
                      {benefit.metric}: {benefit.value}
                    </div>
                    <div className="text-sm text-gray-600">
                      {benefit.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BenefitsComparison;