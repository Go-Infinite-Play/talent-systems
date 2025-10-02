'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileCheck,
  Shield,
  CheckCircle,
  Sparkles,
  Clock,
  DollarSign,
  Users,
  Zap,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  TrendingUp,
  Eye,
  Database,
  Send
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

export default function SpotlightComplianceWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'submission',
      title: 'Profile Submission',
      description: 'Performer submits profile with photos, credits, and media',
      time: 'T+0s',
      icon: FileCheck,
      details: [
        'Profile information submitted',
        'Photos uploaded (headshots, full body)',
        'Performance credits listed',
        'Media files attached'
      ],
      status: 'waiting',
      output: 'Submission received'
    },
    {
      id: 'photo-scan',
      title: 'Photo Quality Check',
      description: 'Gemini 2.5 AI scans photos for quality and compliance',
      time: 'T+2s',
      icon: Eye,
      details: [
        'Image resolution validation',
        'Quality assessment via Gemini 2.5',
        'Appropriateness check',
        'Professional standards verification'
      ],
      status: 'waiting',
      output: 'All photos approved'
    },
    {
      id: 'credit-verify',
      title: 'Credit Verification',
      description: 'AI verifies credits against production databases',
      time: 'T+5s',
      icon: Database,
      details: [
        'IMDB database cross-reference',
        'Industry production database check',
        'Role and project validation',
        'Date accuracy verification'
      ],
      status: 'waiting',
      output: '8 credits verified'
    },
    {
      id: 'tech-validation',
      title: 'Technical Validation',
      description: 'Automated media specifications and format checks',
      time: 'T+7s',
      icon: Shield,
      details: [
        'File format validation',
        'Media codec verification',
        'Resolution requirements check',
        'File size compliance'
      ],
      status: 'waiting',
      output: 'All specs validated'
    },
    {
      id: 'feedback',
      title: 'Instant Feedback',
      description: 'Real-time guidance sent to performer',
      time: 'T+8s',
      icon: Send,
      details: [
        'Automated approval notification',
        'Specific correction guidance if needed',
        'Next steps communicated',
        'Support resources provided'
      ],
      status: 'waiting',
      output: 'Approval sent'
    },
    {
      id: 'approval',
      title: 'Profile Live',
      description: 'Profile approved and visible on platform',
      time: 'T+10s',
      icon: CheckCircle,
      details: [
        'Profile published to platform',
        'Searchable by casting directors',
        'Agent notified of approval',
        'Analytics tracking enabled'
      ],
      status: 'waiting',
      output: 'Profile live'
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
      }, 2000);
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

  // Example performer profile
  const exampleProfile = {
    name: "Sarah Mitchell",
    type: "Professional Actor",
    credits: "8 verified credits",
    approvalTime: "1 week → 10 seconds",
    timeToAudition: "7 days → Same day",
    moderatorTime: "18 hrs/week → 2 hrs/week"
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Spotlight Compliance Automation</h2>
        <p className="text-gray-400">
          Transforming week-long approval delays into same-day verification
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
              <p className="text-gray-400 text-sm">Approval Time</p>
              <p className="text-white font-bold text-xl">Same Day</p>
              <p className="text-red-400 text-xs line-through">1 week before</p>
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
              <p className="text-white font-bold text-xl">$125K</p>
              <p className="text-green-400 text-xs">from efficiency gains</p>
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
              <p className="text-gray-400 text-sm">Time Saved</p>
              <p className="text-white font-bold text-xl">18 hrs/wk</p>
              <p className="text-purple-400 text-xs">moderator capacity</p>
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
              <p className="text-gray-400 text-sm">Accuracy Rate</p>
              <p className="text-white font-bold text-xl">100%</p>
              <p className="text-amber-400 text-xs">AI validation</p>
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
            <Sparkles className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Automated on every profile submission</span>
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
              Real Example: {exampleProfile.name}
            </h4>
            <div className="grid grid-cols-3 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Profile Type</p>
                <p className="text-white font-medium">{exampleProfile.type}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Verification Status</p>
                <p className="text-green-400 font-medium">{exampleProfile.credits}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Time to Live</p>
                <p className="text-cyan-400 font-medium">{exampleProfile.approvalTime}</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
              <p className="text-amber-400 text-sm">
                <AlertCircle className="inline w-4 h-4 mr-1" />
                Without AI: This performer would wait 1 week for approval, missing time-sensitive auditions
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Impact Summary */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Before AI (Manual Review)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">1</span>
              </div>
              <div>
                <p className="text-gray-300">Moderators manually check every photo</p>
                <p className="text-red-400 text-sm">12-18 hours/week</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-300">Manually verify credits against databases</p>
                <p className="text-red-400 text-sm">3-5 hours per day</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-300">Check technical specifications manually</p>
                <p className="text-red-400 text-sm">2 hours per day</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-300">Send feedback and approval notifications</p>
                <p className="text-red-400 text-sm">Week-long bottleneck</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800/50">
            <p className="text-red-400 font-semibold">Total: 1 week approval time</p>
            <p className="text-gray-400 text-sm">Frustrated performers and agents</p>
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
                <p className="text-gray-300">Gemini 2.5 Vision scans all photos instantly</p>
                <p className="text-green-400 text-sm">2 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Automated database credit verification</p>
                <p className="text-green-400 text-sm">3 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Technical validation runs automatically</p>
                <p className="text-green-400 text-sm">2 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Instant feedback and approval notification</p>
                <p className="text-green-400 text-sm">Same-day approval</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
            <p className="text-green-400 font-semibold">Total: Same day approval</p>
            <p className="text-gray-400 text-sm">Edge cases escalated to human moderators</p>
          </div>
        </div>
      </div>
    </div>
  );
}
