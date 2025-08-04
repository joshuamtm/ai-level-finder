import React from 'react';
import './App.css';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-xl p-8 md:p-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-center">
          AI Level Finder for Nonprofits
        </h1>
        <p className="text-xl text-gray-600 mb-8 text-center">
          Discover your organization's AI maturity level using Nate B. Jones's framework
        </p>
        
        <div className="bg-blue-50 rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-blue-900 mb-4">
            🎯 Quick Test Version
          </h2>
          <p className="text-gray-700 mb-4">
            This is a simplified version to test GitHub Pages deployment. 
            The full assessment wizard will be available once deployment is working properly.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="bg-green-50 rounded-lg p-6">
            <h3 className="font-semibold text-green-900 mb-2">Features Coming</h3>
            <ul className="text-green-800 space-y-2">
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>20 comprehensive assessment questions</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Visual results dashboard</span>
              </li>
              <li className="flex items-start">
                <span className="mr-2">✓</span>
                <span>Personalized action plans</span>
              </li>
            </ul>
          </div>

          <div className="bg-purple-50 rounded-lg p-6">
            <h3 className="font-semibold text-purple-900 mb-2">Assessment Areas</h3>
            <ul className="text-purple-800 space-y-2">
              <li>📊 Stakeholder Engagement</li>
              <li>🎯 Mission Delivery</li>
              <li>📢 Communications</li>
              <li>⚙️ Operations</li>
              <li>💰 Finance</li>
              <li>🤖 Technology Strategy</li>
            </ul>
          </div>
        </div>

        <div className="text-center">
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-8 rounded-lg text-lg transition-colors"
            onClick={() => alert('Full assessment coming soon! Deployment is being finalized.')}
          >
            Test Button - Full Version Coming Soon
          </button>
        </div>

        <div className="mt-8 text-center text-sm text-gray-500">
          Based on Nate B. Jones's AI Readiness Framework
        </div>
      </div>
    </div>
  );
}

export default App;