'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Code,
  Brain,
  FileText,
  GitBranch,
  PlayCircle,
  CheckCircle,
  Clock,
  DollarSign,
  Rocket,
  AlertCircle,
  Play,
  Pause,
  RotateCcw,
  ChevronRight,
  Bug,
  Zap,
  Terminal,
  Shield
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

export default function TestGenerationWorkflow() {
  const [currentStep, setCurrentStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showDetails, setShowDetails] = useState(true);

  const workflowSteps: WorkflowStep[] = [
    {
      id: 'requirement',
      title: 'Read Requirements',
      description: 'AI analyzes JIRA ticket/PRD',
      time: '0:00',
      icon: FileText,
      details: [
        'Parse JIRA acceptance criteria',
        'Extract user stories',
        'Identify edge cases',
        'Map test scenarios'
      ],
      status: 'waiting',
      output: '12 test scenarios identified'
    },
    {
      id: 'analysis',
      title: 'Analyze Code',
      description: 'Understand implementation details',
      time: '0:10',
      icon: Code,
      details: [
        'Scan code changes',
        'Identify functions/methods',
        'Map dependencies',
        'Find critical paths'
      ],
      status: 'waiting',
      output: '8 critical paths found'
    },
    {
      id: 'generation',
      title: 'Generate Tests',
      description: 'AI creates comprehensive test suite',
      time: '0:30',
      icon: Brain,
      details: [
        'Unit tests for functions',
        'Integration test scenarios',
        'Edge case coverage',
        'Error handling tests'
      ],
      status: 'waiting',
      output: '84 tests generated'
    },
    {
      id: 'playwright',
      title: 'Create Playwright',
      description: 'Convert to executable E2E tests',
      time: '0:45',
      icon: Terminal,
      details: [
        'Page object models',
        'User flow automation',
        'Cross-browser tests',
        'Visual regression checks'
      ],
      status: 'waiting',
      output: 'E2E suite ready'
    },
    {
      id: 'execution',
      title: 'Run Tests',
      description: 'Execute across all browsers',
      time: '1:00',
      icon: PlayCircle,
      details: [
        'Chrome, Firefox, Safari',
        'Mobile viewports',
        'Parallel execution',
        'Performance metrics'
      ],
      status: 'waiting',
      output: '84/84 tests passed'
    },
    {
      id: 'report',
      title: 'Generate Report',
      description: 'Comprehensive test results',
      time: '1:15',
      icon: CheckCircle,
      details: [
        'Coverage metrics',
        'Performance data',
        'Screenshots/videos',
        'Actionable insights'
      ],
      status: 'waiting',
      output: '98% code coverage'
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

  // Example test metrics
  const testMetrics = {
    feature: "User Authentication Flow",
    testsWritten: "84 tests in 75 seconds",
    coverage: "98% code, 100% critical paths",
    bugsFound: "3 edge cases discovered",
    timeToRelease: "3 hours → Ready to deploy"
  };

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">AI Test Generation & Automation</h2>
        <p className="text-gray-400">
          From requirements to production-ready tests in minutes, enabling daily releases
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
              <p className="text-gray-400 text-sm">Regression Testing</p>
              <p className="text-white font-bold text-xl">3 hours</p>
              <p className="text-red-400 text-xs line-through">3-5 days before</p>
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
              <p className="text-white font-bold text-xl">$180K</p>
              <p className="text-green-400 text-xs">QA efficiency</p>
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
            <Rocket className="w-8 h-8 text-purple-400" />
            <div>
              <p className="text-gray-400 text-sm">Release Frequency</p>
              <p className="text-white font-bold text-xl">Daily</p>
              <p className="text-purple-400 text-xs">vs 2-4 weeks</p>
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
            <Shield className="w-8 h-8 text-amber-400" />
            <div>
              <p className="text-gray-400 text-sm">Test Coverage</p>
              <p className="text-white font-bold text-xl">98%</p>
              <p className="text-amber-400 text-xs">vs 60% manual</p>
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
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:shadow-lg text-white'
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
            <GitBranch className="w-5 h-5 text-gray-400" />
            <span className="text-gray-400">Runs on every pull request</span>
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
              className="h-full bg-gradient-to-r from-blue-500 to-indigo-600"
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
                      status === 'completed' ? 'bg-blue-500' : 'bg-gray-700'
                    }`}
                    style={{ transform: 'translateX(50%)' }}
                  />
                )}

                {/* Step Card */}
                <div
                  className={`relative z-10 p-4 rounded-xl border transition-all ${
                    status === 'completed'
                      ? 'bg-blue-900/20 border-blue-500'
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
                          ? 'bg-blue-500'
                          : status === 'processing'
                          ? 'bg-gradient-to-r from-blue-500 to-indigo-600'
                          : 'bg-gray-700'
                      }`}
                      animate={status === 'processing' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: [
                          '0 0 0 0 rgba(59, 130, 246, 0)',
                          '0 0 0 20px rgba(59, 130, 246, 0.2)',
                          '0 0 0 0 rgba(59, 130, 246, 0)'
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
                      className="mt-2 p-2 bg-blue-900/30 rounded-lg"
                    >
                      <p className="text-blue-400 text-xs text-center font-medium">
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
            className="mt-8 p-6 bg-gradient-to-r from-blue-900/20 to-indigo-900/20 rounded-xl border border-blue-500/30"
          >
            <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
              <Zap className="w-5 h-5 text-yellow-400" />
              Real Example: {testMetrics.feature}
            </h4>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Tests Written</p>
                <p className="text-white font-medium">{testMetrics.testsWritten}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Coverage Achieved</p>
                <p className="text-blue-400 font-medium">{testMetrics.coverage}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Issues Found</p>
                <p className="text-amber-400 font-medium">{testMetrics.bugsFound}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Time to Production</p>
                <p className="text-green-400 font-medium">{testMetrics.timeToRelease}</p>
              </div>
            </div>
            <div className="mt-4 p-3 bg-gray-900/50 rounded-lg">
              <p className="text-cyan-400 text-sm">
                <Bug className="inline w-4 h-4 mr-1" />
                AI discovered 3 edge cases humans missed, preventing production issues
              </p>
            </div>
          </motion.div>
        )}
      </div>

      {/* Impact Summary */}
      <div className="mt-8 grid grid-cols-2 gap-6">
        <div className="bg-gray-900/90 backdrop-blur-xl rounded-xl p-6 border border-gray-800">
          <h3 className="text-lg font-semibold text-white mb-4">Before AI (Manual Testing)</h3>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">1</span>
              </div>
              <div>
                <p className="text-gray-300">QA manually writes 6-8 test cases per ticket</p>
                <p className="text-red-400 text-sm">45 min per ticket</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">2</span>
              </div>
              <div>
                <p className="text-gray-300">Manual test execution across browsers</p>
                <p className="text-red-400 text-sm">2-3 hours per feature</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">3</span>
              </div>
              <div>
                <p className="text-gray-300">Full regression testing before release</p>
                <p className="text-red-400 text-sm">3-5 days with 4-5 people</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-red-400 text-xs">4</span>
              </div>
              <div>
                <p className="text-gray-300">Bugs discovered in production</p>
                <p className="text-red-400 text-sm">60% test coverage only</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-red-900/20 rounded-lg border border-red-800/50">
            <p className="text-red-400 font-semibold">2-4 week release cycles</p>
            <p className="text-gray-400 text-sm">Testing is the bottleneck</p>
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
                <p className="text-gray-300">AI generates comprehensive test suite</p>
                <p className="text-green-400 text-sm">75 seconds per feature</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Parallel execution across all browsers</p>
                <p className="text-green-400 text-sm">15 minutes total</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Complete regression in 3 hours</p>
                <p className="text-green-400 text-sm">Fully automated</p>
              </div>
            </li>
            <li className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                <span className="text-green-400 text-xs">✓</span>
              </div>
              <div>
                <p className="text-gray-300">Edge cases caught before production</p>
                <p className="text-green-400 text-sm">98% code coverage</p>
              </div>
            </li>
          </ul>
          <div className="mt-4 p-3 bg-green-900/20 rounded-lg border border-green-800/50">
            <p className="text-green-400 font-semibold">Daily releases possible</p>
            <p className="text-gray-400 text-sm">Netflix/Spotify level deployment</p>
          </div>
        </div>
      </div>
    </div>
  );
}