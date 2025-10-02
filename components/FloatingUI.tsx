'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '@/lib/store';
import {
  Activity,
  DollarSign,
  Users,
  Clock,
  TrendingUp,
  Pause,
  Play,
  Volume2,
  VolumeX,
  Sparkles,
  Target,
  Zap,
  Globe,
  Menu,
  X,
  Info,
  ChevronRight
} from 'lucide-react';
import { useState, useEffect } from 'react';

// Animated counter component
function AnimatedCounter({ value, prefix = '', suffix = '', decimals = 0 }: {
  value: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
}) {
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setDisplayValue(current);
    }, duration / steps);

    return () => clearInterval(timer);
  }, [value]);

  return (
    <span>
      {prefix}{displayValue.toFixed(decimals).toLocaleString()}{suffix}
    </span>
  );
}

// Floating metrics panel
export function MetricsPanel() {
  const { metrics } = useStore();
  const [isExpanded, setIsExpanded] = useState(true);

  const metricCards = [
    {
      icon: DollarSign,
      label: 'Annual Savings',
      value: metrics.annualSavings,
      prefix: '$',
      suffix: '',
      color: 'text-green-400',
      bgColor: 'bg-green-400/10'
    },
    {
      icon: Users,
      label: 'FTE Capacity',
      value: metrics.fteCapacity,
      prefix: '',
      suffix: ' FTE',
      color: 'text-blue-400',
      bgColor: 'bg-blue-400/10',
      decimals: 2
    },
    {
      icon: Clock,
      label: 'Hours Automated',
      value: metrics.hoursAutomated,
      prefix: '',
      suffix: '/year',
      color: 'text-purple-400',
      bgColor: 'bg-purple-400/10'
    },
    {
      icon: TrendingUp,
      label: 'ROI',
      value: metrics.roi,
      prefix: '',
      suffix: '%',
      color: 'text-amber-400',
      bgColor: 'bg-amber-400/10'
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      className="fixed top-20 left-4 z-50"
    >
      <motion.div
        layout
        className="bg-gray-900/90 backdrop-blur-lg rounded-2xl border border-gray-800 p-4 shadow-2xl"
      >
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-white font-semibold flex items-center gap-2">
            <Activity className="w-4 h-4 text-cyan-400" />
            Impact Metrics
          </h3>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-400 hover:text-white transition-colors"
          >
            {isExpanded ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>

        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="space-y-3"
            >
              {metricCards.map((metric) => (
                <motion.div
                  key={metric.label}
                  whileHover={{ scale: 1.02 }}
                  className={`${metric.bgColor} rounded-lg p-3 border border-gray-700/50`}
                >
                  <div className="flex items-center gap-3">
                    <metric.icon className={`w-5 h-5 ${metric.color}`} />
                    <div className="flex-1">
                      <p className="text-gray-400 text-xs">{metric.label}</p>
                      <p className={`${metric.color} text-xl font-bold`}>
                        <AnimatedCounter
                          value={metric.value}
                          prefix={metric.prefix}
                          suffix={metric.suffix}
                          decimals={metric.decimals || 0}
                        />
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}

// Control panel
export function ControlPanel() {
  const { isPaused, togglePause, soundEnabled, toggleSound, animationSpeed, setAnimationSpeed } = useStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-50"
    >
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-full border border-gray-800 px-6 py-3 shadow-2xl flex items-center gap-4">
        <button
          onClick={togglePause}
          className="text-white hover:text-cyan-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          {isPaused ? <Play className="w-5 h-5" /> : <Pause className="w-5 h-5" />}
        </button>

        <button
          onClick={toggleSound}
          className="text-white hover:text-cyan-400 transition-colors p-2 hover:bg-white/10 rounded-lg"
        >
          {soundEnabled ? <Volume2 className="w-5 h-5" /> : <VolumeX className="w-5 h-5" />}
        </button>

        <div className="flex items-center gap-2">
          <span className="text-gray-400 text-sm">Speed</span>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={animationSpeed}
            onChange={(e) => setAnimationSpeed(parseFloat(e.target.value))}
            className="w-24 accent-cyan-400"
          />
          <span className="text-white text-sm w-8">{animationSpeed}x</span>
        </div>
      </div>
    </motion.div>
  );
}

// Achievement notifications
export function AchievementToast({ achievement }: { achievement: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50, scale: 0.8 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.8 }}
      className="fixed top-4 right-4 z-50"
    >
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-4 shadow-2xl border border-purple-500/50">
        <div className="flex items-center gap-3">
          <Sparkles className="w-6 h-6 text-yellow-300 animate-pulse" />
          <div>
            <p className="text-white font-semibold">Achievement Unlocked!</p>
            <p className="text-purple-100">{achievement}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Tour guide
export function TourGuide() {
  const { viewMode, setViewMode } = useStore();
  const [tourStep, setTourStep] = useState(0);

  const tourSteps = [
    {
      title: 'Welcome to Talent Systems AI',
      description: 'Explore the future of entertainment industry infrastructure',
      target: 'data-nexus'
    },
    {
      title: 'The Data Nexus',
      description: '2M+ profiles powering instant insights',
      target: 'data-nexus'
    },
    {
      title: 'Casting Tower',
      description: '90% of North American commercials cast here',
      target: 'casting-tower'
    },
    {
      title: 'Marketing Engine',
      description: '10x content velocity with AI automation',
      target: 'marketing-engine'
    },
    {
      title: 'Sales Intelligence',
      description: 'Lead qualification in 3 minutes',
      target: 'sales-intelligence'
    }
  ];

  if (viewMode.type !== 'tour') {
    return (
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setViewMode({ type: 'tour', tourStep: 0 })}
        className="fixed top-4 right-4 z-50 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold shadow-lg flex items-center gap-2 hover:shadow-xl transition-all"
      >
        <Target className="w-5 h-5" />
        Start Tour
      </motion.button>
    );
  }

  const currentStep = tourSteps[tourStep];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-20 left-1/2 transform -translate-x-1/2 z-50 max-w-md"
    >
      <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-cyan-500/50 p-6 shadow-2xl">
        <div className="flex items-start justify-between mb-4">
          <div>
            <p className="text-cyan-400 text-sm mb-1">Step {tourStep + 1} of {tourSteps.length}</p>
            <h3 className="text-white text-xl font-bold">{currentStep.title}</h3>
          </div>
          <button
            onClick={() => setViewMode({ type: 'exploration' })}
            className="text-gray-400 hover:text-white"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-gray-300 mb-6">{currentStep.description}</p>

        <div className="flex items-center justify-between">
          <button
            onClick={() => setTourStep(Math.max(0, tourStep - 1))}
            disabled={tourStep === 0}
            className="text-gray-400 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex gap-1">
            {tourSteps.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${
                  index === tourStep ? 'bg-cyan-400' : 'bg-gray-600'
                }`}
              />
            ))}
          </div>

          {tourStep < tourSteps.length - 1 ? (
            <button
              onClick={() => setTourStep(tourStep + 1)}
              className="text-cyan-400 hover:text-cyan-300 flex items-center gap-1"
            >
              Next
              <ChevronRight className="w-4 h-4" />
            </button>
          ) : (
            <button
              onClick={() => setViewMode({ type: 'exploration' })}
              className="bg-cyan-500 text-white px-4 py-2 rounded-lg hover:bg-cyan-400 transition-colors"
            >
              Finish Tour
            </button>
          )}
        </div>
      </div>
    </motion.div>
  );
}

// Department detail panel
export function DepartmentDetail() {
  const { selectedNode, setSelectedNode } = useStore();

  const departmentDetails = {
    'casting-tower': {
      title: 'Casting Tower',
      subtitle: 'Where talent meets opportunity',
      features: [
        'FastCapture AI-powered audition review',
        '90% of North American commercials',
        'Automated scheduling and coordination',
        'Intelligent talent matching'
      ],
      metrics: {
        'Roles Cast': '150,000+/year',
        'Time Saved': '80%',
        'Accuracy': '95%'
      }
    },
    'marketing-engine': {
      title: 'Marketing Engine',
      subtitle: '10x content velocity',
      features: [
        'High-Value Job Agent automation',
        'Real-time job promotion',
        'AI-generated creative assets',
        'Multi-channel distribution'
      ],
      metrics: {
        'Content Speed': '10x faster',
        'Promotion Lag': '5 days → instant',
        'Reach': '2M+ talent'
      }
    },
    'sales-intelligence': {
      title: 'Sales Intelligence Center',
      subtitle: 'Predictive customer success',
      features: [
        'AI lead qualification',
        'Predictive churn prevention',
        'Automated follow-ups',
        'Customer health scoring'
      ],
      metrics: {
        'Qualification': '15 min → 3 min',
        'Churn Reduction': '25%',
        'Pipeline Growth': '40%'
      }
    }
  };

  const details = selectedNode && departmentDetails[selectedNode as keyof typeof departmentDetails];

  if (!details) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 50 }}
        className="fixed top-20 right-4 z-50 w-80"
      >
        <div className="bg-gray-900/95 backdrop-blur-lg rounded-2xl border border-gray-800 p-6 shadow-2xl">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-white text-xl font-bold">{details.title}</h3>
              <p className="text-gray-400 text-sm">{details.subtitle}</p>
            </div>
            <button
              onClick={() => setSelectedNode(null)}
              className="text-gray-400 hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-2">Key Features</h4>
              <ul className="space-y-2">
                {details.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2">
                    <Zap className="w-4 h-4 text-amber-400 mt-0.5" />
                    <span className="text-gray-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-cyan-400 text-sm font-semibold mb-2">Impact Metrics</h4>
              <div className="space-y-2">
                {Object.entries(details.metrics).map(([key, value]) => (
                  <div key={key} className="flex justify-between items-center">
                    <span className="text-gray-400 text-sm">{key}</span>
                    <span className="text-white font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}