import React from 'react';
import { useNavigate } from 'react-router-dom';
import { levels } from '../data/levels';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            AI Level Finder for Nonprofits
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Discover your organization's AI maturity level using <a href="https://natesnewsletter.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Nate B. Jones's</a> framework and unlock your potential for greater impact
          </p>
        </div>

        {/* Introduction to AI Levels */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <svg className="h-8 w-8 text-blue-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">
              Understanding AI Maturity Levels
            </h2>
          </div>
          
          <p className="text-gray-700 mb-8 text-lg">
            The AI maturity framework has 5 levels, from "AI Unaware" (Level 0) to "AI Leader" (Level 4). 
            Each level up means dramatically less time on repetitive tasks and more time for your mission. 
            <strong> Most organizations can gain 10-15 hours back each week by moving up just one level!</strong>
          </p>

          {/* Level Breakdown */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {levels.map((level) => (
              <div key={level.level} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                <div className="flex items-center mb-3">
                  <div 
                    className="w-8 h-8 rounded-full flex items-center justify-center text-white font-bold mr-3"
                    style={{ backgroundColor: level.color }}
                  >
                    {level.level}
                  </div>
                  <h3 className="font-semibold text-gray-900">{level.name}</h3>
                </div>
                <p className="text-sm text-gray-600 mb-3">{level.description}</p>
                {level.benefits.length > 0 && (
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">Key benefit:</span> {level.benefits[0]?.description}
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">Why This Matters</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start">
                <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Save 25-85% Time</div>
                  <div className="text-sm text-gray-600">On routine administrative tasks</div>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Serve More People</div>
                  <div className="text-sm text-gray-600">With the same resources</div>
                </div>
              </div>
              <div className="flex items-start">
                <svg className="h-5 w-5 text-purple-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <div>
                  <div className="font-medium text-gray-900">Better Decisions</div>
                  <div className="text-sm text-gray-600">With data-driven insights</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Assessment Overview */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">About the Assessment</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="font-semibold text-gray-900 mb-4">What We'll Ask</h3>
              <p className="text-gray-700 mb-4">
                You'll answer 20 questions about how your organization currently handles key activities across 6 areas:
              </p>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  Stakeholder Engagement (supporters, funders, partners)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                  Mission Delivery (programs, services, beneficiaries)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  Communications (marketing, advocacy, outreach)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-orange-500 rounded-full mr-3"></span>
                  Operations (staff, volunteers, knowledge management)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-red-500 rounded-full mr-3"></span>
                  Finance (budgeting, reporting, compliance)
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full mr-3"></span>
                  Technology Strategy (planning, governance, adoption)
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-gray-900 mb-4">How to Answer Best</h3>
              <div className="space-y-4 text-gray-700">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="font-medium text-blue-900 mb-1">⏱️ Takes 5-10 minutes</div>
                  <div className="text-sm text-blue-800">Answer at your own pace - no time pressure</div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="font-medium text-green-900 mb-1">✅ Choose what fits best</div>
                  <div className="text-sm text-green-800">Pick the option closest to your current reality, even if not perfect</div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="font-medium text-purple-900 mb-1">🤔 When in doubt</div>
                  <div className="text-sm text-purple-800">Think about what most staff would say about your typical processes</div>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <div className="font-medium text-orange-900 mb-1">🎯 Focus on impact</div>
                  <div className="text-sm text-orange-800">Remember: this is about improving your mission effectiveness</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="font-semibold text-gray-900 mb-3">What You'll Get</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Your current AI maturity level with visual dashboard</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Interactive "what-if" sliders to explore future benefits</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Specific time savings and impact projections</span>
                  </li>
                </ul>
              </div>
              <div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Personalized 3-5 step action plan</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Shareable results for board presentations</span>
                  </li>
                  <li className="flex items-start">
                    <svg className="h-5 w-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Export options (PDF, email, link sharing)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Privacy & Security */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8">
          <div className="flex items-center mb-6">
            <svg className="h-8 w-8 text-green-600 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900">
              Your Privacy & Data Security
            </h2>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-start mb-4">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Nothing Saved or Stored</h3>
                    <p className="text-sm text-green-800">Your assessment responses are never saved to any database or server. They exist only in your browser during the assessment.</p>
                  </div>
                </div>
                <div className="flex items-start mb-4">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">No Tracking or Analytics</h3>
                    <p className="text-sm text-green-800">We don't track who you are, where you work, or what you answer. No cookies, no analytics, no data collection.</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex items-start mb-4">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">You Control Your Data</h3>
                    <p className="text-sm text-green-800">Results are only shared if you choose to email them to yourself or download them. You decide what to do with your information.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <svg className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <h3 className="font-semibold text-green-900 mb-1">Open Source & Transparent</h3>
                    <p className="text-sm text-green-800">This tool is built with transparency in mind. No hidden data collection, no secret tracking - just a helpful assessment.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <button
            onClick={() => navigate('/assessment')}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-4 px-12 rounded-xl text-xl transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
          >
            Start Your Assessment
            <svg className="inline-block ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
          <p className="mt-4 text-gray-600">
            🔒 No login required • 📱 Mobile friendly • ♿ Fully accessible • 🆓 100% free
          </p>
          <p className="mt-2 text-sm text-gray-500">
            Based on the AI Readiness Playbook by <a href="https://natesnewsletter.substack.com/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">Nate B. Jones</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;