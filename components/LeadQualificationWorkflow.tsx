'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Users,
  Search,
  Shield,
  CheckCircle,
  Send,
  Clock,
  DollarSign,
  TrendingUp,
  AlertTriangle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Globe,
  UserCheck,
  Database,
  Zap
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: any;
  details: string[];
  status: 'waiting' | 'processing' | 'completed';
  output?: string;
}

export default function LeadQualificationWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'receive',
      title: 'Receive Lead',
      description: 'India team identifies potential customer',
      time: '0:00',
      icon: Users,
      details: [
        'Lead from competitor platforms',
        'Industry directories scan',
        '50-60 leads daily',
        'Multiple sources aggregated'
      ],
      status: 'waiting',
      output: 'New lead: ABC Productions'
    },
    {
      id: 'clearbit',
      title: 'Clearbit Enrichment',
      description: 'Automatic company data enrichment',
      time: '0:05',
      icon: Database,
      details: [
        'Company size & revenue',
        'Industry classification',
        'Technology stack',
        'Social media presence'
      ],
      status: 'waiting',
      output: '500+ employees, $50M revenue'
    },
    {
      id: 'verification',
      title: 'Identity Verification',
      description: 'AI verifies business legitimacy',
      time: '0:45',
      icon: Shield,
      details: [
        'Domain authority check',
        'Business registration lookup',
        'Industry database cross-reference',
        'Fraud pattern analysis'
      ],
      status: 'waiting',
      output: 'Verified: Legitimate business'
    },
    {
      id: 'scoring',
      title: 'Lead Scoring',
      description: 'AI calculates conversion probability',
      time: '1:30',
      icon: TrendingUp,
      details: [
        'Historical pattern matching',
        'Budget indicators analysis',
        'Engagement signals',
        'Fit score calculation'
      ],
      status: 'waiting',
      output: 'Score: 87/100 (High Priority)'
    },
    {
      id: 'routing',
      title: 'Smart Routing',
      description: 'Route to appropriate sales rep',
      time: '2:00',
      icon: Send,
      details: [
        'Territory assignment',
        'Rep specialization matching',
        'Workload balancing',
        'Priority queue placement'
      ],
      status: 'waiting',
      output: 'Assigned to Enterprise Sales'
    },
    {
      id: 'hubspot',
      title: 'HubSpot Update',
      description: 'Create enriched CRM record',
      time: '2:30',
      icon: CheckCircle,
      details: [
        'Full contact record created',
        'Enriched data populated',
        'Follow-up tasks generated',
        'Automated sequences triggered'
      ],
      status: 'waiting',
      output: 'CRM updated, 3 tasks created'
    }
  ];

  // Simulate workflow progression
  useEffect(() => {
    if (isPlaying && currentStep < workflowSteps.length) {
      const timer = setTimeout(() => {
        setCurrentStep((prev) => {
          if (prev >= workflowSteps.length - 1) {
            setIsPlaying(false);
            return prev;
          }
          return prev + 1;
        });
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [isPlaying, currentStep, workflowSteps.length]);

  const getStepStatus = (index: number): 'waiting' | 'processing' | 'completed' => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'processing';
    return 'waiting';
  };

  const resetWorkflow = () => {
    setCurrentStep(0);
    setIsPlaying(false);
  };

  // Example conversion result
  const conversionExample = {
    company: "ABC Productions",
    dealSize: "$125,000/year",
    timeToClose: "14 days → 7 days",
    conversionRate: "23% → 68%",
    followUpSpeed: "24 hours → 3 minutes"
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Lead Qualification & Scoring Agent</h2>
        <p className="text-gray-400">
          Transforming 15-minute manual verification into 3-minute AI-powered qualification
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-4 gap-4 mb-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-cyan-400" />
            <div>
              <p className="text-gray-400 text-sm">Process Time</p>
              <p className="text-white font-bold text-xl">3 minutes</p>
              <p className="text-red-400 text-xs line-through">15 min before</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <DollarSign className="w-8 h-8 text-green-400" />
            <div>
              <p className="text-gray-400 text-sm">Annual Savings</p>
              <p className="text-white font-bold text-xl">$195K</p>
              <p className="text-green-400 text-xs">+$350K revenue</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <Users className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-gray-400 text-sm">Leads Processed</p>
              <p className="text-white font-bold text-xl">180/day</p>
              <p className="text-purple-400 text-xs">3x increase</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-4 border border-gray-800"
        >
          <div className="flex items-center gap-3">
            <TrendingUp className="w-8 h-8 text-amber-400" />
            <div>
              <p className="text-gray-400 text-sm">Conversion Rate</p>
              <p className="text-white font-bold text-xl">68%</p>
              <p className="text-amber-400 text-xs">vs 23% manual</p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Workflow Controls */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className={`px-6 py-3 rounded-lg font-semibold transition-all flex items-center gap-2 ${
              isPlaying
                ? 'bg-red-600 hover:bg-red-700 text-white'
                : 'bg-gradient-to-r from-purple-600 to-indigo-600 hover:shadow-lg text-white'
            }`}
          >
            {isPlaying ? (
              <>
                <Pause className="w-5 h-5" />
                Pause Workflow
              </>
            ) : (
              <>
                <Play className="w-5 h-5" />
                Run Workflow
              </>
            )}
          </button>

          <button
            onClick={resetWorkflow}
            className="px-4 py-3 bg-gray-800 hover:bg-gray-700 text-gray-400 rounded-lg transition-all flex items-center gap-2"
          >
            <RotateCcw className="w-5 h-5" />
            Reset
          </button>

          <div className="flex items-center gap-2 ml-4">
            <Globe className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">India team processes 50-60 leads daily</span>
          </div>
        </div>

        <button
          onClick={() => setShowDetails(!showDetails)}
          className="text-gray-400 hover:text-white transition-colors"
        >
          {showDetails ? 'Hide' : 'Show'} Details
        </button>
      </div>

      {/* Main Workflow Visualization */}
      <div className="bg-gray-900/50 backdrop-blur-xl rounded-2xl border border-gray-800 p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-purple-500 to-indigo-600"
              initial={{ width: '0%' }}
              animate={{ width: `${((currentStep + 1) / workflowSteps.length) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Workflow Steps */}
        <div className="grid grid-cols-6 gap-4">
          {workflowSteps.map((step, index) => {
            const status = getStepStatus(index);
            const StepIcon = step.icon;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Connection Line */}
                {index < workflowSteps.length - 1 && (
                  <div
                    className={`absolute top-10 left-1/2 w-full h-0.5 ${
                      status === 'completed' ? 'bg-purple-500' : 'bg-gray-700'
                    }`}
                    style={{ transform: 'translateX(50%)' }}
                  />
                )}

                {/* Step Card */}
                <div
                  className={`relative z-10 p-4 rounded-xl border transition-all ${
                    status === 'completed'
                      ? 'bg-purple-900/20 border-purple-500'
                      : status === 'processing'
                      ? 'bg-indigo-900/20 border-indigo-500 shadow-lg shadow-indigo-500/20'
                      : 'bg-gray-800/50 border-gray-700'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        status === 'completed'
                          ? 'bg-purple-500'
                          : status === 'processing'
                          ? 'bg-gradient-to-r from-purple-500 to-indigo-600'
                          : 'bg-gray-700'
                      }`}
                      animate={status === 'processing' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(139, 92, 246, 0)',
                          '0 0 0 20px rgba(139, 92, 246, 0.2)',
                          '0 0 0 0 rgba(139, 92, 246, 0)'
                        ]
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {status === 'completed' ? (
                        <CheckCircle className="w-10 h-10 text-white" />
                      ) : (
                        <StepIcon className="w-10 h-10 text-white" />
                      )}
                    </motion.div>
                  </div>

                  {/* Title */}
                  <h3 className={`text-sm font-semibold mb-1 text-center ${
                    status === 'waiting' ? 'text-gray-500' : 'text-white'
                  }`}>
                    {step.title}
                  </h3>

                  {/* Time */}
                  <p className={`text-xs text-center mb-2 ${
                    status === 'waiting' ? 'text-gray-600' : 'text-gray-400'
                  }`}>
                    {step.time}
                  </p>

                  {/* Output */}
                  {status === 'completed' && step.output && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="mt-2 p-2 bg-purple-900/30 rounded-lg"
                    >
                      <p className="text-purple-400 text-xs text-center font-medium">
                        ✓ {step.output}
                      </p>
                    </motion.div>
                  )}
                </div>

                {/* Details Panel */}
                <AnimatePresence>
                  {showDetails && status !== 'waiting' && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-2 p-3 bg-gray-800/50 rounded-lg border border-gray-700"
                    >
                      <p className="text-gray-400 text-xs mb-2">{step.description}</p>
                      <ul className="space-y-1">
                        {step.details.map((detail, i) => (
                          <li key={i} className="text-gray-500 text-xs flex items-start gap-1">
                            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Example Result */}
        {currentStep >= workflowSteps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-r from-purple-900/20 to-indigo-900/20 rounded-xl border border-purple-500/30"
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Real Example: {conversionExample.company}
            </h4>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Deal Size</p>
                <p className="text-white font-medium">{conversionExample.dealSize}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Time to Close</p>
                <p className="text-purple-400 font-medium">{conversionExample.timeToClose}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Conversion Rate</p>
                <p className="text-green-400 font-medium">{conversionExample.conversionRate}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">First Response</p>
                <p className="text-cyan-400 font-medium">{conversionExample.followUpSpeed}</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
              <p className="text-amber-400 text-sm">
                <UserCheck className="inline w-4 h-4 mr-1" />
                AI-qualified leads have 3x higher conversion rate due to consistent scoring
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Impact Summary */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Before AI (Manual Process)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">1</span>
              </div>
              <div>
                <p className="text-gray-300">India team finds lead on competitor platform</p>
                <p className="text-red-400 text-sm">Manual discovery</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-300">Search Google for company information</p>
                <p className="text-red-400 text-sm">5 minutes per lead</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-300">Check website, LinkedIn, verify legitimacy</p>
                <p className="text-red-400 text-sm">7 minutes research</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-300">Manually enter into HubSpot</p>
                <p className="text-red-400 text-sm">3 minutes data entry</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800/50">
            <p className="text-red-400 font-semibold">Total: 15 minutes per lead</p>
            <p className="text-gray-400 text-sm">Inconsistent quality, missed opportunities</p>
          </div>
        </div>

        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">After AI (Automated)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Lead identified and submitted to system</p>
                <p className="text-green-400 text-sm">Instant processing</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Clearbit enriches with 100+ data points</p>
                <p className="text-green-400 text-sm">5 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">AI verifies across multiple databases</p>
                <p className="text-green-400 text-sm">40 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Scored, routed, and HubSpot updated</p>
                <p className="text-green-400 text-sm">Under 3 minutes total</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
            <p className="text-green-400 font-semibold">Total: 3 minutes</p>
            <p className="text-gray-400 text-sm">3x more leads, consistent quality, higher conversion</p>
          </div>
        </div>
      </div>
    </div>
  );
}