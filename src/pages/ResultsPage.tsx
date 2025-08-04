import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { calculateAssessmentResult } from '../utils/scoring';
import { levels } from '../data/levels';
import { AssessmentResult, UserResponse } from '../types';
import LevelGauge from '../components/LevelGauge';
import BenefitsComparison from '../components/BenefitsComparison';
import ActionPlan from '../components/ActionPlan';
import ExportButtons from '../components/ExportButtons';

const ResultsPage: React.FC = () => {
  const navigate = useNavigate();
  const [result, setResult] = useState<AssessmentResult | null>(null);

  useEffect(() => {
    const savedResponses = localStorage.getItem('assessmentResponses');
    if (!savedResponses) {
      navigate('/');
      return;
    }

    try {
      const responses: UserResponse[] = JSON.parse(savedResponses);
      const assessmentResult = calculateAssessmentResult(responses);
      setResult(assessmentResult);
    } catch (error) {
      console.error('Error calculating results:', error);
      navigate('/');
    }
  }, [navigate]);

  if (!result) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Calculating your results...</div>
      </div>
    );
  }

  const currentLevel = levels[result.currentLevel];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your AI Maturity Assessment Results
          </h1>
          <p className="text-xl text-gray-600">
            Based on your responses, here's where your organization stands and how to move forward
          </p>
        </div>

        {/* Level Display */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4" style={{ color: currentLevel.color }}>
                Level {currentLevel.level}: {currentLevel.name}
              </h2>
              <p className="text-gray-700 mb-6">{currentLevel.description}</p>
              
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-900">Key Characteristics:</h3>
                <ul className="space-y-2">
                  {currentLevel.characteristics.map((char, idx) => (
                    <li key={idx} className="flex items-start text-gray-700">
                      <svg className="h-5 w-5 text-gray-400 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 1.414L10.586 9.5 9.293 8.207a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4a1 1 0 000-1.414z" clipRule="evenodd" />
                      </svg>
                      <span>{char}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="flex justify-center">
              <LevelGauge level={result.currentLevel} score={result.score} maxScore={result.maxScore} />
            </div>
          </div>
        </div>

        {/* Benefits Comparison */}
        <BenefitsComparison 
          currentLevel={result.currentLevel}
          nextLevelBenefits={result.nextLevelBenefits}
          nextNextLevelBenefits={result.nextNextLevelBenefits}
        />

        {/* Action Plan */}
        <ActionPlan recommendations={result.recommendations} />

        {/* Category Scores */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Detailed Category Scores
          </h2>
          <div className="space-y-4">
            {result.categoryScores.map((category) => (
              <div key={category.category}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-700">{category.category}</span>
                  <span className="text-gray-600">
                    {Math.round(category.percentage)}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3">
                  <div
                    className="bg-primary-600 h-3 rounded-full transition-all duration-500"
                    style={{ width: `${category.percentage}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Export Options */}
        <ExportButtons result={result} />

        {/* Call to Action */}
        <div className="text-center mt-12">
          <button
            onClick={() => {
              localStorage.removeItem('assessmentResponses');
              navigate('/');
            }}
            className="text-primary-600 hover:text-primary-700 font-medium"
          >
            Take Assessment Again
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultsPage;