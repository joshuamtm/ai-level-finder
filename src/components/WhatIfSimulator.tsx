import React, { useState } from 'react';
import { AssessmentResult } from '../types';
import { levels } from '../data/levels';
import { impactNarratives } from '../data/impactNarratives';

interface WhatIfSimulatorProps {
  result: AssessmentResult;
}

const WhatIfSimulator: React.FC<WhatIfSimulatorProps> = ({ result }) => {
  const [simulatedLevel, setSimulatedLevel] = useState(result.currentLevel);
  
  const maxLevel = Math.min(4, result.currentLevel + 2);
  const levelRange = Array.from(
    { length: maxLevel - result.currentLevel + 1 }, 
    (_, i) => result.currentLevel + i
  );

  const handleSliderClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const sliderWidth = rect.width;
    const percentage = clickX / sliderWidth;
    const range = maxLevel - result.currentLevel;
    const newLevel = result.currentLevel + Math.round(percentage * range);
    const clampedLevel = Math.max(result.currentLevel, Math.min(maxLevel, newLevel));
    setSimulatedLevel(clampedLevel);
  };

  const getCategoryIcon = (category: string) => {
    const icons: { [key: string]: string } = {
      'Stakeholder Engagement': '👥',
      'Mission Delivery': '🎯', 
      'Communications': '📢',
      'Operations': '⚙️',
      'Finance': '💰',
      'Technology Strategy': '🤖'
    };
    return icons[category] || '📊';
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg p-8">
      <div className="flex items-center mb-6">
        <svg className="h-6 w-6 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
        <h2 className="text-2xl font-semibold text-gray-900">What If You Level Up?</h2>
      </div>
      
      <p className="text-gray-600 mb-6">
        Explore the impact of advancing your AI maturity. Use the slider to see specific benefits you'd gain by moving to higher levels.
      </p>

      {/* Level Slider */}
      <div className="mb-8">
        <div className="flex items-center justify-between mb-4">
          <label htmlFor="level-slider" className="text-sm font-medium text-gray-700">
            Simulate moving to level:
          </label>
          <div className="flex items-center">
            <span className="text-2xl font-bold mr-2" style={{ color: levels[simulatedLevel].color }}>
              Level {simulatedLevel}
            </span>
            <span className="text-sm text-gray-600">({levels[simulatedLevel].name})</span>
          </div>
        </div>
        
        <div className="relative">
          <div 
            className="w-full h-3 bg-gray-200 rounded-lg cursor-pointer relative"
            onClick={handleSliderClick}
            style={{
              background: `linear-gradient(to right, ${levels[result.currentLevel].color} 0%, ${levels[simulatedLevel].color} 100%)`
            }}
          >
            <input
              id="level-slider"
              type="range"
              min={result.currentLevel}
              max={maxLevel}
              value={simulatedLevel}
              onChange={(e) => setSimulatedLevel(Number(e.target.value))}
              className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            />
            <div 
              className="absolute top-1/2 transform -translate-y-1/2 w-5 h-5 bg-white rounded-full shadow-md border-2 transition-all duration-150 hover:scale-110"
              style={{ 
                left: `${((simulatedLevel - result.currentLevel) / (maxLevel - result.currentLevel)) * 100}%`,
                borderColor: levels[simulatedLevel].color,
                transform: 'translate(-50%, -50%)'
              }}
            />
          </div>
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            {levelRange.map((level) => (
              <div key={level} className="flex flex-col items-center">
                <div 
                  className="w-4 h-4 rounded-full mb-1"
                  style={{ backgroundColor: levels[level].color }}
                />
                <span>L{level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Impact Visualization */}
      {simulatedLevel > result.currentLevel && (
        <div className="space-y-6">
          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Moving from Level {result.currentLevel} to Level {simulatedLevel}
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {result.categoryScores.map((categoryScore) => {
                const category = categoryScore.category;
                const currentLevel = Math.floor(categoryScore.percentage / 25); // Convert percentage to level
                const targetLevel = Math.min(4, currentLevel + (simulatedLevel - result.currentLevel));
                
                if (targetLevel <= currentLevel || !impactNarratives[category]?.[targetLevel]) {
                  return null;
                }

                const impact = impactNarratives[category][targetLevel];
                const icon = getCategoryIcon(category);

                return (
                  <div key={category} className="bg-white rounded-lg p-4 border border-gray-200">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-2">{icon}</span>
                      <h4 className="font-semibold text-gray-900 text-sm">{category}</h4>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center text-green-700">
                        <svg className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span className="text-sm font-medium">{impact.timeSaved} time saved</span>
                      </div>
                      
                      <div>
                        <p className="text-xs font-medium text-gray-700 mb-2">New capabilities:</p>
                        <ul className="text-xs text-gray-600 space-y-1">
                          {impact.capabilities.slice(0, 2).map((capability, index) => (
                            <li key={index} className="flex items-start">
                              <span className="text-green-500 mr-1">•</span>
                              <span>{capability}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <p className="text-xs font-medium text-gray-700 mb-1">Key tools:</p>
                        <div className="flex flex-wrap gap-1">
                          {impact.tools.slice(0, 2).map((tool, index) => (
                            <span key={index} className="inline-block px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded">
                              {tool}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="bg-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-blue-900 mb-3">
              📈 Overall Impact at Level {simulatedLevel}
            </h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">
                  {simulatedLevel === 1 ? '25-35%' : 
                   simulatedLevel === 2 ? '40-55%' : 
                   simulatedLevel === 3 ? '65-75%' : '80-90%'}
                </div>
                <div className="text-sm text-blue-800">Average Time Saved</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-green-600">
                  {simulatedLevel === 1 ? '15-25%' : 
                   simulatedLevel === 2 ? '25-35%' : 
                   simulatedLevel === 3 ? '35-50%' : '40-60%'}
                </div>
                <div className="text-sm text-green-800">Capacity Increase</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-purple-600">
                  {simulatedLevel === 1 ? '2-5x' : 
                   simulatedLevel === 2 ? '3-7x' : 
                   simulatedLevel === 3 ? '5-10x' : '10x+'}
                </div>
                <div className="text-sm text-purple-800">ROI Multiple</div>
              </div>
            </div>
          </div>

          <div className="bg-orange-50 rounded-lg p-4">
            <div className="flex items-start">
              <svg className="h-5 w-5 text-orange-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <div>
                <h4 className="font-medium text-orange-900 mb-1">Implementation Tip</h4>
                <p className="text-orange-800 text-sm">
                  Focus on moving up one level at a time. Small, consistent improvements compound quickly and 
                  create momentum for further advancement. Start with your lowest-scoring category for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {simulatedLevel === result.currentLevel && (
        <div className="text-center py-8">
          <svg className="h-12 w-12 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          <p className="text-gray-600">
            Move the slider above to explore the benefits of advancing to higher AI maturity levels.
          </p>
        </div>
      )}
    </div>
  );
};

export default WhatIfSimulator;