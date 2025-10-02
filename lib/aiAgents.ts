// AI Agents Configuration based on the AI Discovery Document
export interface AIAgent {
  id: string;
  name: string;
  department: string;
  type: 'quick-win' | 'big-swing';
  status: 'active' | 'planned' | 'in-development';
  description: string;
  impact: {
    timeSaved: string;
    costSaved: number;
    efficiency: string;
  };
  workflow?: string[];
  color: string;
}

export const AI_AGENTS: AIAgent[] = [
  // Data & Analytics
  {
    id: 'snowflake-cortex',
    name: 'Snowflake Cortex AI',
    department: 'Data',
    type: 'big-swing',
    status: 'active',
    description: 'Natural language querying across 7 platform databases',
    impact: {
      timeSaved: '1-3 weeks → instant',
      costSaved: 250000,
      efficiency: '100x faster data insights'
    },
    workflow: [
      'Receive natural language query',
      'Parse intent and entities',
      'Query across 7 platforms',
      'Generate insights',
      'Return visualization'
    ],
    color: '#06B6D4'
  },
  {
    id: 'executive-dashboard',
    name: 'AI Executive Dashboard',
    department: 'Data',
    type: 'big-swing',
    status: 'active',
    description: 'Autonomous data analysis with predictive insights',
    impact: {
      timeSaved: '20+ hrs/week',
      costSaved: 180000,
      efficiency: 'Real-time decision making'
    },
    color: '#06B6D4'
  },

  // Marketing
  {
    id: 'high-value-job-agent',
    name: 'High-Value Job Agent',
    department: 'Marketing',
    type: 'quick-win',
    status: 'active',
    description: 'Autonomously identifies and promotes premium casting calls',
    impact: {
      timeSaved: '5-day lag → instant',
      costSaved: 156000,
      efficiency: '10x promotion speed'
    },
    workflow: [
      'Scan new jobs at 8AM/2PM daily',
      'Identify brands (Toyota, Amazon, MAX)',
      'Generate creative via Canva API',
      'Distribute to social/paid channels',
      'Track performance metrics'
    ],
    color: '#10B981'
  },
  {
    id: 'agentic-marketing-suite',
    name: 'Agentic Marketing Suite',
    department: 'Marketing',
    type: 'big-swing',
    status: 'active',
    description: 'AI-powered content planning and campaign execution',
    impact: {
      timeSaved: '70% content creation time',
      costSaved: 120000,
      efficiency: '10x content velocity'
    },
    color: '#10B981'
  },
  {
    id: 'aeo-geo-agent',
    name: 'AEO/GEO Strategy Agent',
    department: 'Marketing',
    type: 'quick-win',
    status: 'active',
    description: 'Optimizes content for AI search engines',
    impact: {
      timeSaved: '8 hrs/week',
      costSaved: 45000,
      efficiency: 'New acquisition channel'
    },
    color: '#10B981'
  },

  // Sales & Customer Success
  {
    id: 'lead-qualification',
    name: 'Lead Qualification Agent',
    department: 'Sales',
    type: 'quick-win',
    status: 'active',
    description: 'Automated lead verification and scoring',
    impact: {
      timeSaved: '15 min → 3 min per lead',
      costSaved: 195000,
      efficiency: '3x more leads processed'
    },
    workflow: [
      'Receive lead from India team',
      'Verify identity via Clearbit',
      'Check industry databases',
      'Score based on patterns',
      'Route to sales team'
    ],
    color: '#7C3AED'
  },
  {
    id: 'name-verification',
    name: 'Stage Name Verification Agent',
    department: 'Customer Success',
    type: 'quick-win',
    status: 'active',
    description: 'Automated UK Spotlight name conflict resolution',
    impact: {
      timeSaved: '1 week → same day',
      costSaved: 52000,
      efficiency: '90% reduction in manual checking'
    },
    color: '#7C3AED'
  },
  {
    id: 'compliance-agent',
    name: 'Compliance Checking Agent',
    department: 'Customer Success',
    type: 'quick-win',
    status: 'active',
    description: 'Automated photo and credit verification for Spotlight',
    impact: {
      timeSaved: '18 hrs/week',
      costSaved: 48000,
      efficiency: 'Week → same day approval'
    },
    color: '#7C3AED'
  },
  {
    id: 'hubspot-agent',
    name: 'HubSpot Platform Data Agent',
    department: 'Sales',
    type: 'big-swing',
    status: 'active',
    description: 'Integrates platform usage data with CRM',
    impact: {
      timeSaved: '45 min → 5 min verification',
      costSaved: 85000,
      efficiency: 'Predictive churn prevention'
    },
    color: '#7C3AED'
  },

  // Customer Support
  {
    id: 'tier1-support',
    name: 'Tier 1 Support Agent',
    department: 'Support',
    type: 'quick-win',
    status: 'active',
    description: '24/7 automated support for basic inquiries',
    impact: {
      timeSaved: '20 hrs/week',
      costSaved: 280000,
      efficiency: '70% ticket deflection'
    },
    workflow: [
      'Receive customer inquiry',
      'Identify issue type',
      'Access knowledge base',
      'Provide resolution',
      'Escalate if needed'
    ],
    color: '#F59E0B'
  },
  {
    id: 'job-approval',
    name: 'Job Approval Agent',
    department: 'Support',
    type: 'big-swing',
    status: 'active',
    description: 'Automated job posting verification and approval',
    impact: {
      timeSaved: '2-10 min → instant',
      costSaved: 120000,
      efficiency: 'Most scalable process fixed'
    },
    color: '#F59E0B'
  },
  {
    id: 'cast-it-reach-forms',
    name: 'Cast It Reach Forms Generator',
    department: 'Support',
    type: 'quick-win',
    status: 'active',
    description: 'Converts Word docs to EasyML forms automatically',
    impact: {
      timeSaved: 'Days → hours per show',
      costSaved: 65000,
      efficiency: '200 shows/year automated'
    },
    color: '#F59E0B'
  },

  // Product & Development
  {
    id: 'ai-prd-templates',
    name: 'AI PRD Assistant',
    department: 'Product',
    type: 'quick-win',
    status: 'active',
    description: 'Enhanced PRD templates with AI research',
    impact: {
      timeSaved: '3 hrs/sprint',
      costSaved: 45000,
      efficiency: 'Fewer edge cases missed'
    },
    color: '#4F46E5'
  },
  {
    id: 'ai-dev-copilot',
    name: 'AI Development Copilot',
    department: 'Engineering',
    type: 'quick-win',
    status: 'active',
    description: 'Cursor/Claude Code for 2-3x velocity',
    impact: {
      timeSaved: '80% code generation',
      costSaved: 240000,
      efficiency: '2-4 weeks → daily releases'
    },
    color: '#4F46E5'
  },
  {
    id: 'test-generation',
    name: 'AI Test Case Generator',
    department: 'QA',
    type: 'quick-win',
    status: 'active',
    description: 'Converts requirements to Playwright tests',
    impact: {
      timeSaved: '3-5 days → 3 hours',
      costSaved: 180000,
      efficiency: '100% test automation'
    },
    workflow: [
      'Read JIRA ticket/PRD',
      'Generate test cases',
      'Create Playwright code',
      'Execute in parallel',
      'Report results'
    ],
    color: '#4F46E5'
  },

  // HR/IT/Operations
  {
    id: 'employee-bot',
    name: 'Employee HR/IT Bot',
    department: 'HR/IT',
    type: 'quick-win',
    status: 'active',
    description: '24/7 Slack-integrated employee support',
    impact: {
      timeSaved: '8 hrs/week',
      costSaved: 35000,
      efficiency: 'Level 0 support automated'
    },
    color: '#EF4444'
  },
  {
    id: 'vendor-management',
    name: 'Vendor Management Agent',
    department: 'IT',
    type: 'quick-win',
    status: 'active',
    description: 'Automated vendor tracking and renewal alerts',
    impact: {
      timeSaved: '10 hrs/week',
      costSaved: 42000,
      efficiency: 'Predictive cost management'
    },
    color: '#EF4444'
  }
];

// Department configurations
export const DEPARTMENTS = [
  {
    id: 'data',
    name: 'Data & Analytics',
    color: '#06B6D4',
    icon: '📊',
    beforeState: '1-3 week data requests',
    afterState: 'Instant insights via natural language',
    agents: ['snowflake-cortex', 'executive-dashboard']
  },
  {
    id: 'marketing',
    name: 'Marketing',
    color: '#10B981',
    icon: '🚀',
    beforeState: '5-day promotion lag',
    afterState: 'Real-time campaign automation',
    agents: ['high-value-job-agent', 'agentic-marketing-suite', 'aeo-geo-agent']
  },
  {
    id: 'sales',
    name: 'Sales & Success',
    color: '#7C3AED',
    icon: '💼',
    beforeState: '15 min manual verification',
    afterState: '3 min AI qualification',
    agents: ['lead-qualification', 'name-verification', 'compliance-agent', 'hubspot-agent']
  },
  {
    id: 'support',
    name: 'Customer Support',
    color: '#F59E0B',
    icon: '🎯',
    beforeState: 'Manual ticket handling',
    afterState: '70% deflection, 24/7 service',
    agents: ['tier1-support', 'job-approval', 'cast-it-reach-forms']
  },
  {
    id: 'product',
    name: 'Product & Engineering',
    color: '#4F46E5',
    icon: '⚡',
    beforeState: '2-4 week releases',
    afterState: 'Daily deployments',
    agents: ['ai-prd-templates', 'ai-dev-copilot', 'test-generation']
  },
  {
    id: 'operations',
    name: 'HR/IT/Operations',
    color: '#EF4444',
    icon: '⚙️',
    beforeState: 'Manual admin tasks',
    afterState: '24/7 self-service',
    agents: ['employee-bot', 'vendor-management']
  }
];

// Platform integrations
export const PLATFORM_INTEGRATIONS = [
  {
    id: 'casting-networks',
    name: 'Casting Networks',
    users: '1.3M+ performers',
    scale: '1M+ auditions/year'
  },
  {
    id: 'spotlight',
    name: 'Spotlight UK',
    users: '60K+ performers',
    scale: 'UK industry standard'
  },
  {
    id: 'cast-it',
    name: 'Cast It Systems',
    users: '12K+ studios',
    scale: 'Every major studio'
  },
  {
    id: 'cast-it-reach',
    name: 'Cast It Reach',
    users: '8M+ candidates',
    scale: '200+ reality shows'
  },
  {
    id: 'staff-me-up',
    name: 'Staff Me Up',
    users: '350K+ crew',
    scale: '3K+ companies'
  },
  {
    id: 'casting-frontier',
    name: 'Casting Frontier',
    users: 'LA/NYC/Pacific NW',
    scale: 'Regional leader'
  },
  {
    id: 'tagmin',
    name: 'Tagmin',
    users: 'UK agents',
    scale: 'Agent management'
  }
];