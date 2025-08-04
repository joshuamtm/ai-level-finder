import { Question } from '../types';

export const questions: Question[] = [
  // Fundraising
  {
    id: 'q1',
    text: 'How does your team currently track donor relationships?',
    type: 'single',
    category: 'Fundraising',
    weight: 2,
    options: [
      { id: 'q1-a', text: 'Paper files or basic spreadsheets', points: 0 },
      { id: 'q1-b', text: 'Simple donor database (like Excel with formulas)', points: 1 },
      { id: 'q1-c', text: 'Dedicated donor software with basic features', points: 2 },
      { id: 'q1-d', text: 'CRM that suggests best times to contact donors', points: 3 },
      { id: 'q1-e', text: 'System that predicts donor behavior and automates outreach', points: 4 }
    ]
  },
  {
    id: 'q2',
    text: 'How do you create fundraising emails and appeals?',
    type: 'single',
    category: 'Fundraising',
    weight: 2,
    options: [
      { id: 'q2-a', text: 'Write each one from scratch', points: 0 },
      { id: 'q2-b', text: 'Use basic templates we update manually', points: 1 },
      { id: 'q2-c', text: 'Email tool with simple personalization (like names)', points: 2 },
      { id: 'q2-d', text: 'System that customizes content based on donor history', points: 3 },
      { id: 'q2-e', text: 'Smart tools that write and test different versions automatically', points: 4 }
    ]
  },
  {
    id: 'q3',
    text: 'How do you identify potential major donors?',
    type: 'single',
    category: 'Fundraising',
    weight: 2,
    options: [
      { id: 'q3-a', text: 'Personal knowledge and manual research', points: 0 },
      { id: 'q3-b', text: 'Basic giving history reports', points: 1 },
      { id: 'q3-c', text: 'Database queries to find patterns', points: 2 },
      { id: 'q3-d', text: 'Tools that score donor potential automatically', points: 3 },
      { id: 'q3-e', text: 'AI that predicts giving capacity and interests', points: 4 }
    ]
  },
  {
    id: 'q4',
    text: 'How do you measure fundraising campaign success?',
    type: 'single',
    category: 'Fundraising',
    weight: 2,
    options: [
      { id: 'q4-a', text: 'Count total donations after campaign ends', points: 0 },
      { id: 'q4-b', text: 'Track basic metrics in spreadsheets', points: 1 },
      { id: 'q4-c', text: 'Dashboard showing key performance numbers', points: 2 },
      { id: 'q4-d', text: 'Real-time analytics with trend predictions', points: 3 },
      { id: 'q4-e', text: 'AI insights recommending strategy adjustments', points: 4 }
    ]
  },
  // Program Delivery  
  {
    id: 'q5',
    text: 'How do you track program participant progress?',
    type: 'single',
    category: 'Program Delivery',
    weight: 2,
    options: [
      { id: 'q5-a', text: 'Paper forms and manual filing', points: 0 },
      { id: 'q5-b', text: 'Basic spreadsheets with participant data', points: 1 },
      { id: 'q5-c', text: 'Database with standard progress reports', points: 2 },
      { id: 'q5-d', text: 'System that flags at-risk participants automatically', points: 3 },
      { id: 'q5-e', text: 'AI predicting outcomes and suggesting interventions', points: 4 }
    ]
  },
  {
    id: 'q6',
    text: 'How do you match participants to services?',
    type: 'single',
    category: 'Program Delivery',
    weight: 2,
    options: [
      { id: 'q6-a', text: 'Staff knowledge and manual assignment', points: 0 },
      { id: 'q6-b', text: 'Basic eligibility checklists', points: 1 },
      { id: 'q6-c', text: 'Rule-based matching system', points: 2 },
      { id: 'q6-d', text: 'Smart matching based on past success patterns', points: 3 },
      { id: 'q6-e', text: 'AI optimizing matches for best outcomes', points: 4 }
    ]
  },
  {
    id: 'q7',
    text: 'How do you collect participant feedback?',
    type: 'single',
    category: 'Program Delivery',
    weight: 2,
    options: [
      { id: 'q7-a', text: 'Paper surveys collected occasionally', points: 0 },
      { id: 'q7-b', text: 'Online forms we check manually', points: 1 },
      { id: 'q7-c', text: 'Regular digital surveys with basic analysis', points: 2 },
      { id: 'q7-d', text: 'Continuous feedback with sentiment tracking', points: 3 },
      { id: 'q7-e', text: 'AI analyzing feedback to predict satisfaction', points: 4 }
    ]
  },
  {
    id: 'q8',
    text: 'How do you measure program impact?',
    type: 'single',
    category: 'Program Delivery',
    weight: 2,
    options: [
      { id: 'q8-a', text: 'Annual counts of people served', points: 0 },
      { id: 'q8-b', text: 'Basic before/after comparisons', points: 1 },
      { id: 'q8-c', text: 'Structured outcome tracking system', points: 2 },
      { id: 'q8-d', text: 'Predictive models showing likely impact', points: 3 },
      { id: 'q8-e', text: 'AI analyzing complex factors affecting outcomes', points: 4 }
    ]
  },
  // Communications & Advocacy
  {
    id: 'q9',
    text: 'How do you create content for different audiences?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q9-a', text: 'One-size-fits-all messaging', points: 0 },
      { id: 'q9-b', text: 'Manually adjust for major audience groups', points: 1 },
      { id: 'q9-c', text: 'Templates for different audience segments', points: 2 },
      { id: 'q9-d', text: 'Tools that help customize content automatically', points: 3 },
      { id: 'q9-e', text: 'AI creating personalized content for each segment', points: 4 }
    ]
  },
  {
    id: 'q10',
    text: 'How do you track media coverage and public sentiment?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q10-a', text: 'Manual Google searches when needed', points: 0 },
      { id: 'q10-b', text: 'Google Alerts for organization name', points: 1 },
      { id: 'q10-c', text: 'Media monitoring service with reports', points: 2 },
      { id: 'q10-d', text: 'Real-time sentiment analysis dashboards', points: 3 },
      { id: 'q10-e', text: 'AI predicting media trends and recommending responses', points: 4 }
    ]
  },
  {
    id: 'q11',
    text: 'How do you manage social media presence?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q11-a', text: 'Post manually when we remember', points: 0 },
      { id: 'q11-b', text: 'Basic content calendar in spreadsheet', points: 1 },
      { id: 'q11-c', text: 'Scheduling tool for regular posts', points: 2 },
      { id: 'q11-d', text: 'Analytics-driven posting with optimization', points: 3 },
      { id: 'q11-e', text: 'AI suggesting content and optimal timing', points: 4 }
    ]
  },
  {
    id: 'q12',
    text: 'How do you engage supporters in advocacy campaigns?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q12-a', text: 'Email blasts to entire list', points: 0 },
      { id: 'q12-b', text: 'Basic segmentation by interest area', points: 1 },
      { id: 'q12-c', text: 'Targeted campaigns with tracking', points: 2 },
      { id: 'q12-d', text: 'Personalized action alerts based on history', points: 3 },
      { id: 'q12-e', text: 'AI optimizing engagement strategies per supporter', points: 4 }
    ]
  },
  // Operations
  {
    id: 'q13',
    text: 'How do you handle volunteer scheduling?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q13-a', text: 'Phone calls and paper calendars', points: 0 },
      { id: 'q13-b', text: 'Shared spreadsheet volunteers can view', points: 1 },
      { id: 'q13-c', text: 'Online scheduling system', points: 2 },
      { id: 'q13-d', text: 'Smart scheduling matching skills to needs', points: 3 },
      { id: 'q13-e', text: 'AI optimizing schedules and predicting no-shows', points: 4 }
    ]
  },
  {
    id: 'q14',
    text: 'How do you onboard new staff or volunteers?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q14-a', text: 'In-person orientation when available', points: 0 },
      { id: 'q14-b', text: 'Standard packet of documents to read', points: 1 },
      { id: 'q14-c', text: 'Online training modules', points: 2 },
      { id: 'q14-d', text: 'Personalized learning paths', points: 3 },
      { id: 'q14-e', text: 'AI-guided onboarding adapting to learning pace', points: 4 }
    ]
  },
  {
    id: 'q15',
    text: 'How do you manage internal knowledge and procedures?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q15-a', text: 'Printed manuals and word-of-mouth', points: 0 },
      { id: 'q15-b', text: 'Shared drive with documents', points: 1 },
      { id: 'q15-c', text: 'Wiki or knowledge base system', points: 2 },
      { id: 'q15-d', text: 'Searchable system with version control', points: 3 },
      { id: 'q15-e', text: 'AI assistant answering procedure questions', points: 4 }
    ]
  },
  // Finance
  {
    id: 'q16',
    text: 'How do you create financial reports?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q16-a', text: 'Manual calculations and typed reports', points: 0 },
      { id: 'q16-b', text: 'Excel with basic formulas', points: 1 },
      { id: 'q16-c', text: 'Accounting software with standard reports', points: 2 },
      { id: 'q16-d', text: 'Automated reporting with visualizations', points: 3 },
      { id: 'q16-e', text: 'AI generating insights and recommendations', points: 4 }
    ]
  },
  {
    id: 'q17',
    text: 'How do you forecast budget needs?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q17-a', text: 'Best guess based on last year', points: 0 },
      { id: 'q17-b', text: 'Simple percentage increases', points: 1 },
      { id: 'q17-c', text: 'Trend analysis in spreadsheets', points: 2 },
      { id: 'q17-d', text: 'Statistical modeling of multiple factors', points: 3 },
      { id: 'q17-e', text: 'AI predicting needs based on complex patterns', points: 4 }
    ]
  },
  {
    id: 'q18',
    text: 'How do you track grant spending and compliance?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q18-a', text: 'Manual tracking in separate files', points: 0 },
      { id: 'q18-b', text: 'Spreadsheet with grant categories', points: 1 },
      { id: 'q18-c', text: 'Accounting system with grant codes', points: 2 },
      { id: 'q18-d', text: 'Automated compliance checking', points: 3 },
      { id: 'q18-e', text: 'AI flagging potential issues proactively', points: 4 }
    ]
  },
  {
    id: 'q19',
    text: 'How do you identify cost-saving opportunities?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q19-a', text: 'Review expenses when budget is tight', points: 0 },
      { id: 'q19-b', text: 'Annual expense review', points: 1 },
      { id: 'q19-c', text: 'Regular analysis of major categories', points: 2 },
      { id: 'q19-d', text: 'Automated anomaly detection', points: 3 },
      { id: 'q19-e', text: 'AI recommending optimization strategies', points: 4 }
    ]
  },
  // AI Strategy & Governance
  {
    id: 'q20',
    text: 'Does your organization have formal AI policies or guidelines?',
    type: 'single',
    category: 'AI Strategy',
    weight: 3,
    options: [
      { id: 'q20-a', text: 'No policies exist', points: 0 },
      { id: 'q20-b', text: 'Informal guidelines only', points: 1 },
      { id: 'q20-c', text: 'Basic written policies', points: 2 },
      { id: 'q20-d', text: 'Comprehensive AI governance framework', points: 3 },
      { id: 'q20-e', text: 'Advanced policies that we share with others', points: 4 }
    ]
  }
];