'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Database,
  Brain,
  Palette,
  Send,
  ChartBar,
  Clock,
  DollarSign,
  Users,
  Zap,
  CheckCircle,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  TrendingUp,
  Calendar
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  title: string;
  description: string;
  time: string;
  icon: React.ComponentType<{ className?: string }>;
  details: string[];
  status: 'waiting' | 'processing' | 'completed';
  output?: string;
}

export default function HighValueJobWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'trigger',
      title: 'Morning Trigger',
      description: 'Agent activates at 8:00 AM & 2:00 PM daily',
      time: '8:00 AM',
      icon: Clock,
      details: [
        'Automated schedule trigger',
        'No human intervention required',
        'Runs 7 days a week',
        'Parallel processing enabled'
      ],
      status: 'waiting',
      output: 'Workflow initiated'
    },
    {
      id: 'data-pull',
      title: 'Pull from Snowflake',
      description: 'Query all new jobs posted in last 12 hours',
      time: '8:00:05 AM',
      icon: Database,
      details: [
        'Connects via Snowflake Cortex',
        'Queries across 7 platforms',
        'Returns 150-200 new jobs',
        'Includes full job descriptions'
      ],
      status: 'waiting',
      output: '187 new jobs retrieved'
    },
    {
      id: 'analysis',
      title: 'Identify High-Value Jobs',
      description: 'AI analyzes for premium brands & budgets',
      time: '8:00:15 AM',
      icon: Brain,
      details: [
        'Scans for brands: Toyota, Amazon, Nike, Apple',
        'Checks budget thresholds ($10K+)',
        'Identifies union/non-union',
        'Flags celebrity casting calls'
      ],
      status: 'waiting',
      output: '12 high-value jobs identified'
    },
    {
      id: 'creative',
      title: 'Generate Creative Assets',
      description: 'Canva API creates custom graphics',
      time: '8:00:45 AM',
      icon: Palette,
      details: [
        'Pulls brand colors and logos',
        'Creates 3 variations per job',
        'Optimizes for each platform',
        'A/B test variations included'
      ],
      status: 'waiting',
      output: '36 creatives generated'
    },
    {
      id: 'distribution',
      title: 'Distribute to Channels',
      description: 'Send to social team & paid agencies',
      time: '8:01:30 AM',
      icon: Send,
      details: [
        'Instagram: Story + Feed posts',
        'Facebook: Targeted campaigns',
        'Email: Talent agent blast',
        'Paid media: Google/Meta ads'
      ],
      status: 'waiting',
      output: 'Distributed to 6 channels'
    },
    {
      id: 'tracking',
      title: 'Track Performance',
      description: 'Monitor engagement & applications',
      time: 'Continuous',
      icon: ChartBar,
      details: [
        'Real-time application tracking',
        'Engagement metrics monitoring',
        'Conversion rate analysis',
        'ROI calculation per campaign'
      ],
      status: 'waiting',
      output: '3.2x application increase'
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

  // Example job that gets promoted
  const exampleJob = {
    title: "Toyota Commercial - Lead Actor",
    brand: "Toyota",
    budget: "$125,000",
    location: "Los Angeles, CA",
    submissions: "0 → 847 in 4 hours",
    timeToFill: "48 hours → 12 hours"
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">High-Value Job Promotion Agent</h2>
        <p className="text-gray-400">
          Transforming 5-day manual process into minutes of automated excellence
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
              <p className="text-white font-bold text-xl">2 minutes</p>
              <p className="text-red-400 text-xs line-through">5 days before</p>
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
              <p className="text-white font-bold text-xl">$156K</p>
              <p className="text-green-400 text-xs">+$350K opportunity</p>
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
              <p className="text-gray-400 text-sm">Jobs Promoted</p>
              <p className="text-white font-bold text-xl">24/day</p>
              <p className="text-purple-400 text-xs">8,760/year</p>
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
              <p className="text-gray-400 text-sm">Efficiency Gain</p>
              <p className="text-white font-bold text-xl">3,600x</p>
              <p className="text-amber-400 text-xs">faster delivery</p>
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
                : 'bg-gradient-to-r from-cyan-600 to-blue-600 hover:shadow-lg text-white'
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
            <Calendar className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Runs daily at 8:00 AM & 2:00 PM</span>
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
              className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
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
                      status === 'completed' ? 'bg-green-500' : 'bg-gray-700'
                    }`}
                    style={{ transform: 'translateX(50%)' }}
                  />
                )}

                {/* Step Card */}
                <div
                  className={`relative z-10 p-4 rounded-xl border transition-all ${
                    status === 'completed'
                      ? 'bg-green-900/20 border-green-500'
                      : status === 'processing'
                      ? 'bg-cyan-900/20 border-cyan-500 shadow-lg shadow-cyan-500/20'
                      : 'bg-gray-800/50 border-gray-700'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        status === 'completed'
                          ? 'bg-green-500'
                          : status === 'processing'
                          ? 'bg-gradient-to-r from-cyan-500 to-blue-600'
                          : 'bg-gray-700'
                      }`}
                      animate={status === 'processing' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(6, 182, 212, 0)',
                          '0 0 0 20px rgba(6, 182, 212, 0.2)',
                          '0 0 0 0 rgba(6, 182, 212, 0)'
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
                      className="mt-2 p-2 bg-green-900/30 rounded-lg"
                    >
                      <p className="text-green-400 text-xs text-center font-medium">
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
            className="mt-8 p-6 bg-gradient-to-r from-green-900/20 to-cyan-900/20 rounded-xl border border-green-500/30"
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Real Example: {exampleJob.title}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Brand & Budget</p>
                <p className="text-white font-medium">{exampleJob.brand} • {exampleJob.budget}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Application Velocity</p>
                <p className="text-green-400 font-medium">{exampleJob.submissions}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Time to Fill Role</p>
                <p className="text-cyan-400 font-medium">{exampleJob.timeToFill}</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
              <p className="text-amber-400 text-sm">
                <AlertCircle className="inline w-4 h-4 mr-1" />
                Without AI: This role would have expired before manual promotion (5-day lag)
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
                <p className="text-gray-300">Carolyn manually reviews jobs (Monday/Wednesday)</p>
                <p className="text-red-400 text-sm">5-10 hours/week</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-300">Identify high-value roles by reading descriptions</p>
                <p className="text-red-400 text-sm">2 hours parsing text</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-300">Request creative from overnight vendor</p>
                <p className="text-red-400 text-sm">2-day turnaround</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-300">Review, approve, and deploy to channels</p>
                <p className="text-red-400 text-sm">Day 5 deployment</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800/50">
            <p className="text-red-400 font-semibold">Total: 5 days</p>
            <p className="text-gray-400 text-sm">High-value roles often expire before promotion</p>
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
                <p className="text-gray-300">Automatic trigger at 8 AM & 2 PM daily</p>
                <p className="text-green-400 text-sm">0 human hours</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">AI identifies brands & budgets instantly</p>
                <p className="text-green-400 text-sm">10 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Canva API generates variations automatically</p>
                <p className="text-green-400 text-sm">30 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Instant distribution to all channels</p>
                <p className="text-green-400 text-sm">Under 2 minutes total</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
            <p className="text-green-400 font-semibold">Total: 2 minutes</p>
            <p className="text-gray-400 text-sm">Jobs promoted while they&apos;re still fresh</p>
          </div>
        </div>
      </div>
    </div>
  );
}