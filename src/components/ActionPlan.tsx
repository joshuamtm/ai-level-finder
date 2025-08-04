import React from 'react';

interface ActionPlanProps {
  recommendations: string[];
}

const ActionPlan: React.FC<ActionPlanProps> = ({ recommendations }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Your Personalized Action Plan
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 mb-6">
          Based on your assessment, here are the priority steps to advance your AI maturity:
        </p>
        
        <div className="grid gap-4">
          {recommendations.map((recommendation, idx) => (
            <div 
              key={idx}
              className="flex items-start space-x-4 p-4 border border-gray-200 rounded-lg hover:border-primary-300 transition-colors"
            >
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-primary-100 text-primary-600 rounded-full flex items-center justify-center font-semibold">
                  {idx + 1}
                </div>
              </div>
              <div className="flex-1">
                <p className="text-gray-900 font-medium">{recommendation}</p>
              </div>
              <div className="flex-shrink-0">
                <button
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                  aria-label="Mark as complete"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 p-4 bg-blue-50 rounded-lg">
          <div className="flex items-start space-x-3">
            <svg className="h-6 w-6 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <div>
              <h3 className="font-medium text-blue-900 mb-1">Implementation Tip</h3>
              <p className="text-blue-800 text-sm">
                Start with the first 1-2 recommendations. Small wins build momentum and buy-in from leadership and staff. 
                Focus on areas where AI can solve existing pain points rather than creating new processes.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionPlan;