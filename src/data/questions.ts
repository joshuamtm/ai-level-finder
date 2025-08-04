import { Question } from '../types';

export const questions: Question[] = [
  // Stakeholder Engagement & Development
  {
    id: 'q1',
    text: 'How does your organization track relationships with key supporters (donors, members, funders, partners)?',
    type: 'single',
    category: 'Stakeholder Engagement',
    weight: 2,
    options: [
      { id: 'q1-a', text: 'Paper files, business cards, or basic spreadsheets', points: 0 },
      { id: 'q1-b', text: 'Simple database or CRM with contact information', points: 1 },
      { id: 'q1-c', text: 'CRM system that tracks interactions and engagement history', points: 2 },
      { id: 'q1-d', text: 'Smart system that suggests optimal contact timing and methods', points: 3 },
      { id: 'q1-e', text: 'AI-powered system that predicts engagement and automates personalized outreach', points: 4 }
    ]
  },
  {
    id: 'q2',
    text: 'How do you create communications to your key audiences (newsletters, appeals, updates)?',
    type: 'single',
    category: 'Stakeholder Engagement',
    weight: 2,
    options: [
      { id: 'q2-a', text: 'Write each communication from scratch', points: 0 },
      { id: 'q2-b', text: 'Use basic templates that we update manually', points: 1 },
      { id: 'q2-c', text: 'Email platform with simple personalization (names, basic segments)', points: 2 },
      { id: 'q2-d', text: 'System that customizes content based on recipient interests/history', points: 3 },
      { id: 'q2-e', text: 'AI tools that help write, test, and optimize different message versions', points: 4 }
    ]
  },
  {
    id: 'q3',
    text: 'How do you identify and prioritize potential new supporters or partners?',
    type: 'single',
    category: 'Stakeholder Engagement',
    weight: 2,
    options: [
      { id: 'q3-a', text: 'Personal networks and manual research', points: 0 },
      { id: 'q3-b', text: 'Basic prospect research using Google and LinkedIn', points: 1 },
      { id: 'q3-c', text: 'Database queries to find patterns in existing supporters', points: 2 },
      { id: 'q3-d', text: 'Tools that score and rank prospects automatically', points: 3 },
      { id: 'q3-e', text: 'AI that predicts giving/engagement capacity and optimal approaches', points: 4 }
    ]
  },
  {
    id: 'q4',
    text: 'How do you measure the success of your outreach and engagement efforts?',
    type: 'single',
    category: 'Stakeholder Engagement',
    weight: 2,
    options: [
      { id: 'q4-a', text: 'Count total responses or donations after campaigns end', points: 0 },
      { id: 'q4-b', text: 'Track basic metrics in spreadsheets', points: 1 },
      { id: 'q4-c', text: 'Dashboard showing key performance indicators', points: 2 },
      { id: 'q4-d', text: 'Real-time analytics with trend predictions', points: 3 },
      { id: 'q4-e', text: 'AI insights that recommend strategy adjustments', points: 4 }
    ]
  },
  // Program & Service Delivery
  {
    id: 'q5',
    text: 'How do you track the people, projects, or initiatives your organization serves?',
    type: 'single',
    category: 'Mission Delivery',
    weight: 2,
    options: [
      { id: 'q5-a', text: 'Paper files and manual records', points: 0 },
      { id: 'q5-b', text: 'Basic spreadsheets or simple databases', points: 1 },
      { id: 'q5-c', text: 'Dedicated system with standardized progress tracking', points: 2 },
      { id: 'q5-d', text: 'System that automatically flags issues or opportunities', points: 3 },
      { id: 'q5-e', text: 'AI that predicts outcomes and suggests interventions', points: 4 }
    ]
  },
  {
    id: 'q6',
    text: 'How do you match resources to needs (clients to services, grants to projects, etc.)?',
    type: 'single',
    category: 'Mission Delivery',
    weight: 2,
    options: [
      { id: 'q6-a', text: 'Staff knowledge and manual decision-making', points: 0 },
      { id: 'q6-b', text: 'Basic criteria checklists or eligibility requirements', points: 1 },
      { id: 'q6-c', text: 'Rule-based matching system or workflow', points: 2 },
      { id: 'q6-d', text: 'Smart matching based on historical success patterns', points: 3 },
      { id: 'q6-e', text: 'AI optimizing matches for best outcomes and efficiency', points: 4 }
    ]
  },
  {
    id: 'q7',
    text: 'How do you collect feedback from the people or communities you serve?',
    type: 'single',
    category: 'Mission Delivery',
    weight: 2,
    options: [
      { id: 'q7-a', text: 'Informal conversations or occasional paper surveys', points: 0 },
      { id: 'q7-b', text: 'Online forms or surveys we review manually', points: 1 },
      { id: 'q7-c', text: 'Regular digital feedback collection with basic analysis', points: 2 },
      { id: 'q7-d', text: 'Continuous feedback with sentiment tracking and alerts', points: 3 },
      { id: 'q7-e', text: 'AI analyzing feedback to predict satisfaction and suggest improvements', points: 4 }
    ]
  },
  {
    id: 'q8',
    text: 'How do you measure and report on your organization\'s impact or outcomes?',
    type: 'single',
    category: 'Mission Delivery',
    weight: 2,
    options: [
      { id: 'q8-a', text: 'Annual counts of activities or people served', points: 0 },
      { id: 'q8-b', text: 'Basic before/after comparisons or simple metrics', points: 1 },
      { id: 'q8-c', text: 'Structured outcome tracking with regular reporting', points: 2 },
      { id: 'q8-d', text: 'Predictive models showing likely future impact', points: 3 },
      { id: 'q8-e', text: 'AI analyzing complex factors to optimize and predict outcomes', points: 4 }
    ]
  },
  // Communications & Marketing
  {
    id: 'q9',
    text: 'How do you create content for different audiences (website, social media, publications)?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q9-a', text: 'One-size-fits-all messaging across all channels', points: 0 },
      { id: 'q9-b', text: 'Manually adjust content for major audience groups', points: 1 },
      { id: 'q9-c', text: 'Use templates for different audience segments', points: 2 },
      { id: 'q9-d', text: 'Tools that help customize content automatically for different channels', points: 3 },
      { id: 'q9-e', text: 'AI creating personalized content for each audience segment', points: 4 }
    ]
  },
  {
    id: 'q10',
    text: 'How do you monitor your organization\'s reputation and public mentions?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q10-a', text: 'Manual Google searches when we think about it', points: 0 },
      { id: 'q10-b', text: 'Google Alerts for organization name', points: 1 },
      { id: 'q10-c', text: 'Media monitoring service with regular reports', points: 2 },
      { id: 'q10-d', text: 'Real-time sentiment analysis and reputation dashboards', points: 3 },
      { id: 'q10-e', text: 'AI predicting reputation trends and recommending responses', points: 4 }
    ]
  },
  {
    id: 'q11',
    text: 'How do you manage your organization\'s social media and online presence?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q11-a', text: 'Post manually when we remember or have news', points: 0 },
      { id: 'q11-b', text: 'Basic content calendar in spreadsheet or simple tool', points: 1 },
      { id: 'q11-c', text: 'Social media scheduling tool with basic analytics', points: 2 },
      { id: 'q11-d', text: 'Analytics-driven posting with performance optimization', points: 3 },
      { id: 'q11-e', text: 'AI suggesting content topics, timing, and engagement strategies', points: 4 }
    ]
  },
  {
    id: 'q12',
    text: 'How do you engage your audience in advocacy, campaigns, or calls to action?',
    type: 'single',
    category: 'Communications',
    weight: 2,
    options: [
      { id: 'q12-a', text: 'Mass emails or posts to everyone on our lists', points: 0 },
      { id: 'q12-b', text: 'Basic segmentation by interest or location', points: 1 },
      { id: 'q12-c', text: 'Targeted campaigns with engagement tracking', points: 2 },
      { id: 'q12-d', text: 'Personalized calls to action based on past engagement', points: 3 },
      { id: 'q12-e', text: 'AI optimizing engagement strategies for each supporter', points: 4 }
    ]
  },
  // Operations & Human Resources
  {
    id: 'q13',
    text: 'How do you manage staff schedules, volunteer coordination, or resource allocation?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q13-a', text: 'Phone calls, emails, and paper calendars', points: 0 },
      { id: 'q13-b', text: 'Shared digital calendar or basic scheduling tool', points: 1 },
      { id: 'q13-c', text: 'Online scheduling system with automated reminders', points: 2 },
      { id: 'q13-d', text: 'Smart scheduling that matches skills/availability to needs', points: 3 },
      { id: 'q13-e', text: 'AI optimizing schedules and predicting staffing needs', points: 4 }
    ]
  },
  {
    id: 'q14',
    text: 'How do you onboard new staff, board members, or volunteers?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q14-a', text: 'In-person meetings and paper handouts when available', points: 0 },
      { id: 'q14-b', text: 'Standard packet of documents and basic orientation', points: 1 },
      { id: 'q14-c', text: 'Online training modules or digital orientation', points: 2 },
      { id: 'q14-d', text: 'Personalized learning paths based on role and experience', points: 3 },
      { id: 'q14-e', text: 'AI-guided onboarding that adapts to individual learning pace', points: 4 }
    ]
  },
  {
    id: 'q15',
    text: 'How do you manage organizational knowledge, policies, and procedures?',
    type: 'single',
    category: 'Operations',
    weight: 2,
    options: [
      { id: 'q15-a', text: 'Printed manuals, email, and word-of-mouth', points: 0 },
      { id: 'q15-b', text: 'Shared drive with documents and folders', points: 1 },
      { id: 'q15-c', text: 'Wiki, intranet, or knowledge base system', points: 2 },
      { id: 'q15-d', text: 'Searchable system with version control and permissions', points: 3 },
      { id: 'q15-e', text: 'AI assistant that answers policy questions and suggests updates', points: 4 }
    ]
  },
  // Finance & Administration
  {
    id: 'q16',
    text: 'How do you create financial reports and track organizational finances?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q16-a', text: 'Manual calculations with basic accounting or spreadsheets', points: 0 },
      { id: 'q16-b', text: 'Accounting software with standard report templates', points: 1 },
      { id: 'q16-c', text: 'Automated reporting with customizable dashboards', points: 2 },
      { id: 'q16-d', text: 'Real-time financial tracking with automated alerts', points: 3 },
      { id: 'q16-e', text: 'AI generating financial insights and strategic recommendations', points: 4 }
    ]
  },
  {
    id: 'q17',
    text: 'How do you plan budgets and forecast future financial needs?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q17-a', text: 'Best guess based on last year\'s numbers', points: 0 },
      { id: 'q17-b', text: 'Simple percentage increases or basic projections', points: 1 },
      { id: 'q17-c', text: 'Trend analysis using historical data in spreadsheets', points: 2 },
      { id: 'q17-d', text: 'Statistical modeling considering multiple variables', points: 3 },
      { id: 'q17-e', text: 'AI predicting financial needs based on complex patterns', points: 4 }
    ]
  },
  {
    id: 'q18',
    text: 'How do you track grant spending, contracts, or other restricted funds?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q18-a', text: 'Manual tracking in separate spreadsheets or files', points: 0 },
      { id: 'q18-b', text: 'Accounting system with project or fund codes', points: 1 },
      { id: 'q18-c', text: 'Dedicated grant management or project tracking system', points: 2 },
      { id: 'q18-d', text: 'Automated compliance checking and reporting', points: 3 },
      { id: 'q18-e', text: 'AI flagging potential compliance issues before they occur', points: 4 }
    ]
  },
  {
    id: 'q19',
    text: 'How do you identify opportunities to reduce costs or improve efficiency?',
    type: 'single',
    category: 'Finance',
    weight: 2,
    options: [
      { id: 'q19-a', text: 'Review expenses only when budget is tight', points: 0 },
      { id: 'q19-b', text: 'Annual budget review looking for obvious savings', points: 1 },
      { id: 'q19-c', text: 'Regular analysis of spending patterns and trends', points: 2 },
      { id: 'q19-d', text: 'Automated alerts for unusual spending or budget variances', points: 3 },
      { id: 'q19-e', text: 'AI recommending cost optimization and efficiency strategies', points: 4 }
    ]
  },
  // Technology Strategy & Governance
  {
    id: 'q20',
    text: 'How does your organization approach new technology adoption and AI tools?',
    type: 'single',
    category: 'Technology Strategy',
    weight: 3,
    options: [
      { id: 'q20-a', text: 'No formal approach - use what we\'ve always used', points: 0 },
      { id: 'q20-b', text: 'Ad hoc adoption when staff discover new tools', points: 1 },
      { id: 'q20-c', text: 'Basic guidelines for evaluating and implementing new technology', points: 2 },
      { id: 'q20-d', text: 'Comprehensive technology strategy with evaluation criteria', points: 3 },
      { id: 'q20-e', text: 'Advanced tech governance framework that we share with other organizations', points: 4 }
    ]
  }
];