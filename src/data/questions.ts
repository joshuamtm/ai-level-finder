import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 'q1',
    text: 'How would you describe your organization\'s current use of AI tools?',
    type: 'single',
    category: 'Current State',
    weight: 3,
    options: [
      { id: 'q1-a', text: 'We don\'t use any AI tools', points: 0 },
      { id: 'q1-b', text: 'A few staff members experiment with AI on their own', points: 1 },
      { id: 'q1-c', text: 'We have official AI tools in 1-2 departments', points: 2 },
      { id: 'q1-d', text: 'AI tools are used across multiple departments', points: 3 },
      { id: 'q1-e', text: 'AI is integral to our operations', points: 4 }
    ]
  },
  {
    id: 'q2',
    text: 'Does your organization have formal AI policies or guidelines?',
    type: 'single',
    category: 'Governance',
    weight: 2,
    options: [
      { id: 'q2-a', text: 'No policies exist', points: 0 },
      { id: 'q2-b', text: 'Informal guidelines only', points: 1 },
      { id: 'q2-c', text: 'Basic written policies', points: 2 },
      { id: 'q2-d', text: 'Comprehensive AI governance framework', points: 3 },
      { id: 'q2-e', text: 'Advanced policies that we share with others', points: 4 }
    ]
  },
  {
    id: 'q3',
    text: 'How much has AI impacted your program delivery?',
    type: 'single',
    category: 'Impact',
    weight: 3,
    options: [
      { id: 'q3-a', text: 'No impact', points: 0 },
      { id: 'q3-b', text: 'Minor efficiency gains', points: 1 },
      { id: 'q3-c', text: 'Moderate improvements in some areas', points: 2 },
      { id: 'q3-d', text: 'Significant enhancement of services', points: 3 },
      { id: 'q3-e', text: 'Transformational impact on how we serve', points: 4 }
    ]
  },
  {
    id: 'q4',
    text: 'What AI training has your staff received?',
    type: 'single',
    category: 'Capacity',
    weight: 2,
    options: [
      { id: 'q4-a', text: 'No AI training', points: 0 },
      { id: 'q4-b', text: 'Self-directed learning only', points: 1 },
      { id: 'q4-c', text: 'Basic AI literacy workshops', points: 2 },
      { id: 'q4-d', text: 'Comprehensive AI skills training', points: 3 },
      { id: 'q4-e', text: 'Advanced training + we train others', points: 4 }
    ]
  },
  {
    id: 'q5',
    text: 'How does your organization approach AI strategy?',
    type: 'single',
    category: 'Strategy',
    weight: 2,
    options: [
      { id: 'q5-a', text: 'No AI strategy', points: 0 },
      { id: 'q5-b', text: 'Ad hoc experimentation', points: 1 },
      { id: 'q5-c', text: 'AI included in tech planning', points: 2 },
      { id: 'q5-d', text: 'Dedicated AI strategy and roadmap', points: 3 },
      { id: 'q5-e', text: 'AI central to organizational strategy', points: 4 }
    ]
  },
  {
    id: 'q6',
    text: 'What\'s your annual AI tool/technology investment?',
    type: 'single',
    category: 'Investment',
    weight: 1,
    options: [
      { id: 'q6-a', text: '$0', points: 0 },
      { id: 'q6-b', text: 'Under $1,000', points: 1 },
      { id: 'q6-c', text: '$1,000 - $10,000', points: 2 },
      { id: 'q6-d', text: '$10,000 - $50,000', points: 3 },
      { id: 'q6-e', text: 'Over $50,000', points: 4 }
    ]
  },
  {
    id: 'q7',
    text: 'How do you measure AI\'s impact on your mission?',
    type: 'single',
    category: 'Measurement',
    weight: 2,
    options: [
      { id: 'q7-a', text: 'We don\'t measure AI impact', points: 0 },
      { id: 'q7-b', text: 'Anecdotal observations only', points: 1 },
      { id: 'q7-c', text: 'Basic metrics tracking', points: 2 },
      { id: 'q7-d', text: 'Comprehensive impact measurement', points: 3 },
      { id: 'q7-e', text: 'Advanced analytics with published results', points: 4 }
    ]
  }
];