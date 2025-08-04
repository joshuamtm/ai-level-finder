export interface ImpactNarrative {
  timeSaved: string;
  capabilities: string[];
  tools: string[];
}

export interface DomainImpactNarratives {
  [level: number]: ImpactNarrative;
}

export interface AllImpactNarratives {
  [domain: string]: DomainImpactNarratives;
}

export const impactNarratives: AllImpactNarratives = {
  'Stakeholder Engagement': {
    1: {
      timeSaved: "30%",
      capabilities: ["Track all supporters in one place", "Send personalized thank-you messages faster", "See basic engagement patterns"],
      tools: ["Simple CRM database", "Email templates", "Basic reports"]
    },
    2: {
      timeSaved: "50%",
      capabilities: ["Segment supporters by engagement history", "Automate acknowledgments and follow-ups", "Track campaign performance"],
      tools: ["CRM system", "Email automation", "Dashboard analytics"]
    },
    3: {
      timeSaved: "70%",
      capabilities: ["Predict supporter churn risk", "Personalize all communications", "Optimize outreach timing"],
      tools: ["Predictive analytics", "Smart segmentation", "A/B testing tools"]
    },
    4: {
      timeSaved: "85%",
      capabilities: ["AI writes first drafts of appeals", "Predict major supporter prospects", "Real-time campaign optimization"],
      tools: ["AI writing assistant", "Machine learning models", "Advanced automation"]
    }
  },
  'Mission Delivery': {
    1: {
      timeSaved: "25%",
      capabilities: ["Digital records for all activities", "Basic outcome tracking", "Simple progress monitoring"],
      tools: ["Online forms", "Digital database", "Basic reporting"]
    },
    2: {
      timeSaved: "45%",
      capabilities: ["Automated progress reports", "Self-service portals", "Outcome dashboards"],
      tools: ["Management system", "Web portals", "Report builders"]
    },
    3: {
      timeSaved: "65%",
      capabilities: ["Early warning for at-risk cases", "Predictive outcome modeling", "Resource optimization"],
      tools: ["Risk algorithms", "Impact prediction", "Smart matching"]
    },
    4: {
      timeSaved: "80%",
      capabilities: ["AI-powered intervention recommendations", "Personalized service journeys", "Complex impact analysis"],
      tools: ["AI advisor", "Machine learning platform", "Advanced analytics"]
    }
  },
  'Communications': {
    1: {
      timeSaved: "20%",
      capabilities: ["Consistent messaging across channels", "Basic email campaigns", "Content calendar"],
      tools: ["Content templates", "Email platform", "Scheduling tool"]
    },
    2: {
      timeSaved: "40%",
      capabilities: ["Multi-channel campaigns", "Engagement tracking", "Media monitoring"],
      tools: ["Marketing automation", "Analytics dashboard", "Media alerts"]
    },
    3: {
      timeSaved: "60%",
      capabilities: ["Personalized supporter journeys", "Sentiment analysis", "Campaign optimization"],
      tools: ["Journey builder", "Sentiment tracking", "Testing tools"]
    },
    4: {
      timeSaved: "75%",
      capabilities: ["AI content generation", "Predictive engagement", "Real-time response optimization"],
      tools: ["AI writer", "Predictive models", "Smart automation"]
    }
  },
  'Operations': {
    1: {
      timeSaved: "30%",
      capabilities: ["Digital staff/volunteer database", "Online scheduling", "Basic training materials"],
      tools: ["Management system", "Scheduling software", "Learning portal"]
    },
    2: {
      timeSaved: "50%",
      capabilities: ["Automated onboarding", "Skills matching", "Performance tracking"],
      tools: ["Onboarding workflows", "Skills database", "HR system"]
    },
    3: {
      timeSaved: "70%",
      capabilities: ["Predictive scheduling", "Personalized training paths", "Proactive retention"],
      tools: ["Smart scheduler", "Adaptive learning", "Retention analytics"]
    },
    4: {
      timeSaved: "85%",
      capabilities: ["AI workforce planning", "Automated knowledge base", "Predictive HR analytics"],
      tools: ["AI planner", "Smart knowledge system", "Advanced HR AI"]
    }
  },
  'Finance': {
    1: {
      timeSaved: "35%",
      capabilities: ["Automated bookkeeping", "Standard financial reports", "Basic budgeting"],
      tools: ["Accounting software", "Report templates", "Budget spreadsheets"]
    },
    2: {
      timeSaved: "55%",
      capabilities: ["Real-time financial tracking", "Grant management", "Variance analysis"],
      tools: ["Cloud accounting", "Grant tracking", "Analytics tools"]
    },
    3: {
      timeSaved: "75%",
      capabilities: ["Predictive cash flow", "Automated compliance", "Scenario planning"],
      tools: ["Forecasting models", "Compliance automation", "Planning software"]
    },
    4: {
      timeSaved: "90%",
      capabilities: ["AI financial advisor", "Anomaly detection", "Strategic recommendations"],
      tools: ["AI analytics", "Machine learning", "Strategic planning AI"]
    }
  },
  'Technology Strategy': {
    1: {
      timeSaved: "25%",
      capabilities: ["Basic technology inventory", "Simple evaluation criteria", "Informal tech planning"],
      tools: ["Spreadsheet tracking", "Basic checklists", "Planning templates"]
    },
    2: {
      timeSaved: "45%",
      capabilities: ["Structured technology roadmap", "ROI tracking", "Vendor management"],
      tools: ["Planning software", "ROI calculators", "Vendor databases"]
    },
    3: {
      timeSaved: "65%",
      capabilities: ["Predictive technology needs", "Automated vendor evaluation", "Strategic alignment"],
      tools: ["Predictive planning", "Automated scoring", "Strategy tools"]
    },
    4: {
      timeSaved: "80%",
      capabilities: ["AI-driven technology strategy", "Predictive innovation planning", "Ecosystem optimization"],
      tools: ["AI strategy tools", "Innovation platforms", "Ecosystem analytics"]
    }
  }
};