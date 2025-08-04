import React, { useState } from 'react';
import { AssessmentResult } from '../types';
import { levels } from '../data/levels';
import { generatePDF } from '../utils/pdfGenerator';

interface ExportButtonsProps {
  result: AssessmentResult;
}

const ExportButtons: React.FC<ExportButtonsProps> = ({ result }) => {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const handleShareLink = async () => {
    const shareUrl = `${window.location.origin}/results`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'AI Level Finder Results',
          text: `I just completed the AI Level Finder assessment and scored Level ${result.currentLevel}: ${levels[result.currentLevel].name}`,
          url: shareUrl,
        });
      } catch (error) {
        // Fallback to clipboard
        navigator.clipboard.writeText(shareUrl);
        alert('Link copied to clipboard!');
      }
    } else {
      navigator.clipboard.writeText(shareUrl);
      alert('Link copied to clipboard!');
    }
  };

  const handleDownloadPDF = async () => {
    setIsGeneratingPDF(true);
    try {
      await generatePDF(result);
    } catch (error) {
      console.error('Failed to generate PDF:', error);
      alert('Failed to generate PDF. Please try again.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  const handleEmailResults = () => {
    const currentLevel = levels[result.currentLevel];
    const percentage = Math.round((result.score / result.maxScore) * 100);
    
    const subject = encodeURIComponent(`AI Level Finder Results - Level ${result.currentLevel}: ${currentLevel.name}`);
    const body = encodeURIComponent(`Hi,

I just completed the AI Level Finder assessment for our organization. Here are our results:

🎯 AI Maturity Level: ${result.currentLevel} - ${currentLevel.name}
📊 Score: ${result.score}/${result.maxScore} (${percentage}%)

Key next steps for our organization:
${result.recommendations.slice(0, 3).map((rec, idx) => `${idx + 1}. ${rec}`).join('\n')}

You can learn more about the AI Level Finder at: ${window.location.origin}

Best regards`);

    window.location.href = `mailto:?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Share Your Results
      </h2>
      
      <p className="text-gray-700 mb-6">
        Share these results with your board, funders, or team to build support for AI initiatives.
      </p>
      
      <div className="grid sm:grid-cols-3 gap-4">
        <button
          onClick={handleDownloadPDF}
          disabled={isGeneratingPDF}
          className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGeneratingPDF ? (
            <>
              <svg className="animate-spin h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <span className="text-gray-700 font-medium">Generating PDF...</span>
            </>
          ) : (
            <>
              <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="text-gray-700 font-medium">Download PDF Report</span>
            </>
          )}
        </button>
        
        <button
          onClick={handleShareLink}
          className="flex items-center justify-center px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
        >
          <svg className="h-5 w-5 mr-2 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
          </svg>
          <span className="text-gray-700 font-medium">Share Link</span>
        </button>
        
        <button
          onClick={handleEmailResults}
          className="flex items-center justify-center px-6 py-3 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
        >
          <svg className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="font-medium">Email Results</span>
        </button>
      </div>
      
      <div className="mt-6 p-4 bg-gray-50 rounded-lg">
        <p className="text-sm text-gray-600">
          💡 <strong>Pro tip:</strong> Schedule a follow-up meeting in 3 months to retake the assessment and track your progress. 
          Regular measurement drives continuous improvement.
        </p>
      </div>
    </div>
  );
};

export default ExportButtons;