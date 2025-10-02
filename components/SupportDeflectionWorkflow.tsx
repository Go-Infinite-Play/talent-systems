'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Headphones,
  Brain,
  Search,
  MessageSquare,
  CheckCircle,
  Clock,
  DollarSign,
  Users,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Bot,
  ThumbsUp,
  UserPlus,
  Zap,
  HelpCircle
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

export default function SupportDeflectionWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'ticket',
      title: 'Customer Inquiry',
      description: 'Support ticket or chat initiated',
      time: '0:00',
      icon: Headphones,
      details: [
        'Zendesk ticket created',
        'Chat widget activated',
        'Email inquiry received',
        '24/7 availability'
      ],
      status: 'waiting',
      output: 'Password reset request'
    },
    {
      id: 'classification',
      title: 'AI Classification',
      description: 'Determine issue type and complexity',
      time: '0:02',
      icon: Brain,
      details: [
        'Natural language processing',
        'Intent classification',
        'Sentiment analysis',
        'Urgency detection'
      ],
      status: 'waiting',
      output: 'Tier 1: Password reset'
    },
    {
      id: 'knowledge',
      title: 'Knowledge Search',
      description: 'Search internal documentation',
      time: '0:05',
      icon: Search,
      details: [
        'Query knowledge base',
        'Find relevant SOPs',
        'Check recent solutions',
        'Identify best practices'
      ],
      status: 'waiting',
      output: '3 relevant articles found'
    },
    {
      id: 'solution',
      title: 'Generate Solution',
      description: 'AI creates personalized response',
      time: '0:08',
      icon: MessageSquare,
      details: [
        'Personalized instructions',
        'Step-by-step guidance',
        'Include screenshots/videos',
        'Alternative solutions'
      ],
      status: 'waiting',
      output: 'Solution with 5 steps'
    },
    {
      id: 'delivery',
      title: 'Deliver Response',
      description: 'Send solution to customer',
      time: '0:10',
      icon: CheckCircle,
      details: [
        'Format for channel',
        'Add branding elements',
        'Include follow-up options',
        'Track engagement'
      ],
      status: 'waiting',
      output: 'Response sent'
    },
    {
      id: 'resolution',
      title: 'Confirm Resolution',
      description: 'Verify issue resolved',
      time: '0:15',
      icon: ThumbsUp,
      details: [
        'Customer confirms success',
        'Satisfaction rating collected',
        'Case closed automatically',
        'Analytics updated'
      ],
      status: 'waiting',
      output: '5-star rating received'
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

  // Common support issues handled
  const supportMetrics = {
    totalDeflected: "14,560/month",
    avgResolutionTime: "15 seconds",
    satisfactionScore: "4.7/5.0",
    costPerTicket: "$0.02 vs $15",
    availability: "24/7/365"
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">Tier 1 Support Deflection Agent</h2>
        <p className="text-gray-400">
          70% of support tickets resolved instantly without human intervention
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
              <p className="text-gray-400 text-sm">Resolution Time</p>
              <p className="text-white font-bold text-xl">15 seconds</p>
              <p className="text-red-400 text-xs line-through">15-30 min before</p>
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
              <p className="text-white font-bold text-xl">$280K</p>
              <p className="text-green-400 text-xs">20 hrs/week saved</p>
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
              <p className="text-gray-400 text-sm">Deflection Rate</p>
              <p className="text-white font-bold text-xl">70%</p>
              <p className="text-purple-400 text-xs">Industry leading</p>
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
            <Bot className="w-8 h-8 text-amber-400" />
            <div>
              <p className="text-gray-400 text-sm">Availability</p>
              <p className="text-white font-bold text-xl">24/7</p>
              <p className="text-amber-400 text-xs">Never sleeps</p>
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
                : 'bg-gradient-to-r from-amber-600 to-orange-600 hover:shadow-lg text-white'
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
            <AlertCircle className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Handles 70% of all support tickets</span>
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
              className="h-full bg-gradient-to-r from-amber-500 to-orange-600"
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
                      status === 'completed' ? 'bg-amber-500' : 'bg-gray-700'
                    }`}
                    style={{ transform: 'translateX(50%)' }}
                  />
                )}

                {/* Step Card */}
                <div
                  className={`relative z-10 p-4 rounded-xl border transition-all ${
                    status === 'completed'
                      ? 'bg-amber-900/20 border-amber-500'
                      : status === 'processing'
                      ? 'bg-orange-900/20 border-orange-500 shadow-lg shadow-orange-500/20'
                      : 'bg-gray-800/50 border-gray-700'
                  }`}
                >
                  {/* Icon */}
                  <div className="flex justify-center mb-3">
                    <motion.div
                      className={`w-20 h-20 rounded-full flex items-center justify-center ${
                        status === 'completed'
                          ? 'bg-amber-500'
                          : status === 'processing'
                          ? 'bg-gradient-to-r from-amber-500 to-orange-600'
                          : 'bg-gray-700'
                      }`}
                      animate={status === 'processing' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(251, 191, 36, 0)',
                          '0 0 0 20px rgba(251, 191, 36, 0.2)',
                          '0 0 0 0 rgba(251, 191, 36, 0)'
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
                      className="mt-2 p-2 bg-amber-900/30 rounded-lg"
                    >
                      <p className="text-amber-400 text-xs text-center font-medium">
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

        {/* Common Issues Handled */}
        {currentStep >= workflowSteps.length - 1 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-gradient-to-r from-amber-900/20 to-orange-900/20 rounded-xl border border-amber-500/30"
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Common Issues Handled Automatically
            </h4>
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="bg-gray-800/50 rounded-lg p-3">
                <HelpCircle className="w-5 h-5 text-cyan-400 mb-2" />
                <p className="text-white font-medium text-sm">Password Resets</p>
                <p className="text-gray-400 text-xs">3,200/month • 10 sec avg</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <UserPlus className="w-5 h-5 text-green-400 mb-2" />
                <p className="text-white font-medium text-sm">Account Access</p>
                <p className="text-gray-400 text-xs">2,100/month • 15 sec avg</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-3">
                <MessageSquare className="w-5 h-5 text-purple-400 mb-2" />
                <p className="text-white font-medium text-sm">Billing Questions</p>
                <p className="text-gray-400 text-xs">1,800/month • 20 sec avg</p>
              </div>
            </div>
            <div className="grid grid-cols-5 gap-3 text-center">
              <div>
                <p className="text-gray-400 text-xs">Tickets Deflected</p>
                <p className="text-white font-bold">{supportMetrics.totalDeflected}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Avg Resolution</p>
                <p className="text-cyan-400 font-bold">{supportMetrics.avgResolutionTime}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Satisfaction</p>
                <p className="text-green-400 font-bold">{supportMetrics.satisfactionScore}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Cost/Ticket</p>
                <p className="text-amber-400 font-bold">{supportMetrics.costPerTicket}</p>
              </div>
              <div>
                <p className="text-gray-400 text-xs">Availability</p>
                <p className="text-purple-400 font-bold">{supportMetrics.availability}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Impact Summary */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Before AI (Manual Support)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">1</span>
              </div>
              <div>
                <p className="text-gray-300">Customer submits ticket</p>
                <p className="text-red-400 text-sm">Waits in queue</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-300">Agent picks up ticket (business hours only)</p>
                <p className="text-red-400 text-sm">15-30 min wait average</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-300">Agent researches issue manually</p>
                <p className="text-red-400 text-sm">5-10 minutes</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-300">Response sent, possible back-and-forth</p>
                <p className="text-red-400 text-sm">Multiple touches common</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800/50">
            <p className="text-red-400 font-semibold">Business hours only</p>
            <p className="text-gray-400 text-sm">15-20 hours/week on basic issues</p>
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
                <p className="text-gray-300">Customer submits inquiry</p>
                <p className="text-green-400 text-sm">Instant response begins</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">AI classifies and searches knowledge</p>
                <p className="text-green-400 text-sm">5 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Personalized solution delivered</p>
                <p className="text-green-400 text-sm">10 seconds</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Issue resolved, satisfaction captured</p>
                <p className="text-green-400 text-sm">70% first-touch resolution</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
            <p className="text-green-400 font-semibold">24/7/365 availability</p>
            <p className="text-gray-400 text-sm">Agents focus on complex issues</p>
          </div>
        </div>
      </div>
    </div>
  );
}