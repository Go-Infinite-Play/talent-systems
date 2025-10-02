'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AI_AGENTS } from '@/lib/aiAgents';
import {
  Play,
  Pause,
  RotateCcw,
  Zap,
  Clock,
  DollarSign,
  CheckCircle,
  ArrowRight,
  Bot,
  User,
  Database,
  FileText,
  Send,
  AlertCircle
} from 'lucide-react';

interface WorkflowStep {
  id: string;
  label: string;
  type: 'ai' | 'human' | 'data' | 'output';
  duration: string;
  status: 'pending' | 'processing' | 'completed';
  icon: any;
}

export default function AgentWorkflow() {
  const [selectedAgent, setSelectedAgent] = useState(AI_AGENTS[2]); // High-Value Job Agent
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showComparison, setShowComparison] = useState(true);

  // High-Value Job Agent workflow example
  const highValueJobWorkflow: WorkflowStep[] = [
    {
      id: 'scan',
      label: 'Scan New Jobs (8AM/2PM)',
      type: 'ai',
      duration: '5 seconds',
      status: 'pending',
      icon: Database
    },
    {
      id: 'identify',
      label: 'Identify High-Value Brands',
      type: 'ai',
      duration: '2 seconds',
      status: 'pending',
      icon: Bot
    },
    {
      id: 'create',
      label: 'Generate Creative via Canva API',
      type: 'ai',
      duration: '10 seconds',
      status: 'pending',
      icon: FileText
    },
    {
      id: 'distribute',
      label: 'Distribute to Channels',
      type: 'ai',
      duration: '3 seconds',
      status: 'pending',
      icon: Send
    },
    {
      id: 'track',
      label: 'Track Performance',
      type: 'data',
      duration: 'Continuous',
      status: 'pending',
      icon: AlertCircle
    }
  ];

  // Manual process for comparison
  const manualWorkflow = [
    {
      label: 'Carolyn manually reviews jobs',
      duration: '5-10 hours/week',
      day: 'Monday/Wednesday'
    },
    {
      label: 'Identify high-value roles',
      duration: '2 hours',
      day: 'Day 1'
    },
    {
      label: 'Request creative from agency',
      duration: '2 days turnaround',
      day: 'Day 2-3'
    },
    {
      label: 'Review and approve creative',
      duration: '4 hours',
      day: 'Day 4'
    },
    {
      label: 'Deploy to channels',
      duration: '2 hours',
      day: 'Day 5'
    }
  ];

  // Simulate workflow progression
  useEffect(() => {
    if (!isPlaying || !selectedAgent.workflow) return;

    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        if (prev >= (selectedAgent.workflow?.length || 5) - 1) {
          setIsPlaying(false);
          return 0;
        }
        return prev + 1;
      });
    }, 2000);

    return () => clearInterval(timer);
  }, [isPlaying, selectedAgent]);

  const getStepStatus = (index: number) => {
    if (index < currentStep) return 'completed';
    if (index === currentStep) return 'processing';
    return 'pending';
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed bottom-20 left-4 right-4 z-40 max-w-6xl mx-auto"
    >
      <div className="bg-gray-900/95 backdrop-blur-xl rounded-2xl border border-gray-800 shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-800">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-bold text-white">AI Agent Workflow Visualization</h3>
              <p className="text-gray-400 mt-1">See how AI agents transform manual processes</p>
            </div>
            <div className="flex items-center gap-2">
              <select
                value={selectedAgent.id}
                onChange={(e) => {
                  const agent = AI_AGENTS.find(a => a.id === e.target.value);
                  if (agent) {
                    setSelectedAgent(agent);
                    setCurrentStep(0);
                    setIsPlaying(false);
                  }
                }}
                className="bg-gray-800 text-white px-4 py-2 rounded-lg border border-gray-700"
              >
                {AI_AGENTS.filter(a => a.workflow).map(agent => (
                  <option key={agent.id} value={agent.id}>
                    {agent.name}
                  </option>
                ))}
              </select>

              <button
                onClick={() => setShowComparison(!showComparison)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  showComparison
                    ? 'bg-cyan-600 text-white'
                    : 'bg-gray-800 text-gray-400 hover:bg-gray-700'
                }`}
              >
                {showComparison ? 'Hide' : 'Show'} Comparison
              </button>
            </div>
          </div>
        </div>

        {/* Agent Info */}
        <div className="p-6 border-b border-gray-800">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span className="text-gray-400 text-sm">Time Impact</span>
              </div>
              <p className="text-white font-semibold">{selectedAgent.impact.timeSaved}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign className="w-5 h-5 text-green-400" />
                <span className="text-gray-400 text-sm">Annual Savings</span>
              </div>
              <p className="text-white font-semibold">${selectedAgent.impact.costSaved.toLocaleString()}</p>
            </div>
            <div className="bg-gray-800/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-5 h-5 text-amber-400" />
                <span className="text-gray-400 text-sm">Efficiency Gain</span>
              </div>
              <p className="text-white font-semibold">{selectedAgent.impact.efficiency}</p>
            </div>
          </div>
        </div>

        {/* Workflow Visualization */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-lg font-semibold text-white">Automated Workflow</h4>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setCurrentStep(0);
                  setIsPlaying(false);
                }}
                className="p-2 bg-gray-800 text-gray-400 rounded-lg hover:bg-gray-700 transition-colors"
              >
                <RotateCcw className="w-4 h-4" />
              </button>
              <button
                onClick={() => setIsPlaying(!isPlaying)}
                className={`px-4 py-2 rounded-lg font-medium transition-all flex items-center gap-2 ${
                  isPlaying
                    ? 'bg-red-600 text-white'
                    : 'bg-green-600 text-white hover:bg-green-500'
                }`}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-4 h-4" />
                    Pause
                  </>
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Play Workflow
                  </>
                )}
              </button>
            </div>
          </div>

          {/* AI Workflow Steps */}
          <div className="relative">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-gray-700" />
            <div className="flex justify-between relative">
              {(selectedAgent.workflow || highValueJobWorkflow).map((step, index) => {
                const status = getStepStatus(index);
                const StepIcon = typeof step === 'string' ? Bot : (highValueJobWorkflow[index]?.icon || Bot);

                return (
                  <motion.div
                    key={index}
                    className="flex flex-col items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <motion.div
                      className={`w-16 h-16 rounded-full flex items-center justify-center relative z-10 ${
                        status === 'completed'
                          ? 'bg-green-600'
                          : status === 'processing'
                          ? 'bg-cyan-600'
                          : 'bg-gray-700'
                      }`}
                      animate={status === 'processing' ? {
                        scale: [1, 1.1, 1],
                        boxShadow: ['0 0 0 0 rgba(6, 182, 212, 0)', '0 0 0 10px rgba(6, 182, 212, 0.3)', '0 0 0 0 rgba(6, 182, 212, 0)']
                      } : {}}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {status === 'completed' ? (
                        <CheckCircle className="w-8 h-8 text-white" />
                      ) : (
                        <StepIcon className="w-8 h-8 text-white" />
                      )}
                    </motion.div>
                    <div className="mt-3 text-center max-w-[120px]">
                      <p className={`text-sm font-medium ${
                        status === 'pending' ? 'text-gray-500' : 'text-white'
                      }`}>
                        {typeof step === 'string' ? step : step.label}
                      </p>
                      {typeof step !== 'string' && (
                        <p className="text-xs text-gray-400 mt-1">{step.duration}</p>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Before/After Comparison */}
        <AnimatePresence>
          {showComparison && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="overflow-hidden"
            >
              <div className="p-6 border-t border-gray-800 bg-gray-800/30">
                <h4 className="text-lg font-semibold text-white mb-4">Manual Process (Before AI)</h4>
                <div className="space-y-3">
                  {manualWorkflow.map((step, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-3 bg-red-900/20 rounded-lg border border-red-800/30"
                    >
                      <div className="flex items-center justify-center w-10 h-10 rounded-full bg-red-600/20">
                        <User className="w-5 h-5 text-red-400" />
                      </div>
                      <div className="flex-1">
                        <p className="text-white text-sm">{step.label}</p>
                        <p className="text-red-400 text-xs mt-1">
                          {step.duration} • {step.day}
                        </p>
                      </div>
                      {index < manualWorkflow.length - 1 && (
                        <ArrowRight className="w-5 h-5 text-gray-600" />
                      )}
                    </div>
                  ))}
                  <div className="mt-4 p-4 bg-red-900/30 rounded-lg border border-red-800/50">
                    <p className="text-red-400 font-semibold">Total Time: 5 days</p>
                    <p className="text-gray-400 text-sm mt-1">
                      High-value commercial opportunities often expire before promotion
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}