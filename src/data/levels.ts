import { Level } from '../types';

export const levels: Level[] = [
  {
    level: 0,
    name: "AI Unaware",
    description: "Organization has minimal or no awareness of AI capabilities and potential applications",
    color: "#ef4444",
    characteristics: [
      "No AI tools in use",
      "Limited awareness of AI potential",
      "Manual processes dominate operations",
      "No AI strategy or discussion"
    ],
    benefits: [],
    nextSteps: [
      "Attend AI awareness workshops or webinars",
      "Identify 1-2 simple AI tools to pilot (e.g., ChatGPT for drafting)",
      "Form an AI exploration committee",
      "Survey staff on current pain points that AI might address"
    ],
    examples: [
      "Small grassroots org using only email and spreadsheets",
      "Traditional charity with paper-based processes",
      "Community center with no digital transformation plans"
    ]
  },
  {
    level: 1,
    name: "AI Aware",
    description: "Organization recognizes AI potential and has begun experimenting with basic tools",
    color: "#f59e0b",
    characteristics: [
      "Some staff using consumer AI tools (ChatGPT, etc.)",
      "Informal AI experimentation",
      "Growing awareness of AI benefits",
      "No formal AI policies or training"
    ],
    benefits: [
      { category: "time", metric: "Admin tasks", value: "10-15%", description: "Time saved on routine writing and research" },
      { category: "cost", metric: "Efficiency gains", value: "$5-10K/year", description: "Reduced time on manual tasks" },
      { category: "impact", metric: "Staff satisfaction", value: "+20%", description: "Reduced mundane work burden" }
    ],
    nextSteps: [
      "Create basic AI use guidelines",
      "Provide AI literacy training for all staff",
      "Pilot AI tools in 2-3 departments",
      "Document successful AI use cases"
    ],
    examples: [
      "Nonprofit where program staff use ChatGPT for grant writing",
      "Food bank using AI for volunteer scheduling suggestions",
      "Museum with staff experimenting with AI image tools"
    ]
  },
  {
    level: 2,
    name: "AI Engaged",
    description: "Organization has integrated AI tools into multiple workflows with measurable impact",
    color: "#10b981",
    characteristics: [
      "AI tools integrated in 3+ departments",
      "Formal AI training programs",
      "Clear AI use policies",
      "Measuring AI impact on outcomes"
    ],
    benefits: [
      { category: "time", metric: "Program delivery", value: "25-30%", description: "Faster service delivery and response times" },
      { category: "revenue", metric: "Fundraising", value: "+15-20%", description: "AI-enhanced donor engagement" },
      { category: "cost", metric: "Operations", value: "$25-50K/year", description: "Reduced operational costs" },
      { category: "impact", metric: "Beneficiary reach", value: "+30%", description: "Serve more people with same resources" }
    ],
    nextSteps: [
      "Develop comprehensive AI strategy",
      "Invest in AI infrastructure and tools",
      "Create AI center of excellence",
      "Partner with tech providers for custom solutions"
    ],
    examples: [
      "Health clinic using AI for patient scheduling and triage",
      "Education nonprofit with AI-powered tutoring assistance",
      "Environmental org using AI for data analysis and reporting"
    ]
  },
  {
    level: 3,
    name: "AI Integrated",
    description: "AI is embedded across the organization with custom solutions and strategic alignment",
    color: "#3b82f6",
    characteristics: [
      "AI embedded in core operations",
      "Custom AI solutions deployed",
      "Data-driven decision making",
      "AI skills part of hiring criteria"
    ],
    benefits: [
      { category: "time", metric: "Overall efficiency", value: "40-50%", description: "Major automation of routine work" },
      { category: "revenue", metric: "Total revenue", value: "+25-35%", description: "AI-driven growth strategies" },
      { category: "cost", metric: "Cost per outcome", value: "-30-40%", description: "Dramatically reduced unit costs" },
      { category: "impact", metric: "Mission effectiveness", value: "+50%", description: "Significantly enhanced impact metrics" }
    ],
    nextSteps: [
      "Develop proprietary AI models",
      "Share AI learnings with sector",
      "Explore AI partnerships and ventures",
      "Measure and optimize AI ROI continuously"
    ],
    examples: [
      "Homeless services org with AI-powered coordinated entry",
      "International NGO using AI for crisis response",
      "Foundation with AI-driven grantmaking processes"
    ]
  },
  {
    level: 4,
    name: "AI Leader",
    description: "Organization pioneers AI innovation in the nonprofit sector and shares knowledge widely",
    color: "#8b5cf6",
    characteristics: [
      "Developing cutting-edge AI solutions",
      "Teaching other nonprofits",
      "Contributing to AI ethics discussions",
      "AI is core to strategy and culture"
    ],
    benefits: [
      { category: "time", metric: "Innovation cycle", value: "60-70%", description: "Rapid development and deployment" },
      { category: "revenue", metric: "Diverse revenue", value: "+40-50%", description: "New AI-enabled revenue streams" },
      { category: "cost", metric: "Scaled impact", value: "10x", description: "Exponential impact per dollar" },
      { category: "impact", metric: "Sector influence", value: "Leader", description: "Setting standards for nonprofit AI use" }
    ],
    nextSteps: [
      "Launch AI innovation lab",
      "Publish AI best practices",
      "Advocate for responsible AI policy",
      "Incubate AI solutions for sector"
    ],
    examples: [
      "Tech-forward charity creating open-source AI tools",
      "Research institute pioneering AI for social good",
      "Large nonprofit with dedicated AI research team"
    ]
  }
];