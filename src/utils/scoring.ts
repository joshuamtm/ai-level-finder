import { UserResponse, AssessmentResult, CategoryScore } from '../types';
import { questions } from '../data/questions';
import { levels } from '../data/levels';

export function calculateAssessmentResult(responses: UserResponse[]): AssessmentResult {
  let totalScore = 0;
  let maxPossibleScore = 0;
  const categoryScores: Map<string, { score: number; maxScore: number }> = new Map();

  // Calculate scores
  responses.forEach(response => {
    const question = questions.find(q => q.id === response.questionId);
    if (!question) return;

    const selectedOption = question.options.find(opt => 
      response.selectedOptions.includes(opt.id)
    );
    if (!selectedOption) return;

    const questionScore = selectedOption.points * question.weight;
    const questionMaxScore = 4 * question.weight; // Max points is always 4

    totalScore += questionScore;
    maxPossibleScore += questionMaxScore;

    // Track category scores
    const current = categoryScores.get(question.category) || { score: 0, maxScore: 0 };
    categoryScores.set(question.category, {
      score: current.score + questionScore,
      maxScore: current.maxScore + questionMaxScore
    });
  });

  // Calculate percentage and determine level
  const percentage = (totalScore / maxPossibleScore) * 100;
  let currentLevel = 0;

  if (percentage >= 85) currentLevel = 4;
  else if (percentage >= 65) currentLevel = 3;
  else if (percentage >= 45) currentLevel = 2;
  else if (percentage >= 25) currentLevel = 1;
  else currentLevel = 0;

  // Convert category scores to array
  const categoryScoreArray: CategoryScore[] = Array.from(categoryScores.entries()).map(
    ([category, scores]) => ({
      category,
      score: scores.score,
      maxScore: scores.maxScore,
      percentage: (scores.score / scores.maxScore) * 100
    })
  );

  // Get next level data
  const nextLevel = currentLevel < 4 ? levels[currentLevel + 1] : null;
  const nextNextLevel = currentLevel < 3 ? levels[currentLevel + 2] : null;

  // Generate recommendations based on scores
  const recommendations = generateRecommendations(currentLevel, categoryScoreArray);

  return {
    currentLevel,
    score: totalScore,
    maxScore: maxPossibleScore,
    categoryScores: categoryScoreArray,
    recommendations,
    nextLevelBenefits: nextLevel?.benefits || [],
    nextNextLevelBenefits: nextNextLevel?.benefits || []
  };
}

function generateRecommendations(level: number, categoryScores: CategoryScore[]): string[] {
  const recommendations: string[] = [];
  const currentLevelData = levels[level];

  // Add next steps from current level
  recommendations.push(...currentLevelData.nextSteps);

  // Add category-specific recommendations for low-scoring areas
  categoryScores
    .filter(cat => cat.percentage < 50)
    .forEach(cat => {
      switch (cat.category) {
        case 'Strategy':
          recommendations.push('Develop a clear AI strategy aligned with your mission');
          break;
        case 'Capacity':
          recommendations.push('Invest in AI training for your team');
          break;
        case 'Governance':
          recommendations.push('Create AI use policies and ethical guidelines');
          break;
        case 'Investment':
          recommendations.push('Allocate budget for AI tools and infrastructure');
          break;
        case 'Impact':
          recommendations.push('Pilot AI in high-impact program areas');
          break;
        case 'Measurement':
          recommendations.push('Establish metrics to track AI effectiveness');
          break;
      }
    });

  return recommendations.slice(0, 5); // Return top 5 recommendations
}